import { ItemView, WorkspaceLeaf } from 'obsidian';
import type MerriamWebsterPlugin from '../main';
import { DictionaryResult, ThesaurusResult } from './merriamWebsterApi';

export const VIEW_TYPE_DEFINITIONS = 'merriam-webster-definitions';

export default class DefinitionsView extends ItemView {
  plugin: MerriamWebsterPlugin;
  word: string = '';

  constructor(leaf: WorkspaceLeaf, plugin: MerriamWebsterPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType(): string {
    return VIEW_TYPE_DEFINITIONS;
  }

  getDisplayText(): string {
    return 'Definitions';
  }

  async onOpen() {
    this.containerEl.classList.add('mw-definitions-view');
    this.render();
  }

  async setWord(word: string) {
    this.word = word;
    await this.render();
  }

  private async render() {
    const { containerEl } = this;
    containerEl.empty();

    const search = containerEl.createEl('input', { type: 'text' });
    search.value = this.word;
    search.placeholder = 'Look up word';
    search.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        await this.setWord(search.value.trim());
      }
    });

    if (!this.word) {
      return;
    }

    const defsDiv = containerEl.createDiv('mw-definitions');
    defsDiv.createEl('h3', { text: `Definitions of ${this.word}` });
    try {
      const defs: DictionaryResult = await this.plugin.lookupDefinitions(this.word);
      const list = defsDiv.createEl('ul');
      for (const d of defs.definitions) {
        list.createEl('li', { text: d });
      }
    } catch (err) {
      defsDiv.createEl('div', { text: String(err) });
    }

    const synDiv = containerEl.createDiv('mw-synonyms');
    synDiv.createEl('h3', { text: 'Synonyms' });
    try {
      const syns: ThesaurusResult = await this.plugin.lookupSynonyms(this.word);
      const list = synDiv.createEl('ul');
      for (const s of syns.synonyms) {
        list.createEl('li', { text: s });
      }
    } catch (err) {
      synDiv.createEl('div', { text: String(err) });
    }
  }
}


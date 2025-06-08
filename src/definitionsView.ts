import { ItemView, WorkspaceLeaf } from 'obsidian';
import type MerriamWebsterPlugin from '../main';
import { DictionaryResult, ThesaurusResult } from './merriamWebsterApi';

function toTitleCase(str: string): string {
  return str
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

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
    return 'Definitions View';
  }

  getIcon(): string {
    return 'book';
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

    let defsDiv: HTMLDivElement;
    let synDiv: HTMLDivElement;
    if (this.plugin.settings.synonymsOnTop) {
      synDiv = containerEl.createDiv('mw-synonyms');
      defsDiv = containerEl.createDiv('mw-definitions');
    } else {
      defsDiv = containerEl.createDiv('mw-definitions');
      synDiv = containerEl.createDiv('mw-synonyms');
    }
    try {
      const defs: DictionaryResult = await this.plugin.lookupDefinitions(this.word);
      defsDiv.createEl('h3', { text: toTitleCase(this.word) });
      if (defs.pluralForm) {
        defsDiv.createEl('div', { text: `Plural: ${defs.pluralForm}` });
      }
      for (const entry of defs.entries) {
        if (entry.wordType) {
          defsDiv.createEl('h4', { text: entry.wordType });
        }
        const list = defsDiv.createEl('ol');
        for (const d of entry.definitions) {
          const clean = d.charAt(0).toUpperCase() + d.slice(1);
          list.createEl('li', { text: clean });
        }
        if (entry.examples.length > 0) {
          defsDiv.createEl('h5', { text: 'Usage' });
          const usage = defsDiv.createEl('ul');
          for (const ex of entry.examples) {
            usage.createEl('li', { text: ex });
          }
        }
      }
    } catch (err) {
      defsDiv.createEl('div', { text: String(err) });
    }

    synDiv.createEl('h3', { text: 'Synonyms' });
    try {
      const syns: ThesaurusResult = await this.plugin.lookupSynonyms(this.word);
      const list = synDiv.createEl('ul');
      for (const s of syns.synonyms) {
        const li = list.createEl('li');
        const btn = li.createEl('button', { text: toTitleCase(s) });
        btn.addEventListener('click', () => {
          this.setWord(s);
        });
      }
    } catch (err) {
      synDiv.createEl('div', { text: String(err) });
    }
  }
}


import { ItemView, WorkspaceLeaf } from 'obsidian';
import type MerriamWebsterPlugin from '../main';
import {
  DictionaryResult,
  ThesaurusResult,
  ThesaurusSynonym,
} from './merriamWebsterApi';

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

    const defsDiv = containerEl.createDiv('mw-definitions');
    try {
      const defs: DictionaryResult = await this.plugin.lookupDefinitions(this.word);
      defsDiv.createEl('h3', { text: toTitleCase(this.word) });

      if (defs.pluralForms && defs.pluralForms.length > 0) {
        const pluralLine = defsDiv.createDiv();
        pluralLine.appendText('plural ');
        const first = defs.pluralForms[0];
        pluralLine.createEl('code', { text: first });
        for (let i = 1; i < defs.pluralForms.length; i++) {
          pluralLine.appendText(', ');
          pluralLine.createEl('em', { text: 'also' });
          pluralLine.appendText(' ');
          pluralLine.createEl('code', { text: defs.pluralForms[i] });
        }
      }

      const entriesOl = defsDiv.createEl('ol', { cls: 'mw-entry-list' });
      for (const entry of defs.entries) {
        const entryLi = entriesOl.createEl('li');
        if (entry.wordType) {
          entryLi.createEl('h4', { text: entry.wordType });
        }
        const defList = entryLi.createEl('ol');
        defList.type = 'a';
        for (const d of entry.definitions) {
          const clean = d.charAt(0).toUpperCase() + d.slice(1);
          const trimmed = clean.replace(/[.;!?]+$/, '');
          const words = trimmed.split(/\s+/);
          if (words.length === 1) {
            const li = defList.createEl('li');
            const btn = li.createEl('button', {
              text: trimmed,
              cls: 'mw-word-btn',
            });
            btn.addEventListener('click', () => {
              this.setWord(trimmed.toLowerCase());
            });
          } else {
            defList.createEl('li', { text: clean });
          }
        }
        if (entry.examples.length > 0) {
          entryLi.createEl('h5', { text: 'Usage' });
          for (const ex of entry.examples) {
            const forms = [this.word.toLowerCase()];
            if (defs.pluralForms) forms.push(...defs.pluralForms.map((p) => p.toLowerCase()));
            let html = ex;
            for (const f of forms) {
              const re = new RegExp(`\\b${f}\\b`, 'gi');
              html = html.replace(re, (m) => `<strong>${m}</strong>`);
            }
            const block = entryLi.createEl('blockquote');
            block.innerHTML = html;
          }
        }
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
        const li = list.createEl('li');
        const btn = li.createEl('button', {
          text: toTitleCase(s.word),
          cls: 'mw-word-btn',
        });
        const label = s.label?.toLowerCase();
        if (label) {
          if (label.includes('formal')) btn.addClass('mw-word-btn-formal');
          else if (label.includes('archaic')) btn.addClass('mw-word-btn-archaic');
          else if (label.includes('literary')) btn.addClass('mw-word-btn-literary');
        }
        btn.addEventListener('click', () => {
          this.setWord(s.word);
        });
      }
    } catch (err) {
      synDiv.createEl('div', { text: String(err) });
    }
  }
}


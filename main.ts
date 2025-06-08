import { App, Plugin, PluginSettingTab, Setting, Menu, WorkspaceLeaf, Notice } from 'obsidian';
import { fetchDictionary, fetchThesaurus, DictionaryResult, ThesaurusResult } from './src/merriamWebsterApi';
import DefinitionsView, { VIEW_TYPE_DEFINITIONS } from './src/definitionsView';

interface MerriamWebsterPluginSettings {
  dictionaryApiKey: string;
  thesaurusApiKey: string;
}

const DEFAULT_SETTINGS: MerriamWebsterPluginSettings = {
  dictionaryApiKey: '',
  thesaurusApiKey: '',
};

export default class MerriamWebsterPlugin extends Plugin {
  settings: MerriamWebsterPluginSettings;

  async openDefinitionsView(word: string) {
    let leaf: WorkspaceLeaf;
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_DEFINITIONS);
    if (leaves.length > 0) {
      leaf = leaves[0];
    } else {
      leaf = this.app.workspace.getRightLeaf(false) ?? this.app.workspace.getLeaf(true);
      await leaf.setViewState({ type: VIEW_TYPE_DEFINITIONS, active: true });
    }
    const view = leaf.view as DefinitionsView;
    await view.setWord(word);
    this.app.workspace.revealLeaf(leaf);
  }

  async onload() {
    await this.loadSettings();
    this.registerView(VIEW_TYPE_DEFINITIONS, (leaf) => new DefinitionsView(leaf, this));
    this.addSettingTab(new MerriamWebsterSettingTab(this.app, this));

    this.registerEvent(
      this.app.workspace.on('editor-menu', async (menu, editor) => {
        const selection = editor.getSelection().trim();
        if (!selection || /\s/.test(selection)) {
          return;
        }
        const word = selection;

        menu.addItem((item) => {
          item
            .setTitle('Define')
            .setIcon('book')
            .onClick(() => {
              this.openDefinitionsView(word);
            });
        });

        try {
          const syns = await this.lookupSynonyms(word);
          if (syns.synonyms.length > 0) {
            const subMenu = new Menu();
            for (const s of syns.synonyms.sort()) {
              subMenu.addItem((sub) =>
                sub.setTitle(s).onClick(() => {
                  editor.replaceSelection(s);
                })
              );
            }
            menu.addItem((item) => {
              item.setTitle('Synonyms');
              // @ts-ignore - setSubmenu is available at runtime
              item.setSubmenu(subMenu);
            });
          }
        } catch (err) {
          new Notice('Failed to fetch synonyms');
        }
      })
    );
  }

  onunload() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_DEFINITIONS);
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async lookupDefinitions(word: string): Promise<DictionaryResult> {
    return fetchDictionary(word, this.settings.dictionaryApiKey);
  }

  async lookupSynonyms(word: string): Promise<ThesaurusResult> {
    return fetchThesaurus(word, this.settings.thesaurusApiKey);
  }
}

class MerriamWebsterSettingTab extends PluginSettingTab {
  plugin: MerriamWebsterPlugin;

  constructor(app: App, plugin: MerriamWebsterPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();
    containerEl.createEl('h2', { text: 'Merriam-Webster Settings' });

    new Setting(containerEl)
      .setName('Dictionary API Key')
      .setDesc('Key used for dictionary lookups')
      .addText(text =>
        text
          .setPlaceholder('Enter your dictionary API key')
          .setValue(this.plugin.settings.dictionaryApiKey)
          .onChange(async value => {
            this.plugin.settings.dictionaryApiKey = value.trim();
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Thesaurus API Key')
      .setDesc('Key used for thesaurus lookups')
      .addText(text =>
        text
          .setPlaceholder('Enter your thesaurus API key')
          .setValue(this.plugin.settings.thesaurusApiKey)
          .onChange(async value => {
            this.plugin.settings.thesaurusApiKey = value.trim();
            await this.plugin.saveSettings();
          })
      );
  }
}

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
      this.app.workspace.on('editor-menu', (menu, editor) => {
        const selection = editor.getSelection().trim();
        if (!selection || /\s/.test(selection)) {
          return;
        }
        const word = selection;

        menu.addItem((item) => {
          item
            .setTitle('Define')
            .setIcon('book')
            .setSection('mw-dictionary')
            .onClick(() => {
              this.openDefinitionsView(word);
            });
        });
      })
    );

    this.addCommand({
      id: 'open-definitions-view',
      name: 'Open Definitions View',
      checkCallback: (checking: boolean) => {
        const open = this.app.workspace.getLeavesOfType(VIEW_TYPE_DEFINITIONS).length > 0;
        if (open) {
          return false;
        }
        if (!checking) {
          this.openDefinitionsView('');
        }
        return true;
      },
    });
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

    // Dictionary API key setting with validation
    const dictSetting = new Setting(containerEl)
      .setName('Dictionary API Key')
      .setDesc('Key used for dictionary lookups');

    const dictStatus = dictSetting.controlEl.createSpan({ cls: 'mw-api-status', text: '–' });

    dictSetting.addText((text) =>
      text
        .setPlaceholder('Enter your dictionary API key')
        .setValue(this.plugin.settings.dictionaryApiKey)
        .onChange(async (value) => {
          this.plugin.settings.dictionaryApiKey = value.trim();
          await this.plugin.saveSettings();
          dictStatus.setText('–');
          dictStatus.removeClass('success');
          dictStatus.removeClass('error');
        })
    );

    dictSetting.addButton((btn) => {
      btn.setButtonText('Validate').onClick(async () => {
        try {
          await this.plugin.lookupDefinitions('test');
          dictStatus.setText('✓');
          dictStatus.removeClass('error');
          dictStatus.addClass('success');
        } catch (err) {
          dictStatus.setText('✗');
          dictStatus.removeClass('success');
          dictStatus.addClass('error');
        }
      });
    });

    // Thesaurus API key setting with validation
    const thesSetting = new Setting(containerEl)
      .setName('Thesaurus API Key')
      .setDesc('Key used for thesaurus lookups');

    const thesStatus = thesSetting.controlEl.createSpan({ cls: 'mw-api-status', text: '–' });

    thesSetting.addText((text) =>
      text
        .setPlaceholder('Enter your thesaurus API key')
        .setValue(this.plugin.settings.thesaurusApiKey)
        .onChange(async (value) => {
          this.plugin.settings.thesaurusApiKey = value.trim();
          await this.plugin.saveSettings();
          thesStatus.setText('–');
          thesStatus.removeClass('success');
          thesStatus.removeClass('error');
        })
    );

    thesSetting.addButton((btn) => {
      btn.setButtonText('Validate').onClick(async () => {
        try {
          await this.plugin.lookupSynonyms('test');
          thesStatus.setText('✓');
          thesStatus.removeClass('error');
          thesStatus.addClass('success');
        } catch (err) {
          thesStatus.setText('✗');
          thesStatus.removeClass('success');
          thesStatus.addClass('error');
        }
      });
    });
  }
}

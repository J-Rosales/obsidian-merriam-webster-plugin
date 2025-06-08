import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { fetchDictionary, fetchThesaurus, DictionaryResult, ThesaurusResult } from './src/merriamWebsterApi';

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

  async onload() {
    await this.loadSettings();
    this.addSettingTab(new MerriamWebsterSettingTab(this.app, this));
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

import { App, Plugin, PluginSettingTab, Setting, Menu, WorkspaceLeaf, Notice } from 'obsidian';
import { fetchDictionary, fetchThesaurus, DictionaryResult, ThesaurusResult } from './src/merriamWebsterApi';
import DefinitionsView, { VIEW_TYPE_DEFINITIONS } from './src/definitionsView';

interface MerriamWebsterPluginSettings {
  dictionaryApiKey: string;
  thesaurusApiKey: string;
  synonymsOnTop: boolean;
  cacheSize: number;
  cache: CacheEntry[];
}

interface CacheEntry {
  word: string;
  dictionary: DictionaryResult;
  thesaurus: ThesaurusResult;
}

const DEFAULT_SETTINGS: MerriamWebsterPluginSettings = {
  dictionaryApiKey: '',
  thesaurusApiKey: '',
  synonymsOnTop: false,
  cacheSize: 0,
  cache: [],
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
    if (!Array.isArray(this.settings.cache)) {
      this.settings.cache = [];
    }
    if (this.settings.cacheSize < 0) {
      this.settings.cacheSize = 0;
    }
    if (
      this.settings.cacheSize >= 0 &&
      this.settings.cache.length > this.settings.cacheSize
    ) {
      this.settings.cache.splice(
        0,
        this.settings.cache.length - this.settings.cacheSize
      );
    }
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

  async lookupWord(word: string): Promise<{ defs: DictionaryResult; syns: ThesaurusResult }> {
    const [defs, syns] = await Promise.all([
      this.lookupDefinitions(word),
      this.lookupSynonyms(word),
    ]);
    await this.updateCache(word, defs, syns);
    return { defs, syns };
  }

  private async updateCache(word: string, defs: DictionaryResult, syns: ThesaurusResult) {
    // remove any existing entry for the same word
    this.settings.cache = this.settings.cache.filter((e) => e.word !== word);
    this.settings.cache.push({ word, dictionary: defs, thesaurus: syns });
    if (this.settings.cacheSize < 0) this.settings.cacheSize = 0;
    if (this.settings.cacheSize > 0 && this.settings.cache.length > this.settings.cacheSize) {
      this.settings.cache.splice(0, this.settings.cache.length - this.settings.cacheSize);
    }
    await this.saveSettings();
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

    new Setting(containerEl)
      .setName('Synonyms on Top')
      .setDesc('Show the synonyms section above definitions')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.synonymsOnTop)
          .onChange(async (value) => {
            this.plugin.settings.synonymsOnTop = value;
            await this.plugin.saveSettings();
          })
      );

    const cacheSetting = new Setting(containerEl)
      .setName('Cache size')
      .setDesc('')
      .addText((text) => {
        text.inputEl.type = 'number';
        text.inputEl.step = '1';
        text.inputEl.style.width = '6em';
        text
          .setPlaceholder('0')
          .setValue(String(this.plugin.settings.cacheSize))
          .onChange(async (value) => {
            const parsed = parseInt(value);
            const size = isNaN(parsed) ? 0 : Math.max(0, parsed);
            const old = this.plugin.settings.cacheSize;
            this.plugin.settings.cacheSize = size;
            if (
              size >= 0 &&
              old > size &&
              this.plugin.settings.cache.length > size
            ) {
              this.plugin.settings.cache.splice(
                0,
                this.plugin.settings.cache.length - size
              );
            }
            await this.plugin.saveSettings();
            updateCacheInfo();
          });
      });
    const infoEl = cacheSetting.descEl as HTMLElement;
    const formatCacheSize = () => {
      const bytes = new TextEncoder().encode(
        JSON.stringify(this.plugin.settings.cache)
      ).length;
      if (bytes >= 1024 * 1024) {
        return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
      }
      return `${(bytes / 1024).toFixed(1)} kB`;
    };
    const updateCacheInfo = () => {
      infoEl.setText(
        `Number of recent lookups to keep. Log size: ${formatCacheSize()}`
      );
    };
    updateCacheInfo();
  }
}

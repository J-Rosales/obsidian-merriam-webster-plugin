import { App, Plugin, PluginSettingTab, Setting, Menu, WorkspaceLeaf, Notice, MarkdownView } from 'obsidian';
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
  private hoverTimeout?: number;
  private hoverTooltipEl?: HTMLElement;

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

    this.setupHoverTooltip();
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

  private getCachedEntry(word: string): CacheEntry | undefined {
    const key = word.toLowerCase();
    return this.settings.cache.find((e) => e.word.toLowerCase() === key);
  }

  async lookupDefinitions(word: string): Promise<DictionaryResult> {
    const cached = this.getCachedEntry(word);
    if (cached) return cached.dictionary;
    return fetchDictionary(word, this.settings.dictionaryApiKey);
  }

  async lookupSynonyms(word: string): Promise<ThesaurusResult> {
    const cached = this.getCachedEntry(word);
    if (cached) return cached.thesaurus;
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

  private setupHoverTooltip() {
    const container = this.app.workspace.containerEl;
    this.registerDomEvent(container, 'mousemove', (e: MouseEvent) => {
      if (this.hoverTimeout) window.clearTimeout(this.hoverTimeout);
      this.hideHoverTooltip();
      this.hoverTimeout = window.setTimeout(() => this.maybeShowHoverTooltip(e), 1000);
    });
    this.registerDomEvent(container, 'keydown', () => this.hideHoverTooltip());
    this.registerDomEvent(container, 'mousedown', () => this.hideHoverTooltip());
  }

  private async maybeShowHoverTooltip(e: MouseEvent) {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    const editor = view?.editor;
    if (!editor) return;
    const selection = editor.getSelection().trim();
    if (!selection || /\s/.test(selection)) return;
    try {
      const result = await this.lookupSynonyms(selection);
      const list = Array.from(new Set(result.synonyms.map((s) => s.word)))
        .slice(0, 5)
        .join(', ');
      if (list) {
        this.showHoverTooltip(list, e.pageX + 10, e.pageY + 10);
      }
    } catch (err) {
      /* ignore errors */
    }
  }

  private showHoverTooltip(text: string, x: number, y: number) {
    if (!this.hoverTooltipEl) {
      this.hoverTooltipEl = createDiv({ cls: 'mw-hover-tooltip' });
      document.body.appendChild(this.hoverTooltipEl);
    }
    this.hoverTooltipEl.textContent = text;
    this.hoverTooltipEl.style.left = `${x}px`;
    this.hoverTooltipEl.style.top = `${y}px`;
    this.hoverTooltipEl.style.display = 'block';
  }

  private hideHoverTooltip() {
    if (this.hoverTimeout) {
      window.clearTimeout(this.hoverTimeout);
      this.hoverTimeout = undefined;
    }
    if (this.hoverTooltipEl) {
      this.hoverTooltipEl.style.display = 'none';
    }
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

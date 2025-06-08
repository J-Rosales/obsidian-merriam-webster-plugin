export interface DictionaryEntry {
  wordType?: string;
  definitions: string[];
  examples: string[];
}

export interface DictionaryResult {
  word: string;
  pluralForm?: string;
  entries: DictionaryEntry[];
}

export interface ThesaurusResult {
  word: string;
  synonyms: string[];
}

// Simple in-memory caches for API responses keyed by word
const dictionaryCache = new Map<string, DictionaryResult>();
const thesaurusCache = new Map<string, ThesaurusResult>();

function stripFormatting(text: string): string {
  return text.replace(/\{[^}]+\}/g, '');
}

function extractExamples(entry: any): string[] {
  const examples: string[] = [];

  function extractFromDt(dtList: any[]): void {
    for (const dt of dtList) {
      if (!Array.isArray(dt) || dt.length < 2) continue;
      const type = dt[0];
      const data = dt[1];
      if (type === 'vis' && Array.isArray(data)) {
        for (const v of data) {
          if (v && typeof v.t === 'string') {
            examples.push(stripFormatting(v.t));
          }
        }
      } else if (Array.isArray(data)) {
        extractFromDt(data);
      } else if (data && typeof data === 'object' && Array.isArray(data.dt)) {
        extractFromDt(data.dt);
      }
    }
  }

  if (Array.isArray(entry.def)) {
    for (const d of entry.def) {
      if (Array.isArray(d.sseq)) {
        for (const seq of d.sseq) {
          for (const sense of seq) {
            if (Array.isArray(sense) && sense.length >= 2) {
              const data = sense[1];
              if (data) {
                if (Array.isArray(data.dt)) extractFromDt(data.dt);
                if (data.sdsense) {
                  if (Array.isArray(data.sdsense.dt)) extractFromDt(data.sdsense.dt);
                }
                if (data.sense && Array.isArray(data.sense.dt)) {
                  extractFromDt(data.sense.dt);
                }
              }
            }
          }
        }
      }
    }
  }

  return examples;
}

export async function fetchDictionary(word: string, apiKey: string): Promise<DictionaryResult> {
  if (!apiKey) {
    throw new Error('Dictionary API key is missing');
  }

  const key = word.toLowerCase();
  const cached = dictionaryCache.get(key);
  if (cached) {
    return cached;
  }

  const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${encodeURIComponent(word)}?key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Dictionary request failed: ${res.status}`);
  }
  const json = await res.json();
  if (!Array.isArray(json) || json.length === 0) {
    const result: DictionaryResult = { word, entries: [] };
    dictionaryCache.set(key, result);
    return result;
  }

  let pluralForm: string | undefined;
  const entries: DictionaryEntry[] = [];

  for (const item of json) {
    if (!item || typeof item !== 'object' || !Array.isArray(item.shortdef)) {
      continue;
    }

    if (!pluralForm) {
      const inflections =
        item.ins ?? item.hwi?.ins ?? item.def?.[0]?.sseq?.[0]?.[0]?.[1]?.ins;
      if (Array.isArray(inflections)) {
        const plural = inflections.find(
          (i: any) => typeof i.il === 'string' && i.il.toLowerCase().includes('plural')
        );
        if (plural && typeof plural.if === 'string') {
          pluralForm = plural.if;
        }
      }
    }

    const definitions = item.shortdef as string[];
    const wordType = typeof item.fl === 'string' ? item.fl : undefined;
    const examples = extractExamples(item);
    entries.push({ wordType, definitions, examples });
  }

  const result: DictionaryResult = { word, entries, pluralForm };
  dictionaryCache.set(key, result);
  return result;
}

export async function fetchThesaurus(word: string, apiKey: string): Promise<ThesaurusResult> {
  if (!apiKey) {
    throw new Error('Thesaurus API key is missing');
  }

  const key = word.toLowerCase();
  const cached = thesaurusCache.get(key);
  if (cached) {
    return cached;
  }

  const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${encodeURIComponent(word)}?key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Thesaurus request failed: ${res.status}`);
  }
  const json = await res.json();
  if (!Array.isArray(json) || json.length === 0) {
    const result = { word, synonyms: [] };
    thesaurusCache.set(key, result);
    return result;
  }
  const first = json[0];
  const syns = Array.isArray(first.meta?.syns)
    ? first.meta.syns.flat().sort()
    : [];
  const result = { word, synonyms: syns };
  thesaurusCache.set(key, result);
  return result;
}

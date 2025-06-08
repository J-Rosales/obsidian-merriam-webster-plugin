export interface DictionaryResult {
  word: string;
  definitions: string[];
}

export interface ThesaurusResult {
  word: string;
  synonyms: string[];
}

// Simple in-memory caches for API responses keyed by word
const dictionaryCache = new Map<string, DictionaryResult>();
const thesaurusCache = new Map<string, ThesaurusResult>();

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
    const result = { word, definitions: [] };
    dictionaryCache.set(key, result);
    return result;
  }
  const first = json[0];
  const defs = Array.isArray(first.shortdef) ? first.shortdef : [];
  const result = { word, definitions: defs };
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

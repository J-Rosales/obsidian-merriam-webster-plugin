export interface DictionaryResult {
  word: string;
  definitions: string[];
}

export interface ThesaurusResult {
  word: string;
  synonyms: string[];
}

export async function fetchDictionary(word: string, apiKey: string): Promise<DictionaryResult> {
  if (!apiKey) {
    throw new Error('Dictionary API key is missing');
  }

  const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${encodeURIComponent(word)}?key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Dictionary request failed: ${res.status}`);
  }
  const json = await res.json();
  if (!Array.isArray(json) || json.length === 0) {
    return { word, definitions: [] };
  }
  const first = json[0];
  const defs = Array.isArray(first.shortdef) ? first.shortdef : [];
  return { word, definitions: defs };
}

export async function fetchThesaurus(word: string, apiKey: string): Promise<ThesaurusResult> {
  if (!apiKey) {
    throw new Error('Thesaurus API key is missing');
  }

  const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${encodeURIComponent(word)}?key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Thesaurus request failed: ${res.status}`);
  }
  const json = await res.json();
  if (!Array.isArray(json) || json.length === 0) {
    return { word, synonyms: [] };
  }
  const first = json[0];
  const syns = Array.isArray(first.meta?.syns)
    ? first.meta.syns.flat().sort()
    : [];
  return { word, synonyms: syns };
}

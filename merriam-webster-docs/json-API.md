# API Documentation | Merriam-Webster Dictionary API
Table of Contents
-----------------

1.  [1\. Overview](#sec-1)
    1.  [1.1 Introduction](#sec-1.1)
    2.  [1.2 Terminology](#sec-1.2)
2.  [2\. Data Structure: Merriam-Webster's Collegiate Dictionary](#sec-2)
    1.  [2.1 Entry Metadata: `meta`](#sec-2.meta)
    2.  [2.2 Homograph: `hom`](#sec-2.hom)
    3.  [2.3 Headword Information: `hwi`](#sec-2.hwi)
    4.  [2.4 Alternate Headwords: `ahws`](#sec-2.ahws)
    5.  [2.5 Variants: `vrs`](#sec-2.vrs)
    6.  [2.6 Pronunciations: `prs`](#sec-2.prs)
    7.  [2.7 Labels](#sec-2.labels)
        1.  [2.7.1 Functional Label: `fl`](#sec-2.fl)
        2.  [2.7.2 General Labels: `lbs`](#sec-2.lbs)
        3.  [2.7.3 Subject/Status Labels: `sls`](#sec-2.sls)
        4.  [2.7.4 Parenthesized Subject/Status Label: `psl`](#sec-2.psl)
        5.  [2.7.5 Sense-Specific Inflection Plural Label: `spl`](#sec-2.spl)
        6.  [2.7.6 Sense-Specific Grammatical Label: `sgram`](#sec-2.sgram)
    8.  [2.8 Inflections: `ins`](#sec-2.ins)
    9.  [2.9 Cognate Cross-References: `cxs`](#sec-2.cxs)
    10.  [2.10 Sense Organization](#sec-2.sense-struct)
        1.  [2.10.1 Definition Section: `def`](#sec-2.def)
        2.  [2.10.2 Verb Divider: `vd`](#sec-2.vd)
        3.  [2.10.3 Sense Sequence: `sseq`](#sec-2.sseq)
        4.  [2.10.4 Sense: `sense`](#sec-2.sense)
        5.  [2.10.5 Sense Number: `sn`](#sec-2.sn)
        6.  [2.10.6 Defining Text: `dt`](#sec-2.dt)
        7.  [2.10.7 Divided Sense: `sdsense`](#sec-2.sdsense)
        8.  [2.10.8 Truncated Sense: `sen`](#sec-2.sen)
        9.  [2.10.9 Binding Substitute: `bs`](#sec-2.bs)
        10.  [2.10.10 Parenthesized Sense Sequence: `pseq`](#sec-2.pseq)
    11.  [2.11 Verbal Illustrations: `vis`](#sec-2.vis)
    12.  [2.12 Attribution of Quote: `aq`](#sec-2.aq)
    13.  [2.13 Run-In: `ri`](#sec-2.ri)
    14.  [2.14 Biographical Name Wrap: `bnw`](#sec-2.bnw)
    15.  [2.15 Called-Also Note: `ca`](#sec-2.ca)
    16.  [2.16 Supplemental Information Note: `snote`](#sec-2.snote)
    17.  [2.17 Usage Notes: `uns`](#sec-2.uns)
    18.  [2.18 Undefined Run-Ons: `uros`](#sec-2.uros)
    19.  [2.19 Defined Run-Ons: `dros`](#sec-2.dros)
    20.  [2.20 Directional Cross-Reference Section: `dxnls`](#sec-2.dxnls)
    21.  [2.21 Usage Section: `usages`](#sec-2.usages)
    22.  [2.22 Synonyms Section: `syns`](#sec-2.syns)
    23.  [2.23 Quotations Section: `quotes`](#sec-2.quotes)
    24.  [2.24 Artwork: `art`](#sec-2.art)
    25.  [2.25 Tables: `table`](#sec-2.table)
    26.  [2.26 Etymology: `et`](#sec-2.et)
    27.  [2.27 First Known Use: `date`](#sec-2.date)
    28.  [2.28 Short Definition: `shortdef`](#sec-2.shortdef)
    29.  [2.29 Tokens Used in Running Text](#sec-2.tokens)
        1.  [2.29.1 Formatting and Punctuation Tokens: `{b}, {bc}, {inf}, {it}, {ldquo}, {p_br}, {rdquo}, {sc}, {sup}`](#sec-2.fmttokens)
        2.  [2.29.2 Word-Marking and Gloss Tokens: `{gloss}, {parahw}, {phrase}, {qword}, {wi}`](#sec-2.wordtokens)
        3.  [2.29.3 Cross-Reference Grouping Tokens: `{dx}, {dx_def}, {dx_ety}, {ma}`](#sec-2.xrefregtokens)
        4.  [2.29.4 Cross-Reference Tokens: `{a_link}, {d_link}, {dxt}, {et_link}, {i_link}, {mat}, {sx}`](#sec-2.xreftokens)
        5.  [2.29.5 Date Sense Token: `{ds}`](#sec-2.dstoken)
3.  [3\. Data Structure: Other Dictionaries and Thesauruses](#sec-3)
    1.  [3.1 Entry Metadata: `meta`](#sec-3.meta)
    2.  [3.2 IPA and Word-of-the-Day Pronunciations: `ipa, wod`](#sec-3.addlprs)
    3.  [3.3 Geographical Direction: `g`](#sec-3.g)
    4.  [3.4 Synonym Lists: `syn_list`](#sec-3.synlist)
    5.  [3.5 Synonym and Near Synonym Lists: `sim_list`](#sec-3.simlist)
    6.  [3.6 Subject/Status Labels for Thesaurus Word: `wsls`](#sec-3.wsls)
    7.  [3.7 Variants of Thesaurus Word: `wvrs`](#sec-3.wvrs)
    8.  [3.8 Verb Variants of Thesaurus Word: `wvbvrs`](#sec-3.wvbvrs)
    9.  [3.9 Related Word Lists: `rel_list`](#sec-3.rellist)
    10.  [3.10 Synonymous Phrase Lists: `phrase_list`](#sec-3.phraselist)
    11.  [3.11 Near Antonym Lists: `near_list`](#sec-3.nearlist)
    12.  [3.12 Antonym Lists: `ant_list`](#sec-3.antlist)
    13.  [3.13 Antonym and Near Antonym Lists: `opp_list`](#sec-3.opplist)
    14.  [3.14 Synonym Cross-References: `srefs`](#sec-3.srefs)
    15.  [3.15 Usage Cross-References: `urefs`](#sec-3.urefs)
    16.  [3.16 Self-Explanatory List: `list`](#sec-3.list)
    17.  [3.17 Tokens Used in Running Text](#sec-3.tokens)
        1.  [3.17.1 Formatting Tokens: `{bit}, {itsc}, {rom}`](#sec-3.fmttokens)
4.  [4\. Data Structure: Advanced English Learner's Dictionary](#sec-4)
    1.  [4.1 Entry Metadata: `app-shortdef, highlight`](#sec-4.meta)
    2.  [4.2 Alternate Pronunciations: `altprs`](#sec-4.altprs)
    3.  [4.3 Grammatical Label: `gram`](#sec-4.gram)
    4.  [4.4 Grammatical Label Within a Sense: `wsgram`](#sec-4.wsgram)
    5.  [4.5 Bold-Italic Note: `bnote`](#sec-4.bnote)
    6.  [4.6 Boxed Supplemental Information Note: `snotebox`](#sec-4.snotebox)
    7.  [4.7 Phrasal Verbs: `phrasev, sphrasev`](#sec-4.phrasev)
    8.  [4.8 Phrasal Verb Subject/Status Labels: `phsls`](#sec-4.phsls)
    9.  [4.9 Run-On Subject/Status Label: `rsl`](#sec-4.rsl)
    10.  [4.10 Learner's Dictionary Artwork: `artl`](#sec-4.artl)
5.  [5\. Data Structure: Elementary Dictionary](#sec-5)
    1.  [5.1 M-W Verbal Illustration: `vimw`](#sec-5.vimw)
    2.  [5.2 Inline Hint: `hint`](#sec-5.hint)
    3.  [5.3 Hint Paragraph: `hintp`](#sec-5.hintp)
    4.  [5.4 Headscratcher Paragraph: `hs`](#sec-5.hs)
    5.  [5.5 Word Root Paragraph: `rootpara`](#sec-5.rootpara)
    6.  [5.6 Word History Paragraph: `history`](#sec-5.history)
6.  [6\. Data Structure: Medical Dictionary](#sec-6)
    1.  [6.1 Biographical Notes: `bios`](#sec-6.bios)
7.  [7\. Data Structure: Spanish-English Dictionary](#sec-7)
    1.  [7.1 Entry Metadata: `lang`](#sec-7.meta)
    2.  [7.2 Headword Cutback: `hwc`](#sec-7.hwc)
    3.  [7.3 Variant Cutback: `vac`](#sec-7.vac)
    4.  [7.4 Alternate Inflection: `aif`](#sec-7.aif)
    5.  [7.5 Cross-References: `xrs`](#sec-7.xrs)
    6.  [7.6 Gender Label: `gl`](#sec-7.gl)
    7.  [7.7 Gender Forms: `gwds`](#sec-7.gwds)
    8.  [7.8 Verbal Illustration Translation: `tr`](#sec-7.tr)
    9.  [7.9 Alternate Undefined Entry Word: `aure`](#sec-7.aure)
    10.  [7.10 Verb Conjugations: `cjts`](#sec-7.cjts)

This document provides a reference guide to the Merriam-Webster JSON data format.

The [Terminology](#sec-1.2) section contains a helpful glossary of terms used in discussing the structure of Merriam-Webster references.

_Merriam-Webster's Collegiate Dictionary_ serves as the model reference for all our JSON data sets. [Section 2](#sec-2) both documents the JSON structure for the _Collegiate_ and serves as a reference for the common elements used in other data sets.

[Section 3](#sec-3) covers other dictionaries besides the _Collegiate_, documenting those elements not present in the _Collegiate_ but used across multiple titles. Further sections cover data elements unique to the [_Advanced English Learner's Dictionary_](#sec-4), [_Elementary Dictionary_](#sec-5), [_Medical Dictionary_](#sec-6), and [_Spanish-English Dictionary_](#sec-7).

In each major section, an "Example" subsection provides a JSON sample. To aid developers transitioning from our XML format to JSON, this is followed by an "XML Equivalent" subsection showing the XML markup matching the JSON code. Developers who have never worked with our XML data can ignore this section.

Mentions of JSON `code` or XML `<markup>` are in a small red font throughout the document. When a JSON type is discussed (eg, `object, string, Boolean`), a small light blue font is used.

alternate headword

A regional or less common spelling of a [headword](#term-headword), typically found in a short cross-reference [entry](#term-entry) that links to the entry defining the principal spelling.

In a bilingual dictionary, an alternate headword is typically a form of the headword in a different gender or number, presented immediately following the main headword.

binding substitute

A broad, general sense introducing a series of senses that give more contextual and specific meanings. This sense of "feline" provides an example:

**2** : resembling a cat: such as **a** : sleekly graceful **b** : sly, treacherous **c** : stealthy

The text "resembling a cat: such as " is the binding substitute for the senses that follow.

defined run-on

A defined run-on consists of a [defined run-on phrase](#term-drp), a [definition section](#term-def), and optional other information such as [pronunciations](#term-pron), [labels](#term-label), [variants](#term-va), and an [etymology](#term-et). A set of defined run-ons can follow (or "run on" from) the [entry's](#term-entry) main [definition section](#term-def).

defined run-on phrase

A defined run-on phrase is an expression or phrasal verb that is formed from the entry's [headword](#term-headword) and has its own [definition section](#term-def). It is part of a [defined run-on](#term-dro).

definition section

The definition section groups together all [sense sequences](#term-sseq) and [verb dividers](#term-vd) for a [headword](#term-headword) or [defined run-on phrase](#term-drp). We refer to the definition section for the headword itself as the _main_ definition section.

entry _or_ dictionary entry

The organizational unit of a dictionary. An entry consists of at minimum a [headword](#term-headword), along with content defining or translating the headword.

etymology

An explanation of the historical origin of a word. An etymology might supply, for instance, the French origin of a [headword](#term-headword), then further give the Latin origin of that French word. Also called: word origin.

functional label

Describes the grammatical function of a [headword](#term-headword) or [undefined entry word](#term-ure). It indicates the role the word plays in a sentence, such as "noun", "verb", "adjective", etc. It may also categorize the word in other ways, such as "trademark" or "abbreviation". Also called: part of speech.

headword

The word being defined or translated in an [entry](#term-entry). It serves as the main organizing principle of the dictionary: the headword is presented prominently at the start of its entry, and the rest of the entry content describes its meanings, usage, etymology, etc.

homograph

Homographs are [headwords](#term-headword) with identical spellings but distinct meanings and origins. For example, the noun "wind" (natural movement of air), verb "wind" (make short of breath), and verb "wind" (tighten the spring of a clock) are all homographs, each with its own [dictionary entry](#term-entry).

inflection

Inflection is the change of form that words undergo to mark such distinctions as case, gender, number, tense, person, mood, or voice. For instance, the past tense "ran" and present participle "running" are both inflections of the verb "run".

label

A label provides a brief note on the grammatical function (eg, "often attributive"), subject area (eg, "math"), register (eg, "formal", "slang", "offensive"), regional usage (eg, "Australian"), or capitalization of a [headword](#term-headword), [defined run-on phrase](#term-drp), or [undefined entry word](#term-ure). The label may describe the word generally or be limited to a particular [sense](#term-sense). See also [functional label](#term-fl).

pronunciation

A pronunciation specifies how a written word is pronounced aloud. It can contain a written representation of the word's pronunciation, sound file information for audio playback, and various [labels](#term-label) and punctuation.

run-in entry word

A run-in entry word is a defined word that occurs in the running text of an [entry](#term-entry). It differs from a [headword](#term-headword) by its placement with_in_ the entry, and from a [variant](#term-va) in that it has a distinct meaning and is not simply a variant spelling (eg, "Bay of Algiers" is a run-in entry word in the "Algiers" entry). See also [defined run-on](#term-dro), [undefined run-on](#term-uro).

sense

A key organizational unit of the entry that gathers together all content relevant to a particular meaning of a [headword](#term-headword) or [defined run-on phrase](#term-drp). The sense typically contains a definition or translation and an identifying [sense number](#term-sn), but may also contain [labels](#term-label), [pronunciations](#term-pron), [inflections](#term-infl), [variants](#term-va), or an [etymology](#term-et) for the specific meaning.

sense number

A sense number is an Arabic numeral or lowercase letter that identifies a [sense](#term-sense) or [subsense](#term-subsense) and orders it in a [sense sequence](#term-sseq). An Arabic numeral sense number may or may not be parenthesized.

sense sequence

The sense sequence is a series of [senses](#term-sense) ordered by identifying [sense numbers](#term-sn) beginning at Arabic numeral "1". The sequence may further contain [subsenses](#term-subsense) ordered and identified by lowercase letters or parenthesized numbers.

subsense

A second- or third-level sense identified by lowercase letters or parenthesized numbers. A subsense is functionally identical to a [sense](#term-sense).

undefined entry word

An undefined entry word is derived from or related to the [headword](#term-headword), has a [functional label](#term-fl) and possibly other information, but does not have any definitions. It is part of an [undefined run-on](#term-uro).

undefined run-on

An undefined run-on groups together an [undefined entry word](#term-ure) with its [functional label](#term-fl), [pronunciations](#term-pron), [verbal illustrations](#term-vi), and other information. A set of undefined run-ons can follow (or "run on" from) the entry's main [definition section](#term-def).

variant

A variant is a different spelling or styling of a [headword](#term-headword), [defined run-on phrase](#term-drp), or [undefined entry word](#term-ure). For example, "drive-thru" is a variant of "drive-through".

In bilingual dictionaries, a variant is usually a sense-specific idiom or phrase containing the headword. In this context, the phrase "all around" might be a variant of the headword "all", for instance.

verb divider

A verb divider indicates whether the following [sense sequence](#term-sseq) describes a transitive verb or an intransitive verb.

verbal illustration

A verbal illustration is an example sentence illustrating how a word is used in context. It may either be a made-up sentence or a quotation from a cited source. While the verbal illustration typically exemplifies usage for a particular sense of a [headword](#term-headword) or [defined run-on phrase](#term-drp), it may also be associated with other elements of an entry such as a set of synonyms, supplemental note in an [etymology](#term-et), or [undefined run-on](#term-uro).

Entry metadata is information _about_ the [entry](#term-entry), as opposed to the actual content of the entry. Entry metadata is contained in `meta`.

Hierarchical Context

Top-level member of the dictionary entry, occurring at the very beginning of the entry.

Display Guidance

Not intended for display.

Data Model

`"meta" :` `object` containing the members:

`"id" :` `string`  unique entry identifier within a particular dictionary data set, used in cross-references pointing to the entry. It consists of the headword, and in [homograph](#term-hom) entries, an appended colon and homograph number.

`"uuid" :` `string`  universally unique identifier

`"sort" :` `string`  a 9-digit code which may be used to sort entries in the proper dictionary order if alphabetical display is needed

`"src" :` `string`  source data set for entry—ignore

`"section" :` `string`  indicates the section the entry belongs to in print, where "alpha" indicates the main alphabetical section, "biog" biographical, "geog" geographical, and "fw&p" the foreign words & phrases section.

`"stems" :` `array`  lists all of the entry's [headwords](#term-headword), [variants](#term-va), [inflections](#term-infl), [undefined entry words](#term-ure), and [defined run-on phrases](#term-drp). Each _stem_ `string` is a valid search term that should match this entry.

`"offensive" :` `Boolean`  true if there is a [label](#term-label) containing "offensive" in the entry; otherwise, false.

Example

The `meta` section in the second homograph for "battle".

```
"meta":{
    "id":"battle:2",
    "uuid":"6aaba1f1-f7ca-48ce-b801-f866b41b8988",
    "sort":"020100000",
    "src":"collegiate",
    "section":"alpha",
    "stems":[
        "batteler",
        "battelers",
        "battle",
        "battle it out",
        "battled",
        "battled it out",
        "battler",
        "battlers",
        "battles",
        "battles it out",
        "battling",
        "battling it out"
    ],
    "offensive":false
}
    
```


XML Equivalent

```
<meta>
  <id>battle:2</id>
  <uuid>6aaba1f1-f7ca-48ce-b801-f866b41b8988</uuid>
  <sort>020100000</sort>
  <src>collegiate</src>
  <section>alpha</section>
  <stems>
    <st>batteler</st>
    <st>battelers</st>
    <st>battle</st>
    <st>battle it out</st>
    <st>battled</st>
    <st>battled it out</st>
    <st>battler</st>
    <st>battlers</st>
    <st>battles</st>
    <st>battles it out</st>
    <st>battling</st>
    <st>battling it out</st>
  </stems>
</meta>
    
```


[Homographs](#term-hom) are [headwords](#term-headword) with identical spellings but distinct meanings and origins. The `hom` member contains a homograph number used to mark and distinguish the identically-spelled headwords.

Hierarchical Context

Top-level member of dictionary entry. When `hom` is present, the immediately following and/or preceding entry will have an `hwi`/`hw` member with an identical value.

Display Guidance

In superscript immediately preceding the `hw`.

Data Model

`"hom" :` `number`

Example

Use of `hom` to distinguish homograph headwords in a set of four entries. Note that the homograph number is also incorporated into the `meta` `id` to ensure a unique value.

```
{
  "meta":{
    "id":"test:1",
    [...]
  },
  "hom":1,
  "hwi":{
    "hw":"test",
    "prs":[{
      "mw":"\u02c8test",
      "sound":{"audio":"test0001","ref":"c","stat":"1"}
    }]
  },
  "fl":"noun",
  [...]
}, {
  "meta":{
    "id":"test:2",
    [...]
  },
  "hom":2,
  "hwi":{"hw":"test"},
  "fl":"verb",
  [...]
}, {
  "meta":{
    "id":"test:3",
    [...]
  },
  "hom":3,
  "hwi":{"hw":"test"},
  "fl":"adjective",
  [...]
}, {
  "meta":{
    "id":"test:4",
    [...]
  },
  "hom":4,
  "hwi":{"hw":"test"},
  "fl":"noun",
  [...]
}
    
```


XML Equivalent

Note the homograph number is stored in an `{h,#}` curly-brace sequence in the headword tag.

```
<hw>{h,1}test</hw>
```


The [headword](#term-headword) is the word being defined or translated in a [dictionary entry](#term-entry). Key _h_ead_w_ord _i_nformation is grouped in an `hwi` object. This includes the _h_ead_w_ord itself in the `hw` member, and may include one or more [pronunciations](#term-pron) in `prs`.

Hierarchical Context

Top-level member of the dictionary entry.

Display Guidance

The headword is prominently highlighted to the user; this is typically achieved through the use of bold, large point size, distinctive font, etc.

Data Model

`"hwi" :` `object` with the following members:

`"hw" :` `string`  headword (required)

optional `[prs](#sec-2.prs)`

Example

An example of `hwi` in the first homograph of "test".

```
"hom":1,
"hwi":{
  "hw":"test",
  "prs":[{
    "mw":"\u02c8test",
    "sound":{"audio":"test0001","ref":"c","stat":"1"}
  }]
}
    
```


XML Equivalent

```
<hw>{h,1}test</hw>
<pr>{hstres}test</pr>
<sound stat="1" wav="test0001.wav" ref="c"/>
    
```


An [alternate headword](#term-ahw) is a regional or less common spelling of a [headword](#term-headword). A set of one or more _a_lternate _h_ead_w_ord_s_ is contained in an `ahws`.

Hierarchical Context

Top-level member of the dictionary entry.

Display Guidance

See `[hwi](#sec-2.hwi)` for handling of `hw`.

Data Model

`"ahws" :` `array` of one or more alternate headword `objects`, each of which may contain the members:

`"hw" :` `string`  headword (required)

optional `[prs](#sec-2.prs), [psl](#sec-2.psl)`

Example

The `ahws` and `hwi` for "agonise". Note the first `hw` in an entry will always be in an `hwi`.

```
"hwi":{"hw":"ag*o*nise"},
"ahws":[
  {
    "hw":"agonised"
  },{
    "hw":"agonising"
  }
]
    
```


XML Equivalent

```
<hw>ag*o*nise</hw>
<ahw>agonised</ahw>
<ahw>agonising</ahw>
    
```


A [variant](#term-va) is a different spelling or styling of a [headword](#term-headword), [defined run-on phrase](#term-drp), or [undefined entry word](#term-ure). A set of one or more _v_a_r_iant_s_ is contained in a `vrs`.

Hierarchical Context

Occurs as top-level member of dictionary entry and in `dros, ri, sdsense, sen, sense, uros`.

Display Guidance

A set of variants might be displayed inline with the headword, or in its own block with a lead-in heading such as "variants:".

Each `va` is typically displayed in bold, less prominently than an `hw`.

A `vl` is typically displayed in italics.

Data Model

`"vrs" :` `array` of one or more variant `objects`, each of which may contain the members:


|"va" : string|variant (required)                     |
|-------------|---------------------------------------|
|"vl" : string|variant label,  such as “or” (optional)|
|prs, spl     |(optional)                             |


Example

The `vrs` and `hwi` for "kabbalah".

```
"hwi":{
  "hw":"kab*ba*lah",
  "prs":[
    {
      "mw":"k\u0259-\u02c8b\u00e4-l\u0259",
      "sound":{"audio":"cabala02","ref":"c","stat":"1"}
    },{
      "mw":"\u02c8ka-b\u0259-l\u0259",
      "sound":{"audio":"cabala01","ref":"c","stat":"1"}
    }
  ]
},"vrs":[
  {
    "vl":"or less commonly",
    "va":"kab*ba*la"
  },{
    "vl":"or",
    "va":"ka*ba*la"
  },{
    "vl":"or",
    "va":"ca*ba*la"
  },{
    "vl":"or",
    "va":"cab*ba*la"
  },{
    "vl":"or",
    "va":"cab*ba*lah"
  }
]
    
```


XML Equivalent

Note that in XML the main pronunciation for the headword is grouped with the variants, whereas in JSON it is associated with `hwi`.

```
<hw>kab*ba*lah</hw>
<vr>
  <vl>also</vl>
  <va>kab*ba*la</va>
  <vl>or</vl>
  <va>ka*ba*la</va>
  <vl>or</vl>
  <va>ca*ba*la</va>
  <vl>or</vl>
  <va>cab*ba*la</va>
  <vl>or</vl>
  <va>cab*ba*lah</va>
  <pr>k{schwa}-{hstres}b{auml}-l{schwa}, {hstres}ka-b{schwa}-l{schwa}</pr>
</vr>
    
```


A [pronunciation](#term-pron) specifies how a written word is pronounced aloud. A set of _pr_onunciation_s_ is encoded in a `prs` array. Each element represents a distinct pronunciation of a [headword](#term-headword) or other term.

Hierarchical Context

Occurs in `ahws`, `cats`, `dros`, `hwi`, `ins`, `ri`, `sdsense`, `sen`, `sense`, `uros`, `vrs`

Display Guidance

The entire set of pronunciations is typically surrounded by backslash characters.

If there are multiple pronunciation objects and an object contains a punctuation member `pun`, use its contents plus a space to separate the two objects (for example, "\\pronunciation 1; pronunciation 2" where `pun` contains ";").

If `pun` is not present, use a comma and space to separate the two objects (for example, "\\pronunciation 1, pronunciation 2\\").

The `l` and `l2` pronunciation labels are typically displayed in italics.

Data Model

`"prs" :` `array` of one or more pronunciation objects, each of which may contain the following members:



* "mw" : string: "l" : string
  * written pronunciation in Merriam-Webster format: pronunciation label before pronunciation
* "mw" : string: "l2" : string
  * written pronunciation in Merriam-Webster format: pronunciation label after pronunciation
* "mw" : string: "pun" : string
  * written pronunciation in Merriam-Webster format: punctuation to separate pronunciation objects
* "mw" : string: "sound" : object
  * written pronunciation in Merriam-Webster format: audio playback information: the audio member contains the base filename for audio playback; the ref and stat members can be ignored.


An audio reference URL should be in the following form:

```
https://media.merriam-webster.com/audio/prons/[language_code]/[country_code]/[format]/[subdirectory]/[base filename].[format]

```


Where the values in brackets are determined as follows:

`[language_code]` - 2 letter ISO language code.

*   `en` for all API references except the _Spanish-English Dictionary_.
*   `es` for entries with a "lang": "es" [metadata value](#sec-7.meta) in the _Spanish-English Dictionary_

`[country_code]` - 2 letter ISO country code.

*   `us` for all API references except the _Spanish-English Dictionary_.
*   `me` for entries with a "lang": "es" [metadata value](#sec-7.meta) in the _Spanish-English Dictionary_

`[format]` - One of 3 audio formats supported for all `audio` values:

*   `mp3`
*   `wav`
*   `ogg`

`[subdirectory]` is determined as follows:

*   if `audio` begins with "bix", the subdirectory should be "bix",
*   if `audio` begins with "gg", the subdirectory should be "gg",
*   if `audio` begins with a number or punctuation (eg, "\_"), the subdirectory should be "number",
*   otherwise, the subdirectory is equal to the first letter of `audio`.

`[base filename]` - The name contained in `audio`.

As examples, the URL for the object {"audio":"3d000001","ref":"c","stat":"1"} in the Collegiate entry "3-D" would be: [https://media.merriam-webster.com/audio/prons/en/us/mp3/number/3d000001.mp3](https://media.merriam-webster.com/audio/prons/en/us/mp3/number/3d000001.mp3), while the URL for the object {"audio": "hola001sp"} in the Spanish-English entry "hola" would be: [https://media.merriam-webster.com/audio/prons/es/me/mp3/h/hola001sp.mp3](https://media.merriam-webster.com/audio/prons/es/me/mp3/h/hola001sp.mp3).

Example

A `prs` with multiple pronunciations in the entry "pajama" of collegiate reference for example. If you were to generate an audio URL for the _first_ `sound` object below, it would be: [https://media.merriam-webster.com/audio/prons/en/us/mp3/p/pajama02.mp3](https://media.merriam-webster.com/audio/prons/en/us/mp3/p/pajama02.mp3)

```
"hwi":{
  "hw":"pa*ja*ma",
  "prs":[
    {
      "mw":"p\u0259-\u02c8j\u00e4-m\u0259",
      "sound":{
        "audio":"pajama02",
        "ref":"c",
        "stat":"1"
      }
    },{
      "mw":"-\u02c8ja-",
      "sound":{
        "audio":"pajama01",
        "ref":"c",
        "stat":"1"
      }
    }
  ]
}
    
```


XML Equivalent

```
<hw>pa*ja*ma</hw>
<pr>p{schwa}-{hstres}j{auml}-m{schwa}, -{hstres}ja-</pr>
<sound stat="1" wav="pajama02.wav" ref="c"/>
    
```


A [label](#term-label) provides a brief note on the grammatical function, subject area, register, regional usage, or capitalization of a [headword](#term-headword), whether generally or in a particular [sense](#term-sense).

The [functional label](#term-fl) describes the grammatical function of a [headword](#term-headword) or [undefined entry word](#term-ure), such as "noun" or "adjective".

Hierarchical Context

Occurs as a top-level member of the dictionary entry, where it describes the `hw` in the preceding `hwi`. Also occurs within `uros`, where it describes the preceding `ure`.

Display Guidance

Typically rendered in italics

Data Model

`"fl" :` `string`

Example

Functional label for the second homograph of "traffic". This makes it clear to the user that the _verb_ "traffic" is being defined.

```
"hom":2,
"hwi":{"hw":"traffic"},
"fl":"verb"
    
```


XML Equivalent

```
<hw>{h,2}traffic</hw>
<fl>verb</fl>
    
```


General [labels](#term-label) provide information such as whether a [headword](#term-headword) is typically capitalized, used as an attributive noun, etc. A set of one or more such _l_a_b_el_s_ is contained in an `lbs`.

Hierarchical Context

Occurs as top-level member of dictionary entry and in `dros, sdsense, sen, sense,` or `uros`.

Display Guidance

Typically rendered in italics. If there is a more than one element in the array, separate them with a comma and space.

Data Model

`"lbs" :` `array` of one or more elements

Example

An `lbs` in the entry for "deco".

```
"lbs":[
  "often capitalized",
  "often attributive"
],"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "dt":[["text","{bc}{sx|art deco||}"]]
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<lb>often cap</lb>
<lb>often attrib</lb>
<def>
  <date>1969</date>
  <sensb>
    <sense>
      <dt>{bc}<sx>art deco</sx></dt>
    </sense>
  </sensb>
</def>
    
```


A subject/status [label](#term-label) describes the subject area (eg, "computing") or regional/usage status (eg, "British", "formal", "slang") of a [headword](#term-headword) or a particular [sense](#term-sense) of a headword. A set of one or more _s_ubject/status _l_abel_s_ is contained in an `sls`.

Hierarchical Context

Occurs as top-level member of dictionary entry and in `def, dros, sdsense, sen, sense,` or `uros`.

Display Guidance

Typically rendered in italics. If there is a more than one element in the array, separate with a comma and space.

Data Model

`"sls" :` `array` of one or more elements

Example

A pair of subject/status labels in sense 3b of "ginger".

```
[
  "sense",
  {
    "sn":"b",
    "sls":[
      "chiefly British",
      "sometimes offensive"
    ],
    "dt":[
      [
        "text",
        "{bc}a person with red hair {bc}{sx|redhead||1} "
      ],[
        "vis",
        [
          {
            "t":"The Breda Redhead Days festival\u2014which grew out of
            a photo shoot by Dutch artist Bart Rouwenhorst\u2014now
            attracts five or six thousand {wi}gingers{\/wi} from around
            the world.",
            "aq":{"auth":"Bruce Ingram"}
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<sense>
  <sn>b</sn>
  <sls>
    <sl>chiefly British</sl>
    <sl>sometimes offensive</sl>
  </sls>
  <dt>{bc}a person with red hair {bc}{sx|redhead||1}
    <vis>
      <vi>
        <t>The Breda Redhead Days festival—which grew out of a
        photo shoot by Dutch artist Bart Rouwenhorst—now attracts five
        or six thousand {wi}gingers{/wi} from around the world. </t>
        <aq>
          <auth>Bruce Ingram</auth>
        </aq>
      </vi>
    </vis>
  </dt>
</sense>
    
```


A parenthesized subject/status [label](#term-label) describes the subject area or regional/usage status (eg, "British") of a [headword](#term-headword) or other defined term, and is displayed in parentheses. The _p_arenthesized _s_ubject/status _l_abel is contained in a `psl`.

Hierarchical Context

Occurs in `ahws, cats, dros, hwi, vi,` or `uros`.

Display Guidance

Display within parentheses and in italics.

Data Model

`"psl" :` `string`

Example

An example of `psl` in the entry "meow".

```
"hwi":{
  "hw":"me*ow",
  "prs":[
    {
      "mw":"m\u0113-\u02c8au\u0307",
      "sound":{"audio":"meow0001","ref":"c","stat":"1"}
    }
  ],
  "psl":"chiefly US"
},
"vrs":[
  {
    "vl":"or British",
    "va":"mi*aow"
  }
],
"fl":"noun"
    
```


XML Equivalent

```
<hwi>
  <hw>me*ow</hw>
  <psl>chiefly US</psl>
</hwi>
<vrs>
  <vr>
    <vl>or British</vl>
    <va>mi*aow</va>
    <prs>
      <pr>
        <mw>mē-ˈau̇</mw>
        <sound><audio>meow0001</audio><ref>c</ref><stat>1</stat></sound>
      </pr>
    </prs>
  </vr>
</vrs>
<fl>noun</fl>
    
```


This [label](#term-label) provides information on the grammatical number (eg, singular, plural) of an [inflection](#term-infl) in a particular [sense](#term-sense). A _s_ense-specific inflection _p_lural _l_abel is contained in an `spl`.

Hierarchical Context

Occurs in `ins`.

Display Guidance

Typically rendered in italics.

Data Model

`"spl" :` `string`

Example

In the entry for "acoustics", sense 1 contains an `spl` noting that in this sense the plural noun is grammatically singular (eg, "Acoustics is the science of sound").

```
"fl":"plural noun",
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "sn":"1",
            "ins":[
              {"spl":"singular in construction"}
            ],
            "dt":[
              ["text","{bc}a science that deals with the production,
              control, transmission, reception, and effects of sound"]
            ]
          }
        ]
      ],[
        [
          "sense",
          {
            "sn":"2",
            "ins":[
              {
                "il":"also",
                "if":"acoustic"
              }
            ],
            "dt":[
              ["text","{bc}the qualities that determine the ability of an
              enclosure (such as an auditorium) to reflect sound waves in
              such a way as to produce distinct hearing"]
            ]
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<fl>n pl</fl>
<def>
  <date>1683</date>
  <sensb>
    <sense snumb="1">
      <sn>1</sn>
      <sin>
        <spl>sing in constr</spl>
      </sin>
      <dt>{bc}a science that deals with the production, control,
      transmission, reception, and effects of sound</dt>
    </sense>
  </sensb>
  <sensb>
    <sense snumb="2">
      <sn>2</sn>
      <sin>
        <il>also</il>
        <if>acoustic</if>
      </sin>
      <dt>{bc}the qualities that determine the ability of an enclosure
      (as an auditorium) to reflect sound waves in such a way as to produce
      distinct hearing</dt>
    </sense>
  </sensb>
</def>
    
```


This [label](#term-label) notes whether a particular [sense](#term-sense) of a verb is transitive (T) or intransitive (I). The _s_ense-specific _gram_matical label is contained in an `sgram`.

Hierarchical Context

Occurs in `sdsense, sen, sense`.

Display Guidance

Typically displayed within square brackets and in italics.

Data Model

`"sgram" :` `string`

Example

Use of `sgram` in two senses of "reboot".

```
[
  "sense",
  {
    "sn":"1 a",
    "sgram":"T\/I",
    "dt":[
      ["text","{bc}to shut down and restart (a computer or program) "],
      [
        "vis",
        [
          {
            "t":"\u2026 the annoyance of having to {wi}reboot{\/wi} the
            computer to switch operating systems \u2026",
            "aq":{"auth":"Robert Weston"}
          },
          {
            "t":"If anything ever happens to the original drive, you can
            {wi}reboot{\/wi} using the cloned drive and be up and running
            in minutes.",
            "aq":{"auth":"Dan Frakes"}
          }
        ]
      ]
    ]
  }
],[
  "sense",
  {
    "sn":"b",
    "sgram":"I",
    "dt":[
      ["text","{bc}to start up again after closing or shutting down {bc}to
      boot up again "],
      [
        "vis",
        [
          {
            "t":"waiting for a computer\/program to {wi}reboot{\/wi}"
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<sense>
  <sn>1 a</sn>
  <sgram>T/I</sgram>
  <dt>{bc}to shut down and restart (a computer or program)
    <vis>
      <vi>
        <t>… the annoyance of having to {wi}reboot{/wi} the computer
        to switch operating systems … </t>
        <aq>
          <auth>Robert Weston</auth>
        </aq>
      </vi>
      <vi>
        <t>If anything ever happens to the original drive, you can {wi}reboot{/wi}
        using the cloned drive and be up and running in minutes. </t>
        <aq>
          <auth>Dan Frakes</auth>
        </aq>
      </vi>
    </vis>
  </dt>
</sense>
<sense>
  <sn>b</sn>
  <sgram>I</sgram>
  <dt>{bc}to start up again after closing or shutting down {bc}to
  boot up again
    <vis>
      <vi>
        <t>waiting for a computer/program to {wi}reboot{/wi}</t>
      </vi>
    </vis>
  </dt>
</sense>
    
```


[Inflection](#term-infl) is the change of form that words undergo in different grammatical contexts, such as tense or number. A set of one or more _in_flection_s_ is contained in an `ins`.

Hierarchical Context

Occurs as top-level member of dictionary entry and in `sdsense, sen, sense,` or `uros`.

Display Guidance

If both `if` and `ifc` are present, only one should be displayed to the user. The `ifc` has traditionally been used in print publications. Both are typically displayed in bold.

The `il` inflection label is typically displayed in italics, and should be followed by a space.

Inflection objects should be separated by a semicolon and space _unless_ the second object of a pair contains `il`, in which case they should be separated by a space.

Data Model

`"ins" :` `array` of one or more inflection `objects`, each of which may contain the members:


|"if" : string |inflection: a fully spelled-out inflection           |
|--------------|-----------------------------------------------------|
|"ifc" : string|inflection cutback: an inflection ending (eg, "-ing")|
|"il" : string |inflection label, such as “also”, “plural”, “or”     |
|prs, spl      |(optional)                                           |


Example

Inflections in the second homograph of "tassel".

```
"ins":[
  {
    "ifc":"-seled",
    "if":"tas*seled"
  },{
    "il":"or",
    "ifc":"-selled",
    "if":"tas*selled"
  },{
    "ifc":"-sel*ing",
    "if":"tas*sel*ing"
  },{
    "il":"or",
    "ifc":"-sel*ling",
    "if":"tas*sel*ling",
    "prs":[
      {
        "mw":"\u02c8ta-s(\u0259-)li\u014b",
        "sound":{"audio":"tassel02","ref":"c","stat":"1"}
      }
    ]
  }
]
    
```


XML Equivalent

```
<in>
  <if>-seled</if>
  <il>or</il>
  <if>-selled</if>
</in>
<in>
  <if>-sel*ing</if>
  <il>or</il>
  <if>-sel*ling</if>
  <pr>-s({schwa}-)li{eng}</pr>
</in>
    
```


When a [headword](#term-headword) is a less common spelling of another word with the same meaning, there will be a cognate cross-reference pointing to the headword with the more common spelling. A set of _c_ognate _cross_\-reference_s_ is contained in a `cxs`.

Hierarchical Context

Top-level member of dictionary entry.

Display Guidance

The `cxt` cross-reference target is typically displayed in smallcaps. If `cxr` is present, do not display but use in forming cross-reference hyperlink as described below.

The `cxl` label is typically displayed in italics and should be followed by a space.

A `cxn` is typically displayed in normal font and should be preceded by a space.

If the `cxs` array has more than one element, separate them by a comma and space.

Data Model

`"cxs" :` `array` of one or more elements:

`"cxl" :` `string`  _c_ognate _cross_\-reference _l_abel

`"cxtis" :` `array`  of one or more _c_ognate _cross_\-reference _t_arget_s_, each of which may contain:

`"cxl" :` `string`  cognate cross-reference label

`"cxr" :` `string`  when present, use as cross-_r_eference target ID for immediately preceding `cxt`

`"cxt" :` `string`  provides hyperlink text in all cases, and cross-reference _t_arget ID when no immediately following `cxr`

`"cxn" :` `string`  sense _n_umber of cross-reference target

Example

A `cxs` in the first homograph of "baloney" with a `cxt` pointing to the more common spelling "bologna". Although the cross-reference is provided, note in this case the definition of "bologna" is included for ease of reference.

```
"hom":1,
"hwi":{
  "hw":"ba*lo*ney",
  "prs":[
    {
      "mw":"b\u0259-\u02c8l\u014d-n\u0113",
      "sound":{"audio":"bologn01","ref":"c","stat":"1"}
    }
  ]
},
"fl":"noun",
"cxs":[
  {
    "cxl":"less common spelling of",
    "cxtis":[
      {"cxt":"bologna"}
    ]
  }
],
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "dt":[
              ["text","{bc}a large smoked sausage of beef, veal, and pork"]
            ],
            "sdsense":{
              "sd":"also",
              "dt":[
                ["text","{bc}a sausage made (as of turkey) to resemble bologna"]
              ]
            }
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

In contrast to the JSON example above, the XML entry for this cognate cross-reference `<cx>` contains only the reference to the more common spelling.

```
<entry id="baloney[1]">
  <subj>FD</subj>
  <hw>{h,1}baloney</hw>
  <cx>
    <cl>var of</cl>
    <ct>bologna</ct>
  </cx>
</entry>
    
```


The _[sense](#term-sense)_ is a key organizational unit of the entry, and gathers together all content relevant to a particular meaning of a headword. Senses are presented in a numbered series, with further divisions into [subsenses](#term-subsense) identified by lowercase letters and parenthesized numbers. _[Sense sequences](#term-sseq)_ are organized by part of speech for verb entries: if a verb can be both transitive and intransitive, there will be two _[verb dividers](#term-vd)_, one marking the sense sequence for the transitive verb and the other the sense sequence for the intransitive verb.

The main [definition section](#term-def) `def` encompasses all of the [sense sequences](#term-sseq) and [verb dividers](#term-vd) `vd` for a headword. A sense sequence `sseq` groups together the numbered senses (`sense` and `sen`) defining particular meanings of the headword. Finally, more complex sense structures are represented by `pseq, sdsense,` and `bs`.

The [definition section](#term-def) groups together all the [sense sequences](#term-sseq) and [verb dividers](#term-vd) for a [headword](#term-headword) or [defined run-on phrase](#term-drp).

Hierarchical Context

Occurs as top-level member of dictionary entry and in `dros`.

Display Guidance

Typically displayed in a new paragraph.

Data Model

`array` of one or more objects

Example

The `def` definition section for the entry "backflip".

```
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "dt":[["text","{bc}a {a_link|backward} somersault especially
              in the air"]]
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<def>
  <date>1935</date>
  <sensb>
    <sense>
      <dt>{bc}a backward somersault esp. in the air</dt>
    </sense>
  </sensb>
</def>
    
```


The verb divider acts as a [functional label](#term-fl) in verb [entries](#term-entry), introducing the separate [sense sequences](#term-sseq) for transitive and intransitive meanings of the verb.

Hierarchical Context

Occurs in `def`, preceding an `sls` (optional) and `sseq` (required)

Display Guidance

Typically rendered in italics

Data Model

`"vd" :` `string`

Example

Two `vd` verb dividers in the second homograph of "boat".

```
"def":[
  {
    "vd":"transitive verb",
    "sseq":[
      [
        [
          "sense",
          {
            "dt":[["text","{bc}to place in or bring into a boat"]]
          }
        ]
      ]
    ]
  },{
    "vd":"intransitive verb",
    "sseq":[
      [
        [
          "sense",
          {
            "dt":[["text","{bc}to go by boat"]]
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

Note that in XML `<vt>` is the equivalent of JSON `vd`.

```
<def>
  <vt>transitive verb</vt>
  <date>1613</date>
  <sensb>
    <sense>
      <dt>{bc}to place in or bring into a boat</dt>
    </sense>
  </sensb>
  <vt>intransitive verb</vt>
  <sensb>
    <sense snumb="(vi)">
      <dt>{bc}to go by boat</dt>
    </sense>
  </sensb>
</def>
    
```


The [sense sequence](#term-sseq) contains a series of [senses](#term-sense) and [subsenses](#term-subsense), ordered by [sense numbers](#term-sn) beginning at Arabic numeral "1". The _s_ense _seq_uence is contained in an `sseq`.

Hierarchical Context

Occurs in `def`

Display Guidance

See `[sense](#sec-2.sense)`

Data Model

`"sseq" :` `array`

Example

An `sseq` from the second homograph of "hop".

```
"sseq":[
  [
    [
      "sense",
      {
        "sn":"1 a",
        "dt":[["text","{bc}a short brisk leap especially on one leg"]]
      }
    ],[
      "sense",
      {
        "sn":"b",
        "dt":[
          ["text","{bc}{sx|bounce||}, {sx|rebound||} "],
          [
            "vis",
            [{"t":"shortstop scooped it up on the first {wi}hop{\/wi}"}]
          ]
        ]
      }
    ]
  ],[
    [
      "sense",
      {
        "sn":"2",
        "dt":[["text","{bc}{sx|dance||3}"]]
      }
    ]
  ],[
    [
      "sense",
      {
        "sn":"3 a",
        "dt":[["text","{bc}a flight in an aircraft"]]
      }
    ],[
      "sense",
      {
        "sn":"b",
        "dt":[["text","{bc}a short trip"]]
      }
    ]
  ]
]
    
```


XML Equivalent

```
<sensb>
  <sense snumb="1a">
    <sn>1 a</sn>
    <dt>{bc}a short brisk leap esp. on one leg</dt>
  </sense>
  <sense snumb="1b">
    <sn>b</sn>
    <dt>
      {bc}<sx>bounce</sx> <sx>rebound</sx>
      <vi>shortstop scooped it up on the first {sdash}</vi>
    </dt>
  </sense>
</sensb>
<sensb>
  <sense snumb="2">
    <sn>2</sn>
    <dt>{bc}<sx>dance <sxn>3</sxn></sx></dt>
  </sense>
</sensb>
<sensb>
  <sense snumb="3a">
    <sn>3 a</sn>
    <dt>{bc}a flight in an aircraft</dt>
  </sense>
  <sense snumb="3b">
    <sn>b</sn>
    <dt>{bc}a short trip</dt>
  </sense>
</sensb>
    
```


The [sense](#term-sense) gathers together all content relevant to a particular meaning of a [headword](#term-headword) or [defined run-on phrase](#term-drp).

Hierarchical Context

Occurs in an `sseq, pseq,` or `bs`

Display Guidance

A typical implementation might generate a newline at a top-level numbered [sense](#term-sense), while keeping further nested [subsenses](#term-subsense) inline.

Data Model

`object` or `array` consisting of one `dt` (required) and zero or more `[et](#sec-2.et), [ins](#sec-2.ins), [lbs](#sec-2.lbs), [prs](#sec-2.prs), [sdsense](#sec-2.sdsense), [sgram](#sec-2.sgram), [sls](#sec-2.sls), [sn](#sec-2.sn),` or `[vrs](#sec-2.vrs)`

Example

An array containing two senses in "test".

```
[
  [
    "sense",
    {
      "sn":"1 a",
      "dt":[
        [
          "text",
          "{bc}to undergo a test"
        ]
      ]
    }
  ],[
    "sense",
    {
      "sn":"b",
      "dt":[
        [
          "text",
          "{bc}to be assigned a standing or evaluation on the
           basis of {a_link|tests} "
        ],[
          "vis",
          [
            {"t":"{wi}tested{\/wi} positive for cocaine"},
            {"t":"the cake {wi}tested{\/wi} done"}
          ]
        ]
      ]
    }
  ]
]
    
```


XML Equivalent

```
<sensb>
  <sense snumb="1a(vi)">
    <sn>1 a</sn>
    <dt>{bc}to undergo a test</dt>
  </sense>
  <sense snumb="1b(vi)">
    <sn>b</sn>
    <dt>{bc}to be assigned a standing or evaluation on the basis of tests 
      <vi>{sdash}<it>ed</it> positive for cocaine</vi>
      <vi>the cake {sdash}<it>ed</it> done</vi>
    </dt>
  </sense>
</sensb>
    
```


The [sense number](#term-sn) identifies a [sense](#term-sense) or [subsense](#term-subsense) within the entry. A sense number `sn` may contain bold Arabic numerals, bold lowercase letters, or parenthesized Arabic numerals.

Hierarchical Context

Occurs within a `sense` or `sen`

Display Guidance

The sense number is typically displayed in bold.

Data Model

`"sn" :` `string`

Example

A sequence of three senses and sense numbers in the entry "tertiary".

```
[
  "sense",
  {
    "sn":"1 a",
    "dt":[["text","{bc}of third rank, importance, or value"]]
  }
],[
  "sense",
  {
    "sn":"b",
    "sls":["chiefly British"],
    "dt":[["text","{bc}of, relating to, or being higher education"]]
  }
],[
  "sense",
  {
    "sn":"c",
    "dt":[["text","{bc}of, relating to, or constituting the third strongest
     of the three or four degrees of stress recognized by most linguists (such
     as the stress of the third syllable of {it}basketball team{\/it})"]]
  }
]
    
```


XML Equivalent

```
<sensb>
  <sense snumb="1a">
    <sn>1 a</sn>
    <dt>{bc}of third rank, importance, or value</dt>
  </sense>
  <sense snumb="1b">
    <sn>b</sn>
    <ssl>chiefly Brit</ssl>
    <dt>{bc}of, relating to, or being higher education</dt>
  </sense>
  <sense snumb="1c">
    <sn>c</sn>
    <dt>{bc}of, relating to, or constituting the third strongest of the three
     or four degrees of stress recognized by most linguists (as the stress of the
     third syllable of <it>basketball team</it>)</dt>
  </sense>
</sensb>
    
```


The defining text is the text of the definition or translation for a particular [sense](#term-sense). _D_efining _t_ext is contained in `dt`.

Hierarchical Context

Occurs in a `sense` or `sdsense`

Display Guidance

Inline in normal font

Data Model

`"dt" :` `array` consisting of one or more elements:

`["text",` `string``]` where `string` contains the definition content (required)

optional `[bnw](#sec-2.bnw), [ca](#sec-2.ca), [ri](#sec-2.ri), [snote](#sec-2.snote), [uns](#sec-2.uns),` or `[vis](#sec-2.vis)` elements

Example

A definition of "test" containing both `text` and `vis` elements.

```
"dt":[
  [
    "text",
    "{bc}the procedure of submitting a statement to such conditions
     or operations as will lead to its proof or disproof or to its
     acceptance or rejection "
  ],[
    "vis",
    [
      {"t":"a {wi}test{\/wi} of a statistical hypothesis"}
    ]
  ]
]
    
```


XML Equivalent

```
<dt>
  {bc}the procedure of submitting a statement to such conditions
  or operations as will lead to its proof or disproof or to its
  acceptance or rejection 
  <vi>a {sdash} of a statistical hypothesis</vi>
</dt>
    
```


A [sense](#term-sense) may be divided into two parts to show a particular relationship between two closely related meanings. The second part of the sense is contained in an `sdsense`, consisting of an sense divider `sd` along with a second `dt`.

Hierarchical Context

Occurs within a `sense`, where it is always preceded by `dt`.

Display Guidance

The `sdsense` should be inline with the preceding `dt`. The `sd` is displayed in italics, preceded by a semicolon and space, and followed by a space.

Data Model

`"sdsense" :` `object` with the following members:


|"sd" : string                     |sense divider (required)  |
|----------------------------------|--------------------------|
|et, ins, lbs, prs, sgram, sls, vrs|(optional)                |
|dt                                |definition text (required)|


Example

An example of a divided sense from the entry "abiogenesis".

```
"def":[
  {
    "sseq":[
      [
        [
          "bs",
          {
            "sense":{
              "dt":[["text","{bc}the origin of life from nonliving matter"]],
              "sdsense":{
                "sd":"specifically",
                "dt":[
                  ["text","{bc}a theory in the evolution of early life on earth
                    {bc}organic molecules and subsequent simple life forms first
                    originated from inorganic substances "],
                  [etc...]
                ]
              }
            }
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<def>
  <sensb>
    <sense>
      <dt>{bc}the origin of life from nonliving matter</dt>
      <sd>specifically</sd>
      <dt>{bc}a theory in the evolution of early life on earth: organic molecules
       and subsequent simple life forms first originated from inorganic substances</dt>
       [etc...]
    </sense>
  </sensb>
</def>
    
```


A truncated sense is a [sense](#term-sense) without a definition, and is used almost exclusively when two [sense numbers](#term-sn) are separated by a non-definition element. For instance, if a [pronunciation](#term-pron) occurs in between a main sense number and a [subsense](#term-subsense) containing a definition, the truncated sense `sen` consists of the main sense number and the pronunciation.

Hierarchical Context

Occurs as an element in an `sseq` `array`.

Display Guidance

Handle the same as `[sense](#sec-2.sense)`.

Data Model

`object` or `array` containing at least one of the set `[et](#sec-2.et), [ins](#sec-2.ins), [lbs](#sec-2.lbs), [prs](#sec-2.prs), [sgram](#sec-2.sgram), [sls](#sec-2.sls), [sn](#sec-2.sn), [vrs](#sec-2.vrs)`

Example

Example of an `sen` truncated sense in the entry for "tab", followed by two full `sense` elements containing definition text `dt`. The `sen` element is considered truncated because it lacks a definition, but is otherwise similar to `sense`.

```
[
  [
    "sen",
    {
      "sn":"4",
      "et":[
        ["text","by shortening"]
      ]
    }
  ],[
    "sense",
    {
      "sn":"a",
      "dt":[
        ["text","{bc}{sx|tablet||}"]
      ]
    }
  ],[
    "sense",
    {
      "sn":"b",
      "dt":[
        ["text","{bc}{sx|tabloid||}"]
      ]
    }
  ]
]
    
```


XML Equivalent

Note that in XML senses without definitions were tagged identically to senses with definitions, ie, `<sense>`.

```
<sensb>
  <sense snumb="3">
    <sn>3</sn>
    <set>by shortening</set>
  </sense>
  <sense snumb="3a">
    <sn>a</sn>
    <dt>{bc}<sx>tabloid</sx></dt>
  </sense>
  <sense snumb="3b">
    <sn>b</sn>
    <dt>{bc}<sx>tablet</sx></dt>
  </sense>
</sensb>
    
```


The [binding substitute](#term-bs) is a broad, general sense introducing a series of senses that give more contextual and specific meanings.

Hierarchical Context

Occurs as an element in an `sseq` or `pseq` `array`, where it is followed by one or more `sense` elements.

Display Guidance

Inline in normal font

Data Model

`array` of the form `["bs", {[sense](#sec-2.sense)}]`

Example

An example of a `bs` in sense 2 of "feline". Please also see the example of a `bs` within a `[pseq](#sec-2.pseq)` below.

```
[
  [
    "bs",
    {
      "sense":{
        "sn":"2",
        "dt":[["text","{bc}resembling a cat: such as"]]
      }
    }
  ],[
    "sense",{
      "sn":"a",
      "dt":[["text","{bc}sleekly graceful"]]
    }
  ],[
    "sense",
    {
      "sn":"b",
      "dt":[["text","{bc}{sx|sly||}, {sx|treacherous||}"]]
    }
  ],[
    "sense",
    {
      "sn":"c",
      "dt":[["text","{bc}{sx|stealthy||}"]]
    }
  ]
]
    
```


XML Equivalent

```
<sensb>
  <sense snumb="2">
    <sn>2</sn>
    <dt>{bs}{bc}resembling a cat: as</dt>
  </sense>
  <sense snumb="2a">
    <sn>a</sn>
    <dt>{bc}sleekly graceful</dt>
  </sense>
  <sense snumb="2b">
    <sn>b</sn>
    <dt>{bc}<sx>sly</sx> <sx>treacherous</sx></dt>
  </sense>
  <sense snumb="2c">
    <sn>c</sn>
    <dt>{bc}<sx>stealthy</sx>{bs}</dt>
  </sense>
</sensb>
    
```


The parenthesized [sense sequence](#term-sseq) groups together [senses](#term-sense) whose [sense numbers](#term-sn) form a sequence of parenthesized numbers.

Hierarchical Context

Occurs as an element in an `sseq` `array`.

Display Guidance

If you are generating sense numbers for `sense` elements in a `pseq` sequence, put parentheses around the number. For example, the second `sense` in a sequence should have "(2)" as its sense number.

If you are instead using the `sn` to display the sense number, it will already contain the parentheses.

Data Model

`array` consisting of one or more `[sense](#sec-2.sense)` elements and an optional `[bs](#sec-2.bs)` element.

Example

In this example from "tab", the `pseq` contains a sequence of three elements: `bs` (binding substitute), `sense`, and `sense`. The sense numbers generated at each `sense` should be in parentheses.

```
[
  "pseq",
  [
    [
      "bs",
      {
        "sense":{
          "sn":"1 a",
          "dt":[
            ["text","{bc}a short projecting device: such as"]
          ]
        }
      }
    ],[
      "sense",
      {
        "sn":"(1)",
        "dt":[
          ["text","{bc}a small flap or loop by which something may be grasped
          or pulled"]
        ]
      }
    ],[
      "sense",
      {
        "sn":"(2)",
        "dt":[
          ["text","{bc}a projection from a card used as an aid in filing"]
        ]
      }
    ]
  ]
]
    
```


XML Equivalent

```
<sense snumb="1a">
  <sn>1 a</sn>
  <dt>{bs}{bc}a short projecting device: as</dt>
</sense>
<sense snumb="1a(1)">
  <sn>
    <snp>(1)</snp>
  </sn>
  <dt>{bc}a small flap or loop by which something may be grasped
  or pulled</dt>
</sense>
<sense snumb="1a(2)">
  <sn>
    <snp>(2)</snp>
  </sn>
  <dt>{bc}a projection from a card used as an aid in filing{bs}</dt>
</sense>
    
```


A [verbal illustration](#term-vi) is an example sentence illustrating how a word is used in context. It may either be a made-up sentence or a quotation from a cited source. A set of _v_erbal _i_llustration_s_ is contained in a `vis`.

Hierarchical Context

Occurs in `dt, et_snote, pt, snote, uns, utxt`.

Display Guidance

A [verbal illustration](#term-vi) is typically set off from surrounding text (as by surrounding the entire illustration in angle brackets).

Data Model

`Array` of the form `["vis", [{``object``}]]`, where each object may contain the members:

`"t" :` `string`  text of verbal illustration

optional `[aq](#sec-2.aq)` (used when verbal illustration is an _a_uthor _q_uotation as opposed to made-up example)

Example

[Verbal illustrations](#term-vi) `vis` in the second homograph of "above".

```
[
  "sense",
  {
    "sn":"2 a",
    "dt":[
      ["text","{bc}superior to (as in rank, quality, or degree) "],
      [
        "vis",
        [
          {"t":"A sergeant is {wi}above{\/wi} a corporal."}
        ]
      ]
    ]
  }
],[
  "sense",
  {
    "sn":"b",
    "dt":[
      ["text","{bc}out of reach of "],
      [
        "vis",
        [
          {"t":"{wi}above{\/wi} suspicion"}
        ]
      ]
    ]
  }
],[
  "sense",
  {
    "sn":"c",
    "dt":[
      ["text","{bc}in preference to "],
      [
        "vis",
        [
          {"t":"puts his child\u0027s needs {wi}above{\/wi} his
          own needs"}
        ]
      ]
    ]
  }
],[
  "sense",
  {
    "sn":"d",
    "dt":[
      ["text","{bc}too proud or honorable to stoop to "],
      [
        "vis",
        [
          {"t":"not {wi}above{\/wi} taking undue credit"}
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<sense>
  <sn>2 a</sn>
  <dt>{bc}superior to (as in rank, quality, or degree)
    <vis>
      <vi>
        <t>A sergeant is {wi}above{/wi} a corporal.</t>
      </vi>
    </vis>
  </dt>
</sense>
<sense>
  <sn>b</sn>
  <dt>{bc}out of reach of
    <vis>
      <vi>
        <t>{wi}above{/wi} suspicion</t>
      </vi>
    </vis>
  </dt>
</sense>
<sense>
  <sn>c</sn>
  <dt>{bc}in preference to
    <vis>
      <vi>
        <t>puts his child's needs {wi}above{/wi} his own needs</t>
      </vi>
    </vis>
  </dt>
</sense>
<sense>
  <sn>d</sn>
  <dt>{bc}too proud or honorable to stoop to
    <vis>
      <vi>
        <t>not {wi}above{/wi} taking undue credit</t>
      </vi>
    </vis>
  </dt>
</sense>
    
```


Direct quotes are used in both [verbal illustrations](#term-vi) and end-of-entry quotation sections. Information about the _a_ttribution (the author, publication, date, etc.) of a particular _q_uote is contained in an `aq`.

Hierarchical Context

Occurs in `quotes, vis`.

Display Guidance

The `aq` is typically preceded by an em-dash.

Each instance of `auth, source, aqdate,` should be followed by a comma and space.

Data Model

`"aq" :` `object`, which may contain the members:

`"auth" :` `string`  name of author

`"source" :` `string`  source work for quote

`"aqdate" :` `string`  publication date of quote

`"subsource" :` `object`  further detail on quote source (eg, name of larger work in which an essay is found); may contain the members `source` and `aqdate` (described above)

Example

Use of `aq` in the entry for "alliteration".

```
"quotes":[
  {
    "t":"More specifically, how are actual events deformed by the application
    to them of metaphor, rhetorical comparison, prose rhythm, assonance,
    {qword}alliteration{\/qword}, allusion, and sentence structures and
    connectives implying clear causality?",
    "aq":{
      "auth":"Paul Fussel",
      "source":"{it}The Great War and Modern Memory{\/it}",
      "aqdate":"1975"
    }
  },{
    "t":"As far as sound repetition goes, I don\u0027t have any principles.
    I try to stay away from heavy {qword}alliteration{\/qword} and other
    pyrotechnics because I think they detract from the sense of the poem
    and blur the imagery.",
    "aq":{
      "auth":"Maxine Kumin",
      "source":"\u0022A Questionnaire\u0022",
      "aqdate":"1977",
      "subsource":{
        "source":"in {it}To Make a Prairie{\/it}",
        "aqdate":"1979"
      }
    }
  }
]
    
```


XML Equivalent

```
<quotes>
  <quote>
    <t>More specifically, how are actual events deformed by
    the application to them of metaphor, rhetorical comparison, prose
    rhythm, assonance, {qword}alliteration{/qword}, allusion, and
    sentence structures and connectives implying clear causality? </t>
    <aq>
      <source>Paul Fussel, {it}The Great War and Modern Memory{/it}, </source>
      <aqdate>1975</aqdate>
    </aq>
  </quote>
  <quote>
    <t>As far as sound repetition goes, I don't have any principles.
    I try to stay away from heavy {qword}alliteration{/qword} and other
    pyrotechnics because I think they detract from the sense of the poem
    and blur the imagery. </t>
    <aq>
      <source>Maxine Kumin, “A Questionnaire,” </source>
      <aqdate>1977</aqdate>
      <subsource>
        <source>, in {it}To Make a Prairie{/it}, </source>
        <aqdate>1979</aqdate>
      </subsource>
    </aq>
  </quote>
</quotes>
    
```


### 2.13 Run-In: `ri`

A [run-in entry word](#term-rie) is a defined word that occurs in the running text of an [entry](#term-entry). The _r_un-_i_n `ri` groups together one or more _r_un-_i_n _e_ntry words `rie` and any accompanying [pronunciations](#term-pron) or [variants](#term-va). Run-ins occur most frequently in geographical entries.

Hierarchical Context

Occurs in `dt, et_snote, snote, uns`.

Display Guidance

Inline in normal font, except for `rie` which is typically displayed in bold.

Data Model

`Array` of the form `["ri", [[``array``]]]`, where each element may contain:

`"riw",` `object`  _r_un-_i_n _w_rap which may contain:

`{"rie" :` `string``}`  _r_un-_i_n _e_ntry word

optional `[prs](#sec-2.prs)`

`"text",` `string`  intervening text

optional `[vrs](#sec-2.vrs)`

Example

A run-in `ri` with two run-in entry words `rie` in the geographical entry "Abaco".

```
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "dt":[
              ["text","two islands of the Bahamas ("],
              [
                "ri",
                [
                  [
                    "riw",
                    {"rie":"Great Abaco"}
                  ],[
                    "text"," and "
                  ],[
                    "riw",
                    {"rie":"Little Abaco"}
                  ]
                ]
              ],[
                "text",
                " ) north of New Providence Island {it}area{\/it}
                776 square miles (2018 square kilometers),
                {it}population{\/it} 13,170"
              ]
            ]
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<def>
  <sensb>
    <sense>
      <dt>two islands of Bahamas (
        <ri>
          <rie>Great Abaco</rie>
          {amp}
          <rie>Little Abaco</rie>
        </ri>
      ) <g>N</g> of New Providence Is. <it>area</it> 776 <it>sq mi</it>
      (2018 <it>sq km</it>), <it>pop</it> 13,170</dt>
    </sense>
  </sensb>
</def>
    
```


A biographical name wrap groups together personal name, surname, and alternate name information within a biographical [entry](#term-entry). The _b_iographical _n_ame _w_rap is contained in a `bnw`.

Hierarchical Context

Occurs in `dt`.

Display Guidance

A `bnw` is displayed inline and followed by a comma and space.

A `pname` or `sname` is typically displayed in normal font.

An `altname` is typically displayed in italics.

Data Model

`Array` of the form `"bnw",` `object`, which may contain the members:

`"pname" :` `string`  _p_ersonal or first _name_

`"sname" :` `string`  _s_ur_name_

`"altname" :` `string`  _alt_ernate _name_ such as pen name, nickname, title, etc.

Example

A biographical name wrap `bnw` in the entry for "Dodgson".

```
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "dt":[
              [
                "bnw",
                {
                  "pname":"Charles Lut*widge",
                  "prs":[
                    {
                      "mw":"\u02c8l\u0259t-wij",
                      "sound":{"audio":"bixdod04","ref":"c","stat":"1"}
                    }
                  ]
                }
              ],[
                "text",
                "1832\u20131898 pseudonym"
              ],[
                "bnw",
                {
                  "altname":"Lewis Car*roll",
                  "prs":[
                    {
                      "mw":"\u02c8ker-\u0259l",
                      "sound":{"audio":"bixdod05","ref":"c","stat":"1"}
                    },{
                      "mw":"\u02c8ka-r\u0259l"
                    }
                  ]
                }
              ],[
                "text",
                " English mathematician and writer"
              ]
            ]
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<def>
  <vg>
    <sseq>
      <sb>
        <sense>
          <dt>
            <bnw>
              <pname>Charles Lut*widge</pname>
              <prs>
                <pr>
                  <mw>ˈlət-wij</mw>
                  <sound>
                    <audio>bixdod04</audio>
                    <ref>c</ref>
                    <stat>1</stat>
                  </sound>
                </pr>
              </prs>
            </bnw>
            1832–1898 pseudonym
            <bnw>
              <altname>Lewis Car*roll</altname>
              <prs>
                <pr>
                  <mw>ˈka-rəl</mw>
                  <sound>
                    <audio>bixdod05</audio>
                    <ref>c</ref>
                    <stat>1</stat>
                  </sound>
                </pr>
              </prs>
            </bnw>
             English mathematician and writer
          </dt>
        </sense>
      </sb>
    </sseq>
  </vg>
</def>
    
```


A called-also note lists other names a [headword](#term-headword) is called in a given [sense](#term-sense). The _c_alled-_a_lso note is contained in a `ca`.

Hierarchical Context

Occurs in `dt`.

Display Guidance

A `ca` is preceded by an em-dash and a space.

The `intro` is typically displayed in normal font, and the `cat` in italics.

The `pn` is displayed in parentheses, followed by a space.

Note that a `ca` is typically found at an entry providing detailed definition content, and hence a hyperlink is not generated for the `cat` target. If the `cat` target is entered separately in the dictionary, that entry will typically have a cross-reference back to the detailed entry where the `ca` occurs.

Note, however, that where a `catref` is present, it may be used to generate a hyperlink if desired.

Data Model

`Array` of the form `"ca",` `object`, which may contain the members:

`"intro" :` `string`  contains introductory text "called also"

`"cats" :` `array`  of one or more _c_alled-_a_lso _t_arget_s_, each of which may contain:

`"cat" :` `string`  _c_alled-_a_lso _t_arget text

`"catref" :` `string`  _c_alled-_a_lso _ref_erence containing target ID

`"pn" :` `string`  _p_arenthesized _n_umber

optional `[prs](#sec-2.prs), [psl](#sec-2.psl)`

Example

A `ca` called-also note in the entry "abaca".

```
[
  "sense",
  {
    "sn":"1",
    "dt":[
      [
        "text",
        "{bc}a strong fiber obtained from the leafstalk of a banana
        ({it}Musa textilis{\/it}) native to the Philippines "
      ],[
        "ca",
        {
          "intro":"called also",
          "cats":[
            {"cat":"Manila hemp"}
          ]
        }
      ]
    ]
  }
]
    
```


XML Equivalent

```
<sensb>
  <sense snumb="1">
    <sn>1</sn>
    <dt>
      {bc}a strong fiber obtained from the leafstalk of a banana
      (<it>Musa textilis</it>) native to the Philippines
      <ca>called also <cat>Manila hemp</cat></ca>
    </dt>
  </sense>
</sensb>
    
```


### 2.16 Supplemental Information Note: `snote`

This note provides explanatory or historical information that supplements the definition text. The _s_upplemental information _note_ is contained in an `snote`.

Hierarchical Context

Occurs in `dt`.

Display Guidance

Typically displayed after a newline and in normal font. May be preceded with introductory text such as "Note: ".

Data Model

`Array` of the form `["snote", [``array``]]` containing the elements:

Required `["t",` `string``]` where `string` contains the supplemental information note text.

Optional `[ri](#sec-2.ri)` and `[vis](#sec-2.vis)` elements.

Example

An `snote` in the entry "manatee".

```
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "dt":[
              [
                "text",
                "{bc}any of a genus ({it}Trichechus{\/it} of the family
                Trichechidae) of large, herbivorous, aquatic mammals
                that inhabit warm coastal and inland waters of the
                southeastern U.S., West Indies, northern South America,
                and West Africa and have a rounded body, a small head
                with a squarish snout, paddle-shaped flippers usually
                with vestigial nails, and a flattened, rounded tail
                used for propulsion "
              ],[
                "snote",
                [
                  [
                    "t",
                    "Manatees are {d_link|sirenians|sirenian} related to and
                    resembling the {d_link|dugong|dugong} but differing most
                    notably in the shape of the tail."
                  ],[
                    "vis",
                    [
                      {
                        "t":"An aquatic relative of the elephant,
                        {wi}manatees{\/wi} grow up to nine feet long
                        and can weigh 1,000 pounds.",
                        "aq":{"auth":"Felicity Barringer"}
                      }
                    ]
                  ]
                ]
              ]
            ]
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<def>
  <vg>
    <sseq>
      <sb>
        <sense>
          <dt>{bc}any of a genus ({it}Trichechus{/it} of the family
          Trichechidae) of large, herbivorous, aquatic mammals that inhabit
          warm coastal and inland waters of the southeastern U.S., West Indies,
          northern South America, and West Africa and have a rounded body, a
          small head with a squarish snout, paddle-shaped flippers usually with
          vestigial nails, and a flattened, rounded tail used for propulsion
            <snote>
              <t>Manatees are {d_link|sirenians|sirenian} related to and
              resembling the {d_link|dugong|dugong} but differing most notably
              in the shape of the tail.</t>
              <vis>
                <vi>
                  <t>An aquatic relative of the elephant, {wi}manatees{/wi}
                  grow up to nine feet long and can weigh 1,000 pounds. </t>
                  <aq><auth>Felicity Barringer</auth></aq>
                </vi>
              </vis>
            </snote>
          </dt>
        </sense>
      </sb>
    </sseq>
  </vg>
</def>
    
```


Provide usage information on a [headword](#term-headword), [defined run-on phrase](#term-drp), or [undefined entry word](#term-ure). A series of one or more _u_sage _n_ote_s_ is contained in an `uns`.

Hierarchical Context

Occurs in `dt, utxt`.

Display Guidance

An `uns` is typically displayed inline in normal font, preceded by a space and an em-dash.

Data Model

`Array` of the form `["uns", [[``array``]]]`, where each individual usage note array may contain the elements:

Required `["text",` `string``]` where `string` contains the usage note text.

Optional `[ri](#sec-2.ri)` and `[vis](#sec-2.vis)` elements.

Example

An example of `uns` in the entry for "abeyance".

```
[
  "sense",
  {
    "sn":"1",
    "dt":[
      [
        "text",
        "{bc}a state of temporary inactivity {bc}{sx|suspension||} "
      ],[
        "uns",
        [
          [
            [
              "text",
              "used chiefly in the phrase {phrase}in abeyance{\/phrase} "
            ],[
              "vis",
              [
                {
                  "t":"\u2026 new contracts on all but one existing mine \u2026
                  are {wi}in abeyance{\/wi} pending the outcome of a government
                  inquiry to be carried out into Australia\u0027s role in the
                  nuclear fuel cycle.",
                  "aq":{"auth":"Vimala Sarma"}
                },{
                  "t":"a plan that is currently being held {wi}in abeyance{\/wi}"
                }
              ]
            ]
          ]
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<sense>
  <sn>1</sn>
  <dt>{bc}a state of temporary inactivity {bc}{sx|suspension||}
    <uns>
      <un>used chiefly in the phrase {phrase}in abeyance{/phrase}
        <vis>
          <vi>
            <t>… new contracts on all but one existing mine … are
            {wi}in abeyance{/wi} pending the outcome of a government inquiry
            to be carried out into Australia's role in the nuclear fuel
            cycle. </t>
            <aq><auth>Vimala Sarma</auth></aq>
          </vi>
          <vi>
            <t>a plan that is currently being held {wi}in abeyance{/wi}</t>
          </vi>
        </vis>
      </un>
    </uns>
  </dt>
</sense>
    
```


An [undefined entry word](#term-ure) is derived from or related to the [headword](#term-headword), carries a [functional label](#term-fl) and possibly other information, but does not have any definitions. A set of [_u_ndefined _r_un-_o_n_s_](#term-uro) `uros` can follow (or "run on" from) the entry's main `def` definition section, with each such run-on containing a `ure` _u_ndefined _e_nt_r_y word.

Hierarchical Context

Top-level member of dictionary entry; when present, occurs just after the top-level `def` definition section.

Display Guidance

In a set of undefined run-ons, each could be displayed in a new paragraph or kept inline, depending on space considerations.

The `ure` is displayed in bold, preceded by an em-dash, and followed by a space.

Data Model

`"uros" :` `array` of one or more undefined run-on `objects`, which may contain the members:

`"ure" :` `string`  _u_ndefined _e_nt_r_y word

required `[fl](#sec-2.fl)`

`"utxt" :` `array`  _u_ndefined run-on _t_e_xt_ section containing `[vis](#sec-2.vis)` and/or `[uns](#sec-2.uns)` elements

optional `[ins](#sec-2.ins), [lbs](#sec-2.lbs), [prs](#sec-2.prs), [psl](#sec-2.psl), [sls](#sec-2.sls), [vrs](#sec-2.vrs)`

Example

An undefined run-on in the entry "threatening".

```
"uros":[
  {
    "ure":"threat*en*ing*ly",
    "prs":[
      {
        "mw":"\u02c8thret-ni\u014b-l\u0113",
        "sound":{"audio":"threat05","ref":"c","stat":"1"}
      },{
        "mw":"\u02c8thre-t\u1d4an-i\u014b-"
      }
    ],
    "fl":"adverb",
    "utxt":[
      [
        "vis",
        [
          {"t":"gestured {wi}threateningly{\/wi}"}
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<uros>
  <uro>
    <ure>threat*en*ing*ly</ure>
    <prs>
      <pr>
        <mw>ˈthret-niŋ-lē</mw>
        <sound><audio>threat05</audio><ref>c</ref><stat>1</stat></sound>
      </pr>
      <pr>
        <mw>ˈthre-tᵊn-iŋ-</mw>
      </pr>
    </prs>
    <fl>adverb</fl>
    <utxt>
      <vis>
        <vi>
          <t>gestured {wi}threateningly{/wi}</t>
        </vi>
      </vis>
    </utxt>
  </uro>
</uros>
    
```


A [defined run-on phrase](#term-drp) is an expression or phrasal verb formed from the [headword](#term-headword). This phrase, its definition section, and other information such as pronunciations, together make up a [defined run-on](#term-dro). A set of _d_efined _r_un-_o_n_s_ `dros` can follow (or "run on" from) the entry's main `def` definition section, with each such run-on containing a `drp` _d_efined _r_un-on _p_hrase.

Hierarchical Context

Top-level member of dictionary entry. Occurs after `uros` if present, otherwise after `def`.

Display Guidance

Each defined run-on is typically displayed in a new paragraph.

The `drp` is displayed in bold and preceded by an em-dash.

Data Model

`"dros" :` `array` of one or more defined run-on `objects`, which may contain the members:

`"drp" :` `string`  _d_efined _r_un-on _p_hrase

required `[def](#sec-2.def)`

optional `[et](#sec-2.et), [lbs](#sec-2.lbs), [prs](#sec-2.prs), [psl](#sec-2.psl), [sls](#sec-2.sls), [vrs](#sec-2.vrs)`

Example

A defined run-on containing a defined run-on phrase `drp` in the entry "abide".

```
"dros":[
  {
    "drp":"abide by",
    "def":[
      {
        "sseq":[
          [
            [
              "sense",
              {
                "sn":"1",
                "dt":[
                  [
                    "text",
                    "{bc}to conform to "
                  ],[
                    "vis",
                    [
                      {"t":"{it}abide by{\/it} the rules"}
                    ]
                  ]
                ]
              }
            ]
          ],[
            [
              "sense",
              {
                "sn":"2",
                "dt":[
                  [
                    "text",
                    "{bc}to accept without objection {bc}to
                    {d_link|acquiesce|acquiesce} in "
                  ],[
                    "vis",
                    [
                      {"t":"will {it}abide by{\/it} your decision"}
                    ]
                  ]
                ]
              }
            ]
          ]
        ]
      }
    ]
  }
]
    
```


XML Equivalent

```
<dro>
  <drp>abide by</drp>
  <def>
    <sensb>
      <sense snumb="1">
        <sn>1</sn>
        <dt>{bc}to conform to
          <vi><it>abide by</it> the rules</vi>
        </dt>
      </sense>
    </sensb>
    <sensb>
      <sense snumb="2">
        <sn>2</sn>
        <dt>{bc}to <d_link ref="acquiesce">acquiesce</d_link> in
          <vi>will <it>abide by</it> your decision</vi>
        </dt>
      </sense>
    </sensb>
  </def>
</dro>
    
```


Directional cross-references to other entries may be presented after the main [definition section](#term-def). A set of one or more directional cross-references is contained in `dxnls`.

Hierarchical Context

Top-level member of dictionary entry, occurring near end of entry.

Display Guidance

Display in a separate paragraph.

Data Model

`"dxnls" :` `array` of `strings` containing directional cross-references. See `[{dxt}](#sec-2.xreftokens)` for more information.

Example

A `dxnls` in the geographical entry "Acadia".

```
"dxnls":[
  "see also {dxt|acadian||}"
]
    
```


XML Equivalent

```
<dxnls>
  <dxnl>see also {dxt|acadian||}</dxnl>
</dxnls>
```


In addition to [usage notes](#sec-2.uns) within definitions, a more extensive usage discussion may be included in the [entry](#term-entry). A set of usage discussions makes up a _usage_ _s_ection, which is contained in `usages`.

Hierarchical Context

Top-level member of dictionary entry, occurring near end of entry.

Display Guidance

Typically displayed in a separate paragraph, using the `pl` contents as a heading.

A `uarefs` is preceded by "usage " in bold, then "see in addition " in normal font, followed by one or more `uaref` members rendered as hyperlinks to other usage sections.

Data Model

`"usages" :` `array` of one or more usage `objects` containing the members:

`"pl" :` `string`  _p_aragraph _l_abel: heading to display at top of section

`"pt" : [``array``]`  _p_aragraph _t_ext containing the elements:

`"text",` `string`  usage discussion text

`[vis](#sec-2.vis)`

`"uarefs" :` `object`  containing one or more:

`"uaref" :` `string`  _u_sage see in _a_ddition _ref_erence: contains the text and ID of a "see in addition" reference to another usage section.

Example

A `usages` section in the third homograph of "above".

```
"usages":[
  {
    "pl":"Using {parahw}above{\/parahw} as an Adjective or Noun",
    "pt":[
      [
        "text","Although still objected to by some, the use of {it}above{\/it}
        as a noun to mean \u0022something that is above\u0022 "
      ],[
        "vis",
        [
          {"t":"none of the {it}above{\/it}"},
          {
            "t":"the {it}above{\/it} is Theseus\u0027s opinion",
            "aq":{"auth":"William Blake"}
          }
        ]
      ],[
        "text",
        " and as an adjective "
      ],[
        "vis",
        [
          {
            "t":"without the {it}above{\/it} reserve",
            "aq":{"auth":"O. W. Holmes \u20201935"}
          },{
            "t":"I was brought up on the {it}above{\/it} words",
            "aq":{"auth":"Viscount Montgomery"}
          }
        ]
      ],[
        "text",
        " has been long established as standard."
      ]
    ]
  }
]
    
```


XML Equivalent

```
<pl>usage</pl>
<pt>
  Although still objected to by some, the use of <it>above</it>
  as a noun in sense 1a 
  <vi>none of the <it>above</it></vi>
  <vi>the <it>above</it> is Theseus's opinion
    <aq>William Blake</aq>
  </vi>
  and as an adjective 
  <vi>without the <it>above</it> reserve
    <aq>O. W. Holmes {dagger}1935</aq>
  </vi>
  <vi>I was brought up on the <it>above</it> words
    <aq>Viscount Montgomery</aq>
  </vi>
  has been long established as standard.
</pt>
    
```


Extensive discussions of synonyms for the [headword](#term-headword) may be included in the [entry](#term-entry). A set of such synonym discussions makes up a _syn_onym _s_ection, which is contained in `syns`.

Hierarchical Context

Top-level member of dictionary entry, occurring near end of entry.

Display Guidance

Typically displayed in a separate paragraph with a heading such as "Synonym Discussion of \[headword\]".

An `sarefs` is preceded by "synonyms " in bold, then "see in addition " in normal font, then the `sarefs` array elements rendered as hyperlinks to other synonym sections.

Data Model

`"syns" :` `array` of one or more synonym discussion `objects` containing the members:

`"pl" :` `string`  _p_aragraph _l_abel: heading to display at top of section

`"pt" : [``array``]`  _p_aragraph _t_ext containing the elements:

`"text",` `string`  synonym discussion text

`[vis](#sec-2.vis)`

`"sarefs" :` `array`  _s_ee in _a_ddition _ref_erence: contains one or more elements, each of which is the text and ID of a "see in addition" reference to another synonym section.

Example

A `syns` synonym section in the entry "agree".

```
"syns":[
  {
    "pl":"synonyms",
    "pt":[
      [
        "text",
        "{sc}agree{\/sc} {sc}concur{\/sc} {sc}coincide{\/sc} mean to come
        into or be in harmony regarding a matter of opinion. {sc}agree{\/sc}
        implies complete accord usually attained by discussion and
        adjustment of differences. "
      ],[
        "vis",
        [
          {"t":"on some points we all can {it}agree{\/it}"}
        ]
      ],[
        "text",
        " {sc}concur{\/sc} often implies approval of someone else\u0027s
        statement or decision. "
      ],[
        "vis",
        [
          {"t":"if my wife {it}concurs{\/it}, it\u0027s a deal"}
        ]
      ],[
        "text",
        " {sc}coincide{\/sc}, used more often of opinions, judgments,
        wishes, or interests than of people, implies total agreement. "
      ],[
        "vis",
        [
          {"t":"their wishes {it}coincide{\/it} exactly with my desire"}
        ]
      ]
    ],
    "sarefs":[
      "assent"
    ]
  }
]
    
```


XML Equivalent

```
<syns>
  <syn>
    <pl>synonyms</pl>
    <pt>{sc}agree{/sc} {sc}concur{/sc} {sc}coincide{/sc} mean to
    come into or be in harmony regarding a matter of opinion. {sc}agree{/sc}
    implies complete accord usually attained by discussion and adjustment
    of differences. <vis><vi><t>on some points we all
    can {it}agree{/it}</t></vi></vis> {sc}concur{/sc} often
    implies approval of someone else's statement or decision.
    <vis>
      <vi>
        <t>if my wife {it}concurs{/it}, it's a deal</t>
      </vi>
    </vis>
    {sc}coincide{/sc}, used more often of opinions, judgments, wishes,
    or interests than of people, implies total agreement.
    <vis>
      <vi>
        <t>their wishes {it}coincide{/it} exactly with my desire</t>
      </vi>
    </vis>
    </pt>
    <sarefs>
      <saref>assent</saref>
    </sarefs>
  </syn>
</syns>
    
```


In addition to the [verbal illustrations](#term-vi) provided throughout the entry, a larger section of quotations from cited sources is sometimes included. A set of _quotes_ is contained in `quotes`.

Hierarchical Context

Top-level member of dictionary entry, occurring near end of entry.

Display Guidance

Quotations are typically displayed in a separate paragraph with a heading such as "Examples of \[headword\] in a Sentence".

Data Model

`"quotes" :` `array` of one or more quote `objects` containing the members:

`"t" :` `string`  quotation text (required)

`[aq](#sec-2.aq)` (required)

Example

A `quotes` section at the entry for "tedious".

```
quotes":[
  {
    "t":"Another of their assignments was to slow-fly any plane that had
    a new engine to break it in; that meant flying the aircraft for a
    {qword}tedious{\/qword} hour-and-a-half as slowly as it would possibly
    go without falling out of the sky.",
    "aq":{
      "auth":"Doris Weatherford",
      "source":"{it}American Women and World War II{\/it}",
      "aqdate":"1990"
    }
  },{
    "t":"Writing a new spreadsheet or word-processing program these
    days is a {qword}tedious{\/qword} process, like building a skyscraper
    out of toothpicks.",
    "aq":{
      "auth":"Jeff Goodell",
      "source":"{it}Rolling Stone{\/it}",
      "aqdate":"16 June 1994"
    }
  },{
    "t":"From there, it became clear that the deposition was going to
    be neither as undramatic nor as quotidian, and even {qword}tedious{\/qword},
    as it at first appeared.",
    "aq":{
      "auth":"Renata Adler",
      "source":"{it}New Yorker{\/it}",
      "aqdate":"June 23, 1986"
    }
  }
],
"text",
    "Middle English, from Late Latin {it}taediosus{\/it}, from Latin
    {it}taedium{\/it} {dx_ety}see {dxt|tedium||}{\/dx_ety}"
  ]
],
"date":"15th century",
"ld_link":{
  "link_hw":"tedious",
  "link_fl":"adjective"
},
"suppl":{
  "examples":[
    {
      "t":"He made a {it}tedious{\/it} 45-minute speech."
    },{
      "t":"The work is {it}tedious{\/it}, but it needs to get done."
    }
  ]
} -->
    
```


XML Equivalent

```
<quote>
  Another of their assignments was to slow-fly any plane that had a new
  engine to break it in; that meant flying the aircraft for a <qword>tedious</qword>
  hour-and-a-half as slowly as it would possibly go without falling
  out of the sky. 
  <aq>Doris Weatherford, <it>American Women and World War II</it>,
    <aqdate>1990</aqdate>
  </aq>
</quote>
<quote>
  Writing a new spreadsheet or word-processing program these days is a
  <qword>tedious</qword> process, like building a skyscraper
  out of toothpicks.
  <aq>Jeff Goodell, <it>Rolling Stone</it>,
    <aqdate>16 June 1994</aqdate>
  </aq>
</quote>
<quote>
  From there, it became clear that the deposition was going to be neither
  as undramatic nor as quotidian, and even <qword>tedious</qword>,
  as it at first appeared.
  <aq>Renata Adler, <it>New Yorker</it>,
    <aqdate>June 23, 1986</aqdate>
  </aq>
</quote>
    
```


[Entries](#term-entry) may have illustrations to provide a visual depiction of the [headword](#term-headword). All information needed to display an image is contained in `art`.

Hierarchical Context

Top-level member of dictionary entry, occurring near the end of the entry.

Display Guidance

When displaying an image on a page, it is typically preceded by lead-in text such as "Illustration of \[headword\]".

See Data Model below for more information on linking to a Merriam-Webster page containing both image and caption vs linking directly to the image.

Data Model

`"art" :` `object`  containing the following members:

`"artid" :` `string`  filename of target image

`"capt" :` `string`  image caption text

1\. If you want to link to a separate page containing both image and caption, the URL should be in the following form: https://www.merriam-webster.com/art/dict/\[base filename\].htm where \[base filename\] equals the value of `artid`. For the Example below, this URL would be: [https://www.merriam-webster.com/art/dict/heart.htm](https://www.merriam-webster.com/art/dict/heart.htm)

2\. If you prefer to link directly to the image, the URL should be in the following form: https://www.merriam-webster.com/assets/mw/static/art/dict/\[base filename\].gif where \[base filename\] equals the value of `artid`. Use the content of `capt` to pull in the caption content. For the Example below, this URL would be: [https://www.merriam-webster.com/assets/mw/static/art/dict/heart.gif](https://www.merriam-webster.com/assets/mw/static/art/dict/heart.gif)

Example

An `art` object in the entry for "heart".

```
"art":{
  "artid":"heart",
  "capt":"heart 1a: {it}1{\/it} aorta, {it}2{\/it} pulmonary artery,
  {it}3{\/it} left atrium, {it}4{\/it} left ventricle, {it}5{\/it} right ventricle,
  {it}6{\/it} right atrium"
}
    
```


XML Equivalent

```
<art>
  <artid>heart</artid>
  <capt>heart 1a: {it}1{/it} aorta, {it}2{/it} pulmonary artery,
  {it}3{/it} left atrium, {it}4{/it} left ventricle, {it}5{/it} right ventricle,
  {it}6{/it} right atrium</capt>
</art>
    
```


A reference from an entry to a table is contained in `table`.

Hierarchical Context

Top-level member of dictionary entry, occurring near the end of the entry.

Display Guidance

Typically presented as a link in a separate paragraph, where the link text is provided by `displayname`. The table is generally presented as an image on a separate page.

Data Model

`"table" :` `object`  containing the following members:

`"tableid" :` `string`  ID of the target table

`"displayname" :` `string`  text to display in table link

A table reference URL should be in the following form: https://www.merriam-webster.com/table/collegiate/\[base filename\].htm where \[base filename\] equals the value of `tableid`.

Example

A `table` reference in the _Collegiate_ entry for "alphabet". If you were to generate a table reference URL here, it would be: [https://www.merriam-webster.com/table/collegiate/alphabet.htm](https://www.merriam-webster.com/table/collegiate/alphabet.htm)

```
"table":{
  "tableid":"alphabet",
  "displayname":"Alphabet Table"
}
    
```


XML Equivalent

```
<table>
  <tableid>alphabet</tableid>
  <displayname>Alphabet Table</displayname>
</table>
    
```


An [etymology](#term-et) is an explanation of the historical origin of a word. While the etymology contained in an `et` most typically relates to the [headword](#term-headword), it may also explain the origin of a [defined run-on phrase](#term-drp) or a particular [sense](#term-sense).

Hierarchical Context

Occurs as top-level member of dictionary entry and in `dros, sdsense, sen,` or `sense`.

Display Guidance

Typically displayed inline within square brackets or in its own block with a heading such as "Word Origin".

Data Model

`"et" :` `array` consisting of one or more elements:



* ["text", string]: ["et_snote",[["t", string]]]
  * contains the etymology content (required): contains a supplemental information note for the etymology (optional)


Example

The etymology for the first homograph of "traffic".

```
"et":[
  [
    "text",
    "Middle French {it}trafique{\/it}, from Old Italian {it}traffico{\/it},
     from {it}trafficare{\/it} to trade in coastal waters"
  ]
]
    
```


XML Equivalent

Note that in JSON an `et` for a headword occurs near the end of the entry, whereas in XML it occurs near the beginning.

```
<et>MF <it>trafique,</it> fr. OIt <it>traffico,</it> fr. <it>trafficare</it> to trade in coastal waters</et>
    
```


The date of the earliest recorded use of a [headword](#term-headword) in English is captured in `date`.

Hierarchical Context

Top-level member of dictionary entry

Display Guidance

Typically displayed inline within parentheses or in its own block with a heading such as "First Known Use".

Data Model

`"date" :` `string`

Example

```
"hom":4,
"hwi":{"hw":"test"},
[...]
"date":"circa 1842"
    
```


XML Equivalent

Note that in JSON `date` occurs near the end of the entry, whereas in XML it occurs near the beginning.

```
<hw>{h,4}test</hw>
[...]
<def>
  <date>circa 1842</date>
  [...]
</def>
    
```


A short definition provides a highly abridged version of the main [definition section](#term-def), consisting of just the definition text for the first three [senses](#term-sense). It is not meant to be displayed along with the full entry, but instead as an alternative, shortened preview of the entry content. A _short_ _def_inition is contained in a `shortdef`.

Hierarchical Context

Top-level member of the dictionary entry, occurring at the very end of the entry.

Display Guidance

Each element in the `shortdef` array represents a distinct definition, and needs to be separated from the next element by a newline, sense number, or the like.

Note this section should not be displayed alongside the main [definition section](#term-def) content, but only in specialized contexts where a preview or shortened entry view is needed.

Data Model

`"shortdef" :` `array` of one or more elements

Example

A short definition in the entry "abide".

```
"shortdef":[
  "to bear patiently : tolerate",
  "to endure without yielding : withstand",
  "to wait for : await"
]
    
```


XML Equivalent

There is no XML equivalent for `shortdef`.

Within running text, we sometimes mark up text according to its intended presentation (eg, in bold or italic font) rather than its underlying semantics. Typographic tokens are used for this purpose: `{b}` for bold, `{it}` for italics, `{sc}` for smallcaps, `{inf}` for subscript, and `{sup}` for superscript. The token `{p_br}` indicates where a paragraph break should be inserted.

Punctuation marks may also be represented as tokens: `{ldquo}` for left double quotes, `{rdquo}` for right double quotes, and `{bc}` for the ubiquitous bold colon.

Hierarchical Context

May occur in many `string` contexts, but most typically found in `dt, t,` and `text`.

Display Guidance / Data Model

``{b}`string`{\/b}``  display text in bold

`{bc}`  output a bold colon and a space

``{inf}`string`{\/inf}``  display text in subscript

``{it}`string`{\/it}``  display text in italics

`{ldquo}`  output a left double quote character (U+201C)

`{rdquo}`  output a right double quote character (U+201D)

``{sc}`string`{\/sc}``  display text in small capitals

``{sup}`string`{\/sup}``  display text in superscript

Example

Use of `{bc}, {it}, {inf}` and `{sup}` tokens in the entry "ammonium".

```
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "dt":[
              [
                "text",
                "{bc}an ion NH{inf}4{\/inf}{sup}+{\/sup} derived from
                {a_link|ammonia} by combination with a hydrogen ion and
                known in compounds (such as salts) that resemble in properties
                the compounds of the alkali metals"
              ]
            ]
          }
        ]
      ]
    ]
  }
],
"et":[
  [
    "text",
    "New Latin, from {it}ammonia{\/it}"
  ]
],
"date":"1808"
    
```


XML Equivalent

```
<et>NL, fr. <it>ammonia</it></et>
<def>
  <date>1808</date>
  <sensb>
    <sense>
      <dt>{bc}an ion NH<inf>4</inf><sup>{plus}</sup>
      derived from ammonia by combination with a hydrogen ion and known
      in compounds (as salts) that resemble in properties the compounds
      of the alkali metals</dt>
    </sense>
  </sensb>
</def>
    
```


Within definitions, quotations, paragraph labels, and [verbal illustrations](#term-vi), we note instances of the word or phrase being defined or exemplified. A single such _w_ord _i_n text is marked with a `{wi}` token, while a _phrase_ is marked with a `{phrase}` token. In _q_uotations, a use of the _word_ is marked with a `qword` token. Finally, the _h_ead_w_ord in a _para_graph label is marked by a `{parahw}`.

At times the use of a word or phrase in a verbal illustration or quote may require an editorial comment (= _gloss_) on its meaning in that particular context, which is contained in a `gloss` token.

Hierarchical Context

May occur in many `string` contexts, but most typically found in `dt, pl, t,` and `text`.

Display Guidance

A `phrase` is typically displayed in bold italics, while `qword` and `wi` are typically displayed in italics.

A `parahw` is typically displayed in bold smallcaps.

A `gloss` is displayed within square brackets and in normal font.

Data Model

``{gloss}`string`{\/gloss}``  encloses a _gloss_ explaining how a word or phrase is used in a particular context

``{parahw}`string`{\/qword}``  encloses an instance of the _h_ead_w_ord within a _para_graph label

``{phrase}`string`{\/phrase}``  encloses a _phrase_ in running text (this may be a phrase containing the [headword](#term-headword) or a [defined run-on phrase](#term-drp))

``{qword}`string`{\/qword}``  encloses an instance of the head_word_ within a _q_uote

``{wi}`string`{\/wi}``  encloses an instance of the head_w_ord used _i_n running text

Example

Use of `{gloss}, {phrase}, {qword},` and `{wi}` tokens in the entry "absence".

```
[
  "sense",
  {
    "sn":"1",
    "dt":[
      [
        "text",
        "{bc}a state or condition in which something expected, wanted,
        or looked for is not present or does not exist {bc}a state or
        condition in which something is {d_link|absent|absent:1} "
      ],[
        "vis",
        [
          {"t":"an {wi}absence{\/wi} {gloss}=lack{\/gloss} of detail"},
          {"t":"{phrase}In the absence of{\/phrase} reform
          {gloss}=without reform{\/gloss}, progress will be slow."}
        ]
      ]
    ]
  }
]
[...]
"quotes":[
  {
    "t":"Only five to six inches long and weighing less than two ounces,
    the elf owl is the smallest bird of prey in the world. Its bobbed
    tail, white \u0022eyebrows,\u0022 and {qword}absence{\/qword} of ear
    tufts give this tiny mothlike predator its impish appearance.",
    "aq":{
      "auth":"Ken Lamerton",
      "source":"{it}Bird Watcher\u0027s Digest{\/it}",
      "aqdate":"May\/June 1996"
    }
  }
  [...]
]
    
```


XML Equivalent

```
<sense>
  <sn>1</sn>
  <dt>
    {bc}a state or condition in which something expected, wanted, or
    looked for is not present or does not exist {bc}a state or
    condition in which something is {d_link|absent|absent:1} 
    <vis>
      <vi>
        <t>an {wi}absence{/wi} {gloss}=lack{/gloss} of detail</t>
      </vi>
      <vi>
        <t>{phrase}In the absence of{/phrase} reform
        {gloss}=without reform{/gloss}, progress will be slow.</t>
      </vi>
    </vis>
  </dt>
</sense>
[...]
<quotes>
  <quote>
    <t>Only five to six inches long and weighing less than
    two ounces, the elf owl is the smallest bird of prey in the world.
    Its bobbed tail, white “eyebrows,” and {qword}absence{/qword} of
    ear tufts give this tiny mothlike predator its impish appearance. </t>
    <aq>
      <source>Ken Lamerton, {it}Bird Watcher's Digest{/it}, </source>
      <aqdate>May/June 1996</aqdate>
    </aq>
  </quote>
  [...]
</quotes>
    
```


Groups together introductory text and one or more cross-references. Cross-reference grouping tokens include `{dx}, {dx_def}, {dx_ety},` and `{ma}`.

See [Cross-Reference Tokens](#sec-2.xreftokens) for detailed information on the cross-references themselves.

Hierarchical Context

`{dx}` and `{dx_def}` occur in many `string` contexts, but are most typically found in `dt, t,` and `text`.

`{dx_ety}` and `{ma}` occur in `et`.

Display Guidance

Display an em-dash before `{dx}, {dx_ety},` and `{ma}`. At `{ma}`, display the text "more at " after the em-dash.

Display `{dx_def}` within parentheses.

Data Model

``{dx}`string`{\/dx}``  encloses introductory text and one or more `[{dxt}](#sec-2.xreftokens)` cross-reference tokens

``{dx_def}`string`{\/dx_def}``  used for a parenthetical cross-reference; encloses introductory text and one or more `[{dxt}](#sec-2.xreftokens)` cross-reference tokens

``{dx_ety}`string`{\/dx_ety}``  used for a directional cross-reference within an etymology; encloses introductory text and one or more `[{dxt}](#sec-2.xreftokens)` cross-reference tokens

``{ma}`string`{\/ma}``  used for a "more at" informational cross-reference within an etymology; encloses introductory text and one or more `[{mat}](#sec-2.xreftokens)` tokens

Example

Uses of `{dx}, {dx_def}` and `{ma}` in the entry "fowl".

```
def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "sn":"1",
            "dt":[
              [
                "text",
                "{bc}a bird of any kind {dx}compare {dxt|waterfowl||},
                {dxt|wildfowl||}{\/dx}"
              ]
            ]
          }
        ]
      ],[
        [
          "sense",
          {
            "sn":"2 a",
            "dt":[
              [
                "text",
                "{bc}a cock or hen of the domestic chicken ({it}Gallus
                gallus{\/it})"
              ]
            ],
            "sdsense":{
              "sd":"especially",
              "dt":[
                [
                  "text",
                  "{bc}an adult hen"
                ]
              ]
            }
          }
        ],[
          "sense",
          {
            "sn":"b",
            "dt":[
              [
                "text",
                "{bc}any of several domesticated {dx_def}see {dxt|domesticate:1||2}
                {\/dx_def} or wild {d_link|gallinaceous|gallinaceous}
                birds {dx}compare {dxt|guinea fowl||}, {dxt|jungle fowl||}{\/dx}"
              ]
            ]
          }
        ]
      ],[
        [
          "sense",
          {
            "sn":"3",
            "dt":[
              [
                "text",
                "{bc}the meat of {a_link|fowls} used as food "
              ],[
                "vis",
                [
                  {
                    "t":"roasted {wi}fowl{\/wi}"
                  }
                ]
              ]
            ]
          }
        ]
      ]
    ]
  }
],
"et":[
  [
    "text",
    "Middle English {it}foul{\/it}, from Old English {it}fugel{\/it};
    akin to Old High German {it}fogal{\/it} bird, and probably to Old
    English {it}fl\u0113ogan{\/it} to fly
    {ma}{mat|fly|}{\/ma}"
  ]
]
    
```


XML Equivalent

```
<et>
  ME <it>foul,</it> fr. OE <it>fugel;</it> akin to OHG <it>fogal</it> bird, and prob. to OE <it>fl{emacr}ogan</it> to fly
 <ma>fly</ma>
</et>
<def>
  <date>bef. 12c</date>
  <sensb>
    <sense snumb="1">
      <sn>1</sn>
      <dt>{bc}a bird of any kind
        <dx>compare <dxt>waterfowl</dxt>
        <dxt>wildfowl</dxt></dx>
      </dt>
    </sense>
  </sensb>
  <sensb>
    <sense snumb="2a">
      <sn>2 a</sn>
      <dt>{bc}a cock or hen of the domestic chicken
      (<it>Gallus gallus</it>)</dt>
      <sd>esp</sd>
      <dt>{bc}an adult hen</dt>
    </sense>
    <sense snumb="2b">
      <sn>b</sn>
      <dt>{bc}any of several domesticated or wild gallinaceous birds
        <dx>compare <dxt>guinea fowl</dxt>
        <dxt>jungle fowl</dxt></dx>
      </dt>
    </sense>
  </sensb>
  <sensb>
    <sense snumb="3">
      <sn>3</sn>
      <dt>{bc}the meat of fowls used as food</dt>
    </sense>
  </sensb>
</def>
    
```


A cross-reference may refer to an [entry](#term-entry), a [sense](#term-sense) within an entry, an illustration, or a table. Cross-references are always self-contained tokens with information on the link text, link target, and any additional text to display. They are contained in `{a_link}, {d_link}, {dxt}, {et_link}, {i_link}, {mat},` and `{sx}`.

Hierarchical Context

May occur in many `string` contexts, but most typically found in `dt, et, t,` and `text`.

`{dxt}` always occurs within a `{dx}, {dx_def},` or `{dx_ety}` token.

`{mat}` always occurs within a `{ma}` token.

Display Guidance

Generate a hyperlink, obtaining link text and target ID as described in Data Model below. Note that the `{dxt}` and `{sx}` tokens may contain additional text to be displayed after the link text.

Link text is typically displayed in smallcaps, except for `{a_link}` and `{d_link}` which are displayed in normal font, and `{i_link}` which is displayed in italics.

Data Model

The tokens contain fields separated by a pipe character ("|"). There are at least 2 fields and a maximum of 4 fields within these tokens, indicated in the "Token Format" column. If a field does not exist for a particular token, it will be marked "n/a".



* Token Format: {a_link|} (auto link)
  * Field 2: hyperlink text and link target (note this may not correspond exactly to an id)
  * Field 3: n/a
  * Field 4: n/a
* Token Format: {d_link||} (direct link)
  * Field 2: hyperlink text
  * Field 3: if non-empty, use as target id; otherwise use field 2
  * Field 4: n/a
* Token Format: {i_link||} (italicized link)
  * Field 2: hyperlink text
  * Field 3: if non-empty, use as target id; otherwise use field 2
  * Field 4: n/a
* Token Format: {et_link||} (etymology link)
  * Field 2: hyperlink text
  * Field 3: if non-empty, use as target id; otherwise use field 2
  * Field 4: n/a
* Token Format: {mat||} (more at target)
  * Field 2: hyperlink text
  * Field 3: if non-empty, use as target id; otherwise use field 2
  * Field 4: n/a
* Token Format: {sx|||} (synonymous cross-reference)
  * Field 2: hyperlink text
  * Field 3: if non-empty, use as target id; otherwise use field 2
  * Field 4: sense number and transitive/intransitive information (if any) to display after link text
* Token Format: {dxt|||} (directional cross-reference target)
  * Field 2: hyperlink text
  * Field 3:                                                                                                 if field 4 contains "illustration", field 3 is the target artid—form URL as described under art;                                                                                                    if field 4 contains "table", field 3 is the target tableid—form URL as described under table;                                                                                                    otherwise if non-empty, use as target id;                                                                                                    otherwise use field 2 as target id                                                                                    
  * Field 4: sense number and transitive/intransitive information (if any) or text "illustration" or "table".This should be displayed after link text except for "table", which should not be displayed.


Example

Use of `{a_link}, {d_link}, {dxt}, {mat}` and `{sx}` in the first homograph of "monitor".

```
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "sn":"1 a",
            "dt":[
              [
                "text",
                "{bc}a student appointed to assist a teacher"
              ]
            ]
          }
        ],[
          "sense",
          {
            "sn":"b",
            "dt":[
              [
                "text",
                "{bc}one that warns or instructs "
              ],[
                "vis",
                [
                  {
                    "t":"{wi}monitors{\/wi} and instructors for troops
                    green in the art of war",
                    "aq":{
                      "source":"{it}New York Times{\/it}"
                    }
                  }
                ]
              ]
            ]
          }
        ],[
          "pseq",
          [
            [
              "bs",
              {
                "sense":{
                  "sn":"c",
                  "dt":[
                    [
                      "text",
                      "{bc}one that {a_link|monitors} or is used in
                      {a_link|monitoring}: such as"
                    ]
                  ]
                }
              }
            ],[
              "sense",
              {
                "sn":"(1)",
                "dt":[
                  [
                    "text",
                    "{bc}an electronic device with a screen used for
                    display (as of television pictures or computer
                    information)"
                  ]
                ]
              }
            ],[
              "sense",
              {
                "sn":"(2)",
                "dt":[
                  [
                    "text",
                    "{bc}a device for observing a biological condition
                    or function "
                  ],[
                    "vis",
                    [
                      {"t":"a heart {wi}monitor{\/wi}"}
                    ]
                  ]
                ]
              }
            ]
          ]
        ]
      ],[
        [
          "sense",
          {
            "sn":"2",
            "dt":[
              [
                "text",
                "{bc}{sx|monitor lizard||}"
              ]
            ]
          }
        ]
      ],[
        [
          "sen",
          {
            "sn":"3",
            "et":[
              [
                "text",
                "{it}Monitor{\/it}, first ship of the type"
              ]
            ]
          }
        ],[
          "sense",
          {
            "sn":"a",
            "dt":[
              [
                "text",
                "{bc}a heavily armored warship formerly used in coastal
                operations having a very low {d_link|freeboard|freeboard}
                and one or more revolving gun turrets"
              ]
            ]
          }
        ],[
          "sense",
          {
            "sn":"b",
            "dt":[
              [
                "text",
                "{bc}a small modern warship with shallow draft
                {dx_def}see {dxt|draft:1||8}{\/dx_def} for coastal bombardment"
              ]
            ]
          }
        ]
      ],[
        [
          "sense",
          {
            "sn":"4",
            "dt":[
              [
                "text",
                "{bc}a raised central portion of a roof having low
                windows or louvers for providing light and air"
              ]
            ]
          }
        ]
      ]
    ]
  }
],
[...]
"et":[
  [
    "text",
    "Latin, one that warns, overseer, from {it}mon\u0113re{\/it} to
    warn {ma}{mat|mind|}{\/ma}"
  ]
]
    
```


XML Equivalent

```
<et>L, one that warns, overseer, fr. <it>mon{emacr}re</it> to warn <ma>mind</ma></et>
<def>
  <date>1546</date>
  <sensb>
    <sense snumb="1a">
      <sn>1 a</sn>
      <dt>{bc}a student appointed to assist a teacher</dt>
    </sense>
    <sense snumb="1b">
      <sn>b</sn>
      <dt>{bc}one that warns or instructs</dt>
    </sense>
    <sense snumb="1c">
      <sn>c</sn>
      <dt>{bs}{bc}one that monitors or is used in monitoring:
      as</dt>
    </sense>
    <sense snumb="1c(1)">
      <sn>
        <snp>(1)</snp>
      </sn>
      <dt>{bc}a cathode-ray tube used for display (as of
      television pictures or computer information)</dt>
    </sense>
    <sense snumb="1c(2)">
      <sn>
        <snp>(2)</snp>
      </sn>
      <dt>{bc}a device for observing a biological condition or
      function {bs}</dt>
    </sense>
  </sensb>
  <sensb>
    <sense snumb="2">
      <sn>2</sn>
      <dt>{bc}<sx>monitor lizard</sx></dt>
    </sense>
  </sensb>
  <sensb>
    <sense snumb="3">
      <sn>3</sn>
      <set><it>Monitor,</it> first ship of the type</set>
    </sense>
    <sense snumb="3a">
      <sn>a</sn>
      <dt>{bc}a heavily armored warship formerly used in coastal
      operations having a very low freeboard and one or more revolving
      gun turrets</dt>
    </sense>
    <sense snumb="3b">
      <sn>b</sn>
      <dt>{bc}a small modern warship with shallow draft for
      coastal bombardment</dt>
    </sense>
  </sensb>
  <sensb>
    <sense snumb="4">
      <sn>4</sn>
      <dt>{bc}a raised central portion of a roof having low windows
      or louvers for providing light and air</dt>
    </sense>
  </sensb>
</def>
    
```


A date sense token links information on the first known use of a [headword](#term-headword) to a particular [sense](#term-sense) within the [entry](#term-entry). The date sense token `{ds}` only occurs within `date`.

Hierarchical Context

Occurs in `date`.

Display Guidance

Typically displayed in italics and preceded by the heading "in the meaning defined at ".

Nothing should be output if fields 2 through 5 are empty (eg, `{ds||||}`).

Data Model

This token contains 5 fields separated by a pipe character ("|").



* Token Format: {ds||||}
  * Field 2: at entries with verb dividers, contains "t" for transitive and "i" for intransitive verbs; otherwise empty.
  * Field 3: bold sense number, if any
  * Field 4: lowercase letter sense number, if any
  * Field 5: parenthesized sense number, if any


Example

A `{ds}` in the entry "reap", indicating that the `date` information relates to _transitive_ sense number 1a(1).

```
"date":"before 12th century{ds|t|1|a|1}"
    
```


XML Equivalent

```
<date>before 12th century{ds|t|1|a|1}</date>
    
```


While our dictionary and thesaurus titles utilize the general data structure described for the _Collegiate_ in [section 2](#sec-2), they also rely on other common structural elements. This section documents these common elements for the following titles:

*   Merriam-Webster's Advanced Learner's English Dictionary
*   Merriam-Webster's Collegiate Thesaurus
*   Merriam-Webster's Elementary Dictionary
*   Merriam-Webster's Intermediate Dictionary
*   Merriam-Webster's Intermediate Thesaurus
*   Merriam-Webster's Medical Dictionary
*   Merriam-Webster's School Dictionary
*   Merriam-Webster's Spanish-English Dictionary

There are additional data elements unique to individual titles. Data structures specific to the _Advanced Learner's English Dictionary_ are covered in [section 4](#sec-4); _Elementary Dictionary_ in [section 5](#sec-5); _Medical Dictionary_ in [section 6](#sec-6); and those specific to the _Spanish-English Dictionary_ in [section 7](#sec-7).

Entry metadata is information _about_ the [entry](#term-entry), as opposed to the actual content of the entry. Metadata items unique to data sets other than _Collegiate_ are described below; see [section 2.1](#sec-2.meta) for information on other uses of `meta`.

Hierarchical Context

Top-level member of the dictionary entry, occurring at the very beginning of the entry.

Display Guidance

Not intended for display.

Data Model

`"meta" :` `object` containing the members discussed in [section 2.1](#sec-2.meta) as well as the following:

`"syns" : [``array``]`  lists all synonyms given in the entry's `syn_list`; may be used for matching synonym search terms to the entry. _Note_: this is a distinct usage from that described in [section 2.22](#sec-2.syns).

`"ants" : [``array``]`  lists all antonyms given in the entry's `ant_list`; may be used for matching antonym search terms to the entry.

`"target" : [``object``]`  matching _target_ entry in other Merriam-Webster data set, containing the following members:

`"tsrc" :` `object`  target entry source data set

`"tuuid" :` `string`  target entry universally unique identifier

Example

The `meta` section for the _Collegiate Thesaurus_ entry "above".

```
"meta":{
  "id":"above",
  "uuid":"6d8ecefc-cc33-4411-9e0a-69e23522a8ee",
  "original", -->
"20180201", -->
  "src":"coll_thes",
  "section":"alpha",
  "target":{
    "tuuid":"487427fe-b68d-444f-a539-619a029b4878",
    "tsrc":"collegiate"
  },
  "stems":["above"],
  "syns":[
    [
      "aloft",
      "over",
      "overhead"
    ]
  ],
  "ants":[
    [
      "below",
      "beneath",
      "under"
    ]
  ],
  "offensive":false
}
    
```


XML Equivalent

Note there is no equivalent of `ants` or `syns` in the XML data.

```
<meta>
  <id>above</id>
  <uuid>6d8ecefc-cc33-4411-9e0a-69e23522a8ee</uuid>
  original</update> -->
  20180201</editdate> -->
  <src>coll_thes</src>
  <section>alpha</section>
  <target>
   <tuuid>487427fe-b68d-444f-a539-619a029b4878</tuuid>
   <tsrc>collegiate</tsrc>
   </target>
  <stems>
    <st>above</st>
  </stems>
</meta>
    
```


Within the structure described above for `[prs](#sec-2.prs)`, some dictionaries permit other ways of representing [pronunciations](#term-pron). An _I_nternational _P_honetic _A_lphabet pronunciation is encoded in an `ipa`, while our simplified _w_ord-_o_f-the-_d_ay pronunciation format is contained in a `wod`.

Hierarchical Context

Occur in `prs` and `altprs`.

Display Guidance

When an `ipa` is present, the entire set of pronunciations should be surrounded by forward slash characters (ie, "/ /").

A `wod` pronunciation might be displayed within quotes or parentheses.

Data Model

`"ipa" :` `string`  contains a pronunciation in _I_nternational _P_honetic _A_lphabet format

`"wod" :` `string`  contains a pronunciation in Merriam-Webster's _w_ord-_o_f-the-_d_ay format

Example

An `ipa` pronunciation in the _Learner's Dictionary_ entry "ABC".

```
"hom":1,
"hwi":{
  "hw":"ABC",
  "prs":[
    {
      "ipa":"\u02cce\u026a\u02ccbi\u02c8si\u02d0",
      "sound":{"audio":"abc00001"}
    }
  ]
}
    
```


XML Equivalent

```
<hw>{h,1}ABC</hw>
<pr>{lstres}e{isc}{lstres}bi{hstres}si{length}</pr>
    
```


In _g_eographical sections, an indication of compass direction (eg, "SW" for "southwest") is marked up with `g`.

Hierarchical Context

Occurs in `dt, dt_dig, ri, uns`.

Display Guidance

Typically displayed as small capitals.

Data Model

`["g",` `string``]`  contains _g_eographical direction text

Example

Use of `g` to mark up compass directions in _School Dictionary_ entry "Mauretania".

```
[
  "sense",
  {
    "dt":[
      [
        "text",
        "ancient country "
      ],[
        "g",
        "NW"
      ],[
        "text",
        " Africa in modern Morocco {amp} "
      ],[
        "g",
        "W"
      ],[
        "text",
        " Algeria"
      ]
    ]
  }
]
    
```


XML Equivalent

```
<sense>
  <dt>
    ancient country <g>NW</g> Africa in modern
    Morocco {amp} <g>W</g> Algeria
  </dt>
</sense>
    
```


A thesaurus [entry](#term-entry) typically contains a list of synonyms for the [headword](#term-headword). A _syn_onym _list_ is contained in a `syn_list`.

Hierarchical Context

Occurs in `sense`.

Display Guidance

Typically preceded by a heading such as "Synonyms of \[headword\]".

If there are multiple synonym groups in the topmost array of the `syn_list`, they are typically separated by a newline.

Each `wd` object should be separated by a comma and space.

Data Model

`"syn_list" : [``array``]` of one or more synonym groups, each containing word `objects` with the following members:

`"wd" :` `string`  contains the synonym _w_or_d_ (required)

optional `[wvrs](#sec-3.wvrs), [wsls](#sec-3.wsls)`

Example

A synonym list in the _Collegiate Thesaurus_ entry for "merry".

```
"syn_list":[
  [
    {"wd":"blithe"},
    {"wd":"blithesome"},
    {"wd":"festive"},
    {"wd":"gay"},
    {"wd":"gleeful"},
    {"wd":"jocose"},
    {"wd":"jocular"},
    {"wd":"jocund"},
    {"wd":"jolly"},
    {"wd":"jovial"},
    {"wd":"laughing"},
    {"wd":"mirthful"},
    {"wd":"sunny"}
  ]
]
    
```


XML Equivalent

```
<syn>
  blithesome, festive, gay, gleeful, jocose, jocular,
  jocund, jolly, jovial, laughing, mirthful, sunny
</syn>
    
```


A thesaurus [entry](#term-entry) may contain a list of synonyms and near synonyms for the [headword](#term-headword). A _list_ of all _sim_ilar words (synonyms and near synonyms) is contained in a `sim_list`.

Hierarchical Context

Occurs in `sense`.

Display Guidance

Typically preceded by a heading such as "Synonyms and Near Synonyms of \[headword\]".

If there are multiple groups in the topmost array of the `sim_list`, they are typically separated by a newline.

Each `wd` object should be separated by a comma and space.

Data Model

`"sim_list" : [``array``]` of one or more synonym and near synonym groups, each containing word `objects` with the following members:

`"wd" :` `string`  contains the synonym _w_or_d_ (required)

optional `[wvrs](#sec-3.wvrs), [wsls](#sec-3.wsls)`

Example

A synonym and near synonym list in the _Collegiate Thesaurus_ entry for "empathy".

```
  "sim_list":[
  [
    {"wd":"pity"},
    {"wd":"sympathy"},
    {"wd":"understanding"}}
  ], [
    {"wd":"charity"},
    {"wd":"clemency"},
    {"wd":"forbearance"},
    {"wd":"lenience"},
    {"wd":"leniency"},
    {"wd":"lenity"},
    {"wd":"mercifulness"},
    {"wd":"mercy"}
    {"wd":"quarter"}
  ]
]
    
```


A thesaurus subject/status [label](#term-label) describes the subject area (eg, "computing") or regional/usage status (eg, "British", "formal", "slang") of a synonym, antonym, or other word listed in a thesaurus [entry](#term-entry). A set of one or more thesaurus _w_ord _s_ubject/status _l_abel_s_ is contained in a `wsls`.

Hierarchical Context

Follows `wd` within an `ant_list, near_list, phrase_list, rel_list,` or `syn_list` object.

Display Guidance

A set of subject/status labels for a thesaurus word is typically rendered in italics and in parentheses. If there is more than one element in the array, separate with a comma and space.

Data Model

`"wsls" :` `object`  containing the member:

`"wsl" :` `string`  _s_ubject/status _l_abel for thesaurus _w_ord

Example

Use of `wsls` in the _Collegiate Thesaurus_ entry for "absolute", sense 2.

```
"syn_list":[
  [
    {"wd":"all-out"},
    {"wd":"arrant"},
    {"wd":"blank"},
    {
      "wd":"blooming",
      "wsls":{
        "wsl":"chiefly British"
      }
    },
    {
      "wd":"bodacious",
      "wsls":{
        "wsl":"Southern {amp} Midland"
      }
    },
    {
      "wd":"categorical",
      "wvrs":[
        {
          "wvl":"also",
          "wva":"categoric"
        }
      ]
    },
    {"wd":"clean"},
    {"wd":"complete"},
    {"wd":"consummate"},
    [etc...]
  ]
]
    
```


XML Equivalent

```
<syn>
  all-out, arrant, blank, blooming [<it>chiefly British</it>],
  bodacious [<it>Southern {amp} Midland</it>],
  categorical (<it>also</it> categoric), clean,
  complete, consummate, [etc...]
</syn>
    
```


A thesaurus word [variant](#term-va) is a variant spelling of a synonym, antonym, or other word listed in a thesaurus [entry](#term-entry). A set of one or more thesaurus _w_ord _v_a_r_iant_s_ is contained in a `wvrs`.

Hierarchical Context

Follows `wd` within an `ant_list, near_list, phrase_list, rel_list,` or `syn_list` object.

Display Guidance

The entire `wvrs` is displayed inline within parentheses.

Display `wva` in the same font used for `[wd](#sec-3.synlist)`.

Typically `wvl` is displayed in italics. It should be followed by a space.

Data Model

`"wvrs" :` `array`  of one or more objects containing the members:

`"wvl" :` `string`  _v_ariant [_l_abel](#term-label) for thesaurus _w_ord

`"wva" :` `string`  [_va_riant](#term-va) for thesaurus _w_ord

Example

Use of `wvrs` in the _Collegiate Thesaurus_ entry for "absolute", sense 1.

```
"syn_list":[
  [
    {"wd":"arbitrary"},
    {
      "wd":"autocratic",
      "wvrs":[
        {
          "wvl":"also",
          "wva":"autocratical"
        }
      ]
    },
    {
      "wd":"czarist",
      "wvrs":[
        {
          "wvl":"also",
          "wva":"tsarist"
        },{
          "wvl":"or",
          "wva":"tzarist"
        }
      ]
    },
    {"wd":"despotic"},
    {"wd":"dictatorial"},
    {"wd":"monocratic"},
    {
      "wd":"tyrannical",
      "wvrs":[
        {
          "wvl":"also",
          "wva":"tyrannic"
        }
      ]
    },
    {"wd":"tyrannous"}
  ]
]
    
```


XML Equivalent

```
<syn>
  arbitrary, autocratic (<it>also</it> autocratical),
  czarist (<it>also</it> tsarist <it>or</it> tzarist),
  despotic, dictatorial, monocratic, tyrannical
  (<it>also</it> tyrannic), tyrannous
</syn>
    
```


A verb [variant](#term-va) is a variant spelling of a phrasal verb listed in a thesaurus [entry](#term-entry). A set of one or more thesaurus _w_ord _v_er_b_ _v_a_r_iant_s_ is contained in a `wvbvrs`.

Hierarchical Context

Follows `wd` within an `ant_list, near_list, phrase_list, rel_list,` or `syn_list` object.

Display Guidance

The entire `wvbvrs` is displayed inline.

Display `wvbva` in the same font used for `[wd](#sec-3.synlist)`.

Typically `wvbvl` is displayed in italics. It should be preceded and followed by a space.

Data Model

`"wvbvrs" :` `array`  of one or more objects containing the members:

`"wvbvl" :` `string`  _v_er_b_ _v_ariant [_l_abel](#term-label) for thesaurus _w_ord

`"wvbva" :` `string`  _v_er_b_ [_va_riant](#term-va) for thesaurus _w_ord

Example

Use of `wvbvrs` in the _Collegiate Thesaurus_ entry for "associate".

```
"phrase_list":[
  [
    {"wd":"be friends with"},
    {"wd":"fall in with"},
    {"wd":"keep company (with)"},
    {
      "wd":"rub elbows (with)",
      "wvbvrs":[
        {
          "wvbvl":"or",
          "wvbva":"rub shoulders (with)"
        }
      ]
    },
    {"wd":"take up with"}
  ]
]
    
```


XML Equivalent

```
<ph>
  be friends with, fall in with, keep company (with),
  rub elbows (with) <it>or</it> rub shoulders (with),
  take up with
</ph>
    
```


A thesaurus [entry](#term-entry) may contain a list of words related to the [headword](#term-headword). A _rel_ated word _list_ is contained in a `rel_list`.

Hierarchical Context

Occurs in `sense`.

Display Guidance

Typically preceded by a heading such as "Words Related to \[headword\]".

If there are multiple related-word groups in the topmost array of the `rel_list`, they are typically separated by a newline.

Each `wd` object should be separated by a comma and space.

Data Model

`"rel_list" : [``array``]` of one or more related-word groups, each containing word `objects` with the following members:

`"wd" :` `string`  contains the related _w_or_d_ (required)

optional `[wvbvrs](#sec-3.wvrs), [wvrs](#sec-3.wvrs), [wsls](#sec-3.wsls)`

Example

Use of `rel_list` in the _Collegiate Thesaurus_ entry for "associate", sense 2.

```
"rel_list":[
  [
    {"wd":"compare"},
    {"wd":"equate"},
    {"wd":"liken"}
  ],[
    {"wd":"group"},
    {"wd":"join"},
    {"wd":"lump (together)"},
    {"wd":"tie (together)"}
  ]
]
    
```


XML Equivalent

```
<rel>
  compare, equate, liken; group, join, lump (together),
  tie (together)
</rel>
    
```


A thesaurus [entry](#term-entry) may contain a list of phrases synonymous with the [headword](#term-headword). A _list_ of synonymous _phrase_s is contained in a `phrase_list`.

Hierarchical Context

Occurs in `sense`.

Display Guidance

Typically preceded by a heading such as "Phrases Synonymous with \[headword\]".

If there are multiple synonymous-phrase groups in the topmost array of the `phrase_list`, they are typically separated by a newline.

Each `wd` object should be separated by a comma and space.

Data Model

`"phrase_list" : [``array``]` of one or more synonymous-phrase groups, each containing `objects` with the following members:

`"wd" :` `string`  contains the synonymous phrase (required)

optional `[wvbvrs](#sec-3.wvrs), [wvrs](#sec-3.wvrs), [wsls](#sec-3.wsls)`

Example

Use of `phrase_list` in the _Collegiate Thesaurus_ entry for "associate", sense 1.

```
"phrase_list":[
  [
    {"wd":"be friends with"},
    {"wd":"fall in with"},
    {"wd":"keep company (with)"},
    {
      "wd":"rub elbows (with)",
      "wvbvrs":[
        {
          "wvbvl":"or",
          "wvbva":"rub shoulders (with)"
        }
      ]
    },
    {"wd":"take up with"}
  ]
]
    
```


XML Equivalent

```
<ph>
  be friends with, fall in with, keep company (with),
  rub elbows (with) <it>or</it> rub shoulders (with),
  take up with
</ph>
    
```


A thesaurus [entry](#term-entry) may contain a list of near antonyms of the [headword](#term-headword). A _near_ antonym _list_ is contained in a `near_list`.

Hierarchical Context

Occurs in `sense`.

Display Guidance

Typically preceded by a heading such as "Near Antonyms of \[headword\]".

If there are multiple near-antonym groups in the topmost array of the `near_list`, they are typically separated by a newline.

Each `wd` object should be separated by a comma and space.

Data Model

`"near_list" : [``array``]` of one or more near-antonym groups, each containing word `objects` with the following members:

`"wd" :` `string`  contains the near antonym _w_or_d_ (required)

optional `[wvbvrs](#sec-3.wvrs), [wvrs](#sec-3.wvrs), [wsls](#sec-3.wsls)`

Example

Example of a `near_list` with several near-antonym groups in the _Collegiate Thesaurus_ entry for "associate", sense 1.

```
"near_list":[
  [
    {"wd":"avoid"},
    {"wd":"cold-shoulder"},
    {"wd":"shun"},
    {"wd":"snub"}
  ],[
    {"wd":"alienate"},
    {"wd":"estrange"}
  ],[
    {"wd":"break up"},
    {"wd":"disband"},
    {"wd":"disperse"},
    {"wd":"split (up)"}
  ],[
    {"wd":"disjoin"},
    {"wd":"dissociate"},
    {"wd":"disunite"},
    {"wd":"divorce"},
    {"wd":"sever"},
    {"wd":"split"},
    {"wd":"sunder"}
  ]
]
    
```


XML Equivalent

```
<near>
  avoid, cold-shoulder, shun, snub; alienate, estrange;
  break up, disband, disperse, split (up); disjoin,
  dissociate, disunite, divorce, sever, split, sunder
</near>
    
```


A thesaurus [entry](#term-entry) may contain a list of antonyms of the [headword](#term-headword). An _ant_onym _list_ is contained in an `ant_list`.

Hierarchical Context

Occurs in `sense`.

Display Guidance

Typically preceded by a heading such as "Antonyms of \[headword\]".

If there are multiple antonym groups in the topmost array of the `ant_list`, they are typically separated by a newline.

Each `wd` object should be separated by a comma and space.

Data Model

`"ant_list" : [``array``]` of one or more antonym groups, each containing antonym `objects` with the following members:

`"wd" :` `string`  contains the antonym _w_or_d_ (required)

optional `[wvbvrs](#sec-3.wvrs), [wvrs](#sec-3.wvrs), [wsls](#sec-3.wsls)`

Example

Use of `ant_list` in the _Collegiate Thesaurus_ entry for "belligerent".

```
"ant_list":[
  [
    {"wd":"nonaggressive"},
    {"wd":"nonbelligerent"},
    {"wd":"pacific"},
    {"wd":"peaceable"},
    {"wd":"peaceful"},
    {"wd":"unbelligerent"},
    {"wd":"uncombative"},
    {"wd":"uncontentious"}
  ]
]
    
```


XML Equivalent

```
<ant>
  nonaggressive, nonbelligerent, pacific, peaceable,
  peaceful, unbelligerent, uncombative, uncontentious
</ant>
    
```


A thesaurus [entry](#term-entry) may contain a list of antonyms and near antonyms of the [headword](#term-headword). A _list_ of all _opp_osite words (antonyms and near antonyms) is contained in an `opp_list`.

Hierarchical Context

Occurs in `sense`.

Display Guidance

Typically preceded by a heading such as "Antonyms and Near Antonyms of \[headword\]".

If there are multiple groups in the topmost array of the `opp_list`, they are typically separated by a newline.

Each `wd` object should be separated by a comma and space.

Data Model

`"opp_list" : [``array``]` of one or more antonym groups, each containing antonym and near antonym `objects` with the following members:

`"wd" :` `string`  contains the antonym _w_or_d_ (required)

optional `[wvbvrs](#sec-3.wvrs), [wvrs](#sec-3.wvrs), [wsls](#sec-3.wsls)`

Example

Use of `opp_list` in the _Collegiate Thesaurus_ entry for "legitimize".

```
"opp_list":[
  [
    {"wd":"delegitimize"},
    {"wd":"invalidate"},
    {"wd":"pacific"},
    {"wd":"nullify"},
      ],[
    {"wd":"disable"},
    {"wd":"disempower"},
    {"wd":"disenfranchise"}
  ]
]
    
```


A synonym cross-reference directs the reader to a [synonyms section](#sec-2.syns) in another [entry](#term-entry). A series of one or more _s_ynonym cross-_ref_erence_s_ is contained in `srefs`.

Hierarchical Context

Occurs in `dt` in _Learner's Dictionary_.

Occurs elsewhere as top-level member of dictionary entry.

Display Guidance

Synonym cross-references are typically preceded by lead-in text such as "Synonyms see: ".

Each synonym cross-reference should be a link, with the link text in smallcaps. If there is more than one cross-reference, separate them by a comma and space.

Data Model

`"srefs" : [``array``]`, where each element is both link text and target ID for a synonym cross-reference.

Example

Use of `srefs` in the _Learner's Dictionary_ entry for "archaic".

```
"srefs":[
  "old:1"
]
    
```


XML Equivalent

```
<srefs>
  <sref>old</sref>
</srefs>
    
```


A usage cross-reference directs the reader to a [usage section](#sec-2.usages) in another [entry](#term-entry). A series of one or more _u_sage cross-_ref_erence_s_ is contained in `urefs`.

Hierarchical Context

Occurs in `dt` in _Learner's Dictionary_.

Display Guidance

Usage cross-references are typically preceded by lead-in text such as "Usage see: ".

Each usage cross-reference should be a link, with the link text in smallcaps. If there is more than one cross-reference, separate them by a comma and space.

Data Model

`"urefs" : [``array``]`, where each element is both link text and target ID for a usage cross-reference.

Example

Use of `urefs` within `dt` in the _Learner's Dictionary_ entry for "actress".

```
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "dt":[
              [
                "text",
                "{bc}a woman or girl who acts in a play,
                movie, etc. {bc}a female actor "
              ],[
                "urefs",
                [
                  "actor"
                ]
              ]
            ]
          }
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<dt>
  {bc}a woman or girl who acts in a play, movie, etc.
  {bc}a female actor 
  <urefs>
    <uref>actor</uref>
  </urefs>
</dt>
    
```


A self-explanatory list occurs in an [entry](#term-entry) with a prefix [headword](#term-headword), and consists of derived words whose meaning is self-explanatory in the context of the definition. A self-explanatory _list_ is contained in a `list`.

Hierarchical Context

Top-level member of dictionary entry.

Display Guidance

Typically displayed as a bulleted list in which each element is a list item.

Data Model

`"list" : [``array``]`  containing one or more self-explanatory words formed from the headword

Example

An instance of a self-explanatory `list` in the _Intermediate Dictionary_ entry "over-" (prefix).

```
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "sn":"1",
            "dt":[
              ["text","{bc}so as to be greater, better, or stronger than"]
            ]
          }
        ]
      ],[
        [
          "sense",
          {
            "sn":"2",
            "dt":[
              ["text","{bc}so as to be too much or too great"]
            ]
          }
        ]
      ]
    ]
  }
],
"list":[
  "overabundance",
  "overabundant",
  "overambitious",
  "overanxious",
  "overbake",
  "overbold",
  "overburden",
  "overcareful",
  "overcautious",
  "overcomplicate",
  "overcomplicated",
  [etc...]
  "overzealous",
  "overzealousness"
]
    
```


XML Equivalent

```
<def>
  <vg>
    <sseq>
      <sb>
        <sense>
          <sn>1</sn>
          <dt>{bc}so as to be greater, better, or stronger than</dt>
        </sense>
      </sb>
      <sb>
        <sense>
          <sn>2</sn>
          <dt>{bc}so as to be too much or too great</dt>
        </sense>
      </sb>
    </sseq>
  </vg>
</def>
<list>
  <item>overabundance</item>
  <item>overabundant</item>
  <item>overambitious</item>
  <item>overanxious</item>
  <item>overbake</item>
  <item>overbold</item>
  <item>overburden</item>
  <item>overcareful</item>
  <item>overcautious</item>
  <item>overcomplicate</item>
  <item>overcomplicated</item>
  [etc...]
  <item>overzealous</item>
  <item>overzealousness</item>
</list>
    
```


Within running text, we sometimes mark up text according to its intended presentation (eg, in bold-italic font) rather than its underlying semantics. In addition to the typographic tokens used for this purpose documented in [section 2.29.1](#sec-2.fmttokens), we also use `{bit}` for bold-italics, `{itsc}` for italic smallcaps, and `{rom}` for Roman/normal text.

Hierarchical Context

May occur in many `string` contexts, but most typically found in `dt, t,` and `text`.

Display Guidance / Data Model

``{bit}`string`{\/bit}``  display text in bold-italics

``{itsc}`string`{\/itsc}``  display text in italic small capitals

``{rom}`string`{\/rom}``  display text in normal font—used to distinguish normal text within a run of bold, italics, or smallcaps

Example

An example of `{bit}` in the _Medical Dictionary_ entry "N-allylnormorphine".

```
"hwi":{
  "hw":"{bit}N{\/bit}-al*lyl*nor*mor*phine",
  "prs":[
    {
      "mw":"\u02ccen-\u02ccal-\u0259l-\u02ccn\u022fr-\u02c8m\u022fr-\u02ccf\u0113n",
      "sound":{"audio":"nally01m"}
    }
  ]
}
    
```


XML Equivalent

```
<hwi>
  <hw>{bit}N{/bit}-al*lyl*nor*mor*phine</hw>
  <prs>
    <pr>
      <mw>ˌen-ˌal-əl-ˌnȯr-ˈmȯr-ˌfēn</mw>
      <sound>
        <audio>nally01m</audio>
      </sound>
    </pr>
  </prs>
</hwi>
    
```


Entry metadata is information _about_ the [entry](#term-entry), as opposed to the actual content of the entry. Metadata items unique to the _Learner's Dictionary_ are described below; see sections [2.1](#sec-2.meta) and [3.1](#sec-3.meta) for information on other uses of `meta`.

Hierarchical Context

Top-level member of the dictionary entry, occurring at the very beginning of the entry.

Display Guidance

If `highlight` is "yes", the `hw` could optionally be distinguished from other headwords by being underlined, displayed in a different color, etc.

The `app-shortdef` can optionally be used in specialized contexts where a preview or shortened entry view is needed. Note this section should not be displayed alongside the main [definition section](#term-def) content. Display is similar to other contexts: `hw` should display in bold, `fl` in italics, and elements in `def` should be separated from each other by a newline, sense number, or the like.

Otherwise, information in `meta` is not intended for display.

Data Model

`"meta" :` `object` containing the members discussed in [section 2.1](#sec-2.meta) and [3.1](#sec-3.meta) as well as the following:

`"highlight" :` `string`  if text is "yes", the headword is a key part of English vocabulary that is highlighted in print.

`"app-shortdef" : [``object``]`  a very abbreviated version of the entry that could be used in specialized contexts where a preview or shortened entry view is needed; contains the following members:

`"hw" :` `string`  headword for use in shortened entry view

`"fl" :` `string`  functional label for use in shortened entry view

`"def" :` `array`  containing definition text for the first three [senses](#term-sense) for use in shortened entry view

Example

```
"meta":{
  "id":"year",
  "uuid":"fc52613e-1bdc-42cc-86ca-21eb035a3aa4",
  "original", -->
  "src":"learners",
  "section":"alpha",
  "target":{
    "tuuid":"5b3f9f0d-26df-4477-a77f-9cca0b92a171",
    "tsrc":"collegiate"
  },
  "highlight":"yes",
  "stems":[
    "year",
    "years",
    "glory years",
    "in the year of our lord",
    "never\/not in a thousand\/million\/billion years",
    "never in a billion years",
    "never in a million years",
    "never in a thousand years",
    "not in a billion years",
    "not in a million years",
    "not in a thousand years",
    "put years on",
    "since (the) year one",
    "since the year one",
    "since year one",
    "since the year dot",
    "take years off",
    "vintage year",
    "over the years",
    "year by year",
    "each year",
    "as the years go by",
    "all year round",
    "of the year",
    "getting on in years",
    "young\/old for her years",
    "old for her years",
    "young for her years"
  ],
  "app-shortdef":{
    "hw":"year",
    "fl":"noun",
    "def":[
      "{bc} a unit of time that is equal to 12 months or 365 or
      sometimes 366 days",
      "{bc} the regular period of 12 months that begins in January
      and ends in December",
      "used to refer to the age of a person"
    ]
  },
  "offensive":false
}
    
```


XML Equivalent

Note there is no equivalent of `app-shortdef` in the XML data.

```
<meta>
  <id>year</id>
  <uuid>fc52613e-1bdc-42cc-86ca-21eb035a3aa4</uuid>
  original</update> -->
  
  <src>learners</src>
  <section>alpha</section>
  <target>
    <tuuid>5b3f9f0d-26df-4477-a77f-9cca0b92a171</tuuid>
    <tsrc>collegiate</tsrc>
  </target>
  <highlight>yes</highlight>
  <stems>
    <st>year</st>
    <st>years</st>
    <st>glory years</st>
    <st>in the year of our lord</st>
    <st>never/not in a thousand/million/billion years</st>
    <st>never in a billion years</st>
    <st>never in a million years</st>
    <st>never in a thousand years</st>
    <st>not in a billion years</st>
    <st>not in a million years</st>
    <st>not in a thousand years</st>
    <st>put years on</st>
    <st>since (the) year one</st>
    <st>since the year one</st>
    <st>since year one</st>
    <st>since the year dot</st>
    <st>take years off</st>
    <st>vintage year</st>
    <st>over the years</st>
    <st>year by year</st>
    <st>each year</st>
    <st>as the years go by</st>
    <st>all year round</st>
    <st>of the year</st>
    <st>getting on in years</st>
    <st>young/old for her years</st>
    <st>old for her years</st>
    <st>young for her years</st>
  </stems>
</meta>
    
```


Alternate pronunciations are [pronunciations](#term-pron) meant to be displayed only in electronic format but not in print. A set of _alt_ernate _pr_onunciation_s_ is encoded in an `altprs`.

Hierarchical Context

Occurs in `hwi`, `ins`, `uros`, `vrs`.

Display Guidance

Displayed in electronic formats but suppressed in print. See [`ipa`](#sec-3.addlprs) for display information.

Data Model

`"altprs" :` `object` which may contain one or more:

`"pr" :` `object`  pronunciation object, which may contain the members described in [`prs`](#sec-2.prs) and [`ipa`](#sec-3.addlprs).

Example

Use of `altprs` in the _Learner's Dictionary_ entry for "balloting".

```
"hwi":{
  "hw":"bal*lot*ing",
  "altprs":{
    "pr":{
      "ipa":"\u02c8b\u00e6l\u0259t\u026a\u014b"
    }
  }
}
    
```


XML Equivalent

```
<hw>bal*lot*ing</hw>
<altpr>{hstres}b{aelig}l{schwa}t{isc}{eng}</altpr>
    
```


This [label](#term-label) provides grammatical information on a [headword](#term-headword), [defined run-on phrase](#term-drp), or [undefined entry word](#term-ure), such as information on case (eg, "+ objective"), number (eg, "singular"), or countability (eg, "noncount"). A _gram_matical label is contained in `gram`.

Hierarchical Context

Occurs as top-level member of dictionary entry or in `dros` or `uros`.

Display Guidance

Typically displayed in square brackets and distinguished from surrounding text through use of italics, a light color, or the like.

Data Model

`"gram" :` `string`  contains text of _gram_matical label

Example

Use of `gram` in entry for "bouncer".

```
"gram":"count",
"def":[
  {
    "sseq":[
      [
        [
          "sense",
          {
            "sn":"1",
            "dt":[
              [
                "text",
                "{bc}a person whose job is to force anyone who causes
                a problem in a bar, nightclub, etc., to leave that place"
              ]
            ]
          }
        ]
      ],[etc...]
    ]
  }
]
    
```


XML Equivalent

```
<def>
  <gram>count</gram>
  <sn>1</sn>
  <dt>
    {bc}a person whose job is to force anyone who causes a problem in
    a bar, nightclub, etc., to leave that place
  </dt>
  [etc...]
</def>
    
```


This [label](#term-label) provides grammatical information specific to a note or [verbal illustration](#term-vi) within a [sense](#term-sense), which might be information on the [headword's](#term-headword) case (eg, "+ objective"), number (eg, "singular"), or countability (eg, "noncount") in a particular context. A _gram_matical label _w_ithin a _s_ense is contained in a `wsgram`.

Hierarchical Context

Occurs in `dt` immediately preceding `snote, uns`, or `vis`.

Display Guidance

Typically displayed in square brackets and distinguished from surrounding text through use of italics, a light color, or the like.

Data Model

`["wsgram",` `string``]`  contains text of a _gram_matical label _w_ithin a _s_ense

Example

Two `wsgram` labels within sense 1 of the first homograph of "ABC".

```
[
  "sense",
  {
    "sn":"1",
    "dt":[
      [
        "text",
        "{bc}the letters of the English alphabet "
      ],[
        "wsgram",
        "plural"
      ],[
        "vis",
        [
          {"t":"({it}US{\/it}) We learned our {it}ABC\u0027s{\/it}."}
        ]
      ],[
        "wsgram",
        "singular"
      ],[
        "vis",
        [
          {"t":"({it}Brit{\/it}) We learned our {it}ABC{\/it}."}
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<sn>1</sn>
<dt>
  {bc}the letters of the English alphabet 
  <wsgram>plural</wsgram>
  <vi>(<it>US</it>) We learned our <it>ABC's</it>.</vi>
  <wsgram>singular</wsgram>
  <vi>(<it>Brit</it>) We learned our <it>ABC</it>.</vi>
</dt>
    
```


The bold-italic note supplies the form of the [headword](#term-headword) (such as a plural or capitalized variant) most pertinent to a particular [sense](#term-sense). The _b_old-italic _note_ is contained in a `bnote`.

Hierarchical Context

Occurs in `sen, sense`.

Display Guidance

Displayed in bold-italics and followed by a space.

Data Model

`"bnote" :` `string`  contains text of the _b_old-italic _note_

Example

A `bnote` in the entry for "action".

```
[
  "sense",
  {
    "sn":"4",
    "bnote":"the action",
    "dt":[
      [
        "text",
        "{bc}the most exciting or interesting activities that are happening
        in a particular place "
      ],[
        "vis",
        [
          {"t":"The new theater places the audience closer to the center\/middle
          of {it}the action{\/it}."},
          {"t":"I moved to New York City to be (a) part of
          {it}the action{\/it}."},
          {"t":"Downtown is {phrase}where the action is{\/phrase}.
          [=downtown is a very active and exciting place]"}
        ]
      ]
    ]
  }
]
    
```


XML Equivalent

```
<sn>4</sn>
<bnote>the action</bnote>
<dt>
  {bc}the most exciting or interesting activities that are happening in
  a particular place
  <vi>The new theater places the audience closer to the center/middle
  of <it>the action</it>.</vi>
  <vi>I moved to New York City to be (a) part of <it>the action</it>.</vi>
  <vi>Downtown is <phrase>where the action is</phrase>.
  [=downtown is a very active and exciting place]</vi>
</dt>
    
```


This note provides explanatory or historical information that supplements the definition. It is presented in a box to set it off from surrounding text. The _box_ed _s_upplemental information _note_ is contained in an `snotebox`.

Hierarchical Context

Occurs within `sense, utxt`.

Display Guidance

Displayed within a box and typically marked by an introductory diamond symbol.

Data Model

`"snotebox" :` `object`  containing the members:

`"t" :` `string`  contains text of _box_ed _s_upplemental information _note_

optional `[vis](#sec-2.vis)`

Example

An instance of `snotebox` in the entry "at".

```
"snotebox":[
  [
    "t",
    "The word {phrase}at{\/phrase} is used in speech in e-mail addresses."
  ],[
    "vis",
    [
      {"t":"{ldquo}Can I e-mail you?{rdquo} {ldquo}Sure. Our e-mail address
      is \u2018comments {it}at{\/it} Merriam-Webster dot com.\u2019{rdquo}"}
    ]
  ],[
    "t",
    "In writing, the symbol @ is used instead."
  ],[
    "vis",
    [
      {"t":"comments@Merriam-Webster.com"}
    ]
  ]
]
    
```


XML Equivalent

```
<snotebox>
  The word <phrase>at</phrase> is used in speech in e-mail addresses.
  <vi>{ldquo}Can I e-mail you?{rdquo} {ldquo}Sure. Our e-mail address
  is {lsquo}comments <it>at</it> Merriam-Webster dot com.{rsquo}{rdquo}</vi>
  In writing, the symbol {commat} is used instead. 
  <vi>comments{commat}Merriam-Webster.com</vi>
</snotebox>
    
```


A phrasal verb is a phrase that combines a verb with a preposition and/or adverb (eg, "act up", "get out"). The general form of the phrasal verb is given as a [defined run-on phrase](#term-drp) within a [defined run-on](#term-dro), with particular grammatical expressions of the phrasal verb contained in `phrasev` and `sphrasev`.

Note that `phrasev` is used when the phrasal verb form follows a [sense number](#term-sn), while `sphrasev` is used in all other contexts.

Hierarchical Context

Both `phrasev` and `sphrasev` occur in `sen, sense,` or `vg` within `[dros](#sec-2.dros)`.

A `phrasev` always follows an `sn`, while `sphrasev` occurs at the beginning of its parent element.

Display Guidance

A `phrasev` is displayed inline with the preceding sense number and following definition, while an `sphrasev` could either be displayed inline with the definition or on a separate line.

The `pva` is typically displayed in bold or bold-italics, and should be followed by a space.

The `pvl` is displayed in italics and followed by a space.

Data Model

1.  `"phrasev" :` `object` containing the member:
    
    `"phr" :` `object`  containing one or more of the following members:
    
    `"pva" :` `string`  _p_hr_a_sal _v_erb (required)
    
    `"pvl" :` `string`  _p_hrasal _v_erb _l_abel (optional)
    
2.  `"sphrasev" :` `object` containing the member:
    
    `"phrs" :` `array`  containing one or more of the following elements:
    
    `"pva" :` `string`  _p_hr_a_sal _v_erb (required)
    
    `"pvl" :` `string`  _p_hrasal _v_erb _l_abel (optional)
    

Example

Use of `sphrasev` in "act on/upon" and `phrasev` in "act out" within the second homograph for "act".

```
"dros":[
  {
    "drp":"act on\/upon",
    "gram":"phrasal verb",
    "def":[
      {
        "sseq":[
          [
            [
              "sense",
              {
                "sphrasev":{
                  "phrs":[
                    {"pva":"act on\/upon (something)"}
                  ]
                },
                "dt":[
                  [
                    "text",
                    "{bc}to use (something, such as a feeling or
                    suggestion) as a reason or basis for doing
                    something "
                  ],[
                    "vis",
                    [
                      {"t":"They never {it}acted on{\/it} the information
                      they had."},
                      {"t":"We were too late to {it}act upon{\/it} his
                      suggestion."},
                      {"t":"It\u0027s okay to feel angry or jealous, but
                      you mustn\u0027t {it}act on{\/it} those feelings."}
                    ]
                  ],[
                    "text",
                    "{dx}see also {dxt|act:2||6 (above)}{\/dx}"
                  ]
                ]
              }
            ]
          ]
        ]
      }
    ]
  },{
    "drp":"act out",
    "gram":"phrasal verb",
    "def":[
      {
        "sseq":[
          [
            [
              "sense",
              {
                "sn":"1 a",
                "dt":[
                  [
                    "text",
                    "{bc}to behave badly especially because you are
                    feeling painful emotions (such as fear or anger) "
                  ],[
                    "vis",
                    [
                      {"t":"What can parents do when their kids start
                      {it}acting out{\/it}?"}
                    ]
                  ]
                ]
              }
            ],[
              "sense",
              {
                "sn":"b",
                "phrasev":{
                  "phr":{
                    "pvl":"or",
                    "pva":"act (something) out"
                  }
                },
                "dt":[
                  [
                    "text",
                    "{bc}to show that you are feeling (a painful emotion)
                    by acting in ways that are not good or acceptable "
                  ],[
                    "vis",
                    [
                      {"t":"children {it}acting out{\/it} their emotions
                      in inappropriate ways"},
                      {"t":"He tries not to {it}act out{\/it} his
                      anger\/frustrations."}
                    ]
                  ]
                ]
              }
            ]
          ],
          [etc...]
        ]
      }
    ]
  },
  [etc...]
]
    
```


XML Equivalent

```
<dro>
  <dre>act on/upon</dre>
  <gram>phrasal verb</gram>
  <def>
    <phrasev>
      <pva>act on/upon (something)</pva>
    </phrasev>
    <dt>
      {bc}to use (something, such as a feeling or suggestion) as a
      reason or basis for doing something
      <vi>They never <it>acted on</it> the
      information they had.</vi>
      <vi>We were too late to <it>act upon</it> his
      suggestion.</vi>
      <vi>It's okay to feel angry or jealous, but you mustn't
      <it>act on</it> those feelings.</vi>
      <dx>see also <dxt>{h,2}act <dxn>6 (above)</dxn></dxt></dx>
    </dt>
  </def>
</dro>
<dro>
  <dre>act out</dre>
  <gram>phrasal verb</gram>
  <def>
    <sn>1 a</sn>
    <dt>
      {bc}to behave badly especially because you are feeling painful
      emotions (such as fear or anger)
      <vi>What can parents do when their kids start <it>acting out</it>?</vi>
    </dt>
    <sn>b</sn>
    <phrasev>
      <pva>act out (something)</pva>
      <pvl>or</pvl>
      <pva>act (something) out</pva>
    </phrasev>
    <dt>
      {bc}to show that you are feeling (a painful emotion) by acting
      in ways that are not good or acceptable
      <vi>children <it>acting out</it> their emotions in
      inappropriate ways</vi>
      <vi>He tries not to <it>act out</it> his anger/frustrations.</vi>
    </dt>
    [etc...]
  </def>
</dro>
    
```


A phrasal verb subject/status [label](#term-label) describes the subject area (eg, "computing") or regional/usage status (eg, "British", "formal", "slang") of a phrasal verb. A set of one or more _ph_rasal verb _s_ubject/status _l_abel_s_ is contained in a `phsls`.

Hierarchical Context

Occurs in `sphrasev`.

Display Guidance

A set of phrasal verb subject/status labels is typically rendered in italics. If there is more than one element in the array, separate with a comma and space.

Data Model

`"phsls" :` `array`  where each element contains the text of a _ph_rasal verb _s_ubject/status _l_abel.

Example

A `phsls` series for "bounce into" in the first homograph of "bounce".

```
{
  "drp":"bounce into",
  "gram":"phrasal verb",
  "def":[
    {
      "sseq":[
        [
          [
            "sense",
            {
              "sphrasev":{
                "phsls":["Brit","informal"],
                "phrs":[
                  {"pva":"bounce (someone) into (something)"}
                ]
              },
              "dt":[
                [
                  "text",
                  "{bc}to force (someone) to decide to do (something)
                  especially without having time to think about it "
                ],[
                  "vis",
                  [
                    {"t":"The voters were {it}bounced into{\/it} agreeing
                    to the proposal."}
                  ]
                ]
              ]
            }
          ]
        ]
      ]
    }
  ]
}
    
```


XML Equivalent

```
<dro>
  <dre>bounce into</dre>
  <def>
    <gram>phrasal verb</gram>
    <sl>Brit</sl>
    <sl>informal</sl>
    <phrasev>
      <pva>bounce (someone) into (something)</pva>
    </phrasev>
    <dt>
      {bc}to force (someone) to decide to do (something) especially
      without having time to think about it
      <vi>The voters were <it>bounced into</it> agreeing
      to the proposal.</vi>
    </dt>
  </def>
</dro>
    
```


A run-on subject/status [label](#term-label) describes the subject area (eg, "computing") or regional/usage status (eg, "British", "formal", "slang") of a [defined run-on phrase](#term-drp) or [undefined entry word](#term-ure). A _r_un-on _s_ubject/status _l_abel is contained in an `rsl`.

Hierarchical Context

Occurs in `dros, uros`.

Display Guidance

Display within parentheses and in italics.

Data Model

`"rsl" :` `string`  contains text of a _r_un-on _s_ubject/status _l_abel.

Example

Use of `rsl` with a defined run-on phrase in the entry "bed".

```
"dros":[
  [...]
  {
    "drp":"get up on the wrong side of the bed",
    "rsl":"US",
    "vrs":[
      {
        "vl":"or chiefly British",
        "va":"get out of bed on the wrong side"
      }
    ],
    "def":[
      {
        "sseq":[
          [
            [
              "sense",
              {
                "dt":[
                  [
                    "text",
                    "{bc}to be in a bad mood throughout the day "
                  ],[
                    "vis",
                    [
                      {"t":"Be careful when you talk to the boss.
                      He {it}got up on the wrong side of the bed{\/it}
                      this morning."}
                    ]
                  ]
                ]
              }
            ]
          ]
        ]
      }
    ]
  }
  [...]
]
    
```


XML Equivalent

```
<dro>
  <dre>get up on the wrong side of the bed</dre>
  <rsl>US</rsl>
  <vr>
    <vl>or chiefly Brit</vl>
    <va>get out of bed on the wrong side</va>
  </vr>
  <def>
    <dt>{bc}to be in a bad mood throughout the day
      <vi>Be careful when you talk to the boss. He <it>got up
      on the wrong side of the bed</it> this morning.</vi>
    </dt>
  </def>
</dro>
    
```


[Entries](#term-entry) may have illustrations to provide a visual depiction of the [headword](#term-headword). In this dictionary, all information needed to display an image is contained in `artl`.

Note that while `artl` contains the `art` element described [elsewhere](#sec-2.art) and is structurally similar, it differs in important ways described below.

Hierarchical Context

Top-level member of dictionary entry, occurring near the end of the entry.

Display Guidance

Typically displayed in place within entry without a heading.

Data Model

`"artl" :` `object`  contains an `art` object, which in turn may contain the following members:

`"artid" :` `string`  filename of target image (including an extension to be removed as described below)

`"capt" :` `string`  image caption text

`"dim" :` `string`  image _dim_ensions—please ignore

The image URL should be in the following form: `http://www.learnersdictionary.com/art/ld/[base filename].gif` where \[base filename\] equals the value of `artid` after _removing_ any built-in extension (eg, ".eps", ".tif"). For the Example below, this URL would be: `http://www.learnersdictionary.com/art/ld/mail.gif`

If desired, use `capt` to pull in caption contents.

Example

Use of `artl` in the entry "mail".

```
"artl":{
  "art":{
    "artid":"mail.eps",
    "dim":"394,201"
  }
}
    
```


XML Equivalent

```
<art>
  <artref id="mail.eps"></artref>
  <capt></capt>
  <dim>394,201</dim>
</art>
    
```


An M-W [verbal illustration](#term-vi) is an example sentence illustrating how a word is used in context. Contentwise, it is similar to `[vis](#sec-2.vis)` but has a somewhat different structure. An _M-W_ _v_erbal _i_llustration is contained in a `vimw`.

Hierarchical Context

Occurs in `dt, hint, un, uro`.

Display Guidance

An M-W [verbal illustration](#term-vi) is typically set off from surrounding text (as by surrounding the entire illustration in angle brackets).

Data Model

`Array` of the form `["vimw", {``object``}]`, where the object may contain the members:

`"t" :` `string`  text of verbal illustration

optional `[aq](#sec-2.aq)` (used when verbal illustration is an _a_ttributed _q_uotation as opposed to made-up example)

Example

```
[
  "sense",
  {
    "sn":"3",
    "dt":[
      [
        "text",
        "{bc}a curved or hooked part of a thing {bc}{sx|bend||} "
      ],[
        "vimw",
        {
          "t":"He held it in the {it}crook{\/it} of his arm."
        }
      ]
    ]
  }
]
    
```


XML Equivalent

```
<sense>
  <sn>3</sn>
  <dt>{bc}a curved or hooked part of a thing {bc}{sx|bend||}
    <vimw>
      <t>He held it in the {it}crook{/it} of his arm.</t>
    </vimw>
  </dt>
</sense>
    
```


An inline hint provides helpful usage advice on a [headword](#term-headword) in a particular [sense](#term-sense). An inline _hint_ is contained in a `hint`.

Hierarchical Context

Occurs in `dt`.

Display Guidance

Displayed inline, preceded by the heading "Hint: " in italics.

Data Model

`["hint",` `array``]` containing the elements:

`["text",` `string``]`  hint text

optional `[vimw](#sec-5.vimw), [vis](#sec-2.vis)` array elements

Example

An inline `hint` in the entry for "calisthenics".

```
[
  "hint",
  [
    [
      "text",
      "{it}Calisthenics{\/it} can be used as a singular or as a plural
      in writing and speaking. "
    ],[
      "vis",
      [
        {"t":"{it}Calisthenics{\/it} is an important form of exercise."},
        {"t":"This morning\u0027s {it}calisthenics{\/it} were tough."}
      ]
    ]
  ]
]
    
```


XML Equivalent

```
<hint>
  {it}Calisthenics{/it} can be used as a singular or as a plural
  in writing and speaking. 
  <vis>
    <vi>
      <t>{it}Calisthenics{/it} is an important form of exercise.</t>
    </vi>
    <vi>
      <t>This morning's {it}calisthenics{/it} were tough.</t>
    </vi>
  </vis>
</hint>
    
```


A hint paragraph provides helpful usage advice on a [headword](#term-headword). A _hint_ paragraph is contained in a `hintp`.

Hierarchical Context

Top-level member of dictionary entry, occurring near end of entry.

Display Guidance

The entire `hintp` is displayed in its own indented paragraph.

The `pl` is used as a heading, displayed in italics and followed by a colon and space.

The `pt` is displayed in normal font immediately following `pl`.

Data Model

`"hintp" :` `object` containing the members:

`"pl" :` `string`  _p_aragraph _l_abel: heading to display at top of section

`"pt" : [``array``]`  _p_aragraph _t_ext containing the elements:

`"text",` `string`  hint paragraph text

optional `[vis](#sec-2.vis)`

Example

```
"hintp":{
  "pl":"Hint",
  "pt":[
    [
      "text",
      "The word {it}caribou{\/it} is used especially to refer to
      these animals when they live in North America. The word
      {it}reindeer{\/it} is usually used for these animals when they
      live in Europe and Asia."
    ]
  ]
}
    
```


XML Equivalent

```
<hintp>
  <pl>Hint</pl>
  <pt>The word {it}caribou{/it} is used especially to refer
  to these animals when they live in North America. The word
  {it}reindeer{/it} is usually used for these animals when they
  live in Europe and Asia.</pt>
</hintp>
    
```


A headscratcher paragraph provides helpful advice on a particular tricky or confusing [headword](#term-headword). A _h_ead_s_cratcher paragraph is contained in an `hs`.

Hierarchical Context

Top-level member of dictionary entry, occurring near end of entry.

Display Guidance

The entire `hs` is displayed in a box.

The `pl` is used as a heading.

The `pt` should be displayed in its own paragraph.

Data Model

`"hs" :` `object` containing the members:

`"pl" :` `string`  _p_aragraph _l_abel: heading to display at top of section

`"pt" : [``array``]`  _p_aragraph _t_ext containing the elements:

`"text",` `string`  headscratcher paragraph text

optional `[vis](#sec-2.vis)`

Example

A `hs` paragraph in the second homograph of "cleave".

```
"hs":{
  "pl":"Headscratcher",
  "pt":[
    [
      "text",
      "The two verbs {it}cleave{\/it} look and sound alike, but
      have very different meanings. One means \u201cto split apart,\u201d
      and the other means \u201cto cling to.\u201d"
    ]
  ]
}
    
```


XML Equivalent

```
<hs>
  <pl>Headscratcher</pl>
  <pt>The two verbs {it}cleave{/it} look and sound alike, but
  have very different meanings. One means “to split apart,” and
  the other means “to cling to.”</pt>
</hs>
    
```


A word root paragraph presents information on a [headword's](#term-headword) [etymology](#term-et) in an easy-to-read format. A word _root_ _para_graph is contained in a `rootpara`.

Hierarchical Context

Top-level member of dictionary entry, occurring near end of entry.

Display Guidance

The entire `rootpara` is typically displayed in a box.

The `pl` can be used as a heading, or alternately the text "Word Root" can be used instead.

The `pt` should be displayed in its own paragraph.

Data Model

`"rootpara" :` `object` containing the members:

`"pl" :` `string`  _p_aragraph _l_abel: heading to display at top of section

`"pt" : [``array``]`  _p_aragraph _t_ext containing the elements:

`"text",` `string`  word root paragraph text

optional `[vis](#sec-2.vis)`

Example

A `rootpara` in the entry for "verb".

```
"rootpara":{
  "pl":"Root",
  "pt":[
    [
      "text",
      "The Latin word {it}verbum{\/it}, meaning \u201cword,\u201d
      gives us the root {b}verb{\/b}. Words from the Latin {it}verbum{\/it}
      have something to do with words. A {b}verb{\/b} is a word
      that shows action. An {it}ad{\/it}{b}verb{\/b} is a word that
      modifies a verb, adjective, or other adverb. A {it}pro{\/it}{b}verb{\/b},
      or short saying containing a wise thought, is made up of a
      few well-chosen words. Anything {b}verb{\/b}{it}al{\/it} is
      made up of spoken words."
    ]
  ]
}
    
```


XML Equivalent

```
<rootpara>
  <pl>Root</pl>
  <pt>The Latin word {it}verbum{/it}, meaning “word,” gives
  us the root {b}verb{/b}. Words from the Latin {it}verbum{/it}
  have something to do with words. A {b}verb{/b} is a word that
  shows action. An {it}ad{/it}{b}verb{/b} is a word that modifies
  a verb, adjective, or other adverb. A {it}pro{/it}{b}verb{/b},
  or short saying containing a wise thought, is made up of a few
  well-chosen words. Anything {b}verb{/b}{it}al{/it} is made up
  of spoken words.</pt>
</rootpara>
    
```


A word history paragraph provides historical background for a [headword](#term-headword). A word _history_ paragraph is contained in a `history`.

Hierarchical Context

Top-level member of dictionary entry, occurring near end of entry.

Display Guidance

The entire `history` is displayed in a box.

The `pl` is used as a heading. Following this main heading, the headword `hw` may also be displayed on its own line.

The `pt` should be displayed in its own paragraph.

Data Model

`"history" :` `object` containing the members:

`"pl" :` `string`  _p_aragraph _l_abel: heading to display at top of section

`"pt" : [``array``]`  _p_aragraph _t_ext containing the elements:

`"text",` `string`  word history paragraph text

optional `[vis](#sec-2.vis)`

Example

A word `history` paragraph in the entry "vaccine".

```
"history":{
  "pl":"Word History",
  "pt":[
    [
      "text",
      "In the late 1700s the English doctor Edward Jenner investigated
      the old belief that people who contracted a mild disease called
      cowpox from cows thereby became immune to smallpox, a much
      more dangerous disease. Jenner documented 23 such cases, where
      people inoculated with matter from cowpox sores came down with
      cowpox but then did not contract smallpox. Because {it}variolae
      vaccinae{\/it}, literally, \u201ccow pustules,\u201d was the medical
      Latin name for cowpox, the virus-containing material used for
      inoculations eventually came to be called {it}vaccine{\/it}."
    ]
  ]
}
    
```


XML Equivalent

```
<history>
  <pl>Word History</pl>
  <pt>In the late 1700s the English doctor Edward Jenner
  investigated the old belief that people who contracted a mild
  disease called cowpox from cows thereby became immune to smallpox,
  a much more dangerous disease. Jenner documented 23 such cases,
  where people inoculated with matter from cowpox sores came down
  with cowpox but then did not contract smallpox. Because {it}variolae
  vaccinae{/it}, literally, “cow pustules,” was the medical Latin name
  for cowpox, the virus-containing material used for inoculations
  eventually came to be called {it}vaccine{/it}.</pt>
</history>
    
```


A biographical note provides information on a historical or mythological figure relevant to the [headword](#term-headword). A series of one or more _bio_graphical note_s_ is contained in `bios`.

Hierarchical Context

Top-level member of dictionary entry.

Display Guidance

Displayed in its own paragraph. May be preceded by a heading such as "Biographical Note for \[headword\]".

A `biodate` or a `bionw` containing a `biosname` should be followed by a comma and space.

A `biodate` should be preceded by a space.

`biopname, biosname,` and `biodate` are typically displayed in bold, while `biotx` should be displayed in normal font.

Data Model

`"bios" : [[``array``]]` of the following elements:

`["bionw",` `object``]`  _bio_graphical _n_ame _w_rap, containing the members:

`"biosname" :` `string`  _bio_graphical _s_ur_name_

`"biopname" :` `string`  _bio_graphical _p_ersonal or first _name_

`"bioname" :` `string`  other _bio_graphical _name_ (used for mythological figures, eg, "Atropa")

optional `[prs](#sec-2.prs)`

`["biodate",` `string``]`  contains birth and death years

`["biotx",` `string``]`  contains _t_e_x_t of _bio_graphical note

Example

A biographical note `bios` at the entry for "bartonella".

```
"bios":[
  [
    [
      "bionw",
      {
        "biosname":"Bar*ton",
        "prs":[
          {
            "mw":"\u02c8b\u00e4r-\u02cct\u014dn",
            "sound":{"audio":"barto01m"}
          }
        ]
      }
    ],[
      "bionw",
      {"biopname":"Alberto L."}
    ],[
      "biodate",
      "(1874\u20131950)"
    ],[
      "biotx",
      "Peruvian physician. In 1909 Barton published an article on elements
      found in the red blood cells of patients with Oroya fever. In this
      article he identified the blood parasite ({it}Bartonella bacilliformis{\/it})
      that is the causative agent of Oroya fever and verruga peruana.
      The organism is now placed in the genus {it}Bartonella,{\/it} which
      was named after him in 1915."
    ]
  ]
]
    
```


XML Equivalent

```
<bio>
  <sname>Bar*ton</sname>
  <pr>{hstres}b{auml}r-{lstres}t{omacr}n</pr>
  <pname>Alberto L.</pname>
  <bddate>(1874{ndash}1950)</bddate>
  <tx>Peruvian physician. In 1909 Barton published an article on elements
  found in the red blood cells of patients with Oroya fever. In this article
  he identified the blood parasite (<it>Bartonella bacilliformis</it>)
  that is the causative agent of Oroya fever and verruga peruana. The organism
  is now placed in the genus <it>Bartonella,</it> which was
  named after him in 1915.
  </tx>
</bio>
    
```


Bilingual dictionaries contain two distinct dictionaries within one work. In order to distinguish the two language directions for search and display purposes, an entry metadata item identifying the language of the [entry's](#term-entry) [headword](#term-headword)—or the language of word _lookup_ as opposed to translation—is provided. The entry's _lang_uage metadata is contained in `lang`.

Hierarchical Context

Occurs in `meta`.

Display Guidance

Not intended for display as such, but may be useful if different rendering is desired for Spanish-English entries than for English-Spanish.

Data Model

`"meta" :` `object` containing the members discussed in [section 2.1](#sec-2.meta) and [3.1](#sec-3.meta) as well as:

`"lang" :` `string`  contains an [ISO 639-1](http://www.loc.gov/standards/iso639-2/php/code_list.php) language code corresponding to the language of the entry's [headword](#term-headword), ie, the language in which the user wishes to _look up_ a word in order to get a _translation_ to another language.

Example

Use of `lang` in two entries: English-Spanish "rodeo", followed by Spanish-English "rodeo".

```
[
  {
    "meta":{
      "id":"rodeo",
      "uuid":"27c0b37e-d71f-406d-a07a-1e9c946d61c9",
      "lang":"en",
      "original", -->
      "src":"spanish",
      "section":"alpha",
      "stems":["rodeo","-deos"],
      
      "offensive":false
    },
    "hwi":{
      "hw":"rodeo",
      "prs":[
        {"mw":"\u02c8ro\u02d0di\u02cco\u02d0"},
        {"mw":"ro\u02c8de\u026a\u02cco\u02d0"}
      ]
    },
    "fl":"noun",
    "ins":[
      {
        "il":"plural",
        "if":"-deos"
      }
    ],
    "def":[
      {
        "sseq":[
          [
            [
              "sense",
              {
                "dt":[
                  ["text","{bc}rodeo "],
                  ["gl","masculine"]
                ]
              }
            ]
          ]
        ]
      }
    ],
    "shortdef":["rodeo"]
  },{
    "meta":{
      "id":"rodeo",
      "uuid":"12b6e152-267e-4927-bec5-c372829ded53",
      "lang":"es",
      "original", -->
      "src":"spanish",
      "section":"alpha",
      "stems":["rodeo"],
      
      "offensive":false
    },
    "hwi":{"hw":"rodeo"},
    "fl":"masculine noun",
    "def":[
      {
        "sseq":[
          [
            [
              "sense",
              {
                "sn":"1",
                "dt":[
                  ["text","{bc}rodeo, roundup"]
                ]
              }
            ]
          ],[
            [
              "sense",
              {
                "sn":"2",
                "dt":[
                  ["text","{sx|desv\u00edo||} {bc}detour"]
                ]
              }
            ]
          ],[
            [
              "sense",
              {
                "sn":"3",
                "dt":[
                  ["text","{bc}evasion "],
                  [
                    "vis",
                    [
                      {
                        "t":"andar con rodeos",
                        "tr":"to beat around the bush"
                      },{
                        "t":"sin rodeos",
                        "tr":"without reservations"
                      }
                    ]
                  ]
                ]
              }
            ]
          ]
        ]
      }
    ],
    "shortdef":["rodeo, roundup","desv\u00edo : detour","evasion"]
  }
]
    
```


XML Equivalent

```
<entry>
  <meta>
    <id>rodeo</id>
    <uuid>27c0b37e-d71f-406d-a07a-1e9c946d61c9</uuid>
    <lang>en</lang>
    original</update> -->
    
    <src>spanish</src>
    <section>alpha</section>
    <stems><st>rodeo</st><st>-deos</st></stems>
  </meta>
  <hwi>
    <hw>rodeo</hw>
    <prs>
      <pr><mw>ˈroːdiˌoː</mw></pr>
      <pr><mw>roˈdeɪˌoː</mw></pr>
    </prs>
  </hwi>
  <fl>noun</fl>
  <ins><in><il>plural</il><if>-deos</if></in></ins>
  <def>
    <vg>
      <sseq>
        <sb>
          <sense><dt>{bc}rodeo <gl>masculine</gl></dt></sense>
        </sb>
      </sseq>
    </vg>
  </def>
</entry>
<entry>
  <meta>
    <id>rodeo</id>
    <uuid>12b6e152-267e-4927-bec5-c372829ded53</uuid>
    <lang>es</lang>
    original</update> -->
    
    <src>spanish</src>
    <section>alpha</section>
    <stems><st>rodeo</st></stems>
  </meta>
  <hwi>
    <hw>rodeo</hw>
  </hwi>
  <fl>masculine noun</fl>
  <def>
    <vg>
      <sseq>
        <sb>
          <sense><sn>1</sn><dt>{bc}rodeo, roundup</dt></sense>
        </sb>
        <sb>
          <sense><sn>2</sn><dt>{sx|desvío||} {bc}detour</dt></sense>
        </sb>
        <sb>
          <sense>
            <sn>3</sn>
            <dt>{bc}evasion
              <vis>
                <vi>
                  <t>andar con rodeos</t>
                  <tr>to beat around the bush</tr>
                </vi>
                <vi>
                  <t>sin rodeos</t>
                  <tr>without reservations</tr>
                </vi>
              </vis>
            </dt>
          </sense>
        </sb>
      </sseq>
    </vg>
  </def>
</entry>
    
```


In bilingual dictionaries, an [alternate headword](#term-ahw) often simply presents the main [headword](#term-headword) in a different gender and/or number (eg, in its feminine singular or masculine plural form). In space-constrained environments, such alternate headwords may be presented in a shortened cutback form (eg, "-ga"). A _h_ead_w_ord _c_utback is contained in an `hwc`.

Hierarchical Context

Occurs in `[ahws](#sec-2.ahws)`.

Display Guidance

Typically displayed in bold.

Note that the `hwc` is simply a shortened form of the immediately preceding `hw`; only one of these two elements should be presented to the user at a time.

Data Model

`"hwc" :` `string`  contains a _c_utback form of the preceding alternate _h_ead_w_ord.

Example

An instance of `hwc` in the Spanish-English entry "abandonado".

```
"hwi":{
  "hw":"abandonado",
  "prs":[
    {
      "sound":{"audio":"aband01sp"}
    }
  ]
},
"ahws":[
  {
    "hw":"abandonada",
    "hwc":"-da"
  }
]
    
```


XML Equivalent

```
<hwi>
  <hw>abandonado</hw>
  <prs>
    <pr>
      <sound>
        <audio>aband01sp</audio>
      </sound>
    </pr>
  </prs>
</hwi>
<ahws>
  <ahw>
    <hw>abandonada</hw>
    <hwc>-da</hwc>
  </ahw>
</ahws>
    
```


A [variant](#term-va) is often a sense-specific idiom or phrase containing the [headword](#term-headword). In space-constrained environments, such variants may be presented in a shortened cutback form that omits the headword itself. A _va_riant _c_utback is contained in a `vac`.

Hierarchical Context

Occurs in `[vrs](#sec-2.vrs)`.

Display Guidance

Typically displayed in bold.

Note that the `vac` is simply a shortened form of the immediately preceding `va`; only one of these two elements should be presented to the user at a time.

Data Model

`"vac" :` `string`  contains a _c_utback form of the preceding _va_riant.

Example

Use of `vac` across several senses in the first homograph of "all" in English-Spanish.

```
[
  [
    "sense",
    {
      "sn":"5",
      "vrs":[
        {
          "va":"all of",
          "vac":"~ of"
        }
      ],
      "dt":[
        [
          "text",
          "{sx|only||} {bc}s\u00f3lo, solamente"
        ]
      ]
    }
  ]
],[
  [
    "sense",
    {
      "sn":"6",
      "vrs":[
        {
          "va":"all of",
          "vac":"~ of"
        }
      ],
      "dt":[
        [
          "text",
          "{sx|at least||} {bc}por lo menos"
        ]
      ]
    }
  ]
],[
  [
    "sense",
    {
      "sn":"7",
      "vrs":[
        {
          "va":"all over",
          "vac":"~ over"
        }
      ],
      "dt":[
        [
          "text",
          "{sx|everywhere||} {bc}por todas partes"
        ]
      ]
    }
  ]
],[
  [
    "sense",
    {
      "sn":"8",
      "vrs":[
        {
          "va":"all over",
          "vac":"~ over"
        }
      ],
      "sls":["familiar"],
      "dt":[
        [
          "vis",
          [
            {
              "t":"to be all over someone for something",
              "tr":"criticar duramente a alguien por algo"
            }
          ]
        ]
      ]
    }
  ]
]
    
```


XML Equivalent

```
<sb>
  <sense>
    <sn>5</sn>
    <vrs>
      <vr>
        <va>all of</va>
        <vac>~ of</vac>
      </vr>
    </vrs>
    <dt>{sx|only||} {bc}sólo, solamente</dt>
  </sense>
</sb>
<sb>
  <sense>
    <sn>6</sn>
    <vrs>
      <vr>
        <va>all of</va>
        <vac>~ of</vac>
      </vr>
    </vrs>
    <dt>{sx|at least||} {bc}por lo menos</dt>
  </sense>
</sb>
<sb>
  <sense>
    <sn>7</sn>
    <vrs>
      <vr>
        <va>all over</va>
        <vac>~ over</vac>
      </vr>
    </vrs>
    <dt>{sx|everywhere||} {bc}por todas partes</dt>
  </sense>
</sb>
<sb>
  <sense>
     <sn>8</sn>
     <vrs>
       <vr>
         <va>all over</va>
         <vac>~ over</vac>
       </vr>
     </vrs>
     <sls>
       <sl>familiar</sl>
     </sls>
     <dt>
       <vis>
         <vi>
           <t>to be all over someone for something</t>
           <tr>criticar duramente a alguien por algo</tr>
         </vi>
       </vis>
     </dt>
  </sense>
</sb>
    
```


In bilingual dictionaries, an [inflection](#term-infl) may have a fully spelled-out form as well as a shortened cutback form for use in space-constrained environments. An _a_lternate _i_n_f_lection `aif` surrounds both the spelled-out and cutback forms.

Hierarchical Context

Occurs in `ins`.

Display Guidance

Display `if` and `ifc` as described in the `[ins](#sec-2.ins)` section.

Data Model

`"aif" :` `object`  containing the members:


|"if" : string |inflection: a fully spelled-out inflection                                  |
|--------------|----------------------------------------------------------------------------|
|"ifc" : string|inflection cutback: an inflection ending (eg, Spanish "-as", English "-ing")|


Example

```
[
  "sense",
  {
    "sn":"3",
    "ins":[
      {
        "if":"distintos",
        "aif":{
          "ifc":"-tas",
          "if":"distintas"
        },
        "spl":"plural"
      }
    ],"dt":[
      [
        "text",
        "{bc}{a_link|various}"
      ]
    ]
  }
]

```


XML Equivalent

```
<sense>
  <sn>3</sn>
  <ins>
    <in>
      <if>distintos</if>
      <aif>
        <ifc>-tas</ifc>
        <if>distintas</if>
      </aif>
      <spl>plural</spl>
    </in>
  </ins>
  <dt>
    {bc}various
  </dt>
</sense>

```


When a [headword](#term-headword) or one of its [senses](#term-sense) represents a less common spelling or inflected form of another word, the definition is omitted and replaced by a cross-reference pointing to the [entry](#term-drp) containing detailed definition information. A set of _cross_\-_r_eference_s_ is contained in an `xrs`.

Hierarchical Context

Occurs in `sen, sense,` or as top-level member of dictionary entry.

Display Guidance

The `xrs` is preceded by a right-pointing arrow.

The `xrti` generates a hyperlink, with link text provided by `xrt`. If there is more than one `xrti`, they are separated by a comma and space.

Data Model

`"xrs" :` `object`  containing the member:

`"xrtis" :` `object`  containing one or more:

`"xrti" :` `object`  containing the members:

`"xrt" :` `string`  contains _cross_\-_r_eference _t_ext

`"xref" :` `string`  contains ID of _cross_\-_ref_erence target

Example

An `xrs` in the Spanish-English entry "bañadera".

```
"xrs":{
  "xrtis":{
    "xrti":{
      "xrt":"bañera",
      "xref":"ban~era"
    }
  }
}
    
```


XML Equivalent

```
<xrs>
  <xrtis>
    <xrti>
      <xrt>bañera</xrt>
      <xref>ban~era</xref>
    </xrti>
  </xrtis>
</xrs>
    
```


In a bilingual dictionary, a gender [label](#term-label) provides the grammatical gender for the immediately preceding translation of the [headword](#term-hw). A _g_ender _l_abel is contained in a `gl`.

Hierarchical Context

Occurs in `dt`.

Display Guidance

Typically displayed in italics.

Data Model

`Array` of the form `["gl",` `string``]`, where the string contains the text of the _g_ender _l_abel.

Example

An instance of `gl` in the English-Spanish entry "abbey".

```
[
  "sense",
  {
    "dt":[
      [
        "text",
        "{bc}abad\u00eda "
      ],[
        "gl",
        "feminine"
      ]
    ]
  }
]
    
```


XML Equivalent

```
<sense>
  <dt>{bc}abadía
    <gl>feminine</gl>
  </dt>
</sense>
    
```


In bilingual dictionaries, a [headword](#term-headword) translation may have multiple forms for different grammatical genders. In digital formats such forms are spelled out, while in space-constrained environments they may be presented in shortened cutback form. A set of _g_ender _w_or_ds_ is marked by `gwds`, followed by a _g_ender _w_ord _c_utback in `gwc` and a spelled-out _g_ender _w_or_d_ form in `gwd`.

Hierarchical Context

Occurs in `dt`.

Display Guidance

Typically displayed in normal font.

Note: as the `gwc` is simply a shortened form of the immediately following `gwd`, only one of these two elements should be presented to the user at a time.

Data Model

`Array` of the form `["gwds",` `object``]`, where the object contains the members:

`"gwc" :` `string`  text of _g_ender _w_ord _c_utback form

`"gwd" :` `string`  text of _g_ender _w_or_d_ spelled-out form

Example

Use of `gwds, gwc,` and `gwd` in the English-Spanish entry "youngster".

```
[
  "sense",
  {
    "sn":"2",
    "dt":[
      ["text","{sx|child||} {bc}{a_link|chico} "],
      ["gl","masculine"],
      ["text",", "],
      [
        "gwds",
        {
          "gwc":"-ca",
          "gwd":"chica"
        }
      ],
      ["text"," "],
      ["gl","feminine"],
      ["text","; niño"],
      ["gl","masculine"],
      ["text",", "],
      [
        "gwds",
        {
          "gwc":"-ña",
          "gwd":"niña"
        }
      ],
      ["text"," "],
      ["gl","feminine"]
    ]
  }
]

```


XML Equivalent

```
<sense>
  <sn>2</sn>
  <dt>
    {sx|child||} {bc}chico 
    <gl>masculine</gl>,
    <gwds>
      <gwc>-ca</gwc>
      <gwd>chica</gwd>
    </gwds>
    <gl>feminine</gl>;
    niño 
    <gl>masculine</gl>,
    <gwds>
      <gwc>-ña</gwc>
      <gwd>niña</gwd>
    </gwds>
    <gl>feminine</gl>
  </dt>
</sense>

```


In a bilingual dictionary, a [verbal illustration](#term-vi) has an accompanying translation to aid user comprehension. A verbal illustration _tr_anslation is contained in a `tr`.

Hierarchical Context

Occurs in `vis`.

Display Guidance

Typically displayed in italics to contrast with preceding `t` verbal illustration text.

Data Model

`"tr" :` `string`  contains text of verbal illustration _tr_anslation

Example

Verbal illustration translations `tr` in the Spanish-English entry "ruina".

```
[
  [
    "sense",
    {
      "sn":"3",
      "dt":[
        [
          "text",
          "{bc}collapse (of a building, etc.) "
        ],[
          "vis",
          [
            {
              "t":"amenazar ruina",
              "tr":"to threaten to collapse"
            }
          ]
        ]
      ]
    }
  ]
],[
  [
    "sense",
    {
      "sn":"4",
      "ins":[
        {
          "if":"ruinas",
          "spl":"noun feminine plural"
        }
      ],
      "dt":[
        [
          "text",
          "{bc}ruins, remains "
        ],[
          "vis",
          [
            {
              "t":"ruinas romanas",
              "tr":"Roman ruins"
            },{
              "t":"estar\/quedar en ruinas",
              "tr":"to be\/lie in ruins"
            }
          ]
        ]
      ]
    }
  ]
]
    
```


XML Equivalent

```
<sb>
  <sense>
    <sn>3</sn>
    <dt>{bc}collapse (of a building, etc.)
      <vis>
        <vi>
          <t>amenazar ruina</t>
          <tr>to threaten to collapse</tr>
        </vi>
      </vis>
    </dt>
  </sense>
</sb>
<sb>
  <sense>
    <sn>4</sn>
    <ins>
      <in>
        <if>ruinas</if>
        <spl>noun feminine plural</spl>
      </in>
    </ins>
    <dt>{bc}ruins, remains
      <vis>
        <vi>
          <t>ruinas romanas</t>
          <tr>Roman ruins</tr>
        </vi>
        <vi>
          <t>estar/quedar en ruinas</t>
          <tr>to be/lie in ruins</tr>
        </vi>
      </vis>
    </dt>
  </sense>
</sb>
    
```


In bilingual dictionaries, an [undefined entry word](#term-ure) may have multiple forms according to grammatical gender and number. In digital formats such forms are spelled out, while in space-constrained environments they may be presented in shortened cutback form. An _a_lternate _u_ndefined _e_nt_r_y is marked up by `aure`, and contains an _u_ndefined _e_nt_r_y word _c_utback in a `urec` as well as a spelled-out _u_ndefined _e_nt_r_y word in a `ure`.

Hierarchical Context

Occurs in `uros`.

Display Guidance

The first `ure` within `uros` is preceded by an em-dash.

Both `urec` and `ure` are displayed in bold.

Separate a series of `ure` and `aure` elements with a comma and space.

Note: within an `aure` the `urec` is simply a shortened form of the immediately following `ure`, so only one of these two elements should be presented to the user at a time.

Data Model

`"aure" :` `object`, where the object contains the members:

`"urec" :` `string`  text of _u_ndefined _e_nt_r_y word _c_utback form

`"ure" :` `string`  text of _u_ndefined _e_nt_r_y word spelled-out form

Example

Use of `aure` in the Spanish-English entry for "robot".

```
"uros":[
  {
    "ure":"rob\u00f3tico",
    "aure":{
      "urec":"-ca",
      "ure":"rob\u00f3tica"
    },
    "fl":"adjective"
  }
]

```


XML Equivalent

```
<uros>
  <uro>
    <ure>robótico</ure>
    <aure>
      <urec>-ca</urec>
      <ure>robótica</ure>
    </aure>
    <fl>adjective</fl>
  </uro>
</uros>

```


A supplemental verb conjugation section is included in some bilingual dictionary [entries](#term-entry). A set of verb _c_on_j_uga_t_ion_s_ is contained in a `cjts`.

Hierarchical Context

The `suppl` is a top-level member of the dictionary entry, occurring near end of entry; `cjts` is contained within `suppl`.

Display Guidance

Typically displayed as a table, with rows organized by person/number, and each column containing data from a particular object in the `cjts` array.

The `cjid` contains a code identifying the tense; the spelled-out tense name is typically displayed in bold as a column heading. The values in the `cjfs` populate the column, and are typically displayed in normal font.

Note that if `cjts` is displayed in the entry, `cjref` should be suppressed.

Data Model

`"suppl" :` `object` containing the member:

`"cjts" :` `array`  of one or more conjugation `objects` containing the members:

`"cjid" :` `string`  an _ID_ identifying the verb tense of the following _c_on_j_ugation fields

`"cjfs" :` `array`  of one or more _c_on_j_ugation _f_ield_s_, each representing a particular verb form in the tense indicated by `cjid`

Example

An instance of `cjts` in the Spanish-English entry "acaecer".

```
"suppl":{
  "cjts":[
    {
      "cjid":"gppt",
      "cjfs":["acaeciendo","acaecido"]
    },{
      "cjid":"pind",
      "cjfs":["-","-","acaece","-","-","acaecen"]
    },{
      "cjid":"pret",
      "cjfs":["-","-","acaec\u00eda","-","-","acaec\u00edan"]
    },{
      "cjid":"pprf",
      "cjfs":["-","-","acaeci\u00f3","-","-","acaecieron"]
    },{
      "cjid":"futr",
      "cjfs":["-","-","acaecer\u00e1","-","-","acaecer\u00e1n"]
    },{
      "cjid":"cond",
      "cjfs":["-","-","acaecer\u00eda","-","-","acaecer\u00edan"]
    },{
      "cjid":"psub",
      "cjfs":["-","-","acaezca","-","-","acaezcan"]
    },{
      "cjid":"pisb1",
      "cjfs":["-","-","acaeciera","-","-","acaecieran"]
    },{
      "cjid":"pisb2",
      "cjfs":["-","-","acaeciese","-","-","acaeciesen"]
    },{
      "cjid":"fsub",
      "cjfs":["-","-","acaeciere","-","-","acaecieren"]
    },{
      "cjid":"ppci",
      "cjfs":["-","-","ha acaecido","-","-","han acaecido"]
    },{
      "cjid":"ppsi",
      "cjfs":["-","-","hab\u00eda acaecido","-","-","hab\u00edan acaecido"]
    },{
      "cjid":"pant",
      "cjfs":["-","-","hubo acaecido","-","-","hubieron acaecido"]
    },{
      "cjid":"fpin",
      "cjfs":["-","-","habr\u00e1 acaecido","-","-","habr\u00e1n acaecido"]
    },{
      "cjid":"cpef",
      "cjfs":["-","-","habr\u00eda acaecido","-","-","habr\u00edan acaecido"]
    },{
      "cjid":"ppfs",
      "cjfs":["-","-","haya acaecido","-","-","hayan acaecido"]
    },{
      "cjid":"ppss1",
      "cjfs":["-","-","hubiera acaecido","-","-","hubieran acaecido"]
    },{
      "cjid":"ppss2",
      "cjfs":["-","-","hubiese acaecido","-","-","hubiesen acaecido"]
    },{
      "cjid":"fpsb",
      "cjfs":["-","-","hubiere acaecido","-","-","hubieren acaecido"]
    },{
      "cjid":"impf",
      "cjfs":["-","-","-","-","-","-"]
    }
  ]
}
    
```


XML Equivalent

```
<suppl>
  <cjts>
    <cjt>
      <cjid>gppt</cjid>
      <cjfs>
        <cjf>acaeciendo</cjf>
        <cjf>acaecido</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>pind</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaece</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaecen</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>pret</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaecía</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaecían</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>pprf</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaeció</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaecieron</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>futr</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaecerá</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaecerán</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>cond</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaecería</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaecerían</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>psub</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaezca</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaezcan</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>pisb1</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaeciera</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaecieran</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>pisb2</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaeciese</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaeciesen</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>fsub</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaeciere</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>acaecieren</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>ppci</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>ha acaecido</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>han acaecido</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>ppsi</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>había acaecido</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>habían acaecido</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>pant</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>hubo acaecido</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>hubieron acaecido</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>fpin</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>habrá acaecido</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>habrán acaecido</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>cpef</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>habría acaecido</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>habrían acaecido</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>ppfs</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>haya acaecido</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>hayan acaecido</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>ppss1</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>hubiera acaecido</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>hubieran acaecido</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>ppss2</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>hubiese acaecido</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>hubiesen acaecido</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>fpsb</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>hubiere acaecido</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>hubieren acaecido</cjf>
      </cjfs>
    </cjt>
    <cjt>
      <cjid>impf</cjid>
      <cjfs>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
        <cjf>-</cjf>
      </cjfs>
    </cjt>
  </cjts>
</suppl>
    
```

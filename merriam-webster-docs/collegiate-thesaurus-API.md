# Collegiate Thesaurus API | Merriam-Webster Dictionary API
### API Product Description

The Collegiate® Thesaurus API is an updated collection of synonyms and antonyms, based on words entered in Merriam-Webster's Collegiate® Dictionary. An indispensable guide for choosing exactly the right word, with more than 275,000 word choices, examples, and explanations. This fully revised thesaurus includes usage examples for every synonym. Concise definitions pinpoint the meaning shared by synonyms. Alphabetical lists may also include related words, idiomatic phrases, and near antonyms.

### Data features available in this reference

*   Synonyms
*   Related words
*   Near antonyms
*   Antonyms
*   Idiomatic phrases
*   Concise definitions
*   Examples
*   Spelling suggestions

### Formats available

*   JSON

### Documentation

*   [JSON Fields](https://dictionaryapi.com/products/json)

### Query options

*   Headword
*   Stems (inflections, variants, etc.)

```
https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key

```


```
meta:{  
 id:"umpire",
 uuid:"1c8533d7-23e6-4c3b-9c48-854066e8caff",
 src:"coll_thes",
 section:"alpha",
 target:{  
    tuuid:"897edcad-2e88-4ab7-b81b-170ddf8eb4ec",
    tsrc:"collegiate"
 },
 stems:[  
    "umpire",
    "umpires"
 ],
 syns:[  
    [  
       "adjudicator",
       "arbiter",
       "arbitrator",
       "judge",
       "referee"
    ]
 ],
 ants:[  

 ],
 offensive:false
},
hwi:{  
 hw:"umpire"
},
fl:"noun",
def:[  
 {  
    sseq:[  
       [  
          [  
             "sense",
             {  
                dt:[  
                   [  
                      "text",
                      "a person who impartially decides or resolves a dispute or controversy "
                   ],
                   [  
                      "vis",
                      [  
                         {  
                            t:"usually acts as {it}umpire{/it} in the all-too-frequent squabbles between the two other roommates"
                         }
                      ]
                   ]
                ],
                syn_list:[  
                   [  
                      {  
                         wd:"adjudicator"
                      },
                      {  
                         wd:"arbiter"
                      },
                      {  
                         wd:"arbitrator"
                      },
                      {  
                         wd:"judge"
                      },
                      {  
                         wd:"referee"
                      }
                   ]
                ],
                rel_list:[  
                   [  
                      {  
                         wd:"jurist"
                      },
                      {  
                         wd:"justice"
                      },
                      {  
                         wd:"magistrate"
                      }
                   ],
                   [  
                      {  
                         wd:"intermediary"
                      },
                      {  
                         wd:"intermediate"
                      },
                      {  
                         wd:"mediator"
                      },
                      {  
                         wd:"mediatrix"
                      },
                      {  
                         wd:"moderator"
                      },
                      {  
                         wd:"negotiator"
                      }
                   ],
                   [  
                      {  
                         wd:"conciliator"
                      },
                      {  
                         wd:"go-between"
                      },
                      {  
                         wd:"peacemaker"
                      },
                      {  
                         wd:"reconciler"
                      },
                      {  
                         wd:"troubleshooter"
                      }
                   ],
                   [  
                      {  
                         wd:"decider"
                      }
                   ]
                ]
             }
          ]
       ]
    ]
 }
],
shortdef:[  
 "a person who impartially decides or resolves a dispute or controversy"
]

```
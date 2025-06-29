# Collegiate Dictionary API | Merriam-Webster Dictionary API
### API Product Description

The Eleventh Edition of America's best-selling dictionary features more than 225,000 clear and precise definitions and newly added words and meanings. More than 100,000 audio pronunciations and 42,000 usage examples. Includes Foreign Words and Phrases, and Biographical Names and Geographical Names.

### Data features available in this reference

*   Definitions
*   Examples
*   Etymologies
*   Synonym and Usage paragraphs
*   Pronunciation symbols
*   Audio pronunciations
*   Illustrations
*   Spelling suggestions

### Formats available

*   JSON

### Documentation

*   [JSON Fields](https://dictionaryapi.com/products/json)

### Query options

*   Headword
*   Stems (inflections, variants, etc.)

```
https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key

```


```
"meta":{  
 "id":"voluminous",
 "uuid":"0d01b967-971f-4ec5-8fe0-10513d29c39b",
 "sort":"220130400",
 "src":"collegiate",
 "section":"alpha",
 "stems":[  
    "voluminous",
    "voluminously",
    "voluminousness",
    "voluminousnesses"
 ],
 "offensive":false
},
"hwi":{  
 "hw":"vo*lu*mi*nous",
 "prs":[  
    {  
       "mw":"v\u0259-\u02c8l\u00fc-m\u0259-n\u0259s",
       "sound":{  
          "audio":"volumi02",
          "ref":"c",
          "stat":"1"
       }
    }
 ]
},
"fl":"adjective",
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
                      "{bc}having or marked by great {a_link|volume} or bulk {bc}{sx|large||} "
                   ],
                   [  
                      "vis",
                      [  
                         {  
                            "t":"long {wi}voluminous{\/wi} tresses"
                         }
                      ]
                   ]
                ],
                "sdsense":{  
                   "sd":"also",
                   "dt":[  
                      [  
                         "text",
                         "{bc}{sx|full||} "
                      ],
                      [  
                         "vis",
                         [  
                            {  
                               "t":"a {wi}voluminous{\/wi} skirt"
                            }
                         ]
                      ]
                   ]
                }
             }
          ],
          [  
             "sense",
             {  
                "sn":"b",
                "dt":[  
                   [  
                      "text",
                      "{bc}{sx|numerous||} "
                   ],
                   [  
                      "vis",
                      [  
                         {  
                            "t":"trying to keep track of {wi}voluminous{\/wi} slips of paper"
                         }
                      ]
                   ]
                ]
             }
          ]
       ],
       [  
          [  
             "sense",
             {  
                "sn":"2 a",
                "dt":[  
                   [  
                      "text",
                      "{bc}filling or capable of filling a large volume or several {a_link|volumes} "
                   ],
                   [  
                      "vis",
                      [  
                         {  
                            "t":"a {wi}voluminous{\/wi} literature on the subject"
                         }
                      ]
                   ]
                ]
             }
          ],
          [  
             "sense",
             {  
                "sn":"b",
                "dt":[  
                   [  
                      "text",
                      "{bc}writing or speaking much or at great length "
                   ],
                   [  
                      "vis",
                      [  
                         {  
                            "t":"a {wi}voluminous{\/wi} correspondent"
                         }
                      ]
                   ]
                ]
             }
          ]
       ],
       [  
          [  
             "sense",
             {  
                "sn":"3",
                "dt":[  
                   [  
                      "text",
                      "{bc}consisting of many folds, coils, or convolutions {bc}{sx|winding||}"
                   ]
                ]
             }
          ]
       ]
    ]
 }
],
"uros":[  
 {  
    "ure":"vo*lu*mi*nous*ly",
    "fl":"adverb"
 },
 {  
    "ure":"vo*lu*mi*nous*ness",
    "fl":"noun"
 }
],
"et":[  
 [  
    "text",
    "Late Latin {it}voluminosus{\/it}, from Latin {it}volumin-, volumen{\/it}"
 ]
],
"date":"1611{ds||3||}",
"ld_link":{  
 "link_hw":"voluminous",
 "link_fl":"adjective"
},
"suppl":{  
 "examples":[  
    {  
       "t":"the building\u0027s high ceilings and {it}voluminous{\/it} spaces"
    },
    {  
       "t":"a writer of {it}voluminous{\/it} output"
    }
 ],
 "ldq":{  
    "ldhw":"voluminous",
    "fl":"adjective",
    "def":[  
       {  
          "sls":[  
             "formal"
          ],
          "sseq":[  
             [  
                [  
                   "sense",
                   {  
                      "dt":[  
                         [  
                            "text",
                            "{bc}very large {bc}containing a lot of space"
                         ]
                      ]
                   }
                ]
             ],
             [  
                [  
                   "sense",
                   {  
                      "sls":[  
                         "of clothing"
                      ],
                      "dt":[  
                         [  
                            "text",
                            "{bc}using large amounts of fabric {bc}very full"
                         ]
                      ]
                   }
                ]
             ],
             [  
                [  
                   "sense",
                   {  
                      "dt":[  
                         [  
                            "text",
                            "{bc}having very many words or pages"
                         ]
                      ]
                   }
                ]
             ]
          ]
       }
    ]
 }
},
"shortdef":[  
 "having or marked by great volume or bulk : large; also : full",
 "numerous",
 "filling or capable of filling a large volume or several volumes"
]

```
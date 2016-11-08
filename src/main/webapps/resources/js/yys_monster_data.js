var MonsterItem = function(monster, number) {
    this.monster = monster;
    this.number = number;
};

var MonsterGroup = function(mainMonster, isBoss, possibleMonsterList) {
    this.mainMonster = mainMonster;
    this.isBoss = isBoss;
    this.possibleMonsterList = possibleMonsterList;
};

var Instance = function(chapter, monsterGroupList) {
    this.chapter = chapter;
    this.monsterGroupList = monsterGroupList;
};

var MONSTER_BY = '兵俑';
var MONSTER_CS = '赤舌';
var MONSTER_CSZN = '丑时之女';
var MONSTER_DLG = '灯笼鬼';
var MONSTER_DTG = '大天狗';
var MONSTER_DYXS = '独眼小僧';
var MONSTER_DMXG = '盗墓小鬼';
var MONSTER_EG = '饿鬼';
var MONSTER_FHH = '凤凰火';
var MONSTER_FQLXG = '风麒麟小怪';
var MONSTER_GH = '管狐';
var MONSTER_GN = '骨女';
var MONSTER_GNHY = '鬼女红叶';
var MONSTER_GSB = '鬼使白';
var MONSTER_GSH = '鬼使黑';
var MONSTER_HCZZ = '荒川之主';
var MONSTER_HDJ = '蝴蝶精';
var MONSTER_HFH = '黑凤凰';
var MONSTER_HFZ = '海坊主';
var MONSTER_HQLXG = '火麒麟小怪';
var MONSTER_HT = '河童';
var MONSTER_J = '觉';
var MONSTER_JMM = '九命猫';
var MONSTER_JSH = '寄生魂';
var MONSTER_JTTZ = '酒吞童子';
var MONSTER_KLS = '傀儡师';
var MONSTER_LM = '狸猫';
var MONSTER_LYJ = '鲤鱼精';
var MONSTER_MP = '孟婆';
var MONSTER_PG = '判官';
var MONSTER_QS = '犬神';
var MONSTER_QWCQ = '青蛙瓷器';
var MONSTER_SFG = '食发鬼';
var MONSTER_SMM = '食梦貘';
var MONSTER_ST = '山童';
var MONSTER_STU = '山兔';
var MONSTER_SW = '首无';
var MONSTER_SWH = '三尾狐';
var MONSTER_TB = '涂壁';
var MONSTER_TDXS = '提灯小僧';
var MONSTER_THY = '桃花妖';
var MONSTER_TN = '童男';
var MONSTER_TNV = '童女';
var MONSTER_TS = '铁鼠';
var MONSTER_TTGG = '跳跳哥哥';
var MONSTER_TTMM = '跳跳妹妹';
var MONSTER_TTQ = '跳跳犬';
var MONSTER_TXGC = '天邪鬼赤';
var MONSTER_TXGH = '天邪鬼黄';
var MONSTER_TXGL = '天邪鬼绿';
var MONSTER_TXGQ = '天邪鬼青';
var MONSTER_TZSY = '唐纸伞妖';
var MONSTER_WGS = '巫蛊师';
var MONSTER_WSZL = '武士之灵';
var MONSTER_XN = '雪女';
var MONSTER_YH = '妖狐';
var MONSTER_YHY = '樱花妖';
var MONSTER_YN = '雨女';
var MONSTER_YTG = '鸦天狗';
var MONSTER_ZFTZ = '座敷童子';
var MONSTER_ZS = '帚神';

var MONSTER_OPTIONS = [
    MONSTER_BY,
    MONSTER_CS,
    MONSTER_CSZN,
    MONSTER_DLG,
    MONSTER_DMXG,
    MONSTER_DTG,
    MONSTER_DYXS,
    MONSTER_EG,
    MONSTER_FHH,
    MONSTER_FQLXG,
    MONSTER_GH,
    MONSTER_GN,
    MONSTER_GNHY,
    MONSTER_GSB,
    MONSTER_GSH,
    MONSTER_HCZZ,
    MONSTER_HDJ,
    MONSTER_HFH,
    MONSTER_HFZ,
    MONSTER_HQLXG,
    MONSTER_HT,
    MONSTER_J,
    MONSTER_JMM,
    MONSTER_JSH,
    MONSTER_JTTZ,
    MONSTER_KLS,
    MONSTER_LM,
    MONSTER_LYJ,
    MONSTER_MP,
    MONSTER_PG,
    MONSTER_QS,
    MONSTER_QWCQ,
    MONSTER_SFG,
    MONSTER_SMM,
    MONSTER_ST,
    MONSTER_STU,
    MONSTER_SW,
    MONSTER_SWH,
    MONSTER_TB,
    MONSTER_TDXS,
    MONSTER_THY,
    MONSTER_TN,
    MONSTER_TNV,
    MONSTER_TS,
    MONSTER_TTGG,
    MONSTER_TTMM,
    MONSTER_TTQ,
    MONSTER_TXGC,
    MONSTER_TXGH,
    MONSTER_TXGL,
    MONSTER_TXGQ,
    MONSTER_TZSY,
    MONSTER_WGS,
    MONSTER_WSZL,
    MONSTER_XN,
    MONSTER_YH,
    MONSTER_YHY,
    MONSTER_YN,
    MONSTER_YTG,
    MONSTER_ZFTZ,
    MONSTER_ZS
];

var INSTANCE_DATA = [
    new Instance(
        1,
        [
            new MonsterGroup(MONSTER_TXGL, false, [
                [
                    [
                        new MonsterItem(MONSTER_TXGL, 1),
                        new MonsterItem(MONSTER_DLG, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TXGL, 1),
                        new MonsterItem(MONSTER_TDXS, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TDXS, false, [
                [
                    [
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_TXGL, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_DLG, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_JMM, true, [
                [
                    [
                        new MonsterItem(MONSTER_JMM, 3)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        2,
        [
            new MonsterGroup(MONSTER_ZS, false, [
                [
                    [
                        new MonsterItem(MONSTER_ZS, 1),
                        new MonsterItem(MONSTER_JSH, 1),
                        new MonsterItem(MONSTER_DMXG, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_DMXG, false, [
                [
                    [
                        new MonsterItem(MONSTER_DMXG, 1),
                        new MonsterItem(MONSTER_JSH, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_DMXG, 1),
                        new MonsterItem(MONSTER_DLG, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_JSH, false, [
                [
                    [
                        new MonsterItem(MONSTER_JSH, 1),
                        new MonsterItem(MONSTER_DLG, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_JSH, 1),
                        new MonsterItem(MONSTER_DMXG, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_ZFTZ, true, [
                [
                    [
                        new MonsterItem(MONSTER_ZFTZ, 1),
                        new MonsterItem(MONSTER_TXGQ, 1),
                        new MonsterItem(MONSTER_TXGL, 2)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        3,
        [
            new MonsterGroup(MONSTER_TXGH, false, [
                [
                    [
                        new MonsterItem(MONSTER_TXGH, 1),
                        new MonsterItem(MONSTER_TB, 1),
                        new MonsterItem(MONSTER_ZS, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TXGH, 1),
                        new MonsterItem(MONSTER_TNV, 3)
                    ]
                ]

            ]),
            new MonsterGroup(MONSTER_CS, false, [
                [
                    [
                        new MonsterItem(MONSTER_CS, 1),
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_DLG, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_YTG, 1)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_CS, 1),
                        new MonsterItem(MONSTER_TXGH, 1),
                        new MonsterItem(MONSTER_TNV, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_YTG, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_BY, false, [
                [
                    [
                        new MonsterItem(MONSTER_BY, 1),
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_TNV, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_BY, 1),
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_DLG, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_FHH, true, [
                [
                    [
                        new MonsterItem(MONSTER_FHH, 1),
                        new MonsterItem(MONSTER_JSH, 3)
                    ]
                ]
            ]),
        ]
    ),
    new Instance(
        4,
        [
            new MonsterGroup(MONSTER_ZS, false, [
                [
                    [
                        new MonsterItem(MONSTER_ZS, 1),
                        new MonsterItem(MONSTER_TB, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_ZS, 1),
                        new MonsterItem(MONSTER_TB, 1),
                        new MonsterItem(MONSTER_TZSY, 2)
                    ]
                ]

            ]),
            new MonsterGroup(MONSTER_TZSY, false, [
                [
                    [
                        new MonsterItem(MONSTER_TZSY, 1),
                        new MonsterItem(MONSTER_TXGC, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TZSY, 1),
                        new MonsterItem(MONSTER_TXGC, 1),
                        new MonsterItem(MONSTER_TB, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TXGC, false, [
                [
                    [
                        new MonsterItem(MONSTER_TXGC, 1),
                        new MonsterItem(MONSTER_TZSY, 1),
                        new MonsterItem(MONSTER_TB, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TXGC, 1),
                        new MonsterItem(MONSTER_TZSY, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_YN, true, [
                [
                    [
                        new MonsterItem(MONSTER_YN, 1),
                        new MonsterItem(MONSTER_QWCQ, 1),
                        new MonsterItem(MONSTER_ZS, 2)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        5,
        [
            new MonsterGroup(MONSTER_TB, false, [
                [
                    [
                        new MonsterItem(MONSTER_TB, 2),
                        new MonsterItem(MONSTER_TXGC, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TB, 1),
                        new MonsterItem(MONSTER_TXGC, 3)
                    ]
                ]

            ]),
            new MonsterGroup(MONSTER_ZS, false, [
                [
                    [
                        new MonsterItem(MONSTER_ZS, 1),
                        new MonsterItem(MONSTER_TXGC, 1),
                        new MonsterItem(MONSTER_TB, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_ZS, 1),
                        new MonsterItem(MONSTER_TXGC, 1),
                        new MonsterItem(MONSTER_TXGH, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_GH, false, [
                [
                    [
                        new MonsterItem(MONSTER_GH, 2),
                        new MonsterItem(MONSTER_TXGH, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_JSH, 1)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_GH, 1),
                        new MonsterItem(MONSTER_TXGL, 3)
                    ],
                    [
                        new MonsterItem(MONSTER_JSH, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_SFG, true, [
                [
                    [
                        new MonsterItem(MONSTER_SFG, 1),
                        new MonsterItem(MONSTER_DLG, 1),
                        new MonsterItem(MONSTER_TXGQ, 2)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        6,
        [
            new MonsterGroup(MONSTER_DLG, false, [
                [
                    [
                        new MonsterItem(MONSTER_DLG, 1),
                        new MonsterItem(MONSTER_ZS, 3)
                    ]
                ]

            ]),
            new MonsterGroup(MONSTER_TXGQ, false, [
                [
                    [
                        new MonsterItem(MONSTER_TXGQ, 1),
                        new MonsterItem(MONSTER_TXGL, 3)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_HDJ, false, [
                [
                    [
                        new MonsterItem(MONSTER_HDJ, 1),
                        new MonsterItem(MONSTER_TB, 1),
                        new MonsterItem(MONSTER_TXGC, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_SWH, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_WGS, true, [
                [
                    [
                        new MonsterItem(MONSTER_WGS, 1),
                        new MonsterItem(MONSTER_TXGL, 3)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        7,
        [
            new MonsterGroup(MONSTER_LYJ, false, [
                [
                    [
                        new MonsterItem(MONSTER_LYJ, 3),
                        new MonsterItem(MONSTER_ZS, 1)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_LYJ, 1),
                        new MonsterItem(MONSTER_ZS, 3)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_HT, false, [
                [
                    [
                        new MonsterItem(MONSTER_HT, 1),
                        new MonsterItem(MONSTER_LYJ, 1),
                        new MonsterItem(MONSTER_TB, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_HT, 1),
                        new MonsterItem(MONSTER_DLG, 1),
                        new MonsterItem(MONSTER_TTQ, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TDXS, false, [
                [
                    [
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_TTQ, 3)
                    ],
                    [
                        new MonsterItem(MONSTER_GH, 1)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_TTQ, 3)
                    ],
                    [
                        new MonsterItem(MONSTER_GH, 1)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_LYJ, 2),
                        new MonsterItem(MONSTER_TTQ, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_YH, true, [
                [
                    [
                        new MonsterItem(MONSTER_YH, 1),
                        new MonsterItem(MONSTER_TB, 1),
                        new MonsterItem(MONSTER_ZFTZ, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_YH, 1),
                        new MonsterItem(MONSTER_JSH, 1),
                        new MonsterItem(MONSTER_TXGC, 2)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        8,
        [
            new MonsterGroup(MONSTER_TXGL, false, [
                [
                    [
                        new MonsterItem(MONSTER_TXGL, 1),
                        new MonsterItem(MONSTER_TXGQ, 1),
                        new MonsterItem(MONSTER_TXGH, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_YHY, false, [
                [
                    [
                        new MonsterItem(MONSTER_YHY, 1),
                        new MonsterItem(MONSTER_ZS, 1),
                        new MonsterItem(MONSTER_TB, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_XN, 1)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_YHY, 1),
                        new MonsterItem(MONSTER_TB, 3)
                    ],
                    [
                        new MonsterItem(MONSTER_XN, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TZSY, false, [
                [
                    [
                        new MonsterItem(MONSTER_TZSY, 1),
                        new MonsterItem(MONSTER_ZS, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TZSY, 1),
                        new MonsterItem(MONSTER_ST, 1),
                        new MonsterItem(MONSTER_ZS, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_THY, true, [
                [
                    [
                        new MonsterItem(MONSTER_YHY, 1),
                        new MonsterItem(MONSTER_TXGQ, 1),
                        new MonsterItem(MONSTER_TDXS, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_THY, 1),
                        new MonsterItem(MONSTER_ZS, 1),
                        new MonsterItem(MONSTER_HDJ, 2)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        9,
        [
            new MonsterGroup(MONSTER_TDXS, false, [
                [
                    [
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_DLG, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_DLG, 1),
                        new MonsterItem(MONSTER_TS, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TS, false, [
                [
                    [
                        new MonsterItem(MONSTER_TS, 1),
                        new MonsterItem(MONSTER_ZS, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TS, 2),
                        new MonsterItem(MONSTER_ZS, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_STU, false, [
                [
                    [
                        new MonsterItem(MONSTER_STU, 4)
                    ],
                    [
                        new MonsterItem(MONSTER_YTG, 1)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_STU, 3),
                        new MonsterItem(MONSTER_TS, 1)
                    ],
                    [
                        new MonsterItem(MONSTER_YTG, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_MP, true, [
                [
                    [
                        new MonsterItem(MONSTER_MP, 1),
                        new MonsterItem(MONSTER_EG, 3)
                    ],
                    [
                        new MonsterItem(MONSTER_MP, 1),
                        new MonsterItem(MONSTER_DLG, 1),
                        new MonsterItem(MONSTER_YTG, 2)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        10,
        [
            new MonsterGroup(MONSTER_CSZN, false, [
                [
                    [
                        new MonsterItem(MONSTER_CSZN, 1),
                        new MonsterItem(MONSTER_KLS, 1),
                        new MonsterItem(MONSTER_TXGQ, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_J, false, [
                [
                    [
                        new MonsterItem(MONSTER_J, 1),
                        new MonsterItem(MONSTER_LM, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_J, 1),
                        new MonsterItem(MONSTER_CS, 1),
                        new MonsterItem(MONSTER_ZFTZ, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_QS, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_KLS, false, [
                [
                    [
                        new MonsterItem(MONSTER_KLS, 1),
                        new MonsterItem(MONSTER_J, 1),
                        new MonsterItem(MONSTER_LM, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_KLS, 1),
                        new MonsterItem(MONSTER_J, 1),
                        new MonsterItem(MONSTER_ZFTZ, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_QS, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_JTTZ, true, [
                [
                    [
                        new MonsterItem(MONSTER_JTTZ, 1),
                        new MonsterItem(MONSTER_TTGG, 1),
                        new MonsterItem(MONSTER_SFG, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_JTTZ, 1),
                        new MonsterItem(MONSTER_BY, 1),
                        new MonsterItem(MONSTER_GN, 2)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        11,
        [
            new MonsterGroup(MONSTER_WSZL, false, [
                [
                    [
                        new MonsterItem(MONSTER_WSZL, 1),
                        new MonsterItem(MONSTER_JSH, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_WSZL, 1),
                        new MonsterItem(MONSTER_DYXS, 3)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_DYXS, false, [
                [
                    [
                        new MonsterItem(MONSTER_DYXS, 1),
                        new MonsterItem(MONSTER_TB, 1),
                        new MonsterItem(MONSTER_TXGC, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_DYXS, 1)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_DYXS, 1),
                        new MonsterItem(MONSTER_GH, 1),
                        new MonsterItem(MONSTER_TXGC, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_DYXS, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_EG, false, [
                [
                    [
                        new MonsterItem(MONSTER_EG, 1),
                        new MonsterItem(MONSTER_TB, 1),
                        new MonsterItem(MONSTER_GH, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_EG, 3),
                        new MonsterItem(MONSTER_GH, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_GNHY, true, [
                [
                    [
                        new MonsterItem(MONSTER_GNHY, 1),
                        new MonsterItem(MONSTER_TNV, 1),
                        new MonsterItem(MONSTER_TXGQ, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_GNHY, 1),
                        new MonsterItem(MONSTER_GN, 1),
                        new MonsterItem(MONSTER_J, 2)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        12,
        [
            new MonsterGroup(MONSTER_HFZ, false, [
                [
                    [
                        new MonsterItem(MONSTER_HFZ, 1),
                        new MonsterItem(MONSTER_TB, 1),
                        new MonsterItem(MONSTER_YTG, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_HFZ, 1),
                        new MonsterItem(MONSTER_TB, 2),
                        new MonsterItem(MONSTER_ZS, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TN, false, [
                [
                    [
                        new MonsterItem(MONSTER_TN, 1),
                        new MonsterItem(MONSTER_TXGH, 1),
                        new MonsterItem(MONSTER_YTG, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TN, 1),
                        new MonsterItem(MONSTER_TNV, 1),
                        new MonsterItem(MONSTER_YTG, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TNV, false, [
                [
                    [
                        new MonsterItem(MONSTER_TNV, 1),
                        new MonsterItem(MONSTER_DMXG, 1),
                        new MonsterItem(MONSTER_TDXS, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_XN, 1)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TNV, 3),
                        new MonsterItem(MONSTER_DMXG, 1)
                    ],
                    [
                        new MonsterItem(MONSTER_XN, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_XN, true, [
                [
                    [
                        new MonsterItem(MONSTER_XN, 1),
                        new MonsterItem(MONSTER_JSH, 1),
                        new MonsterItem(MONSTER_WSZL, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_XN, 1),
                        new MonsterItem(MONSTER_TTMM, 1),
                        new MonsterItem(MONSTER_TTGG, 2)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        13,
        [
            new MonsterGroup(MONSTER_EG, false, [
                [
                    [
                        new MonsterItem(MONSTER_EG, 1),
                        new MonsterItem(MONSTER_TXGC, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_EG, 1),
                        new MonsterItem(MONSTER_TXGC, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_EG, 1),
                        new MonsterItem(MONSTER_TXGC, 3)
                    ],
                    [
                        new MonsterItem(MONSTER_SW, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TZSY, false, [
                [
                    [
                        new MonsterItem(MONSTER_TZSY, 1),
                        new MonsterItem(MONSTER_TXGC, 1),
                        new MonsterItem(MONSTER_TXGL, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TZSY, 1),
                        new MonsterItem(MONSTER_TXGC, 1),
                        new MonsterItem(MONSTER_TXGL, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TZSY, 1),
                        new MonsterItem(MONSTER_TXGC, 1),
                        new MonsterItem(MONSTER_TXGL, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_SW, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_SW, true, [
                [
                    [
                        new MonsterItem(MONSTER_SW, 1),
                        new MonsterItem(MONSTER_DLG, 1),
                        new MonsterItem(MONSTER_GN, 1),
                        new MonsterItem(MONSTER_STU, 1)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        14,
        [
            new MonsterGroup(MONSTER_ZS, false, [
                [
                    [
                        new MonsterItem(MONSTER_ZS, 1),
                        new MonsterItem(MONSTER_TXGC, 3)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TB, false, [
                [
                    [
                        new MonsterItem(MONSTER_TB, 6)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_SMM, true, [
                [
                    [
                        new MonsterItem(MONSTER_SMM, 1),
                        new MonsterItem(MONSTER_TXGC, 3)
                    ],
                    [
                        new MonsterItem(MONSTER_SMM, 4)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        15,
        [
            new MonsterGroup(MONSTER_TXGL, false, [
                [
                    [
                        new MonsterItem(MONSTER_TXGL, 1),
                        new MonsterItem(MONSTER_CS, 1),
                        new MonsterItem(MONSTER_TXGC, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TDXS, false, [
                [
                    [
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_CS, 1),
                        new MonsterItem(MONSTER_JMM, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_CS, 1),
                        new MonsterItem(MONSTER_JMM, 2)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_TDXS, 1),
                        new MonsterItem(MONSTER_CS, 1),
                        new MonsterItem(MONSTER_JMM, 2)
                    ],
                    [
                        new MonsterItem(MONSTER_DTG, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_TTMM, true, [
                [
                    [
                        new MonsterItem(MONSTER_TTMM, 1),
                        new MonsterItem(MONSTER_JMM, 3)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        16,
        [
            new MonsterGroup(MONSTER_EG, false, [
                [
                    [
                        new MonsterItem(MONSTER_EG, 1),
                        new MonsterItem(MONSTER_STU, 1),
                        new MonsterItem(MONSTER_ST, 2)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_CS, false, [
                [
                    [
                        new MonsterItem(MONSTER_CS, 1),
                        new MonsterItem(MONSTER_JSH, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_CS, 1),
                        new MonsterItem(MONSTER_JSH, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_CS, 1),
                        new MonsterItem(MONSTER_JSH, 3)
                    ],
                    [
                        new MonsterItem(MONSTER_CS, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_PG, true, [
                [
                    [
                        new MonsterItem(MONSTER_PG, 1),
                        new MonsterItem(MONSTER_GSB, 1),
                        new MonsterItem(MONSTER_GSH, 1)
                    ]
                ]
            ])
        ]
    ),
    new Instance(
        17,
        [
            new MonsterGroup(MONSTER_YTG, false, [
                [
                    [
                        new MonsterItem(MONSTER_YTG, 1),
                        new MonsterItem(MONSTER_FQLXG, 3)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_LM, false, [
                [
                    [
                        new MonsterItem(MONSTER_LM, 1),
                        new MonsterItem(MONSTER_HQLXG, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_LM, 1),
                        new MonsterItem(MONSTER_HQLXG, 3)
                    ]
                ],
                [
                    [
                        new MonsterItem(MONSTER_LM, 1),
                        new MonsterItem(MONSTER_HQLXG, 3)
                    ],
                    [
                        new MonsterItem(MONSTER_HFH, 1)
                    ]
                ]
            ]),
            new MonsterGroup(MONSTER_HCZZ, true, [
                [
                    [
                        new MonsterItem(MONSTER_HCZZ, 1),
                        new MonsterItem(MONSTER_DLG, 1),
                        new MonsterItem(MONSTER_GN, 1),
                        new MonsterItem(MONSTER_STU, 1)
                    ]
                ]
            ])
        ]
    )
];

var YH_DATA = [

];
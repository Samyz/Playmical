let machine = {
    current_State: {
        name: 'start',
        key: 0
    },
    prev_State: {
        name: 'none',
        key: -1
    },
    substanceInput: [
        {
            name: 'start',
        },
        {
            name: 'start',
        }
    ],
    input_String: [],
    StateMetrix: {
        start: {
            name: 'start',
            Hydrogen: 'H',
            Carbon: 'C',
            Nitrogen: 'N',
            Oxygen: 'O',
            Confirm: 'start',
            Reset: 'start',
            key: 0
        },
        H: {
            name: 'H',
            Hydrogen: 'HH',
            Carbon: 'CH',
            Nitrogen: 'NH',
            Oxygen: 'OH',
            Confirm: 'H',
            Reset: 'start',
            key: 1,
            fullname: "Hydrogen (H)",
            imgPath: "./Pic/H.png"
        },
        C: {
            name: 'C',
            Hydrogen: 'CH',
            Carbon: 'CC',
            Nitrogen: 'CN',
            Oxygen: 'CO',
            Confirm: 'C',
            Reset: 'start',
            key: 2,
            fullname: "Carbon (C)",
            imgPath: "./Pic/C.png"
        },
        N: {
            name: 'N',
            Hydrogen: 'NH',
            Carbon: 'CN',
            Nitrogen: 'NN',
            Oxygen: 'NO',
            Confirm: 'N',
            Reset: 'start',
            key: 3,
            fullname: "Nitrogen (N)",
            imgPath: "./Pic/N.png"
        },
        O: {
            name: 'O',
            Hydrogen: 'OH',
            Carbon: 'CO',
            Nitrogen: 'NO',
            Oxygen: 'OO',
            Confirm: 'O',
            Reset: 'start',
            key: 4,
            fullname: "Oxygen (O)",
            imgPath: "./Pic/O.png"
        },
        HH: {
            name: 'HH',
            Hydrogen: 'HH',
            Carbon: 'HH',
            Nitrogen: 'HH',
            Oxygen: 'HH',
            Confirm: 'final',
            Reset: 'start',
            key: 5,
            fullname: "Hydrogen (H2)",
            imgPath: "./Pic/result/H2/H2.jpg",
            description: "เป็นก๊าซที่เบากว่าอากาศ ไม่มีสี ไม่มีกลิ่น และลุกติดไฟได้ง่าย ส่วนใหญ่จะพบเจอไฮโดรเจนผสมกับธาตุอื่นๆ",
            advantages: [
                {
                    description: "ไฮโดรเจนเหลวใช้เป็นเชื้อเพลิงของจรวดและเป็นส่วนผสมสำคัญในการสร้างปฏิกิริยานิวเคลียร์",
                    imgPath: "./Pic/result/H2/H2-pros.jpg"
                },
                {
                    description: "เป็นแหล่งพลังงานทางเลือก",
                    imgPath: "./Pic/result/H2/H2-pros2.jpg"
                }
            ],
            disadvantages: [
                {
                    description: "เมื่อกระทบกับความร้อนหรือประกายไฟ ทำให้เกิดการระเบิดได้",
                    imgPath: "./Pic/result/H2/H2-cons.jpg"
                },
                {
                    description: "ถ้าได้รับก๊าซไฮโดรเจนเข้าไปในปริมาณมาก จะทำให้เกิดภาวะขาดออกซิเจนได้",
                    imgPath: "./Pic/result/H2/H2-cons2.jpg"
                }
            ]
        },
        CH: {
            name: 'CH',
            Hydrogen: 'CH',
            Carbon: 'CH',
            Nitrogen: 'CH',
            Oxygen: 'CH',
            Confirm: 'final',
            Reset: 'start',
            key: 6,
            fullname: "Methane (CH)",
            imgPath: "./Pic/result/CH4/CH4.jpg",
            description: "ก๊าซไวไฟที่ไม่มีสี ไม่มีกลิ่น เบากว่าอากาศ ทำให้ลอยตัวสะสมอยู่ด้านบน และเป็นก๊าซเรือนกระจก ส่วนใหญ่พบตามบริเวณที่มีน้ำขัง เช่น นาข้าว ระบบบำบัดน้ำเสีย",
            advantages: [
                {
                    description: "ใช้เป็นก๊าซหุงต้มเพื่อให้ความร้อนในการประกอบอาหาร",
                    imgPath: "./Pic/result/CH4/CH4-pros1.jpg"
                },
                {
                    description: "ใช้เป็นก๊าซเชื้อเพลิงสำหรับเครื่องยนต์",
                    imgPath: "./Pic/result/CH4/CH4-pros2.jpg"
                }
            ],
            disadvantages: [
                {
                    description: "หากสูดดมเข้าไปอาจทำให้เกิดอาการอ่อนเพลีย ปวดศีรษะ ไปจนถึงหมดสติได้",
                    imgPath: "./Pic/result/CH4/CH4-cons1.jpg"
                },
                {
                    description: "ก่อให้เกิดปัญหาโลกร้อนหรือภาวะเรือนกระจก",
                    imgPath: "./Pic/result/CH4/CH4-cons2.jpg"
                }
            ]
        },
        NH: {
            name: 'NH',
            Hydrogen: 'NH',
            Carbon: 'NH',
            Nitrogen: 'NH',
            Oxygen: 'NH',
            Confirm: 'final',
            Reset: 'start',
            key: 7,
            fullname: "Ammonia (NH₃)",
            imgPath: "./Pic/result/NH3/NH3.jpg",
            description: "เป็นก๊าซไม่มีสี มีกลิ่นฉุนที่เป็นลักษณะเฉพาะ ในการจัดเก็บจะเก็บอยู่ในรูปแบบของก๊าซเหลว ภายใต้แรงดัน",
            advantages: [
                {
                    description: "ใช้สำหรับสูดดม ช่วยอาการเป็นลม หน้ามืด วิงเวียนศีรษะ",
                    imgPath: "./Pic/result/NH3/NH3-pros1.jpg"
                },
                {
                    description: "ใช้ในอุตสาหกรรมย้อมผ้า ยา เส้นใยสังเคราะห์ พลาสติก ปุ๋ย วัตถุระเบิด",
                    imgPath: "./Pic/result/NH3/NH3-pros2.jpg"
                }
            ],
            disadvantages: [
                {
                    description: "ถ้าสัมผัสทำให้เกิดการระคายเคือง หากสูดดมมากจะออกฤทธิ์กระตุ้นหัวใจ เสี่ยงต่อหัวใจวายได้ง่าย",
                    imgPath: "./Pic/result/NH3/NH3-cons1.jpg"
                },
                {
                    description: "หากลงสู่แหล่งน้ำจะทำให้ค่าความเป็นกรด-ด่าง (pH) ของน้ำสูงขึ้น ปริมาณออกซิเจนที่ละลายในน้ำ (DO) ลดลง ห่วงโซ่อาหารในระบบนิเวศเปลี่ยนแปลง",
                    imgPath: "./Pic/result/NH3/NH3-cons2.jpg"
                }
            ]
        },
        OH: {
            name: 'OH',
            Hydrogen: 'OH',
            Carbon: 'OH',
            Nitrogen: 'OH',
            Oxygen: 'OH',
            Confirm: 'final',
            Reset: 'start',
            key: 8,
            fullname: "Hydroxide (OH-)",
            imgPath: "./Pic/result/OH/OH.jpg",
            description: "เป็นไอออนประจุลบอะตอมคู่ มีประจุไฟฟ้าลบ และเป็นองค์ประกอบตามธรรมชาติของน้ำ สามารเกิดเป็นสารประกอบไฮดรอกไซด์กับธาตุหมู่ 1 และหมู่ 2 ได้เป็นสารประกอบของแข็ง",
            advantages: [
                {
                    description: "ใช้ผลิตโซดาไฟ",
                    imgPath: "./Pic/result/OH/OH-pros.jpg"
                },
                {
                    description: "ทำให้สารละลายมีสมบัติเป็นเบส",
                    imgPath: "./Pic/result/OH/OH-pros2.jpg"
                }
            ],
            disadvantages: [
                {
                    description: "ไฮดรอกไซด์ไอออนทำปฏิกิริยาอย่างรวดเร็วกับคาร์บอนไดออกไซด์ในบรรยากาศ ซึ่งมีสมบัติคล้ายกับกรด เพื่อสร้างไอออนไบคาร์บอเนต",
                    imgPath: "./Pic/result/OH/OH-cons1.jpg"
                },
                {
                    description: "สารละลายที่ประกอบด้วยไฮดรอกไซด์จะทำอันตรายต่อแก้ว จึงจัดเก็บไว้ในภาชนะพลาสติกที่ปิดมิดชิด ไม่ให้อากาศเข้า",
                    imgPath: "./Pic/result/OH/OH-cons2.jpg"
                }
            ]
        },
        CC: {
            name: 'CC',
            Hydrogen: 'CC',
            Carbon: 'CC',
            Nitrogen: 'CC',
            Oxygen: 'CC',
            Confirm: 'final',
            Reset: 'start',
            key: 9,
            fullname: "Diatomic carbon (C2)",
            imgPath: "./Pic/result/C2/C2.jpg",
            description: "เป็นก๊าซอนินทรีย์สีเขียว ไม่เสถียรทางจลนศาสตร์ที่อุณหภูมิและความดันโดยรอบ ซึ่งจะถูกกำจัดออกโดยผ่านกระบวนการสลายตัวอัตโนมัติ",
            advantages: [
                {
                    description: "C2 เป็นส่วนประกอบของไอคาร์บอน กระดาษแผ่นหนึ่งมีไอคาร์บอนประมาณ 28% ไดอะตอมมิค",
                    imgPath: "./Pic/result/C2/C2-pros1.jpg"
                },
                {
                    description: "ทำให้สารละลายมีสมบัติเป็นเบส",
                    imgPath: "./Pic/result/OH-/OH-pros2.jpg"
                }
            ],
            disadvantages: []
        },
        CN: {
            name: 'CN',
            Hydrogen: 'CN',
            Carbon: 'CN',
            Nitrogen: 'CN',
            Oxygen: 'CN',
            Confirm: 'final',
            Reset: 'start',
            key: 10,
            fullname: "Cyanide (CN)",
            description: "เมื่อเข้าสู่ร่างกายอาจเข้าไปยับยั้งการทำงานของเซลล์จนอาจเป็นอันตรายถึงชีวิต มักเป็นของแข็งสีขาวและสารประกอบโลหะหนักพบได้มากในพืช",
            imgPath: "./Pic/result/CN/CN.jpg",
            advantages: [
                {
                    description: "นำมาใช้ในอุตสาหกรรมการผลิตกระดาษ สิ่งทอ และพลาสติก",
                    imgPath: "./Pic/result/CN/CN-pros1.jpg"
                },
                {
                    description: "ใช้ในอุตสาหกรรมการทำเหมืองแร่ทองคำ การชุบโลหะและเครื่องประดับ",
                    imgPath: "./Pic/result/CN/CN-pros2.jpg"
                }
            ],
            disadvantages: [
                {
                    description: "ภาวะเป็นพิษจากไซยาไนด์แบบเฉียบพลัน มักเกิดขึ้นในทันที มีอาการหายใจติดขัด เกิดภาวะหัวใจหยุดเต้น ชักและหมดสติ",
                    imgPath: "./Pic/result/CN/CN-cons1.jpg"
                },

                {
                    description: "ภาวะเป็นพิษจากไซยาไนด์แบบเรื้อรัง  ทำให้เกิดอาการปวดศีรษะ คลื่นไส้ อาเจียน เกิดผื่นแดง",
                    imgPath: "./Pic/result/CN/CN-cons2.jpg"
                }
            ]
        },
        CO: {
            name: 'CO',
            Hydrogen: 'CO',
            Carbon: 'CO',
            Nitrogen: 'CO',
            Oxygen: 'CO',
            Confirm: 'final',
            Reset: 'start',
            key: 11,
            fullname: "Carbon Monoxide (CO)",
            imgPath: "./Pic/result/CO/CO.jpg",
            description: "เป็นก๊าซพิษที่ก่อให้เกิดมลภาวะทางอากาศหรือในชั้นบรรยากาศ เป็นอันตรายต่อสมองและระบบประสาทถ้าได้รับในปริมาณมาก ๆ จะทำให้เสียชีวิตได้ ไม่มีสี ไม่มีกลิ่น ไม่มีรส",
            advantages: [
                {
                    description: "เป็นสารตั้งต้นในการผลิตผลิตภัณฑ์รถ, บุหรี่",
                    imgPath: "./Pic/result/CO/CO-pros.jpg"
                },
                {
                    description: "ใช้ยืดอายุการเก็บรักษาเนื้อสัตว์ ทำให้เนื้อสัตว์สีแดงสดนานและไม่มีกลิ่นหืน",
                    imgPath: "./Pic/result/CO/CO-pros2.jpg"
                }
            ],
            disadvantages: [
                {
                    description: "เมื่อเข้าสู่ร่างกายจะทำให้การลำเลียงออกซิเจนไปยังเซลล์ต่างๆของร่างกายลดลง ทำให้ร่างกายอ่อนเพลีย",
                    imgPath: "./Pic/result/CO/CO-cons1.jpg"
                },

                {
                    description: "เมื่อเข้าสู่ร่างกายส่งผลให้สมองขาดออกซิเจนได้",
                    imgPath: "./Pic/result/CO/CO-cons2.jpeg"
                }
            ]
        },
        NN: {
            name: 'NN',
            Hydrogen: 'NN',
            Carbon: 'NN',
            Nitrogen: 'NN',
            Oxygen: 'NN',
            Confirm: 'final',
            Reset: 'start',
            key: 12,
            fullname: "Liquid Nitrogen (N2)",
            imgPath: "./Pic/result/N2/N2.jpg",
            description: "ไนโตรเจนที่อยู่ในสภาวะของเหลวที่เย็นจัด เป็นก๊าซเฉื่อย ไม่ไวต่อปฏิกิริยาเคมีหรือติดไฟง่าย ไม่มีสี และไม่มีกลิ่น",
            advantages: [
                {
                    description: "นำมาใช้ประโยชน์ในด้านการทำความเย็นแช่แข็งอาหาร การขึ้นรูปพลาสติก ยาง และอุตสาหกรรมอื่นๆ",
                    imgPath: "./Pic/result/N2/N2-pros.jpg"
                },
                {
                    description: "ใช้สำหรับแช่รักษาตัวอย่างชีวภาพ เช่น ตัวอย่างน้ำเชื้อโค กระบือ สุกร",
                    imgPath: "./Pic/result/N2/N2-pros2.jpg"
                }
            ],
            disadvantages: [
                {
                    description: "ไนโตรเจนเหลวมีอุณหภูมิที่เย็นจัดมาก หากเผลอไปสัมผัสอาจเกิดรอยไหม้",
                    imgPath: "./Pic/result/N2/N2-cons1.jpg"
                },

                {
                    description: "ถ้าสูดดมเข้าไป ทำให้เกิดอาการขาดออกซิเจนได้ เนื่องจากช่วงที่ระเหยอย่างรวดเร็วจะเข้าไปแทนที่ออกซิเจน",
                    imgPath: "./Pic/result/N2/N2-cons2.jpg"
                }
            ]
        },
        NO: {
            name: 'NO',
            Hydrogen: 'NO',
            Carbon: 'NO',
            Nitrogen: 'NO',
            Oxygen: 'NO',
            Confirm: 'final',
            Reset: 'start',
            key: 13,
            fullname: "Nitric Oxide (NO)",
            imgPath: "./Pic/result/NO/NO.jpg",
            description: "เป็นก๊าซเฉื่อยมีคุณสมบัติเป็นยาสลบ เป็นก๊าซที่ไม่มีสีและไม่มีกลิ่น",
            advantages: [
                {
                    description: "ช่วยป้องกันโรคหลอดเลือดหัวใจ มีคุณสมบัติช่วยลดความดันโลหิต เพิ่มการไหลเวียนโลหิตไปอวัยวะต่างๆ",
                    imgPath: "./Pic/result/NO/NO-pros1.jpg"
                },
                {
                    description: "ลดโอกาสการเกิดลิ่มเลือด",
                    imgPath: "./Pic/result/NO/NO-pros2.jpg"
                }
            ],
            disadvantages: [
                {
                    description: "ปฏิกิริยากับสารตัวอื่นที่อยู่ในชั้นบรรยากาศของโลก หากตกลงสู่พื้นดิน จะทำให้วัตถุที่สัมผัสกัดกร่อน",
                    imgPath: "./Pic/result/NO/NO-cons1.jpg"
                },

                {
                    description: "บดบังหรือขัดขวางการเดินทางของแสงอาทิตย์ ส่งผลให้ทัศนวิสัยการมองเห็นสั้นลง",
                    imgPath: "./Pic/result/NO/NO-cons2.jpg"
                }
            ]
        },
        OO: {
            name: 'OO',
            Hydrogen: 'OO',
            Carbon: 'OO',
            Nitrogen: 'OO',
            Oxygen: 'OO',
            Confirm: 'final',
            Reset: 'start',
            key: 14,
            fullname: "Oxygen (O2)",
            imgPath: "./Pic/result/O2/O2.jpg",
            description: "เป็นก๊าซที่ไม่มีสี ไม่มีกลิ่น ไม่ติดไฟแต่ช่วยทำให้เกิดและเร่งการเผาไหม้ ถูกใช้งานอย่างแพร่หลายในการเชื่อมก๊าซ การเผาตัด การทำปฏิกิริยาออกซิเดชั่น และใช้ในทางการแพทย์",
            advantages: [
                {
                    description: "เป็นก๊าซที่สำคัญต่อการดำรงชีวิตของทั้งพืช สัตว์ และมนุษย์",
                    imgPath: "./Pic/result/O2/O2-pros1.jpg"
                },
                {
                    description: "ใช้ออกซิเจนในการเชื่อมและตัด ใช้ในการบำบัดน้ำเสียที่ออกจากโรงงาน",
                    imgPath: "./Pic/result/O2/O2-pros2.jpg"
                }
            ],
            disadvantages: [
                {
                    description: "อันตรายจากการลุกไหม้หรือระเบิด ถ้าหากโดนก๊าซหรือสิ่งกระตุ้นเข้ามาช่วยเสริม ก๊าซออกซิเจนก็สามารถลุกไหม้ได้เช่นกัน",
                    imgPath: "./Pic/result/O2/O2-cons1.jpg"
                },

                {
                    description: "อันตรายจากความเย็นก๊าซออกซิเจนเหลวมีจุดเดือดต่ำถึง -183 cc หากสัมผัสกับร่างกายหรืออวัยวะ จะมีลักษณะคล้ายถูกไฟ หรือโดนน้ำร้อนลวก",
                    imgPath: "./Pic/result/O2/O2-cons2.jpg"
                }
            ]
        },
        final: {
            name: 'final',
            Hydrogen: 'trap',
            Carbon: 'trap',
            Nitrogen: 'trap',
            Oxygen: 'trap',
            Confirm: 'trap',
            Reset: 'trap',
            key: 15,
            fullname: ""
        },
        trap: {
            name: 'trap',
            Hydrogen: 'trap',
            Carbon: 'trap',
            Nitrogen: 'trap',
            Oxygen: 'trap',
            Confirm: 'trap',
            Reset: 'trap',
            key: 16,
            fullname: ""
        },

    },
    getNext: function (target) {
        let next = this.StateMetrix[this.current_State.name][target]
        return { name: next, key: this.StateMetrix[next].key }
    },
    setCurrentState: function (set) {
        this.current_State = set
    },
    Restart: function () {
        this.current_State = {
            name: 'start',
            key: 0
        };
        this.prev_State = {
            name: 'none',
            key: -1
        };
    },
    getNameByFullName : function(fullname){
        return 
    },
    getFullNameByName: function (name) {
        return this.StateMetrix[name].fullname;
    },
    getPathByName: function (name) {
        return this.StateMetrix[name].imgPath;
    },
    getDescriptionByname: function (name) {
        return this.StateMetrix[name].description;
    },
    getAdvantagesByName: function (name) {
        return this.StateMetrix[name].advantages;
    },
    getDisAdvantagesByName: function (name) {
        return this.StateMetrix[name].disadvantages;
    }
}
var nodeDataArray = [
  {
    key: -1,
    loc: "0 -100",
  },
  {
    key: 0,
    loc: "0 0",
    isHighlighted: false,
    name: "start",
  },
  {
    key: 1,
    loc: "-225 150",
    isHighlighted: false,
    name: "H",
  },
  {
    key: 2,
    loc: "-75 150",
    isHighlighted: false,
    name: "C",
  },
  {
    key: 3,
    loc: "75 150",
    isHighlighted: false,
    name: "N",
  },
  {
    key: 4,
    loc: "225 150",
    isHighlighted: false,
    name: "O",
  },
  {
    key: 5,
    loc: "-540 300",
    isHighlighted: false,
    name: "HH",
  },
  {
    key: 6,
    loc: "-420 300",
    isHighlighted: false,
    name: "CH",
  },
  {
    key: 7,
    loc: "-300 300",
    isHighlighted: false,
    name: "NH",
  },
  {
    key: 8,
    loc: "-180 300",
    isHighlighted: false,
    name: "OH",
  },
  {
    key: 9,
    loc: "-60 300",
    isHighlighted: false,
    name: "CC",
  },
  {
    key: 10,
    loc: "60 300",
    isHighlighted: false,
    name: "CN",
  },
  {
    key: 11,
    loc: "180 300",
    isHighlighted: false,
    name: "CO",
  },
  {
    key: 12,
    loc: "300 300",
    isHighlighted: false,
    name: "NN",
  },
  {
    key: 13,
    loc: "420 300",
    isHighlighted: false,
    name: "NO",
  },
  {
    key: 14,
    loc: "540 300",
    isHighlighted: false,
    name: "OO",
  },
  {
    key: 15,
    loc: "0 450",
    isHighlighted: false,
    name: "final",
  },
  {
    key: 16,
    loc: "225 450",
    isHighlighted: false,
    name: "trap",
  },
];

var linkDataArray = [
  { points: [27.5, -50, 27.5, 0] },
  {
    points: [55, 477.5, 225, 477.5],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,Carbon,Nitrogen,\nOxygen,Confirm,Reset",
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  // ====================================================== //
  // ===================== From Start ===================== //
  // ====================================================== //
  {
    from: 0,
    to: 1,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Hydrogen",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 0,
    to: 2,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Carbon",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 0,
    to: 3,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Nitrogen",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 0,
    to: 4,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Oxygen",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  // ====================================================== //
  // =================== to second state ================== //
  // ====================================================== //

  //H

  {
    //H->HH
    from: 1,
    to: 5,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Hydrogen",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    //H->CH
    from: 1,
    to: 6,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Carbon",
    segmentIndex: 4,
    segmentFraction: 0.4,
  },
  {
    //H->NH
    from: 1,
    to: 7,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Nitrogen",
    segmentIndex: 4,
    segmentFraction: 0.4,
  },
  {
    //H->OH
    from: 1,
    to: 8,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Oxygen",
    segmentIndex: 4,
    segmentFraction: 0.4,
  },

  //C

  {
    //C->CH
    from: 2,
    to: 6,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Hydrogen",
    segmentIndex: 4,
    segmentFraction: 0.0,
  },
  {
    //C->CC
    from: 2,
    to: 9,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Carbon",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    //C->CN
    from: 2,
    to: 10,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Nitrogen",
    segmentIndex: 4,
    segmentFraction: 0.4,
  },
  {
    //C->CO
    from: 2,
    to: 11,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Oxygen",
    segmentIndex: 4,
    segmentFraction: 0.4,
  },

  //N

  {
    //N->NH
    from: 3,
    to: 7,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Hydrogen",
    segmentIndex: 4,
    segmentFraction: 0.0,
  },
  {
    //N->CN
    from: 3,
    to: 10,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Carbon",
    segmentIndex: 4,
    segmentFraction: 0.0,
  },
  {
    //N->NN
    from: 3,
    to: 12,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Nitrogen",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    //N->NO
    from: 3,
    to: 13,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Oxygen",
    segmentIndex: 4,
    segmentFraction: 0.4,
  },

  //O

  {
    //O->OH
    from: 4,
    to: 8,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Hydrogen",
    segmentIndex: 4,
    segmentFraction: 0.0,
  },
  {
    //O->CO
    from: 4,
    to: 11,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Carbon",
    segmentIndex: 4,
    segmentFraction: 0.0,
  },
  {
    //O->NO
    from: 4,
    to: 13,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Nitrogen",
    segmentIndex: 4,
    segmentFraction: 0.0,
  },
  {
    //N->NO
    from: 4,
    to: 14,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Oxygen",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },

  // ====================================================== //
  // ======================= confirm ====================== //
  // ====================================================== //
  {
    from: 5,
    to: 15,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Confirm",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 6,
    to: 15,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Confirm",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 7,
    to: 15,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Confirm",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 8,
    to: 15,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Confirm",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 9,
    to: 15,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Confirm",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 10,
    to: 15,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Confirm",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 11,
    to: 15,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Confirm",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 12,
    to: 15,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Confirm",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 13,
    to: 15,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Confirm",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },
  {
    from: 14,
    to: 15,
    fromEndSegmentLength: 0,
    toEndSegmentLength: 50,
    text: "Confirm",
    segmentIndex: 4,
    segmentFraction: 0.2,
  },

  // ====================================================== //
  // ======================== Reset ======================= //
  // ====================================================== //
  // first state
  {
    points: [-197.5, 205, -197.5, 215, -257.5, 215, -257.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [-47.5, 205, -47.5, 215, -257.5, 215, -257.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [102.5, 205, 102.5, 215, 372.5, 215, 372.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [252.5, 205, 252.5, 215, 372.5, 215, 372.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  // second state
  {
    points: [-512.5, 355, -512.5, 365, -572.5, 365, -572.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [-392.5, 355, -392.5, 365, -572.5, 365, -572.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [-272.5, 355, -272.5, 365, -572.5, 365, -572.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [-152.5, 355, -152.5, 365, -572.5, 365, -572.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [-32.5, 355, -32.5, 365, -572.5, 365, -572.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [87.5, 355, 87.5, 365, 667.5, 365, 667.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [207.5, 355, 207.5, 365, 667.5, 365, 667.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [327.5, 355, 327.5, 365, 667.5, 365, 667.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [447.5, 355, 447.5, 365, 667.5, 365, 667.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    points: [567.5, 355, 567.5, 365, 667.5, 365, 667.5, -15, 27.5, -15, 27.5, 0],
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },

  // ====================================================== //
  // ====================== self Loop ===================== //
  // ====================================================== //
  {
    //start
    points: [27.5, 55, 27.5, 70, 87.5, 70, 87.5, -15, 27.5, -15, 27.5, 0], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Reset,\nConfirm",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //H
    points: [
      -197.5,
      205,
      -197.5,
      220,
      -137.5,
      220,
      -137.5,
      135,
      -197.5,
      135,
      -197.5,
      150,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Confirm",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //C
    points: [
      -47.5,
      205,
      -47.5,
      220,
      12.5,
      220,
      12.5,
      135,
      -47.5,
      135,
      -47.5,
      150,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Confirm",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //N
    points: [
      102.5,
      205,
      102.5,
      220,
      162.5,
      220,
      162.5,
      135,
      102.5,
      135,
      102.5,
      150,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Confirm",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //O
    points: [
      252.5,
      205,
      252.5,
      220,
      312.5,
      220,
      312.5,
      135,
      252.5,
      135,
      252.5,
      150,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Confirm",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //HH
    points: [
      -512.5,
      355,
      -512.5,
      370,
      -452.5,
      370,
      -452.5,
      285,
      -512.5,
      285,
      -512.5,
      300,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //CH
    points: [
      -392.5,
      355,
      -392.5,
      370,
      -332.5,
      370,
      -332.5,
      285,
      -392.5,
      285,
      -392.5,
      300,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //NH
    points: [
      -272.5,
      355,
      -272.5,
      370,
      -212.5,
      370,
      -212.5,
      285,
      -272.5,
      285,
      -272.5,
      300,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //OH
    points: [
      -152.5,
      355,
      -152.5,
      370,
      -92.5,
      370,
      -92.5,
      285,
      -152.5,
      285,
      -152.5,
      300,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //CC
    points: [
      -32.5,
      355,
      -32.5,
      370,
      27.5,
      370,
      27.5,
      285,
      -32.5,
      285,
      -32.5,
      300,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //CN
    points: [
      87.5,
      355,
      87.5,
      370,
      147.5,
      370,
      147.5,
      285,
      87.5,
      285,
      87.5,
      300,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //CO
    points: [
      207.5,
      355,
      207.5,
      370,
      267.5,
      370,
      267.5,
      285,
      207.5,
      285,
      207.5,
      300,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //NN
    points: [
      327.5,
      355,
      327.5,
      370,
      387.5,
      370,
      387.5,
      285,
      327.5,
      285,
      327.5,
      300,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //NO
    points: [
      447.5,
      355,
      447.5,
      370,
      507.5,
      370,
      507.5,
      285,
      447.5,
      285,
      447.5,
      300,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //OO
    points: [
      567.5,
      355,
      567.5,
      370,
      627.5,
      370,
      627.5,
      285,
      567.5,
      285,
      567.5,
      300,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
  {
    //trap
    points: [
      252.5,
      505,
      252.5,
      520,
      312.5,
      520,
      312.5,
      435,
      252.5,
      435,
      252.5,
      450,
    ], //down 15 right 60 top -15 x 27.5 y 55
    fromEndSegmentLength: 0,
    toEndSegmentLength: 0,
    text: "Hydrogen,\nCarbon,\nNitrogen,\nOxygen,\nConfirm,\nReset",
    segmentIndex: 2,
    segmentFraction: 0.5,
  },
];

// Official WCA 3×3×3 single world records (CFOP) with scramble + reconstruction steps.
// Notation normalized for this site's move engine (′ primes; simultaneous turns expanded).
export const worldRecords = [
  {
    id: "WR-1",
    time: "3.08",
    solver: "Yiheng Wang",
    date: "2025-02-16",
    competition: "XMUM Cube Open 2025",
    method: "CFOP",
    note: "WR hiện tại · EPLL",
    scramble: "U2 R′ D2 R B2 D2 B2 R2 B F U F R2 B2 R F′ L2 F2 L",
    steps: [
      { label: "Inspection", moves: "z′ y" },
      { label: "Cross", moves: "U′ D′ r R′ D U′ R′ U′ D" },
      { label: "F2L 1", moves: "R U R′" },
      { label: "F2L 2", moves: "L U L′ U′ L U L2" },
      { label: "F2L 3", moves: "U′ L" },
      { label: "F2L 4", moves: "U2 R′ U R U′ R′ U R" },
      { label: "EPLL", moves: "U′ R′ U R′ U′ R′ U′ R′ U R U R′ U′ U R′ U′" }
    ],
    source: "https://reco.nz/solve/11524"
  },
  {
    id: "WR-2",
    time: "3.13",
    solver: "Max Park",
    date: "2023-06-11",
    competition: "Pride in Long Beach 2023",
    method: "CFOP",
    note: "XX-cross · PLL skip",
    scramble: "D U F2 L2 U′ B2 F2 D L2 U R′ F′ D R′ F′ U L D′ F′ D R2",
    steps: [
      { label: "Inspection", moves: "x2" },
      { label: "XX-cross", moves: "R′ D D R′ D L′ U L D R′ U′ R D" },
      { label: "F2L 3", moves: "L U′ L′" },
      { label: "F2L 4", moves: "U′ R U R′ d R′ U′ R" },
      { label: "OLL (CP)", moves: "r′ U′ R U′ R′ U U r" },
      { label: "AUF", moves: "U" }
    ],
    source: "https://reco.nz/solve/9155"
  },
  {
    id: "WR-3",
    time: "3.47",
    solver: "Yusheng Du",
    date: "2018-11-24",
    competition: "Wuhu Open 2018",
    method: "CFOP",
    note: "XX-cross · OLL(CP) · AUF",
    scramble: "F U2 L2 B2 F′ U L2 U R2 D2 L′ B L2 B′ R2 U2",
    steps: [
      { label: "Inspection", moves: "z y" },
      { label: "XX-cross", moves: "U R2 U′ F′ L F′ U′ L′" },
      { label: "F2L 3", moves: "U′ R U R2 U R" },
      { label: "F2L 4", moves: "U2 R′ U R" },
      { label: "OLL (CP)", moves: "U R′ U′ R U′ R′ U2 R" },
      { label: "AUF", moves: "U" }
    ],
    source: "https://ruwix.com/blog/yusheng-du-record-347/"
  },
  {
    id: "WR-4",
    time: "4.22",
    solver: "Feliks Zemdegs",
    date: "2018-05-09",
    competition: "Cube for Cambodia 2018",
    method: "CFOP",
    note: "X-cross · OLL(CP) · PLL skip",
    scramble: "R2 L′ F2 D2 F′ D L2 B′ D L U B2 U B2 D2 L2 D′ F2 D F′ R′ D′ R",
    steps: [
      { label: "X-cross", moves: "y R U′ R′ u′" },
      { label: "F2L 2", moves: "U′ R U R′" },
      { label: "F2L 3", moves: "y′ L′ U2 L U′ L′ U L" },
      { label: "F2L 4", moves: "d U R′ U′ R U R′ U′ R" },
      { label: "OLL (CP)", moves: "U′ R U2 R′ R′ F R F′ R U2 R′" }
    ],
    source: "https://reco.nz/solve/3016"
  },
  {
    id: "WR-5",
    time: "4.59",
    solver: "Feliks Zemdegs",
    date: "2018-01-27",
    competition: "Hobart Summer 2018",
    method: "CFOP",
    note: "PLL skip · hòa WR 4.59",
    scramble: "B2 U L2 U R2 D2 B2 L2 R2 F′ U′ L2 R F′ U L′ B D F2 L",
    steps: [
      { label: "Inspection", moves: "y x2" },
      { label: "Cross", moves: "L U F′ R′ u" },
      { label: "F2L 1", moves: "R′ U R" },
      { label: "F2L 2", moves: "L′ U L U R U′ R′ U′ R U R′" },
      { label: "F2L 3", moves: "U y′ U R U′ R′ U′ L′ U′ L" },
      { label: "F2L 4", moves: "U′ R U′ R′ U R U′ R′" },
      { label: "OLL", moves: "U R′ U′ F′ U F R" },
      { label: "AUF", moves: "U2" }
    ],
    source: "http://www.cubesolv.es/solve/5020"
  },
  {
    id: "WR-6",
    time: "4.59",
    solver: "SeungBeom Cho",
    date: "2017-10-28",
    competition: "ChicaGhosts 2017",
    method: "CFOP",
    note: "XX-cross · PLL skip",
    scramble: "U2 L′ D2 L D2 R F2 D2 R′ D2 U2 B U L U L′ R D L2 F2 U2 R′",
    steps: [
      { label: "Inspection", moves: "x2" },
      { label: "XX-cross", moves: "D′ R′ L2 U′ F U′ F′ D′ U′ U′ R′" },
      { label: "F2L 3", moves: "y′ R′ U′ R" },
      { label: "F2L 4", moves: "y′ R U′ R′ U′ R U R′" },
      { label: "OLL (CP)", moves: "U′ R′ U′ F′ U F R" },
      { label: "AUF", moves: "U′" }
    ],
    source: "https://ruwix.com/blog/seungbeom-cho-rubiks-cube-record-459/"
  },
  {
    id: "WR-7",
    time: "4.69",
    solver: "Patrick Ponce",
    date: "2017-09-02",
    competition: "Rally In The Valley 2017",
    method: "CFOP",
    note: "OLL(CP) · AUF",
    scramble: "B2 R2 U F2 D2 B U′ R U′ L F L F′ L2 R D R′",
    steps: [
      { label: "Inspection", moves: "x′ y2" },
      { label: "Cross", moves: "r′ U D′ R′ F′ U D′" },
      { label: "F2L 1", moves: "R′ U R2" },
      { label: "F2L 2", moves: "U′ R′ U2 L′ U L" },
      { label: "F2L 3", moves: "U′ R U′ R′ U L U L′" },
      { label: "F2L 4", moves: "U U′ U′ F′ R U R′ U′ R′ F R" },
      { label: "OLL (CP)", moves: "U′ R U R′ U R U2 R′" },
      { label: "AUF", moves: "U2" }
    ],
    source: "http://www.cubesolv.es/solve/4912"
  },
  {
    id: "WR-8",
    time: "4.73",
    solver: "Feliks Zemdegs",
    date: "2016-12-11",
    competition: "POPS Open 2016",
    method: "CFOP",
    note: "X-cross · OLL(CP) · EPLL",
    scramble: "U2 F L2 U2 R2 F L2 F2 L′ D′ B2 R D2 R′ B′ U′ L′ B′",
    steps: [
      { label: "Inspection", moves: "x′ y′" },
      { label: "X-cross", moves: "U′ R F R′ U′ D" },
      { label: "F2L 2–3", moves: "L′ U2 L2 U′ L′" },
      { label: "F2L 4", moves: "U R′ U R R′ U R U R′ U′ R" },
      { label: "OLL (CP)", moves: "F R U′ R′ U′ R U R′ F′" },
      { label: "EPLL", moves: "R U′ R U R U R U′ R′ U′ R2 U" }
    ],
    source: "https://reco.nz/solve/2406"
  },
  {
    id: "WR-9",
    time: "4.74",
    solver: "Mats Valk",
    date: "2016-11-05",
    competition: "Jawa Timur Open 2016",
    method: "CFOP",
    note: "VLS · AUF",
    scramble: "F2 U2 R2 F′ L2 F2 U′ R F D U F2 U R B R2 U B′ R′",
    steps: [
      { label: "Inspection", moves: "z" },
      { label: "Cross", moves: "r′ D R2" },
      { label: "F2L 1", moves: "R U′ R′ U′ L′ U′ L" },
      { label: "F2L 2", moves: "U2 R U R′ d′ U′ R U R′" },
      { label: "F2L 3", moves: "d′ U′ R U′ R′ L U′ L′" },
      { label: "Setup", moves: "y′ U2 R′ U2 R" },
      { label: "VLS", moves: "U2 R′ U R′ F R F′ U R" },
      { label: "AUF", moves: "U" }
    ],
    source: "http://www.cubesolv.es/solve/4338"
  },
  {
    id: "WR-10",
    time: "4.90",
    solver: "Lucas Etter",
    date: "2015-11-21",
    competition: "River Hill Fall 2015",
    method: "CFOP",
    note: "First sub-5 · OLL(CP)",
    scramble: "R2 B D2 F2 U2 R D2 L′ B L′ B D R′ F′ U B2 F L",
    steps: [
      { label: "Inspection", moves: "z2" },
      { label: "Cross", moves: "D′ L′ R′ F R D2" },
      { label: "F2L 1", moves: "U2 L′ U′ L" },
      { label: "F2L 2", moves: "U′ U′ U′ F′ U′ F U R U′ R′" },
      { label: "F2L 3", moves: "y R U R′" },
      { label: "F2L 4", moves: "U′ y U′ U′ R U R′" },
      { label: "OLL (CP)", moves: "U r U r′ R U R′ U′ r U′ r′" }
    ],
    source: "http://www.cubesolv.es/solve/4271"
  }
];

// Recent official WCA 3×3×3 single records with reconstruction steps.
// Notation normalized for this site's move engine (′ primes; simultaneous turns expanded).
export const worldRecords = [
  {
    id: "WR-1",
    time: "2.51",
    solver: "Xuanyi Geng",
    date: "2026-10-06",
    competition: "Guangzhou Grand Open 2026",
    method: "CFOP",
    note: "WR hiện tại · XX-cross · ZBLS · ZBLL",
    scramble: "B2 D2 B2 D R2 U′ F2 D′ U′ B′ D2 B2 U2 R2 D F D′ F2 R",
    steps: [
      { label: "Inspection", moves: "x′ z′" },
      { label: "XX-cross", moves: "U′ r′ R2 U′ R2 D′ R2 U R′ U′ D′" },
      { label: "F2L 3", moves: "R′ U′ R" },
      { label: "F2L 4 / ZBLS", moves: "L′ U′ L" },
      { label: "ZBLL", moves: "R′ U R U R′ U2′ R U R D R′ U2 R D′ R′" }
    ],
    source: "https://reco.nz/solve/14240"
  },
  {
    id: "WR2-1",
    time: "2.74",
    solver: "Yang Pin Xiu",
    date: "2026-10-06",
    competition: "Guangzhou Grand Open 2026",
    method: "CFOP",
    note: "WR2 hiện tại · XX-cross · OLL(CP)",
    scramble: "U′ L2 U L2 B2 D′ U′ B2 L2 U′ F′ L2 D R2 U L B′ D2 F2 D2 R′",
    steps: [
      { label: "Inspection", moves: "x′ z′" },
      { label: "XX-cross", moves: "r′ F R2 r′ U r D F2" },
      { label: "F2L 3", moves: "U′ U′ U′ R′ U R" },
      { label: "F2L 4", moves: "U′ R U R′" },
      { label: "OLL (CP)", moves: "R U R′ U R U2′ R′" },
      { label: "AUF", moves: "U" }
    ],
    source: "https://reco.nz/solve/14241"
  },
  {
    id: "WR-2",
    time: "2.76",
    solver: "Teodor Zajder",
    date: "2026-02-08",
    competition: "GLS Big Cubes Gdańsk 2026",
    method: "CFOP",
    note: "Cựu WR · XXX-cross · ZBLL",
    scramble: "L B R2 B′ R2 U2 F D R2 U R2 F2 D2 R U B L2",
    steps: [
      { label: "Inspection", moves: "x′" },
      { label: "XXX-cross", moves: "r′ U F U′ r U′ r′ U2 r′ U r" },
      { label: "F2L 4", moves: "R U2′ R2′ U′ R U R U2′ R′" },
      { label: "ZBLL", moves: "U′ F′ r U R′ U′ r′ F R" }
    ],
    source: "https://reco.nz/solve/12564"
  },
  {
    id: "WR-3",
    time: "3.05",
    solver: "Xuanyi Geng",
    date: "2025-04-13",
    competition: "Shenyang Spring 2025",
    method: "CFOP",
    note: "Cựu WR · Cross · ZBLL",
    scramble: "R2 D2 R2 D2 U′ F2 D L2 B2 R′ D R B2 U2 L R2 D U2 F R2",
    steps: [
      { label: "Inspection", moves: "x2" },
      { label: "Cross", moves: "l2 F L′ U′ R" },
      { label: "F2L 1", moves: "U R′ U2′ R" },
      { label: "F2L 2", moves: "U L U′ L′" },
      { label: "F2L 3", moves: "U L′ U′ L" },
      { label: "F2L 4", moves: "R U2′ R′ U′ R U R′" },
      { label: "ZBLL", moves: "F R′ F′ r U R U′ r′ U" }
    ],
    source: "https://reco.nz/solve/11719"
  },
  {
    id: "WR-4",
    time: "3.08",
    solver: "Yiheng Wang",
    date: "2025-02-16",
    competition: "XMUM Cube Open 2025",
    method: "CFOP",
    note: "Cựu WR · EPLL",
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
    id: "WR-5",
    time: "3.13",
    solver: "Max Park",
    date: "2023-06-11",
    competition: "Pride in Long Beach 2023",
    method: "CFOP",
    note: "Cựu WR · XX-cross · PLL skip",
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
    id: "WR-6",
    time: "3.47",
    solver: "Yusheng Du",
    date: "2018-11-24",
    competition: "Wuhu Open 2018",
    method: "CFOP",
    note: "Cựu WR · XX-cross · OLL(CP) · AUF",
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
  }
];

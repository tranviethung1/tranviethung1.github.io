// Current official WCA 3×3×3 fastest single results with reconstruction steps.
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
      { label: "F2L 4", moves: "L′ U′ L" },
      { label: "ZBLS", moves: "R′ U R U R′ U2 R" },
      { label: "ZBLL", moves: "R U R D R′ U2 R D′ R′" }
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
  }
];

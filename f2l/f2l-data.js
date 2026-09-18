// Canonical F2L formula catalog. Both the trainer and its tests use this data.
export const f2lSetups = [
  {
    "id": "F2L -1",
    "preview": "../previews/f2l-1.png",
    "slots": {
      "FR": {
        "setup": "F R′ F′ R",
        "solutions": [
          "U R U′ R′",
          "R′ F R F′",
          "y′ r′ U′ R U M′",
          "y U F′ L F L2 U L"
        ]
      },
      "FL": {
        "setup": "F R′ F′ R y",
        "solutions": [
          "F′ r U r′",
          "d R U′ R′",
          "F′ L F L′",
          "y′ U R U′ R′",
          "U F U′ F′"
        ]
      },
      "BL": {
        "setup": "F R′ F′ R y2",
        "solutions": [
          "U L U′ L′",
          "U2 L U2 L′",
          "L′ f U f′",
          "U′ r U B′ U′ B r′",
          "y2 U R U′ R′"
        ]
      },
      "BR": {
        "setup": "F R′ F′ R y′",
        "solutions": [
          "U f R′ f′",
          "r′ U′ R U M′",
          "U2 R2 F R F′ R",
          "d L U′ L′",
          "y′ U L U′ L′"
        ]
      }
    }
  },
  {
    "id": "F2L -2",
    "preview": "../previews/f2l-2.png",
    "slots": {
      "FR": {
        "setup": "R′ F R F′",
        "solutions": [
          "F R′ F′ R",
          "y′ U′ R′ U R",
          "U′ F′ U F",
          "y U′ L′ U L",
          "r U R′ U′ M"
        ]
      },
      "FL": {
        "setup": "R′ F R F′ y",
        "solutions": [
          "U′ L′ U L",
          "L F′ L′ F",
          "r U′ r′ F",
          "U r′ U′ F U F′ r",
          "U2 L′ U2 L"
        ]
      },
      "BL": {
        "setup": "R′ F R F′ y2",
        "solutions": [
          "U′ f′ L f",
          "l U L' U' M'",
          "d′ R′ U R",
          "y′ U′ L′ U L",
          "B L′ B′ L"
        ]
      },
      "BR": {
        "setup": "R′ F R F′ y′",
        "solutions": [
          "U′ R′ U R",
          "R f′ U′ f",
          "U2 R′ U2 R",
          "U R′ F′ U F U′ R",
          "y2 U′ L′ U L"
        ]
      }
    }
  },
  {
    "id": "F2L -3",
    "preview": "../previews/f2l-3.png",
    "slots": {
      "FR": {
        "setup": "F′ U F",
        "solutions": [
          "F′ U′ F",
          "y′ R′ U′ R",
          "y L′ U′ L",
          "S U R U′ R′ S′"
        ]
      },
      "FL": {
        "setup": "F′ U F y",
        "solutions": [
          "L′ U′ L",
          "U2 R′ F R U R′ F′ R",
          "y′ S U R U′ R′ S′",
          "U S′ F U′ F′ U S"
        ]
      },
      "BL": {
        "setup": "F′ U F y2",
        "solutions": [
          "y R′ U′ R",
          "f′ L′ f",
          "f′ r′ U z",
          "U′ R U B′ U′ B R′"
        ]
      },
      "BR": {
        "setup": "F′ U F y′",
        "solutions": [
          "R′ U′ R",
          "U2 r′ R′ F R F′ r",
          "U S f R′ f′ U S′",
          "U f2 F′ R′ f′ U S′"
        ]
      }
    }
  },
  {
    "id": "F2L -4",
    "preview": "../previews/f2l-4.png",
    "slots": {
      "FR": {
        "setup": "R U′ R′",
        "solutions": [
          "R U R′",
          "y′ f R f′",
          "y F U F′",
          "y2 L U L′"
        ]
      },
      "FL": {
        "setup": "R U′ R′ y",
        "solutions": [
          "F U F′",
          "y L U L′",
          "S′ L F′ L′ f",
          "U′ M L′ U L U′ M′",
          "y′ R U R′"
        ]
      },
      "BL": {
        "setup": "R U′ R′ y2",
        "solutions": [
          "L U L′",
          "r B r′",
          "U f R U R′ U2 f′ r x′",
          "y2 R U R′"
        ]
      },
      "BR": {
        "setup": "R U′ R′ y′",
        "solutions": [
          "f R f′",
          "y R U R′",
          "y′ L U L′",
          "U′ r R2 U R U′ M",
          "U r′ F′ U F U′ r"
        ]
      }
    }
  },
  {
    "id": "F2L -5",
    "preview": "../previews/f2l-5.png",
    "slots": {
      "FR": {
        "setup": "R U R′ U2 R U′ R′ U",
        "solutions": [
          "U′ R U R′ U2 R U′ R′",
          "F2 L′ U′ L U F2",
          "U′ R U R′ U′ R U2 R′",
          "U′ R U R′ U R′ F R F′",
          "y2 U′ L U L′ U2 L U′ L′"
        ]
      },
      "FL": {
        "setup": "R U R′ U2 R U′ R′ U y",
        "solutions": [
          "U R′ F r U′ r′ F′ R",
          "U2 F R U R′ U2 F′",
          "U l′ U L U′ L′ U′ l",
          "y′ U′ R U R′ U2 R U′ R′",
          "d′ L U L′ U2 L U′ L′"
        ]
      },
      "BL": {
        "setup": "R U R′ U2 R U′ R′ U y2",
        "solutions": [
          "U′ L U L′ U2 L U′ L′",
          "U′ L U L′ U′ L U2 L′",
          "y2 U′ R U R′ U2 R U′ R′",
          "U y′ l′ U L U′ L′ U′ l"
        ]
      },
      "BR": {
        "setup": "R U R′ U2 R U′ R′ U y′",
        "solutions": [
          "U′ R′ F R U R′ U′ F′ R",
          "U r′ U R U′ R′ U′ r",
          "R2 F′ U′ F U R2",
          "d′ R U R′ U2 R U′ R′",
          "y U′ R U R′ U′ R U2 R′"
        ]
      }
    }
  },
  {
    "id": "F2L -6",
    "preview": "../previews/f2l-6.png",
    "slots": {
      "FR": {
        "setup": "F′ U′ F U2 F′ U F U′",
        "solutions": [
          "U′ r U′ R′ U R U r′",
          "y′ U R′ U′ R U2 R′ U R",
          "d R′ U′ R U2 R′ U R",
          "U F′ U′ F U2 F′ U F",
          "y U L′ U′ L U2 L′ U L"
        ]
      },
      "FL": {
        "setup": "F′ U′ F U2 F′ U F U′ y",
        "solutions": [
          "U L′ U′ L U2 L′ U L",
          "F2 R U R′ U′ F2",
          "R′ F2 R U R′ U′ F2 U R",
          "U L′ U′ L U L′ U2 L",
          "U′ y′ r U′ R′ U R U r′"
        ]
      },
      "BL": {
        "setup": "F′ U′ F U2 F′ U F U′ y2",
        "solutions": [
          "U r U′ r′ U′ L U F L′",
          "y U R′ U′ R U R′ U2 R",
          "U′ l U′ L′ U L U l′",
          "U L F′ L′ U′ L U F L′",
          "y′ U L′ U′ L U2 L′ U L"
        ]
      },
      "BR": {
        "setup": "F′ U′ F U2 F′ U F U′ y′",
        "solutions": [
          "U R′ U′ R U2 R′ U R",
          "U2 R′ F′ U′ F U2 R",
          "y2 U L′ U′ L U2 L′ U L",
          "U′ y r U′ R′ U R U r′",
          "U R′ U′ R U R′ U2 R"
        ]
      }
    }
  },
  {
    "id": "F2L -7",
    "preview": "../previews/f2l-7.png",
    "slots": {
      "FR": {
        "setup": "R U R′ U2 R U2 R′ U",
        "solutions": [
          "U′ R U2 R′ U′ R U2 R′",
          "M′ U′ M U2 r U′ r′",
          "U′ R U2 R′ U2 R U′ R′",
          "U′ R U2 R′ U R′ F R F′",
          "R U R′ U R U′ R′ U R U′ R′"
        ]
      },
      "FL": {
        "setup": "R U R′ U2 R U2 R′ U y",
        "solutions": [
          "F U R U2 R′ U F′",
          "d′ L U2 L′ U2 L U′ L′",
          "U′ F U2 R U′ R′ U F′",
          "l U2 L2 U′ L2 U′ l′",
          "y′ U′ R U2 R′ U′ R U2 R′"
        ]
      },
      "BL": {
        "setup": "R U R′ U2 R U2 R′ U y2",
        "solutions": [
          "U′ L U2 L′ U2 L U′ L′",
          "U′ L U2 L′ U′ L U2 L′",
          "M U′ M′ U2 l U′ l′"
        ]
      },
      "BR": {
        "setup": "R U R′ U2 R U2 R′ U y′",
        "solutions": [
          "r U2 R2 U′ R2 U′ r′",
          "F R U R2 U′ R F′",
          "y′ U′ L U2 L′ U2 L U′ L′",
          "y U′ R U2 R′ U′ R U2 R′",
          "U′ R′ U R U′ R′ U′ R U r′ U′ R U M′"
        ]
      }
    }
  },
  {
    "id": "F2L -8",
    "preview": "../previews/f2l-8.png",
    "slots": {
      "FR": {
        "setup": "r′ U′ R2 U′ R2 U2 r",
        "solutions": [
          "d R′ U2 R U R′ U2 R",
          "r′ U2 R2 U R2 U r",
          "y′ U R′ U2 R U2 R′ U R",
          "y U L′ U2 L U2 L′ U L",
          "U F′ U2 L′ U L U′ F"
        ]
      },
      "FL": {
        "setup": "r′ U′ R2 U′ R2 U2 r y",
        "solutions": [
          "U L′ U2 L U L′ U2 L",
          "U r′ F2 r U2 r′ F r",
          "U′ R′ U2 R U R′ U R U2 L′ U L",
          "U L′ U2 L U2 L′ U L"
        ]
      },
      "BL": {
        "setup": "r′ U′ R2 U′ R2 U2 r y2",
        "solutions": [
          "l′ U2 L2 U L2 U l",
          "y U R′ U2 R U R′ U2 R",
          "d L′ U2 L U2 L′ U L",
          "f′ L′ U′ L2 U L′ f",
          "L′ U2 L l U L′ U′ M′ U L′ U L"
        ]
      },
      "BR": {
        "setup": "r′ U′ R2 U′ R2 U2 r y′",
        "solutions": [
          "U R′ U2 R U R′ U2 R",
          "U R′ U2 R U2 R′ U R"
        ]
      }
    }
  },
  {
    "id": "F2L -9",
    "preview": "../previews/f2l-9.png",
    "slots": {
      "FR": {
        "setup": "F′ U F U′ R U R′ U",
        "solutions": [
          "U′ R U′ R′ U F′ U′ F",
          "F R U R′ U′ F′ R U′ R′",
          "U′ R U′ R′ d R′ U′ R",
          "d R′ U′ R U′ R′ U′ R",
          "y U L′ U L U′ L′ U′ L"
        ]
      },
      "FL": {
        "setup": "F′ U F U′ R U R′ U y",
        "solutions": [
          "U L′ U L U′ L′ U′ L",
          "F2 U R U′ R′ F2",
          "U2 L′ U L U L′ U′ L",
          "U L′ U L U′ L′ U′ L",
          "F2 U R U′ R′ F2"
        ]
      },
      "BL": {
        "setup": "F′ U F U′ R U R′ U y2",
        "solutions": [
          "y U R′ U R U′ R′ U′ R",
          "U′ L U′ L′ U f′ L′ f",
          "d L′ U′ L U′ L′ U′ L",
          "y U2 R′ U R U R′ U′ R",
          "U′ L U′ L′ d L′ U′ L"
        ]
      },
      "BR": {
        "setup": "F′ U F U′ R U R′ U y′",
        "solutions": [
          "U R′ U′ R U′ R′ U′ R",
          "U R′ U′ R U′ R′ U′ R",
          "U2 R′ U R U R′ U′ R",
          "U R′ U′ R U′ R′ U′ R"
        ]
      }
    }
  },
  {
    "id": "F2L -10",
    "preview": "../previews/f2l-10.png",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U′ R U′ R′ U",
        "solutions": [
          "U′ R U R′ U R U R′",
          "U2 R U′ R′ U′ R U R′",
          "y′ U R′ U R U′ f R f′",
          "d R′ U R d′ R U R′",
          "F2 U′ L′ U L F2"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U′ R U′ R′ U y",
        "solutions": [
          "U L′ U L U′ F U F′",
          "F U′ R U R′ U2 F′",
          "d′ L U L′ U L U L′",
          "y′ U′ R U R′ U R U R′",
          "U L′ U L U′ F U F′"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U′ R U′ R′ U y2",
        "solutions": [
          "U′ L U L′ U L U L′",
          "U2 L U′ L′ U′ L U L′",
          "U′ L U L′ U L U L′",
          "y2 U′ R U R′ U R U R′"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U′ R U′ R′ U y′",
        "solutions": [
          "U R′ U R U′ f R f′",
          "R2 U′ F′ U F R2",
          "y U′ R U R′ U R U R′",
          "d′ R U R′ U R U R′",
          "U R′ U R U′ f R f′"
        ]
      }
    }
  },
  {
    "id": "F2L -11",
    "preview": "../previews/f2l-11.png",
    "slots": {
      "FR": {
        "setup": "F′ U F U′ R U2 R′ U",
        "solutions": [
          "U′ R U2 R′ U F′ U′ F",
          "y′ R U2 R2 U′ R2 U′ R′",
          "U′ R U2 R′ d R′ U′ R",
          "F′ U L′ U2 L U2 F",
          "U′ R U2 R′ U F′ U′ F"
        ]
      },
      "FL": {
        "setup": "F′ U F U′ R U2 R′ U y",
        "solutions": [
          "L′ U L U′ L′ U L U2 L′ U L",
          "L U2 L2 U′ L2 U′ L′",
          "F U R U′ R′ U R U′ R′ U F′",
          "U′ F U2 F′ U r′ F′ r",
          "L′ U L U′ L′ U L U L′ U2 L"
        ]
      },
      "BL": {
        "setup": "F′ U F U′ R U2 R′ U y2",
        "solutions": [
          "U′ L U2 L′ U f′ L′ f",
          "U′ L U2 L′ d L′ U′ L",
          "U′ L U2 L′ U f′ L′ f",
          "y R U2 R2 U′ R2 U′ R′",
          "U′ L U2 L′ U f′ L′ f"
        ]
      },
      "BR": {
        "setup": "F′ U F U′ R U2 R′ U y′",
        "solutions": [
          "R′ U R U′ R′ U R U2 R′ U R",
          "R U2 R2 U′ R2 U′ R′",
          "R′ U R U′ R′ U R U R′ U2 R",
          "d′ R U2 R′ U F′ U′ F",
          "y R U2 R′ U F′ U′ F U′ F′ U F"
        ]
      }
    }
  },
  {
    "id": "F2L -12",
    "preview": "../previews/f2l-12.png",
    "slots": {
      "FR": {
        "setup": "R U R′ U2 R U R′ U′ R U R′",
        "solutions": [
          "R U′ R′ U R U′ R′ U2 R U′ R′",
          "R′ U2 R2 U R2 U R",
          "U R U′ R′ U R U R′ U′ R U R′",
          "R′ D′ R U2 R′ D R2 U R′",
          "y′ U R′ U2 R U′ y R U R′"
        ]
      },
      "FL": {
        "setup": "R U R′ U2 R U R′ U′ R U R′ y",
        "solutions": [
          "U L′ U2 L d′ L U L′",
          "U L′ U2 L d′ L U L′",
          "U L′ U2 L d′ L U L′",
          "y′ R′ U2 R2 U R2 U R",
          "F U′ R U2 R′ U2 F′"
        ]
      },
      "BL": {
        "setup": "R U R′ U2 R U R′ U′ R U R′ y2",
        "solutions": [
          "L′ U2 L2 U L2 U L",
          "d L′ U2 L U′ F U F′",
          "U2 R′ U2 R U2 L U L′ U2 R′ U R",
          "L U′ L′ U L U′ L′ U2 L U′ L′",
          "L′ U2 L2 U L2 U L"
        ]
      },
      "BR": {
        "setup": "R U R′ U2 R U R′ U′ R U R′ y′",
        "solutions": [
          "U R′ U2 R U′ f R f′",
          "f R′ U R2 U′ R2 f′",
          "U R′ U2 R d′ R U R′",
          "y R U′ R′ U R U R′ U′ R U2 R′",
          "U R′ U2 R U′ y R U R′"
        ]
      }
    }
  },
  {
    "id": "F2L -13",
    "preview": "../previews/f2l-13.svg",
    "slots": {
      "FR": {
        "setup": "r U2 R′ U R U′ R′ U M",
        "solutions": [
          "y′ U R′ U R U′ R′ U′ R",
          "M′ U′ R U R′ U2 R U′ r′",
          "d R′ U R U′ R′ U′ R",
          "R U′ R′ U R′ F R F′ R U′ R′",
          "U R U′ R′ U R U′ R′ F R′ F′ R",
          "y U L′ U L U′ L′ U′ L",
          "U F′ U F U′ F′ U′ F",
          "R U R′ U′ R′ F R F′ R′ F R F′",
          "R′ D′ r U r′ D F R F′",
          "R′ D′ r U r′ D R U R U′ R′",
          "U F2 u′ R U′ R′ u F2",
          "R U R′ U′ R′ F R F′ U R U′ R′",
          "U2 L F′ L2 U2 L F L′ U2 L",
          "R′ F R F′ U′ R′ F R F′ R U R′",
          "y2 U F′ U′ L′ U L S′ L′ f",
          "U2 F′ L′ U L U′ L′ U2 L F",
          "R′ F R F′ U′ F′ R U R′ U′ R′ F R",
          "F′ U L′ U′ L U′ F U R U′ R′",
          "R U R2 F R F2 U′ F",
          "F′ U2 F U2 F′ U′ F U2 F′ U F",
          "y2 M U′ L U L′ U′ L U2 l′",
          "y2 U f′ L f U′ f′ L′ f",
          "R U2 R′ U2 F′ U2 F U′ F′ U F",
          "U R U′ R′ U R U′ R′ U′ F′ U F",
          "y L′ U L U′ L′ U2 L U2 L′ U L",
          "R F′ r U R′ U2 r′ F2",
          "U F′ U F U′ y L′ U′ L",
          "U R U′ R′ U R U′ R′ y U′ L′ U L",
          "R U R′ U R U′ R′ F′ U′ F",
          "U R U′ R′ U R U′ M′ U R′ U′ M",
          "U y′ R′ U R U′ R′ U′ R",
          "U F′ L F L′ U′ L′ U L R U′ R′"
        ]
      },
      "FL": {
        "setup": "r U2 R′ U R U′ R′ U M y",
        "solutions": [
          "U L′ U L U′ L′ U′ L",
          "y′ R U′ R′ U2 R U′ R′ U F′ U F",
          "U L′ U L U′ L′ U L U L′ U L",
          "U L F′ L2 U′ L U L F L′",
          "L′ U L U′ L′ U2 L U2 L′ U L"
        ]
      },
      "BL": {
        "setup": "r U2 R′ U R U′ R′ U M y2",
        "solutions": [
          "d L′ U L U′ L′ U′ L",
          "y U R′ U R U′ R′ U′ R",
          "U f′ L f U′ f′ L′ f",
          "U L U′ L F′ L2 U′ L U F U L′",
          "M U′ L U L′ U′ L U2 l′",
          "M U′ L U L′ U2 L U′ l′"
        ]
      },
      "BR": {
        "setup": "r U2 R′ U R U′ R′ U M y′",
        "solutions": [
          "U R′ U R U′ R′ U′ R",
          "U R′ U R U′ R′ U R U R′ U R"
        ]
      }
    }
  },
  {
    "id": "F2L -14",
    "preview": "../previews/f2l-14.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U′ R U R′ U",
        "solutions": [
          "U′ R U′ R′ U R U R′",
          "R U2 R′ U2 R U R′ U2 R U′ R′",
          "U′ R2 D R′ U R D′ R2",
          "U2 R2 U R′ U R U2 R2",
          "R′ D′ R U′ R′ D R2 U R′",
          "U′ R U′ R′ U R U′ R′ U′ R U′ R′",
          "U′ R′ F R2 U R′ U′ R′ F′ R",
          "F R′ F′ R U R U′ R′ F R′ F′ R",
          "y U′ L′ U L U′ L′ U L U F U′ F′",
          "U R U2 R′ U R U2 R′ U R U′ R′",
          "y L′ U2 L U2 y′ R U2 R′ U R U′ R′",
          "y′ M U R′ U′ R U2 R′ U r",
          "y L′ U L U′ L F′ L′ F L′ U L",
          "y M′ U r′ F′ r U2 r′ F R",
          "R U R′ d′ L′ U L F′ L F L′",
          "y2 U′ L U′ L′ U L U L′",
          "y U′ L′ U L U′ L′ U L F′ L F L′",
          "y U′ L′ U L U′ L′ U L F′ r U r′",
          "R U′ R′ U R U2 R′ U2 R U′ R′",
          "y L′ U2 L U2 F U2 F′ U F U′ F′"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U′ R U R′ U y",
        "solutions": [
          "d′ L U′ L′ U L U L′",
          "y U′ L U′ L′ U L U L′",
          "y′ U′ R U′ R′ U R U R′",
          "M′ U L′ U′ L U2 L′ U l",
          "U2 F R U′ R′ U R U2 R′ F′",
          "L′ U L U′ L F′ L′ F L′ U L",
          "U2 R′ F′ R2 B′ R2 F R2 B R2 F R",
          "U F U R U′ R′ U R U2 R′ F′",
          "F U′ R U R′ U F′ U′ L′ U L",
          "U′ F U′ F′ U F U F′"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U′ R U R′ U y2",
        "solutions": [
          "U′ L U′ L′ U L U L′",
          "U′ L U′ L′ U L U′ L′ U′ L U′ L′"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U′ R U R′ U y′",
        "solutions": [
          "y U′ R U′ R′ U R U R′",
          "d′ R U′ R′ U R U R′",
          "y′ U′ L U′ L′ U L U L′",
          "U′ f R′ f′ U f R f′",
          "M U R′ U′ R U2 R′ U r",
          "U′ F U R U′ R′ S R f′",
          "U′ R′ U R′ F R2 U R′ U′ F′ U′ R"
        ]
      }
    }
  },
  {
    "id": "F2L -15",
    "preview": "../previews/f2l-15.svg",
    "slots": {
      "FR": {
        "setup": "R U R′ U′ R U R′ U2 R U′ R′",
        "solutions": [
          "R′ D′ R U′ R′ D R U R U′ R′",
          "M U r U′ r′ U′ M′",
          "R U R′ U2 R U′ R′ U R U′ R′",
          "F′ U F U2 R U R′",
          "U R′ F R F′ U R U R′",
          "R U2 R′ U R U R′ U R U′ R′",
          "y′ R2 F R F′ R U2 R′ U R",
          "U S′ R U R′ S R U2 R′",
          "l U r U′ r′ U′ l′",
          "y L′ U L U2 y′ R U R′",
          "y L′ U L U2 F U F′",
          "F′ U L′ U L U2 F",
          "U′ r U′ r′ U′ r U r′ R U R′",
          "U2 R′ F′ r U′ r′ F2 R2 U R′",
          "M U L F′ L′ U′ M′",
          "U y′ R′ U R y U2 R U2 R′ U′ R U2 R′",
          "U2 R U R′ U′ R U2 R′ U R U R′",
          "l U L F′ L′ U′ l′",
          "R r′ U r U′ r′ U′ r R′",
          "y′ R′ U R U2 y R U R′",
          "y L2 B L B′ L U2 L′ U L",
          "R′ D′ R U′ R′ D F R F′",
          "U R U′ R′ U2 R′ F R F′ R U R′",
          "y U L′ U L y′ U2 R U2 R′ U2 R U′ R′",
          "y U′ M′ U′ L′ U l U L′ U′ L",
          "R U′ R′ U′ R U′ R′ U R U′ R′ U R U′ R′",
          "U R U′ R′ U2 y L′ U L y′ U R U′ R′",
          "U R U2 R′ U′ R U2 R′ U R U R′",
          "U F′ U2 F U2 R U R′ U2 R U′ R′",
          "R U2 R′ U′ R U′ R′ U2 R U R′",
          "y L′ U L U′ d′ L U L′",
          "U R U′ R′ U2 F′ R U R′ U′ R′ F R",
          "y l′ U′ l U′ l′ U2 l U l′ U l",
          "U2 R U R′ y U L′ U L U2 L′ U L",
          "y L′ U L U2 y L U L′",
          "r′ R U R U R′ U′ r U′ R′",
          "U R U′ R D r′ U r D′ R′ U′ R′",
          "M U R U R′ U′ r U′ R′",
          "R U2 R2 F R F′ U′ R U2 R′",
          "F D R U R U′ R2 D′ F′",
          "y′ U R′ U R U2 y R U2 R′ U2 R U′ R′",
          "R U R′ U2 R U′ R2 F R F′",
          "y2 M′ U l U′ l′ U′ M",
          "U2 M′ U R U′ r′ U2 R U′ R′",
          "y′ R′ U R U2 f R f′",
          "F′ L′ U′ L U L′ U L U′ F",
          "R U′ R U2 R2 U′ R2 U′ R2",
          "F′ U F U′ d′ F U F′",
          "U′ r U′ r′ U′ r U M U R′"
        ]
      },
      "FL": {
        "setup": "R U R′ U′ R U R′ U2 R U′ R′ y",
        "solutions": [
          "L′ U L U2 F U F′",
          "F U2 R U R′ U F′",
          "L′ U L U2 y L U L′",
          "U L′ l U′ l′ U l U l′ U L",
          "L D L′ U′ L D′ L′ F′ L F L′",
          "U′ F′ L F L2 U L U2 L′ U L",
          "U′ M′ U′ L′ U l U L′ U′ L",
          "U′ F′ U′ L′ U L F L′ U′ L",
          "r2 F r U′ r U2 r′ F r",
          "L′ U L U2 y′ R U R′",
          "L′ U L S L′ U2 L S′",
          "U′ L′ F′ L′ U′ L U F L"
        ]
      },
      "BL": {
        "setup": "R U R′ U′ R U R′ U2 R U′ R′ y2",
        "solutions": [
          "L U L′ U2 L U′ L′ U L U′ L′",
          "L U2 L′ U L U L′ U L U′ L′",
          "M′ U l U′ l′ U′ M",
          "f′ L f U2 L U L′",
          "r U l U′ l′ U′ r′",
          "U2 R U2 R′ U′ R U′ R′ L U L′",
          "y′ L′ U L U2 F U F′",
          "L U′ L U2 L2 U′ L2 U′ L2",
          "F′ L F L′ U2 L U L2 U L",
          "r U r′ U2 L U L′ U r U′ r′",
          "L l U F U′ F′ l′ L′",
          "L U F′ L F L′ U2 L′",
          "L F R U′ R′ F′ L′"
        ]
      },
      "BR": {
        "setup": "R U R′ U′ R U R′ U2 R U′ R′ y′",
        "solutions": [
          "R′ U R U2 f R f′",
          "R2 F R F′ R U R′ U2 R",
          "R′ U R U′ d′ R U R′",
          "R2 F R F′ R U2 R′ U R",
          "R′ U R U2 y′ L U L′",
          "y R U R′ U2 R U′ R′ U R U′ R′",
          "R′ U R U2 B U B′",
          "U2 R′ F′ U′ F U R U R′ U′ R",
          "R′ U R U2 y R U R′"
        ]
      }
    }
  },
  {
    "id": "F2L -16",
    "preview": "../previews/f2l-16.svg",
    "slots": {
      "FR": {
        "setup": "F′ U F U2 R U R′",
        "solutions": [
          "R U′ R′ U2 F′ U′ F",
          "R U′ R′ U2 y′ R′ U′ R",
          "U M′ U R U′ r′ U′ R U R′",
          "U F U R U′ R′ F′ R U R′",
          "y M U′ R′ F R U M′",
          "y′ R′ U′ R U2 R′ U R U′ R′ U R",
          "R U′ R′ U d R′ U′ R",
          "U′ F R′ F′ R U′ F′ U′ F",
          "R U′ R′ S′ R U2 R′ S",
          "y r′ U′ l′ U l U r",
          "U F R U R′ U′ F′ U R U′ R′",
          "U F R′ F′ R2 U′ R′ U2 R U′ R′",
          "y L′ U′ L U2 L′ U L U′ L′ U L",
          "R2 B′ R′ B R′ U2 R U′ R′",
          "R U′ R′ U2 y L′ U′ L",
          "r U r′ U r U2 r′ U′ r U′ r′",
          "U′ R U2 R′ U y′ U R′ U′ R U2 R′ U R",
          "l2 F′ l′ U l′ U2 R U′ R′",
          "R U R′ U2 R U′ R′ U′ F′ U F",
          "S U′ f′ U f U S′",
          "R′ D′ R U R′ D R r U R′ U′ M",
          "R′ D′ R U R′ D R F R′ F′ R",
          "y L D L′ U L D′ F′ L′ F",
          "y L D L′ U L D′ L′ U′ L′ U L",
          "U r R′ U R U′ r′ U′ R U R′",
          "y M U′ l′ U l U M′",
          "U R F R U R′ U′ F′ R′",
          "y L′ U2 L U′ L′ U′ L U′ L′ U L",
          "R U′ R′ U2 S R′ F R f′",
          "U′ R U′ R′ U2 y′ R′ U2 R U2 y2 L′ U L",
          "R U R′ U2 R U′ R′ y′ U′ R′ U R",
          "y L′ U2 L U L′ U L U2 L′ U′ L",
          "R U′ B U′ B′ U2 R′",
          "U r U′ r′ U2 r U r′ U′ R U R′",
          "R U′ R′ y U2 L′ U′ L",
          "y′ M′ U′ r′ U r U M",
          "y U2 L′ U′ L y′ U′ R U′ R′ U2 R U′ R′",
          "d′ L F′ L′ F U′ L′ U′ L",
          "y L′ x′ U′ l′ U l U L x",
          "U2 R U M′ U′ r′ U2 r U r′",
          "U R U2 R′ r U′ r′ U2 r U r′",
          "R U′ R′ d′ U′ L′ U′ L",
          "R U′ R′ d′ U′ r′ F′ r",
          "l F′ U F′ U′ F2 l′"
        ]
      },
      "FL": {
        "setup": "F′ U F U2 R U R′ y",
        "solutions": [
          "F U′ R U′ R′ U2 F′",
          "L′ U′ L U2 L′ U L U′ L′ U L",
          "L′ U2 L U′ L′ U′ L U′ L′ U L",
          "M U′ l′ U l U M′",
          "U′ S L′ U′ L S′ L′ U2 L",
          "M U′ R′ F R U M′",
          "L′ U L′ U2 L2 U L2 U L2",
          "F R U R′ U′ R U′ R′ U F′",
          "F2 R′ F′ R2 U′ R′ U F′",
          "r′ U′ l′ U l U r",
          "U′ L F′ L′ F U′ L′ U′ L",
          "F U′ F′ U2 L′ U′ L"
        ]
      },
      "BL": {
        "setup": "F′ U F U2 R U R′ y2",
        "solutions": [
          "L U′ L′ U2 f′ L′ f",
          "L2 F′ L′ F L′ U2 L U′ L′",
          "L U′ L′ y U2 R′ U′ R",
          "L U′ L′ U′ d′ R′ U′ R",
          "L U′ L′ U2 B′ U′ B",
          "L U′ L′ U2 y R′ U′ R",
          "U M U L U′ l′ U′ L U L′",
          "L U′ L′ U2 y′ r′ F′ r"
        ]
      },
      "BR": {
        "setup": "F′ U F U2 R U R′ y′",
        "solutions": [
          "R′ U′ R U2 R′ U R U′ R′ U R",
          "M′ U′ r′ U r U M",
          "U2 R′ U′ R U R D R′ U′ R D′ R′",
          "F R′ F′ R U2 R′ U′ R2 U′ R′",
          "f R′ f′ U2 R′ U′ R",
          "R′ U′ F R′ F′ R U2 R",
          "R′ U2 R U′ R′ U′ R U′ R′ U R",
          "U2 L′ U2 L U L′ U L R′ U′ R",
          "U R′ f′ R U R′ U R U2 R′ U f R",
          "y R U′ R′ U2 F′ U′ F",
          "R′ B′ U′ R U R′ B U R",
          "y R U′ R′ U2 y′ R′ U′ R",
          "R′ U R′ U2 R2 U R2 U R2"
        ]
      }
    }
  },
  {
    "id": "F2L -17",
    "preview": "../previews/f2l-17.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U R U2 R′",
        "solutions": [
          "R U2 R′ U′ R U R′",
          "y2 L U2 L′ U′ L U L′",
          "R U R′ U′ R U2 R′ U2 R U R′",
          "y L F′ L′ F L′ U L U′ L′ U L",
          "y′ R′ U2 F R U R′ U′ F′ R",
          "R U U R′ U′ R U R′ U′",
          "y L′ U′ L U L′ U′ L U F′ L F L′",
          "y U′ F R U R′ U′ R U2 R′ F′",
          "U′ R U2 R′ U′ R U R′ U R U′ R′",
          "U′ R U′ R′ U2 R U2 R2 F R F′"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U R U2 R′ y",
        "solutions": [
          "y L U2 L′ U′ L U L′",
          "L F′ L′ F L′ U L U′ L′ U L",
          "L′ U2 L U2 l′ U L U′ L′ U′ l",
          "y′ R U2 R′ U′ R U R′",
          "F U2 F′ U′ F U F′",
          "U2 F U R U2 R′ U′ R U2 R′ F′",
          "U′ L′ U L2 F′ L′ F U′ L′ U L",
          "L′ U′ L U L′ U′ L U F′ L F L′"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U R U2 R′ y2",
        "solutions": [
          "L U2 L′ U′ L U L′",
          "L U L′ U′ L U2 L′ U2 L U L′"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U R U2 R′ y′",
        "solutions": [
          "y′ L U2 L′ U′ L U L′",
          "y R U2 R′ U′ R U R′",
          "R′ U2 F R U R′ U′ F′ R",
          "l U′ R′ U l′ U R U′ R′ U R",
          "R′ U2 R U2 r′ U R U′ R′ U′ r",
          "f R2 f′ U′ f R f′",
          "U′ F′ U′ L′ U L F R′ U′ R"
        ]
      }
    }
  },
  {
    "id": "F2L -18",
    "preview": "../previews/f2l-18.svg",
    "slots": {
      "FR": {
        "setup": "R U R′ U′ R U R′ F R′ F′ R",
        "solutions": [
          "y′ R′ U2 R U R′ U′ R",
          "y L′ U2 L U L′ U′ L",
          "F′ U2 F U F′ U′ F",
          "R′ F R F′ R U′ R′ U R U′ R′",
          "R U2 R′ y′ R′ U′ R U2 R′ U R",
          "R U R′ U′ R U R′ U′ F R′ F′ R",
          "R U R′ U′ y L′ U L U′ L′ U L",
          "F′ U2 F d R′ U′ R",
          "F R′ F′ R2 U′ R′ U R U2 R2 F R F′",
          "R U′ R2 F R F′ U2 R U R′",
          "R U2 R′ U2 r U′ R′ U R U r′",
          "y U L′ U L U2 y2 R′ U2 R U′ R′ U R",
          "R U′ R′ F′ U′ F R′ F R F′",
          "R U′ R′ F′ U′ F U R U′ R′",
          "R U R′ U′ R U R′ U2 F′ U F",
          "y′ U R′ U R U2 R′ U2 R U′ R′ U R",
          "y′ U R′ U R U2 R′ U2 R y2 U′ L′ U L",
          "U2 f R U R′ U′ R U R′ U′ f′ U′ R U′ R′",
          "R U2 R′ F′ U′ F U2 F′ U F",
          "U R U′ R′ U2 R U′ R′ F′ U′ F",
          "R U R′ U′ R U R′ U′ y′ U′ R′ U R",
          "U′ F U R U′ R′ F′ U2 R U R′",
          "U S R U2 R′ U R U′ R′ U′ S′",
          "R′ F R F′ R U′ R2 F R F′",
          "R U R′ U′ F′ U F U′ F′ U F",
          "R U R′ U′ R U2 R′ U F′ U F",
          "U2 F′ U′ L′ U2 L U L′ U2 L F",
          "U F′ L′ U′ L U L′ U2 L F",
          "R U2 R′ y L′ U′ L U2 L′ U L",
          "U R U′ R2 F R F′ U R U′ R′"
        ]
      },
      "FL": {
        "setup": "R U R′ U′ R U R′ F R′ F′ R y",
        "solutions": [
          "L′ U2 L U L′ U′ L"
        ]
      },
      "BL": {
        "setup": "R U R′ U′ R U R′ F R′ F′ R y2",
        "solutions": [
          "y R′ U2 R U R′ U′ R",
          "U F U R U′ R′ F′ L U L′",
          "L U2 F′ L′ U′ L U F L′",
          "L U2 L′ U2 l U′ L′ U L U l′",
          "r′ U L U′ r U′ L′ U L U′ L′",
          "f′ L2 f U f′ L′ f",
          "y′ L′ U2 L U L′ U′ L"
        ]
      },
      "BR": {
        "setup": "R U R′ U′ R U R′ F R′ F′ R y′",
        "solutions": [
          "R′ U2 R U R′ U′ R"
        ]
      }
    }
  },
  {
    "id": "F2L -19",
    "preview": "../previews/f2l-19.svg",
    "slots": {
      "FR": {
        "setup": "R U R′ U′ R U2 R′ U′",
        "solutions": [
          "U R U2 R′ U R U′ R′",
          "U R U2 R2 F R F′",
          "d f R2 f′ U f R′ f′",
          "R U′ R′ U R U′ R′ U R U R′",
          "R U′ R U R′ U R U2 R2",
          "U y′ f R2 f′ U2 f R2 f′",
          "d f R2 f′ U2 f R2 f′",
          "U y′ f R2 f′ r′ U′ R U M′",
          "d f R2 f′ r′ U′ R U M′",
          "U y′ f R2 f′ U f R′ f′",
          "F′ U F U R U2 R′ U2 R U′ R′",
          "y2 U L U2 L′ U L U′ L′"
        ]
      },
      "FL": {
        "setup": "R U R′ U′ R U2 R′ U′ y",
        "solutions": [
          "U L′ U L2 F′ L′ F L′ U L",
          "d R U2 R′ U R U′ R′",
          "y′ U R U2 R′ U R U′ R′",
          "y U L U2 L′ U L U′ L′",
          "R U2 R′ U2 R′ F R U′ F′",
          "U M′ U′ L′ U2 L U L′ U′ l",
          "U F U2 F′ U F U′ F′",
          "R U2 R′ U2 R′ F R U′ R′ F′ R U R U′ R′",
          "F U′ R U′ R′ U R U2 R′ F′"
        ]
      },
      "BL": {
        "setup": "R U R′ U′ R U2 R′ U′ y2",
        "solutions": [
          "U L U2 L′ U L U′ L′",
          "L U′ L′ U L U′ L′ U L U L′"
        ]
      },
      "BR": {
        "setup": "R U R′ U′ R U2 R′ U′ y′",
        "solutions": [
          "y U R U2 R′ U R U′ R′",
          "U R′ F′ U2 F R U R′ U′ R",
          "U2 f R2 U R2 U′ R f′",
          "U2 F′ U′ F R′ U′ R S R S′",
          "U M U′ R′ U2 R U R′ U′ r",
          "U R′ U′ R U′ r′ U r U2 r′ U′ r",
          "y′ U L U2 L′ U L U′ L′",
          "d L U2 L′ U L U′ L′",
          "U R′ U R U′ R′ U R U′ f R′ f′",
          "U R′ U F′ U F R U′ R′ U R"
        ]
      }
    }
  },
  {
    "id": "F2L -20",
    "preview": "../previews/f2l-20.svg",
    "slots": {
      "FR": {
        "setup": "R U R′ F R′ F′ R2 U R′ U",
        "solutions": [
          "y′ U′ R′ U2 R U′ R′ U R",
          "U′ R U′ R2 F R F′ R U′ R′",
          "y U′ L′ U2 L U′ L′ U L",
          "U′ F′ U2 F U′ F′ U F",
          "U′ R U′ R′ F′ U2 F R U R′",
          "R U R′ U2 R U R′ U2 y′ R′ U R",
          "U′ F′ U2 F2 R′ F′ R",
          "U′ R U R′ U r U′ r′ U2 r U r′",
          "d′ L′ U2 L U′ L′ U L",
          "d′ r′ F2 r2 U′ r′ F",
          "y′ U′ R′ U′ F R′ F′ R2",
          "U2 R′ U2 R U F R′ F′ U R",
          "R U′ R′ U′ F′ U2 F U2 F′ U F",
          "R U R′ U2 R U R′ U2 F′ U F",
          "y L′ U L U′ L′ U L U′ L′ U′ L",
          "y′ R′ U R U′ R′ U R U′ R′ U′ R",
          "R U′ R′ U′ y′ R′ U2 R U2 R′ U R",
          "y′ U′ R′ U2 R2 y R′ F′ R",
          "U′ y L′ U2 L U′ L′ U L",
          "U′ R U R′ U F′ L′ U2 L F",
          "U′ F′ d U R U′ R′ U R",
          "d′ L′ U2 L2 F′ L′ F",
          "R U′ R′ U2 d R′ U2 R U2 R′ U R",
          "R U R′ U2 R U′ R′ U′ R′ F R F′ R U′ R′",
          "R U R′ U2 R U R′ U′ F R′ F′ R",
          "F′ U L′ U L U′ L′ U2 L F",
          "U′ y′ R′ U2 R U′ R′ U R",
          "U′ M′ U R U2 R′ U′ R U r′"
        ]
      },
      "FL": {
        "setup": "R U R′ F R′ F′ R2 U R′ U y",
        "solutions": [
          "U′ L′ U2 L U′ L′ U L",
          "L′ U L U′ L′ U L U′ L′ U′ L",
          "U′ L′ U2 L2 F′ L′ F"
        ]
      },
      "BL": {
        "setup": "R U R′ F R′ F′ R2 U R′ U y2",
        "solutions": [
          "y U′ R′ U2 R U′ R′ U R",
          "U′ L F U2 F′ L′ U′ L U L′",
          "d′ R′ U2 R U′ R′ U R",
          "U′ L U L′ U l U′ l′ U2 l U l′",
          "U′ M U L U2 L′ U′ L U l′",
          "U′ L U′ L′ U L U′ L′ U f′ L f",
          "y′ U′ L′ U2 L U′ L′ U L"
        ]
      },
      "BR": {
        "setup": "R U R′ F R′ F′ R2 U R′ U y′",
        "solutions": [
          "U′ R′ U2 R U′ R′ U R",
          "R′ U R U′ R′ U R U′ R′ U′ R"
        ]
      }
    }
  },
  {
    "id": "F2L -21",
    "preview": "../previews/f2l-21.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U2 R U R′",
        "solutions": [
          "U2 R U R′ U R U′ R′",
          "R U′ R′ U2 R U R′",
          "R B U2 B′ R′",
          "y′ f R′ f′ U2 f R f′",
          "U2 y′ f R f′ U f R′ f′",
          "y R′ F R U2 R′ F′ R",
          "r U′ R′ U2 R U r′",
          "y F R U2 R′ F′",
          "y F R U′ R′ U′ F′",
          "R U R′ U R U R′ U′ R U R′",
          "y2 L y L U2 L′ x′ d′ z",
          "y2 L U′ L′ U2 L U L′",
          "U2 l U′ R U l2 x′",
          "U2 R U R2 F R F′"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U2 R U R′ y",
        "solutions": [
          "l′ U l U2 l′ U′ l",
          "F R U2 R′ F′",
          "y U2 L U L′ U L U′ L′",
          "y L U′ L′ U2 L U L′",
          "y′ U2 R U R′ U R U′ R′",
          "U2 F U F2 L F L′",
          "U2 L′ U′ L F U F′",
          "R′ F R U2 R′ F′ R",
          "U2 F U F′ U F U′ F′",
          "U2 F R′ F R F2"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U2 R U R′ y2",
        "solutions": [
          "L U′ L′ U2 L U L′",
          "U2 L U L′ U L U′ L′",
          "l U′ L′ U2 L U l′",
          "L F U2 F′ L′",
          "U2 L F′ L F L2",
          "U2 R U′ L U L′ R′"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U2 R U R′ y′",
        "solutions": [
          "r′ U r U2 r′ U′ r",
          "y′ U2 L U L′ U L U′ L′",
          "U2 R′ U′ R S R f′ U′ F",
          "U f U R U′ R f′",
          "y U2 R U R′ U R U′ R′",
          "f U R2 U′ f′",
          "U2 f R f′ U f R′ f′",
          "y′ L U′ L′ U2 L U L′",
          "U2 x′ U L′ U L U2 x"
        ]
      }
    }
  },
  {
    "id": "F2L -22",
    "preview": "../previews/f2l-22.svg",
    "slots": {
      "FR": {
        "setup": "F′ L′ U2 L F",
        "solutions": [
          "r U′ r′ U2 r U r′",
          "F′ L′ U2 L F",
          "y′ U2 R′ U′ R U′ R′ U R",
          "y U2 L′ U′ L U′ L′ U L",
          "y′ R′ U R U2 R′ U′ R",
          "U2 F′ U′ F U′ F′ U F",
          "L F′ L′ U2 L F L′",
          "R2 U2 R2 F R F′ R U2 R2",
          "U2 F′ L F′ L′ F2",
          "y L′ U L U2 L′ U′ L",
          "F′ U F U2 F′ U′ F",
          "U′ d′ L′ U′ L U′ L′ U L",
          "y′ U2 R′ U′ R U2 R′ U2 R",
          "U2 F′ U′ F2 R′ F′ R",
          "d U R′ U′ R U′ R′ U R",
          "U2 y′ R′ U′ R U′ R′ U R",
          "y U2 r′ U L′ U′ r2 x′",
          "U2 R U R′ F′ U′ F"
        ]
      },
      "FL": {
        "setup": "F′ L′ U2 L F y",
        "solutions": [
          "L′ U L U2 L′ U′ L",
          "U2 L′ U′ L U′ L′ U L",
          "r′ U′ F2 U r",
          "U′ L′ U L U2 L′ U L U′ L′ U L",
          "L′ B′ U2 B L",
          "U2 R′ U L′ U′ L R",
          "U2 L′ U′ L2 F′ L′ F"
        ]
      },
      "BL": {
        "setup": "F′ L′ U2 L F y2",
        "solutions": [
          "l U′ l′ U2 l U l′",
          "f′ U′ L2 U f",
          "y R′ U R U2 R′ U′ R",
          "y U2 R′ U′ R U′ R′ U R",
          "U2 x′ U′ R U′ R′ U2 x"
        ]
      },
      "BR": {
        "setup": "F′ L′ U2 L F y′",
        "solutions": [
          "R′ U R U2 R′ U′ R",
          "U2 R′ U′ R U′ R′ U R",
          "R′ F′ U2 F R",
          "U′ R′ U R U2 R′ U R U′ R′ U R",
          "U2 R′ F R′ F′ R2",
          "U2 L′ U R′ U′ R L"
        ]
      }
    }
  },
  {
    "id": "F2L -23",
    "preview": "../previews/f2l-23.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U R U′ R′ U2 R U′ R′",
        "solutions": [
          "U R U′ R′ U′ R U′ R′ U R U′ R′",
          "R U R′ U2 R U R′ U′ R U R′",
          "U2 R2 U2 R′ U′ R U′ R2",
          "R U′ R2 D′ R U2 R′ D R",
          "U F R′ F′ R U R U R′",
          "R U R′ F′ U F R U R′",
          "U R U2 R′ U′ R U′ R′ U2 R U′ R′",
          "R U R′ U R U2 R′ U2 R U R′",
          "R U2 R′ U2 R U R′ U R U R′",
          "R′ U′ F′ U F R F′ U F",
          "R U′ R′ U′ R U R′ U2 R U R′",
          "y′ U R′ U R y′ U L U L′ U L U′ L′",
          "U2 R U R′ U′ R U′ R′ U2 R U′ R′",
          "F U R U′ R′ F′ U′ F′ U′ F",
          "d R′ U′ F′ U2 F R d′ R U2 R′",
          "R′ U′ R U′ R′ U2 R2 U2 R′",
          "U R′ F R F′ R U R′ U2 R U′ R′",
          "F′ U L′ U2 L U′ L′ U2 L F",
          "U F′ U′ L′ U L F2 R′ F′ R",
          "y2 U′ L′ U′ L U′ L′ U2 L2 U′ L′",
          "y F′ U′ L′ U L F L′ U L",
          "U R U′ R′ U′ F′ U′ F U2 R U′ R′",
          "R U2 R′ F′ U F U′ R U R′",
          "R U′ R′ d′ L′ U L U2 L′ U L",
          "y′ U R′ U R y U R U R′ U R U′ R′",
          "y L′ U′ L U′ L′ U2 L F U2 F′",
          "R B U B′ R′ U R U R′",
          "R U R′ U R d′ R U2 R′ F′",
          "y′ U R U R′ U R U2 R′ U f R f′",
          "F′ U2 F R U2 R′ U2 R U′ R′",
          "y′ U′ f R U R′ U′ f′ R′ U′ R",
          "U F′ U F U R U R′ U R U′ R′",
          "U y′ R′ U′ R U′ R′ U R U′ y R U′ R′",
          "R U2 R′ U R U′ R′ U′ R U R′",
          "R′ U′ y L′ U L F L′ U L",
          "R U2 R′ U′ R U′ R′ U R U R′ U2 R U′ R′",
          "U R U2 R′ U′ R U′ R′ U R′ F R F′",
          "R U R′ U R U2 R′ U2 R U2 R′ U′ R′ F R F′",
          "y U L′ U L U y′ R U R′ U R U′ R′",
          "y2 U2 L2 U2 L′ U′ L U′ L2",
          "y′ R′ U′ R y U′ R U′ R′ U R U′ R′",
          "R U′ R′ U R′ D′ R U R′ D R",
          "R′ U′ R U′ R′ U R2 U′ R2 U2 R",
          "U′ R′ U′ R U′ R′ U2 R2 U′ R′",
          "U R U R U2 R′ U′ R U′ R2",
          "U R U′ R′ U′ R U′ R2 F R F′",
          "r U2 r′ U′ r U2 r′ U r U2 r′",
          "R U′ R′ U R U2 R′ U R U R′"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U R U′ R′ U2 R U′ R′ y",
        "solutions": [
          "F′ U′ L′ U L F L′ U L",
          "F U′ R U R′ U R U2 R′ F′",
          "U L′ U′ L2 F′ L′ F L′ U L",
          "U′ F R U′ R′ F′ L′ U′ L",
          "y′ U R U′ R′ U′ R U′ R′ U R U′ R′",
          "F S′ R U′ R′ S U′ F′",
          "l′ U′ l U′ L′ U′ L U l′ U′ l",
          "R U2 R′ U′ R U′ R′ F U2 F′",
          "U′ F U R U′ R′ F′ L′ U′ L",
          "U2 L′ U′ L U L′ U L y U′ L U L′",
          "y U L U′ L′ U′ L U′ L′ U L U′ L′",
          "y L U L′ U2 L U L′ U′ L U L′",
          "U′ F R U′ R′ F′ r′ F′ r",
          "F U F′ U2 F U F′ U′ F U F′"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U R U′ R′ U2 R U′ R′ y2",
        "solutions": [
          "U L U′ L′ U′ L U′ L′ U L U′ L′",
          "L U L′ U2 L U L′ U′ L U L′",
          "L′ U′ L U′ L′ U2 L2 U2 L′",
          "U2 L2 U2 L′ U′ L U′ L2",
          "U′ L′ U′ L U′ L′ U2 L2 U′ L′",
          "U2 L′ U2 L U L′ U L2 U L′",
          "L U L′ U L U2 L′ U2 L U L′",
          "U2 R U R′ U R U2 R′ L U L′",
          "U2 L U L′ U′ L U′ L′ U2 L U′ L′",
          "L U L F′ L′ F U2 L′",
          "L F U F′ L′ U L U L′",
          "U2 R′ U′ R U′ B2 r′ U2 r",
          "U2 L R′ U′ R U′ R′ U2 L′ R",
          "U2 R′ U′ R U′ R′ L U2 L′ U2 R"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U R U′ R′ U2 R U′ R′ y′",
        "solutions": [
          "U R′ F R′ F′ R2 U′ R′ U R",
          "U2 l′ U′ L U′ L′ U2 B′ l",
          "R′ F′ U′ F U2 R U′ R′ U′ R",
          "U R′ U′ F′ U F R U′ R′ U R",
          "U′ f U R′ U′ f′ R′ U′ R",
          "y U R U′ R′ U′ R U′ R′ U R U′ R′",
          "R2 F R F′ U R U′ R′ U′ R",
          "U2 R′ U′ R U R′ U R y U′ R U R′",
          "U2 R′ F′ U′ F2 R′ F′ R2",
          "U2 R′ F′ r U′ r′ F2 U′ R",
          "U F U R U′ R′ F′ U2 R′ U′ R",
          "U R′ U′ R U′ R′ U R′ F R F′ R",
          "R′ U′ R U′ R′ U2 R U′ f R′ f′",
          "r′ U′ R U′ R′ U′ r U r′ U′ r",
          "y′ U L U′ L′ U′ L U′ L′ U L U′ L′",
          "y′ L U L′ U2 L U L′ U′ L U L′",
          "U R′ U′ R U′ R′ U R U′ B U′ B′",
          "r′ U′ R U M′ U R′ U′ R U R′ U′ R"
        ]
      }
    }
  },
  {
    "id": "F2L -24",
    "preview": "../previews/f2l-24.svg",
    "slots": {
      "FR": {
        "setup": "R U R′ F R U R′ U′ F′",
        "solutions": [
          "F U R U′ R′ F′ R U′ R′",
          "y′ R′ U′ R U2 R′ U′ R U R′ U′ R",
          "U′ R U R2 F R F′ R U′ R′",
          "y U′ L′ U L U L′ U L U′ L′ U L",
          "R U R′ U R U2 R′ y′ U R′ U R",
          "y′ U′ R′ U R U R′ U R U′ R′ U R",
          "y U′ F′ L F L′ U′ L′ U′ L",
          "R U′ R′ U r U′ R′ U R U r′",
          "U F′ L′ U L F R U R′",
          "S′ R U′ R′ S U2 R U R′",
          "y′ U R U R′ U R U2 R2 U R",
          "R U R′ U R U R′ U′ F R′ F′ R U",
          "F′ U′ F R U′ R′ F′ U′ F",
          "R U R′ U R U2 R′ U F′ U F",
          "r U R′ U R U2 r′ U2 R U R′",
          "y L′ U2 L U2 L′ U′ L U′ L′ U′ L",
          "U2 R U R′ U′ R U′ R′ y′ U R′ U′ R",
          "y′ R′ U′ R U′ R′ U2 R U2 R′ U′ R",
          "y′ R′ U2 R U′ R′ U R U R′ U′ R",
          "U F R′ F′ D′ R U R′ D R",
          "R U2 R′ y′ R′ U2 R U2 R′ U R",
          "y L′ U′ L U2 L′ U′ L U L′ U′ L",
          "y R′ F2 R U R′ F2 R U′ R′ F2 R",
          "y U2 L2 U2 L U L′ U L2",
          "R U2 R′ y L′ U2 L U2 L′ U L",
          "F′ U2 F R U′ R′ U F′ U′ F",
          "U′ R U′ R′ U′ y′ R′ U′ R U′ R′ U R",
          "y′ R′ U R U y R U′ R′ U′ R U2 R′",
          "y′ R′ U R U y R U′ R′ U2 R U′ R′",
          "R U R′ U R U2 R′ y′ R′ U2 R",
          "R U R′ U R U2 R′ d R′ U R",
          "R U2 R′ F′ U2 F U2 F′ U F",
          "y2 f R U R′ U′ f′ L U′ L′",
          "U F R′ F′ R2 U2 R′ U R U R′",
          "U′ F′ U F U F′ U F2 R′ F′ R",
          "U′ R U′ R′ U′ F′ U′ F U′ F′ U F",
          "U′ R U′ R′ U r U′ r′ U2 r U r′",
          "U′ R U′ R′ U′ y L′ U′ L U′ L′ U L",
          "U′ F′ U2 F U F′ U F U2 F′ U F",
          "r U r′ U R U R′ U′ r U r′",
          "R U R′ d R′ U R U′ R′ U R",
          "R U R′ U R U R′ U′ F R′ F′ R",
          "R U R′ U R U R′ U2 F′ U F",
          "y′ U2 R2 U2 R U R′ U R2",
          "F′ U L′ U′ L U′ L′ U2 L F",
          "F′ U′ F U2 F′ U′ F U F′ U′ F"
        ]
      },
      "FL": {
        "setup": "R U R′ F R U R′ U′ F′ y",
        "solutions": [
          "U′ L′ U L U L′ U L U′ L′ U L",
          "U′ F′ r U r′ U′ L′ U′ L",
          "L′ U L U L′ U′ L U2 L′ U′ L",
          "F U′ R U2 R′ U R U2 R′ F′",
          "U2 L2 U2 L U L′ U L2",
          "L′ U L2 D L′ U2 L D′ L′",
          "U2 R U R′ U R U2 R′ U′ L′ U L",
          "F U R U R′ U2 R U2 R′ F′",
          "L U L′ U L U2 L2 U2 L",
          "l′ U2 l U l′ U2 l U′ l′ U2 l",
          "U′ F′ L F L′ U′ L′ U′ L",
          "U′ L′ U L U L′ U L2 F′ L′ F",
          "U′ L′ U′ L′ U2 L U L′ U L2"
        ]
      },
      "BL": {
        "setup": "R U R′ F R U R′ U′ F′ y2",
        "solutions": [
          "U2 r U R′ U R U2 B r′",
          "U2 F U R U′ R′ F′ U2 L U′ L′",
          "y U′ R′ U R U R′ U R U′ R′ U R",
          "U2 F U R U′ R′ F′ U′ L U2 L′",
          "U2 L U L′ U′ L U′ L′ y′ U L′ U′ L",
          "U2 L F U F2 L F L2",
          "U f′ U′ L U f L U L′",
          "U′ L F′ L F L2 U L U′ L′",
          "U2 L F l′ U l F2 U L′",
          "y R′ U′ R U2 R′ U′ R U R′ U′ R",
          "U′ L U L′ U L U′ L′ f′ L2 f",
          "U′ L U L′ U L U′ L′ U f′ L f",
          "U′ L U L′ U L U′ L F′ L′ F L′",
          "L2 F′ L′ F U′ L′ U L U L′",
          "U′ F′ U′ L′ U L F U2 L U L′",
          "y′ U′ L′ U L U L′ U L U′ L′ U L"
        ]
      },
      "BR": {
        "setup": "R U R′ F R U R′ U′ F′ y′",
        "solutions": [
          "R′ U′ R U2 R′ U′ R U R′ U′ R",
          "U2 R2 U2 R U R′ U R2",
          "U′ R′ U R U R′ U R U′ R′ U R",
          "R U R′ U R U2 R2 U2 R",
          "U2 R U2 R′ U′ R U′ R2 U′ R",
          "U F U R U′ R′ S R2 f′",
          "R′ U′ R′ F R F′ U2 R",
          "R′ F′ U′ F R U′ R′ U′ R",
          "R′ U2 R U′ R′ U R U R′ U′ R"
        ]
      }
    }
  },
  {
    "id": "F2L -25",
    "preview": "../previews/f2l-25.svg",
    "slots": {
      "FR": {
        "setup": "F′ R U R′ U′ R′ F R",
        "solutions": [
          "U′ R′ F R F′ R U R′",
          "R′ F′ R U R U′ R′ F",
          "U′ F′ R U R′ U′ R′ F R",
          "U′ F′ U F U R U′ R′",
          "R U′ R′ U′ R U′ R′ U R U R′",
          "l′ U′ l U l F′ l′ F",
          "R′ U′ R′ U′ R′ U R U R",
          "y U′ L′ U′ L U y′ R U R′",
          "l′ U′ l U R U′ R′ F",
          "U2 R U R′ U2 R U2 R′ U2 R U′ R′",
          "y U′ L′ U L U F U′ F′",
          "U′ R U R′ U2 R U′ R′ U2 R U′ R′",
          "R F R′ U R U′ F′ R′",
          "U′ R U′ R′ U2 R U′ R′ U′ R U R′",
          "U2 R U2 R′ U R U′ R′ U2 R U′ R′",
          "y F U R U R′ U′ F′ U F R U R′ F′",
          "U2 R2 U R′ U R′ U′ R2 U′ R2",
          "R2 U R2 U R U′ R U′ R2",
          "R U R′ U′ l′ U′ l U2 R U′ R′ U′ l′ U l",
          "U′ F′ U′ F U R U R′",
          "y U′ L′ U L y′ U R U′ R′",
          "S R U R′ U′ S′ U R U′ R′",
          "R U R′ U2 R U R′ U2 R U′ R′",
          "y′ U′ R′ U R U y R U′ R′",
          "U′ F′ U F R′ F R F′",
          "F U2 r U′ r′ U2 F′",
          "y L U L′ F L U′ L′ F′",
          "d′ L′ U L d R U′ R′",
          "U2 R′ U′ R′ U′ R U R U R",
          "U′ M′ U R U′ M U R′",
          "y U′ L′ U L F′ L F L′",
          "U R U′ R′ U R U R′ U2 R U R′",
          "U′ y′ R′ U R U y R U′ R′",
          "U′ R F U R′ U′ R F′ R′"
        ]
      },
      "FL": {
        "setup": "F′ R U R′ U′ R′ F R y",
        "solutions": [
          "U′ L′ U L F′ r U r′",
          "U′ L′ U L d R U′ R′",
          "U′ L′ U L F′ L F L′",
          "U′ L′ U L y U L U′ L′",
          "U2 R′ E R U R′ E′ R",
          "U′ F U2 R U R′ U2 F′",
          "r′ E r U′ r′ E′ r",
          "R′ E R U′ R′ E′ R",
          "L′ S L U′ L′ S′ L",
          "U′ L′ U′ M U L U′ M′",
          "y L U′ L′ U′ L U′ L′ U L U L′",
          "U′ r′ F r F′ r U r′",
          "U′ L′ U L y′ U R U′ R′",
          "U R′ E R U2 R′ E′ R"
        ]
      },
      "BL": {
        "setup": "F′ R U R′ U′ R′ F R y2",
        "solutions": [
          "L U′ L′ U′ L U′ L′ U L U L′",
          "R D′ R′ U′ R D R′ L U L′",
          "U′ f′ L′ f U L U L′",
          "L′ U′ L′ U′ L′ U L U L",
          "U R′ E2 R U R′ E2 R",
          "L U2 L′ U L U2 L′ U2 L U′ L′",
          "r′ U′ r U r B′ r′ B",
          "r′ U′ r U r f′ u′ f",
          "U′ M U L U′ M′ U L′"
        ]
      },
      "BR": {
        "setup": "F′ R U R′ U′ R′ F R y′",
        "solutions": [
          "U′ R′ U M U′ R U M′",
          "R′ S′ R U′ R′ S R",
          "U′ R′ U R r′ U′ R U M′",
          "d′ R′ F R F′ R U R′",
          "U′ R′ U R d L U′ L′",
          "U2 F R2 U R2 U′ R2 F′",
          "U′ R′ U R U f R′ f′",
          "U′ R′ U R y′ U L U′ L′",
          "U R′ U2 R U2 y R U R′",
          "U′ R′ U′ R U f R f′",
          "U′ R′ U R f′ U f R′",
          "y′ L U′ L′ U′ L U′ L′ U L U L′",
          "U′ R′ U l U′ R U l′",
          "L′ E L U′ L′ E′ L",
          "L′ u′ U′ L U L′ u L",
          "U′ R′ U R y U R U′ R′"
        ]
      }
    }
  },
  {
    "id": "F2L -26",
    "preview": "../previews/f2l-26.svg",
    "slots": {
      "FR": {
        "setup": "F′ U′ F U R U R′ U′",
        "solutions": [
          "U R U′ R′ F R′ F′ R",
          "R S′ R′ U R S R′",
          "U R U R′ U′ y L′ U′ L",
          "U R U′ R′ U′ F′ U F",
          "F′ M′ U′ L′ U l F",
          "U R U′ R′ y U′ L′ U L",
          "U R U′ R′ F l′ U′ l",
          "U R U′ R′ U′ y′ R′ U R",
          "u r U r′ U′ r′ F r F′ u′",
          "U R U′ R′ U2 d R′ U R",
          "U R U′ R′ U′ r U′ r′ U r U r′",
          "y′ R′ U R U R′ U R U′ R′ U′ R",
          "R2 U R′ U′ R′ F R F′ R′",
          "y r U r′ U′ r′ F r F′",
          "U′ R U2 R′ U2 F′ U′ F",
          "F′ r U′ r′ F2 r U r′ U2 M′ U M U R U R′",
          "y U2 L′ U2 L U′ L′ U L U2 L′ U L",
          "y U F L′ U′ L U L F′ L′",
          "U R U R′ U′ y′ R′ U′ R",
          "R′ U′ R F′ R′ U R F",
          "y L U L U L U′ L′ U′ L′",
          "U R U R′ U′ F′ U′ F",
          "U R U′ R′ y′ U′ R′ U R",
          "U R U′ M′ U R′ U′ M",
          "U R U′ R′ U′ y L′ U L",
          "y U L F′ L′ F L′ U′ L",
          "U2 R S′ R′ U′ R S R′",
          "L E′ L′ U L E L′",
          "U2 r U M U2 M′ U r′",
          "U R U′ R′ d′ L′ U L"
        ]
      },
      "FL": {
        "setup": "F′ U′ F U R U R′ U′ y",
        "solutions": [
          "r U r′ U′ r′ F r F′",
          "U L F′ L′ F L′ U′ L",
          "U F L′ U′ L U L F′ L′",
          "U F r′ F′ r U r U′ r′",
          "L F L′ U′ L′ U L F′",
          "L′ U L U L′ U L U′ L′ U′ L",
          "U′ F U2 R U′ R′ U2 F′",
          "L U L U L U′ L′ U′ L′",
          "U F L′ U′ L U r U′ r′"
        ]
      },
      "BL": {
        "setup": "F′ U′ F U R U R′ U′ y2",
        "solutions": [
          "L S L′ U L S′ L′",
          "F R2 u R u′ R2 F′",
          "U L U′ M U L′ U′ M′",
          "U′ R u R′ U R U′ u′ R′",
          "U2 F′ L2 U′ L2 U L2 F",
          "U L U′ L′ d′ R′ U R",
          "U L U′ L′ y U′ R′ U R",
          "U L U′ L′ U′ f′ L f",
          "U L U′ L′ l U L′ U′ M′",
          "U L U′ L′ B L′ B′ L",
          "y′ L′ U L U L′ U L U′ L′ U′ L",
          "R E′ R′ U R E R′",
          "R u U R′ U′ R u′ R′",
          "U L U′ L′ y′ U′ L′ U L"
        ]
      },
      "BR": {
        "setup": "F′ U′ F U R U R′ U′ y′",
        "solutions": [
          "U f R f′ U′ R′ U′ R",
          "R′ U R U R′ U R U′ R′ U′ R",
          "R U R U R U′ R′ U′ R′",
          "U′ R S2 R′ U′ R S2 R′",
          "U2 R′ U2 F′ U2 F U2 R",
          "U R′ U R U R′ U′ R U′ R′ U′ R",
          "R′ U2 R U′ R′ U2 R U2 R′ U R",
          "U′ R U′ S R2 S′ R2 U R′",
          "U2 R′ U R2 U2 R2 U′ R2 U′ R′",
          "F R2 U R U′ R2 F′",
          "U R f′ U′ f R′ U′ R",
          "U f R′ f′ R f′ U′ f",
          "L′ D L U L′ D′ L R′ U′ R",
          "U′ R′ F′ U F U2 R U′ R′ U′ R",
          "l U l′ U′ l′ B l B′",
          "U2 R′ U R′ D′ R U2 R′ D R U′ R",
          "U M U′ R′ U M′ U′ R",
          "U R S2 R′ U R S2 R′"
        ]
      }
    }
  },
  {
    "id": "F2L -27",
    "preview": "../previews/f2l-27.svg",
    "slots": {
      "FR": {
        "setup": "R U R′ U′ R U R′",
        "solutions": [
          "R U′ R′ U R U′ R′",
          "F′ U′ F U2 R U′ R′",
          "y′ f R′ f′ U f R′ f′",
          "y′ f R′ f′ r′ U′ R U M′",
          "y L′ U′ L U2 F U′ F′",
          "R U′ R2 F R F′",
          "y′ R′ U′ R U2 f R′ f′",
          "y L′ U′ L U F′ L F L′",
          "F′ U2 F R U2 R′",
          "R U R′ U′ R U′ R′ U R U′ R′ U R U R′",
          "y2 L U′ L′ U L U′ L′",
          "y L′ U′ L y′ U2 R U′ R′",
          "y′ R′ U′ R U y U R U′ R′"
        ]
      },
      "FL": {
        "setup": "R U R′ U′ R U R′ y",
        "solutions": [
          "L′ U′ L U F′ r U r′",
          "L′ U′ L U F′ L F L′",
          "y′ R U′ R′ U R U′ R′",
          "U′ F R U2 R′ U F′",
          "F U′ F2 L F L′",
          "L′ U′ L U2 F U′ F′",
          "r′ F2 r U2 F′ r U r′",
          "y L U′ L′ U L U′ L′",
          "L′ U′ L d R′ F R F′"
        ]
      },
      "BL": {
        "setup": "R U R′ U′ R U R′ y2",
        "solutions": [
          "L U′ L′ U L U′ L′"
        ]
      },
      "BR": {
        "setup": "R U R′ U′ R U R′ y′",
        "solutions": [
          "R′ U2 R′ F R F′ R",
          "R′ U′ R U r′ U′ R U M′",
          "y R U′ R′ U R U′ R′",
          "R′ U′ R U f′ U f R′",
          "R′ U2 R U′ f R′ f′",
          "y′ L U′ L′ U L U′ L′",
          "y R U′ R2 F R F′"
        ]
      }
    }
  },
  {
    "id": "F2L -28",
    "preview": "../previews/f2l-28.svg",
    "slots": {
      "FR": {
        "setup": "R′ F R F′ U R U′ R′",
        "solutions": [
          "R U R′ U′ F R′ F′ R",
          "y L′ U L U′ L′ U L",
          "F′ U F U′ F′ U F",
          "y′ R′ U R U′ R′ U R",
          "U F′ L′ U2 L U′ F",
          "R U R′ U2 F′ U F",
          "R U2 R′ d R′ U R",
          "R U R′ U2 r U′ r′ U r U r′",
          "R U2 R′ F′ U2 F",
          "U R U R′ U2 r U′ R′ U R U r′",
          "R U R′ U2 y′ R′ U R",
          "R U2 R B′ R′ B R′",
          "R U R2 D′ r U′ r′ D R",
          "R U′ R′ F′ U F R U2 R′",
          "R U R′ U′ F l′ U′ l",
          "l F l′ U2 F′ U F",
          "y2 L U L′ U′ B L′ B′ L",
          "F′ U F2 l′ U′ l",
          "F′ U F2 R′ F′ R",
          "R′ F R F′ R U2 R′ U′ R U R′",
          "R U R′ U′ y′ U′ R′ U R",
          "R U R′ U2 F R′ F′ R2 U′ R′",
          "R U R′ d R′ U2 R",
          "y L′ U L2 F′ L′ F",
          "R U R′ U2 y L′ U L",
          "U2 l U′ R U R′ U′ R U l2 x′"
        ]
      },
      "FL": {
        "setup": "R′ F R F′ U R U′ R′ y",
        "solutions": [
          "L′ U L U′ L′ U L",
          "L′ U L2 F′ L′ F"
        ]
      },
      "BL": {
        "setup": "R′ F R F′ U R U′ R′ y2",
        "solutions": [
          "L U2 L F′ L′ F L′",
          "y R′ U R U′ R′ U R",
          "L U L′ U′ l U L′ U′ M′",
          "L U2 L′ U f′ L f",
          "L U L′ U2 L F U F′ L′",
          "r B r′ U′ R B r′ U′ M′",
          "U2 r U′ L U L′ U′ L U r2 x"
        ]
      },
      "BR": {
        "setup": "R′ F R F′ U R U′ R′ y′",
        "solutions": [
          "R′ U R U′ R′ U R"
        ]
      }
    }
  },
  {
    "id": "F2L -29",
    "preview": "../previews/f2l-29.svg",
    "slots": {
      "FR": {
        "setup": "F R′ F′ R F R′ F′ R",
        "solutions": [
          "R′ F R F′ U R U′ R′",
          "y L′ U′ L U L′ U′ L",
          "y′ R′ U′ R U R′ U′ R",
          "R′ F R F′ R′ F R F′",
          "M′ U R U′ R′ U R U′ r′",
          "M′ U R U′ r′ U R U′ R′",
          "F′ U′ F U F′ U′ F",
          "F R′ F′ R F R′ F′ R F R′ F′ R F R′ F′ R",
          "l′ U l F′ l′ U l F′",
          "R U R′ d′ L′ U2 L U L′ U′ L",
          "U R U R′ U2 F′ U2 F U′ F′ U F",
          "R U R′ U′ R U R′ U′ R U R′ U′ F R′ F′ R",
          "d R′ U2 R U2 R′ U′ R",
          "y U L′ U2 L U2 L′ U′ L",
          "U2 R U′ R′ y L′ U′ L",
          "x R′ U R U′ R′ U R U′ x′",
          "U2 R U′ R′ F′ U′ F",
          "U F′ U2 F U2 F′ U′ F"
        ]
      },
      "FL": {
        "setup": "F R′ F′ R F R′ F′ R y",
        "solutions": [
          "L′ U′ L U L′ U′ L",
          "U L′ U2 L U2 L′ U′ L",
          "U F′ L F L2 U′ L",
          "F′ L F L′ F′ L F L′"
        ]
      },
      "BL": {
        "setup": "F R′ F′ R F R′ F′ R y2",
        "solutions": [
          "y R′ U′ R U R′ U′ R",
          "U2 L U′ L′ f′ L′ f",
          "f′ L′ f U f′ L′ f",
          "x′ U′ F′ U F U′ F′ U x",
          "r′ U L U′ L′ U L U′ x"
        ]
      },
      "BR": {
        "setup": "F R′ F′ R F R′ F′ R y′",
        "solutions": [
          "R′ U′ R U R′ U′ R",
          "U R′ U2 R U2 R′ U′ R",
          "U f′ U f R2 U′ R"
        ]
      }
    }
  },
  {
    "id": "F2L -30",
    "preview": "../previews/f2l-30.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U R U′ R′",
        "solutions": [
          "R U R′ U′ R U R′",
          "U′ R U2 R′ U2 R U R′",
          "U′ F R′ F′ R2 U R′",
          "U2 F′ U F R U R′",
          "y L F′ L′ F L F′ L′ F",
          "y L F′ L′ F U′ L′ U L",
          "y′ U2 R′ U R f R f′",
          "U′ R d′ R U2 R′ F′",
          "F R′ F′ R U′ F′ U F",
          "y2 L U L′ U′ L U L′",
          "F′ R U2 R′ U′ R U R′ U2 R′ F R",
          "y U′ L′ U′ L U2 F U2 F′ U F U′ F′",
          "F R′ F′ R F R′ F′ R"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U R U′ R′ y",
        "solutions": [
          "L F′ L′ F U′ L′ U L",
          "y′ R U R′ U′ R U R′",
          "U′ F U′ R U2 R′ F′",
          "y L U L′ U′ L U L′",
          "r U′ r′ F U′ L′ U L",
          "r U′ r′ F r U′ r′ F",
          "L F′ L′ F L F′ L′ F",
          "M′ U′ L′ U L U′ L′ U l"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U R U′ R′ y2",
        "solutions": [
          "L U L′ U′ L U L′",
          "U′ L U2 L′ U2 L U L′"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U R U′ R′ y′",
        "solutions": [
          "y′ L U L′ U′ L U L′",
          "f R f′ U′ f R f′",
          "U2 R′ U R f R f′",
          "y R U R′ U′ R U R′",
          "l U′ R′ U R U′ R′ U x",
          "x′ U F U′ F′ U F U′ x",
          "U′ R′ F′ U′ F U2 R U′ R′ U R"
        ]
      }
    }
  },
  {
    "id": "F2L -31",
    "preview": "../previews/f2l-31.svg",
    "slots": {
      "FR": {
        "setup": "R U R′ F R′ F′ R U",
        "solutions": [
          "U′ R′ F R F′ R U′ R′",
          "R U′ R′ U y′ R′ U R",
          "F′ U F R U2 R′",
          "R U′ R′ U y L′ U L",
          "R U2 R′ U′ F R′ F′ R",
          "R U′ l U′ R′ U l′",
          "R U′ R′ F′ U2 F",
          "R U′ R′ U2 F R′ F′ R",
          "y r′ F r′ F r U′ r",
          "R U′ R′ U F′ U F",
          "R U2 R′ y U2 L′ U L",
          "F′ U2 F U2 R U′ R′",
          "R U′ R′ y′ R′ U2 R",
          "U R U2 R′ F′ U′ F",
          "R U′ R B′ R′ B R′",
          "S′ R U2 R′ S U′ R U R′",
          "U F R′ F′ R F R′ F′ R2 U′ R′",
          "U F R′ F′ R2 f R f′ R′",
          "R′ F R F′ U′ R U′ R2 F R F′",
          "y′ R′ U R′ F R F′ R",
          "R U2 R′ U2 y L′ U L",
          "R U R′ F′ U F U′ F′ U F",
          "y′ R′ U R y R U2 R′",
          "R′ D′ F′ R U2 R U2 R2 F R U2 R2 D R2",
          "R U2 R′ U2 F′ U F",
          "R U′ R′ d R′ U R",
          "U′ R′ F R F′ U′ R′ F R F′",
          "l F′ R U′ R′ U l′",
          "R U′ R′ y L′ U2 L"
        ]
      },
      "FL": {
        "setup": "R U R′ F R′ F′ R U y",
        "solutions": [
          "U L F′ L′ F L′ U L",
          "L′ U L U′ y L U′ L′",
          "L′ U L F U2 F′",
          "U′ F′ L F L′ F U′ F′",
          "L′ U L U2 F′ r U r′",
          "F U′ F R′ F′ R F′",
          "F U′ F′ L′ U2 L",
          "L′ U L U′ y′ R U′ R′"
        ]
      },
      "BL": {
        "setup": "R U R′ F R′ F′ R U y2",
        "solutions": [
          "L U′ L F′ L′ F L′",
          "f′ L f U′ L U′ L′",
          "B′ U B L U2 L′",
          "L U2 L′ U′ l U L′ U′ M′",
          "L U′ L′ y′ L′ U2 L",
          "L U′ L′ y′ U L′ U L",
          "L U′ L′ U2 B L′ B′ L",
          "U′ r′ U L U′ r U′ L′",
          "L U′ L′ f′ L2 f",
          "y R′ U R′ F R F′ R"
        ]
      },
      "BR": {
        "setup": "R U R′ F R′ F′ R U y′",
        "solutions": [
          "R′ U R′ F R F′ R",
          "R′ U R f R2 f′",
          "R′ U R y R U2 R′",
          "f R′ f′ U R′ U R",
          "R′ U R y′ L U2 L′",
          "R′ U R U′ y′ L U′ L′",
          "U′ R′ F′ U F U R U′ R′ U R",
          "U R f′ U′ f U R f′ U′ f",
          "U R f′ U′ f R′ U R",
          "R′ U R U′ y R U′ R′",
          "f R′ f′ R′ U2 R"
        ]
      }
    }
  },
  {
    "id": "F2L -32",
    "preview": "../previews/f2l-32.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U R U′ R′ U R U′ R′",
        "solutions": [
          "U R U′ R′ U R U′ R′ U R U′ R′",
          "R U R′ U′ R U R′ U′ R U R′",
          "R2 U R2 U R2 U2 R2",
          "U′ F R′ F′ R U′ R U R′",
          "y U2 F U′ R U R′ U F′",
          "U′ R U′ R′ U R U2 R′ U′ R U R′",
          "U2 F′ U L′ U′ L U′ F",
          "U R U R′ U′ R U2 R′ U R U′ R′",
          "y′ R′ U′ R U R′ U′ R U R′ U′ R",
          "y U L′ U′ L U L′ U′ L U′ L′ U L",
          "R′ F R F′ R′ F R F′ R′ F R F′",
          "U2 R′ U2 D′ R U R′ D U R",
          "U2 R U r′ U r U′ r′ U′ M′",
          "U y F′ L F L′ U L′ U′ L",
          "R U R′ U′ R U R′ U′ R U R′ U′",
          "U′ R U R′ U′ R U R′ U R U′ R′",
          "U R′ F R F′ d R′ U′ R",
          "y2 L U L′ U′ L U L′ U′ L U L′",
          "r U′ R2 U′ R U′ R′ U2 R2 U r′",
          "U2 R2 U2 R2 U′ R2 U′ R2",
          "R U2 R′ U′ y L′ U′ L U L′ U′ L U L′ U2 L U2 F U′ F′",
          "y L2 U′ L2 U′ L2 U2 L2",
          "F R′ F′ R2 U R′ U′ R U R′",
          "F2 U′ F2 U′ F2 U2 F2",
          "U′ r U r′ R′ F R F′ r U′ r′",
          "U2 R′ F R F2 r U′ r′ F2",
          "U R U′ R′ U R U′ R2 F R F′",
          "R U R′ U F′ U F R U R′",
          "U′ R U R′ U′ R U R2 F R F′",
          "U2 R′ F R F′ U2 r U′ r′ U2 r U r′",
          "R U′ R2 F2 r U r′ F R2 U R′",
          "U R′ U′ D′ R U R′ D R U′ R′ U R",
          "R U R′ U2 R U R′ U′ R U R′ U2 F′ U′ F U R U R′",
          "R U R′ U R U R′ U′ R U R′ F′ U′ F U R U R′",
          "y2 L2 U L2 U L2 U2 L2",
          "U R′ F R F′ U F′ U′ F",
          "U R U′ B U2 B′ U R′",
          "R U R′ U2 R U2 R′ U2 R U R′",
          "F R′ F′ R F R′ F′ R F R′ F′ R",
          "U R d′ R U2 R′ d R′",
          "U2 r U2 r′ U2 r U′ r′ U2 r U2 r′"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U R U′ R′ U R U′ R′ y",
        "solutions": [
          "U′ L′ U L U′ L′ U L U′ L′ U L",
          "U L′ U L U′ L′ U2 L U L′ U′ L",
          "U2 F U′ R U R′ U F′",
          "L′ U′ L U L′ U′ L U L′ U′ L"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U R U′ R′ U R U′ R′ y2",
        "solutions": [
          "L U L′ U′ L U L′ U′ L U L′",
          "U L U′ L′ U L U′ L′ U L U′ L′",
          "L2 U L2 U L2 U2 L2",
          "U′ L U′ L′ U L U2 L′ U′ L U L′"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U R U′ R′ U R U′ R′ y′",
        "solutions": [
          "U′ R′ U R U′ R′ U R U′ R′ U R",
          "R′ U′ R U R′ U′ R U R′ U′ R",
          "U2 f R′ U R U′ R f′",
          "R2 U′ R2 U′ R2 U2 R2",
          "y R U R′ U′ R U R′ U′ R U R′"
        ]
      }
    }
  },
  {
    "id": "F2L -33",
    "preview": "../previews/f2l-33.svg",
    "slots": {
      "FR": {
        "setup": "R U R′ U2 R U R′ U",
        "solutions": [
          "U′ R U′ R′ U2 R U′ R′",
          "y R′ D R U′ R′ D′ R",
          "R U R′ U′ R U′ R′ U R U′ R′",
          "U′ R U′ R′ U′ R U2 R′",
          "U y L′ U2 L U′ L′ U′ L",
          "U′ y L′ U′ L U2 L′ U′ L",
          "U′ R U′ R′ U R′ F R F′",
          "F′ U2 F R U2 R′ U R U′ R′ U R U′ R′ U F′ U′ F",
          "U′ F D F′ U F D′ F′",
          "y U′ L′ U′ L U2 L′ U′ L",
          "U′ F′ U′ F U2 F′ U′ F",
          "d′ L′ U′ L U2 L′ U′ L",
          "y2 U′ L U′ L′ U2 L U′ L′",
          "U L′ U2 L D′ L′ U L D L′ U L",
          "U R U′ R′ F′ R U R′ U′ R′ F R",
          "U R U′ R′ F′ U F U R U′ R′",
          "U r U′ r′ U r U r′ R U′ R′",
          "U R U R′ U R U R′ U2 R U′ R′",
          "U F′ U2 F U′ F′ U′ F",
          "d U2 R D R′ U R D′ R′",
          "U R U R′ U′ R U′ R′ U′ F′ U′ F U R U R′",
          "y U L′ U2 L U′ L′ U′ L",
          "y′ U R′ U2 R U′ R′ U′ R"
        ]
      },
      "FL": {
        "setup": "R U R′ U2 R U R′ U y",
        "solutions": [
          "R′ D R U′ R′ D′ R",
          "U L′ U2 L U′ L′ U′ L",
          "U′ L D L′ U L D′ L′",
          "U′ L′ U′ L U2 L′ U′ L",
          "U′ F U′ R U′ R′ U F′",
          "U L D L′ U′ L D′ L′"
        ]
      },
      "BL": {
        "setup": "R U R′ U2 R U R′ U y2",
        "solutions": [
          "U′ L U′ L′ U2 L U′ L′",
          "U′ L U′ L′ U′ L U2 L′",
          "D′ R D R′ U R D′ R′ D"
        ]
      },
      "BR": {
        "setup": "R U R′ U2 R U R′ U y′",
        "solutions": [
          "U′ R D R′ U R D′ R′",
          "U′ R′ U′ R U2 R′ U′ R",
          "U R′ U2 R U′ R′ U′ R",
          "U R D R′ U′ R D′ R′"
        ]
      }
    }
  },
  {
    "id": "F2L -34",
    "preview": "../previews/f2l-34.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U2 R U′ R′ U′",
        "solutions": [
          "U R U R′ U2 R U R′",
          "U′ R U2 R′ U R U R′",
          "U R′ D′ R U′ R′ D R",
          "y U L′ U L U2 L′ U L",
          "y′ U R′ U R U2 R′ U R",
          "U′ R′ D′ R U R′ D R",
          "L D′ L′ U L D L′",
          "U F′ U F U2 F′ U F",
          "y2 U′ L U2 L′ U L U L′",
          "U F′ U L′ U L U′ F",
          "U y L′ U L U′ L F′ L′ F",
          "d R′ U R U R′ U2 R",
          "R U R′ U2 y L′ U L U y′ R U′ R′",
          "U R U′ R′ U R U R′ U′ R U R′",
          "U′ R U2 R′ U′ r U′ r′ U′ r U r′",
          "U′ R U R′ U′ r U′ R′ U′ R U r′",
          "U r U2 r′ U2 r U r′ U2 r U2 r′",
          "R U′ R′ U2 R U2 R′ U′ R U′ R′ U2 R U R′",
          "d R′ U R U2 R′ U R",
          "U F′ U F U′ F R′ F′ R",
          "R U R′ U2 R′ F R F′ R U R′",
          "R U R′ U2 F′ U′ F U R U R′",
          "y′ R′ U′ R U R′ U R U′ R′ U R",
          "y L′ U′ L U L′ U L U′ L′ U L",
          "z′ y2 R U′ r′ F R′ F′ r U z′",
          "U F′ U F U F′ U2 F"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U2 R U′ R′ U′ y",
        "solutions": [
          "U L′ U L U2 L′ U L",
          "U L′ U L U L′ U2 L",
          "L′ U′ L U L′ U L U′ L′ U L"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U2 R U′ R′ U′ y2",
        "solutions": [
          "U L U L′ U2 L U L′",
          "U L′ D′ L U′ L′ D L",
          "U′ L U2 L′ U L U L′",
          "U2 R D′ R′ U′ R D R′",
          "U′ L′ D′ L U L′ D L"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U2 R U′ R′ U′ y′",
        "solutions": [
          "U R′ U R U R′ U2 R",
          "U f R2 U R2 U′ f′",
          "U R2 F R F′ R U′ R′ U R",
          "U R′ U R U2 R′ U R"
        ]
      }
    }
  },
  {
    "id": "F2L -35",
    "preview": "../previews/f2l-35.svg",
    "slots": {
      "FR": {
        "setup": "F′ U F U′ R U′ R′ U",
        "solutions": [
          "U′ R U R′ U F′ U′ F",
          "U′ R U R′ d R′ U′ R",
          "U2 R U R′ F R′ F′ R",
          "U2 R U R′ y′ U′ R′ U R",
          "U′ R U R′ U y′ R′ U′ R",
          "r′ D′ r U′ r′ D r U R U′ R′",
          "U2 R U′ R′ U′ F′ U′ F",
          "U M′ U R U′ r′ R U′ R′",
          "R U R2 F R F′ U R U′ R′",
          "U2 R U R′ U′ r U′ r′ U r U r′",
          "y′ U2 f R f′ U′ R′ U R",
          "U2 R U′ R′ U′ y′ R′ U′ R",
          "U2 R U l′ U R′ U′ l",
          "y U2 L F′ L′ F U2 L′ U′ L",
          "y2 U′ L F′ L F L′ U L′",
          "S′ R U2 R′ S R U2 R′ U R U′ R′",
          "U R U′ R′ U′ R U′ R′ U′ y L′ U L",
          "U R U′ R′ U′ R U′ R′ F R′ F′ R",
          "U2 r U′ r′ U r U2 R′ U′ R r′",
          "R U R2 F R F′ R′ F R F′",
          "R U′ R′ U2 y L′ U2 L U L′ U′ L",
          "F′ U′ F U′ y L′ U L U F U′ F′",
          "y L′ U′ L U′ y′ R′ F R F′ R U R′",
          "y L′ U′ L U′ L′ U L F′ L F L′",
          "y2 U′ L U L′ d L′ U′ L",
          "U′ R U R′ y′ U R′ U′ R",
          "U′ R U R′ U y L′ U′ L"
        ]
      },
      "FL": {
        "setup": "F′ U F U′ R U′ R′ U y",
        "solutions": [
          "U2 F U F′ U′ L′ U L",
          "U′ F R′ F R F′ U F′",
          "U2 L F′ L′ F U2 L′ U′ L",
          "U′ F U F′ U L′ U′ L",
          "L′ U L U y′ R U′ R′ U R U R′",
          "y′ U′ R U R′ d R′ U′ R",
          "L′ U′ L U′ L′ U L U y L U′ L′",
          "L′ U′ L U′ L′ U L y U L U′ L′",
          "L′ U′ L U′ L′ U L U F U′ F′",
          "y U′ L U L′ y U R′ U′ R"
        ]
      },
      "BL": {
        "setup": "F′ U F U′ R U′ R′ U y2",
        "solutions": [
          "U′ L U L′ U f′ L′ f",
          "U2 L U L′ U′ L F U F′ L′",
          "L U L′ y R′ U′ R U R′ U′ R",
          "U2 L U M U L′ U′ M′",
          "U′ L F′ L F L′ U L′",
          "U2 L U L′ U′ f′ L f",
          "U2 L U L′ y′ U′ L′ U L",
          "U2 r B r′ U′ L F U F′ L′",
          "U′ L U L′ d L′ U′ L",
          "U2 L U L′ l U L′ U′ M′",
          "U2 L U L′ y U′ R′ U R",
          "U2 L U′ L′ y U′ R′ U′ R",
          "U′ L U L′ y U R′ U′ R"
        ]
      },
      "BR": {
        "setup": "F′ U F U′ R U′ R′ U y′",
        "solutions": [
          "U′ f R f′ U R′ U′ R",
          "R′ F R′ F′ R U R U′ R′ U′ R",
          "U2 f R f′ U′ R′ U R",
          "U′ R′ F′ U F U′ R U R′ U′ R",
          "y U′ R U R′ U F′ U′ F",
          "l′ U R′ U′ l U R U′ R′ U′ R",
          "d′ R U R′ U y′ R′ U′ R",
          "y U′ R U R′ y′ U R′ U′ R",
          "y′ U2 L U′ L′ y U′ R′ U′ R",
          "U′ B U B′ U R′ U′ R",
          "y U′ R U R′ d R′ U′ R",
          "U R′ U′ M U R U′ R′ U′ r"
        ]
      }
    }
  },
  {
    "id": "F2L -36",
    "preview": "../previews/f2l-36.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U2 F R′ F′ R U2",
        "solutions": [
          "U F′ U′ F U′ R U R′",
          "U2 R′ F R F′ U2 R U R′",
          "R2 u R U R′ U′ u′ R′ U R′",
          "R U R′ U R U R′ U′ F′ U′ F",
          "R U R′ U R U′ R′ F R′ F′ R",
          "d R′ U′ R d′ R U R′",
          "R2 D r′ U r D′ R′ U R′",
          "U2 F′ U F U R U R′",
          "U y L′ U′ L U′ F U F′",
          "R U2 R′ y′ R′ U R U′ R′ U′ R",
          "U y L′ U′ L U′ y′ R U R′",
          "y U L′ U′ L U′ y′ R U R′",
          "d R′ U′ R U′ f R f′",
          "y′ U R′ U′ R U′ f R f′",
          "U F′ U′ F d′ F U F′",
          "U2 F′ U′ F U R U′ R′",
          "U2 y L′ U′ L U F U′ F′",
          "U2 y L′ U L U F U F′",
          "U2 y L′ U′ L F′ L F L′",
          "y U L′ U′ L y′ U′ R U R′",
          "y U′ M′ U′ L′ U l L′ U L",
          "d′ U′ L′ U L d R U R′",
          "U R U R′ U′ y′ R′ U2 R U2 R′ U R",
          "S′ R U2 R′ S U2 R U R′ U2 R U′ R′",
          "R U R′ U R U′ R′ d′ L′ U L",
          "U′ R U R′ y′ U2 R′ U′ R U2 R′ U R",
          "R U R′ U R U′ R′ U′ y L′ U L",
          "U′ R U R′ r U′ R′ U R U′ R′ U′ R U′ r′",
          "U′ R U R′ r U′ R′ U R U r′",
          "y U2 r′ F′ r U F U′ F′",
          "R U′ R′ d′ L′ U L U′ L′ U′ L",
          "R U R′ U R U′ R′ U′ F′ U F",
          "y′ U R′ U′ R d′ R U R′",
          "R U R′ U R U′ R′ y′ U′ R′ U R",
          "y′ U R′ U′ R U′ y R U R′",
          "F′ U′ F y U′ L′ U′ L U2 F U2 F′ U F U′ F′",
          "U R U′ R′ U2 R U R′ U′ F R′ F′ R",
          "y U L′ U′ L d′ L U L′",
          "R′ F R F′ U2 R U2 R′ U2 R U R′",
          "U F′ L F′ L′ F U′ F",
          "y′ U R′ U′ R y′ U′ L U L′",
          "U R U′ R′ U2 R U R′ U2 F′ U F",
          "U y′ R′ U′ R U′ y R U R′",
          "U y′ R′ U′ R y U′ R U R′"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U2 F R′ F′ R U2 y",
        "solutions": [
          "U L′ U′ L d′ L U L′",
          "U2 L′ U′ L F′ L F L′",
          "U L′ U′ L U′ F U F′",
          "U2 L′ U L U F U F′",
          "U2 L′ U′ L F′ r U r′",
          "U L′ U′ L y′ U′ R U R′",
          "U L′ U′ L U′ y′ R U R′",
          "U2 L′ U′ L U y L U′ L′",
          "U2 r′ F′ r F′ r U r′",
          "U′ F U R U′ R′ U′ F′ U L′ U L",
          "U′ M′ U′ L′ U l L′ U L",
          "U L′ U′ L y U′ L U L′"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U2 F R′ F′ R U2 y2",
        "solutions": [
          "U f′ L′ f U′ L U L′",
          "U2 f′ L′ f U L U′ L′",
          "L F′ L F L′ U′ L′ U L U L′",
          "y U R′ U′ R U′ f R f′",
          "y U2 R′ U R d L U L′",
          "y U R′ U′ R U′ y R U R′",
          "y U R′ U′ R U′ y′ L U L′",
          "y U R′ U′ R y′ U′ L U L′",
          "r U′ L U r′ U′ L′ U L U L′",
          "y U R′ F R′ F′ R U′ R",
          "U B′ U′ B U′ L U L′",
          "U′ L U M U′ L′ U L U l′",
          "U2 f′ L f U L U L′",
          "y′ U L′ U′ L U′ F U F′"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U2 F R′ F′ R U2 y′",
        "solutions": [
          "U R′ U′ R U′ f R f′",
          "U2 R′ U′ R U R′ F′ U′ F R",
          "U R′ U′ R y U′ R U R′",
          "U R′ U′ R U′ y R U R′",
          "U2 R′ U′ R U y R U′ R′",
          "U R′ U′ R U′ y′ L U L′",
          "U2 R′ U′ R U f R′ f′",
          "U2 R′ U′ R B′ R B R′",
          "U2 R′ U′ l U′ R U l′",
          "U R′ U′ R y′ U′ L U L′",
          "R′ F R′ F′ R2 U R′ U2 R",
          "U2 R′ U′ R y U R U′ R′",
          "U2 R′ U R U f R f′",
          "U R′ F R′ F′ R U′ R"
        ]
      }
    }
  },
  {
    "id": "F2L -37",
    "preview": "../previews/f2l-37.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R U2 F R2 F′ U2 R2",
        "solutions": [
          "R2 U2 F R2 F′ U2 R′ U R′",
          "R′ F R F′ R U′ R′ U R U′ R′ U2 R U′ R′",
          "R U2 R′ U R U2 R′ U F′ U′ F",
          "R U R′ U2 R U2 R′ U y′ R′ U′ R",
          "R U2 R′ U R U2 R′ U y′ R′ U′ R",
          "R′ F R F′ R′ U2 R2 U R2 U R",
          "R U′ R′ U y′ R′ U2 R U2 R′ U R",
          "R U′ R′ d R′ U2 R U2 R′ U R",
          "R U′ R′ U y′ R′ U2 R U R′ U2 R",
          "R U′ R′ y U L′ U2 L U2 L′ U L",
          "R U′ R′ r′ U2 R2 U R2 U r",
          "M′ U R U′ r′ R U′ R′ U R U′ R′ U2 R U′ R′",
          "F R U′ R′ r U2 r′ U r U′ r′ U2 F′",
          "R U′ R U2 F R2 F′ U2 R2",
          "L D R′ F R F′ R U′ R′ U D′ L′",
          "R U R′ U′ R U R′ U′ R U R′ U′ R U′ R′ F′ U2 F",
          "F′ U′ F U2 F′ U2 F U′ R U R′",
          "R′ F R F′ R U2 R′ U2 R U2 R′ U2 R U′ R′",
          "R U′ R′ F R′ F′ R U′ R U′ R′ F R′ F′ R",
          "D′ R U′ R′ D R′ U R U R′ U2 R2 U′ M′ U R′ U′ M",
          "R′ F R F′ d R′ U2 R d′ R U R′",
          "R U R′ U′ R U R′ U R′ F R F′ U R U′ R′",
          "S′ R U2 R′ S U R U2 R′ U2 R U′ R′",
          "R U′ R′ U F′ U2 F U′ F R′ F′ R",
          "F′ U′ F U R′ U2 R2 U R2 U R",
          "z M U′ M U2 M′ U′ M′ U′ M′ U2 M U′ z′",
          "D R U R′ F R′ F′ R D′ U L′ U L U′ L′ U L U′ L′ U L",
          "r U′ r′ R U R′ U r U′ r′ R U R′",
          "R U′ R′ U F′ U2 F U2 F′ U F",
          "D′ R U R′ F R′ F′ R D y R U R′ U′ R U R′ U′ R U R′ U′",
          "U R U′ R′ U R U′ R′ U R U R′ d U R′ U R",
          "F R′ F′ R U′ R U2 R′ d R′ U′ R",
          "y′ f R f′ U′ R U2 R2 U′ R2 U′ R′",
          "R U R′ U′ F′ U L′ U2 L U2 F",
          "R U R′ U′ R U R′ U′ R U R′ U′ R U2 R′ U2 F′ U F",
          "r U r′ U2 M′ U M F′ U′ F",
          "F′ U F U′ R U2 R′ U2 R U′ R′",
          "R U R′ U2 R U2 R′ U F′ U′ F",
          "R U R′ U′ R U R′ U′ R U R′ U′ R U2 R′ U′ F R′ F′ R",
          "R′ F R F2 U′ F U′ R U R′ U′ R U R′",
          "R U R′ U′ R U R′ U′ R U R′ U2 R′ F R F′ R U′ R′",
          "R U R′ U′ F′ U′ F U′ R U R′ U′ F′ U′ F",
          "F′ M′ F U′ M U′ M′ F′ M F",
          "y′ R′ U R f R U R2 U′ R f′",
          "y2 L U′ L′ l′ U2 L2 U L2 U l",
          "R′ F′ U2 R U R U′ R2 U2 R F",
          "F′ R′ U2 R2 U R′ U′ R′ U2 F R",
          "R′ F R F′ R U R′ U R′ F R F′ R U R′",
          "R U′ R′ U F′ U2 F U F′ U2 F",
          "R U′ R′ d R′ U2 R U R′ U2 R",
          "r R U R′ U′ r′ U2 R U R U′ R2"
        ]
      },
      "FL": {
        "setup": "R U′ R U2 F R2 F′ U2 R2 y",
        "solutions": [
          "L2 U2 F′ L2 F U2 L U′ L",
          "L′ U2 L U′ L′ U2 L U′ F U F′",
          "L′ U′ L U2 L′ U2 L U′ y′ R U R′",
          "R′ F R L′ U′ L U′ R′ F R L′ U′ L",
          "L′ U L U′ y′ R U2 R′ U′ R U2 R′",
          "F2 U R U′ R′ F′ U′ R U R′ U2 F′",
          "L F′ L′ F L′ U L U′ L′ U L U2 L′ U L",
          "L F′ L′ F L U2 L2 U′ L2 U′ L′",
          "L′ U L U′ y L U2 L′ U2 L U′ L′",
          "L′ U L U′ L F′ L′ F2 U2 F′ L′ U′ L",
          "L′ U2 L U′ L′ U2 L d′ L U L′",
          "F U′ F′ U L′ U2 L U2 L′ U L",
          "L′ U L l U2 L2 U′ L2 U′ l′",
          "L′ U L U′ y′ R U2 R′ U2 R U′ R′"
        ]
      },
      "BL": {
        "setup": "R U′ R U2 F R2 F′ U2 R2 y2",
        "solutions": [
          "L U′ L′ l′ U2 L2 U L2 U l",
          "f′ L f U′ L U2 L′ U2 L U′ L′",
          "L U2 L′ U L U2 L′ U f′ L′ f",
          "L′ f U f′ L′ U2 L2 U L2 U L",
          "L U′ L′ F′ L′ U′ L2 U L′ F",
          "L U2 L′ U L U2 L′ U y R′ U′ R",
          "y′ L′ U L U′ y L U2 L′ U2 L U′ L′",
          "L U′ L′ R′ F2 L2 F L2 F R",
          "L U′ L′ d L′ U2 L U2 L′ U L",
          "y′ L2 U2 F′ L2 F U2 L U′ L",
          "y2 R2 U2 F R2 F′ U2 R′ U R′",
          "y′ L F′ L′ F L U2 L2 U′ L2 U′ L′",
          "y R′ U R d′ R U2 R′ U2 R U′ R′"
        ]
      },
      "BR": {
        "setup": "R U′ R U2 F R2 F′ U2 R2 y′",
        "solutions": [
          "R′ U R r U2 R2 U′ R2 U′ r′",
          "R′ U2 R U′ R′ U2 R U′ f R f′",
          "R′ U R f R U R2 U′ R f′",
          "R′ U′ R U2 R′ U2 R U′ f R f′",
          "R′ U R F R U R2 U′ R F′",
          "R′ U R U′ y R U2 R′ U′ R U2 R′",
          "R′ U R U′ y R U2 R′ U2 R U′ R′",
          "R′ U R y U′ R U2 R′ U2 R U′ R′",
          "y R U2 R′ U R U2 R′ U y′ R′ U′ R",
          "f R′ f′ U R′ U2 R U R′ U2 R",
          "R U R′ E′ R U R′ F R′ F′ R u′ R U′ R′",
          "y R2 U2 F R2 F′ U2 R′ U R′",
          "R f′ U′ f R U2 R2 U′ R2 U′ R′",
          "R2 U2 B′ R2 B U2 R U′ R",
          "R′ U R d′ R U2 R′ U2 R U′ R′"
        ]
      }
    }
  },
  {
    "id": "F2L -38",
    "preview": "../previews/f2l-38.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U R U2 R′ U R U′ R′",
        "solutions": [
          "R U′ R′ U′ R U R′ U2 R U′ R′",
          "R U R′ U′ R U2 R′ U′ R U R′",
          "R2 U2 R′ U′ R U′ R′ U2 R′",
          "R U′ R′ U′ R U R′ U′ R U2 R′",
          "F′ L′ U2 L U′ L′ U2 L U′ F",
          "y F R U2 R′ U′ R U R′ U2 F′",
          "y L′ U′ L U2 L′ U L U′ L′ U′ L",
          "R U′ R′ U′ R U R′ U R′ F R F′",
          "F R′ F′ R2 U2 R′ U′ R U R′",
          "R U′ M′ U R′ U′ M U R U′ R′ U R U′ R′",
          "r R U2 R′ U′ R U′ r′ U2 R′",
          "y L′ U L U′ L′ U2 L2 F′ L′ F",
          "F′ U2 F′ U′ F U′ F′ U2 F2",
          "x z′ R U R′ U R U2 R′ L′ U′ L U′ L′ U2 L x′",
          "R U′ R′ U′ r U′ r′ U2 r U r′ R U2 R′",
          "R U2 B2 r′ U′ r B′ R2 F R F′",
          "R′ U′ F R F′ R′ U R F′ U′ F",
          "U R′ D′ R U′ R′ D R D′ R′ D R U R′ D′ R D"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U R U2 R′ U R U′ R′ y",
        "solutions": [
          "L′ U L U′ L′ U2 L U′ L′ U L",
          "F R U2 R′ U′ R U R′ U2 F′",
          "L′ U2 L′ U′ L U′ L′ U2 L2",
          "F U′ R U2 R′ U′ R U2 R′ F′"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U R U2 R′ U R U′ R′ y2",
        "solutions": [
          "L U L′ U′ L U2 L′ U′ L U L′",
          "L2 U2 L′ U′ L U′ L′ U2 L′",
          "L U′ L′ U′ L U L′ U′ L U2 L′",
          "L U′ L′ U′ L U L′ U2 L U′ L′",
          "L U2 L′ U2 L U2 L′ U′ L U L′",
          "L U2 R U2 R′ U′ R U′ R′ L′"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U R U2 R′ U R U′ R′ y′",
        "solutions": [
          "R′ U′ R U2 R′ U R U′ R′ U′ R",
          "R′ U R U′ R′ U2 R U′ R′ U R",
          "R′ U2 R′ U′ R U′ R′ U2 R2"
        ]
      }
    }
  },
  {
    "id": "F2L -39",
    "preview": "../previews/f2l-39.svg",
    "slots": {
      "FR": {
        "setup": "R U′ R′ U′ R U R′ U2 R U′ R′",
        "solutions": [
          "R U′ R′ U R U2 R′ U R U′ R′",
          "R U2 R U R′ U R U2 R2",
          "R U R′ U2 R U′ R′ U R U R′",
          "R U2 R′ U R U′ R′ U R U R′",
          "F′ L′ U2 L U L′ U′ L U2 F",
          "y F R U2 R′ U R U2 R′ U F′",
          "y F′ L F L2 U2 L U L′ U′ L",
          "R U r′ R U′ R′ U M′ U′ R U R′ U′ R U R′",
          "R U2 R′ r U′ r′ U r R′ U2 R U r′",
          "R U2 r U R′ U R U2 R′ r′",
          "R U R′ U2 R U′ r′ U R U R′ U′ R′ r",
          "y L′ U L U L′ U′ L U2 L′ U L",
          "R U R′ U′ R U R′ U′ R′ F R F′ R U R′",
          "R U2 R′ U R′ F R2 U R′ U′ R′ F′ R",
          "R U′ R′ U R U2 R2 F R F′",
          "R U R D r′ U r D′ R2 U2 R U R′",
          "R U R′ U′ R U R′ U′ F′ U′ F U R U R′",
          "S′ R F′ L F U L U′ L′ R′ S",
          "F′ U F U F′ U′ F U2 F′ U F",
          "y L′ U′ L U L′ U2 L U L′ U′ L",
          "U D′ R′ D R U′ R′ D′ R D R′ D′ R U R′ D R",
          "F′ U F U F′ U′ F U F′ U2 F"
        ]
      },
      "FL": {
        "setup": "R U′ R′ U′ R U R′ U2 R U′ R′ y",
        "solutions": [
          "L′ U′ L U L′ U2 L U L′ U′ L",
          "F′ L F L2 U2 L U L′ U′ L",
          "F U2 R U′ R′ U R U2 R′ F′",
          "L′ U L U L′ U′ L U2 L′ U L",
          "L2 U2 L U L′ U L U2 L"
        ]
      },
      "BL": {
        "setup": "R U′ R′ U′ R U R′ U2 R U′ R′ y2",
        "solutions": [
          "L U L′ U2 L U′ L′ U L U L′",
          "L U′ L′ U L U2 L′ U L U′ L′",
          "L U2 L′ U L U′ L′ U L U L′",
          "L U2 L U L′ U L U2 L2"
        ]
      },
      "BR": {
        "setup": "R U′ R′ U′ R U R′ U2 R U′ R′ y′",
        "solutions": [
          "R′ U′ R U R′ U2 R U R′ U′ R",
          "R′ U R U R′ U′ R U2 R′ U R",
          "f R2 U R′ U′ F R′ f′ U F′",
          "R2 U2 R U R′ U R U2 R"
        ]
      }
    }
  },
  {
    "id": "F2L -40",
    "preview": "../previews/f2l-40.svg",
    "slots": {
      "FR": {
        "setup": "R U R′ F U R U′ R′ F′ R U R′",
        "solutions": [
          "r U′ r′ U2 r U r′ R U R′",
          "F′ L′ U2 L F R U R′",
          "R U′ R′ F R U R′ U′ F′ R U′ R′",
          "R U′ R′ U′ R U′ R′ U y′ R′ U′ R",
          "R U′ R′ U′ R U′ R′ U F′ U′ F",
          "R F U R U′ R′ F′ U′ R′",
          "y F U′ F U R U′ R′ F2",
          "R U′ R′ d R′ U′ R U′ R′ U′ R",
          "r U′ r′ U2 r U M U R′",
          "y L′ U L U2 y L U L′ U L U′ L′",
          "F′ r′ F2 r F R U R′",
          "y′ R′ U′ R b′ U′ R′ U R b R′ U′ R",
          "L F′ L′ U2 L F L′ R U R′",
          "y L′ U L R′ F R U2 R′ F′ R",
          "y L′ U L F R U2 R′ F′",
          "R U′ R′ y′ U2 R′ U R U R′ U′ R",
          "R U R′ U′ F U R U′ R′ F′ R U′ R′",
          "R′ F R F2 U F U2 R U R′",
          "y L′ U L l′ U l U2 l′ U′ l",
          "R U2 R′ U R U R2 F R F′ R U′ R′",
          "r U′ r′ U2 r U r′ R U R′",
          "S′ R U2 R′ S R U R′ U R U′ R′",
          "R U′ R U B U′ B′ R2",
          "y′ R2 F′ U′ F U R U′ R",
          "R U R′ d′ L′ U2 L U2 L′ U′ L U′ L′ U′ L",
          "r U′ r′ U2 r U r′ R U R′ y",
          "F2 L F L2 U L U2 F",
          "y L′ U′ F′ L′ U′ L U F L",
          "y L′ U′ L U L′ U L U2 F U F′",
          "R U R′ U′ y U′ L′ U L U L′ U L U′ L′ U L",
          "y L′ U′ L U L′ U′ L U2 y′ R′ F R F′ R U R′",
          "R U R′ U′ R U R′ U R U R′ U F′ U2 F",
          "R′ F R F′ R U R′ U2 R U′ R′ U R U′ R′",
          "R′ F R F′ R U R′ U2 R U′ R2 F R F′",
          "F2 r U r′ F U2 R U R′",
          "y2 l U′ l′ U2 l U l′ L U L′",
          "R U′ R′ U′ R U′ R′ U y L′ U′ L",
          "R U′ R′ U′ R U′ R′ d R′ U′ R",
          "R U′ R′ y U L′ U′ L U′ L′ U′ L",
          "R U R′ U2 y L′ U L U L′ U L U′ L′ U L",
          "R U′ R′ U F′ U′ F U′ F′ U′ F",
          "F′ U F U2 R U R′ U R U′ R′",
          "R U′ R′ y′ U R′ U′ R U′ R′ U′ R"
        ]
      },
      "FL": {
        "setup": "R U R′ F U R U′ R′ F′ R U R′ y",
        "solutions": [
          "L′ U L F R U2 R′ F′",
          "L′ U L l′ U l U2 l′ U′ l",
          "L′ U L R′ F R U2 R′ F′ R",
          "L′ U L U2 y L U L′ U L U′ L′",
          "L′ U M′ U l U2 l′ U′ l",
          "F U2 R U R2 F R F2",
          "F U′ F U R U′ R′ F2"
        ]
      },
      "BL": {
        "setup": "R U R′ F U R U′ R′ F′ R U R′ y2",
        "solutions": [
          "l U′ l′ U2 l U l′ L U L′",
          "f′ L f U2 L U L′ U L U′ L′",
          "f′ L f U2 L U L′ U2 L U2 L′",
          "f′ L f L F U2 F′ L′",
          "L U′ L′ U′ L U′ L′ U f′ L′ f",
          "L U′ L U F U′ F′ L2",
          "L U′ L′ U′ L U′ L′ d L′ U′ L",
          "l U′ l′ U2 l U M′ U L′",
          "f′ U′ L2 U f L U L′",
          "B′ R′ U2 R B L U L′",
          "R B′ R′ U2 R B R′ L U L′",
          "y R′ U R U2 y R U R′ U R U′ R′"
        ]
      },
      "BR": {
        "setup": "R U R′ F U R U′ R′ F′ R U R′ y′",
        "solutions": [
          "R′ U R r′ U r U2 r′ U′ r",
          "R′ U R f U R2 U′ f′",
          "R2 F′ U′ F U R U′ R",
          "R′ F′ U2 F R f R f′",
          "R′ U R U2 y R U R′ U R U′ R′",
          "f R′ f′ U R′ U′ R U′ R′ U′ R",
          "R′ U R B L U2 L′ B′",
          "R′ U R L′ B L U2 L′ B′ L"
        ]
      }
    }
  },
  {
    "id": "F2L -41",
    "preview": "../previews/f2l-41.svg",
    "slots": {
      "FR": {
        "setup": "R F U R U′ R′ F′ U′ R′",
        "solutions": [
          "R U′ R′ r U′ r′ U2 r U r′",
          "R U′ R′ F′ L′ U2 L F",
          "R U R′ U′ y M U′ R′ F R U M′",
          "R U R′ U′ R U′ R′ U2 y′ R′ U′ R",
          "R U F R U R′ U′ F′ R′",
          "R U′ R′ U2 y′ R′ U′ R U′ R′ U R",
          "R U′ R′ L F′ L′ U2 L F L′",
          "R U′ M′ U′ r′ U2 r U r′",
          "R U R′ F U R U′ R′ F′ R U R′",
          "R U R′ M′ U R U′ r′ U′ R U R′",
          "R U′ R′ y U2 L′ U′ L U′ L′ U L",
          "R U R′ U′ R U′ R′ U2 F′ U′ F",
          "y L′ F′ U′ L′ U L F U L",
          "y R′ F R U2 R′ F′ R L′ U′ L",
          "y F R U2 R′ F′ L′ U′ L",
          "R U R′ U′ R U′ R′ U2 y L′ U′ L",
          "S′ R U2 R′ S R U′ R′ U′ R U R′",
          "R2 f R f′ U′ R′ U R′",
          "R U R′ U2 R U′ R′ y′ U2 R′ U2 R U2 R′ U R",
          "y L′ U L U L′ U L U′ y′ R U R′",
          "y L′ U L U L′ U L U′ F U F′",
          "F′ U F′ U′ L′ U L F2",
          "R B U2 B′ R′ F′ U′ F",
          "R U R′ d′ L′ U2 L U L′ U L U2 L′ U′ L",
          "y′ R′ U R′ U′ F′ U F R2",
          "F′ U F d R′ U R d′ R U R′",
          "R U R′ U′ R U R′ U2 R U R′ U′ F′ U′ F",
          "R′ F R F′ U R U′ R′ U′ R U′ R′ U R U′ R′",
          "y2 L U′ L′ l U′ l′ U2 l U l′",
          "y l′ U l U2 l′ U′ l L′ U′ L",
          "R U′ R′ U d R′ U′ R U′ R′ U R",
          "F R′ F′ R2 U′ R′ U2 y′ R′ U′ R",
          "y L′ U L y′ U′ R U R′ U R U R′",
          "R U′ R′ d U R′ U′ R U′ R′ U R",
          "y′ R′ U R U R′ U R U′ f R f′",
          "R U R′ F R U R′ U′ F′ U R U′ R′",
          "F′ U F U′ R U R′ U R U R′",
          "R U R′ U′ R U′ R′ U d R′ U′ R"
        ]
      },
      "FL": {
        "setup": "R F U R U′ R′ F′ U′ R′ y",
        "solutions": [
          "l′ U l U2 l′ U′ l L′ U′ L",
          "L′ U L U L′ U L U′ y′ R U R′",
          "F R U2 R′ F′ L′ U′ L",
          "R′ F R U2 R′ F′ R L′ U′ L",
          "L′ U L U L′ U L U′ F U F′",
          "F U′ R U′ R′ F′ U′ L′ U′ L",
          "L′ U L d′ L U L′ U L U L′",
          "F2 R U R′ U′ F′ U F′",
          "L′ U L F U′ R U R′ U2 F′",
          "L′ U L U L′ U L U′ y L U L′",
          "F2 R′ F′ R2 U′ R′ U2 F′"
        ]
      },
      "BL": {
        "setup": "R F U R U′ R′ F′ U′ R′ y2",
        "solutions": [
          "f′ L f U′ L U L′ U L U L′",
          "L2 F U F′ U′ L′ U L′",
          "L F U2 F′ L′ f′ L′ f",
          "L U′ L′ d′ U′ R′ U′ R U′ R′ U R",
          "L U′ L′ U2 y R′ U′ R U′ R′ U R",
          "L U′ L′ f′ U′ L2 U f",
          "L U′ L′ B′ R′ U2 R B",
          "L U′ L′ l U′ l′ U2 l U l′"
        ]
      },
      "BR": {
        "setup": "R F U R U′ R′ F′ U′ R′ y′",
        "solutions": [
          "r′ U r U2 r′ U′ r R′ U′ R",
          "R′ U R′ U′ F′ U F R2",
          "f R′ f′ U2 R′ U′ R U′ R′ U R",
          "f R′ f′ U2 R′ U′ R U2 R′ U2 R",
          "R′ U R U R′ U R U′ y R U R′",
          "R′ U R U R′ U R d′ R U R′",
          "R′ U R U R′ U R U′ f R f′",
          "B L U2 L′ B′ R′ U′ R",
          "f U R2 U′ f′ R′ U′ R"
        ]
      }
    }
  }
];

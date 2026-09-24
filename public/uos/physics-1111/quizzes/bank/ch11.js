window.QUIZ_BANK = [
  // ── MCQ 1–15 ──────────────────────────────────────────────────────────────
  {
    type: "mcq",
    q: "A heat engine is best described as:",
    options: [
      "A device that converts work entirely into heat",
      "A cyclic device that absorbs heat and converts part of it into work",
      "A device that transfers heat from cold to hot without doing work",
      "A device that stores heat energy in a reservoir"
    ],
    answer: 1,
    explanation: "A heat engine is a cyclic device that absorbs heat Q1 from a hot reservoir, converts part of it into work W, and rejects the remainder Q2 to a cold reservoir."
  },
  {
    type: "mcq",
    q: "In a heat engine operating over one complete cycle, the change in internal energy is:",
    options: ["Q1", "W", "Q1 − Q2", "0"],
    answer: 3,
    explanation: "After one complete cycle the system returns to its initial state. Since U is a state function, the net change is zero for any complete cycle."
  },
  {
    type: "mcq",
    q: "The thermal efficiency of a heat engine is defined as:",
    options: ["Q2 / Q1", "W / Q2", "W / Q1", "Q1 / W"],
    answer: 2,
    explanation: "Efficiency is the ratio of net work output to heat absorbed from the hot reservoir: eta = W/Q1."
  },
  {
    type: "mcq",
    q: "The efficiency of a heat engine can be written in terms of the heat quantities as:",
    options: [
      "1 + Q2/Q1",
      "1 − Q2/Q1",
      "Q2/Q1 − 1",
      "1 − Q1/Q2"
    ],
    answer: 1,
    explanation: "Since W = Q1 − Q2, dividing by Q1 gives eta = W/Q1 = 1 − Q2/Q1."
  },
  {
    type: "mcq",
    q: "The maximum possible thermal efficiency of any heat engine is:",
    options: [
      "100%, for a perfectly designed engine",
      "75%, set by the first law",
      "Always less than 100%",
      "50%, universal constant"
    ],
    answer: 2,
    explanation: "The second law (Kelvin–Planck) forbids converting heat entirely into work, so efficiency is always strictly less than 1."
  },
  {
    type: "mcq",
    q: "The Carnot cycle is composed of:",
    options: [
      "Two isothermal and two isochoric processes",
      "Two adiabatic and two isochoric processes",
      "Two isothermal and two adiabatic processes",
      "Four isothermal processes"
    ],
    answer: 2,
    explanation: "The four steps are: (1) isothermal expansion at T1, (2) adiabatic expansion, (3) isothermal compression at T2, (4) adiabatic compression."
  },
  {
    type: "mcq",
    q: "The Carnot efficiency is given by:",
    options: [
      "1 − T1/T2",
      "1 − T2/T1",
      "T2/T1",
      "T1/(T1 − T2)"
    ],
    answer: 1,
    explanation: "eta_C = 1 − T2/T1, where T1 is the hot-reservoir temperature and T2 is the cold-reservoir temperature (both in kelvin)."
  },
  {
    type: "mcq",
    q: "For a Carnot engine, the ratio of heat rejected to heat absorbed (Q2/Q1) equals:",
    options: ["W/Q1", "T1/T2", "T2/T1", "1 − T2/T1"],
    answer: 2,
    explanation: "Using the isothermal work formula and the adiabatic volume ratio VB/VA = VC/VD, it follows that Q2/Q1 = T2/T1."
  },
  {
    type: "mcq",
    q: "A Carnot engine operates between T1 = 500 K and T2 = 300 K. Its efficiency is:",
    options: ["25%", "30%", "40%", "60%"],
    answer: 2,
    explanation: "eta_C = 1 − T2/T1 = 1 − 300/500 = 0.40 = 40%."
  },
  {
    type: "mcq",
    q: "An engine absorbs Q1 = 2000 J and rejects Q2 = 1500 J per cycle. Its thermal efficiency is:",
    options: ["15%", "20%", "25%", "30%"],
    answer: 2,
    explanation: "W = Q1 − Q2 = 500 J. eta = W/Q1 = 500/2000 = 0.25 = 25%."
  },
  {
    type: "mcq",
    q: "Which of the following is the Kelvin–Planck statement of the second law?",
    options: [
      "Heat flows spontaneously from cold to hot",
      "No process is possible whose sole result is transfer of heat from a cold body to a hot body",
      "No process is possible whose sole result is the complete conversion of heat into work",
      "The entropy of the universe always decreases"
    ],
    answer: 2,
    explanation: "The Kelvin–Planck statement rules out a 100%-efficient engine: no cyclic process can convert all absorbed heat into work."
  },
  {
    type: "mcq",
    q: "The Clausius statement of the second law states that:",
    options: [
      "No engine can be 100% efficient",
      "No process is possible whose sole result is the transfer of heat from a cold body to a hot body",
      "Work can always be converted entirely into heat",
      "Entropy is conserved in all reversible processes"
    ],
    answer: 1,
    explanation: "The Clausius statement says spontaneous heat flow from cold to hot is impossible — a refrigerator always requires external work input."
  },
  {
    type: "mcq",
    q: "According to Carnot's theorem, the most efficient engine operating between two given reservoirs is:",
    options: [
      "Any engine using an ideal gas",
      "Any irreversible engine with large cylinders",
      "A reversible (Carnot) engine",
      "An engine with the largest working substance"
    ],
    answer: 2,
    explanation: "Carnot's theorem: no engine is more efficient than a reversible engine operating between the same two reservoirs."
  },
  {
    type: "mcq",
    q: "A power station operates between T1 = 800 K and T2 = 300 K. The maximum possible efficiency is:",
    options: ["37.5%", "50%", "62.5%", "75%"],
    answer: 2,
    explanation: "eta_C = 1 − T2/T1 = 1 − 300/800 = 0.625 = 62.5%."
  },
  {
    type: "mcq",
    q: "An engine claims 60% efficiency between reservoirs at T1 = 600 K and T2 = 300 K. This claim:",
    options: [
      "Is valid since 60% < 100%",
      "Is achievable for a reversible engine",
      "Violates the second law because the Carnot limit is 50%",
      "Is consistent with Carnot's theorem"
    ],
    answer: 2,
    explanation: "eta_C = 1 − 300/600 = 50%. No engine can exceed the Carnot efficiency, so a claimed 60% violates the second law."
  },

  // ── Fill 16–30 ────────────────────────────────────────────────────────────
  {
    type: "fill",
    q: "In a heat engine, heat absorbed from the hot reservoir is Q1 and heat rejected is Q2. The net work output W = ___ (in terms of Q1 and Q2).",
    answer: "Q1 - Q2",
    alt: ["Q1-Q2", "Q1 − Q2"],
    explanation: "By the first law over a complete cycle (delta U = 0): Q1 = W + Q2, so W = Q1 − Q2."
  },
  {
    type: "fill",
    q: "The thermal efficiency eta = W/Q1 can also be written as 1 − ___",
    answer: "Q2/Q1",
    alt: [],
    explanation: "Since W = Q1 − Q2, dividing by Q1 gives eta = 1 − Q2/Q1."
  },
  {
    type: "fill",
    q: "For a Carnot engine, the ratio Q2/Q1 = ___",
    answer: "T2/T1",
    alt: [],
    explanation: "Using the isothermal work formula and the adiabatic volume ratio VB/VA = VC/VD, it follows that Q2/Q1 = T2/T1."
  },
  {
    type: "fill",
    q: "The Carnot efficiency eta_C = ___",
    answer: "1 - T2/T1",
    alt: ["1-T2/T1"],
    explanation: "eta_C = 1 − Q2/Q1 = 1 − T2/T1, which depends only on the reservoir temperatures."
  },
  {
    type: "fill",
    q: "An engine absorbs Q1 = 2000 J and rejects Q2 = 1500 J per cycle. The net work output is ___ J.",
    answer: "500",
    alt: [],
    explanation: "W = Q1 − Q2 = 2000 − 1500 = 500 J."
  },
  {
    type: "fill",
    q: "An engine absorbs Q1 = 2000 J and rejects Q2 = 1500 J per cycle. Its thermal efficiency is ___ %.",
    answer: "25",
    alt: [],
    explanation: "eta = W/Q1 = 500/2000 = 0.25 = 25%."
  },
  {
    type: "fill",
    q: "A Carnot engine operates between T1 = 500 K and T2 = 300 K. Its efficiency is ___ %.",
    answer: "40",
    alt: [],
    explanation: "eta_C = 1 − T2/T1 = 1 − 300/500 = 0.40 = 40%."
  },
  {
    type: "fill",
    q: "For any complete thermodynamic cycle, the net change in internal energy delta U = ___",
    answer: "0",
    alt: [],
    explanation: "U is a state function. After one complete cycle the system returns to its initial state, so delta U = 0."
  },
  {
    type: "fill",
    q: "The Carnot cycle consists of ___ steps (two isothermal and two adiabatic).",
    answer: "4",
    alt: ["four"],
    explanation: "Isothermal expansion → adiabatic expansion → isothermal compression → adiabatic compression: four steps."
  },
  {
    type: "fill",
    q: "In the Carnot cycle, the first step is an isothermal ___ at temperature T1 in which the gas absorbs heat Q1.",
    answer: "expansion",
    alt: [],
    explanation: "The gas absorbs heat Q1 from the hot reservoir and expands isothermally at T1 (step A→B)."
  },
  {
    type: "fill",
    q: "From the two adiabatic steps of the Carnot cycle, the volume ratio satisfies VB/VA = ___",
    answer: "VC/VD",
    alt: ["Vc/Vd"],
    explanation: "Dividing T1*VB^(gamma-1) = T2*VC^(gamma-1) by T1*VA^(gamma-1) = T2*VD^(gamma-1) gives VB/VA = VC/VD."
  },
  {
    type: "fill",
    q: "A Carnot engine operates between T1 = 800 K and T2 = 300 K. Its maximum efficiency is ___ %.",
    answer: "62.5",
    alt: [],
    explanation: "eta_C = 1 − T2/T1 = 1 − 300/800 = 0.625 = 62.5%."
  },
  {
    type: "fill",
    q: "The Kelvin–Planck statement of the second law rules out the complete conversion of ___ into work.",
    answer: "heat",
    alt: [],
    explanation: "The Kelvin–Planck statement: no cyclic process can have as its sole result the conversion of heat entirely into work."
  },
  {
    type: "fill",
    q: "Carnot's theorem states that all reversible engines operating between the same two reservoirs have the ___ efficiency.",
    answer: "same",
    alt: [],
    explanation: "All reversible (Carnot) engines between the same two reservoirs are equally efficient, achieving eta_C = 1 − T2/T1."
  },
  {
    type: "fill",
    q: "An engine claims 60% efficiency between reservoirs at T1 = 600 K and T2 = 300 K. The Carnot limit for these reservoirs is ___ %.",
    answer: "50",
    alt: [],
    explanation: "eta_C = 1 − T2/T1 = 1 − 300/600 = 0.50 = 50%. The claimed 60% exceeds this limit, violating the second law."
  }
];

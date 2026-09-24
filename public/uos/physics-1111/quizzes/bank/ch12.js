window.QUIZ_BANK = [
  // ── MCQ 1–15 ──────────────────────────────────────────────────────────────
  {
    type: "mcq",
    q: "A refrigerator is best described as:",
    options: [
      "A cyclic device that converts work entirely into heat",
      "A cyclic device that uses external work to transfer heat from cold to hot",
      "A device that converts heat into work, running between two reservoirs",
      "A device that stores cold energy in a reservoir"
    ],
    answer: 1,
    explanation: "A refrigerator is a heat engine run in reverse: external work W is supplied, heat Q2 is absorbed from the cold reservoir, and heat Q1 = Q2 + W is rejected to the hot reservoir."
  },
  {
    type: "mcq",
    q: "For a refrigerator absorbing Q2 from the cold reservoir and receiving work W, the heat rejected to the hot reservoir Q1 equals:",
    options: ["Q2 − W", "W − Q2", "Q2 + W", "Q2 / W"],
    answer: 2,
    explanation: "By energy conservation over one cycle (delta U = 0): Q1 = Q2 + W."
  },
  {
    type: "mcq",
    q: "The coefficient of performance of a refrigerator (COP_R) is defined as:",
    options: ["W / Q2", "Q2 / W", "Q1 / W", "W / Q1"],
    answer: 1,
    explanation: "COP_R = Q2/W: the useful cooling effect (Q2) per unit of work supplied."
  },
  {
    type: "mcq",
    q: "The coefficient of performance of a heat pump (COP_HP) relates to COP_R by:",
    options: [
      "COP_HP = COP_R − 1",
      "COP_HP = COP_R",
      "COP_HP = COP_R + 1",
      "COP_HP = 1 / COP_R"
    ],
    answer: 2,
    explanation: "COP_HP = Q1/W = (Q2 + W)/W = Q2/W + 1 = COP_R + 1."
  },
  {
    type: "mcq",
    q: "Unlike thermal efficiency, the coefficient of performance of a refrigerator:",
    options: [
      "Must always be less than 1",
      "Must always equal 1",
      "Can exceed 1",
      "Is always equal to the Carnot efficiency"
    ],
    answer: 2,
    explanation: "COP_R = Q2/W can be greater than 1 — for every joule of work supplied, more than one joule of heat can be extracted from the cold reservoir."
  },
  {
    type: "mcq",
    q: "The Carnot COP for a refrigerator operating between T1 and T2 (T1 > T2) is:",
    options: [
      "T1 / (T1 − T2)",
      "T2 / (T1 − T2)",
      "T2 / T1",
      "(T1 − T2) / T2"
    ],
    answer: 1,
    explanation: "Using Q2/Q1 = T2/T1 for a Carnot device: COP_R = Q2/W = Q2/(Q1 − Q2) = T2/(T1 − T2)."
  },
  {
    type: "mcq",
    q: "A Carnot refrigerator operates between T1 = 300 K and T2 = 270 K. Its COP is:",
    options: ["3", "6", "9", "12"],
    answer: 2,
    explanation: "COP_R = T2/(T1 − T2) = 270/(300 − 270) = 270/30 = 9."
  },
  {
    type: "mcq",
    q: "Which of the following is NOT a source of irreversibility in a real process?",
    options: [
      "Friction between moving surfaces",
      "Quasi-static compression of an ideal gas",
      "Heat flow across a finite temperature difference",
      "Free expansion of a gas into a vacuum"
    ],
    answer: 1,
    explanation: "A quasi-static compression carried out slowly through equilibrium states with no friction is a reversible process. The other three are standard sources of irreversibility."
  },
  {
    type: "mcq",
    q: "The Clausius definition of entropy change for a reversible process is:",
    options: [
      "dS = T dQ_rev",
      "dS = dQ_rev / T",
      "dS = dW / T",
      "dS = dU / T"
    ],
    answer: 1,
    explanation: "dS = dQ_rev / T, where dQ_rev is the heat absorbed reversibly at temperature T."
  },
  {
    type: "mcq",
    q: "Entropy is a:",
    options: [
      "Path function, like heat and work",
      "State function, like internal energy",
      "State function only for reversible processes",
      "Path function only for isothermal processes"
    ],
    answer: 1,
    explanation: "Entropy S is a state function — its value depends only on the current state of the system, not on how that state was reached."
  },
  {
    type: "mcq",
    q: "The second law of thermodynamics in terms of entropy states that for any process in an isolated system:",
    options: [
      "Delta S_universe = 0",
      "Delta S_universe < 0",
      "Delta S_universe >= 0",
      "Delta S_universe <= 0"
    ],
    answer: 2,
    explanation: "The entropy of the universe never decreases: delta S_universe >= 0, with equality only for reversible processes."
  },
  {
    type: "mcq",
    q: "The entropy change for a reversible adiabatic (isentropic) process is:",
    options: ["nR ln(V2/V1)", "nCv ln(T2/T1)", "0", "Q/T"],
    answer: 2,
    explanation: "In a reversible adiabatic process dQ_rev = 0 throughout, so dS = dQ_rev/T = 0 and the total entropy change is zero."
  },
  {
    type: "mcq",
    q: "The entropy change of an ideal gas expanding isothermally from V1 to V2 is:",
    options: [
      "nCv ln(V2/V1)",
      "nCp ln(V2/V1)",
      "nR ln(V2/V1)",
      "nR ln(T2/T1)"
    ],
    answer: 2,
    explanation: "At constant T, the heat absorbed is Q = nRT ln(V2/V1), so delta S = Q/T = nR ln(V2/V1)."
  },
  {
    type: "mcq",
    q: "The Boltzmann entropy formula is:",
    options: [
      "S = kB / W",
      "S = kB ln W",
      "S = W ln kB",
      "S = R ln W"
    ],
    answer: 1,
    explanation: "S = kB ln W, where kB is Boltzmann's constant and W is the number of microstates consistent with the macroscopic state."
  },
  {
    type: "mcq",
    q: "When 100 J of heat flows from a body at 400 K to a body at 300 K, the entropy change of the universe is approximately:",
    options: ["+0.083 J/K", "−0.083 J/K", "0", "+0.25 J/K"],
    answer: 0,
    explanation: "delta S_hot = −100/400 = −0.25 J/K; delta S_cold = +100/300 ≈ +0.333 J/K; delta S_universe = +0.083 J/K > 0, confirming the process is irreversible."
  },

  // ── Fill 16–30 ────────────────────────────────────────────────────────────
  {
    type: "fill",
    q: "In a refrigerator, heat Q2 is absorbed from the cold reservoir and external work W is supplied. The heat rejected to the hot reservoir Q1 = ___",
    answer: "Q2 + W",
    alt: ["Q2+W", "W + Q2", "W+Q2"],
    explanation: "Energy conservation over one cycle (delta U = 0) gives Q1 = Q2 + W."
  },
  {
    type: "fill",
    q: "The coefficient of performance of a refrigerator COP_R = Q2/W = Q2 / ___",
    answer: "Q1 - Q2",
    alt: ["Q1-Q2"],
    explanation: "Since W = Q1 − Q2, we have COP_R = Q2/W = Q2/(Q1 − Q2)."
  },
  {
    type: "fill",
    q: "The coefficient of performance of a heat pump equals COP_R + ___",
    answer: "1",
    alt: [],
    explanation: "COP_HP = Q1/W = (Q2 + W)/W = Q2/W + 1 = COP_R + 1."
  },
  {
    type: "fill",
    q: "For a Carnot refrigerator operating between T1 (hot) and T2 (cold), COP_R = T2 / ___",
    answer: "T1 - T2",
    alt: ["T1-T2"],
    explanation: "Using Q2/Q1 = T2/T1 for a Carnot device: COP_R = Q2/(Q1 − Q2) = T2/(T1 − T2)."
  },
  {
    type: "fill",
    q: "A Carnot refrigerator operates between T1 = 300 K and T2 = 270 K. Its coefficient of performance is ___",
    answer: "9",
    alt: [],
    explanation: "COP_R = T2/(T1 − T2) = 270/(300 − 270) = 270/30 = 9. For every 1 J of work supplied, 9 J of heat is extracted from the cold reservoir."
  },
  {
    type: "fill",
    q: "The Clausius definition of entropy change for a reversible process: dS = dQ_rev / ___",
    answer: "T",
    alt: [],
    explanation: "dS = dQ_rev/T, where T is the absolute temperature at which heat dQ_rev is absorbed reversibly."
  },
  {
    type: "fill",
    q: "The entropy change for a reversible adiabatic (isentropic) process is ___",
    answer: "0",
    alt: [],
    explanation: "In a reversible adiabatic process no heat is exchanged (dQ_rev = 0), so dS = 0 throughout."
  },
  {
    type: "fill",
    q: "The entropy change for isothermal expansion of an ideal gas is delta S = nR ln(___)",
    answer: "V2/V1",
    alt: [],
    explanation: "The heat absorbed isothermally is Q = nRT ln(V2/V1), giving delta S = Q/T = nR ln(V2/V1)."
  },
  {
    type: "fill",
    q: "The entropy change for heating an ideal gas at constant pressure is delta S = nCp ln(___)",
    answer: "T2/T1",
    alt: [],
    explanation: "At constant pressure dQ = nCp dT, so delta S = integral(nCp dT/T) = nCp ln(T2/T1)."
  },
  {
    type: "fill",
    q: "The second law (entropy form) states: for any process in an isolated system, delta S_universe ≥ 0, with equality if and only if the process is ___",
    answer: "reversible",
    alt: [],
    explanation: "Irreversible processes always increase the entropy of the universe; only a reversible process leaves it unchanged (delta S_universe = 0)."
  },
  {
    type: "fill",
    q: "The Boltzmann entropy formula is S = kB ln ___ (where the blank is the number of microstates).",
    answer: "W",
    alt: [],
    explanation: "S = kB ln W, where W (sometimes written Omega) is the number of microstates consistent with the macroscopic state of the system."
  },
  {
    type: "fill",
    q: "One mole of an ideal gas expands isothermally at 300 K from V1 = 2 L to V2 = 4 L. The entropy change is approximately ___ J/K.",
    answer: "5.76",
    alt: ["5.8"],
    explanation: "delta S = nR ln(V2/V1) = (1)(8.314) ln 2 = 8.314 × 0.693 ≈ 5.76 J/K."
  },
  {
    type: "fill",
    q: "When 100 J of heat flows out of a body at 400 K, the entropy change of that body is ___ J/K.",
    answer: "-0.25",
    alt: ["-1/4"],
    explanation: "delta S_hot = −Q/T = −100/400 = −0.25 J/K. The hot body loses entropy as it loses heat."
  },
  {
    type: "fill",
    q: "When 100 J of heat flows into a body at 300 K, the entropy change of that body is approximately ___ J/K.",
    answer: "0.333",
    alt: ["1/3", "0.33"],
    explanation: "delta S_cold = +Q/T = +100/300 ≈ 0.333 J/K. The cold body gains entropy as it absorbs heat."
  },
  {
    type: "fill",
    q: "When 100 J of heat flows from a body at 400 K to a body at 300 K, the net entropy change of the universe is approximately ___ J/K.",
    answer: "0.083",
    alt: ["0.0833", "1/12"],
    explanation: "delta S_universe = delta S_cold + delta S_hot = +100/300 − 100/400 = 0.333 − 0.25 = +0.083 J/K > 0, confirming the process is irreversible."
  }
];

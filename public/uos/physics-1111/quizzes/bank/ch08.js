window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "The Zeroth Law of Thermodynamics states that:",
    options: [
      "Heat always flows from a cold body to a hot body",
      "The entropy of an isolated system never decreases",
      "If bodies A and B are each in thermal equilibrium with body C, then A and B are in thermal equilibrium with each other",
      "The internal energy of an isolated system is constant"
    ],
    answer: 2,
    explanation: "The Zeroth Law defines thermal equilibrium transitively. It establishes that temperature is a well-defined state variable: all bodies in mutual thermal equilibrium share the same temperature. Without this law, temperature measurements with thermometers would have no logical foundation."
  },

  {
    type: "mcq",
    q: "The primary significance of the Zeroth Law is that it allows us to define:",
    options: [
      "Heat as a form of energy",
      "Temperature as a well-defined state variable",
      "Entropy as a measure of disorder",
      "Work as a path-dependent quantity"
    ],
    answer: 1,
    explanation: "The Zeroth Law justifies the concept of temperature: if two bodies are in equilibrium with a third (the thermometer), they are at the same temperature. This is why a thermometer works — the reading is a meaningful property of the system, independent of how the equilibrium was reached."
  },

  {
    type: "mcq",
    q: "In the first law ΔU = Q − W, the sign convention Q > 0 means:",
    options: [
      "Heat leaves the system",
      "Heat is absorbed by the system",
      "Work is done on the system",
      "Internal energy decreases"
    ],
    answer: 1,
    explanation: "Q > 0 means the system absorbs heat from its surroundings; Q < 0 means the system releases heat. This convention treats the system as the reference: positive Q is energy entering as heat. Separately, W > 0 means the system does work on the surroundings (e.g. an expanding gas pushes a piston)."
  },

  {
    type: "mcq",
    q: "In the first law ΔU = Q − W, the sign convention W > 0 means:",
    options: [
      "Work is done on the system by the surroundings",
      "The system's internal energy decreases",
      "Heat is added to the system",
      "Work is done by the system on its surroundings"
    ],
    answer: 3,
    explanation: "W > 0 when the system does work on its surroundings (e.g. an expanding gas pushing a piston). This work leaves the system, hence the minus sign in ΔU = Q − W. If the surroundings compress the gas, W < 0 and that work adds to the internal energy."
  },

  {
    type: "mcq",
    q: "Which of the following is a state function (depends only on the current state, not on the path taken)?",
    options: [
      "Heat Q",
      "Work W",
      "Both Q and W",
      "Internal energy U"
    ],
    answer: 3,
    explanation: "Internal energy U is a state function: for a given thermodynamic state (T, P, V) U has a unique value regardless of how the state was reached. Heat Q and work W are path functions — their values depend on the process used. ΔU is path-independent, but Q and W individually are not."
  },

  {
    type: "mcq",
    q: "Joule's free-expansion experiment showed that, for an ideal gas, the internal energy U:",
    options: [
      "Depends on both temperature and volume",
      "Depends on both temperature and pressure",
      "Depends only on temperature",
      "Is always constant regardless of temperature"
    ],
    answer: 2,
    explanation: "In free expansion into a vacuum Q = 0 and W = 0, so ΔU = 0. Joule found that the temperature also did not change, confirming U = U(T) only for an ideal gas. Real gases show a small temperature change because intermolecular interactions make U depend weakly on volume."
  },

  {
    type: "mcq",
    q: "The molar specific heat at constant pressure Cp is greater than Cv because at constant pressure:",
    options: [
      "The gas molecules move faster",
      "There is more friction between molecules",
      "The heat supplied must also do work pΔV pushing the surroundings outward",
      "The gas absorbs more heat at the same rate"
    ],
    answer: 2,
    explanation: "At constant volume all supplied heat goes into raising U. At constant pressure the gas expands, doing extra work pΔV on the surroundings. To achieve the same ΔT (same ΔU), more heat must be supplied — exactly R more per mole per kelvin, as Mayer's relation shows."
  },

  {
    type: "mcq",
    q: "Mayer's relation for any ideal gas states:",
    options: [
      "Cp + Cv = R",
      "Cp × Cv = R",
      "Cp / Cv = R",
      "Cp − Cv = R"
    ],
    answer: 3,
    explanation: "Cp − Cv = R. The proof: at constant pressure dQ = dU + p dV = nCv dT + nR dT (using the ideal-gas law), so Cp = Cv + R. The universal gas constant R = 8.314 J/mol·K is exactly the extra energy per mole per kelvin needed to do the expansion work."
  },

  {
    type: "mcq",
    q: "A monatomic ideal gas (e.g. He, Ar) has how many active degrees of freedom?",
    options: [
      "f = 2",
      "f = 3",
      "f = 5",
      "f = 6"
    ],
    answer: 1,
    explanation: "A monatomic gas has three translational degrees of freedom (motion in x, y, z) and negligible rotational or vibrational contributions. By the equipartition theorem, each degree of freedom contributes ½RT per mole to U, giving U = 3/2 nRT for a monatomic gas."
  },

  {
    type: "mcq",
    q: "A diatomic ideal gas (e.g. N₂, O₂) at moderate temperatures has how many active degrees of freedom?",
    options: [
      "f = 3",
      "f = 4",
      "f = 5",
      "f = 6"
    ],
    answer: 2,
    explanation: "At moderate temperatures a diatomic molecule has three translational and two rotational degrees of freedom (rotation about the two axes perpendicular to the bond). Vibration is not excited until much higher temperatures. This gives f = 5 and U = 5/2 nRT."
  },

  {
    type: "mcq",
    q: "The ratio of specific heats γ = Cp/Cv for a monatomic ideal gas is approximately:",
    options: [
      "γ = 1.20",
      "γ = 1.33",
      "γ = 1.40",
      "γ = 1.67"
    ],
    answer: 3,
    explanation: "For a monatomic gas, Cv = 3/2 R and Cp = 5/2 R, so γ = (5/2 R)/(3/2 R) = 5/3 ≈ 1.67. The value of γ appears in the adiabatic equation pVγ = constant and in the speed of sound v = √(γP/ρ). Noble gases (He, Ar, Ne) all have γ ≈ 1.67."
  },

  {
    type: "mcq",
    q: "The ratio γ = Cp/Cv for a diatomic ideal gas at moderate temperatures is:",
    options: [
      "γ = 1.20",
      "γ = 1.33",
      "γ = 1.40",
      "γ = 1.67"
    ],
    answer: 2,
    explanation: "For a diatomic gas, Cv = 5/2 R and Cp = 7/2 R, so γ = 7/5 = 1.40. Air (≈ 80% N₂ and 20% O₂) is diatomic and has γ ≈ 1.40, which is why γ = 1.4 is a common default value in engineering thermodynamics problems."
  },

  {
    type: "mcq",
    q: "For any ideal gas, the ratio γ = Cp/Cv is always:",
    options: [
      "Equal to 1",
      "Less than 1",
      "Greater than 1",
      "Equal to R/Cv"
    ],
    answer: 2,
    explanation: "γ > 1 always because Cp = Cv + R and R > 0, so Cp > Cv, making their ratio exceed 1. Option D gives R/Cv, which equals γ − 1 (not γ itself). The value of γ decreases toward 1 as the number of degrees of freedom increases, but never actually reaches 1."
  },

  {
    type: "mcq",
    q: "A gas absorbs 500 J of heat and its internal energy increases by 300 J. The work done by the gas is:",
    options: [
      "W = 800 J",
      "W = −200 J",
      "W = 200 J",
      "W = 300 J"
    ],
    answer: 2,
    explanation: "From ΔU = Q − W: W = Q − ΔU = 500 − 300 = 200 J. The gas absorbed 500 J but only 300 J raised its internal energy; the remaining 200 J was spent doing work (e.g. expanding against a piston). Option A adds instead of subtracts; option B gives the wrong sign."
  },

  {
    type: "mcq",
    q: "Two moles of a monatomic ideal gas (Cp = 5/2 R, R = 8.314 J/mol·K) are heated at constant pressure from 300 K to 400 K. The heat absorbed Q is approximately:",
    options: [
      "Q ≈ 2494 J",
      "Q ≈ 1663 J",
      "Q ≈ 4157 J",
      "Q ≈ 8314 J"
    ],
    answer: 2,
    explanation: "Q = nCpΔT = 2 × (5/2 × 8.314) × 100 = 5 × 8.314 × 100 = 4157 J. Option A is ΔU = nCvΔT = 2494 J; option B is W = nRΔT = 1663 J. The three quantities satisfy ΔU = Q − W: 2494 = 4157 − 1663 ✓."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The first law of thermodynamics states that ΔU = ___.",
    answer: "Q - W",
    alt: ["Q-W", "Q − W"],
    explanation: "ΔU = Q − W: the change in internal energy equals heat absorbed minus work done by the system. It is the thermodynamic statement of energy conservation. ΔU is path-independent (state function), while Q and W individually depend on the process."
  },

  {
    type: "fill",
    q: "For n moles of a monatomic ideal gas, the internal energy is U = ___.",
    answer: "3/2 nRT",
    alt: ["(3/2)nRT", "3nRT/2", "3*n*R*T/2", "(3/2)*n*R*T"],
    explanation: "U = 3/2 nRT. A monatomic gas has f = 3 translational degrees of freedom, each contributing ½RT per mole via the equipartition theorem: U = (f/2)nRT = 3/2 nRT. The internal energy depends only on T — not on V or P."
  },

  {
    type: "fill",
    q: "For n moles of a diatomic ideal gas at moderate temperatures, the internal energy is U = ___.",
    answer: "5/2 nRT",
    alt: ["(5/2)nRT", "5nRT/2", "5*n*R*T/2", "(5/2)*n*R*T"],
    explanation: "U = 5/2 nRT. A diatomic molecule has f = 5 active degrees of freedom (3 translational + 2 rotational) at moderate temperatures. Vibrational modes are not excited until high temperatures, so the factor is 5/2, not 7/2."
  },

  {
    type: "fill",
    q: "At constant volume (dV = 0) no work is done, so the first law reduces to dQ = ___.",
    answer: "dU",
    alt: ["deltaU", "delta U"],
    explanation: "At constant volume W = ∫p dV = 0, so all the heat goes directly into raising the internal energy: dQ = dU. This is why Cv measures the rate of change of U with T: Cv = (1/n)(dQ/dT)_V = (1/n)(dU/dT)."
  },

  {
    type: "fill",
    q: "Mayer's relation states that for any ideal gas, Cp − Cv = ___.",
    answer: "R",
    alt: [],
    explanation: "Cp − Cv = R. At constant pressure the gas must do extra work p dV = nR dT per mole as it expands. This work costs R more per mole per kelvin compared to the constant-volume case, hence Cp exceeds Cv by exactly the universal gas constant R = 8.314 J/mol·K."
  },

  {
    type: "fill",
    q: "The ratio of specific heats is defined as γ = ___.",
    answer: "Cp/Cv",
    alt: ["cp/cv"],
    explanation: "γ = Cp/Cv > 1 always (since Cp = Cv + R > Cv). It appears in the adiabatic equation pVγ = constant, in the speed of sound, and in isentropic flow. Its value encodes the molecular structure: γ = 5/3 (monatomic), 7/5 (diatomic), 4/3 (polyatomic)."
  },

  {
    type: "fill",
    q: "For a monatomic ideal gas, the molar specific heat at constant volume is Cv = ___.",
    answer: "3/2 R",
    alt: ["3R/2", "(3/2)R", "1.5R", "1.5*R"],
    explanation: "Cv = 3/2 R for a monatomic gas. From U = 3/2 nRT, Cv = (1/n)(dU/dT) = 3/2 R. Numerically Cv ≈ 12.47 J/mol·K. This is the minimum possible Cv for any ideal gas — more degrees of freedom always increase Cv."
  },

  {
    type: "fill",
    q: "For a monatomic ideal gas, the molar specific heat at constant pressure is Cp = ___.",
    answer: "5/2 R",
    alt: ["5R/2", "(5/2)R", "2.5R", "2.5*R"],
    explanation: "Cp = Cv + R = 3/2 R + R = 5/2 R. The extra R accounts for the work done by the gas expanding at constant pressure. This value (≈ 20.79 J/mol·K) equals Cv of a diatomic gas — a useful coincidence to remember."
  },

  {
    type: "fill",
    q: "The ratio of specific heats for a monatomic ideal gas is γ = ___.",
    answer: "5/3",
    alt: ["1.67", "1.667", "5/3"],
    explanation: "γ = Cp/Cv = (5/2 R)/(3/2 R) = 5/3 ≈ 1.67. All noble gases (He, Ne, Ar, Kr, Xe) have γ ≈ 1.67 because they are monatomic. This large γ means monatomic gases respond more dramatically to adiabatic compression."
  },

  {
    type: "fill",
    q: "For a diatomic ideal gas at moderate temperatures, the molar specific heat at constant volume is Cv = ___.",
    answer: "5/2 R",
    alt: ["5R/2", "(5/2)R", "2.5R"],
    explanation: "Cv = 5/2 R for a diatomic gas (f = 5). This equals Cp for a monatomic gas, which helps to remember the table: each row's Cp matches the next row's Cv. Numerically Cv ≈ 20.79 J/mol·K for diatomic gases like N₂ and O₂."
  },

  {
    type: "fill",
    q: "For a diatomic ideal gas at moderate temperatures, the molar specific heat at constant pressure is Cp = ___.",
    answer: "7/2 R",
    alt: ["7R/2", "(7/2)R", "3.5R"],
    explanation: "Cp = Cv + R = 5/2 R + R = 7/2 R ≈ 29.1 J/mol·K. For air at room temperature Cp ≈ 29 J/mol·K, consistent with the diatomic ideal-gas model. Deviations appear at very low temperatures (vibrational freeze-out) and high temperatures (vibrational excitation)."
  },

  {
    type: "fill",
    q: "The ratio of specific heats for a diatomic ideal gas at moderate temperatures is γ = ___.",
    answer: "7/5",
    alt: ["1.4", "1.40", "7/5"],
    explanation: "γ = 7/5 = 1.40 for a diatomic gas. Air is ≈ 99% diatomic (N₂ + O₂) so γ = 1.4 is used in virtually all engineering calculations involving air — speed of sound, adiabatic compression, jet engine thermodynamics."
  },

  {
    type: "fill",
    q: "The ratio of specific heats for a polyatomic ideal gas (f = 6) is γ = ___.",
    answer: "4/3",
    alt: ["1.33", "1.333", "4/3"],
    explanation: "γ = Cp/Cv = 4R/3R = 4/3 ≈ 1.33 for a polyatomic gas with f = 6 (e.g. CO₂, H₂O vapour). More degrees of freedom mean a larger fraction of added energy is stored internally, leaving less 'extra' for pressure work — so γ is closer to 1."
  },

  {
    type: "fill",
    q: "In terms of the number of active degrees of freedom f, the ratio γ can be written as γ = ___.",
    answer: "1 + 2/f",
    alt: ["1+2/f", "(f+2)/f"],
    explanation: "From Cv = f/2 R and Cp = Cv + R = (f+2)/2 R: γ = Cp/Cv = (f+2)/f = 1 + 2/f. For f = 3: γ = 5/3; f = 5: γ = 7/5; f = 6: γ = 4/3. As f → ∞, γ → 1 — a body with infinite internal degrees of freedom would show no difference between Cp and Cv."
  },

  {
    type: "fill",
    q: "A gas absorbs Q = 500 J of heat and does W = 200 J of work on the surroundings. The change in internal energy ΔU = ___ J.",
    answer: "300",
    alt: ["300.0"],
    explanation: "ΔU = Q − W = 500 − 200 = 300 J. The gas gained 500 J as heat but spent 200 J doing work, leaving a net gain of 300 J in internal energy. This is a direct application of the first law — a straightforward energy accounting."
  }

];

window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "An isothermal process is one in which:",
    options: [
      "Pressure remains constant throughout",
      "No heat enters or leaves the system",
      "Temperature remains constant throughout",
      "Volume remains constant throughout"
    ],
    answer: 2,
    explanation: "Isothermal means constant temperature (ΔT = 0). For an ideal gas U = U(T), so ΔU = 0 as well. The process requires the system to stay in thermal contact with a reservoir that absorbs or supplies heat to maintain constant T."
  },

  {
    type: "mcq",
    q: "For an ideal gas undergoing an isothermal process, which statement is correct?",
    options: [
      "Internal energy increases as the gas expands",
      "ΔU = 0, so all heat absorbed is converted entirely into work",
      "Q = 0 because temperature is constant",
      "Work done is always zero"
    ],
    answer: 1,
    explanation: "Since ΔU = 0, the first law gives Q = W. Every joule of heat absorbed from the reservoir is converted into work by the expanding gas. Option C confuses isothermal (ΔT = 0) with adiabatic (Q = 0); option D is wrong because the gas can still expand and do work."
  },

  {
    type: "mcq",
    q: "On a p–V diagram, an isothermal process for an ideal gas traces:",
    options: [
      "A straight horizontal line (constant pressure)",
      "A straight vertical line (constant volume)",
      "A straight diagonal line",
      "A hyperbola (pV = constant)"
    ],
    answer: 3,
    explanation: "Since T is constant and pV = nRT, the product pV is constant — a hyperbola on the p-V diagram. Higher isotherms (higher T) correspond to hyperbolas further from the origin. Compression moves along the hyperbola to smaller V and larger p."
  },

  {
    type: "mcq",
    q: "The work done by an ideal gas expanding isothermally from volume V₁ to V₂ at temperature T is:",
    options: [
      "W = nRT(V₂ − V₁)",
      "W = nRT ln(V₂/V₁)",
      "W = nCv(T₂ − T₁)",
      "W = p(V₂ − V₁)"
    ],
    answer: 1,
    explanation: "W = ∫p dV = ∫(nRT/V) dV = nRT ln(V₂/V₁). The logarithm arises because pressure varies as 1/V along the isotherm. Options A and D apply to constant-pressure processes; option C is the adiabatic work formula."
  },

  {
    type: "mcq",
    q: "An adiabatic process is one in which:",
    options: [
      "Temperature remains constant",
      "Pressure remains constant",
      "Volume remains constant",
      "No heat is exchanged between the system and its surroundings"
    ],
    answer: 3,
    explanation: "Adiabatic means Q = 0 — no heat transfer. This can be achieved either by perfect thermal insulation or by performing the process so rapidly that heat has no time to flow. The temperature of the gas does change during an adiabatic process."
  },

  {
    type: "mcq",
    q: "An adiabatic process can be realised in practice by:",
    options: [
      "Very slow compression in a thermally conducting container",
      "Maintaining the system in contact with a large heat reservoir",
      "Using good thermal insulation or performing the process very rapidly",
      "Keeping pressure constant"
    ],
    answer: 2,
    explanation: "Two approaches work: (1) thermally insulate the system so Q = 0 at any speed, or (2) act so quickly that heat has no time to transfer — the timescale of the process is much shorter than the thermal relaxation time. Sound propagation and diesel compression are examples of the rapid-process route."
  },

  {
    type: "mcq",
    q: "The equation of state for a reversible adiabatic process on an ideal gas is:",
    options: [
      "pV = constant",
      "pV^γ = constant",
      "p/V = constant",
      "TV = constant"
    ],
    answer: 1,
    explanation: "pV^γ = constant, where γ = Cp/Cv > 1. The exponent γ > 1 makes the adiabatic curve steeper than the isothermal (pV = constant). This equation is derived from the first law (dU = −p dV) combined with the ideal-gas law and the definition of Cv."
  },

  {
    type: "mcq",
    q: "Which relation also holds for a reversible adiabatic process on an ideal gas?",
    options: [
      "TV = constant",
      "TV^γ = constant",
      "TV^(γ−1) = constant",
      "T/V = constant"
    ],
    answer: 2,
    explanation: "TV^(γ−1) = constant follows from pV^γ = constant combined with pV = nRT. Eliminating p gives T V^(γ−1) = constant. For adiabatic compression (V decreases) the temperature increases — the gas heats up because work is done on it with no heat escape."
  },

  {
    type: "mcq",
    q: "When a gas is compressed adiabatically, its temperature:",
    options: [
      "Stays the same, as in any reversible process",
      "Decreases, because the gas does work on the piston",
      "Increases, because work is done on the gas and it cannot release heat",
      "Decreases only if the gas is monatomic"
    ],
    answer: 2,
    explanation: "In adiabatic compression Q = 0, so ΔU = −W. The piston does positive work on the gas (W < 0 for surroundings, W_on > 0), increasing U and hence T. This is why an air pump gets warm and why diesel engines can ignite fuel through compression alone."
  },

  {
    type: "mcq",
    q: "At the same point (p, V) on a p–V diagram, the slope of the adiabatic curve compared with the isothermal is:",
    options: [
      "Shallower by a factor of γ",
      "The same steepness",
      "Steeper by a factor of γ",
      "Steeper by a factor of γ²"
    ],
    answer: 2,
    explanation: "(dp/dV)_iso = −p/V and (dp/dV)_adi = −γp/V. Since γ > 1, the adiabatic slope is γ times more negative — steeper. For air (γ = 1.4) the adiabatic curve drops about 40% faster than the isothermal at the same point."
  },

  {
    type: "mcq",
    q: "The physical reason the adiabatic curve is steeper than the isothermal on a p–V diagram is that:",
    options: [
      "The adiabatic process is always irreversible",
      "During adiabatic compression no heat escapes, so the temperature rises and the pressure increases more rapidly than it would if temperature were held constant",
      "The isothermal process involves more internal energy change",
      "γ is less than 1 for all ideal gases"
    ],
    answer: 1,
    explanation: "During isothermal compression the temperature stays fixed (heat is dumped to the reservoir), so pressure grows only as 1/V. During adiabatic compression the temperature also rises (no heat loss), boosting the pressure by an extra factor related to γ — hence the steeper curve."
  },

  {
    type: "mcq",
    q: "The work done by a gas in a reversible adiabatic process, expressed in terms of pressures and volumes, is:",
    options: [
      "W = (p₁V₁ + p₂V₂) / (γ − 1)",
      "W = (p₂V₂ − p₁V₁) / (γ − 1)",
      "W = (p₁V₁ − p₂V₂) / (γ − 1)",
      "W = (p₁ − p₂)(V₁ − V₂) / (γ − 1)"
    ],
    answer: 2,
    explanation: "W = (p₁V₁ − p₂V₂)/(γ − 1). This follows from W = −ΔU = −nCv(T₂ − T₁) = nCv(T₁ − T₂), then substituting nRT = pV and Cv = R/(γ − 1). For expansion p₂V₂ < p₁V₁ (the gas cools), so W > 0."
  },

  {
    type: "mcq",
    q: "The speed of sound in air is calculated using the adiabatic (rather than isothermal) equation because:",
    options: [
      "Sound travels too slowly for heat to matter",
      "Sound compressions and rarefactions occur so rapidly that no significant heat transfer takes place — the process is effectively adiabatic",
      "Air is a perfect thermal insulator",
      "The temperature of air never changes"
    ],
    answer: 1,
    explanation: "Newton originally (incorrectly) assumed isothermal propagation, giving a speed about 16% below the measured value. Laplace's correction recognised that sound oscillations are too fast for heat to flow between compressions and rarefactions, making the process adiabatic and replacing p/ρ with γp/ρ in the formula."
  },

  {
    type: "mcq",
    q: "In a diesel engine, rapid adiabatic compression of air causes:",
    options: [
      "The temperature to drop, cooling the fuel mixture",
      "The temperature to rise high enough to ignite the injected fuel without a spark plug",
      "No change in temperature",
      "The pressure to decrease below atmospheric"
    ],
    answer: 1,
    explanation: "Diesel compression ratios of 14:1 to 25:1 cause the air temperature to exceed 700–900 °C through adiabatic heating (T₂ = T₁(V₁/V₂)^(γ−1)). The injected fuel ignites spontaneously at these temperatures — no spark plug is needed. This distinguishes the diesel cycle from the Otto (petrol) cycle."
  },

  {
    type: "mcq",
    q: "One mole of a diatomic ideal gas (γ = 7/5) at 300 K is compressed adiabatically to half its volume. Using 2^0.4 ≈ 1.32, the final temperature is approximately:",
    options: [
      "396 K",
      "300 K",
      "227 K",
      "450 K"
    ],
    answer: 0,
    explanation: "TV^(γ−1) = constant → T₂ = T₁(V₁/V₂)^(γ−1) = 300 × (2)^0.4 ≈ 300 × 1.32 ≈ 396 K. The gas heats up because work is done on it with no heat loss. Option C (227 K) would arise for an adiabatic expansion, not compression."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "In an isothermal process on an ideal gas, since U = U(T) and ΔT = 0, the change in internal energy ΔU = ___.",
    answer: "0",
    alt: ["zero"],
    explanation: "ΔU = 0 because U depends only on T for an ideal gas, and T is constant. The first law then reduces to Q = W: every joule of heat absorbed equals work done by the gas."
  },

  {
    type: "fill",
    q: "In an isothermal process ΔU = 0, so the first law ΔU = Q − W gives Q = ___.",
    answer: "W",
    alt: ["w"],
    explanation: "Q = W in an isothermal process. Heat absorbed from the reservoir is entirely converted into work done by the expanding gas. On compression the gas releases heat equal to the work done on it. There is no change in internal energy."
  },

  {
    type: "fill",
    q: "The work done by an ideal gas in an isothermal process from volume V1 to V2 at temperature T is W = ___.",
    answer: "nRT ln(V2/V1)",
    alt: ["nRT*ln(V2/V1)", "nRT ln(p1/p2)", "nRT*ln(p1/p2)"],
    explanation: "W = nRT ln(V2/V1) = nRT ln(p1/p2). Substituting p = nRT/V and integrating from V1 to V2 gives the natural logarithm. For expansion V2 > V1 so ln > 0 and W > 0; for compression ln < 0 and W < 0."
  },

  {
    type: "fill",
    q: "In an isothermal process, the ideal-gas law pV = nRT means that the product pV = ___ (express in terms of n, R, T).",
    answer: "nRT",
    alt: ["n*R*T", "nrT", "nRt"],
    explanation: "pV = nRT is constant when T is fixed. This is why the isothermal curve is a hyperbola: p = nRT/V = (constant)/V. A higher temperature T shifts the hyperbola outward to a curve with a larger pV product."
  },

  {
    type: "fill",
    q: "An adiabatic process is defined by the condition Q = ___.",
    answer: "0",
    alt: ["zero"],
    explanation: "Q = 0 means no heat enters or leaves the system. All energy changes come from work: the first law reduces to ΔU = −W. Adiabatic processes occur with perfect insulation or when the process is so rapid that heat has no time to transfer."
  },

  {
    type: "fill",
    q: "In an adiabatic process Q = 0, so the first law ΔU = Q − W gives ΔU = ___.",
    answer: "-W",
    alt: ["-w"],
    explanation: "ΔU = −W. Work done by the gas (W > 0) reduces its internal energy and lowers its temperature; work done on the gas (W < 0) increases U and raises T. This is the key relation driving both adiabatic heating in compression and cooling in expansion."
  },

  {
    type: "fill",
    q: "In a reversible adiabatic process, the pressure and volume of an ideal gas satisfy the equation pV^γ = ___.",
    answer: "constant",
    alt: ["const", "a constant"],
    explanation: "pV^γ = constant, where γ = Cp/Cv > 1. The derivation starts from dU = −p dV and the ideal-gas law, combining them to get dp/p + γ dV/V = 0, which integrates to ln p + γ ln V = const, i.e. pV^γ = const."
  },

  {
    type: "fill",
    q: "For a diatomic ideal gas (γ = 7/5, so γ − 1 = 2/5), the adiabatic TV relation is TV^___ = constant.",
    answer: "2/5",
    alt: ["0.4"],
    explanation: "TV^(γ−1) = constant and for a diatomic gas γ − 1 = 7/5 − 1 = 2/5 = 0.4. This shows that compressing a diatomic gas adiabatically to half its volume raises the temperature by a factor of 2^0.4 ≈ 1.32."
  },

  {
    type: "fill",
    q: "The slope of an isothermal curve at point (p, V) on a p–V diagram is dp/dV = ___.",
    answer: "-p/V",
    alt: ["-P/V", "-(p/V)"],
    explanation: "From pV = constant: differentiating gives p dV + V dp = 0, so dp/dV = −p/V. The negative slope confirms that pressure decreases as volume increases. The adiabatic slope is γ times this: dp/dV = −γp/V."
  },

  {
    type: "fill",
    q: "For a diatomic gas (γ = 7/5), the adiabatic slope at any point on a p–V diagram is ___ times the isothermal slope at that point.",
    answer: "7/5",
    alt: ["1.4", "1.40"],
    explanation: "(dp/dV)_adi = −γp/V = (7/5)(−p/V), which is 7/5 ≈ 1.4 times steeper than the isothermal slope −p/V. For any gas, the ratio always equals γ — the adiabatic curve is always steeper than the isothermal through the same point."
  },

  {
    type: "fill",
    q: "One mole of ideal gas at T = 300 K expands isothermally from V1 = 2 L to V2 = 5 L. Using R = 8.314 J/mol·K and ln(2.5) ≈ 0.916, the work done is W ≈ ___ J.",
    answer: "2285",
    alt: ["2285 J", "2285.0", "2284", "2286"],
    explanation: "W = nRT ln(V2/V1) = 1 × 8.314 × 300 × ln(2.5) = 2494 × 0.916 ≈ 2285 J. Since temperature is constant, the same 2285 J is absorbed as heat from the reservoir. For compression (V2 < V1) the same magnitude would be released."
  },

  {
    type: "fill",
    q: "One mole of a diatomic gas (γ = 7/5) at 300 K is compressed adiabatically to V2 = V1/2. Using 2^0.4 ≈ 1.32, the final temperature T2 ≈ ___ K.",
    answer: "396",
    alt: ["396 K", "396.0", "395", "397"],
    explanation: "T2 = T1(V1/V2)^(γ−1) = 300 × 2^0.4 ≈ 300 × 1.32 ≈ 396 K. The gas heats from 300 K to 396 K purely through mechanical compression — no heat is added. This temperature rise is the basis of diesel ignition."
  },

  {
    type: "fill",
    q: "In the same adiabatic compression (initial pressure p1 = 1 atm, V2 = V1/2, γ = 7/5), the final pressure p2 ≈ ___ atm. (Use 2^1.4 ≈ 2.64)",
    answer: "2.64",
    alt: ["2.64 atm", "2.63", "2.65"],
    explanation: "p2 = p1(V1/V2)^γ = 1 × 2^1.4 ≈ 2.64 atm. The pressure more than doubles because both the volume decrease (factor 2 by itself) and the temperature rise (no heat loss) both push the pressure up — more than the factor 2 you would get isothermally."
  },

  {
    type: "fill",
    q: "In an adiabatic process, the work done by the gas W = ___ × (T1 − T2), where n is the number of moles.",
    answer: "nCv",
    alt: ["n*Cv"],
    explanation: "W = −ΔU = −nCv(T2 − T1) = nCv(T1 − T2). During adiabatic expansion T2 < T1 so W > 0 — the gas does positive work at the expense of its internal energy (it cools). During adiabatic compression T2 > T1 so W < 0 — work is done on the gas."
  },

  {
    type: "fill",
    q: "Sound waves propagate through air via rapid compressions and expansions. Because these occur too quickly for heat transfer, the process is effectively ___.",
    answer: "adiabatic",
    alt: [],
    explanation: "Sound propagation is adiabatic. Newton incorrectly assumed isothermal propagation, giving a speed about 16% too low. Laplace's correction — replacing p/ρ with γp/ρ in the wave speed formula — gives v = √(γP/ρ), which agrees with measurement. The factor √γ ≈ √1.4 ≈ 1.18 accounts for the discrepancy."
  }

];

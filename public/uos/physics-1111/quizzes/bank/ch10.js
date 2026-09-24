window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "For a quasi-static process, the work done by a gas as its volume changes from V₁ to V₂ is geometrically equal to:",
    options: [
      "The height of the p–V curve at V₂",
      "The area under the p–V curve between V₁ and V₂",
      "The slope of the p–V curve",
      "The product of the initial and final pressures"
    ],
    answer: 1,
    explanation: "W = ∫p dV is the area under the p–V curve measured from the V-axis. This geometric interpretation holds for any process shape. A larger enclosed area means more work done, and the sign is positive for expansion (rightward on the V-axis) and negative for compression."
  },

  {
    type: "mcq",
    q: "On a p–V diagram, an isobaric (constant-pressure) process appears as:",
    options: [
      "A vertical line; the area under it is a triangle",
      "A hyperbola (pV = constant)",
      "A horizontal line; the area under it is a rectangle",
      "A curved line whose slope is −p/V"
    ],
    answer: 2,
    explanation: "Constant pressure means p is fixed, so the process traces a horizontal line on the p–V diagram. The area under this line down to the V-axis is a rectangle with base (V₂ − V₁) and height p, giving W = p(V₂ − V₁). This is the simplest integral of W = ∫p dV."
  },

  {
    type: "mcq",
    q: "In an isochoric (constant-volume) process, the work done by the gas is:",
    options: [
      "W = p(V₂ − V₁)",
      "W = nRT ln(V₂/V₁)",
      "W = 0",
      "W = nCv ΔT"
    ],
    answer: 2,
    explanation: "W = ∫p dV = 0 because dV = 0 throughout. No volume change means no displacement of the piston, so the gas does no work. On the p–V diagram the process is a vertical line with no area underneath it."
  },

  {
    type: "mcq",
    q: "In an isochoric process (W = 0), the first law ΔU = Q − W reduces to:",
    options: [
      "Q = 0",
      "ΔU = −W",
      "Q = ΔU",
      "ΔU = 0"
    ],
    answer: 2,
    explanation: "With W = 0 the first law gives Q = ΔU: all heat added goes directly into raising the internal energy (and temperature) of the gas. No energy is 'lost' to mechanical work. This is why Cv is defined at constant volume — it isolates the pure heat-to-U relationship."
  },

  {
    type: "mcq",
    q: "Two different processes connect the same initial state (p₁, V₁) to the same final state (p₂, V₂). Which statement is correct?",
    options: [
      "They must do the same amount of work because W depends only on the endpoints",
      "They do the same work only if the gas is ideal",
      "They generally do different amounts of work because W is a path function",
      "They do the same work only if ΔT = 0"
    ],
    answer: 2,
    explanation: "Work W = ∫p dV depends on the exact path traced on the p–V diagram, not just the endpoints. An isothermal path and a straight-line path between the same two points enclose different areas and therefore do different amounts of work. Only ΔU is path-independent (state function)."
  },

  {
    type: "mcq",
    q: "The work done by a gas is positive (W > 0) when:",
    options: [
      "The gas is compressed (V₂ < V₁)",
      "The temperature decreases",
      "The gas expands (V₂ > V₁)",
      "The pressure increases"
    ],
    answer: 2,
    explanation: "W = ∫p dV > 0 when V increases (expansion). The expanding gas pushes the piston outward, doing positive work on the surroundings. Compression (V₂ < V₁) gives W < 0 — the surroundings do positive work on the gas, increasing its internal energy."
  },

  {
    type: "mcq",
    q: "When a gas is compressed (V₂ < V₁), the work done by the gas W is:",
    options: [
      "Positive, because pressure increases",
      "Zero, because no heat enters",
      "Negative, because the surroundings do work on the gas",
      "Positive only if the process is adiabatic"
    ],
    answer: 2,
    explanation: "W = ∫p dV < 0 for compression because dV < 0. The gas receives work from the surroundings rather than delivering it. In the first law ΔU = Q − W, a negative W contributes positively to ΔU — mechanical energy input raises the internal energy."
  },

  {
    type: "mcq",
    q: "In a complete cyclic process the change in internal energy ΔU_cycle is:",
    options: [
      "Positive, because work is done each cycle",
      "Zero, because U is a state function and the system returns to its initial state",
      "Equal to the heat absorbed",
      "Equal to the work done"
    ],
    answer: 1,
    explanation: "U is a state function — its value is fixed by the thermodynamic state. After one complete cycle the system returns to its original (p, V, T), so ΔU_cycle = 0. This has a profound consequence: Q_cycle = W_cycle, meaning the net heat absorbed equals the net work done."
  },

  {
    type: "mcq",
    q: "For a complete cyclic process (ΔU_cycle = 0), the relation between the net heat Q_cycle and the net work W_cycle is:",
    options: [
      "Q_cycle = 0",
      "Q_cycle = −W_cycle",
      "Q_cycle = W_cycle",
      "Q_cycle = 2W_cycle"
    ],
    answer: 2,
    explanation: "From ΔU = Q − W with ΔU_cycle = 0: Q_cycle = W_cycle. The net heat absorbed over the cycle equals the net work output. For a heat engine this means efficiency is limited by how much of the absorbed heat is not rejected — the rest becomes useful work."
  },

  {
    type: "mcq",
    q: "A cycle traversed clockwise on a p–V diagram represents:",
    options: [
      "A refrigerator that requires net work input (W_net < 0)",
      "A process in which W_net = 0",
      "A heat engine that produces net work output (W_net > 0)",
      "An isothermal process"
    ],
    answer: 2,
    explanation: "Clockwise traversal means the gas expands along a higher-pressure curve and is compressed along a lower-pressure curve. The expansion work exceeds the compression work, giving W_net > 0 — net work done by the gas (heat engine). Anticlockwise means the opposite: W_net < 0, requiring a net work input (refrigerator or heat pump)."
  },

  {
    type: "mcq",
    q: "A cycle traversed anticlockwise on a p–V diagram represents:",
    options: [
      "A heat engine producing W_net > 0",
      "A refrigerator or heat pump, with W_net < 0 (net work done on the gas)",
      "A process where Q_cycle = 0",
      "A purely isothermal cycle"
    ],
    answer: 1,
    explanation: "Anticlockwise traversal means the gas is compressed along a higher-pressure curve and expands along a lower-pressure curve. More work is done on the gas during compression than is recovered during expansion, so W_net < 0 — net work is put in. This is the cycle of a refrigerator or heat pump."
  },

  {
    type: "mcq",
    q: "A gas expands isobarically at p = 100 kPa from V₁ = 2 L to V₂ = 5 L. The work done by the gas is:",
    options: [
      "150 J",
      "300 J",
      "500 J",
      "1000 J"
    ],
    answer: 1,
    explanation: "W = p(V₂ − V₁) = 10⁵ × (5 − 2) × 10⁻³ = 10⁵ × 3 × 10⁻³ = 300 J. The isobaric formula is the simplest of all: constant pressure times volume change. Option A divides by two; option D forgets the ×10⁻³ unit conversion from litres to cubic metres."
  },

  {
    type: "mcq",
    q: "A gas expands from (p₁ = 2 atm, V₁ = 1 L) to (p₂ = 1 atm, V₂ = 2 L) via two paths: (a) the isothermal curve and (b) a straight line on the p–V diagram. Which path does more work?",
    options: [
      "The isothermal path (W ≈ 140 J)",
      "Both do the same work — it depends only on the endpoints",
      "The straight-line path (W ≈ 152 J)",
      "The path with higher average pressure"
    ],
    answer: 2,
    explanation: "W_isothermal = p₁V₁ ln 2 ≈ 140 J; W_straight = ½(p₁+p₂)(V₂−V₁) ≈ 152 J. Different paths → different work, confirming W is a path function. The straight-line path passes above the isothermal curve for part of the journey, enclosing a larger area."
  },

  {
    type: "mcq",
    q: "A rectangular cycle on a p–V diagram has p_high = 3 × 10⁵ Pa, p_low = 1 × 10⁵ Pa, V₁ = 1 L, V₂ = 4 L. The net work per cycle is:",
    options: [
      "200 J",
      "400 J",
      "600 J",
      "1200 J"
    ],
    answer: 2,
    explanation: "W_net = (p_high − p_low)(V₂ − V₁) = 2×10⁵ × 3×10⁻³ = 600 J. This is the area of the rectangle enclosed by the four sides of the cycle. The expansion at p_high does more work than the compression at p_low, and the difference is the net output."
  },

  {
    type: "mcq",
    q: "One mole of an ideal gas at T = 300 K and p = 2 atm expands isobarically until its volume doubles. The work done is approximately:",
    options: [
      "1247 J",
      "2494 J",
      "4988 J",
      "1663 J"
    ],
    answer: 1,
    explanation: "W = nR ΔT. Volume doubling at constant pressure requires T to double (pV = nRT), so ΔT = 300 K. W = 1 × 8.314 × 300 = 2494 J. Equivalently W = p ΔV = p V₁ = nRT₁ = 2494 J. Option D is the work in an isothermal process with the same n and T."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The work done by a gas in an isobaric process at pressure p from volume V1 to V2 is W = ___.",
    answer: "p(V2-V1)",
    alt: ["p*(V2-V1)", "p(V2 - V1)"],
    explanation: "W = p(V₂ − V₁). With p constant the integral ∫p dV = p ΔV is trivial. The area on a p–V diagram is a rectangle. W > 0 for expansion (V₂ > V₁) and W < 0 for compression — consistent with the sign convention."
  },

  {
    type: "fill",
    q: "The work done by a gas in an isochoric (constant-volume) process is W = ___.",
    answer: "0",
    alt: ["zero"],
    explanation: "W = 0 because dV = 0 throughout: the piston does not move. All heat supplied in an isochoric process goes into raising the internal energy (Q = ΔU). On the p–V diagram the process is a vertical line with no area under it."
  },

  {
    type: "fill",
    q: "In an isochoric process W = 0, so the first law ΔU = Q − W reduces to Q = ___.",
    answer: "ΔU",
    alt: ["deltaU", "delta U", "dU"],
    explanation: "Q = ΔU: the heat absorbed equals the rise in internal energy. This is why the constant-volume specific heat Cv is defined as Cv = (1/n)(Q/ΔT)_V = (1/n)(dU/dT) — no work correction is needed."
  },

  {
    type: "fill",
    q: "For a complete cyclic process, since U is a state function and the system returns to its initial state, ΔU_cycle = ___.",
    answer: "0",
    alt: ["zero"],
    explanation: "ΔU_cycle = 0 because internal energy depends only on the thermodynamic state (T, p, V), not the history. One full cycle brings the gas back to exactly the same state, so ΔU is zero over the cycle — making Q_cycle = W_cycle."
  },

  {
    type: "fill",
    q: "Because ΔU_cycle = 0, the first law for a complete cycle gives Q_cycle = ___.",
    answer: "W_cycle",
    alt: ["W", "W cycle", "w_cycle"],
    explanation: "Q_cycle = W_cycle: over one full cycle the net heat absorbed equals the net work done. For a heat engine this means the useful work output comes entirely from the difference between heat absorbed from the hot reservoir and heat rejected to the cold reservoir."
  },

  {
    type: "fill",
    q: "The work done by a gas in a process where the p–V path is a straight line from (p1, V1) to (p2, V2) is W = ___.",
    answer: "½(p1+p2)(V2-V1)",
    alt: ["(p1+p2)(V2-V1)/2", "0.5*(p1+p2)*(V2-V1)", "1/2*(p1+p2)*(V2-V1)"],
    explanation: "The area under a straight line on the p–V diagram is a trapezium with parallel sides p1 and p2 and width (V₂ − V₁). Area = ½(p₁ + p₂)(V₂ − V₁). This formula confirms that W depends on the path: a straight line and an isothermal between the same endpoints give different results."
  },

  {
    type: "fill",
    q: "The net work done in one cycle equals the ___ of the closed loop on the p–V diagram.",
    answer: "area",
    alt: ["enclosed area", "area enclosed"],
    explanation: "W_cycle = ±(area enclosed). The sign is positive for a clockwise loop (engine) and negative for anticlockwise (refrigerator). Calculating the enclosed area — whether analytically or by counting grid squares — directly gives the net work per cycle."
  },

  {
    type: "fill",
    q: "A cycle traversed clockwise on a p–V diagram produces net work that is ___ (positive/negative).",
    answer: "positive",
    alt: [],
    explanation: "Clockwise: the upper (expansion) stroke is at higher pressure than the lower (compression) stroke, so expansion work exceeds compression work. Net W > 0 — the gas does net work on the surroundings. This describes a heat engine."
  },

  {
    type: "fill",
    q: "A gas expands isobarically at p = 100 kPa from V1 = 2 L to V2 = 5 L. The work done is W = ___ J.",
    answer: "300",
    alt: ["300.0", "300 J"],
    explanation: "W = p(V₂ − V₁) = 10⁵ × 3 × 10⁻³ = 300 J. Convert litres to m³ (1 L = 10⁻³ m³) and kPa to Pa (1 kPa = 10³ Pa). The calculation is straightforward once units are consistent."
  },

  {
    type: "fill",
    q: "One mole of ideal gas at T = 300 K and p = 2 atm expands isobarically until its volume doubles. The work done is W = ___ J. (Use R = 8.314 J/mol·K)",
    answer: "2494",
    alt: ["2494 J", "2494.0", "2493", "2495"],
    explanation: "Volume doubling at constant pressure doubles T (from pV = nRT): ΔT = 300 K. W = nR ΔT = 1 × 8.314 × 300 = 2494 J. This is also p ΔV = p × V₁ = nRT₁ = 2494 J. Note: this is the same value as ΔU for n = 2 mol monatomic gas at ΔT = 100 K — a useful cross-check."
  },

  {
    type: "fill",
    q: "A rectangular cycle has p_high = 2 × 10⁵ Pa, p_low = 1 × 10⁵ Pa, V1 = 1 L, V2 = 3 L, traversed clockwise. The net work per cycle is W = ___ J.",
    answer: "200",
    alt: ["200 J", "200.0"],
    explanation: "W_net = (p_high − p_low)(V₂ − V₁) = 1×10⁵ × 2×10⁻³ = 200 J. The rectangular cycle is the easiest to calculate: it is just the area of the rectangle. Since it is traversed clockwise, W_net > 0 — the cycle acts as a heat engine."
  },

  {
    type: "fill",
    q: "A gas expands along a straight line from (p1 = 2 atm, V1 = 1 L) to (p2 = 1 atm, V2 = 2 L). The work done is W = ½(p1+p2)(V2−V1) ≈ ___ J. (Use 1 atm = 101 325 Pa)",
    answer: "152",
    alt: ["152 J", "152.0", "151", "153"],
    explanation: "W = ½(202650 + 101325)(10⁻³) = ½ × 303975 × 10⁻³ ≈ 152 J. Compare with the isothermal path between the same endpoints (≈ 140 J): the straight line encloses more area because it lies above the isothermal curve, illustrating the path dependence of work."
  },

  {
    type: "fill",
    q: "For the isothermal path between the same endpoints (p1 = 2 atm, V1 = 1 L) and (p2 = 1 atm, V2 = 2 L), W = p1V1 ln(V2/V1) ≈ ___ J. (Use ln 2 ≈ 0.693, 1 atm = 101 325 Pa)",
    answer: "140",
    alt: ["140 J", "140.4", "141"],
    explanation: "W = 2 × 101325 × 10⁻³ × ln 2 = 202.65 × 0.693 ≈ 140 J. This is less than the 152 J for the straight-line path between the same endpoints, confirming that work is a path function. Different processes connecting (p₁,V₁) to (p₂,V₂) do different amounts of work."
  },

  {
    type: "fill",
    q: "A gas is compressed at constant pressure p = 3 atm from V1 = 4 L to V2 = 1 L. The work done ON the gas is ___ J. (Use 1 atm = 101 325 Pa)",
    answer: "912",
    alt: ["912 J", "912.0", "911", "913"],
    explanation: "W_on = p(V₁ − V₂) = 3 × 101325 × (4−1) × 10⁻³ = 303975 × 3 × 10⁻³ ≈ 912 J. The work done by the gas is W_by = −912 J (negative, as expected for compression). This 912 J is added to the gas's internal energy if the process is adiabatic."
  }

];

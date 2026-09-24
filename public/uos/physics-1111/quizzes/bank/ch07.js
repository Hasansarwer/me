window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "The moment of inertia I of a body about an axis is a measure of its:",
    options: [
      "Total kinetic energy",
      "Resistance to angular acceleration about that axis",
      "Total angular momentum",
      "Gravitational potential energy"
    ],
    answer: 1,
    explanation: "I measures how hard it is to angularly accelerate a body — the rotational analogue of mass. From τ = Iα, a larger I means a given torque produces a smaller angular acceleration. Unlike mass, I depends on which axis is chosen, not just on the total mass."
  },

  {
    type: "mcq",
    q: "Two objects have the same total mass but different shapes. The one with the larger moment of inertia about a given axis is:",
    options: [
      "The one with more mass concentrated near the axis",
      "The one with more mass concentrated far from the axis",
      "Both have the same I since their masses are equal",
      "The smaller, more compact object"
    ],
    answer: 1,
    explanation: "I = Σmᵢrᵢ². The distance rᵢ appears squared, so mass elements far from the axis contribute disproportionately. A hollow cylinder has a larger I than a solid cylinder of the same mass and radius because all its mass sits at the maximum distance R."
  },

  {
    type: "mcq",
    q: "The moment of inertia of a rigid body:",
    options: [
      "Depends only on the total mass, not the mass distribution",
      "Is the same regardless of which axis is chosen",
      "Depends on both the mass distribution and the chosen axis",
      "Is always minimised about the geometric centre"
    ],
    answer: 2,
    explanation: "I depends on how mass is spread relative to the chosen axis. The same body spinning about different axes (e.g. a rod about its centre vs. its end) has completely different I values. The geometric centre and the centre of mass coincide only for uniform symmetric bodies."
  },

  {
    type: "mcq",
    q: "The parallel-axis theorem states that the moment of inertia I about any axis equals:",
    options: [
      "I_cm × Md²",
      "I_cm + Md²",
      "I_cm − Md²",
      "I_cm / (Md²)"
    ],
    answer: 1,
    explanation: "I = I_cm + Md², where I_cm is the moment of inertia about the parallel axis through the centre of mass, M is the total mass, and d is the perpendicular distance between the two axes. This always increases I — the CM axis is the minimum for any direction."
  },

  {
    type: "mcq",
    q: "For a thin flat ring lying in the xy-plane, the perpendicular-axis theorem gives:",
    options: [
      "Iz = Ix − Iy",
      "Ix = Iy + Iz",
      "Iz = Ix + Iy",
      "Ix × Iy = Iz"
    ],
    answer: 2,
    explanation: "Iz = Ix + Iy for any planar body. The z-axis is perpendicular to the plane while x and y lie in it. For the ring with symmetry Ix = Iy, this gives Iz = 2Ix, so the diameter moment of inertia Ix = Iz/2 = ½MR²."
  },

  {
    type: "mcq",
    q: "The perpendicular-axis theorem (Iz = Ix + Iy) is valid only for:",
    options: [
      "Three-dimensional solid bodies",
      "Bodies rotating at high angular speed",
      "Bodies with cylindrical symmetry",
      "Planar (thin flat) bodies"
    ],
    answer: 3,
    explanation: "The theorem requires the body to lie entirely in a plane (the xy-plane). For a 3-D solid, mass elements have a z-component of position that contributes differently to Ix, Iy, and Iz, so the simple sum Iz = Ix + Iy no longer holds."
  },

  {
    type: "mcq",
    q: "The moment of inertia of a uniform thin rod of mass M and length L about an axis through its centre, perpendicular to the rod, is:",
    options: [
      "ML²/3",
      "ML²/12",
      "ML²/2",
      "ML²"
    ],
    answer: 1,
    explanation: "I_centre = ML²/12. The derivation integrates r² dm from −L/2 to +L/2 with dm = (M/L)dr, giving I = (M/L)[r³/3]_{−L/2}^{L/2} = ML²/12. About one end I = ML²/3 (four times larger), confirming that axis placement matters enormously."
  },

  {
    type: "mcq",
    q: "The moment of inertia of a uniform ring (hoop) of mass M and radius R about its central axis (perpendicular to its plane) is:",
    options: [
      "½MR²",
      "¼MR²",
      "MR²",
      "2MR²"
    ],
    answer: 2,
    explanation: "I = MR² for a ring. Every mass element of the ring is at the same distance R from the central axis, so I = MR² × (sum of mass fractions) = MR². This is the maximum possible I for a given mass and outer radius — a reason flywheels are built as rings."
  },

  {
    type: "mcq",
    q: "A uniform solid disc and a ring (hoop) have the same mass M and radius R. About the central axis perpendicular to their planes:",
    options: [
      "They have the same moment of inertia",
      "The disc has the greater moment of inertia",
      "The ring has the greater moment of inertia",
      "It depends on their rotational speed"
    ],
    answer: 2,
    explanation: "I_disc = ½MR² while I_ring = MR². The ring's entire mass sits at radius R; the disc's mass is spread from 0 to R, giving a smaller average r² and hence a smaller I. For the same angular velocity the ring stores twice the rotational KE."
  },

  {
    type: "mcq",
    q: "The moment of inertia of a uniform solid sphere of mass M and radius R about any diameter is:",
    options: [
      "MR²",
      "⅔MR²",
      "½MR²",
      "⅖MR²"
    ],
    answer: 3,
    explanation: "I = 2/5 MR² for a solid sphere. The derivation integrates over thin cylindrical shells; the 2/5 factor reflects that much of the sphere's mass lies closer to the axis than the outer radius. A hollow spherical shell gives I = 2/3 MR² — larger, since all its mass is at R."
  },

  {
    type: "mcq",
    q: "The moment of inertia of a uniform disc about its central axis is ½MR². Using the parallel-axis theorem, its moment of inertia about a tangential axis at the rim is:",
    options: [
      "½MR²",
      "MR²",
      "3/2 MR²",
      "2MR²"
    ],
    answer: 2,
    explanation: "I_rim = I_cm + Md² = ½MR² + M(R)² = ½MR² + MR² = 3/2 MR². The shift is d = R (from centre to rim). The added term MR² raises I substantially — any shift from the CM axis always increases I."
  },

  {
    type: "mcq",
    q: "A hoop and a solid disc of equal mass M and radius R roll without slipping down the same incline from rest. Which reaches the bottom first?",
    options: [
      "The hoop, because more mass is at the rim",
      "Both arrive at the same time",
      "The solid disc",
      "Whichever happens to be heavier"
    ],
    answer: 2,
    explanation: "Energy conservation: Mgh = ½Mv²(1 + I/MR²). For the hoop I/MR² = 1; for the disc I/MR² = ½. The disc has a smaller fraction of energy locked in rotation, so more is available as translation — its v is larger and it wins. Mass and radius cancel out entirely."
  },

  {
    type: "mcq",
    q: "The radius of gyration K of a body about an axis is defined by:",
    options: [
      "K = I/M",
      "I = MK²",
      "K = 2I/M",
      "I = KM²"
    ],
    answer: 1,
    explanation: "I = MK² defines K as the equivalent distance: if all the mass were concentrated at distance K from the axis, the moment of inertia would be unchanged. Rearranging gives K = √(I/M). It is a concise single-length description of how spread the mass distribution is."
  },

  {
    type: "mcq",
    q: "A solid sphere and a spherical shell have the same mass M and radius R. About a diameter, which has the larger moment of inertia?",
    options: [
      "The solid sphere (I = 2/5 MR²)",
      "Both are equal",
      "The spherical shell (I = 2/3 MR²)",
      "The solid sphere, because its density is higher"
    ],
    answer: 2,
    explanation: "I_shell = 2/3 MR² > I_sphere = 2/5 MR². The shell's entire mass lies at R, maximising every term in Σmr². The solid sphere has mass spread throughout its volume including regions close to the axis, reducing the average r² and hence I."
  },

  {
    type: "mcq",
    q: "A solid disc of mass 2 kg and radius 0.1 m spins at 100 rad/s about its central axis. Its rotational kinetic energy is:",
    options: [
      "10 J",
      "50 J",
      "100 J",
      "200 J"
    ],
    answer: 1,
    explanation: "I = ½MR² = ½ × 2 × (0.1)² = 0.01 kg·m². KE = ½Iω² = ½ × 0.01 × 100² = 50 J. Option A divides by 5 instead of multiplying; option D forgets the ½ and the ½ from I. Energy grows as ω², so doubling the spin speed quadruples the stored energy."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The moment of inertia of a point mass m located at perpendicular distance r from the axis is I = ___.",
    answer: "mr²",
    alt: ["m*r^2", "r^2*m", "r²m"],
    explanation: "I = mr² for a point mass. For a collection of particles I = Σmᵢrᵢ² and for a continuous body I = ∫r² dm. The r² weighting means that doubling the distance quadruples the contribution of that mass element to I."
  },

  {
    type: "fill",
    q: "The radius of gyration K is defined by I = MK², so K = ___.",
    answer: "√(I/M)",
    alt: ["sqrt(I/M)", "(I/M)^(1/2)", "(I/M)^0.5"],
    explanation: "K = √(I/M) is the distance at which the entire mass M would need to be placed as a point to reproduce the same I. It summarises the mass distribution in a single length — a compact way to compare how 'spread out' different bodies are about their axes."
  },

  {
    type: "fill",
    q: "The parallel-axis theorem states I = I_cm + ___, where M is the total mass and d is the distance between the axes.",
    answer: "Md²",
    alt: ["M*d^2", "d^2*M", "Md^2"],
    explanation: "I = I_cm + Md². Shifting the axis by d from the CM always adds Md² to I, confirming that the CM axis gives the minimum I for any given direction. The term Md² can be thought of as the contribution of treating the entire body as a point mass at distance d from the CM."
  },

  {
    type: "fill",
    q: "For a planar body in the xy-plane, the perpendicular-axis theorem states that Iz = ___.",
    answer: "Ix + Iy",
    alt: ["Iy + Ix"],
    explanation: "Iz = Ix + Iy. Every mass element at (x, y) contributes r² = x² + y² to Iz, x² to Iy, and y² to Ix (note: y² is the distance² from the x-axis, contributing to Ix). Summing over all elements gives Iz = Ix + Iy. This only works for planar bodies."
  },

  {
    type: "fill",
    q: "The moment of inertia of a uniform thin rod of mass M and length L about an axis through its centre, perpendicular to the rod, is I = ___.",
    answer: "1/12 ML²",
    alt: ["ML^2/12", "(1/12)ML^2", "1/12*M*L^2", "ML²/12"],
    explanation: "I = ML²/12. Integrating r² (M/L)dr from −L/2 to +L/2 yields (M/L)[r³/3]_{−L/2}^{L/2} = ML²/12. This is a key result — the factor 1/12 (not 1/3 or 1/2) catches students out regularly."
  },

  {
    type: "fill",
    q: "The moment of inertia of a uniform thin rod of mass M and length L about an axis through one end, perpendicular to the rod, is I = ___.",
    answer: "1/3 ML²",
    alt: ["ML^2/3", "(1/3)ML^2", "1/3*M*L^2", "ML²/3"],
    explanation: "I = ML²/3. Integrating r²(M/L)dr from 0 to L gives (M/L)[r³/3]_0^L = ML²/3. This is exactly four times larger than the centre-axis result (ML²/12), consistent with the parallel-axis theorem: I_end = ML²/12 + M(L/2)² = ML²/12 + ML²/4 = ML²/3."
  },

  {
    type: "fill",
    q: "The moment of inertia of a uniform solid disc (or solid cylinder) of mass M and radius R about its central axis is I = ___.",
    answer: "½MR²",
    alt: ["MR^2/2", "(1/2)MR^2", "0.5MR^2", "1/2*M*R^2"],
    explanation: "I = ½MR². The ½ factor arises because the disc's mass is spread from r = 0 to r = R: integrating 2πr(M/πR²)r² dr from 0 to R gives MR²/2. A hollow cylinder (all mass at R) has I = MR² — twice as large."
  },

  {
    type: "fill",
    q: "The moment of inertia of a uniform ring (hoop) of mass M and radius R about its central axis is I = ___.",
    answer: "MR²",
    alt: ["M*R^2", "R^2*M"],
    explanation: "I = MR². Every element of the ring is at distance R from the axis, so I = Σmᵢ × R² = MR². This is the largest I achievable for given M and R, which is why flywheel designers concentrate mass at the rim."
  },

  {
    type: "fill",
    q: "The moment of inertia of a uniform solid sphere of mass M and radius R about any diameter is I = ___.",
    answer: "2/5 MR²",
    alt: ["2MR^2/5", "(2/5)MR^2", "0.4MR^2", "2/5*M*R^2"],
    explanation: "I = 2/5 MR². The derivation sums thin cylindrical shells of varying radii through the sphere, giving the 2/5 factor. This is smaller than the disc (1/2) and ring (1) values because much of the sphere's mass is near the centre of the diameter axis."
  },

  {
    type: "fill",
    q: "The moment of inertia of a uniform spherical shell of mass M and radius R about any diameter is I = ___.",
    answer: "2/3 MR²",
    alt: ["2MR^2/3", "(2/3)MR^2", "2/3*M*R^2"],
    explanation: "I = 2/3 MR² for a thin spherical shell. All the mass is at radius R but the r² entering the moment-of-inertia integral is the perpendicular distance to the diameter axis, not R itself — averaging over the sphere surface gives a factor of 2/3 rather than 1."
  },

  {
    type: "fill",
    q: "Using the parallel-axis theorem (I_cm = ½MR²), the moment of inertia of a uniform disc about a tangential axis at its rim is I = ___.",
    answer: "3/2 MR²",
    alt: ["3MR^2/2", "(3/2)MR^2", "1.5MR^2", "3/2*M*R^2"],
    explanation: "I_rim = I_cm + Md² = ½MR² + MR² = 3/2 MR². The shift is d = R (from the central axis to the rim). The added term MR² dominates because a full mass M is being shifted a full radius R — demonstrating how quickly I grows as the axis moves away from the CM."
  },

  {
    type: "fill",
    q: "The radius of gyration of a uniform solid disc (I = ½MR²) about its central axis is K = ___.",
    answer: "R/√2",
    alt: ["R/sqrt(2)", "R*2^(-1/2)", "sqrt(R^2/2)"],
    explanation: "K = √(I/M) = √(MR²/2M) = √(R²/2) = R/√2 ≈ 0.707R. The entire mass of the disc acts rotationally as though concentrated at distance R/√2 from the axis — closer than the outer rim because the inner mass drags the average inward."
  },

  {
    type: "fill",
    q: "For a body rolling without slipping, the rolling constraint relating the centre-of-mass speed v_cm to the angular velocity ω and radius R is v_cm = ___.",
    answer: "Rω",
    alt: ["R*omega", "R*ω", "omega*R", "ω*R"],
    explanation: "v_cm = Rω. The contact point is instantaneously at rest, so the forward speed of the centre equals the tangential speed of the rim: v_cm = Rω. This constraint couples the translational and rotational degrees of freedom, allowing energy methods to solve rolling problems."
  },

  {
    type: "fill",
    q: "A solid sphere (I_cm = 2/5 MR²) is shifted by d = R using the parallel-axis theorem. Its moment of inertia about the tangential axis is I = ___.",
    answer: "7/5 MR²",
    alt: ["7MR^2/5", "(7/5)MR^2", "1.4MR^2", "7/5*M*R^2"],
    explanation: "I = I_cm + Md² = 2/5 MR² + MR² = 2/5 MR² + 5/5 MR² = 7/5 MR². The tangential axis just touches the sphere surface. This result is used in problems involving a sphere rolling on a surface, where the contact-point axis has I = 7/5 MR²."
  },

  {
    type: "fill",
    q: "A solid disc of mass M = 2 kg and radius R = 0.1 m. Its moment of inertia about the central axis is I = ___ kg·m².",
    answer: "0.01",
    alt: ["0.010", "0.0100", "1/100"],
    explanation: "I = ½MR² = ½ × 2 × (0.1)² = ½ × 2 × 0.01 = 0.01 kg·m². This compact disc stores rotational energy KE = ½Iω² = 50 J when spinning at 100 rad/s — a useful benchmark for flywheel calculations."
  }

];

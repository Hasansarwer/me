window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "The torque vector τ = r × F is directed:",
    options: [
      "Along the position vector r",
      "Along the applied force F",
      "Perpendicular to the plane containing r and F",
      "At 45° to both r and F"
    ],
    answer: 2,
    explanation: "Torque is the cross product r × F, and the cross product of two vectors is always perpendicular to the plane containing them. Its sense is given by the right-hand rule: curl the fingers from r toward F and the thumb points along τ."
  },

  {
    type: "mcq",
    q: "The torque |τ| = rF sinθ is greatest when the angle θ between r and F is:",
    options: [
      "0°",
      "30°",
      "60°",
      "90°"
    ],
    answer: 3,
    explanation: "sin θ reaches its maximum of 1 at θ = 90°, giving τ_max = rF. This is why you push a door perpendicular to its surface — the full force contributes to rotation. At θ = 0° or 180° the force acts along r, sinθ = 0, and the torque is zero."
  },

  {
    type: "mcq",
    q: "A force produces zero torque about a pivot when:",
    options: [
      "The force is very small in magnitude",
      "The force is applied far from the pivot",
      "The force acts along the line joining the pivot to the point of application",
      "The force is perpendicular to the position vector r"
    ],
    answer: 2,
    explanation: "τ = rF sinθ. If the force is directed along r (θ = 0° or 180°), sinθ = 0 so τ = 0 regardless of F or r. Pushing directly toward or away from the pivot produces no rotation. Option D (force perpendicular to r) gives maximum torque, not zero."
  },

  {
    type: "mcq",
    q: "The moment arm (lever arm) is defined as:",
    options: [
      "The distance r from the pivot to the point where force is applied",
      "The component of F perpendicular to r",
      "The perpendicular distance from the pivot to the line of action of the force",
      "The torque per unit force"
    ],
    answer: 2,
    explanation: "The moment arm d = r sinθ is the shortest (perpendicular) distance from the pivot to the line along which the force acts. This allows the simpler form τ = Fd — useful when d can be read directly from a geometry diagram even when r and θ are not explicitly given."
  },

  {
    type: "mcq",
    q: "Newton's second law for rotation about a fixed axis states:",
    options: [
      "τ = mα",
      "τ = Iω",
      "τ = mv",
      "τ = Iα"
    ],
    answer: 3,
    explanation: "τ_net = Iα is the rotational analogue of F_net = ma. The moment of inertia I replaces mass (it measures resistance to angular acceleration) and α replaces linear acceleration. Options B and C confuse angular velocity ω with angular acceleration α."
  },

  {
    type: "mcq",
    q: "The rotational analogue of mass m in the relation F = ma is:",
    options: [
      "Angular acceleration α",
      "Torque τ",
      "Moment of inertia I",
      "Angular velocity ω"
    ],
    answer: 2,
    explanation: "In τ = Iα, I takes the role of m: it measures resistance to changes in angular velocity. A larger I means the same torque produces a smaller angular acceleration, exactly as a larger mass yields a smaller linear acceleration under the same force."
  },

  {
    type: "mcq",
    q: "For a rigid body to be in complete static equilibrium, which conditions must both hold?",
    options: [
      "Net torque = 0 only",
      "Net force = 0 only",
      "Net force = 0 AND net torque = 0",
      "Angular velocity = 0 only"
    ],
    answer: 2,
    explanation: "Both ΣF = 0 (translational equilibrium) and Στ = 0 (rotational equilibrium) are required. A see-saw with equal and opposite forces at its ends has ΣF = 0 but still rotates because the forces form a couple with non-zero net torque. Neither condition alone is sufficient."
  },

  {
    type: "mcq",
    q: "When applying the torque condition for rotational equilibrium, the pivot point can be chosen:",
    options: [
      "Only at the centre of mass",
      "Only where the largest force acts",
      "At any point — Στ = 0 holds about every point for a body in equilibrium",
      "Only at the geometric centre of the body"
    ],
    answer: 2,
    explanation: "For a body in rotational equilibrium, Στ = 0 about any chosen pivot. The strategy is to place the pivot at an unknown force's point of action — that force then has zero moment arm and drops out of the torque equation, simplifying the algebra considerably."
  },

  {
    type: "mcq",
    q: "Door handles are placed at the edge farthest from the hinges because:",
    options: [
      "It is purely a design convention with no physical basis",
      "A larger moment arm r means the same push produces a larger torque about the hinge",
      "A smaller moment arm reduces the torque required",
      "The force at the hinge side is always zero"
    ],
    answer: 1,
    explanation: "τ = rF sinθ. Placing the handle far from the hinge maximises r, so a modest force F produces enough torque to open the door. Pushing near the hinge gives a tiny r and therefore a small torque — the door barely moves. Every lever and spanner exploits the same principle."
  },

  {
    type: "mcq",
    q: "A spanner of length 0.25 m has a 20 N force applied perpendicular to it. The torque about the bolt is:",
    options: [
      "0.0125 N·m",
      "0.8 N·m",
      "5 N·m",
      "80 N·m"
    ],
    answer: 2,
    explanation: "τ = rF sinθ = 0.25 × 20 × sin90° = 0.25 × 20 × 1 = 5 N·m. The force is perpendicular so sinθ = 1 and the full force contributes. Option A divides instead of multiplying; option D multiplies by 4 instead of 0.25."
  },

  {
    type: "mcq",
    q: "A wheel of moment of inertia I = 0.5 kg·m² experiences a net torque of 10 N·m. Its angular acceleration is:",
    options: [
      "5 rad/s²",
      "0.05 rad/s²",
      "20 rad/s²",
      "50 rad/s²"
    ],
    answer: 2,
    explanation: "From τ = Iα: α = τ/I = 10/0.5 = 20 rad/s². This mirrors a = F/m for linear motion. Option A computes τ − I; option D computes τ × I. Doubling I with the same torque would halve α."
  },

  {
    type: "mcq",
    q: "The rotational kinetic energy of a rigid body with moment of inertia I rotating at angular velocity ω is:",
    options: [
      "Iω",
      "½mv²",
      "Iω²",
      "½Iω²"
    ],
    answer: 3,
    explanation: "KE_rot = ½Iω² is the rotational analogue of ½mv². I replaces m and ω replaces v. Option C omits the factor of ½. Option B is the correct linear KE formula but uses the wrong variables (m and v instead of I and ω)."
  },

  {
    type: "mcq",
    q: "The angular momentum of a rigid body rotating about a fixed axis with moment of inertia I and angular velocity ω is:",
    options: [
      "L = Iα",
      "L = τω",
      "L = Iω",
      "L = mω"
    ],
    answer: 2,
    explanation: "L = Iω is the rotational analogue of linear momentum p = mv. It is conserved when the net torque is zero. Option A gives the product Iα, which equals the net torque τ, not momentum. Option D incorrectly uses mass m instead of moment of inertia I."
  },

  {
    type: "mcq",
    q: "The instantaneous power delivered by a torque τ to a body rotating at angular velocity ω is:",
    options: [
      "P = τ/ω",
      "P = τ²ω",
      "P = τω",
      "P = τ + ω"
    ],
    answer: 2,
    explanation: "P = τω is the rotational analogue of P = Fv. In time dt the torque does work dW = τ dθ, so P = dW/dt = τ(dθ/dt) = τω. This is why a motor with high torque at low rpm can deliver the same power as one with lower torque at higher rpm."
  },

  {
    type: "mcq",
    q: "A 300 N child sits 1.5 m from the pivot of a see-saw. For rotational equilibrium, a 450 N child must sit:",
    options: [
      "0.5 m from the pivot",
      "1.0 m from the pivot",
      "1.5 m from the pivot",
      "2.25 m from the pivot"
    ],
    answer: 1,
    explanation: "Στ = 0: 300 × 1.5 = 450 × d, so d = 450/450 = 1.0 m. The heavier child sits closer to the pivot. Option D (2.25 m) inverts the ratio; option C assumes weight doesn't matter. Choosing the pivot at the fulcrum makes both normal reactions drop out of the equation."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The magnitude of the torque produced by force F at position r from the pivot (angle θ between r and F) is |τ| = ___.",
    answer: "rF sinθ",
    alt: ["r*F*sin(theta)", "rFsin(theta)", "r*F*sinθ", "Fr sinθ", "F*r*sin(theta)"],
    explanation: "τ = rF sinθ. Only the component of F perpendicular to r (i.e. F sinθ) contributes to rotation; the component along r passes through the pivot and produces no torque. At θ = 90° the full force is effective; at θ = 0° none of it is."
  },

  {
    type: "fill",
    q: "Using the moment arm d (perpendicular distance from pivot to the line of action of F), the torque simplifies to τ = ___.",
    answer: "Fd",
    alt: ["F*d", "d*F", "dF"],
    explanation: "τ = Fd where d = r sinθ is the moment arm. This form is equivalent to rF sinθ but often easier to apply geometrically: d is simply the shortest distance from the pivot to the force's line of action, readable directly from a diagram."
  },

  {
    type: "fill",
    q: "Newton's second law for rotation gives the net torque as τ = ___.",
    answer: "Iα",
    alt: ["I*alpha", "I*α", "I alpha", "alpha*I", "α*I"],
    explanation: "τ = Iα is the rotational form of Newton's second law. I (moment of inertia) resists angular acceleration α just as m resists linear acceleration a. Rearranging gives α = τ/I, which shows that a larger I produces a smaller angular acceleration under the same torque."
  },

  {
    type: "fill",
    q: "A body is in rotational equilibrium when the net torque about any point equals ___.",
    answer: "0",
    alt: ["zero"],
    explanation: "Στ = 0 is the condition for rotational equilibrium — the body is not angularly accelerating. It may be at rest or spinning at constant ω. Paired with ΣF = 0 it defines complete static equilibrium. Crucially, this must hold about every possible pivot, not just one."
  },

  {
    type: "fill",
    q: "The angular momentum of a body with moment of inertia I rotating at angular velocity ω is L = ___.",
    answer: "Iω",
    alt: ["I*omega", "I*ω", "omega*I", "ω*I"],
    explanation: "L = Iω is the rotational analogue of p = mv. L is conserved whenever the net torque is zero — the angular-momentum counterpart of Newton's first law. A spinning skater pulling in their arms reduces I and so ω increases to conserve L."
  },

  {
    type: "fill",
    q: "The rotational kinetic energy of a body rotating at angular velocity ω with moment of inertia I is KE = ___.",
    answer: "½Iω²",
    alt: ["1/2*I*omega^2", "(1/2)*I*omega^2", "0.5*I*omega^2", "(1/2)Iω²"],
    explanation: "KE = ½Iω² is the rotational analogue of ½mv². For a rolling object, the total kinetic energy is the sum of translational (½mv²) and rotational (½Iω²) parts. Doubling ω quadruples the rotational KE, just as doubling v quadruples linear KE."
  },

  {
    type: "fill",
    q: "The work done by a constant torque τ as a body rotates through angle θ is W = τ × ___.",
    answer: "θ",
    alt: ["theta"],
    explanation: "W = τθ is the rotational analogue of W = Fd. Torque plays the role of force and angle plays the role of displacement. For a varying torque, W = ∫τ dθ — exactly mirroring W = ∫F dx for linear motion."
  },

  {
    type: "fill",
    q: "The power delivered by a torque τ to a body rotating at angular velocity ω is P = τ × ___.",
    answer: "ω",
    alt: ["omega"],
    explanation: "P = τω is the rotational analogue of P = Fv. Since P = dW/dt = τ(dθ/dt) = τω, a motor providing torque τ at rotational speed ω delivers power τω. A higher rpm at the same torque means more power — the basis of power ratings for engines."
  },

  {
    type: "fill",
    q: "A spanner 0.25 m long has a 20 N force applied at 30° to it. The torque about the bolt is ___ N·m.",
    answer: "2.5",
    alt: ["2.50"],
    explanation: "τ = rF sinθ = 0.25 × 20 × sin30° = 0.25 × 20 × 0.5 = 2.5 N·m. This is half the torque for a perpendicular push (5 N·m), because sin30° = 0.5. The tilted force is less effective at rotating the bolt since only its perpendicular component contributes."
  },

  {
    type: "fill",
    q: "A torque of 5 N·m acts on a wheel of moment of inertia I = 0.4 kg·m². The angular acceleration is ___ rad/s².",
    answer: "12.5",
    alt: ["12.50"],
    explanation: "α = τ/I = 5/0.4 = 12.5 rad/s². This is the rotational Newton's second law τ = Iα rearranged. A larger moment of inertia would give a smaller angular acceleration for the same torque — the wheel would spin up more slowly."
  },

  {
    type: "fill",
    q: "In the linear–rotational analogy, the quantity that plays the role of torque τ in rotational dynamics is ___ in linear dynamics.",
    answer: "F",
    alt: ["force", "Force"],
    explanation: "Torque τ is the rotational analogue of force F. Just as F = ma drives linear acceleration, τ = Iα drives angular acceleration. Every result of linear dynamics (impulse, work, power, Newton's laws) has a rotational counterpart obtained by substituting F→τ, m→I, a→α, v→ω."
  },

  {
    type: "fill",
    q: "The quantity that plays the role of moment of inertia I in rotational dynamics is ___ in linear dynamics.",
    answer: "m",
    alt: ["mass", "Mass"],
    explanation: "Mass m is the linear analogue of moment of inertia I. Both measure inertia — resistance to acceleration. m resists changes in linear velocity (F = ma) while I resists changes in angular velocity (τ = Iα). The analogy runs through every rotational formula."
  },

  {
    type: "fill",
    q: "The linear analogue of angular momentum L = Iω is p = ___.",
    answer: "mv",
    alt: ["m*v", "m v"],
    explanation: "Linear momentum p = mv corresponds to angular momentum L = Iω: (inertia) × (velocity) in each case. p is conserved when net force is zero; L is conserved when net torque is zero — the angular version of Newton's first law."
  },

  {
    type: "fill",
    q: "The linear analogue of rotational kinetic energy ½Iω² is ___.",
    answer: "½mv²",
    alt: ["1/2 mv^2", "(1/2)mv^2", "0.5mv^2", "1/2*m*v^2"],
    explanation: "½mv² (translational KE) corresponds to ½Iω² (rotational KE). In both, KE = ½ × (inertia) × (speed)². For a rolling object — a ball or wheel — the total KE is ½mv² + ½Iω², showing that both contributions must be accounted for."
  },

  {
    type: "fill",
    q: "The torque 5 N·m acts on the wheel (I = 0.4 kg·m²) for 2 s, starting from rest. The final angular velocity is ___ rad/s.",
    answer: "25",
    alt: ["25.0"],
    explanation: "α = τ/I = 5/0.4 = 12.5 rad/s². Then ω = ω₀ + αt = 0 + 12.5 × 2 = 25 rad/s. This uses the rotational kinematic equation ω = ω₀ + αt, the exact counterpart of v = u + at for linear motion."
  }

];

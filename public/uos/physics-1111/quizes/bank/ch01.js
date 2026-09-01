window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "Which equation mathematically defines periodic motion?",
    options: [
      "F = −kx",
      "x(t + T) = x(t)",
      "a(t) = −ω²x(t)",
      "E = ½kA²"
    ],
    answer: 1,
    explanation: "Periodic motion is defined by x(t+T) = x(t) — the observable x returns to exactly the same value after every period T. Hooke's law and the acceleration relation are properties of simple harmonic motion specifically, not of all periodic motion."
  },

  {
    type: "mcq",
    q: "Which of the following is periodic but NOT oscillatory?",
    options: [
      "A swinging pendulum",
      "A mass bouncing on a spring",
      "A ceiling fan rotating at constant speed",
      "A vibrating guitar string"
    ],
    answer: 2,
    explanation: "A ceiling fan returns to the same orientation after each full revolution (periodic), but the blade never reverses direction — it does not move back and forth about an equilibrium position. Oscillatory motion requires that reversal, so fan rotation is periodic but not oscillatory."
  },

  {
    type: "mcq",
    q: "Every oscillatory motion is necessarily:",
    options: [
      "Simple harmonic",
      "Periodic",
      "Uniform circular",
      "Damped"
    ],
    answer: 1,
    explanation: "Oscillatory motion involves repeating back-and-forth movement, which means it satisfies x(t+T)=x(t) — the condition for periodic motion. So every oscillatory motion is also periodic. The converse is not true: rotation is periodic but not oscillatory."
  },

  {
    type: "mcq",
    q: "The amplitude of an oscillator is the:",
    options: [
      "Time taken for one complete cycle",
      "Number of cycles per second",
      "Maximum displacement from the equilibrium position",
      "Speed at the equilibrium position"
    ],
    answer: 2,
    explanation: "Amplitude A = max|x(t)|. It measures how far the oscillator moves from equilibrium, not how fast it oscillates. The time for one cycle is the period T, and cycles per second is the frequency f."
  },

  {
    type: "mcq",
    q: "A body completes 40 oscillations in 20 s. Its period T is:",
    options: [
      "0.5 s",
      "2 s",
      "20 s",
      "40 s"
    ],
    answer: 0,
    explanation: "T = total time / number of oscillations = 20 s / 40 = 0.5 s. Alternatively, f = 40/20 = 2 Hz and T = 1/f = 0.5 s. The period is the time for exactly one complete cycle."
  },

  {
    type: "mcq",
    q: "1 hertz (Hz) is equal to:",
    options: [
      "1 radian per second",
      "2π radians per second",
      "1 cycle per second",
      "1 second"
    ],
    answer: 2,
    explanation: "1 Hz = 1 cycle per second. It counts complete oscillations per unit time. Radians per second is the unit of angular frequency ω, not ordinary frequency f. ω and f differ by the factor 2π."
  },

  {
    type: "mcq",
    q: "For an oscillator with frequency f = 5 Hz, the angular frequency ω is:",
    options: [
      "5 rad/s",
      "5π rad/s",
      "10π rad/s",
      "10 rad/s"
    ],
    answer: 2,
    explanation: "ω = 2πf = 2π × 5 = 10π ≈ 31.4 rad/s. Each complete cycle sweeps 2π radians, so angular frequency is always 2π times the ordinary frequency. A common mistake is to write ω = f or ω = πf."
  },

  {
    type: "mcq",
    q: "A restoring force always acts:",
    options: [
      "In the same direction as the displacement",
      "Perpendicular to the velocity",
      "Toward the equilibrium position",
      "Opposite to the velocity"
    ],
    answer: 2,
    explanation: "A restoring force is directed back toward equilibrium — it opposes the displacement. For Hooke's law (F = −kx), when x > 0 the force is negative (pointing back to zero), and vice versa. Without this opposition there can be no sustained oscillation."
  },

  {
    type: "mcq",
    q: "At maximum displacement (x = ±A), the speed of the oscillator is:",
    options: [
      "Maximum, equal to ωA",
      "Zero",
      "Equal to the amplitude A",
      "Half the maximum speed"
    ],
    answer: 1,
    explanation: "At the turning points x = ±A the restoring force is greatest and the oscillator momentarily stops before reversing direction — speed is zero there. Speed is maximum at the equilibrium position (x = 0) where the restoring force vanishes."
  },

  {
    type: "mcq",
    q: "Which statement correctly relates ω and f?",
    options: [
      "ω = f / 2π",
      "f = 2πω",
      "ω = 2πf",
      "ω = f"
    ],
    answer: 2,
    explanation: "ω = 2πf. One complete oscillation sweeps 2π radians, so the angular measure of frequency is 2π times the cycle frequency. Confusing ω with f (forgetting the 2π factor) is one of the most common errors in oscillation problems."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The period T and frequency f are related by T = ___.",
    answer: "1/f",
    alt: ["f⁻¹", "1 / f"],
    explanation: "T = 1/f. Period and frequency are reciprocals: if an oscillator completes 2 cycles per second (f = 2 Hz), each cycle takes 0.5 s (T = 0.5 s)."
  },

  {
    type: "fill",
    q: "The angular frequency ω expressed in terms of the period T is ω = ___.",
    answer: "2π/T",
    alt: ["2pi/T", "2*pi/T", "2π / T"],
    explanation: "ω = 2π/T = 2πf. One full oscillation corresponds to 2π radians and takes time T, so the angular rate is 2π/T radians per second."
  },

  {
    type: "fill",
    q: "For Hooke's law, the restoring force is F = ___.",
    answer: "-kx",
    alt: ["-k*x", "−kx", "- kx"],
    explanation: "F = −kx. The negative sign ensures the force always points back toward x = 0. When x is positive (displaced to the right), F is negative (force pulls left). A linear restoring force of this form produces simple harmonic motion."
  },

  {
    type: "fill",
    q: "Oscillatory motion is a ___ case of periodic motion (broader / narrower).",
    answer: "narrower",
    alt: ["special", "more specific", "specific"],
    explanation: "Every oscillatory motion is periodic, but not every periodic motion is oscillatory. Oscillatory motion requires back-and-forth movement about equilibrium, making it the more specific (narrower) category within all periodic motion."
  },

  {
    type: "fill",
    q: "The speed of an oscillator is zero at ___ displacement and maximum at the ___ position. (Answer: first blank only)",
    answer: "maximum",
    alt: ["Maximum", "max", "amplitude"],
    explanation: "Speed is zero at the turning points x = ±A (maximum displacement), where the oscillator reverses direction. Speed is greatest at the equilibrium position (x = 0), where the restoring force is zero and all energy is kinetic."
  },

  // ── Additional questions ────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "Simple harmonic motion (SHM) is a ___ case of oscillatory motion.",
    options: [
      "More general",
      "Special (more restrictive)",
      "Identical",
      "Unrelated"
    ],
    answer: 1,
    explanation: "SHM is a special type of oscillatory motion in which the restoring force is strictly proportional to displacement (Hooke's law type). All SHM is oscillatory, but not all oscillatory motion is SHM — a pendulum at large amplitude oscillates but does not satisfy the linear force condition."
  },

  {
    type: "mcq",
    q: "A pendulum completes one full swing in 0.25 s. Its frequency is:",
    options: [
      "0.25 Hz",
      "2 Hz",
      "4 Hz",
      "8 Hz"
    ],
    answer: 2,
    explanation: "f = 1/T = 1/0.25 = 4 Hz. The period is the time for one complete cycle, and frequency is its reciprocal. Always check units: T in seconds gives f in hertz (cycles per second)."
  },

  {
    type: "mcq",
    q: "Which of the following is the best example of free oscillation?",
    options: [
      "A tuning fork vibrating after being struck once",
      "A child on a swing being pushed repeatedly",
      "A loudspeaker driven by an amplifier",
      "A bridge vibrating under heavy traffic"
    ],
    answer: 0,
    explanation: "A tuning fork struck once then left alone vibrates at its natural frequency without any ongoing external driving force — this is free (natural) oscillation. The other options involve a continuously applied external force, making them forced oscillations."
  },

  {
    type: "fill",
    q: "If a body completes n oscillations in time t seconds, the frequency is f = ___.",
    answer: "n/t",
    alt: ["n / t"],
    explanation: "f = n/t. Frequency counts cycles per unit time, so dividing the number of oscillations n by the total time t gives the rate in hertz. The period is T = t/n, the reciprocal of this."
  },

  {
    type: "fill",
    q: "At the equilibrium position, the net ___ force on the oscillator is zero.",
    answer: "restoring",
    alt: ["Restoring", "net", "spring"],
    explanation: "The equilibrium position is defined as the point where the restoring force is zero (F = −kx = 0 when x = 0). This is why the oscillator has maximum speed there — no force is decelerating it. Away from equilibrium the restoring force grows and pulls the oscillator back."
  }

];

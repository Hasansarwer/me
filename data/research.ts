import type { Publication, TeachingEntry } from "@/types";

export const publications: Publication[] = [
  {
    authors: "Mohanty, R.K. & Sarwer, M.H.",
    year: 2019,
    title:
      "A class of numerical methods for the solution of fourth-order nonlinear ordinary differential equations on a graded mesh with boundary conditions of first kind",
    venue:
      "International Journal for Computational Methods in Engineering Science and Mechanics",
    details: "20:5, 434\u2013450",
    url: "https://doi.org/10.1080/15502287.2019.1614287",
  },
  {
    authors: "Mohanty, R.K., Sarwer, M.H. & Setia, N.",
    year: 2016,
    title:
      "A class of quasi-variable mesh methods based on off-step discretization for the solution of non-linear fourth order ordinary differential equations with Dirichlet and Neumann boundary conditions",
    venue: "Advances in Differential Equations",
    details: "2016:248",
  },
];

export const teachingEntries: TeachingEntry[] = [
  {
    institution: "College of Aviation Technology, National University",
    period: "2022 \u2013 Present",
    courses: ["Mathematics I\u2013V (Aeronautical & Aviation Science)"],
  },
  {
    institution: "South Asian University, New Delhi",
    period: "2013 \u2013 2019",
    courses: [
      "Numerical Analysis and Methods",
      "Numerics of Partial Differential Equations",
      "Computational Fluid Dynamics",
    ],
  },
  {
    institution: "Monash University, Melbourne (Remote TA)",
    period: "2019 \u2013 2022",
    courses: [
      "Computational Linear Algebra",
      "Introduction to Computational Mathematics",
      "Mathematical Modeling",
    ],
  },
];

export const researchSummary = {
  specialization:
    "Numerical Analysis, Computational Mathematics, High-Accuracy Numerical Methods",
  interests:
    "Data Science, Machine Learning, Financial Mathematics, Computational Fluid Dynamics",
  thesis:
    "High Accuracy Compact Numerical Methods for Nonlinear Biharmonic Problems of First Kind",
  advisor: "Prof. Ranjan Kumar Mohanty",
  institution: "South Asian University, New Delhi",
  years: "2013\u20132019",
};

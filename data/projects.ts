import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "salt-theme-gen",
    title: "salt-theme-gen \u2014 Design System Theme Engine",
    summary:
      "An open-source OKLCH-based theme generator that takes one hex color and produces a complete light/dark design system with 21 semantic colors, 32 interactive states, and WCAG accessibility reports.",
    problem:
      "Building accessible, consistent color systems is tedious and error-prone. Developers manually derive dozens of color tokens with no guarantee of perceptual consistency or accessibility compliance.",
    role: "Creator & Sole Developer",
    techStack: ["TypeScript", "OKLCH Color Science", "npm"],
    whatIBuilt: [
      "Automated derivation of 21 semantic colors from a single hex input using the Butterfly Rule",
      "32 interactive state generation (hover, active, disabled, focus for 8 intents)",
      "18-entry WCAG accessibility report baked into the generation pipeline",
      "Triadic, complementary, split-complementary, tetradic, and monochromatic harmony options",
      "20 nature-inspired presets with perceptual lightness compensation",
      "Light and dark mode output from one source color",
    ],
    outcome: [
      "Published on npm as salt-theme-gen",
      "Zero runtime dependencies, pure TypeScript",
      "Featured on DEV Community",
      "Powers this very website\u2019s theme system",
    ],
    whyItMatters:
      "Color science, design systems thinking, and open-source engineering in one package. A single hex color in \u2014 a mathematically derived, WCAG-compliant design system out. The kind of tool that only gets built by someone who understands both the math and the product.",
    github: "https://github.com/Hasansarwer/salt-theme-gen",
    npm: "https://www.npmjs.com/package/salt-theme-gen",
    featured: true,
    status: "published",
  },
  {
    slug: "react-native-salt",
    title: "React Native Salt \u2014 Open-Source UI System",
    summary:
      "119-component React Native UI library that responds to a single theme object. Pass one color and every component \u2014 buttons, inputs, modals, charts, data tables \u2014 adapts consistently across light and dark mode. No native linking, works in Expo Go.",
    problem:
      "Most React Native UI libraries force you into their design language. You either fight the theme system or ship an app that looks like every other app using the same kit. And if you\u2019re using AI to generate UI code, the output rarely works on the first try \u2014 inconsistent prop names, undocumented variants, broken theming.",
    role: "Creator & Sole Developer",
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "salt-theme-gen",
      "OKLCH Color Science",
    ],
    whatIBuilt: [
      "119 themed, accessible components: buttons, inputs, modals, charts, data tables, navigation, and more",
      "Single-color theming \u2014 pass one hex color, all 119 components adapt consistently in light and dark mode",
      "AI-friendly API: predictable prop names, typed unions for every variant, strong defaults so most props are optional",
      "Zero native linking required \u2014 works in Expo Go out of the box",
      "Live interactive demo app \u2014 swap presets, enter custom colors, adjust spacing/radius/font scales, see every component re-theme in real time",
      "Built on salt-theme-gen: WCAG-checked contrast, surface elevations, spacing, radius, font sizes, and state colors for every intent",
    ],
    outcome: [
      "Published on npm as @esaltws/react-native-salt",
      "119 production-ready components",
      "Integrated with salt-theme-gen for end-to-end design system automation",
      "Demo app available as APK for live testing",
    ],
    whyItMatters:
      "Combines design system thinking, color science, and React Native engineering into a complete open-source product. One color in, 119 themed components out \u2014 from mathematical color derivation to production UI.",
    github: "https://github.com/Hasansarwer/react-native-salt",
    npm: "https://www.npmjs.com/package/@esaltws/react-native-salt",
    demo: "https://drive.google.com/file/d/1i1qEqURhI9MKpvX9Z_8nuaY_PAasOBl8/view",
    featured: true,
    status: "published",
  },
  {
    slug: "dentistleads",
    title: "DentistLeads \u2014 B2B SaaS Lead Pipeline",
    summary:
      "A B2B SaaS data pipeline that identifies under-performing dental practices in any target city and generates AI-powered opportunity reports for dental marketing agencies.",
    problem:
      "Dental marketing agencies spend hours manually researching which practices in a city are struggling \u2014 low ratings, poor reviews, weak online presence. There was no automated way to surface qualified leads with evidence-backed opportunity scores.",
    role: "Creator & Sole Developer",
    techStack: [
      "FastAPI",
      "PostgreSQL",
      "SQLModel",
      "Alembic",
      "Python",
      "Anthropic SDK",
      "Google Maps API",
      "H3 Hex Grid",
      "Outscraper",
    ],
    whatIBuilt: [
      "H3 hex grid city coverage system \u2014 divides any target city into hexagonal cells and queries Google Maps Places API for dental practices in each cell",
      "Automated review scraping pipeline via Outscraper API collecting up to 20 reviews per practice",
      "Claude-powered AI analysis (Batch API) generating per-practice summaries, pain points, opportunities, and urgency levels",
      "Composite 0\u2013100 opportunity scorer: 30% rating gap + 25% review volume + 25% AI urgency + 20% review text quality",
      "REST API with city-level lead reports, full practice report cards, and CSV export for agency workflows",
      "Async FastAPI backend with PostgreSQL persistence, Alembic migrations, and configurable filter thresholds",
    ],
    outcome: [
      "Full pipeline from city name \u2192 qualified lead list in a single API call sequence",
      "AI-generated opportunity reports using Claude with adaptive thinking",
      "Exportable lead CSV ready for agency CRM import",
      "Configurable thresholds for rating, review count, and batch size",
    ],
    whyItMatters:
      "Combines data engineering, AI integration, and domain knowledge into a product that solves a real sales problem. Dental agencies pay for qualified leads \u2014 this pipeline generates them automatically at scale.",
    featured: true,
    status: "in-development",
  },
  {
    slug: "workingfromhammock",
    title: "WorkingFromHammock",
    summary:
      "Built the backend, data scraping pipeline, and geo-distance features for a travel guide platform connecting remote workers with destinations and workspaces.",
    problem:
      "Remote workers needed a reliable platform to discover travel destinations with accurate accommodation data, workspace proximity, and reviews \u2014 aggregated from multiple sources.",
    role: "Backend Developer & Data Engineer",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "React Redux",
      "Python",
      "BeautifulSoup",
      "Pandas",
      "NumPy",
    ],
    whatIBuilt: [
      "Designed the data model and relational database schema",
      "Built RESTful backend APIs for the platform",
      "Developed a Python scraping pipeline to extract and clean accommodation data from Booking.com",
      "Built a geo-distance calculation system to find nearest workspaces",
      "Processed and structured scraped data for frontend consumption",
    ],
    outcome: [
      "Functional travel platform with backend serving multiple frontend views",
      "Automated data pipeline replacing manual research",
      "Geo-distance feature providing location-aware workspace recommendations",
    ],
    whyItMatters:
      "Combines full-stack engineering with data automation \u2014 scraping, cleaning, and serving real-world data through a production API.",
    live: "https://workingfromhammock.com/",
    featured: true,
  },
  {
    slug: "sheikh-russel-digital-lab",
    title: "Sheikh Russel Digital Lab",
    summary:
      "Led development of a government-funded interactive digital learning platform delivering 1,000+ simulations for grades 6\u201310 across Bangladesh.",
    problem:
      "Bangladesh\u2019s Ministry of ICT needed high-quality, interactive digital learning content for the Sheikh Russel Digital Labs \u2014 a nationwide initiative to bring technology-driven education to schools. The content needed to be engaging, pedagogically sound, and technically robust.",
    role: "Pedagogy Specialist & Lead Software Engineer",
    techStack: [
      "Pixi.js",
      "Three.js",
      "ZIM.js",
      "JavaScript",
      "HTML5",
      "CSS",
      "HTML Canvas",
      "Git",
    ],
    whatIBuilt: [
      "Architected the technical framework for interactive educational content",
      "Developed 2D animations, interactive simulations, infographics, 3D models, video-based content, and quizzes",
      "Built a reusable content template system for scalable production",
      "Created particle effects, drag-and-drop interactions, and bilingual (Bengali/English) content engines",
      "Established coding standards and review processes for the dev team",
    ],
    outcome: [
      "Delivered 1,000+ interactive content modules covering grades 6\u201310",
      "Led a team of 23",
      "Content deployed to Sheikh Russel Digital Labs across Bangladesh",
      "Funded by the Ministry of ICT, Government of Bangladesh",
    ],
    whyItMatters:
      "Demonstrates the ability to lead large technical teams, combine domain expertise (pedagogy) with engineering, and deliver at scale for a government initiative. A direct example of building interactive products where mathematics, programming, and design converge.",
    featured: true,
  },
  {
    slug: "symptomwatch",
    title: "SymptomWatch",
    summary:
      "An AI-assisted mental health monitoring platform enabling daily symptom check-ins with risk scoring for clinical care teams supporting individuals with schizophrenia and related conditions.",
    problem:
      "Care teams managing patients with serious mental health conditions lack a simple, structured way to monitor symptom changes between appointments \u2014 leading to delayed interventions and preventable crises.",
    role: "Full-Stack Developer",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Twilio",
      "Web Push",
    ],
    whatIBuilt: [
      "Mobile-friendly daily check-in flow (3\u20135 minutes, no login required via magic links)",
      "Risk scoring engine calculating Green / Yellow / Red status from symptom data",
      "Real-time clinician dashboard with trend visualization and alerts",
      "AI-generated clinical summaries for care team review",
      "Automated reminder system via SMS, push notifications, and voice calls (Twilio)",
      "Exportable reports (PDF/CSV) with audit logs and secure data handling",
    ],
    outcome: [
      "Functional platform enabling early detection of symptom changes",
      "Reduced response time for clinical interventions",
      "Deployed on Vercel with Neon PostgreSQL",
    ],
    whyItMatters:
      "Demonstrates building a real-world healthcare application combining full-stack engineering, AI integration, and domain-sensitive UX design \u2014 where the stakes are clinical outcomes, not just user engagement.",
    live: "https://symptomwatch-puce.vercel.app/",
    featured: true,
  },
  {
    slug: "pallabi-ecosystem",
    title: "Pallabi Business Service Ecosystem",
    summary:
      "Architected and built a comprehensive ecommerce ecosystem: 1 web platform + 4 dedicated mobile apps serving retailers, producers, agents, and consumers.",
    problem:
      "Pallabi Business Service needed a connected digital platform to manage B2B and B2C operations \u2014 linking producers, retailers, field agents, and end consumers through a unified system.",
    role: "Full-Stack Developer (sole developer)",
    techStack: [
      "Next.js",
      "React",
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    whatIBuilt: [
      "Multi-vendor ecommerce web platform with role-based child login, product search, and category management",
      "Pallabi Babosha \u2014 mobile app for retailers: order placement, inventory browsing",
      "Pallabi Utpadok \u2014 mobile app for producers: product listing, order fulfillment",
      "Pallabi BDA \u2014 mobile app for business development agents: field operations",
      "Shocheton Kreta \u2014 consumer-facing mobile ecommerce app",
      "Shared backend APIs serving all 5 client applications",
      "Role-based authentication and access control system",
    ],
    outcome: [
      "Delivered 5 connected applications (1 web + 4 mobile) from a single backend",
      "Enabled digital operations for a multi-stakeholder business model",
    ],
    whyItMatters:
      "Shows the ability to think in systems \u2014 not just building individual apps, but designing an interconnected platform where multiple user types interact through shared infrastructure.",
    featured: true,
  },
  {
    slug: "data-analysis-dashboards",
    title: "Data Analysis & Visualization Projects",
    summary:
      "A collection of data science projects: predictive analytics, interactive dashboards, financial data analysis, and automated web scraping pipelines.",
    problem:
      "Multiple projects needed data to be collected, cleaned, analyzed, and visualized for decision-making.",
    role: "Data Analyst & Developer",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Dash",
      "BeautifulSoup",
      "Jupyter",
    ],
    whatIBuilt: [
      "House Sale Data Analysis \u2014 predictive analysis of King County housing data using regression models",
      "Flight Delay Statistics Dashboard \u2014 interactive dashboard visualizing airline delay patterns",
      "Stock Data Analysis \u2014 financial data extraction and analysis using web scraping and API integration",
      "Web Scraping Pipelines \u2014 automated data extraction from multiple web sources",
    ],
    outcome: [
      "Delivered actionable insights through interactive dashboards",
      "Automated data collection replacing manual processes",
      "Applied machine learning models for predictive analysis",
    ],
    whyItMatters:
      "Demonstrates practical data engineering and analysis skills \u2014 the ability to go from raw data sources to clean, visualized, actionable insights.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

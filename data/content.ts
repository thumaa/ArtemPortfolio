
import { Project, CaseStudy, Note } from '../types';

export const personalInfo = {
  name: "Artem",
  tagline: "Bridging Institutional Discipline with the Velocity of AI",
  bio: "Investor, builder, and relentless optimizer. Operating at the intersection of hard money, compute, and performance nutrition.",
  location: "Kansas City",
  email: "hello@example.com",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  socials: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Sunflower Mining",
    description: "Bitcoin mining + hosting built for reliability and transparency. A mining infrastructure business focused on straightforward hosting, operational clarity, and customer-grade reporting.",
    tags: ["Infrastructure", "Bitcoin"],
    stack: ["Operational Clarity", "Hosting Ops"],
    highlights: [
      "Built: operating model, customer experience, and reporting standards",
      "Focus: uptime, billing clarity, and scalable site operations"
    ],
    status: "Active",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube Embed
    featured: true
  },
  {
    id: "p2",
    title: "Mining Tenant Dashboard",
    description: "A client portal for mining tenants to manage everything in one place. A web app where customers can view invoices, payments, metrics, and quotes for expansion.",
    tags: ["Web App", "Fintech"],
    stack: ["React", "Billing Primitives"],
    highlights: [
      "Built: product spec + UX flow, admin-to-client invoice delivery",
      "Designed for: clean audit trail and tenant transparency"
    ],
    status: "In development (prototype)",
    videoUrl: "https://www.loom.com/embed/demo-id", // Example Loom Embed pattern
    featured: true
  },
  {
    id: "p3",
    title: "StickerMe.io",
    description: "Turn photos into sticker packs for digital + print. A platform to generate sticker packs from user uploads and route orders to fulfillment for real-world stickers.",
    tags: ["AI", "Consumer"],
    stack: ["Next.js", "Background Removal AI"],
    highlights: [
      "Built: concept, roadmap, personalization flow",
      "Focus: 'upload → preview → order' with minimal friction"
    ],
    status: "In progress",
    videoUrl: "", 
    featured: true
  },
  {
    id: "p4",
    title: "Next Phase AI",
    description: "AI consulting + implementation for real workflows, not demos. An agency helping small businesses adopt AI through automation and practical systems that actually stick.",
    tags: ["Agency", "AI"],
    stack: ["Consulting", "Automation"],
    highlights: [
      "Built: service offerings, client onboarding, delivery playbooks",
      "Focus: measurable outcomes and durable workflows"
    ],
    status: "Active",
    videoUrl: "", 
    featured: true
  },
  {
    id: "p5",
    title: "SnapCal",
    description: "AI calorie tracking built for simplicity. Quick capture, fast estimates, and a frictionless log without the subscription overhead.",
    tags: ["Product", "Health"],
    stack: ["UX", "Computer Vision"],
    highlights: [
      "Built: product spec, UX, core 'snap → estimate → log' workflow",
      "Focus: speed, consistency, and low cognitive load"
    ],
    status: "Prototype / iterating",
    videoUrl: "", 
    featured: true
  },
  {
    id: "p6",
    title: "LegoTrack",
    description: "A LEGO portfolio tracker powered by live market data. Built for tracking set values using APIs and simple categorization—less spreadsheet pain, more signal.",
    tags: ["FinTech", "Data"],
    stack: ["API Integration", "Valuation Logic"],
    highlights: [
      "Built: data model, API approach, portfolio view",
      "Focus: clean valuations, currency support, and outlier handling"
    ],
    status: "Working MVP",
    videoUrl: "", 
    featured: true
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "MW Compute Underwriting",
    problem: "Underwriting a multi-MW compute build where returns are highly sensitive to utilization and power pricing.",
    approach: "Built a per-MW project finance model and stress-tested outcomes with scenario grids.",
    keyLevers: ["Utilization ramp", "Power price bands"],
    outcome: "Enabled pricing and financing decisions with clear breakevens.",
    improvement: "Add telemetry-linked refreshes for live operational evolvement.",
    metric: "Project Finance"
  },
  {
    id: "cs2",
    title: "ASIC Return & Valuation Modeling",
    problem: "Determining when specific ASIC models are mispriced vs fundamentals.",
    approach: "Built a cycle-aware cashflow model and applied a DCF-style valuation lens.",
    keyLevers: ["Hashprice regime", "Efficiency curve"],
    outcome: "Improved machine-level buy/sell timing.",
    improvement: "Layer in reliability curves for terminal value assumptions.",
    metric: "Cycle-Aware"
  },
  {
    id: "cs3",
    title: "Endowment Stability Stress Testing",
    problem: "Avoiding long-horizon “cascading loss” paths where spending comps drawdowns.",
    approach: "Co-developed Monte Carlo simulations to map multi-year drawdown scenarios.",
    keyLevers: ["Distribution rate", "Sequence risk"],
    outcome: "Informed spending guardrails for long-term pool stability.",
    improvement: "Add regime switching to better capture stressed clustering.",
    metric: "Monte Carlo"
  },
  {
    id: "cs4",
    title: "Investment Manager Due Diligence",
    problem: "Evaluating a large manager universe in a consistent, decision-useful way.",
    approach: "Built standardized rubrics and scoring combining qualitative edge with quant screens.",
    keyLevers: ["Process durability", "Incentive alignment"],
    outcome: "Accelerated selection with comparable IC-ready memos.",
    improvement: "Automate alerts for drift and risk-limit breaches.",
    metric: "IC-Ready"
  }
];

export const notes: Note[] = [];

export const cpgData = {
  title: "GoodFatCo",
  subtitle: "Premium Tallow & Zero-Carb Performance Snacks",
  description: "Optimizing the mechanics of cooking and nutrition. High-performance fuel for enthusiasts.",
  featuredImage: "data/fire1.png",
  stats: [
    { label: "Launch Window", value: "2026" },
    { label: "Waitlist", value: "2.5k+" },
    { label: "Margin Focus", value: "48%" },
    { label: "Location", value: "KC" }
  ],
  timeline: [
    { 
      date: "2020", 
      title: "Phase 1: Inspiration", 
      description: "It began with a simple but obsessive question: How can I cook the perfect steak?",
      details: [
        "Optimizing the Method: Mastered meat preparation techniques.",
        "The Concept: Identified specific inspiration for cleaner snacks.",
        "Pure Experimentation: Early trials shared with friends/family."
      ],
      keyInsight: "Do things that you actually care about.",
      category: "Inspiration"
    },
    { 
      date: "2023", 
      title: "Phase 2: The Lightbulb Moment", 
      description: "The breakthrough was accidental: crunchy, tallow-fried beef bites.",
      details: [
        "The Happy Accident: Rendered trimmings created a unique texture.",
        "Proof of Concept: Slow-rendering beef fat creates airy, crisp bites.",
        "Main Event: Seasoning leftovers proved production could scale."
      ],
      keyInsight: "Innovation often hides in waste.",
      category: "Breakthrough"
    },
    { 
      date: "H2 2025", 
      title: "Phase 3: Bringing it All Together", 
      description: "Interweaving the fates of Tallow and Nibs.",
      details: [
        "The BBQ Gap: Identified market void for premium flavored tallows.",
        "Symbiotic R&D: Finalized technical processes for shelf-stability.",
        "Identity: Unified product lines for trial launch."
      ],
      keyInsight: "A business model clicks when products interweave.",
      category: "Ecosystem"
    },
    { 
      date: "2026", 
      title: "Phase 4: Execution", 
      description: "Turning the concept into commercial reality.",
      details: [
        "Operations: Secure long-term labeling and packaging vendors.",
        "Community Growth: Seed samples to elite BBQ influencers.",
        "Market: Secure retail placement by Q4."
      ],
      category: "Execution"
    }
  ]
};

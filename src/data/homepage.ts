import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline =
  "Spain's hidden Roman treasure — UNESCO Tarraco on a relaxed Catalan shore.";

export const homepageSubheading =
  "Tarragona is one of the Mediterranean's most underrated cruise destinations. Most visitors enjoy an excellent independent day among Roman ruins and Old Town lanes; organised tours add deeper historical interpretation and exclusive experiences.";

export const homepageDestinationLine =
  "Amphitheatre · Roman Circus · Forum · Cathedral · Old Town · Rambla Nova · Mediterranean Balcony";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Tarragona for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to Roman Tarraco, the cathedral quarter, Rambla Nova and a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Tarragona",
    shortLabel: "First visit",
    description:
      "Compare walking independently, our Editor's Choice highlights tour, or a guided cathedral visit before you choose.",
    href: "/compare/first-time-tarragona-day",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Tarragona's Roman centre and Old Town are among the finest Mediterranean ports to explore on foot.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Tarragona plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across Roman Tarraco, the cathedral and future premium shared departures — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & city guides",
    description:
      "Honest advice on walking from the cruise port, UNESCO Roman sites, viewpoints and when a guided tour actually helps.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Tarragona will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "Spain's forgotten Roman capital.",
  body: [
    "Long before Barcelona drew the cruise crowds, Tarraco was a seat of Roman power on the Iberian shore — amphitheatre open to the sea, circus carved into the city, forum and walls still readable in the Catalan light. UNESCO World Heritage protects that imperial layer; a living Part Alta and Rambla Nova keep the atmosphere human. You come for Roman stone and Mediterranean views; you stay for tapas, balconies and a pace that never feels staged.",
    "We write like a premium travel magazine for cruise days: fewer recommendations, clearer trade-offs, and always a plan that protects your return to the ship. Guided walks add historical interpretation; walking Tarragona independently is often the finest choice of all.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "One of the best independent ports",
    body: "Tarragona’s Roman core and Old Town sit within a realistic walk of many berths. Independent exploration is a first-class option — not a consolation prize.",
  },
  {
    title: "Guides unlock the story",
    body: "Ruins look superb alone. Qualified interpretation turns amphitheatre, circus and cathedral into a coherent narrative — valuable when history is your priority.",
  },
  {
    title: "All-aboard beats published departure",
    body: "Plan from the moment you must be aboard, then add a buffer. The ship will not wait for one more balcony photograph.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Tarragona without an excursion?",
      answer:
        "Yes. Tarragona is one of the best Mediterranean cruise ports for independent exploration. Many visitors walk the amphitheatre, circus approaches, Old Town and Mediterranean Balcony, pause for tapas and return with a sensible buffer. An organised excursion becomes especially useful for deeper historical interpretation, cathedral guidance or future exclusive-format experiences.",
    },
    {
      question: "How far is the historic centre from the cruise port?",
      answer:
        "Often a walkable or short-transfer distance depending on berth and port logistics. Allow time for terminal exit and the climb toward the Part Alta; exact timing varies — follow port signage and keep a return buffer.",
    },
    {
      question: "Should I book a tour?",
      answer:
        "Book a tour when you want expert Roman or cathedral narrative, structured pacing, or exclusive-feeling access. Skip a tour when you prefer flexible wandering, photography and café time — Tarragona rewards that choice unusually well.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Tarragona Highlights Walking Tour — the best first-time guided introduction to UNESCO Roman Tarraco and the Old Town in a compact cruise-friendly format.",
    },
  ];
}

export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice",
    type: "guided",
    title: "Editor's Choice",
    eyebrow: "Our top pick",
    description:
      "Tarragona Highlights Walking Tour — UNESCO Roman story with a local expert.",
    href: "/shore-excursions/tarragona-highlights-walking-tour",
    cta: "View Editor's Choice",
    imageKey: "amphitheatre",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description:
      "Amphitheatre to Balcony at your own pace — often the finest day ashore from this port.",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "walking",
    duration: "3–5 hours",
    distance: "Approximately 4–7 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent cruise passengers",
  },
  {
    slug: "roman-history",
    type: "history",
    title: "Roman History",
    description:
      "Amphitheatre, circus and forum — the imperial city of Tarraco.",
    href: "/guides/roman-tarragona",
    cta: "Explore Roman Tarragona",
    imageKey: "amphitheatre",
  },
  {
    slug: "food",
    type: "food-wine",
    title: "Food",
    description:
      "Central market, Rambla terraces and Catalan tapas near the Old Town.",
    href: "/guides/food-guide",
    cta: "Taste Tarragona",
    imageKey: "food",
  },
  {
    slug: "best-views",
    type: "photography",
    title: "Photography",
    description:
      "Amphitheatre sea views, cathedral steps and the Mediterranean Balcony.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "balcony",
  },
];

export const experienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice",
    type: "guided",
    title: "Editor's Choice",
    description:
      "Tarragona Highlights Walking Tour — our favourite first-time introduction.",
    href: "/shore-excursions/tarragona-highlights-walking-tour",
    cta: "View Editor's Choice",
    imageKey: "amphitheatre",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description:
      "Roman ruins, Old Town and Balcony — self-guided for one of the Mediterranean's best independent ports.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
    imageKey: "walking",
    duration: "3–5 hours",
    distance: "4–7 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent explorers",
  },
  {
    slug: "roman-history",
    type: "history",
    title: "Roman History",
    description: "UNESCO Tarraco — amphitheatre, circus and forum.",
    href: "/guides/roman-tarragona",
    cta: "Discover Tarraco",
    imageKey: "amphitheatre",
  },
  {
    slug: "cathedral",
    type: "custom",
    title: "Cathedral",
    description: "Guided cathedral visit for medieval Catalan art and architecture.",
    href: "/shore-excursions/guided-tarragona-cathedral",
    cta: "View cathedral tour",
    imageKey: "cathedral",
  },
  {
    slug: "food",
    type: "food-wine",
    title: "Food",
    description: "Market colour and tapas without leaving the walkable core.",
    href: "/guides/food-guide",
    cta: "Taste Tarragona",
    imageKey: "food",
  },
  {
    slug: "best-views",
    type: "photography",
    title: "Photography",
    description: "Balcony, amphitheatre and cathedral light.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "balcony",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description: "Open Roman landmarks and promenades when travelling with children.",
    href: "/guides/one-day-in-tarragona",
    cta: "Family-friendly planning",
    imageKey: "family",
  },
  {
    slug: "future-premium",
    type: "private",
    title: "Future Premium Collection",
    description: "In preparation — premium shared experiences evolving from private concepts.",
    href: "/wow-collection",
    cta: "Preview the collection",
    imageKey: "private",
  },
];

/** Homepage hero — destination copy (components stay generic). */
export const homepageHero = {
  eyebrow: "Tarragona Shore Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Tarragona?",
  subtitle:
    "Walk UNESCO Roman Tarraco independently, deepen the story with guided interpretation, or join our Editor's Choice highlights tour — three clear paths shaped around your hours ashore.",
  cards: [
    {
      slug: "explore-independently",
      emoji: "🚶",
      title: "Explore Independently",
      tagline:
        "A carefully paced walking guide for one of the Mediterranean's finest independent cruise ports.",
      highlights: [
        "Amphitheatre beside the sea",
        "Roman circus and forum approaches",
        "Cathedral and Old Town lanes",
        "Rambla Nova and Mediterranean Balcony",
        "Honest return-to-ship buffers",
      ],
      cta: "Open Walk It Yourself",
      href: "/guides/explore-independently",
      imageKey: "walking",
      wide: true,
    },
    {
      slug: "roman-history",
      emoji: "🏛️",
      title: "Discover Roman History",
      tagline:
        "UNESCO Tarraco — amphitheatre, circus and forum with the context that makes imperial stone come alive.",
      highlights: [
        "World Heritage Roman fabric",
        "Amphitheatre sea outlooks",
        "Circus and forum orientation",
        "Fewer crowds than Barcelona",
        "Pairs with cathedral time",
      ],
      cta: "Explore Roman Tarragona",
      href: "/guides/roman-tarragona",
      imageKey: "amphitheatre",
      wide: true,
    },
    {
      slug: "editors-choice-adventure",
      emoji: "⭐",
      title: "Editor's Choice",
      tagline:
        "Tarragona Highlights Walking Tour — local expertise on Roman and medieval Tarragona in one composed walk.",
      highlights: [
        "Our strongest first-time guided pick",
        "UNESCO orientation with commentary",
        "Old Town and cathedral approaches",
        "Compact cruise-aware timing",
        "Room for independent time after",
      ],
      cta: "View Editor's Choice",
      href: "/shore-excursions/tarragona-highlights-walking-tour",
      imageKey: "amphitheatre",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Tarragona?",
  subtitle:
    "The honest answer: Tarragona is one of the best Mediterranean ports for independent exploration. Many visitors happily walk Roman ruins, the Old Town and the Mediterranean Balcony. Guided experiences are ideal when you want historical interpretation, cathedral depth, or future exclusive-format access.",
  independent: {
    title: "You can explore Tarragona independently — and many passengers should",
    body: "The UNESCO historic centre rewards a flexible, lower-cost day for most guests:",
    items: [
      "Roman amphitheatre overlooking the sea",
      "Circus and forum approaches",
      "Cathedral quarter and Part Alta lanes",
      "Rambla Nova, Mediterranean Balcony and a tapas stop before walking back",
    ],
    note: "Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When a guided day is the better choice",
    body: "Organised commentary matters when you want more than wandering — or when exclusive pacing is the priority:",
    items: [
      {
        label: "Editor's Choice",
        detail: "Highlights walking tour of Roman and medieval Tarragona with a local expert",
      },
      {
        label: "Cathedral",
        detail: "Guided visit for art, architecture and sacred history",
      },
      {
        label: "Future Premium Collection",
        detail: "Planned shared departures based on premium private concepts — in preparation, not bookable",
      },
      {
        label: "Deeper Roman interpretation",
        detail: "When amphitheatre photographs alone are not enough",
      },
    ],
  },
  links: [
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/walking-from-port", label: "Cruise port guide" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Tarragona experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified — all products are currently in preparation.",
} as const;

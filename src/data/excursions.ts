import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships call at Tarragona’s commercial port on the Catalan coast. The UNESCO-listed Roman and medieval centre — amphitheatre, circus, forum and cathedral — sits within a realistic walking window for many berths, making independent exploration one of the Mediterranean’s strongest options. Organised walking tours add historical interpretation without long transfers. Confirm your ship’s all-aboard time — not merely the published departure — and aim to be back at the terminal 60–90 minutes early.";

const ITINERE_SUPPLIER = {
  kind: "affiliate" as const,
  name: "Itinere Turisme & Cultura",
  notes:
    "Official local guided-tour operator (turismedetarragona.com) — conceptual reference; original editorial copy. Confirm availability for your sailing.",
};

const FUTURE_PREMIUM_SUPPLIER = {
  kind: "future" as const,
  name: "Future Premium Shared Experiences",
  notes:
    "Internal label: future premium shared experiences based on premium private concepts. In preparation — not bookable. Designed for straightforward migration to direct operations.",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your Tarragona cruise call so you are back at the terminal with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "tarragona-highlights-walking-tour",
    title: "Tarragona Highlights Walking Tour",
    seoTitle: "Tarragona Highlights Walking Tour | Editor's Choice Shore Excursion",
    metaDescription:
      "Editor's Choice Tarragona shore excursion — a guided highlights walking tour of UNESCO Roman Tarraco and the Old Town, paced for cruise passengers.",
    category: "Editor's Choice",
    tagline:
      "The essential introduction: Roman Tarraco and the Catalan Old Town with a local expert — interpretation that transforms stones into story.",
    duration: "Approximately 2 hours",
    pace: "Moderate",
    bestFor:
      "First-time cruise visitors who want the strongest overview of Tarragona’s UNESCO heritage with guided historical context",
    overview:
      "Tarragona rewards two kinds of discovery — a superb independent stroll through amphitheatre, circus and Old Town, and a guided highlights walk that unlocks two millennia of Roman and medieval narrative. This Editor’s Choice day is the latter: a compact, cruise-aware walking tour shaped around the city’s official highlights circuit.",
    body: [
      "We chose this excursion because Tarragona’s Roman remains look magnificent on their own — and become unforgettable once a qualified guide explains how amphitheatre, circus and forum fitted imperial Tarraco.",
      "The format typically weaves key UNESCO sites with Old Town lanes at a pace suited to cruise timing, leaving room for independent café or balcony time afterwards.",
      "Guests who prefer unstructured wandering may be happier with our Walk It Yourself guide. That is a genuinely excellent choice from this port.",
      "Exact sequencing flexes with group pace, opening hours and ship timing. Expect uneven historic surfaces and some gentle climbs toward the cathedral quarter.",
    ],
    highlights: [
      "UNESCO World Heritage orientation with local commentary",
      "Roman amphitheatre and key Tarraco landmarks as timing allows",
      "Old Town lanes and cathedral approaches",
      "Compact walking format near the cruise port",
      "Cruise-aware pacing with return planning",
    ],
    itinerary: [
      {
        title: "Meet near the historic centre approach",
        detail:
          "Join your guide close to a practical meeting point for cruise visitors and confirm timing against all-aboard.",
      },
      {
        title: "Roman Tarraco highlights",
        detail:
          "Walk key remains of imperial Tarraco — amphitheatre outlooks and related Roman fabric — with historical interpretation.",
      },
      {
        title: "Old Town and cathedral quarter",
        detail:
          "Continue through the Part Alta toward cathedral approaches and medieval lanes that layer Catalan life over Roman foundations.",
      },
      {
        title: "Free time or return",
        detail:
          "Finish near a practical point for independent exploration, a Mediterranean Balcony pause, or the walk back toward the ship.",
      },
    ],
    included: [
      "English-speaking local guide commentary",
      "Highlights walking orientation of Roman and medieval Tarragona",
      "Cruise-aware pacing",
      "Return planning guidance around all-aboard",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — Roman and medieval surfaces are uneven",
      "Bring sun protection; amphitheatre terraces can be exposed",
      "If you want maximum unstructured wandering, consider Walk It Yourself instead",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "It is the best first-time balance: Tarragona’s essential UNESCO story delivered by a local expert in a compact walking format that still leaves room for independent time ashore.",
      },
      {
        question: "Can I see Tarragona without this tour?",
        answer:
          "Yes — and many visitors should. The historic centre is one of the Mediterranean’s finest independent cruise days. Choose this tour when you want deeper historical interpretation rather than navigation help alone.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Moderate walking on historic surfaces with some gentle climbs. Guests with limited mobility should ask about steps and amphitheatre access in advance.",
      },
    ],
    relatedExcursionSlugs: [
      "guided-tarragona-cathedral",
      "future-shared-roman-tarraco-discovery",
      "future-shared-cathedral-old-town-exclusive",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — historic lanes and amphitheatre terraces",
    cruiseSuitability: "Excellent on a half day or longer usable time ashore",
    editorChoice: true,
    whyWeChose: {
      lead: "Tarragona’s finest cruise-day gift is Roman Tarraco — and a skilled local guide turns magnificent ruins into a coherent imperial story.",
      whyRecommended:
        "Independent walking is superb here. We still recommend this highlights tour when you want qualified interpretation of UNESCO sites without giving up the city’s walkable scale.",
      whoItSuits:
        "Curious first-timers, history-minded guests and anyone who prefers narrative context over a pure self-guided loop.",
      whatMakesItSpecial:
        "You leave understanding why Tarraco mattered to Rome — not only photographing an amphitheatre beside the sea.",
      cruiseFit:
        "A compact walking format that protects return timing while covering the city’s essential story.",
      theExperience:
        "You understand why Tarragona is one of the Mediterranean’s most underrated cruise ports — and you still have time for the Balcony, a tapas stop, or a cathedral pause before the ship.",
    },
    supplier: ITINERE_SUPPLIER,
  },
  {
    slug: "guided-tarragona-cathedral",
    title: "Guided Tarragona Cathedral",
    seoTitle: "Guided Tour of Tarragona Cathedral — Shore Excursion",
    metaDescription:
      "Guided Tarragona Cathedral visit for cruise passengers — medieval art, Catalan Gothic and cathedral heritage with a professional local guide.",
    category: "History",
    tagline:
      "Tarragona’s cathedral as an icon of medieval Catalonia — guided access to art, architecture and sacred history.",
    duration: "Approximately 1 hour 30 minutes",
    pace: "Relaxed",
    bestFor:
      "Guests who want focused cathedral interpretation after — or instead of — a broader Roman highlights walk",
    overview:
      "Rising above the Part Alta, Tarragona Cathedral is the city’s medieval heart. A guided visit brings order to cloister, façade and interior detail that most independent visitors only skim.",
    body: [
      "Ideal when sacred architecture and Catalan Gothic matter as much as Roman ruins.",
      "Pairs naturally with independent amphitheatre time or our Editor’s Choice highlights walk on a longer call.",
      "Guests seeking only outdoor Roman remains may prefer Walk It Yourself or the highlights tour instead.",
    ],
    highlights: [
      "Professional guide at Tarragona Cathedral",
      "Medieval art and architectural context",
      "Cloister and interior highlights as access allows",
      "Compact format suited to cruise timing",
      "Easy to combine with independent Old Town time",
    ],
    itinerary: [
      {
        title: "Meet at the cathedral approach",
        detail: "Join your guide near the cathedral steps and confirm visiting conditions for the day.",
      },
      {
        title: "Guided cathedral visit",
        detail:
          "Explore façade, interior and cloister highlights with commentary on Tarragona’s medieval and artistic heritage.",
      },
      {
        title: "Free time in the Part Alta",
        detail:
          "Finish with time for Old Town lanes, a café pause or the walk toward Rambla Nova and the ship.",
      },
    ],
    included: [
      "Professional English-speaking guide (language options may vary by departure)",
      "Cathedral visit orientation",
      "Cruise-aware pacing",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Food and drinks",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Dress respectfully for a sacred interior",
      "Combine with amphitheatre photographs before or after if time allows",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this different from Editor's Choice?",
        answer:
          "Yes. Editor’s Choice is a broader city highlights walk. This experience concentrates on the cathedral’s art and architecture.",
      },
      {
        question: "Can I visit the cathedral independently?",
        answer:
          "Often yes, subject to opening hours and tickets. A guide adds interpretation you will not get from a quick self-paced look inside.",
      },
    ],
    relatedExcursionSlugs: [
      "tarragona-highlights-walking-tour",
      "future-shared-cathedral-old-town-exclusive",
      "future-shared-mediterranean-balcony-catalan-flavours",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed — cathedral approach includes steps",
    cruiseSuitability: "Works well on shorter or flexible port calls",
    editorChoice: false,
    supplier: ITINERE_SUPPLIER,
  },
  {
    slug: "future-shared-roman-tarraco-discovery",
    title: "Future Shared Roman Tarraco Discovery",
    seoTitle: "Future Premium Shared — Roman Tarraco Discovery | In Preparation",
    metaDescription:
      "In preparation: a future premium shared Roman Tarraco discovery for cruise passengers — amphitheatre, circus and forum with deeper interpretation. Not bookable.",
    category: "Luxury",
    tagline:
      "Future premium shared experience — deep Roman interpretation across amphitheatre, circus and forum. In preparation — not bookable.",
    duration: "To be confirmed",
    pace: "Relaxed",
    bestFor:
      "Future guests who want exclusive-feeling Roman interpretation in a small shared group rather than a private hire",
    overview:
      "This placeholder marks a planned premium shared departure evolved from private Roman experiences — intimate group size, richer archaeological narrative and cruise-first timing. It is not available to book.",
    body: [
      "Internally labelled as a future premium shared experience to keep migration to direct operations straightforward.",
      "Concept focus: amphitheatre, Roman circus and forum with slower pacing than a standard highlights walk.",
      "No pricing is published. Do not treat this page as a live product.",
    ],
    highlights: [
      "Future premium shared format",
      "Deep Roman Tarraco interpretation",
      "Amphitheatre, circus and forum focus",
      "Small-group pacing (planned)",
      "In preparation — not bookable",
    ],
    itinerary: [
      {
        title: "Concept outline only",
        detail:
          "A future shared departure will meet near the historic centre and move through Tarraco’s principal Roman sites with extended commentary.",
      },
    ],
    included: [
      "To be confirmed when the shared departure launches",
    ],
    notIncluded: [
      "Not bookable — no inclusions until launch",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Register interest via enquire if you want updates — this is not a live booking",
      "For today, choose Editor's Choice or Walk It Yourself",
    ],
    faqs: [
      {
        question: "Can I book this now?",
        answer:
          "No. This is a comingSoon placeholder for a future premium shared experience. Editor’s Choice and the cathedral tour are the current editorial products.",
      },
    ],
    relatedExcursionSlugs: [
      "tarragona-highlights-walking-tour",
      "future-shared-cathedral-old-town-exclusive",
      "future-shared-mediterranean-balcony-catalan-flavours",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "To be confirmed",
    cruiseSuitability: "Planned for half-day and longer calls",
    editorChoice: false,
    supplier: FUTURE_PREMIUM_SUPPLIER,
  },
  {
    slug: "future-shared-cathedral-old-town-exclusive",
    title: "Future Shared Cathedral & Old Town Exclusive",
    seoTitle: "Future Premium Shared — Cathedral & Old Town | In Preparation",
    metaDescription:
      "In preparation: a future premium shared cathedral and Old Town exclusive for Tarragona cruise passengers. Not bookable. Practical cruise-day timing, walking adv",
    category: "Luxury",
    tagline:
      "Future premium shared experience — cathedral access and Part Alta atmosphere with exclusive-feeling pacing. In preparation — not bookable.",
    duration: "To be confirmed",
    pace: "Relaxed",
    bestFor:
      "Future guests seeking a richer medieval and Old Town shared experience than a standard cathedral visit",
    overview:
      "Planned as a premium shared evolution of private cathedral and Old Town days — slower Part Alta wandering, cathedral depth and Catalan context. Not currently bookable.",
    body: [
      "Internal product family: future premium shared experiences.",
      "Designed so private-concept quality can later run as shared departures without rebuilding the catalogue.",
      "No pricing. No live checkout.",
    ],
    highlights: [
      "Future premium shared format",
      "Cathedral and Part Alta focus",
      "Exclusive-feeling small group (planned)",
      "In preparation — not bookable",
    ],
    itinerary: [
      {
        title: "Concept outline only",
        detail:
          "A future shared departure will combine cathedral interpretation with unhurried Old Town lanes above the Roman city.",
      },
    ],
    included: ["To be confirmed at launch"],
    notIncluded: ["Not bookable"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "See Guided Tarragona Cathedral for the current cathedral product concept",
    ],
    faqs: [
      {
        question: "Is this available?",
        answer: "Not yet. It remains a comingSoon future premium shared placeholder.",
      },
    ],
    relatedExcursionSlugs: [
      "guided-tarragona-cathedral",
      "tarragona-highlights-walking-tour",
      "future-shared-roman-tarraco-discovery",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "To be confirmed",
    cruiseSuitability: "Planned for flexible half days",
    editorChoice: false,
    supplier: FUTURE_PREMIUM_SUPPLIER,
  },
  {
    slug: "future-shared-mediterranean-balcony-catalan-flavours",
    title: "Future Shared Mediterranean Balcony & Catalan Flavours",
    seoTitle: "Future Premium Shared — Balcony & Catalan Flavours | In Preparation",
    metaDescription:
      "In preparation: a future premium shared Mediterranean Balcony and Catalan flavours experience for Tarragona cruise passengers. Not bookable.",
    category: "Luxury",
    tagline:
      "Future premium shared experience — Balcony views, market atmosphere and Catalan tasting stops. In preparation — not bookable.",
    duration: "To be confirmed",
    pace: "Relaxed",
    bestFor:
      "Future guests who want scenery and Catalan food culture in a premium shared format",
    overview:
      "A planned shared departure drawing on private food-and-views concepts — Rambla Nova, the Mediterranean Balcony, market colour and tapas culture — without rushing the ship’s clock. Not bookable today.",
    body: [
      "Part of the future premium shared collection for direct-operations readiness.",
      "Complements Roman and cathedral products rather than replacing independent tapas wandering.",
      "No pricing published.",
    ],
    highlights: [
      "Future premium shared format",
      "Mediterranean Balcony and Rambla Nova",
      "Catalan flavours concept",
      "In preparation — not bookable",
    ],
    itinerary: [
      {
        title: "Concept outline only",
        detail:
          "A future shared departure will link viewpoint, promenade and tasting stops with cruise-aware timing.",
      },
    ],
    included: ["To be confirmed at launch"],
    notIncluded: ["Not bookable"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Use our Food Guide and Walk It Yourself for tapas ideas today",
    ],
    faqs: [
      {
        question: "Can I book flavours experiences now?",
        answer:
          "This shared premium product is not live. Explore independently with our food guide, or enquire for private concepts when offered.",
      },
    ],
    relatedExcursionSlugs: [
      "tarragona-highlights-walking-tour",
      "guided-tarragona-cathedral",
      "future-shared-roman-tarraco-discovery",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "To be confirmed",
    cruiseSuitability: "Planned for half-day calls with tasting time",
    editorChoice: false,
    supplier: FUTURE_PREMIUM_SUPPLIER,
  },
];

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}

export function getEditorsChoiceExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.editorChoice === true);
}

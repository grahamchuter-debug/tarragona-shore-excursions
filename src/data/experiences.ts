import type { GuidePage } from "./types";

export const experiencePages: GuidePage[] = [
  {
    slug: "walking-from-port",
    title: "Cruise Port Guide",
    seoTitle: "Tarragona Cruise Port Guide — Walking to the Historic Centre",
    metaDescription:
      "How to reach Tarragona's UNESCO historic centre from the cruise port, typical timing, route tips and when a taxi is smarter.",
    tagline:
      "A Catalan port where Roman stone and Mediterranean views sit within realistic reach of the ship.",
    overview:
      "Tarragona's cruise calls place you beside one of Spain's great Roman cities. Depending on berth and port logistics, the amphitheatre district and Part Alta are often reachable on foot or with a short transfer — making this one of the Mediterranean's strongest independent ports.",
    body: [
      "Follow terminal and port signage toward the city centre rather than wandering the working docks.",
      "Allow time for the climb toward the Old Town; amphitheatre terraces sit lower toward the sea.",
      "If heat, mobility limits or a tight call are factors, take a short taxi to the amphitheatre or Rambla Nova instead of proving a point.",
      "Always leave a buffer to re-clear terminal security before all-aboard.",
    ],
    highlights: [
      "Historic centre close to cruise logistics",
      "Amphitheatre as a visual sea-level anchor",
      "Part Alta climb toward cathedral",
      "Taxi backup always available",
    ],
    tips: [
      "Wear shoes suited to uneven Roman and medieval surfaces",
      "Mark the terminal entrance on your map before you explore",
      "Morning light on the amphitheatre is calmer than mid-afternoon heat",
    ],
    faqs: [
      {
        question: "Do I need a tour to see Tarragona?",
        answer:
          "Not necessarily. A walking tour adds historical interpretation; independent exploration works exceptionally well when your call is flexible.",
      },
      {
        question: "How long does the walk take?",
        answer:
          "It varies with berth and route. Many guests reach key sights within a walkable or short-transfer window — plan from all-aboard, not best-case estimates.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Walk It Yourself",
        description: "Full self-guided Roman and Old Town route when independence is genuinely best.",
        href: "/guides/explore-independently",
      },
    ],
    relatedSlugs: ["explore-independently", "roman-tarragona", "cruise-tips"],
    imageKey: "port",
    hubPath: "/guides",
  },
  {
    slug: "explore-independently",
    title: "Walk It Yourself",
    seoTitle: "Walk It Yourself | Independent Tarragona Roman & Old Town Walking Guide",
    metaDescription:
      "A cruise-friendly independent walking guide to Tarragona — amphitheatre, circus, forum, cathedral, Old Town, Rambla Nova, Mediterranean Balcony, market and t...",
    tagline:
      "Tarragona's UNESCO centre rewards independent explorers — often the finest day ashore of a Mediterranean cruise.",
    overview:
      "If you have comfortable shoes, curiosity and a few hours ashore, Tarragona is one of the best Mediterranean ports to explore without a tour. Amphitheatre, circus, forum, cathedral, Old Town lanes, Rambla Nova and the Mediterranean Balcony sit within a human-scale circuit. This guide helps you choose that honest option — without pretending a tour is always necessary.",
    body: [
      "Begin from the cruise port approach and orient toward the amphitheatre and sea.",
      "Walk Roman Tarraco, climb into the Part Alta for cathedral and Old Town atmosphere, then descend via Rambla Nova to the Mediterranean Balcony.",
      "Pause at the food market or a tapas terrace when timing allows — Catalan life is part of the day.",
      "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
    ],
    highlights: [
      "UNESCO sites walkable for many calls",
      "Flexible pacing and café stops",
      "No long transfer required for the core day",
      "Generous return buffer still essential",
    ],
    tips: [
      "Confirm your all-aboard time before you leave the terminal — then plan backwards",
      "Wear shoes for uneven stone; the Part Alta climb is gentle but real",
      "Do not cut the return to terminal fine",
    ],
    faqs: [
      {
        question: "Is Tarragona safe to explore independently?",
        answer:
          "The historic centre is generally straightforward for cruise visitors using normal city awareness. Crowds thicken around the amphitheatre and Rambla when several ships are in — still far quieter than Barcelona's peak lanes.",
      },
      {
        question: "When should I book an excursion instead?",
        answer:
          "When you want expert historical interpretation, a guided cathedral visit, or future exclusive-format experiences. Tarragona Highlights Walking Tour is the natural next step when a walk alone is not quite enough.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Tarragona Highlights Walking Tour",
        description:
          "When a self-guided loop is not quite enough — UNESCO narrative with a local expert.",
        href: "/shore-excursions/tarragona-highlights-walking-tour",
      },
    ],
    relatedSlugs: ["walking-from-port", "one-day-in-tarragona", "roman-tarragona", "best-viewpoints"],
    imageKey: "walking",
    hubPath: "/guides",
    independentWalk: {
      eyebrow: "Free self-guided route",
      idealFor: [
        "Cruise passengers with 4+ hours ashore",
        "First-time visitors who enjoy walking at their own pace",
        "Photographers and Roman-history enthusiasts",
        "Guests who want Catalonia without Barcelona crowds",
      ],
      duration: "3–5 hours",
      distance: "Approximately 4–7 km",
      difficulty: "Easy to moderate — uneven historic surfaces and a gentle climb to the Part Alta",
      bestFor: [
        "Independent explorers",
        "Families comfortable with uneven stone",
        "Anyone who prefers café pauses over a fixed itinerary",
      ],
      familyFriendly: true,
      wheelchairFriendly: false,
      recommendedReturnBuffer:
        "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
      route: [
        {
          number: 1,
          title: "Cruise Port",
          description:
            "Exit the cruise terminal area and follow signage toward the city. Orient yourself with the Mediterranean on one side and the rising historic centre inland. Confirm all-aboard before you wander.",
          durationMinutes: 20,
          tip: "If the walk feels long in heat, take a short taxi to the amphitheatre and save energy for the Part Alta.",
        },
        {
          number: 2,
          title: "Roman Amphitheatre",
          description:
            "Tarragona’s signature image: the amphitheatre open toward the sea. Walk the terraces, read the setting, and photograph the curve of stone against Mediterranean blue. You do not need every ticketed interior for a memorable first impression.",
          durationMinutes: 35,
          tip: "Morning light is kinder; midday glare on pale stone can be harsh for photography.",
        },
        {
          number: 3,
          title: "Roman Circus",
          description:
            "The circus once held chariot races within the urban fabric of Tarraco. Today fragments and vaults still explain the city’s imperial scale — larger and more civic than a single amphitheatre snapshot suggests.",
          durationMinutes: 30,
          tip: "Look for interpretive panels; the circus rewards a slower circuit than a photo stop.",
        },
        {
          number: 4,
          title: "Roman Forum",
          description:
            "Forum remains anchor the political and social heart of Roman Tarraco. Standing here connects amphitheatre spectacle to everyday imperial life — temples, administration and public space.",
          durationMinutes: 25,
        },
        {
          number: 5,
          title: "Cathedral",
          description:
            "Climb into the Part Alta toward Tarragona Cathedral. Even from the exterior steps, the Gothic and Romanesque presence defines the skyline. Enter if opening hours and tickets allow, or save a guided visit for deeper art and cloister context.",
          durationMinutes: 40,
          tip: "Dress respectfully if you go inside; combine with our cathedral excursion when interpretation matters.",
        },
        {
          number: 6,
          title: "Old Town",
          description:
            "Wander Part Alta lanes without a rigid checklist. Medieval fabric sits on Roman foundations; quieter side streets still feel residential. This is authentic Catalonia at walking pace — fewer crowds than Barcelona’s Gothic Quarter.",
          durationMinutes: 40,
        },
        {
          number: 7,
          title: "Rambla Nova",
          description:
            "Descend to Rambla Nova — Tarragona’s broad promenade of plane trees, terraces and city life. It links the elevated Old Town to the seafront outlook and makes an easy orientation spine for tired legs.",
          durationMinutes: 25,
          tip: "A café stop here is often smarter than rushing another ruin.",
        },
        {
          number: 8,
          title: "Mediterranean Balcony",
          description:
            "The Balcó del Mediterrani is the classic finale: railings, sea air and a long view over the harbour. Stand, photograph, and feel why Tarragona’s cruise day is about atmosphere as much as monuments.",
          durationMinutes: 20,
          tip: "Do not linger here if your return buffer is already tight — it is tempting.",
        },
        {
          number: 9,
          title: "Food Market",
          description:
            "If timing and opening hours allow, visit the Central Market for Catalan produce, seafood colour and local atmosphere. Even a short browse adds a living layer to the Roman day.",
          durationMinutes: 30,
          tip: "Markets close for midday breaks — check hours before detouring.",
        },
        {
          number: 10,
          title: "Tapas recommendations",
          description:
            "Choose a simple tapas or vermouth stop near Rambla Nova or the Part Alta edge. Prioritise places where locals sit; keep the meal light if you still have walking and security queues ahead.",
          durationMinutes: 40,
          tip: "Ask for local recommendations — anchovies, grilled vegetables and Catalan wines suit a cruise window.",
        },
        {
          number: 11,
          title: "Return to ship",
          description:
            "Trace your route toward the port while you still have energy. Aim to reach the terminal well before all-aboard — port security and shuttle logistics can surprise on busy turnaround days.",
          durationMinutes: 25,
          tip: "If legs tire, a taxi from Rambla Nova or the amphitheatre area to the terminal is sensible.",
        },
      ],
      dontMiss: [
        {
          category: "Best viewpoints",
          title: "Amphitheatre toward the sea",
          description: "The defining Tarragona photograph — stone, sky and Mediterranean.",
        },
        {
          category: "Best viewpoints",
          title: "Mediterranean Balcony",
          description: "Harbour and horizon from the Rambla Nova railing.",
        },
        {
          category: "Architecture",
          title: "Cathedral steps and façade",
          description: "Medieval Catalonia rising above Roman foundations.",
        },
        {
          category: "Hidden streets",
          title: "Quiet Part Alta lanes",
          description: "A few turns off the main flow, the Old Town feels lived-in.",
        },
        {
          category: "Culture",
          title: "Central Market",
          description: "Catalan produce and seafood colour when hours allow.",
        },
        {
          category: "Food",
          title: "Tapas near Rambla Nova",
          description: "A simple local lunch that still protects your ship buffer.",
        },
      ],
      coffeeStops: [
        {
          name: "Rambla Nova terrace",
          description:
            "An easy café pause on Tarragona’s main promenade — shade, people-watching and a sensible midpoint before the Mediterranean Balcony.",
          specialty: "Coffee, vermouth or a light bite",
          nearStop: "Rambla Nova",
        },
        {
          name: "Part Alta tapas bar",
          description:
            "A simple local stop near the cathedral quarter — choose somewhere locals sit rather than the loudest terrace on the main approach.",
          specialty: "Catalan tapas and local wine",
          nearStop: "Old Town / Cathedral",
        },
      ],
      localTips: [
        {
          label: "Public toilets",
          detail:
            "Use terminal facilities before you leave. In town, cafés, the market and larger venues are the practical options.",
        },
        {
          label: "Cash / card",
          detail:
            "Cards are widely accepted; keep small euro notes for markets and quick café stops.",
        },
        {
          label: "Water & sun",
          detail:
            "Bring a bottle from the ship and sun protection — amphitheatre terraces are exposed.",
        },
        {
          label: "Wi-Fi",
          detail:
            "Ship Wi-Fi fades once you leave the terminal. Cafés may offer connection for a quick schedule check.",
        },
        {
          label: "Safety",
          detail:
            "Use normal city awareness. Tarragona’s historic centre is accustomed to visitors and generally calmer than Barcelona.",
        },
        {
          label: "Accessibility",
          detail:
            "Uneven Roman paving, cathedral steps and the Part Alta climb limit wheelchair access. Stay nearer Rambla Nova and amphitheatre approaches if mobility is limited.",
        },
        {
          label: "Best time to walk",
          detail:
            "Earlier morning feels cooler on the amphitheatre. Midday brings more visitors. Late afternoon light on the Balcony is excellent if all-aboard allows.",
        },
        {
          label: "Cathedral etiquette",
          detail:
            "Respectful dress for sacred interiors; check opening hours before climbing solely for an interior visit.",
        },
      ],
      backToShip: {
        latestDeparture:
          "Leave the Mediterranean Balcony or your furthest Part Alta stop early enough for the walk or taxi back plus your personal buffer — do not cut it fine from the railing.",
        walkingTime:
          "Budget extra time from Rambla Nova / amphitheatre back to the cruise terminal, depending on pace, crowds and exact berth logistics.",
        taxiAlternative:
          "Taxis are available around Rambla Nova and main avenues if legs tire or heat rises — agree the cruise terminal clearly.",
        safetyMargin:
          "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
        notes:
          "If multiple ships are in port, allow extra time through terminal security. Comfortable shoes matter more than any packing tip.",
      },
      exploreFurther: {
        excursionSlug: "tarragona-highlights-walking-tour",
        title: "Want the story behind the stones?",
        body: "Independent walking is superb here. If you want qualified interpretation of UNESCO Tarraco — or simply clearer structure for your hours ashore — our Editor's Choice Tarragona Highlights Walking Tour is the natural next step. It is never required; it is the day we recommend when a walk alone is not quite enough.",
        href: "/shore-excursions/tarragona-highlights-walking-tour",
        ctaLabel: "Read about Editor's Choice",
      },
    },
  },
  {
    slug: "one-day-in-tarragona",
    title: "One Day in Tarragona",
    seoTitle: "One Day in Tarragona — Cruise Passenger Itinerary",
    metaDescription:
      "How to spend one day in Tarragona from a cruise ship — Roman highlights, Old Town, Balcony, food and honest timing advice.",
    tagline: "A single Catalan shore day that can feel complete without leaving the walkable core.",
    overview:
      "With a solid half day or more, prioritise amphitheatre, one further Roman site, cathedral exterior or interior, Rambla Nova and the Mediterranean Balcony — then protect your return.",
    body: [
      "Morning: amphitheatre and Roman fabric while light is kinder.",
      "Midday: Part Alta and cathedral quarter; lunch nearby.",
      "Afternoon: Rambla Nova, Balcony, optional market — then shipward with buffer.",
      "If hours are short, do amphitheatre + Balcony and skip the full circuit.",
    ],
    highlights: [
      "Realistic cruise-day sequencing",
      "Roman + Catalan atmosphere",
      "Family-friendly open spaces",
      "Clear Plan B for short calls",
    ],
    tips: [
      "Do not try to combine a long out-of-town wine trip with a full Roman circuit on a short call",
      "Children often enjoy amphitheatre space more than dense museum interiors",
    ],
    faqs: [
      {
        question: "Is one day enough?",
        answer:
          "Yes for the historic centre. Tarragona’s strength is depth in a compact area — not a long checklist of distant stops.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Walk It Yourself",
        description: "The full self-guided circuit for a complete day ashore.",
        href: "/guides/explore-independently",
      },
    ],
    relatedSlugs: ["explore-independently", "cruise-tips", "roman-tarragona"],
    imageKey: "highlights",
    hubPath: "/guides",
  },
  {
    slug: "roman-tarragona",
    title: "Roman Tarragona",
    seoTitle: "Roman Tarragona Guide — UNESCO Tarraco for Cruise Passengers",
    metaDescription:
      "Guide to Roman Tarragona (Tarraco) for cruise visitors — amphitheatre, circus, forum and UNESCO World Heritage context. Practical cruise-day timing, walking adv",
    tagline: "Imperial Tarraco beside the Mediterranean — Spain's forgotten Roman capital.",
    overview:
      "Tarraco was a major Roman centre on the Iberian Peninsula. Surviving amphitheatre, circus and forum remains form a UNESCO World Heritage ensemble that rewards both independent walking and guided interpretation.",
    body: [
      "Start with the amphitheatre for orientation and the classic sea view.",
      "Add circus and forum to understand civic scale beyond spectacle.",
      "A highlights walking tour adds narrative you will not get from photographs alone.",
    ],
    highlights: [
      "UNESCO World Heritage",
      "Amphitheatre by the sea",
      "Circus and forum fabric",
      "Fewer crowds than better-known Spanish ports",
    ],
    tips: [
      "Bring sun protection for exposed terraces",
      "Combine with cathedral time for Roman-to-medieval continuity",
    ],
    faqs: [
      {
        question: "Do I need tickets for every site?",
        answer:
          "Access rules vary by monument and season. Some viewpoints are free; interiors and museums may require tickets. Check on the day.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Tarragona Highlights Walking Tour",
        description: "Guided UNESCO orientation for cruise timing.",
        href: "/shore-excursions/tarragona-highlights-walking-tour",
      },
    ],
    relatedSlugs: ["explore-independently", "cathedral-guide", "best-viewpoints"],
    imageKey: "amphitheatre",
    hubPath: "/guides",
  },
  {
    slug: "cathedral-guide",
    title: "Cathedral Guide",
    seoTitle: "Tarragona Cathedral Guide for Cruise Passengers",
    metaDescription:
      "Visiting Tarragona Cathedral on a cruise day — exterior highlights, interior tips and when a guided tour helps. Practical cruise-day timing, walking advice and ",
    tagline: "Medieval Catalonia rising above Roman foundations.",
    overview:
      "Tarragona Cathedral crowns the Part Alta. The approach alone is worth the climb; a guided visit unlocks art and architectural detail most cruise visitors miss.",
    body: [
      "Allow time for steps and the elevated Old Town approach.",
      "Exterior and square atmosphere are free rewards if interiors are closed.",
      "Our Guided Tarragona Cathedral product is the structured option when commentary matters.",
    ],
    highlights: [
      "Catalan Gothic and Romanesque layers",
      "Cloister and artistic heritage",
      "Skyline landmark of the Part Alta",
    ],
    tips: [
      "Respectful dress for sacred interiors",
      "Pair with amphitheatre photographs for a full visual story",
    ],
    faqs: [
      {
        question: "Is a guide necessary?",
        answer:
          "No for a quick look. Yes if you want medieval art and architectural narrative explained clearly in limited time.",
      },
    ],
    recommendations: [
      {
        category: "best-historic",
        title: "Guided Tarragona Cathedral",
        description: "Professional guide for cathedral art and heritage.",
        href: "/shore-excursions/guided-tarragona-cathedral",
      },
    ],
    relatedSlugs: ["roman-tarragona", "explore-independently", "one-day-in-tarragona"],
    imageKey: "cathedral",
    hubPath: "/guides",
  },
  {
    slug: "food-guide",
    title: "Food Guide",
    seoTitle: "Tarragona Food Guide — Market, Tapas & Cruise Timing",
    metaDescription:
      "Where to eat in Tarragona on a cruise day — Central Market, Rambla terraces, Catalan tapas and timing tips. Practical cruise-day timing, walking advice and retu",
    tagline: "Catalan flavours within walking distance of Roman stone.",
    overview:
      "Tarragona eats well without leaving the walkable core. Market colour, Rambla terraces and simple tapas stops keep lunch compatible with all-aboard.",
    body: [
      "Central Market for produce and atmosphere when open.",
      "Rambla Nova for easy terraces and people-watching.",
      "Part Alta edge bars for a more local feel — keep the meal timed.",
    ],
    highlights: [
      "Central Market",
      "Catalan tapas and vermouth culture",
      "Seafood and Mediterranean produce",
      "Cruise-friendly timing",
    ],
    tips: [
      "Avoid long leisurely lunches if your buffer is thin",
      "Mention allergies clearly — English is widely understood in tourist areas",
    ],
    faqs: [
      {
        question: "Do I need a food tour?",
        answer:
          "Not for a satisfying cruise lunch. A future premium flavours shared experience is planned; today, independent tapas work excellently.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Walk It Yourself",
        description: "Route includes market and tapas stops with ship timing.",
        href: "/guides/explore-independently",
      },
    ],
    relatedSlugs: ["explore-independently", "one-day-in-tarragona", "cruise-tips"],
    imageKey: "food",
    hubPath: "/guides",
  },
  {
    slug: "best-viewpoints",
    title: "Best Viewpoints",
    seoTitle: "Best Viewpoints in Tarragona for Cruise Passengers",
    metaDescription:
      "Best viewpoints in Tarragona — amphitheatre sea views, Mediterranean Balcony, cathedral approaches and photography tips.",
    tagline: "Where Roman stone meets Mediterranean light.",
    overview:
      "Tarragona’s photographs write themselves: amphitheatre toward the sea, cathedral steps, and the Mediterranean Balcony at the end of Rambla Nova.",
    body: [
      "Amphitheatre terraces for the classic UNESCO shot.",
      "Cathedral approaches for elevated Old Town drama.",
      "Mediterranean Balcony for harbour and horizon.",
    ],
    highlights: [
      "Amphitheatre sea outlook",
      "Mediterranean Balcony",
      "Cathedral façade and steps",
      "Part Alta lane glimpses",
    ],
    tips: [
      "Morning light on the amphitheatre; late day can haze the sea",
      "Keep gear light — you will climb",
    ],
    faqs: [
      {
        question: "What is the single best viewpoint?",
        answer:
          "For most cruise visitors, the amphitheatre toward the Mediterranean — with the Balcony as a perfect closing frame.",
      },
    ],
    recommendations: [
      {
        category: "best-photography",
        title: "Walk It Yourself",
        description: "A route sequenced for the best light and viewpoints.",
        href: "/guides/explore-independently",
      },
    ],
    relatedSlugs: ["roman-tarragona", "explore-independently", "one-day-in-tarragona"],
    imageKey: "balcony",
    hubPath: "/guides",
  },
  {
    slug: "cruise-tips",
    title: "Cruise Tips",
    seoTitle: "Tarragona Cruise Tips — Port Day Advice",
    metaDescription:
      "Practical cruise tips for Tarragona — timing, walking, money, heat and when to book a shore excursion. Practical cruise-day timing, walking advice and return-to",
    tagline: "Practical advice for a composed day in Spain's hidden Roman treasure.",
    overview:
      "Tarragona rewards preparation that is simple: confirm all-aboard, wear proper shoes, carry water, and decide early whether you want independent wandering or guided interpretation.",
    body: [
      "Plan backwards from all-aboard with a 60–90 minute buffer.",
      "Independent exploration is genuinely excellent — do not book a tour out of habit.",
      "Do book when history narrative or cathedral depth is your priority.",
    ],
    highlights: [
      "All-aboard discipline",
      "Footwear for historic stone",
      "Sun and heat management",
      "Tour vs independent decision",
    ],
    tips: [
      "Download offline maps before leaving the ship Wi‑Fi",
      "Keep a Plan B: amphitheatre + Balcony only",
    ],
    faqs: [
      {
        question: "Is Tarragona crowded?",
        answer:
          "Far less so than Barcelona on a typical call. You will still share amphitheatre terraces when multiple ships are in — arrive earlier for calmer photographs.",
      },
    ],
    recommendations: [
      {
        category: "best-value",
        title: "Honest advice",
        description: "Tour or independent — decide with clear trade-offs.",
        href: "/compare/tour-or-independent",
      },
    ],
    relatedSlugs: ["cruise-faq", "walking-from-port", "explore-independently"],
    imageKey: "port",
    hubPath: "/guides",
  },
  {
    slug: "cruise-faq",
    title: "FAQ",
    seoTitle: "Tarragona Cruise FAQ — Shore Excursions & Independent Day",
    metaDescription:
      "Frequently asked questions about Tarragona cruise days — walking, tours, Roman sites, cathedral, food and ship timing. Practical cruise-day timing, walking advi",
    tagline: "Straight answers for cruise passengers calling at Tarragona.",
    overview:
      "Common questions about exploring Tarragona independently, booking guided experiences, and protecting your return to the ship.",
    body: [
      "Tarragona is underrated — and walkable.",
      "Guided tours add interpretation, not merely transport.",
      "Future premium shared experiences are in preparation and not bookable yet.",
    ],
    highlights: [
      "Independent vs guided",
      "UNESCO Roman sites",
      "Cathedral visits",
      "Return-to-ship timing",
    ],
    tips: [
      "Read Honest Advice on the homepage before booking anything",
    ],
    faqs: [
      {
        question: "Is Tarragona worth it compared with Barcelona?",
        answer:
          "For Roman heritage, Mediterranean views and fewer crowds — yes. It is a different day: more compact, more archaeological, more relaxed Catalan atmosphere.",
      },
      {
        question: "Are shore excursions required?",
        answer:
          "No. Many passengers enjoy an outstanding independent day. Excursions help when you want expert narrative or structured cathedral access.",
      },
      {
        question: "Is there a Shore Excursions Group catalogue?",
        answer:
          "Not for this destination. We feature local-operator-informed products and future premium shared placeholders instead — demonstrating how World 2.0 handles ports with little existing cruise inventory.",
      },
      {
        question: "When will prices appear?",
        answer:
          "When EUR selling prices and fulfilment routes are verified. Until then all products remain comingSoon with no live checkout.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Tarragona Highlights Walking Tour",
        description: "Our top guided pick when you want more than wandering.",
        href: "/shore-excursions/tarragona-highlights-walking-tour",
      },
    ],
    relatedSlugs: ["cruise-tips", "explore-independently", "walking-from-port"],
    imageKey: "compare",
    hubPath: "/guides",
  },
];

export function getExperienceBySlug(slug: string): GuidePage | undefined {
  return experiencePages.find((g) => g.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiencePages.map((g) => g.slug);
}

export function getExperiencesByHub(hubPath: string): GuidePage[] {
  return experiencePages.filter((g) => g.hubPath === hubPath);
}

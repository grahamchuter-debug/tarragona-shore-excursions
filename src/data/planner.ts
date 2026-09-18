import { SIGNATURE_EXPERIENCE_PATH, signatureRivieraExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Tarragona explorer",
    description: "A low-risk city day using walking, tapas and your own return buffer.",
  },
  {
    id: "roman",
    label: "Roman history visitor",
    description: "UNESCO Tarraco with guided highlights interpretation.",
  },
  {
    id: "cathedral",
    label: "Cathedral & Old Town traveller",
    description: "Medieval Catalonia with cathedral guidance and Part Alta time.",
  },
  {
    id: "premium",
    label: "Future premium traveller",
    description: "Coming-soon shared premium concepts — preview only, not bookable.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "roman", label: "Roman Tarraco" },
  { id: "cathedral", label: "Cathedral & Old Town" },
  { id: "balcony", label: "Mediterranean Balcony" },
  { id: "food", label: "Food & market" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "roman" | "cathedral" | "premium";

export const TARRAGONA_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Tarragona Roman & Old Town",
    summary:
      "The most flexible choice: walk amphitheatre, circus, forum, cathedral approaches, Rambla Nova and the Mediterranean Balcony.",
    minimumHours: 4,
    links: [
      {
        label: "Cruise Port Guide",
        href: "/guides/walking-from-port",
        why: "Walking route, timing and return-to-ship advice.",
      },
      {
        label: "Walk It Yourself",
        href: "/guides/explore-independently",
        why: "Full self-guided Roman and Old Town plan.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Amphitheatre and Roman fabric while light is kinder." },
      { time: "Late morning", text: "Climb to cathedral and Part Alta lanes." },
      { time: "Afternoon", text: "Rambla Nova, Mediterranean Balcony, tapas — then return with a buffer." },
    ],
  },
  roman: {
    headline: "Guided Roman highlights day",
    summary:
      "Editor's Choice walking tour with UNESCO interpretation — ideal when you want the story behind the stones.",
    minimumHours: 4,
    links: [
      {
        label: "Tarragona Highlights Walking Tour",
        href: "/shore-excursions/tarragona-highlights-walking-tour",
        why: "Editor's Choice guided introduction.",
      },
      {
        label: "Roman Tarragona guide",
        href: "/guides/roman-tarragona",
        why: "Context for amphitheatre, circus and forum.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Join the highlights walking tour for Roman and Old Town narrative." },
      { time: "Afternoon", text: "Independent Balcony, café or cathedral time before returning to the ship." },
    ],
  },
  cathedral: {
    headline: "Cathedral and Part Alta day",
    summary:
      "Guided cathedral visit plus Old Town atmosphere — compact and cruise-friendly.",
    minimumHours: 3,
    links: [
      {
        label: "Guided Tarragona Cathedral",
        href: "/shore-excursions/guided-tarragona-cathedral",
        why: "Professional cathedral interpretation.",
      },
      {
        label: "Cathedral Guide",
        href: "/guides/cathedral-guide",
        why: "Approach tips and timing.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Amphitheatre photographs independently if time allows." },
      { time: "Midday", text: "Guided cathedral visit and Part Alta wandering." },
      { time: "Afternoon", text: "Rambla Nova and Balcony before the ship." },
    ],
  },
  premium: {
    headline: "Future Premium Collection preview",
    summary:
      "Coming-soon shared premium experiences based on private concepts — not bookable today. Use independent or Editor's Choice meanwhile.",
    minimumHours: 5,
    links: [
      {
        label: "Future Premium Collection",
        href: "/wow-collection",
        why: "Planned shared departures — in preparation.",
      },
      {
        label: signatureRivieraExperience.title,
        href: SIGNATURE_EXPERIENCE_PATH,
        why: "Flagship future Roman concept preview.",
      },
    ],
    dayPlan: [
      { time: "Today", text: "Walk It Yourself or Editor's Choice — premium shared departures are not live." },
      { time: "Later", text: "Watch for Future Premium Collection launch announcements." },
    ],
  },
};

function pickPlan(input: PlannerInput): PlanKey {
  if (input.travelStyle === "diy" || input.interests.includes("independent")) return "independent";
  if (input.interests.includes("cathedral")) return "cathedral";
  if (input.budget === "premium") return "premium";
  if (input.interests.includes("roman") || input.travelStyle === "guided") return "roman";
  return "independent";
}

function usableHours(input: PlannerInput): number {
  if (!input.arrivalTime || !input.departureTime) return 8;
  const [ah, am] = input.arrivalTime.split(":").map(Number);
  const [dh, dm] = input.departureTime.split(":").map(Number);
  const start = ah * 60 + (am || 0);
  const end = dh * 60 + (dm || 0);
  const raw = (end - start) / 60;
  return Math.max(2, raw - 1.5);
}

export function generateTarragonaPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = pickPlan(input);
  const plan = TARRAGONA_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium" && key !== "premium") {
    excursions.push({
      label: signatureRivieraExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future premium shared Roman concept — in preparation and not bookable.",
    });
  }

  if (input.interests.includes("food") && key === "independent") {
    excursions.push({
      label: "Food Guide",
      href: "/guides/food-guide",
      why: "Market and tapas ideas within the walkable core.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer amphitheatre and Balcony on foot.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Tarragona Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal access, walking and city orientation.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Tarragona Ship Schedule",
        href: "/ship-schedules/tarragona",
        why: "Recheck the published arrival and departure for your call when live.",
      },
      {
        label: "Compare Tarragona options",
        href: "/compare",
        why: "Review honest trade-offs before booking.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Tarragona terminal 60–90 minutes before all-aboard; heat and Part Alta climbs need contingency.",
      },
    ],
  };
}

/** Compatibility aliases used by CruisePlanner */
export function generateSavonaPlan(input: PlannerInput): PlannerResult {
  return generateTarragonaPlan(input);
}

export function generateSplitPlan(input: PlannerInput): PlannerResult {
  return generateTarragonaPlan(input);
}

/** @deprecated Compatibility alias */
export const SAVONA_DAY_PLANS = TARRAGONA_DAY_PLANS;

export function buildPlannerResult(input: PlannerInput): PlannerResult {
  return generateTarragonaPlan(input);
}

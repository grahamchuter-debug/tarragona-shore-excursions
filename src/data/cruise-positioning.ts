/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Tarragona take you? Choose the experience that fits your hours ashore — then build everything around your ship's schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "roman-history",
    title: "Roman History",
    body: "UNESCO Tarraco — amphitheatre, circus and forum beside the Mediterranean.",
    href: "/guides/roman-tarragona",
    icon: "route",
  },
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "A complete self-guided route for one of the Mediterranean's best independent cruise ports.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "photography",
    title: "Photography",
    body: "Amphitheatre sea views, cathedral steps and the Mediterranean Balcony.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "food",
    title: "Food",
    body: "Central market colour, Rambla terraces and Catalan tapas near the Old Town.",
    href: "/guides/food-guide",
    icon: "food",
  },
  {
    id: "families",
    title: "Families",
    body: "Walkable Roman landmarks and open promenades when travelling with children.",
    href: "/guides/one-day-in-tarragona",
    icon: "family",
  },
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Tarragona Highlights Walking Tour — our favourite guided introduction.",
    href: "/shore-excursions/tarragona-highlights-walking-tour",
    icon: "luxury",
  },
];

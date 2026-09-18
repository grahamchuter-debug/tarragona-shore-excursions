import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

/**
 * Shared Editorial Promise — destination may override copy in this module.
 * Tone: editorial trust, never a sales pitch. Editor's Choice badge stays separate.
 */
export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Tarragona cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "UNESCO Roman Tarraco and the medieval cathedral quarter." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Walk It Yourself", description: "A realistic self-guided Tarragona day — when independence is genuinely best." },
  { id: "best-coastal", label: "Best Coastal Experience", shortLabel: "Coastal", description: "Mediterranean Balcony and amphitheatre sea outlooks." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Balcony, amphitheatre terraces and cathedral approaches." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Tarragona premium shared flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Walkable Roman landmarks with sensible pacing." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Amphitheatre light, cathedral steps and Balcony panoramas." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Central market and Catalan tapas near the Old Town." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Future premium shared and private-format concepts — in preparation." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Quieter Part Alta lanes beyond the busiest amphitheatre terraces." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Amphitheatre and Balcony when usable hours are limited." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Tarragona Highlights Walking Tour — the best first-time guided introduction to UNESCO Tarraco.",
    href: "/shore-excursions/tarragona-highlights-walking-tour",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "⛵",
    label: "Best First-Time Tour",
    description: "Editor's Choice for first-time visitors who want Roman and Old Town narrative in one compact walk.",
    href: "/shore-excursions/tarragona-highlights-walking-tour",
    cta: "Discover Tarragona",
  },
  {
    id: "historic",
    emoji: "🏛️",
    label: "Best Historic Walk",
    description: "Roman Tarragona guide — amphitheatre, circus and forum for cruise passengers.",
    href: "/guides/roman-tarragona",
    cta: "Explore Tarraco",
  },
  {
    id: "cathedral",
    emoji: "⛪",
    label: "Best Cathedral Experience",
    description: "Guided Tarragona Cathedral — medieval art and Catalan Gothic with a professional guide.",
    href: "/shore-excursions/guided-tarragona-cathedral",
    cta: "View cathedral tour",
  },
  {
    id: "food-wine",
    emoji: "🍽️",
    label: "Best Food Experience",
    description: "Central market and tapas culture without leaving the walkable core.",
    href: "/guides/food-guide",
    cta: "Taste Tarragona",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Amphitheatre sea views, cathedral steps and the Mediterranean Balcony.",
    href: "/guides/best-viewpoints",
    cta: "Find the views",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Walk It Yourself and open Roman landmarks keep mixed-age parties close to the ship.",
    href: "/guides/one-day-in-tarragona",
    cta: "Plan a family day",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description: "Walking from Tarragona port — Roman ruins, Old Town, Balcony and tapas with a generous ship buffer.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Future Premium Roman Discovery",
    description: "A future premium shared Tarraco day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

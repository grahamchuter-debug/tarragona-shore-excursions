import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureRivieraExperience = {
  slug: "signature-riviera-experience",
  title: "Future Premium Roman Tarraco Discovery",
  seoTitle: "Future Premium Roman Tarraco Discovery — In Preparation",
  metaDescription:
    "Preview a future premium shared Roman Tarraco shore experience from Tarragona — deeper amphitheatre, circus and forum interpretation. Not currently bookable.",
  tagline:
    "A future premium shared journey through UNESCO Tarraco — designed around your ship, not a generic day tour.",
  overview:
    "Future Premium Roman Tarraco Discovery is a product concept in preparation. The proposed experience would take a small shared group through amphitheatre, circus and forum with richer archaeological narrative than a standard highlights walk. It does not currently exist as a bookable excursion. Internally it is labelled a future premium shared experience to keep migration to direct operations straightforward.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Small shared group",
      description: "A proposed intimate format intended to keep pacing personal without requiring a fully private hire.",
    },
    {
      emoji: "🏛️",
      title: "Deep Roman interpretation",
      description: "Amphitheatre, circus and forum with extended narrative for history-minded cruise guests.",
    },
    {
      emoji: "🌊",
      title: "Mediterranean setting",
      description: "UNESCO stone beside the sea — Tarragona’s defining contrast.",
    },
    {
      emoji: "📸",
      title: "Photography time",
      description: "Room for amphitheatre and Balcony photographs rather than a rushed checklist.",
    },
    {
      emoji: "🗣️",
      title: "Qualified local guides",
      description: "Commentary designed to unlock Tarraco’s imperial story.",
    },
    {
      emoji: "🧭",
      title: "Flexible within the core",
      description: "Routing designed to adapt to ship times, heat and group interests inside the walkable centre.",
    },
    {
      emoji: "🚢",
      title: "Cruise-first timing",
      description: "The future operating plan will be built backwards from all-aboard with a conservative return margin.",
    },
  ] satisfies SignatureBenefit[],
  faqs: [
    {
      question: "Can I book this now?",
      answer:
        "No. The experience is in preparation and is not currently available to book. This page describes the intended concept only.",
    },
    {
      question: "What should I choose in the meantime?",
      answer:
        "Walk It Yourself for an outstanding independent day, or our Editor's Choice Tarragona Highlights Walking Tour and Guided Tarragona Cathedral when they open for booking.",
    },
  ] satisfies FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: signatureRivieraExperience.title,
    description:
      "A future premium shared Roman Tarraco experience. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}

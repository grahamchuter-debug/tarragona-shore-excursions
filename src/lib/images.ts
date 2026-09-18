export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "Roman amphitheatre of Tarragona overlooking the Mediterranean — Spain's hidden Roman treasure",
  ),
  ogDefault: img(
    "og-default",
    "Tarragona amphitheatre and Mediterranean — Tarragona Shore Excursions",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Tarragona Shore Excursions",
  },
  port: img("cruise-port", "Tarragona cruise port on the Catalan coast"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Historic Tarragona and UNESCO Roman Tarraco"),
  coast: img("coastal", "Mediterranean coast at Tarragona"),
  coastal: img("coastal", "Mediterranean coast at Tarragona"),
  walking: img("walking", "Walking Tarragona Old Town from the cruise port"),
  food: img("food-and-wine", "Catalan food and tapas culture in Tarragona"),
  "food-and-wine": img("food-and-wine", "Catalan food, market and wine culture"),
  private: img("private", "Premium Tarragona shore experience concept"),
  photography: img("photography", "Amphitheatre viewpoints and Tarragona photography"),
  wine: img("food-and-wine", "Catalan dining near Tarragona Old Town"),
  compare: img("compare", "Comparing Tarragona shore excursion options"),
  port: img("cruise-port", "Tarragona cruise passenger berths"),
  highlights: img("amphitheatre", "Tarragona amphitheatre highlights for cruise visitors"),
  city: img("historic", "Historic Tarragona from the cruise port"),
  nature: img("nature", "Mediterranean shore near Tarragona"),
  family: img("family", "Family-friendly walk in Tarragona"),
  "hero-home": img("hero-home", "Tarragona amphitheatre — Spain's hidden Roman treasure"),
  amphitheatre: img("amphitheatre", "Roman amphitheatre of Tarragona beside the sea"),
  cathedral: img("cathedral", "Tarragona Cathedral above the Part Alta"),
  balcony: img("balcony", "Mediterranean Balcony viewpoint in Tarragona"),
  rambla: img("rambla", "Rambla Nova promenade in Tarragona"),
  circus: img("circus", "Roman circus remains in Tarragona"),
  forum: img("forum", "Roman forum remains in Tarragona"),
  "old-town": img("old-town", "Part Alta Old Town lanes in Tarragona"),
  "food-market": img("food-market", "Central Market atmosphere in Tarragona"),
  viewpoints: img("balcony", "Best viewpoints in Tarragona for cruise passengers"),
  markets: img("food-market", "Tarragona market and food culture"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "tarragona-highlights-walking-tour": "amphitheatre",
  "guided-tarragona-cathedral": "cathedral",
  "future-shared-roman-tarraco-discovery": "amphitheatre",
  "future-shared-cathedral-old-town-exclusive": "cathedral",
  "future-shared-mediterranean-balcony-catalan-flavours": "balcony",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("amphitheatre");

const highlightImageKeys: Record<string, string> = {
  "roman-amphitheatre": "amphitheatre",
  "roman-circus": "circus",
  "roman-forum": "forum",
  "tarragona-cathedral": "cathedral",
  "old-town": "old-town",
  "rambla-nova": "rambla",
  "mediterranean-balcony": "balcony",
  "food-market": "food-market",
};

const comparisonImageKeys: Record<string, string> = {
  "tour-or-independent": "compare",
  "roman-or-independent": "amphitheatre",
  "best-shore-excursions": "highlights",
  "first-time-tarragona-day": "amphitheatre",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  food: "food",
  private: "private",
  coast: "coast",
  coastal: "coastal",
  nature: "coastal",
  photography: "photography",
  amphitheatre: "amphitheatre",
  cathedral: "cathedral",
  balcony: "balcony",
  highlights: "highlights",
  viewpoints: "balcony",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}

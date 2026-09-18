/**
 * World 2.0 Destination Configuration — Tarragona Shore Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "tarragona",
  name: "Tarragona Shore Excursions",
  destination: "Tarragona",
  descriptor: "Shore Excursions",
  strapline: "Spain's Hidden Roman Treasure",
  domain: "tarragonashoreexcursions.com",
  url: "https://tarragonashoreexcursions.com",
  description:
    "Independent cruise shore excursions and honest port guidance for Tarragona — Spain's hidden Roman treasure on the Catalan coast.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "TQ",
  pagesProject: "tarragona-shore-excursions",
  paymentsWorkerName: "tarragona-payments",
  d1DatabaseName: "tarragona-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@tarragonashoreexcursions.com",
    bookings: "bookings@tarragonashoreexcursions.com",
    privacy: "privacy@tarragonashoreexcursions.com",
  },
  legal: {
    tradingName: "Tarragona Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "tarragona",
    meetingPointLabel: "Tarragona Cruise Port",
    country: "Spain",
  },
  seo: {
    defaultKeywords: [
      "Tarragona shore excursions",
      "Tarragona cruise excursions",
      "Tarragona cruise port guide",
      "Roman Tarraco UNESCO",
      "Tarragona amphitheatre cruise",
      "Tarragona walking tour",
      "Catalonia cruise port",
      "Tarragona Cathedral tour",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "Roman History",
    "Walk It Yourself",
    "Photography",
    "Food",
    "Families",
    "Editor's Choice",
    "History",
    "Luxury",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;

/**
 * Destination-specific footer link columns.
 * Clone procedure: replace labels/hrefs for the new port only.
 */

export type FooterLink = { href: string; label: string };

export type FooterColumns = {
  blurb: string;
  chooseTitle: string;
  choose: FooterLink[];
  planTitle: string;
  plan: FooterLink[];
  bookTitle: string;
  book: FooterLink[];
  independenceClause: string;
};

export const footerColumns: FooterColumns = {
  blurb:
    "Helping cruise passengers discover Spain's hidden Roman treasure — with honest advice on walking Tarragona independently and when a guided day is worth it.",
  chooseTitle: "Choose your day",
  choose: [
    { href: "/compare", label: "Compare options" },
    { href: "/shore-excursions/tarragona-highlights-walking-tour", label: "Editor's Choice" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/wow-collection", label: "Future Premium Collection" },
  ],
  planTitle: "Plan your port day",
  plan: [
    { href: "/cruise-planner", label: "Cruise Planner" },
    { href: "/shore-excursions", label: "Shore Excursions" },
    { href: "/cruise-port-guide", label: "Port Guide" },
    { href: "/guides/roman-tarragona", label: "Roman Tarragona" },
  ],
  bookTitle: "Book & contact",
  book: [
    { href: "/ship-schedules", label: "Cruise Ship Schedule" },
    { href: "/enquire", label: "Contact concierge" },
  ],
  independenceClause: "not affiliated with any cruise line or the local port authority.",
};

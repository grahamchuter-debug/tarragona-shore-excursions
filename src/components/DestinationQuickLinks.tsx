import Link from "next/link";

const TARRAGONA_LINKS = [
  {
    title: "Tour or independent?",
    description:
      "Honest comparison for Tarragona cruise passengers — when to walk UNESCO sites alone and when a guide helps.",
    href: "/compare/tour-or-independent",
  },
  {
    title: "Guided highlights or Walk It Yourself?",
    description:
      "Compare Editor's Choice narrative with a flexible self-guided Roman and Old Town day.",
    href: "/compare/roman-or-independent",
  },
  {
    title: "Best Tarragona shore excursions",
    description:
      "Our curated collection — Editor's Choice first, cathedral tour, and future premium placeholders.",
    href: "/compare/best-shore-excursions",
  },
  {
    title: "Walking from Tarragona port",
    description:
      "How to reach the amphitheatre and Part Alta from the cruise terminal.",
    href: "/guides/walking-from-port",
  },
  {
    title: "Can you explore independently?",
    description:
      "When a flexible foot day is the better choice — and when guided interpretation earns its place.",
    href: "/guides/explore-independently",
  },
  {
    title: "First time in Tarragona",
    description:
      "A practical first-call plan: amphitheatre, Old Town, Balcony or guided highlights.",
    href: "/compare/first-time-tarragona-day",
  },
  {
    title: "Tarragona cruise schedules",
    description:
      "Confirmed ship-call data will appear here once schedules are ready for publication.",
    href: "/ship-schedules/tarragona",
  },
];

export function DestinationQuickLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Tarragona planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you walk Roman Tarraco independently or join a guided highlights tour.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TARRAGONA_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Tarragona planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}

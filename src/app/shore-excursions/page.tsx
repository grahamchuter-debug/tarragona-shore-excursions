import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { getExcursionImage, excursionsHubImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { EditorsChoiceBadge } from "@/components/EditorsChoiceBadge";
import { hasEditorsChoice } from "@/components/EditorsChoice";
import { SignatureExperienceFeature } from "@/components/SignatureExperienceFeature";

export const metadata = buildMetadata({
  title: "Tarragona Shore Excursions — UNESCO Roman Tarraco from Your Cruise Ship",
  description:
    "Carefully selected Tarragona shore excursions — Highlights Walking Tour, Guided Cathedral and future premium shared experiences, with cruise-aware timing.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: [
    "Tarragona shore excursions",
    "Tarragona highlights walking tour",
    "Tarragona cruise excursions",
    "Roman Tarraco shore excursion",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Shore Excursions", path: "/shore-excursions" },
];

export default function ShoreExcursionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Tarragona Shore Excursions",
            description: "Carefully selected Tarragona shore excursions from the cruise port.",
            path: "/shore-excursions",
          }),
        ]}
      />
      <PageHero
        image={excursionsHubImage}
        title="Tarragona Shore Excursions"
        subtitle="Cruise-timed experiences for UNESCO Roman Tarraco — Editor's Choice highlights walk, Guided Cathedral and future premium shared departures with reliable return-to-ship planning."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-6 text-gray-600">
            Not sure which day to choose? Start with our{" "}
            <Link href="/compare/roman-or-independent" className="font-semibold text-coastal-700 hover:underline">
              guided highlights or Walk It Yourself comparison
            </Link>{" "}
            or the{" "}
            <Link href="/compare/best-shore-excursions" className="font-semibold text-coastal-700 hover:underline">
              best excursion guide
            </Link>
            .
          </p>
          <div className="mt-8">
            <SignatureExperienceFeature embedded />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursions.map((e) => {
              const image = getExcursionImage(e.slug);
              const editorsChoice = hasEditorsChoice(e);
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {editorsChoice ? (
                      <span className="absolute left-3 top-3">
                        <EditorsChoiceBadge variant="overlay" />
                      </span>
                    ) : (
                      <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                      {e.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">
                      {e.duration} · {e.pace}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

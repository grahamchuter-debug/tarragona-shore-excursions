import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Tarragona cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored Catalonia recommendations.";

export const metadata = buildMetadata({
  title: "Tarragona Cruise Planner — Catalonia Port Day Itinerary",
  description,
  path,
  keywords: ["Tarragona cruise planner", "Catalonia cruise day plan", "Tarragona port day itinerary", "Old Town from Tarragona planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Tarragona Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Tarragona Cruise Planner", description, path })]} />
      <PageHero
        title="Tarragona Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for the Old Town, Part Alta, Mediterranean Balcony, Cathedral quarter and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruisePlanner />
        </div>
      </section>
    </>
  );
}

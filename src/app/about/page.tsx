import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { businessIdentity } from "@/lib/legal/business-identity";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Tarragona Shore Excursions",
  description:
    "About Tarragona Shore Excursions — an independent Catalonia cruise planning resource for passengers arriving at Tarragona Cruise Port.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Tarragona Shore Excursions", description: "About Tarragona Shore Excursions.", path })]} />
      <PageHero title="About Tarragona Shore Excursions" subtitle="An independent planning resource built for cruise passengers — where Europe meets Africa from Tarragona Cruise Port." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose prose-gray">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Tarragona. Whether you have one day ashore or want to understand the Old Town, Part Alta, Mediterranean Balcony and Cathedral quarter before you sail, our goal is to help you choose the best version of Catalonia — not just browse a catalogue of tours.
            </p>
            <p>
              We focus on the practical decisions that shape a good Tarragona cruise day: Old Town or Mediterranean Balcony, whether independent exploring suits your hours, when a small-group tour beats a large coach, and how to build a realistic return-to-ship buffer for coastal and mountain roads.
            </p>
            <p>
              Our guides are written for real cruise timings, not generic tourism. We highlight honest editorial comparisons, Editor&apos;s Collection recommendations for different traveller types, and future concepts such as The Wow Collection and Signature Mediterranean of Gibraltar Discovery. Ship schedules and transfer times are indicative — always confirm all-aboard times with your cruise line.
            </p>
            <p>
              Questions? Email us at{" "}
              <a href={businessIdentity.primaryEmailHref} className="text-coastal-700 hover:underline">
                {businessIdentity.primaryEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

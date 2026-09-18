import Link from "next/link";
import { signatureRivieraExperience, SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function SignatureExperienceFeature({ embedded = false }: { embedded?: boolean }) {
  const image = subjectImages.amphitheatre;
  const comingSoon = signatureRivieraExperience.comingSoon;

  const inner = (
    <div className="card-signature grid gap-0 overflow-hidden lg:grid-cols-2">
      <div className="relative min-h-[280px] lg:min-h-full">
        <ResponsiveImage
          image={image}
          role="card"
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-coastal-900/70 via-coastal-900/30 to-transparent lg:bg-gradient-to-t lg:from-coastal-900/60 lg:via-transparent lg:to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-6 left-6 right-6 lg:hidden">
          <span className="badge-signature">⭐ Signature Experience — In preparation</span>
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <div className="hidden lg:block">
          <span className="badge-signature">⭐ Signature Experience — In preparation</span>
        </div>
        <p className="section-eyebrow mt-4 lg:mt-6">Flagship product</p>
        <h2 className="font-display text-3xl font-semibold text-gray-900 sm:text-4xl mt-1">
          {signatureRivieraExperience.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 italic">
          &ldquo;{signatureRivieraExperience.tagline}&rdquo;
        </p>
        <p className="mt-4 text-sm leading-relaxed text-gray-700">
          Our flagship future premium shared experience is in development — deeper Roman Tarraco
          interpretation designed for cruise timing. It is not bookable today.
        </p>

        <div className="placeholder-widget mt-6 text-left">
          <p className="placeholder-widget-label">In preparation</p>
          <p className="mt-2 text-sm text-gray-600">
            Amphitheatre, circus and forum with richer narrative than a standard highlights walk —
            proposed as a small shared group with cruise-first timing. Meanwhile, Walk It Yourself or
            Editor&apos;s Choice are the honest recommendations.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={SIGNATURE_EXPERIENCE_PATH} className="btn-accent">
            {comingSoon ? "Learn more →" : `Discover ${signatureRivieraExperience.title} →`}
          </Link>
          {comingSoon && (
            <Link href="/enquire" className="btn-secondary">
              Register interest
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  if (embedded) return inner;

  return (
    <section className="section-padding bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-amber-100/60">
      <div className="container-wide">{inner}</div>
    </section>
  );
}

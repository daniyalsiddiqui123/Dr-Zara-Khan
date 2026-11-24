import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { isLocale, getDictionary, href } from "@/lib/i18n";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { getSiteSettings, getTreatments } from "@/lib/content";
import { treatmentsIntro } from "@/content/treatments";
import { PageHero } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { ArtMedia } from "@/components/ui/art-media";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/home/editorial-sections";
import { JsonLd } from "@/components/seo/json-ld";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/treatments",
    title: locale === "ar" ? "العلاجات التجميلية" : "Aesthetic treatments",
    description: treatmentsIntro.body[locale]
  });
}

export default async function TreatmentsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const [items, settings] = await Promise.all([getTreatments(), getSiteSettings()]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.common.home, path: "/" },
          { name: dict.nav.treatments, path: "/treatments" }
        ])}
      />
      <PageHero
        eyebrow={treatmentsIntro.eyebrow[locale]}
        heading={treatmentsIntro.heading[locale]}
        intro={treatmentsIntro.body[locale]}
        breadcrumbs={
          <Breadcrumbs
            locale={locale}
            items={[
              { name: dict.common.home, path: "/" },
              { name: dict.nav.treatments }
            ]}
          />
        }
      />

      <section className="bg-ivory-100 pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((treatment, index) => (
              <Reveal key={treatment.slug} delay={index * 0.04}>
                <Link
                  href={href(locale, `/treatments/${treatment.slug}`)}
                  className="group block"
                >
                  <div className="relative overflow-hidden">
                    <ArtMedia
                      variant={treatment.art}
                      image={treatment.image}
                      locale={locale}
                      label={treatment.title[locale]}
                      className="aspect-[4/5] w-full transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 border border-ivory-100/25 bg-espresso-950/30 px-3 py-1 text-[0.56rem] uppercase tracking-label text-ivory-100 backdrop-blur-sm">
                      {treatment.category[locale]}
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl text-espresso-900">{treatment.title[locale]}</h2>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-warmgrey-500">
                        {treatment.short[locale]}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-taupe-400 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 rtl:-scale-x-100"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-16 max-w-2xl border-t border-espresso-900/12 pt-6 text-[0.75rem] leading-relaxed text-taupe-500">
              {dict.disclaimer.medical}
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta locale={locale} settings={settings} dict={dict} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { isLocale, getDictionary, href } from "@/lib/i18n";
import { buildMetadata, breadcrumbSchema, medicalWebPageSchema } from "@/lib/seo";
import { getExpertise, getSiteSettings, getTreatments } from "@/lib/content";
import { expertiseAreas } from "@/content/expertise";
import { PageHero } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { FinalCta } from "@/components/home/editorial-sections";
import { JsonLd } from "@/components/seo/json-ld";

export function generateStaticParams() {
  return expertiseAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const items = await getExpertise();
  const item = items.find((entry) => entry.slug === slug);
  if (!item) return {};
  return buildMetadata({
    locale,
    path: `/expertise/${slug}`,
    title: item.seo.title[locale],
    description: item.seo.description[locale]
  });
}

export default async function ExpertiseDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const [items, treatments, settings] = await Promise.all([
    getExpertise(),
    getTreatments(),
    getSiteSettings()
  ]);
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const relatedTreatments = treatments.filter((treatment) =>
    item.relatedTreatments.includes(treatment.slug)
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: dict.nav.expertise, path: "/expertise" },
            { name: item.title[locale], path: `/expertise/${slug}` }
          ]),
          medicalWebPageSchema({
            locale,
            path: `/expertise/${slug}`,
            name: item.title[locale],
            description: item.seo.description[locale]
          })
        ]}
      />
      <PageHero
        eyebrow={dict.nav.expertise}
        heading={item.title[locale]}
        intro={item.intro[locale]}
        art={item.art}
        image={item.image}
        locale={locale}
        artLabel={item.title[locale]}
        breadcrumbs={
          <Breadcrumbs
            locale={locale}
            items={[
              { name: dict.common.home, path: "/" },
              { name: dict.nav.expertise, path: "/expertise" },
              { name: item.title[locale] }
            ]}
          />
        }
      />

      <section className="bg-ivory-100 pb-20 md:pb-28">
        <div className="container-editorial">
          <div className="grid gap-12 border-t border-espresso-900/12 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <p className="eyebrow text-taupe-500">
                  {locale === "ar" ? "نظرة عامة" : "Overview"}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-5">
              <div className="space-y-6">
                {item.overview[locale].map((paragraph, index) => (
                  <Reveal key={index} delay={index * 0.05}>
                    <p className="text-[1.05rem] leading-[1.85] text-warmgrey-600">{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-16">
            {item.sections.map((section, index) => (
              <div
                key={index}
                className="grid gap-6 border-t border-espresso-900/12 pt-10 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <Reveal>
                    <h2 className="font-display text-3xl text-espresso-900">{section.heading[locale]}</h2>
                  </Reveal>
                </div>
                <div className="space-y-5 lg:col-span-7 lg:col-start-6">
                  {section.body[locale].map((paragraph, pIndex) => (
                    <Reveal key={pIndex} delay={pIndex * 0.04}>
                      <p className="text-[1rem] leading-[1.85] text-warmgrey-600">{paragraph}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {relatedTreatments.length > 0 && (
            <div className="mt-20 border-t border-espresso-900/12 pt-10">
              <Reveal>
                <p className="eyebrow text-taupe-500">{dict.common.relatedTreatments}</p>
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedTreatments.map((treatment, index) => (
                  <Reveal key={treatment.slug} delay={index * 0.05}>
                    <Link
                      href={href(locale, `/treatments/${treatment.slug}`)}
                      className="group flex items-start justify-between gap-4 border border-espresso-900/12 p-6 transition-colors hover:bg-ivory-200/60"
                    >
                      <div>
                        <p className="text-[0.58rem] uppercase tracking-label text-taupe-400">
                          {treatment.category[locale]}
                        </p>
                        <p className="mt-2 font-display text-xl text-espresso-900">
                          {treatment.title[locale]}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-taupe-400 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 rtl:-scale-x-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 flex flex-col gap-6 border-t border-espresso-900/12 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-[0.75rem] leading-relaxed text-taupe-500">
              {dict.disclaimer.medical}
            </p>
            <ButtonLink href={href(locale, "/contact")} showIcon>
              {dict.common.bookAppointment}
            </ButtonLink>
          </div>
        </div>
      </section>

      <FinalCta locale={locale} settings={settings} dict={dict} />
    </>
  );
}

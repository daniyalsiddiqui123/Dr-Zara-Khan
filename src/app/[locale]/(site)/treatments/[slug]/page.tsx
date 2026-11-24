import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { isLocale, getDictionary, href } from "@/lib/i18n";
import { buildMetadata, breadcrumbSchema, medicalWebPageSchema } from "@/lib/seo";
import { getSiteSettings, getTreatments } from "@/lib/content";
import { treatments } from "@/content/treatments";
import { PageHero } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { FaqList } from "@/components/ui/faq";
import { FinalCta } from "@/components/home/editorial-sections";
import { JsonLd } from "@/components/seo/json-ld";

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const items = await getTreatments();
  const item = items.find((entry) => entry.slug === slug);
  if (!item) return {};
  return buildMetadata({
    locale,
    path: `/treatments/${slug}`,
    title: item.seo.title[locale],
    description: item.seo.description[locale],
    type: "article"
  });
}

function ListBlock({
  index,
  title,
  items
}: {
  index: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="border-t border-espresso-900/12 pt-6">
      <div className="flex items-baseline gap-3">
        <span className="font-sans text-[0.6rem] tracking-label text-champagne-500">{index}</span>
        <h2 className="font-display text-2xl text-espresso-900">{title}</h2>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-warmgrey-600">
            <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-champagne-500" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function TreatmentDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const [items, settings] = await Promise.all([getTreatments(), getSiteSettings()]);
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const related = items.filter((entry) => item.relatedTreatments.includes(entry.slug));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: dict.nav.treatments, path: "/treatments" },
            { name: item.title[locale], path: `/treatments/${slug}` }
          ]),
          medicalWebPageSchema({
            locale,
            path: `/treatments/${slug}`,
            name: item.title[locale],
            description: item.seo.description[locale]
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: item.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question[locale],
              acceptedAnswer: { "@type": "Answer", text: faq.answer[locale] }
            }))
          }
        ]}
      />

      <PageHero
        eyebrow={item.category[locale]}
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
              { name: dict.nav.treatments, path: "/treatments" },
              { name: item.title[locale] }
            ]}
          />
        }
      />

      <section className="bg-ivory-100 pb-20 md:pb-28">
        <div className="container-editorial">
          <div className="grid gap-12 border-t border-espresso-900/12 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow text-taupe-500">
                  {locale === "ar" ? "نظرة عامة" : "Overview"}
                </p>
              </Reveal>
              <div className="mt-6 space-y-5">
                {item.overview[locale].map((paragraph, index) => (
                  <Reveal key={index} delay={index * 0.05}>
                    <p className="text-[1.05rem] leading-[1.85] text-warmgrey-600">{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <div className="border border-espresso-900/12 bg-ivory-50 p-6">
                  <p className="eyebrow text-taupe-400">
                    {locale === "ar" ? "في لمحة" : "At a glance"}
                  </p>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div className="flex items-center justify-between gap-4 border-b border-espresso-900/10 pb-3">
                      <dt className="text-warmgrey-500">{locale === "ar" ? "الفئة" : "Category"}</dt>
                      <dd className="text-espresso-900">{item.category[locale]}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-espresso-900/10 pb-3">
                      <dt className="text-warmgrey-500">{locale === "ar" ? "التوفر" : "Availability"}</dt>
                      <dd className="text-espresso-900">{dict.common.byAppointment}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-warmgrey-500">{locale === "ar" ? "التقييم" : "Assessment"}</dt>
                      <dd className="text-espresso-900">{locale === "ar" ? "مطلوب" : "Required"}</dd>
                    </div>
                  </dl>
                  <div className="mt-6">
                    <ButtonLink href={href(locale, "/contact")} variant="primary" className="w-full">
                      {dict.common.bookAppointment}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-12 lg:grid-cols-2">
            <ListBlock
              index="01"
              title={locale === "ar" ? "الملاءمة" : "Suitability"}
              items={item.suitability[locale]}
            />
            <ListBlock
              index="02"
              title={locale === "ar" ? "الإجراء" : "The procedure"}
              items={item.procedure[locale]}
            />
            <ListBlock
              index="03"
              title={locale === "ar" ? "العناية بعد العلاج" : "Aftercare"}
              items={item.aftercare[locale]}
            />
            <ListBlock
              index="04"
              title={locale === "ar" ? "المخاطر والاعتبارات" : "Risks & considerations"}
              items={item.considerations[locale]}
            />
          </div>

          <div className="mt-20 grid gap-12 border-t border-espresso-900/12 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="font-display text-3xl text-espresso-900">
                  {locale === "ar" ? "أسئلة شائعة" : "Questions, answered"}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FaqList
                items={item.faqs.map((faq) => ({
                  question: faq.question[locale],
                  answer: faq.answer[locale]
                }))}
              />
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-espresso-900/12 pt-10">
              <p className="eyebrow text-taupe-500">{dict.common.relatedTreatments}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((treatment) => (
                  <Link
                    key={treatment.slug}
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

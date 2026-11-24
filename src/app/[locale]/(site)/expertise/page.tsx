import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { isLocale, getDictionary, href } from "@/lib/i18n";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { getExpertise, getSiteSettings } from "@/lib/content";
import { expertiseIntro } from "@/content/expertise";
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
    path: "/expertise",
    title: locale === "ar" ? "مجالات الخبرة الطبية" : "Medical expertise",
    description: expertiseIntro.body[locale]
  });
}

export default async function ExpertisePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const [items, settings] = await Promise.all([getExpertise(), getSiteSettings()]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.common.home, path: "/" },
          { name: dict.nav.expertise, path: "/expertise" }
        ])}
      />
      <PageHero
        eyebrow={expertiseIntro.eyebrow[locale]}
        heading={expertiseIntro.heading[locale]}
        intro={expertiseIntro.body[locale]}
        breadcrumbs={
          <Breadcrumbs
            locale={locale}
            items={[
              { name: dict.common.home, path: "/" },
              { name: dict.nav.expertise }
            ]}
          />
        }
      />

      <section className="bg-ivory-100 pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="grid gap-10 md:grid-cols-2">
            {items.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <Link
                  href={href(locale, `/expertise/${item.slug}`)}
                  className="group block border-t border-espresso-900/12 pt-6"
                >
                  <div className="overflow-hidden">
                    <ArtMedia
                      variant={item.art}
                      image={item.image}
                      locale={locale}
                      label={item.title[locale]}
                      className="aspect-[16/10] w-full transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-label text-taupe-400">
                        0{index + 1}
                      </p>
                      <h2 className="mt-2 font-display text-3xl text-espresso-900">{item.title[locale]}</h2>
                      <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-warmgrey-500">
                        {item.short[locale]}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 h-5 w-5 shrink-0 text-taupe-400 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-espresso-900 rtl:-scale-x-100"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-14 max-w-2xl border-t border-espresso-900/12 pt-6 text-[0.75rem] leading-relaxed text-taupe-500">
              {dict.disclaimer.medical}
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta locale={locale} settings={settings} dict={dict} />
    </>
  );
}

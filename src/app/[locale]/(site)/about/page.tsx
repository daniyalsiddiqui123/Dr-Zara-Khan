import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, getDictionary } from "@/lib/i18n";
import { buildMetadata, profilePageSchema } from "@/lib/seo";
import { getSiteSettings } from "@/lib/content";
import { aboutContent, credentials, expertiseFocus } from "@/content/about";
import { PageHero } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
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
    path: "/about",
    title: locale === "ar" ? "عن الدكتورة" : "About Dr. Zara",
    description: aboutContent.lead[locale],
    type: "profile"
  });
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const settings = await getSiteSettings();

  return (
    <>
      <JsonLd data={profilePageSchema(locale)} />
      <PageHero
        eyebrow={aboutContent.eyebrow[locale]}
        heading={aboutContent.heading[locale]}
        intro={aboutContent.lead[locale]}
        breadcrumbs={
          <Breadcrumbs
            locale={locale}
            items={[
              { name: dict.common.home, path: "/" },
              { name: dict.nav.about }
            ]}
          />
        }
      />

      <section className="bg-ivory-100 pb-24 md:pb-32">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-espresso-900/10 bg-gradient-to-b from-ivory-200 via-[#E7D8C0] to-[#C9A98B]">
                <Image
                  src="/zara-khan-2.jpeg"
                  alt={aboutContent.portrait.alt[locale]}
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-4 text-[0.7rem] uppercase tracking-label text-taupe-500">
                {aboutContent.portrait.caption[locale]}
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-6">
              {aboutContent.body[locale].map((paragraph, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <p className="text-[1.02rem] leading-[1.85] text-warmgrey-600">{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <blockquote className="mt-10 border-s border-champagne-400 ps-6 font-display text-2xl italic leading-snug text-espresso-800 rtl:not-italic md:text-[1.8rem]">
                “{aboutContent.quote[locale]}”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory-200 py-24 md:py-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-taupe-500">
              {locale === "ar" ? "القيم" : "Principles"}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px border-t border-espresso-900/12 md:grid-cols-3">
            {aboutContent.values.map((value, index) => (
              <Reveal key={value.index} delay={index * 0.06}>
                <div className="h-full border-b border-espresso-900/12 py-8 md:border-e md:px-8 md:last:border-e-0">
                  <span className="font-sans text-[0.62rem] tracking-label text-champagne-500">
                    {value.index}
                  </span>
                  <h2 className="mt-4 font-display text-2xl text-espresso-900">{value.title[locale]}</h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-warmgrey-500">
                    {value.body[locale]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-100 py-24 md:py-32">
        <div className="container-editorial grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-taupe-500">
                {locale === "ar" ? "مجالات التركيز" : "Clinical focus"}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-espresso-900">
                {locale === "ar" ? "ما تُركّز عليه الممارسة." : "What the practice focuses on."}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {expertiseFocus.map((focus, index) => (
                <Reveal key={focus.en} delay={index * 0.04}>
                  <li className="flex items-baseline gap-3 border-b border-espresso-900/12 py-5">
                    <span className="font-sans text-[0.6rem] tracking-label text-champagne-500">
                      0{index + 1}
                    </span>
                    <span className="font-display text-xl text-espresso-900">{focus[locale]}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory-50 py-24 md:py-32" id="credentials">
        <div className="container-editorial grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-taupe-500">
                {locale === "ar" ? "المؤهلات والخبرة" : "Qualifications & experience"}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-espresso-900">
                {locale === "ar" ? "مسار موثّق، خطوة بخطوة." : "A verified path, step by step."}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-warmgrey-500">
                {locale === "ar"
                  ? "تُنشر المؤهلات والعضويات فقط بعد التحقق منها. الحقول أدناه واضحة كعناصر بديلة تُدار عبر استوديو المحتوى."
                  : "Qualifications and memberships are published only once verified. The fields below are clearly marked as placeholders, managed through the content studio."}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-espresso-900/12">
              {credentials.map((credential, index) => (
                <Reveal key={credential.id} delay={index * 0.04}>
                  <li className="grid grid-cols-[2rem_1fr] gap-4 border-b border-espresso-900/12 py-6">
                    <span className="pt-1 font-sans text-[0.62rem] tracking-label text-taupe-400">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-xl text-espresso-900">{credential.title[locale]}</h3>
                        {credential.isPlaceholder && (
                          <span className="border border-champagne-400/50 px-2 py-0.5 text-[0.55rem] uppercase tracking-label text-champagne-500">
                            {dict.disclaimer.credentialPlaceholder}
                          </span>
                        )}
                      </div>
                      {credential.detail && (
                        <p className="mt-1.5 text-sm leading-relaxed text-warmgrey-500">
                          {credential.detail[locale]}
                        </p>
                      )}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.12}>
              <p className="mt-6 text-[0.72rem] leading-relaxed text-taupe-500">
                {dict.disclaimer.placeholder}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta locale={locale} settings={settings} dict={dict} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary } from "@/lib/i18n";
import { buildMetadata, profilePageSchema } from "@/lib/seo";
import {
  getClinics,
  getExpertise,
  getHomepage,
  getSiteSettings,
  getTreatments
} from "@/lib/content";
import { credentials } from "@/content/about";
import { editorialQuote } from "@/content/home";
import { Hero } from "@/components/home/hero";
import { ThreeExperience } from "@/components/home/three-experience";
import {
  ClinicSection,
  EditorialBreak,
  ExpertiseSection,
  FinalCta,
  Intro,
  JourneySection,
  Philosophy,
  TreatmentsSection
} from "@/components/home/editorial-sections";
import { JsonLd } from "@/components/seo/json-ld";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const settings = await getSiteSettings();
  return buildMetadata({
    locale,
    path: "/",
    description: settings.description[locale]
  });
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const [{ content, visibility }, settings, clinics, expertise, treatments] =
    await Promise.all([
      getHomepage(),
      getSiteSettings(),
      getClinics(),
      getExpertise(),
      getTreatments()
    ]);

  const clinic = clinics[0];
  const featured = treatments.filter((item) => item.featured).slice(0, 3);
  const featuredTreatments = featured.length >= 3 ? featured : treatments.slice(0, 3);

  return (
    <>
      <JsonLd data={profilePageSchema(locale)} />
      <Hero locale={locale} content={content.hero} settings={settings} dict={dict} />
      {visibility.intro && <Intro locale={locale} content={content.intro} dict={dict} />}
      {visibility.philosophy && <Philosophy locale={locale} content={content.philosophy} />}
      {visibility.three && <ThreeExperience locale={locale} content={content.three} />}
      {visibility.expertise && (
        <ExpertiseSection locale={locale} items={expertise} dict={dict} />
      )}
      {visibility.treatments && (
        <TreatmentsSection locale={locale} items={featuredTreatments} dict={dict} />
      )}
      {visibility.editorial && <EditorialBreak locale={locale} quote={editorialQuote} />}
      {visibility.journey && (
        <JourneySection locale={locale} credentials={credentials} dict={dict} />
      )}
      {visibility.clinic && (
        <ClinicSection locale={locale} clinic={clinic} settings={settings} dict={dict} />
      )}
      <FinalCta locale={locale} settings={settings} dict={dict} />
    </>
  );
}

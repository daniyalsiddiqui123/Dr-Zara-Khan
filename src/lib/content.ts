import { z } from "zod";
import { getSanityClient, sanityConfigured } from "./sanity/client";
import { sanityImage } from "./sanity/image";
import { siteSettings as fallbackSettings, clinics as fallbackClinics, navItems as fallbackNav } from "@/content/site";
import { homeContent as fallbackHome } from "@/content/home";
import { expertiseAreas as fallbackExpertise } from "@/content/expertise";
import { treatments as fallbackTreatments } from "@/content/treatments";
import type {
  Clinic,
  ContentImage,
  Expertise,
  HomeContent,
  Localized,
  LocalizedString,
  NavItem,
  SiteSettings,
  Treatment
} from "./types";

const ls = z
  .object({ en: z.string().optional().nullable(), ar: z.string().optional().nullable() })
  .optional()
  .nullable();

const lsa = z
  .object({
    en: z.array(z.string()).optional().nullable(),
    ar: z.array(z.string()).optional().nullable()
  })
  .optional()
  .nullable();

function mergeString(value: z.infer<typeof ls>, fallback: LocalizedString): LocalizedString {
  return {
    en: value?.en?.trim() || fallback.en,
    ar: value?.ar?.trim() || fallback.ar
  };
}

function mergeArray(
  value: z.infer<typeof lsa>,
  fallback: Localized<string[]>
): Localized<string[]> {
  return {
    en: value?.en?.length ? value.en : fallback.en,
    ar: value?.ar?.length ? value.ar : fallback.ar
  };
}

const imageSchema = z
  .object({
    asset: z.object({ _ref: z.string().optional() }).passthrough().optional(),
    alt: ls
  })
  .optional()
  .nullable();

function mapImage(
  value: z.infer<typeof imageSchema>,
  fallbackAlt: LocalizedString
): ContentImage | undefined {
  const ref = value?.asset?._ref;
  if (!ref) return undefined;
  const url = sanityImage(ref, 1600);
  if (!url) return undefined;
  return { url, alt: mergeString(value.alt, fallbackAlt) };
}

function isBuildPhase(): boolean {
  return (
    process.env.NEXT_PHASE === "phase-production-build" ||
    process.env.NEXT_PHASE === "phase-export" ||
    process.env.npm_lifecycle_event === "build"
  );
}

export async function cmsFetch<T = unknown>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T | null> {
  if (!sanityConfigured || isBuildPhase()) return null;
  const client = getSanityClient();
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 300, tags: ["sanity"] }
    });
  } catch {
    return null;
  }
}

const clinicSchema = z.object({
  _id: z.string(),
  name: ls,
  addressLines: lsa,
  city: ls,
  googleMapsUrl: z.string().optional().nullable(),
  mapEmbedUrl: z.string().optional().nullable(),
  bookingUrl: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  whatsapp: z.string().optional().nullable(),
  note: ls,
  isPlaceholder: z.boolean().optional().nullable(),
  hours: z
    .array(z.object({ day: ls, hours: ls }))
    .optional()
    .nullable()
});

const clinicQuery = `*[_type == "clinic"] | order(order asc, _createdAt asc){
  _id, name, addressLines, city, googleMapsUrl, mapEmbedUrl, bookingUrl, phone, whatsapp, note, isPlaceholder,
  hours[]{ day, hours }
}`;

export async function getClinics(): Promise<Clinic[]> {
  const raw = await cmsFetch<unknown[]>(clinicQuery);
  if (!raw || !Array.isArray(raw)) return fallbackClinics;
  const parsed = z.array(clinicSchema).safeParse(raw);
  if (!parsed.success || parsed.data.length === 0) return fallbackClinics;
  const fallback = fallbackClinics[0];
  return parsed.data.map((item, index) => {
    const base = fallbackClinics[index] ?? fallback;
    return {
      id: item._id,
      name: mergeString(item.name, base.name),
      addressLines: mergeArray(item.addressLines, base.addressLines),
      city: mergeString(item.city, base.city),
      googleMapsUrl: item.googleMapsUrl ?? undefined,
      mapEmbedUrl: item.mapEmbedUrl ?? undefined,
      bookingUrl: item.bookingUrl ?? undefined,
      phone: item.phone ?? undefined,
      whatsapp: item.whatsapp ?? undefined,
      note: item.note ? mergeString(item.note, base.note ?? { en: "", ar: "" }) : base.note,
      isPlaceholder: item.isPlaceholder ?? undefined,
      hours:
        item.hours && item.hours.length
          ? item.hours.map((hour, hIndex) => ({
              day: mergeString(hour.day, base.hours[hIndex]?.day ?? { en: "", ar: "" }),
              hours: mergeString(hour.hours, base.hours[hIndex]?.hours ?? { en: "", ar: "" })
            }))
          : base.hours
    };
  });
}

const siteSettingsSchema = z.object({
  name: ls,
  shortName: z.string().optional().nullable(),
  title: ls,
  tagline: ls,
  description: ls,
  city: ls,
  country: ls,
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  whatsapp: z.string().optional().nullable(),
  bookingUrl: z.string().optional().nullable(),
  social: z
    .array(z.object({ label: z.string(), href: z.string(), icon: z.string() }))
    .optional()
    .nullable()
});

export async function getSiteSettings(): Promise<SiteSettings> {
  const raw = await cmsFetch<unknown>(
    `*[_type == "siteSettings"][0]{ name, shortName, title, tagline, description, city, country, email, phone, whatsapp, bookingUrl, social }`
  );
  if (!raw) return fallbackSettings;
  const parsed = siteSettingsSchema.safeParse(raw);
  if (!parsed.success) return fallbackSettings;
  const data = parsed.data;
  return {
    ...fallbackSettings,
    name: mergeString(data.name, fallbackSettings.name),
    shortName: data.shortName?.trim() || fallbackSettings.shortName,
    title: mergeString(data.title, fallbackSettings.title),
    tagline: mergeString(data.tagline, fallbackSettings.tagline),
    description: mergeString(data.description, fallbackSettings.description),
    city: mergeString(data.city, fallbackSettings.city),
    country: mergeString(data.country, fallbackSettings.country),
    email: data.email?.trim() || fallbackSettings.email,
    phone: data.phone?.trim() || fallbackSettings.phone,
    whatsapp: data.whatsapp?.trim() || fallbackSettings.whatsapp,
    bookingUrl: data.bookingUrl?.trim() || fallbackSettings.bookingUrl,
    social: (data.social ?? [])
      .filter((item) => ["instagram", "linkedin", "x", "tiktok"].includes(item.icon))
      .map((item) => ({
        label: item.label,
        href: item.href,
        icon: item.icon as SiteSettings["social"][number]["icon"]
      }))
  };
}

export async function getNav(): Promise<NavItem[]> {
  const raw = await cmsFetch<unknown>(
    `*[_type == "navigation"][0]{ items[]{ label, href } }`
  );
  if (!raw) return fallbackNav;
  const parsed = z
    .object({ items: z.array(z.object({ label: ls, href: z.string() })) })
    .safeParse(raw);
  if (!parsed.success || parsed.data.items.length === 0) return fallbackNav;
  return parsed.data.items.map((item) => ({
    label: mergeString(item.label, { en: item.href, ar: item.href }),
    href: item.href
  }));
}

const seoSchema = z.object({ title: ls, description: ls }).optional().nullable();

const treatmentSchema = z.object({
  slug: z.string(),
  title: ls,
  category: ls,
  short: ls,
  intro: ls,
  art: z.string().optional().nullable(),
  image: imageSchema,
  overview: lsa,
  suitability: lsa,
  procedure: lsa,
  aftercare: lsa,
  considerations: lsa,
  faqs: z
    .array(z.object({ question: ls, answer: ls }))
    .optional()
    .nullable(),
  relatedTreatments: z.array(z.string()).optional().nullable(),
  featured: z.boolean().optional().nullable(),
  seo: seoSchema
});

const treatmentQuery = `*[_type == "treatment"]{
  "slug": slug.current, title, category, short, intro, art, image, overview, suitability, procedure, aftercare,
  considerations, faqs[]{question, answer}, relatedTreatments, featured, seo
}`;

export async function getTreatments(): Promise<Treatment[]> {
  const raw = await cmsFetch<unknown[]>(treatmentQuery);
  if (!raw || !Array.isArray(raw)) return fallbackTreatments;
  const parsed = z.array(treatmentSchema).safeParse(raw);
  if (!parsed.success) return fallbackTreatments;
  const bySlug = new Map(parsed.data.map((item) => [item.slug, item]));
  return fallbackTreatments.map((base) => {
    const item = bySlug.get(base.slug);
    if (!item) return base;
    return {
      ...base,
      title: mergeString(item.title, base.title),
      category: mergeString(item.category, base.category),
      short: mergeString(item.short, base.short),
      intro: mergeString(item.intro, base.intro),
      image: mapImage(item.image, base.title) ?? base.image,
      overview: mergeArray(item.overview, base.overview),
      suitability: mergeArray(item.suitability, base.suitability),
      procedure: mergeArray(item.procedure, base.procedure),
      aftercare: mergeArray(item.aftercare, base.aftercare),
      considerations: mergeArray(item.considerations, base.considerations),
      featured: item.featured ?? base.featured,
      relatedTreatments: item.relatedTreatments?.length
        ? item.relatedTreatments
        : base.relatedTreatments,
      faqs: item.faqs?.length
        ? item.faqs.map((faq, index) => ({
            question: mergeString(faq.question, base.faqs[index]?.question ?? { en: "", ar: "" }),
            answer: mergeString(faq.answer, base.faqs[index]?.answer ?? { en: "", ar: "" })
          }))
        : base.faqs,
      seo: item.seo
        ? {
            title: mergeString(item.seo.title, base.seo.title),
            description: mergeString(item.seo.description, base.seo.description)
          }
        : base.seo
    };
  });
}

const expertiseSchema = z.object({
  slug: z.string(),
  title: ls,
  short: ls,
  intro: ls,
  overview: lsa,
  art: z.string().optional().nullable(),
  image: imageSchema,
  relatedTreatments: z.array(z.string()).optional().nullable(),
  seo: seoSchema
});

const expertiseQuery = `*[_type == "expertise"]{
  "slug": slug.current, title, short, intro, overview, art, image, relatedTreatments, seo
}`;

export async function getExpertise(): Promise<Expertise[]> {
  const raw = await cmsFetch<unknown[]>(expertiseQuery);
  if (!raw || !Array.isArray(raw)) return fallbackExpertise;
  const parsed = z.array(expertiseSchema).safeParse(raw);
  if (!parsed.success) return fallbackExpertise;
  const bySlug = new Map(parsed.data.map((item) => [item.slug, item]));
  return fallbackExpertise.map((base) => {
    const item = bySlug.get(base.slug);
    if (!item) return base;
    return {
      ...base,
      title: mergeString(item.title, base.title),
      short: mergeString(item.short, base.short),
      intro: mergeString(item.intro, base.intro),
      image: mapImage(item.image, base.title) ?? base.image,
      overview: mergeArray(item.overview, base.overview),
      relatedTreatments: item.relatedTreatments?.length
        ? item.relatedTreatments
        : base.relatedTreatments,
      seo: item.seo
        ? {
            title: mergeString(item.seo.title, base.seo.title),
            description: mergeString(item.seo.description, base.seo.description)
          }
        : base.seo
    };
  });
}

const homepageSchema = z.object({
  hero: z
    .object({ eyebrow: ls, headline: ls, supporting: ls })
    .optional()
    .nullable(),
  intro: z
    .object({ eyebrow: ls, heading: ls, image: imageSchema })
    .optional()
    .nullable(),
  showIntro: z.boolean().optional().nullable(),
  showPhilosophy: z.boolean().optional().nullable(),
  showExpertise: z.boolean().optional().nullable(),
  showTreatments: z.boolean().optional().nullable(),
  showEditorial: z.boolean().optional().nullable(),
  showJourney: z.boolean().optional().nullable(),
  showClinic: z.boolean().optional().nullable()
});

export interface HomeVisibility {
  intro: boolean;
  philosophy: boolean;
  expertise: boolean;
  treatments: boolean;
  editorial: boolean;
  journey: boolean;
  clinic: boolean;
}

export const defaultVisibility: HomeVisibility = {
  intro: true,
  philosophy: true,
  expertise: true,
  treatments: true,
  editorial: true,
  journey: true,
  clinic: true
};

export async function getHomepage(): Promise<{ content: HomeContent; visibility: HomeVisibility }> {
  const raw = await cmsFetch<unknown>(
    `*[_type == "homepage"][0]{
      hero, intro, showIntro, showPhilosophy, showExpertise,
      showTreatments, showEditorial, showJourney, showClinic
    }`
  );
  if (!raw) return { content: fallbackHome, visibility: defaultVisibility };
  const parsed = homepageSchema.safeParse(raw);
  if (!parsed.success) return { content: fallbackHome, visibility: defaultVisibility };
  const data = parsed.data;
  const content: HomeContent = {
    ...fallbackHome,
    hero: {
      eyebrow: mergeString(data.hero?.eyebrow, fallbackHome.hero.eyebrow),
      headline: mergeString(data.hero?.headline, fallbackHome.hero.headline),
      supporting: mergeString(data.hero?.supporting, fallbackHome.hero.supporting)
    },
    intro: {
      ...fallbackHome.intro,
      eyebrow: mergeString(data.intro?.eyebrow, fallbackHome.intro.eyebrow),
      heading: mergeString(data.intro?.heading, fallbackHome.intro.heading),
      image:
        mapImage(data.intro?.image, {
          en: "Dr. Zara Iqbal Khan",
          ar: "د. زارا إقبال خان"
        }) ?? fallbackHome.intro.image
    }
  };
  const visibility: HomeVisibility = {
    intro: data.showIntro ?? defaultVisibility.intro,
    philosophy: data.showPhilosophy ?? defaultVisibility.philosophy,
    expertise: data.showExpertise ?? defaultVisibility.expertise,
    treatments: data.showTreatments ?? defaultVisibility.treatments,
    editorial: data.showEditorial ?? defaultVisibility.editorial,
    journey: data.showJourney ?? defaultVisibility.journey,
    clinic: data.showClinic ?? defaultVisibility.clinic
  };
  return { content, visibility };
}

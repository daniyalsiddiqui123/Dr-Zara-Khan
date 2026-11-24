import type { Metadata } from "next";
import { locales, type Locale } from "./types";
import { getDictionary } from "./i18n";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://drzara-iqbalkhan.com"
).replace(/\/$/, "");

export const brand = {
  nameEn: "Dr. Zara Iqbal Khan",
  nameAr: "د. زارا إقبال خان",
  roleEn: "Dermatologist & Aesthetic Physician",
  roleAr: "أخصائية الجلدية والطب التجميلي",
  cityEn: "Riyadh",
  cityAr: "الرياض",
  countryEn: "Saudi Arabia",
  countryAr: "المملكة العربية السعودية"
};

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.replace(/^\/(en|ar)(?=\/|$)/, "");
  return `/${locale}${clean === "/" ? "" : clean}`;
}

export function languageAlternates(path: string): Record<string, string> {
  const clean = path.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = absoluteUrl(localizedPath(locale, clean));
  }
  alternates["x-default"] = absoluteUrl(localizedPath("en", clean));
  return alternates;
}

interface MetadataInput {
  locale: Locale;
  path: string;
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex
}: MetadataInput): Metadata {
  const dict = getDictionary(locale);
  const name = locale === "ar" ? brand.nameAr : brand.nameEn;
  const role = locale === "ar" ? brand.roleAr : brand.roleEn;
  const resolvedTitle = title ? `${title} — ${name}` : `${name} — ${role}`;
  const resolvedDescription =
    description ??
    (locale === "ar"
      ? "رعاية جلدية مدروسة وعلاجات تجميلية متقدمة في الرياض، تقودها العلم والدقة وفهم الجمال الفردي."
      : "Thoughtful dermatological care and advanced aesthetic treatments in Riyadh, guided by science, precision and an understanding of individual beauty.");
  const canonical = absoluteUrl(localizedPath(locale, path));
  const ogImage = image ? absoluteUrl(image) : absoluteUrl(`/${locale}/opengraph-image`);

  return {
    metadataBase: new URL(siteUrl),
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical,
      languages: languageAlternates(path)
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: type === "article" ? "article" : "website",
      url: canonical,
      siteName: name,
      title: resolvedTitle,
      description: resolvedDescription,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
      images: [{ url: ogImage, width: 1200, height: 630, alt: resolvedTitle }],
      publishedTime,
      modifiedTime
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [ogImage]
    },
    other: {
      "content-language": locale,
      ...(dict.footer.disclaimer ? { "medical-disclaimer": dict.footer.disclaimer } : {})
    }
  };
}

type JsonLd = Record<string, unknown>;

export function personSchema(locale: Locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: locale === "ar" ? brand.nameAr : brand.nameEn,
    alternateName: locale === "ar" ? brand.nameEn : brand.nameAr,
    jobTitle: locale === "ar" ? brand.roleAr : brand.roleEn,
    description:
      locale === "ar"
        ? "أخصائية جلدية وطبيبة تجميل في الرياض، المملكة العربية السعودية."
        : "Dermatologist and aesthetic physician based in Riyadh, Saudi Arabia.",
    url: absoluteUrl(localizedPath(locale, "/about")),
    image: absoluteUrl("/zara-khan-2.jpeg"),
    knowsAbout:
      locale === "ar"
        ? ["طب الجلدية", "حب الشباب", "التصبغات", "العناية بالبشرة", "الطب التجميلي"]
        : [
            "Dermatology",
            "Acne and acne scarring",
            "Pigmentation",
            "Skin health",
            "Aesthetic medicine"
          ],
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "ar" ? brand.cityAr : brand.cityEn,
      addressCountry: "SA"
    }
  };
}

export function websiteSchema(locale: Locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: absoluteUrl(localizedPath(locale, "/")),
    name: locale === "ar" ? brand.nameAr : brand.nameEn,
    inLanguage: locale,
    publisher: { "@id": `${siteUrl}/#person` }
  };
}

export function profilePageSchema(locale: Locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl(localizedPath(locale, "/about")) + "#profile",
    url: absoluteUrl(localizedPath(locale, "/about")),
    name: locale === "ar" ? brand.nameAr : brand.nameEn,
    inLanguage: locale,
    mainEntity: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` }
  };
}

export function breadcrumbSchema(
  locale: Locale,
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localizedPath(locale, item.path))
    }))
  };
}

export function medicalWebPageSchema(args: {
  locale: Locale;
  path: string;
  name: string;
  description: string;
  lastReviewed?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: args.name,
    description: args.description,
    url: absoluteUrl(localizedPath(args.locale, args.path)),
    inLanguage: args.locale,
    lastReviewed: args.lastReviewed,
    reviewedBy: { "@id": `${siteUrl}/#person` },
    about: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` }
  };
}

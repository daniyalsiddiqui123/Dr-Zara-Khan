export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export type Localized<T = string> = Record<Locale, T>;

export interface LocalizedString {
  en: string;
  ar: string;
}

export type SocialIcon = "instagram" | "linkedin" | "x" | "tiktok";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface SiteSettings {
  name: LocalizedString;
  shortName: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  city: LocalizedString;
  country: LocalizedString;
  email?: string;
  phone?: string;
  whatsapp?: string;
  bookingUrl?: string;
  social: SocialLink[];
}

export interface NavItem {
  label: LocalizedString;
  href: string;
}

export interface ClinicHour {
  day: LocalizedString;
  hours: LocalizedString;
}

export interface Clinic {
  id: string;
  name: LocalizedString;
  addressLines: Localized<string[]>;
  city: LocalizedString;
  googleMapsUrl?: string;
  mapEmbedUrl?: string;
  bookingUrl?: string;
  phone?: string;
  whatsapp?: string;
  hours: ClinicHour[];
  note?: LocalizedString;
  isPlaceholder?: boolean;
}

export type CredentialKind = "education" | "training" | "membership" | "experience" | "award";

export interface Credential {
  id: string;
  kind: CredentialKind;
  title: LocalizedString;
  detail?: LocalizedString;
  year?: string;
  isPlaceholder?: boolean;
}

export interface Expertise {
  slug: string;
  title: LocalizedString;
  short: LocalizedString;
  intro: LocalizedString;
  overview: Localized<string[]>;
  sections: { heading: LocalizedString; body: Localized<string[]> }[];
  art: ArtVariant;
  image?: ContentImage;
  relatedTreatments: string[];
  seo: { title: LocalizedString; description: LocalizedString };
}

export interface ContentImage {
  url: string;
  alt: LocalizedString;
}

export type ArtVariant =
  | "portrait"
  | "macro"
  | "cellular"
  | "silk"
  | "clinic"
  | "botanical"
  | "light"
  | "strata";

export interface Faq {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface Treatment {
  slug: string;
  title: LocalizedString;
  category: LocalizedString;
  short: LocalizedString;
  intro: LocalizedString;
  art: ArtVariant;
  image?: ContentImage;
  overview: Localized<string[]>;
  suitability: Localized<string[]>;
  procedure: Localized<string[]>;
  aftercare: Localized<string[]>;
  considerations: Localized<string[]>;
  faqs: Faq[];
  relatedTreatments: string[];
  featured?: boolean;
  seo: { title: LocalizedString; description: LocalizedString };
}

export interface Pillar {
  index: string;
  title: LocalizedString;
  body: LocalizedString;
}

export interface HomeContent {
  hero: {
    eyebrow: LocalizedString;
    headline: LocalizedString;
    supporting: LocalizedString;
  };
  intro: {
    eyebrow: LocalizedString;
    heading: LocalizedString;
    body: Localized<string[]>;
    signature: LocalizedString;
    image?: ContentImage;
  };
  philosophy: {
    eyebrow: LocalizedString;
    heading: LocalizedString;
    quote: LocalizedString;
    pillars: Pillar[];
  };
}

import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { fontClassNames } from "@/lib/fonts";
import { getDir, isLocale, locales, type Locale } from "@/lib/i18n";
import { buildMetadata, personSchema, websiteSchema, siteUrl, brand } from "@/lib/seo";
import { getSiteSettings } from "@/lib/content";
import { JsonLd } from "@/components/seo/json-ld";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F4EC" },
    { media: "(prefers-color-scheme: dark)", color: "#241C16" }
  ]
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const settings = await getSiteSettings();
  return {
    ...buildMetadata({
      locale,
      path: "/",
      title: undefined,
      description: settings.description[locale]
    }),
    title: {
      default: `${settings.name[locale]} — ${settings.title[locale]}`,
      template: `%s — ${settings.name[locale]}`
    },
    applicationName: settings.name[locale],
    authors: [{ name: settings.name.en, url: siteUrl }],
    creator: settings.name.en,
    publisher: settings.name.en,
    category: "health",
    keywords:
      locale === "ar"
        ? [
            "دكتورة جلدية في الرياض",
            "أخصائية جلدية الرياض",
            "علاج حب الشباب الرياض",
            "طب تجميلي الرياض",
            "د. زارا إقبال خان"
          ]
        : [
            "dermatologist in Riyadh",
            "female dermatologist Riyadh",
            "acne treatment Riyadh",
            "acne scar treatment Riyadh",
            "aesthetic physician Riyadh",
            "Dr. Zara Iqbal Khan"
          ],
    formatDetection: { telephone: false, address: false, email: false }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const settings = await getSiteSettings();

  return (
    <html lang={typedLocale} dir={getDir(typedLocale)} className={fontClassNames}>
      <body className="min-h-screen bg-ivory-100 text-espresso-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-espresso-900 focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-label focus:text-ivory-100"
        >
          {typedLocale === "ar" ? "تجاوز إلى المحتوى" : "Skip to content"}
        </a>
        {children}
        <JsonLd data={[personSchema(typedLocale), websiteSchema(typedLocale)]} />
        <span className="sr-only">
          {settings.name[typedLocale]} — {brand.cityEn}
        </span>
      </body>
    </html>
  );
}

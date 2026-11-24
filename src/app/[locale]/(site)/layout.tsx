import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getClinics, getNav, getSiteSettings } from "@/lib/content";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const revalidate = 300;

export default async function SiteLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const [settings, nav, clinics] = await Promise.all([
    getSiteSettings(),
    getNav(),
    getClinics()
  ]);
  const dict = getDictionary(locale);
  const clinic = clinics[0];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} nav={nav} settings={settings} dict={dict} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} settings={settings} nav={nav} clinic={clinic} dict={dict} />
    </div>
  );
}

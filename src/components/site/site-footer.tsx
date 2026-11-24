import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n";
import type { Clinic, NavItem, SiteSettings, SocialLink } from "@/lib/types";
import { whatsappHref } from "@/lib/utils";
import { LanguageSwitcher } from "./language-switcher";

const socialIcons: Record<SocialLink["icon"], typeof Instagram> = {
  instagram: Instagram,
  linkedin: Linkedin,
  x: Twitter,
  tiktok: Instagram
};

export function SiteFooter({
  locale,
  settings,
  nav,
  clinic,
  dict
}: {
  locale: Locale;
  settings: SiteSettings;
  nav: NavItem[];
  clinic: Clinic;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-espresso-950 text-ivory-100">
      <div className="container-editorial pb-10 pt-20 md:pt-24">
        <div className="flex flex-col gap-8 border-b border-ivory-100/12 pb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-champagne-300/70">{settings.title[locale]}</p>
            <p className="mt-5 max-w-2xl font-display text-display-md text-ivory-50">
              {settings.name[locale]}
            </p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory-200/60">
            {dict.footer.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-ivory-200/40">{dict.footer.practice}</p>
            <p className="mt-5 text-sm text-ivory-200/80">{clinic.name[locale]}</p>
            <p className="mt-2 text-sm text-ivory-200/55">{clinic.addressLines[locale].join(", ")}</p>
            <Link
              href={href(locale, "/clinic")}
              className="group mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-label text-champagne-300/90"
            >
              {dict.nav.clinic}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </Link>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-ivory-200/40">{dict.footer.explore}</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={href(locale, item.href)}
                    className="text-sm text-ivory-200/70 transition-colors hover:text-ivory-50"
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-ivory-200/40">{dict.footer.connect}</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory-200/70">
              {settings.email && (
                <li>
                  <a
                    href={`mailto:${settings.email}`}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-ivory-50"
                  >
                    <Mail className="h-3.5 w-3.5 text-champagne-300/70" aria-hidden="true" />
                    {settings.email}
                  </a>
                </li>
              )}
              {settings.phone && (
                <li>
                  <a
                    href={`tel:${settings.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-ivory-50"
                  >
                    <Phone className="h-3.5 w-3.5 text-champagne-300/70" aria-hidden="true" />
                    {settings.phone}
                  </a>
                </li>
              )}
              {settings.whatsapp && (
                <li>
                  <a
                    href={whatsappHref(settings.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-ivory-50"
                  >
                    <Phone className="h-3.5 w-3.5 text-champagne-300/70" aria-hidden="true" />
                    {dict.common.whatsapp}
                  </a>
                </li>
              )}
              {clinic.googleMapsUrl && (
                <li>
                  <a
                    href={clinic.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-ivory-50"
                  >
                    <MapPin className="h-3.5 w-3.5 text-champagne-300/70" aria-hidden="true" />
                    {dict.common.getDirections}
                  </a>
                </li>
              )}
            </ul>

            {settings.social.length > 0 && (
              <div className="mt-6 flex items-center gap-4">
                {settings.social.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-ivory-200/60 transition-colors hover:text-ivory-50"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-ivory-200/40">{dict.common.language}</p>
            <div className="mt-5">
              <LanguageSwitcher locale={locale} tone="light" />
            </div>
          </div>
        </div>

        <div className="space-y-6 border-t border-ivory-100/12 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-ivory-200/40">
            {dict.footer.disclaimer}
          </p>
          <div className="flex flex-col gap-3 text-[0.65rem] uppercase tracking-label text-ivory-200/35 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {settings.name[locale]}. {dict.footer.rights}
            </p>
            <p className="normal-case tracking-normal">{dict.footer.contentNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

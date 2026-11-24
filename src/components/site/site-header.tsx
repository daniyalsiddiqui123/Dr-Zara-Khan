"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n";
import type { NavItem, SiteSettings } from "@/lib/types";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./language-switcher";

interface SiteHeaderProps {
  locale: Locale;
  nav: NavItem[];
  settings: SiteSettings;
  dict: Dictionary;
}

export function SiteHeader({ locale, nav, settings, dict }: SiteHeaderProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const bookHref = settings.bookingUrl || href(locale, "/contact");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const transparent = isHome && !scrolled && !open;
  const light = transparent;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-all duration-700 ease-editorial",
          transparent
            ? "border-ivory-100/10 bg-espresso-950/25"
            : "border-espresso-900/10 bg-ivory-100/70",
          open && "bg-ivory-100/95"
        )}
      >
        <div className="container-editorial flex h-20 items-center justify-between gap-6">
          <Link
            href={href(locale, "/")}
            className="group flex flex-col leading-none"
            aria-label={settings.name[locale]}
          >
            <span
              className={cn(
                "font-display text-[1.35rem] tracking-editorial transition-colors md:text-[1.5rem]",
                light ? "text-ivory-50" : "text-espresso-900"
              )}
            >
              {locale === "ar" ? "د. زارا" : settings.shortName}
            </span>
            <span
              className={cn(
                "mt-1 text-[0.55rem] uppercase tracking-label transition-colors",
                light ? "text-ivory-200/60" : "text-taupe-500"
              )}
            >
              {locale === "ar" ? "الجلدية · الرياض" : "Dermatology · Riyadh"}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const itemHref = href(locale, item.href);
              const active = pathname === itemHref || pathname.startsWith(`${itemHref}/`);
              return (
                <Link
                  key={item.href}
                  href={itemHref}
                  className={cn(
                    "relative py-1 text-[0.7rem] font-medium uppercase tracking-label transition-colors",
                    light
                      ? active
                        ? "text-ivory-50"
                        : "text-ivory-100/65 hover:text-ivory-50"
                      : active
                        ? "text-espresso-900"
                        : "text-warmgrey-500 hover:text-espresso-900"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label[locale]}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-500 ease-editorial",
                      active && "scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <LanguageSwitcher locale={locale} tone={light ? "light" : "dark"} className="hidden sm:inline-flex" />
            <Link
              href={bookHref}
              className={cn(
                "hidden items-center gap-2 border px-5 py-2.5 text-[0.65rem] font-medium uppercase tracking-label transition-all duration-500 sm:inline-flex",
                light
                  ? "border-ivory-100/35 text-ivory-100 hover:bg-ivory-100 hover:text-espresso-950"
                  : "border-espresso-900/25 text-espresso-900 hover:bg-espresso-900 hover:text-ivory-100"
              )}
              target={settings.bookingUrl ? "_blank" : undefined}
              rel={settings.bookingUrl ? "noopener noreferrer" : undefined}
            >
              {dict.nav.book}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center border transition-colors lg:hidden",
                light
                  ? "border-ivory-100/30 text-ivory-100"
                  : "border-espresso-900/20 text-espresso-900"
              )}
              aria-expanded={open}
              aria-label={open ? dict.nav.close : dict.nav.menu}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-ivory-100 px-6 pb-10 pt-28 lg:hidden"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {[{ label: { en: "Home", ar: "الرئيسية" }, href: "/" }, ...nav].map((item, index) => {
                const itemHref = href(locale, item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={reduced ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-espresso-900/10"
                  >
                    <Link
                      href={itemHref}
                      className="flex items-center justify-between py-4 font-display text-3xl text-espresso-900"
                    >
                      <span>{item.label[locale]}</span>
                      <ArrowRight className="h-4 w-4 text-taupe-400 rtl:-scale-x-100" aria-hidden="true" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="mt-auto space-y-6 pt-10">
              <Link href={bookHref} className="btn-primary w-full">
                {dict.nav.book}
              </Link>
              <div className="flex items-center justify-between">
                <LanguageSwitcher locale={locale} />
                {settings.email && (
                  <a href={`mailto:${settings.email}`} className="text-xs text-warmgrey-500">
                    {settings.email}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { href, localeNames, otherLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  tone = "dark",
  className
}: {
  locale: Locale;
  tone?: "dark" | "light";
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const target = otherLocale(locale);
  const clean = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
  const targetHref = href(target, clean);

  return (
    <Link
      href={targetHref}
      hrefLang={target}
      lang={target}
      className={cn(
        "group inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-label transition-colors",
        tone === "light" ? "text-ivory-100/80 hover:text-ivory-50" : "text-warmgrey-500 hover:text-espresso-900",
        className
      )}
      aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
    >
      <Languages className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
      <span>{localeNames[target]}</span>
    </Link>
  );
}

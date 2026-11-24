import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Breadcrumbs({
  locale,
  items,
  tone = "dark",
  className
}: {
  locale: Locale;
  items: { name: string; path?: string }[];
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-[0.62rem] uppercase tracking-label",
        tone === "light" ? "text-ivory-200/50" : "text-taupe-500",
        className
      )}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.name}-${index}`} className="inline-flex items-center gap-1.5">
            {item.path && !isLast ? (
              <Link
                href={href(locale, item.path)}
                className={cn(
                  "transition-colors",
                  tone === "light" ? "hover:text-ivory-50" : "hover:text-espresso-900"
                )}
              >
                {item.name}
              </Link>
            ) : (
              <span aria-current={isLast ? "page" : undefined}>{item.name}</span>
            )}
            {!isLast && (
              <ChevronRight className="h-3 w-3 opacity-50 rtl:-scale-x-100" aria-hidden="true" />
            )}
          </span>
        );
      })}
    </nav>
  );
}

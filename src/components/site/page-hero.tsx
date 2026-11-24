import type { ReactNode } from "react";
import type { ArtVariant, ContentImage, Locale } from "@/lib/types";
import { Reveal } from "@/components/ui/reveal";
import { ArtMedia } from "@/components/ui/art-media";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  heading,
  intro,
  children,
  art,
  image,
  locale = "en",
  artLabel,
  breadcrumbs,
  compact = false
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  children?: ReactNode;
  art?: ArtVariant;
  image?: ContentImage;
  locale?: Locale;
  artLabel?: string;
  breadcrumbs?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory-100 pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="container-editorial grid items-end gap-12 lg:grid-cols-12">
        <div className={cn(art ? "lg:col-span-7" : "lg:col-span-9", "max-w-3xl")}>
          {breadcrumbs && <div className="mb-10">{breadcrumbs}</div>}
          <Reveal>
            <p className="eyebrow text-taupe-500">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              style={{ textWrap: "balance" }}
              className={cn(
                "mt-6 font-display text-espresso-900",
                compact ? "text-display-md" : "text-display-lg"
              )}
            >
              {heading}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-[1.02rem] leading-relaxed text-warmgrey-500">
                {intro}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.14}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
        {art && (
          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
            <ArtMedia
              variant={art}
              image={image}
              locale={locale}
              label={artLabel ?? heading}
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 30vw, 100vw"
              priority
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}

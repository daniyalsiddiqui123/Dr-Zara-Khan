"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n";
import type { HomeContent, SiteSettings } from "@/lib/types";
import { DermaToolsArt } from "@/components/ui/derma-tools-art";

export function Hero({
  locale,
  content,
  settings,
  dict
}: {
  locale: Locale;
  content: HomeContent["hero"];
  settings: SiteSettings;
  dict: Dictionary;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

  const words = content.headline[locale].split(" ");
  const bookHref = settings.bookingUrl || href(locale, "/contact");

  return (
    <section
      ref={sectionRef}
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-espresso-950 text-ivory-100"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="absolute inset-0"
        style={reduced ? undefined : { scale: mediaScale, y: mediaY }}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_32%,rgba(201,169,106,0.18),transparent_55%),radial-gradient(ellipse_at_20%_85%,rgba(138,124,105,0.22),transparent_60%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute end-0 top-16 h-[44vh] w-full md:inset-y-0 md:h-full md:w-[58%]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_70%,rgba(201,169,106,0.22),transparent_65%)]" />
          <DermaToolsArt className="opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/10 to-transparent md:hidden" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/70 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-espresso-950/60" aria-hidden="true" />

      <motion.div
        className="container-editorial relative z-10 flex flex-1 flex-col justify-end pb-14 pt-32 md:pb-16"
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-[0.62rem] uppercase tracking-label text-ivory-200/60"
        >
          <span className="h-px w-8 bg-champagne-300/70" aria-hidden="true" />
          {content.eyebrow[locale]}
        </motion.div>

        <h1
          id="hero-heading"
          className="mt-7 max-w-5xl font-display text-display-xl text-ivory-50"
        >
          {words.map((word, index) => (
            <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.25,
                  delay: 0.28 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {word}
                {index < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-8 border-t border-ivory-100/12 pt-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md"
          >
            <p className="text-[0.98rem] leading-relaxed text-ivory-200/70">
              {content.supporting[locale]}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={href(locale, "/treatments")}
                className="group inline-flex items-center gap-2 bg-ivory-100 px-7 py-4 text-[0.68rem] font-medium uppercase tracking-label text-espresso-950 transition-colors duration-500 hover:bg-champagne-200"
              >
                {dict.common.exploreTreatments}
              </Link>
              <Link href={bookHref} className="btn-light">
                {dict.common.bookAppointment}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between gap-8 md:flex-col md:items-end md:gap-5"
          >
            <p className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-label text-ivory-200/55">
              <MapPin className="h-3.5 w-3.5 text-champagne-300/80" aria-hidden="true" />
              {locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
            </p>
            <div className="hidden items-center gap-3 text-[0.6rem] uppercase tracking-label text-ivory-200/35 md:flex">
              {dict.common.scroll}
              <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

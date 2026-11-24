"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MousePointer2 } from "lucide-react";
import type { HomeContent, Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

const SkinCanvas = dynamic(() => import("@/components/three/skin-canvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-espresso-900">
      <span className="h-24 w-24 animate-pulse rounded-full border border-champagne-400/30" />
    </div>
  )
});

export function ThreeExperience({
  locale,
  content
}: {
  locale: Locale;
  content: HomeContent["three"];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0.08);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = canvasWrapRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced) {
      progressRef.current = 0.18;
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        const index = Math.min(2, Math.max(0, Math.floor(self.progress * 2.85)));
        setActive(index);
      }
    });
    return () => {
      trigger.kill();
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="three-heading"
      className="relative bg-espresso-950 text-ivory-100"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-champagne-400/[0.06] blur-[120px]" />
      </div>

      <div className="relative lg:h-[240vh]">
        <div className="lg:sticky lg:top-0 lg:flex lg:min-h-[100svh] lg:items-center">
          <div className="container-editorial grid w-full items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
            <div className="order-2 lg:order-1">
              <p className="eyebrow text-champagne-300/70">{content.eyebrow[locale]}</p>
              <h2
                id="three-heading"
                className="mt-6 font-display text-display-lg text-ivory-50"
              >
                {content.heading[locale]}
              </h2>
              <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ivory-200/65">
                {content.body[locale]}
              </p>

              <div className="mt-10 hidden items-center gap-3 text-[0.65rem] uppercase tracking-label text-ivory-200/40 lg:flex">
                <MousePointer2 className="h-3.5 w-3.5" aria-hidden="true" />
                {content.hint[locale]}
              </div>

              <ol className="mt-10 space-y-0 border-t border-ivory-100/12">
                {content.layers.map((layer, index) => (
                  <li
                    key={layer.name.en}
                    className={cn(
                      "grid grid-cols-[2rem_1fr] gap-4 border-b border-ivory-100/12 py-5 transition-opacity duration-700",
                      active === index ? "opacity-100" : "opacity-45"
                    )}
                  >
                    <span
                      className={cn(
                        "pt-1 font-sans text-[0.6rem] tracking-label transition-colors",
                        active === index ? "text-champagne-300" : "text-ivory-200/40"
                      )}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="h-1 w-1 rounded-full bg-champagne-400" aria-hidden="true" />
                        <h3 className="font-display text-xl text-ivory-50">{layer.name[locale]}</h3>
                      </div>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory-200/55">
                        {layer.detail[locale]}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="order-1 lg:order-2">
              <div
                ref={canvasWrapRef}
                className="grain relative h-[52vh] min-h-[320px] overflow-hidden border border-ivory-100/12 bg-espresso-900 sm:h-[58vh] lg:h-[76vh]"
              >
                {visible ? (
                  <SkinCanvas
                    progressRef={progressRef}
                    labels={content.layers.map((layer) => ({
                      title: layer.name[locale],
                      description: layer.detail[locale]
                    }))}
                    fallbackLabel={content.disclaimer[locale]}
                    loadingLabel={locale === "ar" ? "جارٍ تجهيز التجربة" : "Preparing the experience"}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="h-24 w-24 rounded-full border border-champagne-400/25" />
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-espresso-950/80 to-transparent p-5">
                  <span className="text-[0.6rem] uppercase tracking-label text-ivory-200/45">
                    {content.layers[active]?.name[locale]}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-label text-ivory-200/30">
                    {locale === "ar" ? "تصوّر تعليمي" : "Educational visualisation"}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-[0.68rem] leading-relaxed text-ivory-200/35">
                {content.disclaimer[locale]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

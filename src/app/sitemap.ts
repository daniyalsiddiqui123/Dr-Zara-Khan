import type { MetadataRoute } from "next";
import { locales } from "@/lib/types";
import { absoluteUrl } from "@/lib/seo";
import { expertiseAreas } from "@/content/expertise";
import { treatments } from "@/content/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/about", "/expertise", "/treatments", "/clinic", "/contact"];
  const dynamicPaths = [
    ...expertiseAreas.map((area) => `/expertise/${area.slug}`),
    ...treatments.map((treatment) => `/treatments/${treatment.slug}`)
  ];
  const allPaths = [...staticPaths, ...dynamicPaths];
  const now = new Date();

  return allPaths.flatMap((path) => {
    const clean = path === "/" ? "" : path;
    return locales.map((locale) => {
      const languages = Object.fromEntries(
        locales.map((entry) => [entry, absoluteUrl(`/${entry}${clean}`)])
      );
      return {
        url: absoluteUrl(`/${locale}${clean}`),
        lastModified: now,
        changeFrequency: path === "/" ? "monthly" : "yearly",
        priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
        alternates: { languages }
      } satisfies MetadataRoute.Sitemap[number];
    });
  });
}

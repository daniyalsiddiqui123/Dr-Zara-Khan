import {
  Amiri,
  Cormorant_Garamond,
  IBM_Plex_Sans_Arabic,
  Manrope
} from "next/font/google";

export const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap"
});

export const sansFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

export const arabicSansFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-arabic-sans",
  display: "swap"
});

export const arabicDisplayFont = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-arabic-display",
  display: "swap"
});

export const fontClassNames = [
  displayFont.variable,
  sansFont.variable,
  arabicSansFont.variable,
  arabicDisplayFont.variable
].join(" ");

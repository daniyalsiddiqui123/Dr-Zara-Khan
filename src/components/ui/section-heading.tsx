import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "start" | "center";
  tone?: "dark" | "light";
  className?: string;
  headingClassName?: string;
  level?: "h1" | "h2" | "h3";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "start",
  tone = "dark",
  className,
  headingClassName,
  level = "h2",
  id
}: SectionHeadingProps) {
  const Tag = level;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className={cn("eyebrow mb-6", tone === "light" ? "text-champagne-200/80" : "text-taupe-500")}>
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <Tag
          id={id}
          style={{ textWrap: "balance" }}
          className={cn(
            "font-display text-display-md",
            tone === "light" ? "text-ivory-100" : "text-espresso-900",
            headingClassName
          )}
        >
          {heading}
        </Tag>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-[1.02rem] leading-relaxed",
              align === "center" && "mx-auto",
              tone === "light" ? "text-ivory-200/75" : "text-warmgrey-500"
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

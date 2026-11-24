import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn, isExternalHref } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light" | "text";
  className?: string;
  showIcon?: boolean;
  ariaLabel?: string;
}

const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  light: "btn-light",
  text: "group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-label"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  showIcon = false,
  ariaLabel
}: ButtonLinkProps) {
  const classes = cn(variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {showIcon && (
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

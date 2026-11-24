import Image from "next/image";
import type { ArtVariant, ContentImage, Locale } from "@/lib/types";
import { cn } from "@/lib/utils";
import { EditorialArt } from "./editorial-art";

export function ArtMedia({
  variant,
  image,
  label,
  locale = "en",
  className,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false
}: {
  variant: ArtVariant;
  image?: ContentImage;
  label: string;
  locale?: Locale;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (image?.url) {
    return (
      <div className={cn("relative overflow-hidden bg-espresso-900", className)}>
        <Image
          src={image.url}
          alt={image.alt[locale] || label}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }
  return <EditorialArt variant={variant} label={label} className={className} />;
}

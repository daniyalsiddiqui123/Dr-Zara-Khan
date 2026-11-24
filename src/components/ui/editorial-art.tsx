import type { ArtVariant } from "@/lib/types";
import { cn } from "@/lib/utils";

interface EditorialArtProps {
  variant: ArtVariant;
  label: string;
  className?: string;
  priority?: boolean;
}

function Grain({ id }: { id: string }) {
  return (
    <g opacity="0.22">
      <rect width="800" height="1000" filter={`url(#${id}-grain)`} opacity="0.55" />
    </g>
  );
}

export function EditorialArt({ variant, label, className }: EditorialArtProps) {
  const id = `ea-${variant}`;
  return (
    <div className={cn("relative overflow-hidden bg-espresso-900", className)} role="img" aria-label={label}>
      <svg
        viewBox="0 0 800 1000"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id={`${id}-grain`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <filter id={`${id}-soft`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="38" />
          </filter>
          <filter id={`${id}-softer`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="70" />
          </filter>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0" stopColor="#4A3B30" />
            <stop offset="0.45" stopColor="#2E241D" />
            <stop offset="1" stopColor="#1A140F" />
          </linearGradient>
          <radialGradient id={`${id}-light`} cx="0.3" cy="0.2" r="0.75">
            <stop offset="0" stopColor="#F1E7D6" stopOpacity="0.9" />
            <stop offset="0.45" stopColor="#DCC7A6" stopOpacity="0.45" />
            <stop offset="1" stopColor="#C9A96A" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-skin`} x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0" stopColor="#E7D8C0" />
            <stop offset="0.45" stopColor="#C9A98B" />
            <stop offset="1" stopColor="#6E5544" />
          </linearGradient>
          <linearGradient id={`${id}-champ`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F8F4EC" stopOpacity="0.95" />
            <stop offset="0.5" stopColor="#DCC7A6" stopOpacity="0.6" />
            <stop offset="1" stopColor="#C9A96A" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <rect width="800" height="1000" fill={`url(#${id}-bg)`} />

        {variant === "portrait" && (
          <g>
            <ellipse cx="300" cy="250" rx="420" ry="360" fill={`url(#${id}-light)`} filter={`url(#${id}-softer)`} />
            <path
              d="M140 1000 C180 720 150 520 330 360 C470 236 640 260 760 150 L800 150 L800 1000 Z"
              fill={`url(#${id}-skin)`}
              opacity="0.92"
            />
            <path
              d="M250 1000 C300 760 280 620 400 480 C500 366 640 380 760 300 L800 320 L800 1000 Z"
              fill={`url(#${id}-champ)`}
              opacity="0.5"
            />
            <path
              d="M60 760 C200 700 320 720 460 620 C580 534 660 520 800 560"
              fill="none"
              stroke="#F8F4EC"
              strokeOpacity="0.28"
              strokeWidth="1"
            />
            <path
              d="M40 900 C210 830 330 850 500 740 C620 664 710 660 800 690"
              fill="none"
              stroke="#C9A96A"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
            <circle cx="612" cy="332" r="150" fill="#F1E7D6" opacity="0.12" filter={`url(#${id}-soft)`} />
          </g>
        )}

        {variant === "macro" && (
          <g>
            <rect width="800" height="1000" fill="#3A2E26" />
            <ellipse cx="380" cy="380" rx="520" ry="420" fill={`url(#${id}-skin)`} opacity="0.85" filter={`url(#${id}-softer)`} />
            <ellipse cx="620" cy="240" rx="300" ry="240" fill="#F1E7D6" opacity="0.5" filter={`url(#${id}-soft)`} />
            <g stroke="#F8F4EC" strokeOpacity="0.16" fill="none">
              <path d="M-40 620 C180 520 320 700 520 560 C660 464 740 470 840 500" strokeWidth="1" />
              <path d="M-40 700 C180 600 320 780 520 640 C660 544 740 550 840 580" strokeWidth="1" />
              <path d="M-40 780 C180 680 320 860 520 720 C660 624 740 630 840 660" strokeWidth="1" />
              <path d="M-40 860 C180 760 320 940 520 800 C660 704 740 710 840 740" strokeWidth="1" />
            </g>
            <ellipse cx="300" cy="820" rx="280" ry="120" fill="#1A140F" opacity="0.5" filter={`url(#${id}-soft)`} />
          </g>
        )}

        {variant === "cellular" && (
          <g>
            <rect width="800" height="1000" fill="#241C16" />
            <ellipse cx="420" cy="430" rx="460" ry="420" fill="#3A2E26" opacity="0.9" filter={`url(#${id}-softer)`} />
            <g>
              <circle cx="360" cy="360" r="150" fill="none" stroke="#DCC7A6" strokeOpacity="0.5" strokeWidth="1.2" />
              <circle cx="360" cy="360" r="96" fill="#C9A96A" opacity="0.13" />
              <circle cx="520" cy="470" r="190" fill="none" stroke="#F1E7D6" strokeOpacity="0.32" strokeWidth="1" />
              <circle cx="520" cy="470" r="120" fill="#DCC7A6" opacity="0.08" />
              <circle cx="250" cy="600" r="110" fill="none" stroke="#C9A96A" strokeOpacity="0.4" strokeWidth="1" />
              <circle cx="610" cy="700" r="70" fill="#F1E7D6" opacity="0.1" />
              <circle cx="470" cy="250" r="52" fill="#F8F4EC" opacity="0.16" />
              <circle cx="650" cy="320" r="30" fill="#C9A96A" opacity="0.3" />
              <circle cx="200" cy="300" r="18" fill="#F8F4EC" opacity="0.4" />
            </g>
            <path d="M120 900 C260 760 420 820 560 700 C660 610 730 590 840 610" stroke="#DCC7A6" strokeOpacity="0.25" fill="none" />
          </g>
        )}

        {variant === "silk" && (
          <g>
            <rect width="800" height="1000" fill="#2E241D" />
            <ellipse cx="250" cy="180" rx="420" ry="320" fill={`url(#${id}-light)`} opacity="0.7" filter={`url(#${id}-softer)`} />
            <path d="M-40 260 C160 180 260 420 420 360 C580 300 640 120 840 200 L840 520 C640 450 560 640 400 700 C240 760 140 560 -40 640 Z" fill={`url(#${id}-champ)`} opacity="0.85" />
            <path d="M-40 560 C180 470 300 700 480 620 C640 550 700 420 840 470 L840 760 C680 700 600 860 430 900 C260 940 140 780 -40 840 Z" fill={`url(#${id}-skin)`} opacity="0.72" />
            <path d="M-40 840 C180 760 320 940 520 860 C660 800 720 720 840 760 L840 1000 L-40 1000 Z" fill="#1A140F" opacity="0.7" />
            <path d="M80 360 C240 300 320 500 480 440 C600 394 660 280 800 320" stroke="#F8F4EC" strokeOpacity="0.35" fill="none" strokeWidth="1" />
          </g>
        )}

        {variant === "clinic" && (
          <g>
            <rect width="800" height="1000" fill="#E9DFCE" />
            <rect x="0" y="0" width="800" height="1000" fill={`url(#${id}-light)`} opacity="0.6" />
            <rect x="90" y="120" width="270" height="780" fill="#F8F4EC" opacity="0.75" />
            <rect x="400" y="120" width="310" height="780" fill="#C9A96A" opacity="0.12" />
            <line x1="90" y1="120" x2="90" y2="900" stroke="#241C16" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="400" y1="120" x2="400" y2="900" stroke="#241C16" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="90" y1="300" x2="710" y2="300" stroke="#241C16" strokeOpacity="0.12" strokeWidth="1" />
            <line x1="90" y1="620" x2="710" y2="620" stroke="#241C16" strokeOpacity="0.12" strokeWidth="1" />
            <path d="M520 760 C560 620 660 580 720 640" stroke="#241C16" strokeOpacity="0.18" fill="none" />
            <circle cx="680" cy="300" r="80" fill="#DCC7A6" opacity="0.6" filter={`url(#${id}-soft)`} />
            <rect x="0" y="0" width="800" height="1000" fill="#241C16" opacity="0.06" />
          </g>
        )}

        {variant === "botanical" && (
          <g>
            <rect width="800" height="1000" fill="#241C16" />
            <ellipse cx="400" cy="500" rx="420" ry="480" fill="#3A2E26" opacity="0.8" filter={`url(#${id}-softer)`} />
            <g stroke="#BEB1A1" strokeOpacity="0.4" fill="none" strokeWidth="1.4">
              <path d="M400 960 C380 720 420 560 380 360" />
              <path d="M380 700 C300 620 260 560 240 470" />
              <path d="M392 620 C480 560 540 500 580 410" />
              <path d="M372 520 C300 480 270 430 250 360" />
            </g>
            <g fill="#DCC7A6" opacity="0.22">
              <ellipse cx="250" cy="460" rx="46" ry="20" transform="rotate(-30 250 460)" />
              <ellipse cx="570" cy="420" rx="52" ry="22" transform="rotate(24 570 420)" />
              <ellipse cx="270" cy="370" rx="38" ry="16" transform="rotate(-18 270 370)" />
              <ellipse cx="380" cy="330" rx="34" ry="14" />
            </g>
            <circle cx="430" cy="300" r="90" fill="#F1E7D6" opacity="0.12" filter={`url(#${id}-soft)`} />
          </g>
        )}

        {variant === "light" && (
          <g>
            <rect width="800" height="1000" fill="#241C16" />
            <g opacity="0.9" filter={`url(#${id}-soft)`}>
              <path d="M120 -80 L330 -80 L120 1080 L-90 1080 Z" fill="#F1E7D6" opacity="0.5" />
              <path d="M420 -80 L560 -80 L360 1080 L220 1080 Z" fill="#C9A96A" opacity="0.25" />
              <path d="M650 -80 L820 -80 L620 1080 L450 1080 Z" fill="#F8F4EC" opacity="0.3" />
            </g>
            <circle cx="540" cy="620" r="180" fill="#DCC7A6" opacity="0.16" filter={`url(#${id}-softer)`} />
            <circle cx="540" cy="620" r="60" fill="#F8F4EC" opacity="0.35" filter={`url(#${id}-soft)`} />
            <path d="M-40 880 C180 920 320 820 520 900 C660 954 740 920 840 900" stroke="#F8F4EC" strokeOpacity="0.2" fill="none" />
          </g>
        )}

        {variant === "strata" && (
          <g>
            <rect width="800" height="1000" fill="#1A140F" />
            <g transform="rotate(-8 400 500)">
              <path d="M-120 420 C120 340 300 500 520 430 C660 386 740 400 920 360 L920 470 C740 500 660 480 520 530 C300 610 120 450 -120 530 Z" fill="#E7D8C0" opacity="0.42" />
              <path d="M-120 540 C120 470 300 630 520 550 C660 500 740 520 920 480 L920 600 C740 640 660 610 520 670 C300 750 120 590 -120 670 Z" fill="#C9A96A" opacity="0.3" />
              <path d="M-120 680 C120 610 300 770 520 690 C660 640 740 660 920 620 L920 760 C740 800 660 770 520 830 C300 910 120 750 -120 830 Z" fill="#8A7C69" opacity="0.4" />
              <path d="M-120 830 C120 760 300 920 520 840 C660 790 740 810 920 770 L920 1000 L-120 1000 Z" fill="#3A2E26" opacity="0.9" />
            </g>
            <g stroke="#F8F4EC" strokeOpacity="0.18" fill="none">
              <path d="M-40 380 C200 300 360 440 600 370" />
              <path d="M-40 500 C200 430 360 570 600 500" />
              <path d="M-40 640 C200 570 360 710 600 640" />
            </g>
            <circle cx="640" cy="220" r="140" fill="#DCC7A6" opacity="0.12" filter={`url(#${id}-soft)`} />
          </g>
        )}

        <Grain id={id} />
      </svg>
    </div>
  );
}

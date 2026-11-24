import { cn } from "@/lib/utils";

export function DermaToolsArt({ className }: { className?: string }) {
  const id = "dt";
  return (
    <svg
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMaxYMax meet"
      className={cn("h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F8F4EC" stopOpacity="0.65" />
          <stop offset="0.45" stopColor="#E7D8C0" stopOpacity="0.28" />
          <stop offset="1" stopColor="#8A7C69" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={`${id}-glass-edge`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F8F4EC" stopOpacity="0.85" />
          <stop offset="1" stopColor="#F8F4EC" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={`${id}-steel`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F1E7D6" />
          <stop offset="0.28" stopColor="#BEB1A1" />
          <stop offset="0.55" stopColor="#5F574E" />
          <stop offset="0.78" stopColor="#93897D" />
          <stop offset="1" stopColor="#3A2E26" />
        </linearGradient>
        <linearGradient id={`${id}-cap`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6E5B43" />
          <stop offset="0.4" stopColor="#DCC7A6" />
          <stop offset="0.62" stopColor="#C9A96A" />
          <stop offset="1" stopColor="#4A3B30" />
        </linearGradient>
        <linearGradient id={`${id}-liquid`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E7D8C0" stopOpacity="0.7" />
          <stop offset="1" stopColor="#C9A96A" stopOpacity="0.45" />
        </linearGradient>
        <radialGradient id={`${id}-lens`} cx="0.38" cy="0.32" r="0.75">
          <stop offset="0" stopColor="#FFF8ED" stopOpacity="0.9" />
          <stop offset="0.45" stopColor="#DCC7A6" stopOpacity="0.35" />
          <stop offset="1" stopColor="#241C16" stopOpacity="0.85" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#C9A96A" stopOpacity="0.34" />
          <stop offset="0.55" stopColor="#C9A96A" stopOpacity="0.08" />
          <stop offset="1" stopColor="#C9A96A" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <filter id={`${id}-blur`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <circle cx="470" cy="540" r="360" fill={`url(#${id}-glow)`} />

      <ellipse cx="440" cy="905" rx="290" ry="46" fill="#000000" opacity="0.4" filter={`url(#${id}-shadow)`} />
      <ellipse cx="280" cy="872" rx="170" ry="30" fill="#000000" opacity="0.35" filter={`url(#${id}-shadow)`} />
      <ellipse cx="620" cy="900" rx="150" ry="24" fill="#000000" opacity="0.3" filter={`url(#${id}-shadow)`} />

      <g transform="translate(238 468) rotate(-16)">
        <rect x="-32" y="70" width="64" height="330" rx="32" fill={`url(#${id}-steel)`} opacity="0.9" />
        <rect x="-32" y="70" width="16" height="330" rx="8" fill="#F8F4EC" opacity="0.16" />
        <circle cx="0" cy="0" r="128" fill={`url(#${id}-steel)`} />
        <circle cx="0" cy="0" r="104" fill="#241C16" opacity="0.6" />
        <circle cx="0" cy="0" r="92" fill={`url(#${id}-lens)`} />
        <circle cx="0" cy="0" r="92" fill="none" stroke="#F8F4EC" strokeOpacity="0.35" strokeWidth="1.4" />
        <circle cx="0" cy="0" r="64" fill="none" stroke="#F8F4EC" strokeOpacity="0.18" strokeWidth="1" />
        <path d="M-64 -58 A86 86 0 0 1 52 -68" fill="none" stroke="#FFF8ED" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" />
        <circle cx="-28" cy="-30" r="10" fill="#FFF8ED" opacity="0.55" filter={`url(#${id}-blur)`} />
      </g>

      <g transform="translate(250 786)">
        <ellipse cx="0" cy="34" rx="176" ry="52" fill="#1A140F" opacity="0.45" filter={`url(#${id}-blur)`} />
        <ellipse cx="0" cy="16" rx="170" ry="56" fill={`url(#${id}-glass)`} stroke="#F8F4EC" strokeOpacity="0.28" strokeWidth="1.2" />
        <ellipse cx="0" cy="-2" rx="146" ry="44" fill="#DCC7A6" opacity="0.28" />
        <ellipse cx="0" cy="-16" rx="132" ry="38" fill="#C9A96A" opacity="0.3" />
        <ellipse cx="0" cy="-30" rx="116" ry="32" fill="#F1E7D6" opacity="0.22" />
        <ellipse cx="0" cy="-34" rx="98" ry="26" fill="none" stroke="#F8F4EC" strokeOpacity="0.28" strokeWidth="1" />
        <path d="M-120 -10 A130 40 0 0 1 92 -24" fill="none" stroke="#FFF8ED" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g transform="translate(566 632)">
        <rect x="-82" y="0" width="164" height="300" rx="28" fill={`url(#${id}-glass)`} stroke="#F8F4EC" strokeOpacity="0.3" strokeWidth="1.4" />
        <rect x="-70" y="118" width="140" height="170" rx="18" fill={`url(#${id}-liquid)`} />
        <ellipse cx="0" cy="118" rx="70" ry="12" fill="#F8F4EC" opacity="0.35" />
        <rect x="-30" y="-62" width="60" height="72" rx="10" fill={`url(#${id}-glass)`} stroke="#F8F4EC" strokeOpacity="0.35" />
        <rect x="-42" y="-122" width="84" height="66" rx="14" fill={`url(#${id}-cap)`} />
        <rect x="-42" y="-122" width="84" height="14" rx="7" fill="#F8F4EC" opacity="0.28" />
        <line x1="0" y1="-58" x2="0" y2="140" stroke="#F8F4EC" strokeOpacity="0.55" strokeWidth="2" />
        <circle cx="0" cy="146" r="6" fill="#FFF8ED" opacity="0.85" />
        <rect x="-62" y="26" width="12" height="230" rx="6" fill="#F8F4EC" opacity="0.24" />
        <rect x="44" y="38" width="6" height="212" rx="3" fill="#241C16" opacity="0.18" />
      </g>

      <g transform="translate(620 858) rotate(-14)">
        <rect x="-104" y="-14" width="208" height="28" rx="14" fill={`url(#${id}-glass)`} stroke="#F8F4EC" strokeOpacity="0.32" strokeWidth="1" />
        <rect x="-104" y="-4" width="208" height="6" rx="3" fill="#F8F4EC" opacity="0.2" />
        <ellipse cx="36" cy="-2" rx="16" ry="7" fill="#DCC7A6" opacity="0.45" />
      </g>

      <g fill="#F1E7D6">
        <circle cx="432" cy="322" r="7" opacity="0.6" />
        <circle cx="658" cy="420" r="10" opacity="0.5" />
        <circle cx="356" cy="646" r="5" opacity="0.5" />
        <circle cx="700" cy="742" r="4" opacity="0.45" />
      </g>
    </svg>
  );
}

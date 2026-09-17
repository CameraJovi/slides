import type { SVGProps } from "react"

// Minimal stroke icon set (currentColor, 24x24) — no external icon dependency.
function base(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  }
}

export const Camera = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M3 8.5A2 2 0 0 1 5 6.5h1.5l1.2-1.8A1 1 0 0 1 8.5 4.2h7a1 1 0 0 1 .8.5L17.5 6.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <circle cx="12" cy="13" r="3.6" />
  </svg>
)

export const Notebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    <path d="M9 3v18M5 8h2M5 12h2M5 16h2" />
  </svg>
)

export const Board = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <path d="M12 16v3M8 22h8M6.5 8h7M6.5 11.5h5" />
  </svg>
)

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
    <path d="M10.5 5.5h3" />
  </svg>
)

export const Clock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)

export const Folder = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2.2H19.5A1.5 1.5 0 0 1 21 8.7v9.3a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18z" />
  </svg>
)

export const Sparkles = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
    <path d="M18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
  </svg>
)

export const Cards = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3" y="6" width="13" height="14" rx="2" />
    <path d="M8 3.5h9A2 2 0 0 1 19 5.5v11" />
  </svg>
)

export const FileText = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M14 3v4h4M8.5 12.5h7M8.5 16h7" />
  </svg>
)

export const Code = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M13.5 6.5l-3 11" />
  </svg>
)

export const Lock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <path d="M12 14.5v2.5" />
  </svg>
)

export const Pix = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 3.2 20.8 12 12 20.8 3.2 12z" />
    <path d="M7.5 7.5 12 12l4.5-4.5M7.5 16.5 12 12l4.5 4.5" />
  </svg>
)

export const QrCode = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="6" height="6" rx="1" />
    <rect x="14.5" y="3.5" width="6" height="6" rx="1" />
    <rect x="3.5" y="14.5" width="6" height="6" rx="1" />
    <path d="M14.5 14.5h2.5v2.5M20.5 14.5v6M14.5 20.5h2.5" />
  </svg>
)

export const Users = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.5a3 3 0 0 1 0 6M17 15.2a5.5 5.5 0 0 1 3.5 4.8" />
  </svg>
)

export const User = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
  </svg>
)

export const Function = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M14.5 4.5h-2a2.5 2.5 0 0 0-2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5h-1M7 11.5h7" />
    <path d="M15 13.5 20 19M20 13.5 15 19" />
  </svg>
)

export const Check = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M4.5 12.5 9.5 17.5 20 6.5" />
  </svg>
)

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" />
  </svg>
)

export const ChevronLeft = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M15 5.5 8.5 12 15 18.5" />
  </svg>
)

export const ChevronRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M9 5.5 15.5 12 9 18.5" />
  </svg>
)

export const Copy = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="8.5" y="8.5" width="11" height="11" rx="2" />
    <path d="M15.5 8.5V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2.5" />
  </svg>
)

export const Calendar = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M4 9.5h16M8 3v4M16 3v4" />
  </svg>
)

export const Layers = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 3.5 21 8l-9 4.5L3 8z" />
    <path d="M3 12.5 12 17l9-4.5M3 16.5 12 21l9-4.5" />
  </svg>
)

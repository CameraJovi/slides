import type { ReactNode } from "react"

// A phone frame that renders whatever screen content is passed in.
export function PhoneMockup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19] w-[260px] shrink-0 rounded-[2rem] border p-2.5 shadow-2xl ${className ?? ""}`}
      style={{ background: "var(--color-ink-soft)", borderColor: "var(--color-line)" }}
    >
      <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full" style={{ background: "var(--color-line)" }} />
      <div
        className="h-full w-full overflow-hidden rounded-[1.5rem]"
        style={{ background: "var(--color-surface)" }}
      >
        {children}
      </div>
    </div>
  )
}

// Bordered dark panel used for cards, mockups, diagrams.
export function Panel({
  children,
  className,
  accent = false,
  bare = false,
}: {
  children: ReactNode
  className?: string
  accent?: boolean
  bare?: boolean
}) {
  return (
    <div
      className={`rounded-2xl border ${bare ? "" : "p-6"} ${className ?? ""}`}
      style={{
        background: accent ? "rgba(255,193,7,0.06)" : "var(--color-ink-soft)",
        borderColor: accent ? "rgba(255,193,7,0.35)" : "var(--color-line)",
      }}
    >
      {children}
    </div>
  )
}

// Small circular icon holder in brand lime.
export function IconBadge({ children, size = "md" }: { children: ReactNode; size?: "sm" | "md" | "lg" }) {
  const dim = size === "lg" ? "h-20 w-20" : size === "sm" ? "h-12 w-12" : "h-14 w-14"
  return (
    <div
      className={`grid ${dim} shrink-0 place-items-center rounded-xl`}
      style={{ background: "rgba(255,193,7,0.1)", color: "var(--color-lime)" }}
    >
      {children}
    </div>
  )
}

// Body copy constrained to a readable, low-density measure.
export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`max-w-[46ch] text-2xl leading-relaxed sm:text-3xl ${className ?? ""}`}
      style={{ color: "#e7eae4" }}
    >
      {children}
    </p>
  )
}

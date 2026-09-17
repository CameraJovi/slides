import type { ReactNode } from "react"

type SlideLayoutProps = {
  index: number
  kicker?: string
  title?: string
  children: ReactNode
  glow?: "center" | "left" | "right" | "top"
  align?: "center" | "start"
}

const glowPos: Record<string, string> = {
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
  left: "left-[-10%] top-1/2 -translate-y-1/2",
  right: "right-[-10%] top-1/2 -translate-y-1/2",
  top: "left-1/2 top-[-20%] -translate-x-1/2",
}

// Shared frame: dark ground, decorative lime glow (background only, never on text),
// optional kicker + title. Content area is where each slide's visual + copy live.
export default function SlideLayout({
  index,
  kicker,
  title,
  children,
  glow = "center",
  align = "start",
}: SlideLayoutProps) {
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ background: "var(--color-ink)" }}>
      {/* decorative radial glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute h-[75vmin] w-[75vmin] rounded-full blur-[70px] ${glowPos[glow]}`}
        style={{
          background:
            "radial-gradient(circle, rgba(255,193,7,0.22) 0%, rgba(255,193,7,0.08) 45%, rgba(255,193,7,0) 70%)",
        }}
      />
      {/* faint grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1360px] flex-col px-8 py-[5vh] sm:px-20">
        {(kicker || title) && (
          <header className="slide-enter shrink-0">
            {kicker && (
              <div
                className="mb-4 font-mono text-sm uppercase tracking-[0.4em] sm:text-base"
                style={{ color: "var(--color-lime)" }}
              >
                {kicker}
              </div>
            )}
            {title && (
              <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
                {title}
              </h2>
            )}
          </header>
        )}
        <div
          className={`slide-enter flex min-h-0 flex-1 flex-col justify-center ${
            title ? "pt-6 sm:pt-8" : ""
          }`}
          style={{ animationDelay: "0.08s" }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

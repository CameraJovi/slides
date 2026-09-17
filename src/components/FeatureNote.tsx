import type { ReactNode } from "react"

// Editorial annotation outside the product visual, never a simulated app control.
export default function FeatureNote({ children }: { children: ReactNode }) {
  return (
    <p
      className="w-fit max-w-full rounded-xl border px-4 py-3 text-base leading-relaxed"
      style={{ borderColor: "rgba(255,193,7,0.3)", background: "rgba(255,193,7,0.05)", color: "#e7eae4" }}
    >
      {children}
    </p>
  )
}

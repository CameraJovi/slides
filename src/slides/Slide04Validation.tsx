import SlideLayout from "../components/SlideLayout"
import { User } from "../components/icons"

export default function Slide04Validation() {
  // Connection question with the audience — visually a crowd, not a repeat of persona.
  const row = Array.from({ length: 7 })
  return (
    <SlideLayout index={4} glow="top">
      <div className="flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            {row.map((_, i) => (
              <User
                key={i}
                className="h-12 w-12 sm:h-16 sm:w-16"
                style={{ color: i === 3 ? "var(--color-lime)" : "var(--color-line)" }}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {row.slice(0, 6).map((_, i) => (
              <User
                key={i}
                className="h-12 w-12 sm:h-16 sm:w-16"
                style={{ color: "var(--color-line)" }}
              />
            ))}
          </div>
        </div>

        <h2 className="max-w-[16ch] font-display text-6xl font-bold leading-tight tracking-tight sm:text-8xl">
          Isso é comum?
        </h2>
        <p className="text-2xl sm:text-3xl" style={{ color: "var(--color-mute)" }}>
          Quantos aqui já passaram exatamente por isso?
        </p>
      </div>
    </SlideLayout>
  )
}

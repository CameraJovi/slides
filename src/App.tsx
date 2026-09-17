import { useCallback, useEffect, useState } from "react"
import Slide01Cover from "./slides/Slide01Cover"
import Slide02Problem from "./slides/Slide02Problem"
import Slide03Persona from "./slides/Slide03Persona"
import Slide04Validation from "./slides/Slide04Validation"
import Slide06SwitchMode from "./slides/Slide06SwitchMode"
import Slide07MathResolver from "./slides/Slide07MathResolver"
import Slide08Summary from "./slides/Slide08Summary"
import Slide09Flashcards from "./slides/Slide09Flashcards"
import Slide10Code from "./slides/Slide10Code"
import Slide15CodeEnhancer from "./slides/Slide15CodeEnhancer"
import Slide11Hook from "./slides/Slide11Hook"
import Slide12SmartPix from "./slides/Slide12SmartPix"
import Slide13Notebook from "./slides/Slide13Notebook"
import Slide14Closing from "./slides/Slide14Closing"

const slides = [
  Slide01Cover,
  Slide02Problem,
  Slide03Persona,
  Slide04Validation,
  Slide06SwitchMode,
  Slide07MathResolver,
  Slide13Notebook,
  Slide08Summary,
  Slide09Flashcards,
  Slide10Code,
  Slide15CodeEnhancer,
  Slide11Hook,
  Slide12SmartPix,
  Slide14Closing,
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const total = slides.length

  const go = useCallback(
    (dir: number) => setCurrent((c) => Math.min(total - 1, Math.max(0, c + dir))),
    [total],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault()
        go(1)
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault()
        go(-1)
      } else if (e.key === "Home") {
        setCurrent(0)
      } else if (e.key === "End") {
        setCurrent(total - 1)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go, total])

  const Slide = slides[current]

  return (
    <div className="relative h-full w-full overflow-hidden" style={{ background: "var(--color-ink)" }}>
      {/* active slide (keyed to retrigger enter animation) */}
      <div key={current} className="h-full w-full">
        <Slide />
      </div>

      {/* single thin centered progress bar at the bottom */}
      <div
        className="pointer-events-none absolute bottom-7 left-1/2 z-30 h-1 w-56 -translate-x-1/2 overflow-hidden rounded-full sm:w-72"
        style={{ background: "var(--color-line)" }}
      >
        <div
          className="h-full transition-[width] duration-500 ease-out"
          style={{ width: `${((current + 1) / total) * 100}%`, background: "var(--color-lime)" }}
        />
      </div>
    </div>
  )
}

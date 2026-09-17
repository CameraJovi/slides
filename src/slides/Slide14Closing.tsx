import SlideLayout from "../components/SlideLayout"
import Wordmark from "../components/Wordmark"
import { QrCode } from "../components/icons"

export default function Slide14Closing() {
  return (
    <SlideLayout index={14} glow="center">
      <div className="flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">Obrigado</h2>
          <p className="text-2xl" style={{ color: "var(--color-mute)" }}>
            Acesse a ferramenta e experimente o DeepY.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div
            className="grid h-52 w-52 place-items-center rounded-2xl border p-4"
            style={{ borderColor: "var(--color-line)", background: "var(--color-ink-soft)" }}
          >
            <QrCode className="h-full w-full" style={{ color: "white" }} />
          </div>
          <span className="font-mono text-base" style={{ color: "var(--color-lime)" }}>
            deepy.app
          </span>
        </div>

        <Wordmark size="sm" />
      </div>
    </SlideLayout>
  )
}

import SlideLayout from "../components/SlideLayout"
import { Lead } from "../components/ui"
import { Cards } from "../components/icons"

type FlashCardProps = {
  face: string
  text: string
  hint: string
  accent?: boolean
}

// Front/back pair, aligned and identical in size. Depth comes from a clean stacked
// card behind (uniform offset) + shadow — no crooked rotation.
function FlashCard({ face, text, hint, accent = false }: FlashCardProps) {
  return (
    <div className="relative">
      {/* stacked card behind for a sense of depth (a deck of cards) */}
      <div
        className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border"
        style={{ borderColor: "var(--color-line)", background: "var(--color-surface)" }}
      />
      <div
        className="relative flex h-72 w-96 flex-col justify-between rounded-2xl border p-7 shadow-2xl"
        style={{
          borderColor: accent ? "rgba(255,193,7,0.45)" : "var(--color-line)",
          background: accent
            ? "color-mix(in srgb, var(--color-lime) 7%, var(--color-ink-soft) 93%)"
            : "var(--color-ink-soft)",
        }}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-lime)" }}>
            {face}
          </span>
          <Cards className="h-6 w-6" style={{ color: "var(--color-mute)" }} />
        </div>
        <span className="text-2xl font-semibold leading-snug" style={{ color: "#eef2e6" }}>
          {text}
        </span>
        <span className="text-base" style={{ color: "var(--color-mute)" }}>
          {hint}
        </span>
      </div>
    </div>
  )
}

export default function Slide09Flashcards() {
  return (
    <SlideLayout index={9} kicker="Funcionalidade" title="Flashcards" glow="right">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto]">
        <Lead>
          Gera flashcards com pergunta ou resumo na frente e resposta atrás, direto a partir da foto do
          conteúdo.
        </Lead>

        <div className="flex flex-col items-center gap-10">
          <div className="flex items-stretch gap-8 pr-3">
            <FlashCard
              face="frente · pergunta"
              text="Em uma frase, qual é o problema que o DeepY resolve?"
              hint="treino de pitch"
            />
            <FlashCard
              face="verso · resposta"
              text="O tempo perdido redigitando cadernos e lousas — o DeepY transforma a foto em material de estudo pronto."
              hint="resposta"
              accent
            />
          </div>

          <div className="flex items-center justify-center gap-2 text-base" style={{ color: "var(--color-mute)" }}>
            <Cards className="h-5 w-5" style={{ color: "var(--color-lime)" }} />
            <span>Toque no cartão para virar</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

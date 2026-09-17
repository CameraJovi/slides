import SlideLayout from "../components/SlideLayout"
import { Panel, Lead } from "../components/ui"
import { Function, FileText, Board, Cards } from "../components/icons"

const subjects = [
  { icon: <Function className="h-6 w-6" />, name: "Cálculo", detail: "12 capturas", material: "resoluções · resumos" },
  { icon: <Board className="h-6 w-6" />, name: "História", detail: "8 capturas", material: "resumos · flashcards" },
  { icon: <FileText className="h-6 w-6" />, name: "Biologia", detail: "15 capturas", material: "resumos · PDF" },
  { icon: <Cards className="h-6 w-6" />, name: "Física", detail: "6 capturas", material: "flashcards" },
]

export default function Slide13Notebook() {
  return (
    <SlideLayout index={13} kicker="Funcionalidade" title="Caderno Inteligente" glow="right">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Lead>
          Histórico organizado por matéria, conectando cada imagem capturada ao material gerado a partir
          dela.
        </Lead>

        <Panel bare>
          <div
            className="flex items-center justify-between rounded-t-2xl px-5 py-3"
            style={{ background: "var(--color-surface)" }}
          >
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-mute)" }}>
              minhas matérias
            </span>
            <span className="font-mono text-xs" style={{ color: "var(--color-lime)" }}>41 itens</span>
          </div>
          <div className="flex flex-col">
            {subjects.map((s, i) => (
              <div
                key={s.name}
                className="flex items-center gap-4 px-6 py-5"
                style={{ borderTop: i === 0 ? "none" : "1px solid var(--color-line)" }}
              >
                <span
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-xl"
                  style={{ background: "rgba(255,193,7,0.1)", color: "var(--color-lime)" }}
                >
                  {s.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-lg font-medium text-white">{s.name}</div>
                  <div className="font-mono text-sm" style={{ color: "var(--color-mute)" }}>
                    {s.material}
                  </div>
                </div>
                <span className="font-mono text-sm" style={{ color: "var(--color-mute)" }}>
                  {s.detail}
                </span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </SlideLayout>
  )
}

import SlideLayout from "../components/SlideLayout"
import { Panel, Lead } from "../components/ui"
import { FileText } from "../components/icons"

export default function Slide08Summary() {
  return (
    <SlideLayout index={8} kicker="Funcionalidade" title="Smart Scan" glow="left">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <Lead>
          Foto de slide vira resumo estruturado — e um PDF pronto para revisar depois.
        </Lead>

        {/* app-screen mockup with a real (fictional) text preview */}
        <Panel bare className="w-[440px]">
          <div
            className="flex items-center justify-between rounded-t-2xl px-5 py-3"
            style={{ background: "var(--color-surface)" }}
          >
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-mute)" }}>
              resumo gerado
            </span>
            <span
              className="flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] font-bold"
              style={{ background: "var(--color-lime)", color: "var(--color-ink)" }}
            >
              <FileText className="h-3.5 w-3.5" /> Exportar PDF
            </span>
          </div>

          <div className="flex flex-col gap-4 px-5 py-5">
            <h4 className="text-lg font-semibold text-white">Design System</h4>

            <div>
              <div className="mb-1 text-sm font-medium" style={{ color: "var(--color-lime)" }}>
                Conceito
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#c9d1cb" }}>
                Conjunto de padrões, componentes e diretrizes para criar interfaces consistentes.
              </p>
            </div>

            <div>
              <div className="mb-1 text-sm font-medium" style={{ color: "var(--color-lime)" }}>
                Pontos-chave
              </div>
              <ul className="flex flex-col gap-1.5 text-sm" style={{ color: "#c9d1cb" }}>
                <li className="flex gap-2">
                  <span style={{ color: "var(--color-lime)" }}>•</span> Padrões de cores, tipografia e espaçamento.
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "var(--color-lime)" }}>•</span> Componentes reutilizáveis para as interfaces.
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "var(--color-lime)" }}>•</span> Documentação com regras e exemplos de uso.
                </li>
              </ul>
            </div>
          </div>
        </Panel>
      </div>
    </SlideLayout>
  )
}

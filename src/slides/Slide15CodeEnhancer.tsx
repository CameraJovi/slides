import SlideLayout from "../components/SlideLayout"
import FeatureNote from "../components/FeatureNote"
import { Panel, Lead } from "../components/ui"
import { Code, Sparkles } from "../components/icons"

// Continues the Reviewer's example with the correction supported by Jovi Code.
export default function Slide15CodeEnhancer() {
  return (
    <SlideLayout index={15} kicker="Funcionalidade" title="Code Enhancer" glow="right">
      <div className="flex flex-col gap-7">
        <div className="flex flex-wrap items-center gap-4">
          <Lead className="max-w-[46ch]">Da análise ao código corrigido.</Lead>
          <span
            className="rounded-full border px-4 py-1.5 font-mono text-sm"
            style={{ borderColor: "rgba(255,193,7,0.4)", color: "var(--color-lime)" }}
          >
            Jovi Code · Antes → Depois
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <Panel className="font-mono text-sm">
            <div className="mb-3 flex items-center gap-2" style={{ color: "var(--color-mute)" }}>
              <Code className="h-4 w-4" /> Antes
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed" style={{ color: "#c9d1cb" }}>
{`a = [2, 4, 6]
total = 0
for value in a:
    total =+ value
print(total)`}
            </pre>
          </Panel>

          <div className="hidden flex-col justify-center gap-2 lg:flex">
            <Sparkles className="mx-auto h-7 w-7" style={{ color: "var(--color-lime)" }} />
            <span className="text-center font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--color-mute)" }}>
              análise
            </span>
          </div>

          <Panel accent className="font-mono text-sm">
            <div className="mb-3 flex items-center gap-2" style={{ color: "var(--color-lime)" }}>
              <Sparkles className="h-4 w-4" /> Depois
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed" style={{ color: "#e7eae4" }}>
{`a = [2, 4, 6]
total = 0
for value in a:
    `}<span style={{ color: "var(--color-lime)" }}>total += value</span>{`
print(total)`}
            </pre>
            <div
              className="mt-4 rounded-lg border-l-2 px-3 py-2 text-xs leading-relaxed"
              style={{ borderColor: "var(--color-lime)", background: "rgba(255,193,7,0.08)", color: "#d9dcc9" }}
            >
              Uma mudança no operador: <code>+=</code> acumula os valores e mantém a intenção do código.
            </div>
          </Panel>
        </div>
        <FeatureNote>A correção é uma sugestão. Revise antes de utilizar.</FeatureNote>
      </div>
    </SlideLayout>
  )
}

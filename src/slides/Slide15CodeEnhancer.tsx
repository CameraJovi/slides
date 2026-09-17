import SlideLayout from "../components/SlideLayout"
import { Panel, Lead } from "../components/ui"
import { Code, Sparkles } from "../components/icons"

// Distinct from the Reviewer: nothing is broken here — this is optimisation, so no
// red/error styling. Neutral "before" and an amber "melhorado".
export default function Slide15CodeEnhancer() {
  return (
    <SlideLayout index={15} kicker="Funcionalidade" title="Code Enhancer" glow="right">
      <div className="flex flex-col gap-7">
        <div className="flex flex-wrap items-center gap-4">
          <Lead className="max-w-[46ch]">Um código que já funciona — só que melhor.</Lead>
          <span
            className="rounded-full border px-4 py-1.5 font-mono text-sm"
            style={{ borderColor: "rgba(255,193,7,0.4)", color: "var(--color-lime)" }}
          >
            Funciona → otimizado
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <Panel className="font-mono text-sm">
            <div className="mb-3 flex items-center gap-2" style={{ color: "var(--color-mute)" }}>
              <Code className="h-4 w-4" /> original
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed" style={{ color: "#c9d1cb" }}>
{`squares = []
for n in nums:
  squares.append(n * n)`}
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
              <Sparkles className="h-4 w-4" /> aprimorado
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed" style={{ color: "#e7eae4" }}>
{`squares = `}<span style={{ color: "var(--color-lime)" }}>[n * n for n in nums]</span>
            </pre>
            <div
              className="mt-4 rounded-lg border-l-2 px-3 py-2 text-xs leading-relaxed"
              style={{ borderColor: "var(--color-lime)", background: "rgba(255,193,7,0.08)", color: "#d9dcc9" }}
            >
              Mais conciso e idiomático — uma list comprehension no lugar do loop com `append`.
            </div>
          </Panel>
        </div>
      </div>
    </SlideLayout>
  )
}

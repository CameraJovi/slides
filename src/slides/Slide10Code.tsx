import SlideLayout from "../components/SlideLayout"
import { Panel, Lead } from "../components/ui"
import { Code, Check } from "../components/icons"

export default function Slide10Code() {
  return (
    <SlideLayout index={10} kicker="Funcionalidade" title="Code Reviewer" glow="left">
      <div className="flex flex-col gap-7">
        <div className="flex flex-wrap items-center gap-4">
          <Lead className="max-w-[46ch]">Aponta o erro, explica o porquê e sugere a correção.</Lead>
          <span
            className="rounded-full border px-4 py-1.5 font-mono text-sm"
            style={{ borderColor: "rgba(255,193,7,0.4)", color: "var(--color-lime)" }}
          >
            Entender o erro &gt; apenas corrigir
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Panel className="font-mono text-sm">
            <div className="mb-3 flex items-center gap-2" style={{ color: "#f2726b" }}>
              <Code className="h-4 w-4" /> com erro
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed" style={{ color: "#c9d1cb" }}>
{`a = [2, 4, 6]
total = 0
for value in a:
    `}<span style={{ background: "rgba(242,114,107,0.18)", color: "#f2726b" }}>total =+ value</span>{`
print(total)`}
            </pre>
            <div
              className="mt-4 rounded-lg border-l-2 px-3 py-2 text-xs leading-relaxed"
              style={{ borderColor: "#f2726b", background: "rgba(242,114,107,0.08)", color: "#e7b7b3" }}
            >
              <span className="font-semibold" style={{ color: "#f2726b" }}>Problema:</span> <code>=+</code> substitui
              o total pelo valor atual. Ao final, imprime 6 em vez da soma 12.
            </div>
          </Panel>

          <Panel accent className="font-mono text-sm">
            <div className="mb-3 flex items-center gap-2" style={{ color: "var(--color-lime)" }}>
              <Check className="h-4 w-4" /> corrigido
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
              <span className="font-semibold" style={{ color: "var(--color-lime)" }}>Correção:</span> soma
              acumulada com <code>+=</code>, preservando o valor das iterações anteriores.
            </div>
          </Panel>
        </div>
      </div>
    </SlideLayout>
  )
}

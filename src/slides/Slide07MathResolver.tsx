import SlideLayout from "../components/SlideLayout"
import { Panel, Lead } from "../components/ui"
import { Board, ArrowRight, Check, Function } from "../components/icons"

const solution = ["2x + 6 = 14", "2x = 14 − 6", "2x = 8", "x = 4"]

export default function Slide07MathResolver() {
  return (
    <SlideLayout index={7} kicker="Funcionalidade" title="Math Resolver" glow="right">
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap items-center gap-4">
          <Lead className="max-w-[46ch]">Foto da lousa vira o raciocínio, não só a resposta.</Lead>
          <span
            className="rounded-full border px-4 py-1.5 font-mono text-sm"
            style={{ borderColor: "rgba(255,193,7,0.4)", color: "var(--color-lime)" }}
          >
            Resultado ≠ aprendizado
          </span>
        </div>

        <div className="grid items-center gap-5 sm:grid-cols-[1fr_auto_1.2fr]">
          <Panel className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-mute)" }}>
              antes · foto da lousa
            </span>
            <div
              className="relative grid place-items-center gap-3 overflow-hidden rounded-xl py-10"
              style={{ background: "#0c1417" }}
            >
              <Board className="h-9 w-9" style={{ color: "var(--color-mute)" }} />
              <span
                className="text-3xl"
                style={{ color: "#dfe7df", fontFamily: "'JetBrains Mono', monospace", transform: "rotate(-2deg)" }}
              >
                2x + 6 = 14
              </span>
            </div>
          </Panel>

          <ArrowRight className="mx-auto hidden h-9 w-9 sm:block" style={{ color: "var(--color-lime)" }} />

          {/* app-screen styled result, matching the Code Reviewer quality bar */}
          <Panel accent bare className="flex flex-col gap-4">
            <div
              className="flex items-center gap-2 rounded-t-2xl px-5 py-3"
              style={{ background: "rgba(255,193,7,0.1)", color: "var(--color-lime)" }}
            >
              <Function className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-widest">DeepY · resolução</span>
            </div>
            <div className="flex flex-col gap-3 px-5 pb-5">
              {solution.map((line, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-xs"
                    style={{ background: "rgba(255,193,7,0.15)", color: "var(--color-lime)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-mono text-xl text-white sm:text-2xl">{line}</span>
                  {i === solution.length - 1 && (
                    <Check className="ml-auto h-6 w-6" style={{ color: "var(--color-lime)" }} />
                  )}
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </SlideLayout>
  )
}

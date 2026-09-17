import SlideLayout from "../components/SlideLayout"
import { Panel, Lead } from "../components/ui"
import { Clock, Camera, Sparkles, Function, Check, ArrowRight } from "../components/icons"

// A concrete run of the flow: context (Tue 07:20 Calc) → capture (arrives 07:40) →
// switch recognises it → suggests the right tool → result.
const flow = [
  { icon: <Clock className="h-6 w-6" />, label: "Contexto", value: "Terça · 07:20 · Cálculo" },
  { icon: <Camera className="h-6 w-6" />, label: "Captura", value: "Chega 07:40, foto da lousa" },
  { icon: <Sparkles className="h-6 w-6" />, label: "Switch", value: "Reconhece o momento" },
  { icon: <Function className="h-6 w-6" />, label: "Ferramenta", value: "Sugere o Math Resolver", accent: true },
  { icon: <Check className="h-6 w-6" />, label: "Resultado", value: "Passo a passo" },
]

export default function Slide06SwitchMode() {
  return (
    <SlideLayout index={6} kicker="A solução" title="Switch Mode" glow="left">
      <div className="flex flex-col gap-9">
        <Lead className="max-w-[54ch]">O contexto certo ativa a ferramenta certa.</Lead>

        <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          {flow.map((s, i) => (
            <div key={s.label} className="flex flex-1 items-center gap-3">
              <Panel accent={s.accent} className="flex w-full items-center gap-3 py-4">
                <span style={{ color: s.accent ? "var(--color-lime)" : "var(--color-mute)" }}>{s.icon}</span>
                <div className="min-w-0">
                  <div
                    className="font-mono text-[11px] uppercase tracking-widest"
                    style={{ color: s.accent ? "var(--color-lime)" : "var(--color-mute)" }}
                  >
                    {s.label}
                  </div>
                  <div className="text-sm font-medium text-white">{s.value}</div>
                </div>
              </Panel>
              {i < flow.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 shrink-0 lg:block" style={{ color: "var(--color-lime)" }} />
              )}
            </div>
          ))}
        </div>

        <div className="font-mono text-sm" style={{ color: "var(--color-mute)" }}>
          Você continua no controle — automatize ou escolha outra ferramenta.
        </div>
      </div>
    </SlideLayout>
  )
}

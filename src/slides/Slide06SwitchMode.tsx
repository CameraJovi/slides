import SlideLayout from "../components/SlideLayout"
import FeatureNote from "../components/FeatureNote"
import { Panel, Lead } from "../components/ui"
import { Clock, Camera, Sparkles, Function, Check, ArrowRight } from "../components/icons"

// The schedule association exists; automatic tool selection is a proposed flow.
const flow = [
  { icon: <Clock className="h-6 w-6" />, label: "Contexto", value: "Cálculo · terça · 07:20–08:40" },
  { icon: <Camera className="h-6 w-6" />, label: "Captura", value: "Chega 07:40, foto da lousa" },
  { icon: <Sparkles className="h-6 w-6" />, label: "Switch", value: "Identifica a disciplina" },
  { icon: <Function className="h-6 w-6" />, label: "Ferramenta", value: "Sugere o Math Resolver", accent: true, proposed: true },
  { icon: <Check className="h-6 w-6" />, label: "Resultado", value: "Passo a passo" },
]

export default function Slide06SwitchMode() {
  return (
    <SlideLayout index={6} kicker="A solução" title="Switch Mode" glow="left">
      <div className="flex flex-col gap-9">
        <Lead className="max-w-[54ch]">Do contexto da aula à ferramenta de estudo.</Lead>

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
                  {s.proposed && (
                    <div className="mt-2 text-xs font-medium" style={{ color: "var(--color-lime-soft)" }}>
                      Conceito proposto
                    </div>
                  )}
                </div>
              </Panel>
              {i < flow.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 shrink-0 lg:block" style={{ color: "var(--color-lime)" }} />
              )}
            </div>
          ))}
        </div>

        <FeatureNote>
          Hoje, o horário sugere a disciplina e você escolhe a ferramenta.
        </FeatureNote>
      </div>
    </SlideLayout>
  )
}

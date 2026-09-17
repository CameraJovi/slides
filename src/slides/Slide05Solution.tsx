import SlideLayout from "../components/SlideLayout"
import { PhoneMockup, Lead } from "../components/ui"
import { Camera, FileText, Cards, Function } from "../components/icons"

const outputs = [
  { icon: <FileText className="h-6 w-6" />, label: "Resumo" },
  { icon: <Cards className="h-6 w-6" />, label: "Flashcards" },
  { icon: <Function className="h-6 w-6" />, label: "Matemática" },
]

export default function Slide05Solution() {
  return (
    <SlideLayout index={5} kicker="A solução" title="DeepY" glow="right">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-8">
          <Lead>
            Capture uma imagem pela câmera e a IA transforma o conteúdo em resumos, flashcards ou
            resolução de exercícios matemáticos.
          </Lead>
          <div className="flex gap-4">
            {outputs.map((o) => (
              <div
                key={o.label}
                className="flex items-center gap-2.5 rounded-full border px-4 py-2"
                style={{ borderColor: "var(--color-line)", color: "var(--color-lime)" }}
              >
                {o.icon}
                <span className="text-sm text-white">{o.label}</span>
              </div>
            ))}
          </div>
        </div>

        <PhoneMockup className="mx-auto">
          <div className="relative flex h-full flex-col">
            <div className="flex-1" style={{ background: "linear-gradient(160deg,#1c2126,#0d0f11)" }}>
              <div className="grid h-full place-items-center">
                <div
                  className="grid h-24 w-24 place-items-center rounded-2xl border-2"
                  style={{ borderColor: "rgba(212,230,0,0.6)" }}
                >
                  <Camera className="h-10 w-10" style={{ color: "var(--color-lime)" }} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center py-4">
              <div
                className="h-12 w-12 rounded-full border-4"
                style={{ borderColor: "var(--color-lime)", background: "rgba(212,230,0,0.15)" }}
              />
            </div>
          </div>
        </PhoneMockup>
      </div>
    </SlideLayout>
  )
}

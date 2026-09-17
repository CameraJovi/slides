import SlideLayout from "../components/SlideLayout"
import { Panel, Lead } from "../components/ui"
import { Board, Code, FileText, User, Camera, Pix } from "../components/icons"

// The camera records, but doesn't understand context: academic captures land in
// the same undifferentiated gallery as personal photos, prints and receipts.
const gallery = [
  { icon: <Board className="h-8 w-8" />, tag: "lousa", academic: true },
  { icon: <User className="h-8 w-8" />, tag: "selfie", academic: false },
  { icon: <Code className="h-8 w-8" />, tag: "código", academic: true },
  { icon: <Camera className="h-8 w-8" />, tag: "print", academic: false },
  { icon: <FileText className="h-8 w-8" />, tag: "slide", academic: true },
  { icon: <Pix className="h-8 w-8" />, tag: "recibo", academic: false },
]

export default function Slide02Problem() {
  return (
    <SlideLayout index={2} kicker="O problema" title="A câmera registra, mas não entende o contexto." glow="right">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <Lead>Registrar não é o mesmo que conseguir estudar depois.</Lead>

        <Panel bare className="w-full max-w-[540px]">
          <div
            className="flex items-center justify-between rounded-t-2xl px-6 py-4"
            style={{ background: "var(--color-surface)" }}
          >
            <span className="font-mono text-sm uppercase tracking-widest" style={{ color: "var(--color-mute)" }}>
              galeria
            </span>
            <span className="font-mono text-sm" style={{ color: "var(--color-mute)" }}>
              tudo misturado
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4 p-5">
            {gallery.map((g) => (
              <div
                key={g.tag}
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-xl border"
                style={{ borderColor: "var(--color-line)", background: "#0c0e10", color: "var(--color-mute)" }}
              >
                {g.icon}
                <span className="font-mono text-xs lowercase" style={{ color: "var(--color-mute)" }}>
                  {g.tag}
                </span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </SlideLayout>
  )
}

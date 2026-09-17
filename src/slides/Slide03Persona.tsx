import SlideLayout from "../components/SlideLayout"
import { IconBadge } from "../components/ui"
import { User, Clock, Folder, Calendar } from "../components/icons"

const pains = [
  { icon: <Clock className="h-8 w-8" />, label: "Rotina corrida" },
  { icon: <Folder className="h-8 w-8" />, label: "Material desorganizado" },
  { icon: <Calendar className="h-8 w-8" />, label: "Aulas que se acumulam" },
]

export default function Slide03Persona() {
  return (
    <SlideLayout index={3} kicker="Persona" title="Quem sente essa dor" glow="left">
      <div className="flex flex-col items-center gap-10">
        {/* the image is the message; text only labels it */}
        <div className="relative">
          <div
            className="grid h-52 w-52 place-items-center rounded-full border"
            style={{ borderColor: "rgba(255,193,7,0.4)", background: "var(--color-ink-soft)" }}
          >
            <User className="h-28 w-28" style={{ color: "var(--color-lime)" }} />
          </div>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {pains.map((p) => (
            <div key={p.label} className="flex w-52 flex-col items-center gap-4 text-center">
              <IconBadge size="lg">{p.icon}</IconBadge>
              <span className="text-2xl" style={{ color: "#e7eae4" }}>
                {p.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xl" style={{ color: "var(--color-mute)" }}>
          Aulas presenciais e online, e pouco tempo para organizar o material.
        </p>
      </div>
    </SlideLayout>
  )
}

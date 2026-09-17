import SlideLayout from "../components/SlideLayout"
import { Pix, Phone } from "../components/icons"

export default function Slide11Hook() {
  return (
    <SlideLayout index={11} glow="center">
      <div className="flex flex-col items-center gap-12 text-center">
        <div className="flex items-center gap-8" style={{ color: "var(--color-lime)" }}>
          <Pix className="h-20 w-20" />
          <Phone className="h-20 w-20" />
        </div>
        <h2 className="max-w-[20ch] font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
          Você já pagou um Pix digitando a chave em vez de ler o QR Code?
        </h2>
      </div>
    </SlideLayout>
  )
}

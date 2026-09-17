import SlideLayout from "../components/SlideLayout"
import Wordmark from "../components/Wordmark"
import { Camera } from "../components/icons"

export default function Slide01Cover() {
  return (
    <SlideLayout index={1} glow="center">
      <div className="flex flex-col items-center gap-10 text-center">
        <Wordmark size="lg" />
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-display text-6xl font-bold tracking-tight sm:text-8xl">DeepY</h1>
          <div className="flex items-center gap-3" style={{ color: "var(--color-mute)" }}>
            <Camera className="h-8 w-8" style={{ color: "var(--color-lime)" }} />
            <p className="text-2xl sm:text-3xl">Câmera inteligente para estudantes</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

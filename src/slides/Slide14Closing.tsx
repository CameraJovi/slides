import SlideLayout from "../components/SlideLayout"
import Wordmark from "../components/Wordmark"
import qrApi from "../imports/qr_api.png"
import qrLanding from "../imports/qr_landing.png"

const destinations = [
  { image: qrApi, label: "API · Produto funcional", title: "Experimente o produto" },
  { image: qrLanding, label: "Landing page", title: "Conheça o DeepY" },
]

export default function Slide14Closing() {
  return (
    <SlideLayout index={14} glow="center">
      <div className="flex flex-col items-center gap-[3vh] text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">Obrigado</h2>
          <p className="text-lg sm:text-2xl" style={{ color: "var(--color-mute)" }}>
            Da apresentação para a prática.
          </p>
        </div>

        <div className="grid w-full max-w-[760px] grid-cols-2 gap-6 sm:gap-16">
          {destinations.map(({ image, label, title }) => (
            <figure key={label} className="flex min-w-0 flex-col items-center gap-4">
              <img
                src={image}
                alt={`QR Code — ${label}: ${title}`}
                width={1600}
                height={1600}
                className="aspect-square w-full max-w-[min(34vh,320px)] rounded-2xl object-contain"
              />
              <figcaption className="flex flex-col items-center gap-2">
                <span className="font-mono text-xs sm:text-sm" style={{ color: "var(--color-lime)" }}>
                  {label}
                </span>
                <span className="font-display text-base font-semibold sm:text-xl">{title}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <Wordmark size="sm" />
        </div>
      </div>
    </SlideLayout>
  )
}

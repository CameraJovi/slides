import SlideLayout from "../components/SlideLayout"
import { PhoneMockup, Lead } from "../components/ui"
import { Copy, Lock, Pix } from "../components/icons"

export default function Slide12SmartPix() {
  return (
    <SlideLayout index={12} kicker="Funcionalidade" title="SmartPix" glow="left">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-6">
          <Lead className="max-w-[44ch]">
            A câmera detecta CPF, e-mail ou celular usados como chave Pix e oferece copiar ou abrir direto
            no banco.
          </Lead>
          <div
            className="flex w-fit items-center gap-3 rounded-full border px-5 py-3"
            style={{ borderColor: "rgba(255,193,7,0.4)", color: "var(--color-lime)" }}
          >
            <Lock className="h-5 w-5" />
            <span className="text-base text-white">Sem transação e sem acesso a dados bancários</span>
          </div>
        </div>

        <PhoneMockup className="mx-auto">
          <div className="flex h-full flex-col" style={{ background: "linear-gradient(160deg,#1c2126,#0d0f11)" }}>
            {/* status/header row */}
            <div className="flex items-center justify-between px-4 pb-2 pt-4">
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-lime)" }}>
                <Pix className="h-3.5 w-3.5" /> SmartPix
              </span>
              <span className="font-mono text-[10px]" style={{ color: "var(--color-mute)" }}>ao vivo</span>
            </div>

            {/* camera viewport detecting a key */}
            <div className="grid flex-1 place-items-center px-4">
              <div className="relative w-full">
                <div className="absolute -left-1 -top-1 h-4 w-4 border-l-2 border-t-2" style={{ borderColor: "var(--color-lime)" }} />
                <div className="absolute -right-1 -top-1 h-4 w-4 border-r-2 border-t-2" style={{ borderColor: "var(--color-lime)" }} />
                <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2" style={{ borderColor: "var(--color-lime)" }} />
                <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2" style={{ borderColor: "var(--color-lime)" }} />
                <div className="rounded-lg p-4 text-center" style={{ background: "rgba(0,0,0,0.35)" }}>
                  <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-lime)" }}>
                    chave detectada
                  </div>
                  <div className="mt-1.5 font-mono text-sm text-white">joao.silva@email.com</div>
                  <div className="mt-0.5 font-mono text-[10px]" style={{ color: "var(--color-mute)" }}>tipo: e-mail</div>
                </div>
              </div>
            </div>

            {/* action buttons */}
            <div className="flex flex-col gap-2 p-4">
              <div
                className="flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold"
                style={{ background: "var(--color-lime)", color: "var(--color-ink)" }}
              >
                <Copy className="h-4 w-4" /> Copiar chave
              </div>
              <div
                className="flex items-center justify-center rounded-lg border py-2.5 text-sm"
                style={{ borderColor: "var(--color-line)", color: "#dfe7df" }}
              >
                Abrir no banco
              </div>
            </div>
          </div>
        </PhoneMockup>
      </div>
    </SlideLayout>
  )
}

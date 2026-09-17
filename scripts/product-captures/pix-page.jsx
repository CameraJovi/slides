"use client";

import { useState } from "react";
import ModalSmartPix from "../../components/ModalSmartPix";
import { phoneFrame, phoneScreen } from "../../lib/tailwind";
import { pix } from "../fixtures";

// Capture harness: original modal, authored props, no camera/OCR claim.
export default function PixCapture() {
  const [result, setResult] = useState(pix);
  const [message, setMessage] = useState("");
  return (
    <main className={phoneFrame}>
      <section className={`${phoneScreen} relative`}>
        <ModalSmartPix
          resultado={result}
          mensagem={message}
          aoAlterarValor={(valor) => { setResult({ ...result, valor }); setMessage(""); }}
          aoCancelar={() => window.location.assign("/demo")}
          aoCopiar={() => setMessage("Prévia de captura: nenhuma chave copiada.")}
          aoAbrirBanco={() => setMessage("O usuário seria encaminhado ao aplicativo bancário para continuar com segurança.")}
        />
      </section>
    </main>
  );
}

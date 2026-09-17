"use client";

import { useState } from "react";
import { lesson, math, summary, flashcards, code, specimen } from "./fixtures";

const options = [
  ["Grade de aulas", "/horarios", "math"],
  ["Disciplina sugerida", "/salvar", "math"],
  ["Math Resolver", "/equacao", "math"],
  ["Caderno Inteligente", "/caderno", "math"],
  ["Smart Scan", "/resumo", "resumo"],
  ["Flashcards", "/flashcard", "flashcards"],
  ["Análise e Jovi Code", "/codigo", "code"],
];

async function setup(kind) {
  const analyses = { math, resumo: summary, flashcards, code };
  const id = `demo-${kind}`;
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(specimen(kind))}`;
  const capture = {
    id, dataUrl, tipo: "image/svg+xml", criadaEm: "2026-09-15T07:40:00-03:00",
    modo: "Estudante", aula: kind === "math" ? lesson : null,
  };
  const analysis = { capturaId: id, analise: analyses[kind] };
  sessionStorage.setItem("jovi:captura-atual", JSON.stringify(capture));
  sessionStorage.setItem(`jovi:analise:${kind}`, JSON.stringify(analysis));
  sessionStorage.setItem("jovi:ultima-analise", JSON.stringify(analysis));
  localStorage.setItem("jovi:grade-aulas:v1", JSON.stringify([lesson]));
  localStorage.setItem("jovi:materia-selecionada", "Cálculo");
  localStorage.setItem("jovi:materias", JSON.stringify([
    { nome: "Cálculo", quantidade: 1 },
    { nome: "Design System", quantidade: 0 },
    { nome: "Programação", quantidade: 0 },
  ]));
  localStorage.setItem("jovi:historico", JSON.stringify([{
    id: "demo-calculo", materia: "Cálculo", tipo: "math", assunto: math.subject,
    salvoEm: "2026-09-15T07:42:00-03:00", capturadaEm: "2026-09-15T07:40:00-03:00",
    analise: math, imagemId: "demo-math-image", aula: lesson,
  }]));
  await new Promise((resolve, reject) => {
    const request = indexedDB.open("jovi-caderno-inteligente", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("imagens", { keyPath: "id" });
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("imagens", "readwrite");
      transaction.objectStore("imagens").put({
        id: "demo-math-image", blob: new Blob([specimen("math")], { type: "image/svg+xml" }),
        largura: 960, altura: 540, tipo: "image/svg+xml", salvoEm: capture.criadaEm,
      });
      transaction.oncomplete = () => { db.close(); resolve(); };
      transaction.onerror = () => { db.close(); reject(transaction.error); };
    };
  });
}

export default function CaptureSetup() {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function open(path, kind) {
    setBusy(true);
    setError("");
    try {
      await setup(kind);
      window.location.assign(path);
    } catch (cause) {
      setError(cause.message);
      setBusy(false);
    }
  }
  return (
    <main className="mx-auto flex max-w-lg flex-col gap-4 p-6 text-white">
      <h1 className="text-2xl font-bold">Preparação de capturas</h1>
      <p>Ambiente isolado. Dados ilustrativos; nenhuma resposta de IA ao vivo. Os botões preparam os dados e abrem as páginas originais, sem modificar seus componentes.</p>
      <p>Use somente esta cópia local para não substituir dados pessoais.</p>
      {error && <p role="alert">{error}</p>}
      {options.map(([label, path, kind]) => (
        <button key={path} disabled={busy} className="rounded-xl bg-amber-400 p-3 font-semibold text-black disabled:opacity-50" onClick={() => open(path, kind)}>{label}</button>
      ))}
      <a className="rounded-xl border border-amber-400 p-3 text-center" href="/demo/pix">Modal SmartPix (componente original)</a>
    </main>
  );
}

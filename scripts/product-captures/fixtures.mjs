// Authored demonstration data, not responses obtained from a live AI request.
export const lesson = {
  id: "demo-calculo-terca", materia: "Cálculo", dia: 2, inicio: "07:20", fim: "08:40",
}

export const math = {
  analysis_type: "math",
  subject: "Equação do primeiro grau",
  expression: "2x + 6 = 14",
  steps: [
    { title: "Isolar o termo com x", step: "Subtraia 6 dos dois lados: 2x = 14 − 6." },
    { title: "Simplificar", step: "Calcule a subtração: 2x = 8." },
    { title: "Encontrar x", step: "Divida os dois lados por 2: x = 4." },
  ],
  result: ["x = 4"],
  content: "A mesma operação nos dois lados mantém a igualdade.",
}

export const summary = {
  analysis_type: "resumo", subject: "Design System",
  content: "Conjunto de padrões, componentes e diretrizes para criar interfaces consistentes.\n\n• Padrões de cores, tipografia e espaçamento.\n• Componentes reutilizáveis para as interfaces.\n• Documentação com regras e exemplos de uso.",
}

export const flashcards = {
  analysis_type: "flashcards", subject: "Treino de pitch",
  cards: [{
    question: "Em uma frase, qual é o problema que o DeepY resolve?",
    answer: "O tempo perdido redigitando cadernos e lousas — o DeepY transforma a foto em material de estudo pronto.",
  }],
  content: "Pergunta e resposta para revisar a apresentação.",
}

export const code = {
  analysis_type: "code", status: "ok", language: "Python",
  subject: "Por que a soma não acumula?",
  content: "O operador =+ substitui o total a cada volta do loop. Use += para acumular os valores.",
  original_code: "a = [2, 4, 6]\ntotal = 0\nfor value in a:\n    total =+ value\nprint(total)",
  corrected_code: "a = [2, 4, 6]\ntotal = 0\nfor value in a:\n    total += value\nprint(total)",
  explanation: [
    "Cria a lista [2, 4, 6] e inicia total em zero.",
    "Percorre a lista, mas =+ substitui o total pelo valor atual.",
    "Ao final, imprime 6 em vez da soma 12.",
  ],
  issues: [{
    line: 4, severity: "erro", title: "O total é substituído",
    description: "=+ atribui o valor positivo atual. Troque por += para somar cada valor ao total, preservando o que já foi acumulado.",
  }],
}

export const pix = { tipo: "E-mail", valor: "estudos@example.com" }

export function specimen(kind) {
  const contents = {
    math: ["Exercício de Cálculo", "2x + 6 = 14", "Encontre o valor de x."],
    resumo: ["Design System", "Padrões · Componentes · Diretrizes", "Cores, tipografia e espaçamento."],
    flashcards: ["Treino de pitch", "Qual problema o DeepY resolve?", "Da foto ao material de estudo."],
    code: code.original_code.split("\n"),
  }[kind]
  const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  return `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540"><rect width="960" height="540" fill="#f3f0e8"/><text x="64" y="65" fill="#64605a" font-family="sans-serif" font-size="20">CONTEÚDO DE DEMONSTRAÇÃO</text>${contents.map((line, i) => `<text x="64" y="${145 + i * 64}" xml:space="preserve" fill="#202020" font-family="monospace" font-size="${kind === "code" ? 32 : i === 1 ? 40 : 28}">${escape(line)}</text>`).join("")}</svg>`
}

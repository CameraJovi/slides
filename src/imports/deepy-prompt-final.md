# Prompt final — Deck DeepY (mesclado)

Esse junta o conteúdo denso que o outro agente montou em cima do repositório com os ajustes finos que a gente já validou olhando pro que foi gerado de verdade. Esse é o que eu colaria no Figma Make daqui pra frente, os anteriores podem ser descartados.

```json
{
  "mode": "planning",
  "instruction_to_agent": "Antes de criar ou alterar qualquer slide, liste um plano detalhado e aguarde confirmação.",

  "meta": {
    "purpose": "Fonte única de verdade para construir o restante do deck de pitch do DeepY (FIAP Challenge, em parceria com a Jovi), a partir do slide de referência do Switch Mode já aprovado.",
    "critical_rule": "Todo o texto de contexto do produto e do pitch usado para montar este prompt serve só para você entender a fundo o que o DeepY faz. Nenhuma frase do pitch falado deve virar texto de slide. O slide nunca narra o que o apresentador já está dizendo, ele demonstra visualmente."
  },

  "product_context": {
    "challenge": "FIAP Challenge, em parceria com a Jovi. Apresentação de ~5min20 diante de uma banca avaliadora, em ambiente profissional de coworking.",
    "problem": "O smartphone já é ferramenta de registro acadêmico (lousas, slides, exercícios, códigos), mas a fotografia só preserva o conteúdo visual: não organiza por disciplina, não explica o que foi fotografado, não vira material de estudo sozinha. A galeria tradicional mistura isso com fotos pessoais e capturas de tela. O fluxo manual do estudante hoje é CAPTURAR → ENCONTRAR → IDENTIFICAR → INTERPRETAR → ORGANIZAR → ESTUDAR, e o DeepY existe pra reduzir essa fragmentação.",
    "solution_concept": "CONTEXTO → CAPTURA → SWITCH → FERRAMENTA → RESULTADO. A câmera entende o contexto do estudante (via grade de aulas + horário) e sugere a ferramenta certa, mas o usuário sempre pode aceitar, trocar de ferramenta, automatizar ou corrigir a disciplina manualmente.",
    "switch_mode": "Mecanismo central. Usa a grade de aulas cadastrada (disciplina, dia, horário início/fim) e o horário do aparelho pra associar uma captura a uma disciplina e sugerir a ferramenta certa. Exemplo real do protótipo: terça 07:20 Cálculo, estudante chega 07:40 atrasado, fotografa a lousa, sistema sugere Math Resolver. Nunca representar como IA abstrata ou tela cheia de configuração — representar como experiência simples: horário + disciplina detectados → sugestão de ferramenta.",
    "features": [
      {
        "name": "Math Resolver",
        "does": "Fotografa expressão matemática, identifica e resolve com passo a passo, não só o resultado.",
        "visual_flow": "FOTO DA LOUSA → EXPRESSÃO IDENTIFICADA → RESOLUÇÃO → PASSO A PASSO",
        "key_message": "RESULTADO ≠ APRENDIZADO"
      },
      {
        "name": "Smart Scan (Resumo Inteligente)",
        "does": "Fotografa slide/anotação/conteúdo, gera resumo organizado e material em PDF com a foto original + conteúdo gerado.",
        "visual_flow": "SLIDE FOTOGRAFADO → RESUMO INTELIGENTE → MATERIAL PARA ESTUDO",
        "fix_needed": "No slide já gerado o mockup do resultado está vazio, sem texto nenhum. Precisa mostrar um preview real de texto (pode ser fictício) simulando o resumo gerado, não pode ficar em branco."
      },
      {
        "name": "Flashcards",
        "does": "Fotografa conteúdo de aula e transforma em flashcards de estudo, pergunta/resumo na frente e resposta no verso.",
        "visual_flow": "CAPTURA → FLASHCARD",
        "fix_needed": "No slide já gerado os cards aparecem como quadradinhos simples demais. Precisam parecer cartões de estudo de verdade (frente/verso reconhecíveis, profundidade visual). Usar como conteúdo de exemplo o uso real do autor do pitch: treinar antes de aulas de storytelling/pitch, frente com uma pergunta ou resumo curto ligado ao pitch, verso com a resposta."
      },
      {
        "name": "Code Reviewer",
        "does": "Fotografa código com problema, identifica linguagem, transcreve, e apresenta problemas/avisos/sugestões/explicação/código corrigido, com toggle ANTES/DEPOIS. Não executa o código, é sugestão a ser revisada pelo usuário.",
        "visual_flow": "CÓDIGO COM PROBLEMA → PROBLEMA IDENTIFICADO → EXPLICAÇÃO → CÓDIGO CORRIGIDO",
        "key_message": "ENTENDER O ERRO > APENAS CORRIGIR",
        "status": "Slide já gerado está no padrão de qualidade ideal — é a referência visual (fidelidade e legibilidade de mockup) para todos os outros slides de funcionalidade."
      },
      {
        "name": "Code Enhancer",
        "does": "Pra código que já funciona mas pode melhorar. Otimiza pro contexto pedido.",
        "visual_flow": "CÓDIGO ORIGINAL → ANÁLISE → CÓDIGO APRIMORADO",
        "note": "Manter visualmente separado do Code Reviewer — intenção do usuário é diferente ('por que está errado' vs 'como posso melhorar')."
      },
      {
        "name": "SmartPix",
        "does": "Aponta a câmera pra uma chave Pix escrita/impressa (CPF, e-mail, telefone), detecta e oferece copiar ou abrir no banco. Não acessa dados bancários nem faz a transação.",
        "visual_flow": "FOTO DA CHAVE PIX → PIX DETECTADO → [COPIAR] [ABRIR BANCO]",
        "tone": "Deve parecer extremamente rápido e prático."
      },
      {
        "name": "Caderno Inteligente",
        "does": "Reúne capturas e conteúdo gerado organizados por disciplina — matérias, registros, datas, tipo de análise, conteúdo gerado, fotos, filtros, detalhes.",
        "visual_flow": "GALERIA DESORGANIZADA → CADERNO POR DISCIPLINA",
        "key_message": "A captura deixa de desaparecer na galeria e passa a fazer parte do contexto acadêmico do estudante."
      },
      {
        "name": "Grade de Aulas",
        "does": "Estudante cadastra disciplina, dia e horário. Usada para relacionar uma captura ao contexto correto, mas o usuário pode corrigir a disciplina manualmente se a aula tiver mudado.",
        "key_message": "AUTOMAÇÃO SEM TIRAR O CONTROLE DO USUÁRIO"
      }
    ],
    "architecture_note": "Frontend React/Next.js com captura via câmera do navegador. Backend Python/FastAPI integrado ao Google Gemini, com endpoints por funcionalidade (resumo, flashcards, matemática, análise de código, salvamento). SmartPix, grade de aulas e parte do Caderno Inteligente rodam com processamento/local storage no navegador. NÃO transformar isso em slide técnico pesado — se houver um slide de arquitetura, ele deve ser leve, visual e secundário, a apresentação é sobre produto e experiência.",
    "tone": "O DeepY deve parecer um produto/protótipo funcional que já existe e resolve um problema concreto, não uma ideia especulativa. Transmitir clareza, tecnologia, utilidade, contexto e velocidade."
  },

  "reference_material": {
    "repo": "https://github.com/CameraJovi/FrontCameraJovi",
    "repo_usage": "Basear mockups em screenshots reais do protótipo sempre que existirem, em vez de inventar interface genérica.",
    "gold_standard_slide": "Code Reviewer — nível de qualidade de mockup a replicar nos outros slides de funcionalidade."
  },

  "brand": {
    "primary_color": "#ffc107",
    "color_change_note": "Cor da marca mudou de verde para amarelo (#ffc107). Atualizar em todos os elementos, incluindo o slide de referência já criado.",
    "font_family": "Manter a fonte atual, não trocar.",
    "font_size": "Aumentar o tamanho geral de títulos e textos de apoio. Apresentação será feita diante de banca em ambiente de coworking, espaço maior que sala de aula, a leitura precisa funcionar a mais distância."
  },

  "visual_direction": {
    "references": ["Apple product presentation", "modern mobile product launch", "UI/UX case study", "premium SaaS product presentation", "product design case study"],
    "avoid": [
      "template corporativo genérico",
      "excesso de ícones ou cards",
      "blocos grandes de texto ou listas enormes",
      "estética de trabalho escolar",
      "excesso de gradientes ou elementos decorativos sem função",
      "ilustrações genéricas de IA, robôs, cérebros digitais, pessoas artificiais geradas por IA",
      "gráficos de mercado sem relação direta com a solução",
      "efeito neon/glow em texto — prejudica legibilidade dependendo da luz do ambiente e já causou problema em apresentações anteriores"
    ],
    "prioritize": [
      "screenshots reais do protótipo",
      "mockups de smartphone grandes",
      "bastante espaço negativo",
      "tipografia forte e hierarquia clara",
      "labels curtos, linhas/conectores discretos",
      "cards inspirados na própria interface do produto"
    ]
  },

  "global_content_rules": [
    "Cada slide responde a uma única pergunta visual (ex: 'como o Switch Mode funciona?', 'o que acontece com uma foto de matemática?'). O apresentador explica, o slide demonstra.",
    "Texto no slide é rótulo ou frase curta de apoio, nunca parágrafo. No máximo uma linha quando precisar de frase.",
    "Nunca repetir no slide algo que serve só pra retomar o que já foi dito — isso fica só na fala."
  ],

  "global_ui_rules": [
    "Remover a barra de progresso do topo do slide.",
    "Na barra de progresso de baixo: manter só a barra fina centralizada, remover contador numérico e setas de navegação."
  ],

  "slide_sequence": [
    { "slide": "Capa", "status": "aprovado", "pending_fix": "Confirmar nome do grupo escrito abaixo da logo, não só a logo." },
    { "slide": "Problema", "visual_question": "O que está errado com a experiência atual?", "visual_direction": "Galeria misturando fotos acadêmicas com pessoais/capturas de tela.", "text": "Uma frase curta, ex: 'registrar não é o mesmo que conseguir estudar depois'." },
    { "slide": "Como o Switch Mode funciona", "status": "aprovado, é a base do design system", "pending_fix": "Atualizar cor pra #ffc107." },
    { "slide": "Math Resolver", "status": "a construir", "visual_flow": "ver product_context.features" },
    { "slide": "Smart Scan", "status": "precisa de rework", "pending_fix": "ver product_context.features.fix_needed" },
    { "slide": "Flashcards", "status": "precisa de rework", "pending_fix": "ver product_context.features.fix_needed" },
    { "slide": "Code Reviewer", "status": "aprovado, é a referência de qualidade" },
    { "slide": "Code Enhancer", "status": "a construir" },
    { "slide": "SmartPix", "status": "a construir" },
    { "slide": "Caderno Inteligente", "status": "a construir" },
    { "slide": "Fechamento", "visual_direction": "QR code + link, repetindo logo e nome do grupo abaixo, igual à capa." }
  ]
}
```

# Prompt de revisão — Deck DeepY (modo de planejamento)

Esse aqui não é pra recriar o deck, é uma rodada de ajustes em cima do que o Figma Make já gerou. Cole no modo de planejamento pra ele listar o plano antes de aplicar.

```json
{
  "mode": "planning",
  "instruction_to_agent": "Antes de aplicar qualquer mudança, liste um plano detalhado das alterações slide por slide e aguarde confirmação antes de renderizar.",
  "context": "O deck do DeepY já foi gerado numa primeira versão. O slide de capa está aprovado na estrutura, essa rodada é só ajuste de estética e de alguns slides de funcionalidade específicos.",
  "status_note": "O deck ainda não está pronto: falta a transcrição de uma parte inicial do pitch que outro integrante do grupo vai falar. Não marcar o deck como finalizado nesta rodada.",
  "keep_unchanged": [
    "Família da fonte atual — não trocar."
  ],
  "global_changes": [
    {
      "change": "Aumentar o tamanho geral das fontes (títulos e textos de apoio)",
      "reason": "A apresentação vai ser feita num ambiente de coworking, não numa sala de aula ou banca. O espaço é maior e a leitura precisa funcionar a mais distância da tela."
    },
    {
      "change": "Em todo slide de funcionalidade que mostra uma tela/mockup do produto, deixar o mockup mais realista e mais legível",
      "reference": "Usar o slide do Code Reviewer como padrão de qualidade — esse ficou perfeito e é a referência de estilo pros outros mockups do deck.",
      "applies_to": ["Math Resolver", "Resumo Inteligente", "Flashcards", "SmartPix", "Caderno Inteligente"]
    },
    {
      "change": "Simplificar a navegação do deck",
      "details": [
        "Remover a barra de progresso que fica no topo do slide.",
        "Manter a barra de progresso de baixo, mas remover o contador numérico (1 a 14) e as setinhas de navegação.",
        "Deixar só essa barra de progresso, fina, centralizada, na parte inferior do slide."
      ]
    }
  ],
  "slide_specific_changes": [
    {
      "slide": "Flashcards",
      "changes": [
        "Os flashcards estão representados só como quadradinhos simples — trocar para algo visualmente mais evidente, que pareça de fato um cartão (frente e verso reconhecíveis, com profundidade/sombra ou indicação clara de que vira).",
        "Trocar o conteúdo de exemplo para refletir o uso real citado no pitch: o autor usa os flashcards para treinar antes de aulas de pitch. Frente com uma pergunta ou resumo curto ligado a um ponto do pitch, verso com a resposta correspondente."
      ]
    },
    {
      "slide": "Resumo Inteligente",
      "changes": [
        "O mockup atual não mostra nenhum texto — ele precisa exibir um preview de texto (mesmo que fictício) simulando como fica o resumo gerado, pra não ficar um mockup vazio."
      ]
    }
  ],
  "out_of_scope_for_now": [
    "Slide de introdução/abertura do pitch — depende de conteúdo que ainda não foi transcrito por outro integrante do grupo."
  ]
}
```

# Plano — Funcionalidades representadas pelo produto real (revisão 6)

## Entrega desta etapa e precedência

Esta revisão incorpora ao planejamento a substituição das interfaces recriadas por
**capturas e recortes da interface real**, com dados de demonstração. A implementação
visual dos slides será uma etapa posterior; esta entrega altera somente o planejamento.

Ordem das fontes de verdade: pitch e narrativa → produto real → contexto e planejamento →
implementação atual dos slides. Referências narrativas: `contexto/deepy-pitch-completo.md`
e `contexto/deepy-contexto-produto.md`.

Neste ambiente, o produto foi localizado na pasta vizinha `../FrontCameraJovi/`:
frontend em `camerajoviUpgrade/`, backend em `python/`. A revisão de referência inspecionada
é o commit `c717a18`, sem alterações locais no momento da consulta. Os caminhos de produto
citados abaixo são relativos a essa pasta.

Permanecem os 14 slides e a sequência da revisão 5, incluindo Math Resolver → Caderno
Inteligente → Smart Scan. Preservar a identidade visual externa, a família de fontes do
deck e os exemplos aprovados de Cálculo, Design System e treino de pitch.
O fechamento e seus QR codes ficam integralmente fora desta revisão.

As revisões anteriores ficam preservadas como histórico. Esta revisão substitui suas
instruções de preservar ou reconstruir mockups de funcionalidades, inclusive o botão
artificial de PDF, o empilhamento e o realce próprio dos Flashcards e a referência do
Code Reviewer como fonte de estilo para as demais interfaces. O produto passa a ser a
fonte visual; a composição externa continua seguindo a apresentação.

## Divergências verificadas e decisões do usuário

| Tema | Evidência no produto inspecionado | Decisão para a apresentação |
|---|---|---|
| Code Enhancer / Jovi Code | `camerajoviUpgrade/app/codigo/page.js` contém os painéis “Explicar código” e “Jovi Code”, com Antes/Depois. `python/api.py`, `python/jovi_ai.py` e `python/code_analysis.py` implementam a análise de código; o prompt exige correções mínimas e evita refatoração por preferência. | O usuário identificou Code Enhancer como Jovi Code e escolheu usar o Antes/Depois real. Manter o nome do pitch, substituindo a otimização de código já funcional por uma correção compatível com o backend. Não representar dois módulos independentes. |
| Exportação PDF | `/resumo` mostra o conteúdo e a ação de salvar no Caderno; o salvamento da API gera texto `.txt`. Não foi localizada exportação PDF nessa implementação. | O usuário confirmou que PDF está nos TODOs e autorizou mantê-lo. Mostrar “Exportação PDF · prevista” fora da captura, sem inventar um botão no produto. A origem dessa previsão é a confirmação do usuário, não uma funcionalidade verificada. |
| Switch Mode | `app/services/gradeAulas.js` e `app/services/captureSession.js` associam a captura à disciplina pelo horário. A câmera permite escolher a ferramenta manualmente; não foi localizada recomendação automática de ferramenta. | Preservar o fluxo narrativo, sinalizando a sugestão automática de ferramenta como “conceito proposto”. Apoiar a parte implementada com recortes da grade e da disciplina sugerida. |
| SmartPix | `app/components/CorpoCamera.js` identifica possíveis e-mails e telefones. `ModalSmartPix` permite conferir, editar e copiar. “Abrir banco” exibe uma mensagem de simulação; não há tratamento específico de CPF. | Usar o modal real com e-mail demonstrativo, identificar “Abrir banco · simulação” e manter CPF somente como capacidade prevista na narrativa. Preservar a ressalva de que detectar um dado não confirma uma chave Pix. |

Nos caminhos abreviados `app/...` desta revisão, a raiz é `camerajoviUpgrade/`.

## Mapa de adaptação dos slides

A numeração abaixo é a posição em `src/App.tsx`, não o número no nome do arquivo.
Há sete representações próprias de funcionalidades e um diagrama conceitual a revisar.
`Slide05Solution.tsx` não integra a sequência ativa e não deve ser reintroduzido ou
alterado nesta etapa.

| Posição e componente atual | Representação atual e fonte real | Adaptação para execução posterior |
|---|---|---|
| **5 — Switch Mode** (`Slide06SwitchMode`) | Diagrama conceitual, não uma tela do produto. Fontes: `/horarios`, câmera no modo Estudante, `/salvar` e serviços de grade/captura. | Preservar a sequência narrativa com recortes da aula cadastrada e da disciplina sugerida. Usar terça-feira, Cálculo, 07:20–08:40 e captura às 07:40. Identificar o trecho de sugestão automática da ferramenta como “conceito proposto”, sem criar controles de recomendação ou automação. |
| **6 — Math Resolver** (`Slide07MathResolver`) | Lousa ilustrada e painel de resolução próprio. Fonte: `app/equacao/page.js`, rota `/equacao`, com `PreviewCaptura`, etapas e resultado. | Compor a imagem de entrada com um recorte ampliado da expressão, etapas explicadas e resultado da tela “Resolver Equação”. Preservar `2x + 6 = 14`, com resultado `x = 4`, usando a hierarquia real em vez das linhas e marcadores criados para o slide. |
| **7 — Caderno Inteligente** (`Slide13Notebook`) | Lista artificial de matérias, tipos e contagens. Fontes: `app/caderno/page.js` e `app/components/ItemHistorico.js`. | Mostrar Cálculo selecionado nos filtros reais e o registro da resolução anterior aberto, com foto e conteúdo. As contagens devem corresponder aos dados demonstrativos. Retirar a indicação fictícia de PDF disponível. |
| **8 — Smart Scan** (`Slide08Summary`) | Painel próprio com “Conceito”, “Pontos-chave” e “Exportar PDF”. Fonte: `app/resumo/page.js`, rota `/resumo`. | Usar “Resumo Inteligente”, assunto Design System, seção “Conteúdo identificado” e ação real de salvar no Caderno. Incorporar o conteúdo aprovado da revisão 5 ao texto do resumo, sem criar seções de interface inexistentes. Manter “Exportação PDF · prevista” como chamada editorial externa. |
| **9 — Flashcards** (`Slide09Flashcards`) | Cartões desenhados para o deck, com empilhamento e verso âmbar próprios. Fontes: `app/flashcard/page.js` e `app/components/CardFlashcard.js`. | Capturar o mesmo cartão antes e depois de acionar “Girar”. Exibir os dois estados lado a lado com rótulos externos “Frente” e “Verso”. Manter o exemplo de treino de pitch e usar o visual real do componente, sem reproduzir o empilhamento ou a coloração artificial. Os dois recortes representam estados sucessivos, não uma tela simultânea do produto. |
| **10 — Code Reviewer** (`Slide10Code`) | Dois painéis próprios de código e diagnóstico. Fonte: `/codigo`, painel “Explicar código”. | Destacar “O que este código faz” e o diagnóstico expandido em “Pontos para revisar”. Manter o exemplo de acumulação com `=+`, incluindo inicialização das variáveis para isolar o erro. A função narrativa deste slide é explicar o problema. |
| **11 — Code Enhancer** (`Slide15CodeEnhancer`) | Otimização de loop para list comprehension. Fonte escolhida: `/codigo`, painel “Jovi Code”. | Mostrar recortes dos estados “Antes” e “Depois” da mesma análise do slide anterior, corrigindo `=+` para `+=`. Preservar o título do pitch e os nomes reais dentro da captura. Trocar “Um código que já funciona — só que melhor” e “Funciona → otimizado” por uma mensagem coerente com a correção: “Da análise ao código corrigido”. Manter a indicação real de que a correção é uma sugestão. |
| **13 — SmartPix** (`Slide12SmartPix`) | Moldura de celular e interface de detecção próprias. Fontes: `app/components/ModalSmartPix.js` sobre a câmera em `CorpoCamera.js`. | Usar o modal “Possível chave Pix encontrada”, com e-mail demonstrativo, campo editável e ações existentes. Preservar a conferência da chave e a mensagem de ausência de transação/acesso a dados bancários. Identificar externamente “Abrir banco · simulação”. Não simular reconhecimento de CPF como recurso atual. |

## Produção dos recortes na etapa posterior

- Renderizar o frontend original em ambiente de demonstração. Preparar entradas e
  respostas compatíveis com os contratos existentes, sem alterar JSX, estilos ou
  comportamento para fabricar resultados. Dados demonstrativos não são evidência de
  uma execução real de IA.
- Capturar em viewport mobile de **390 × 844**, com densidade **3×**. Obter os estados
  por rolagem e pelos controles reais; guardar a captura de origem junto ao recorte.
- Recortar e ampliar regiões relevantes, mantendo proporções, textos, cores e
  hierarquia. Legendas e setas editoriais ficam fora das capturas. Não substituir
  textos internos, adicionar botões ou combinar fragmentos como se fossem uma tela real.
- Compor os recortes diretamente no slide, sem reconstruir um celular. Manter a
  tipografia do produto nas imagens e a tipografia do deck nos títulos e legendas.
  Ampliar o conteúdo essencial em vez de reduzir uma tela inteira até ficar ilegível.
- Manter continuidade nos dados: a mesma captura matemática alimenta o Caderno;
  Reviewer e Jovi Code usam a mesma análise; frente e verso pertencem ao mesmo cartão.
- Guardar as imagens localmente no deck e documentar rota, estado, dados de demonstração,
  revisão do produto, viewport e região recortada. A apresentação não dependerá de
  câmera, backend ou respostas de IA durante o pitch.
- O reaproveitamento será visual, por capturas rastreáveis. Não compartilhar componentes
  entre Next.js e Vite, criar APIs ou implementar os recursos pendentes do produto
  como parte desta alteração de apresentação.

## Critérios de validação e estado da entrega

Para a execução visual posterior:

- Conferir cada representação com a rota e o estado documentados. Diferenciar dados
  de demonstração de resultados obtidos por execução real da IA.
- Validar a continuidade Math Resolver → Caderno, Reviewer → Jovi Code e frente → verso.
- Conferir legibilidade em **1920 × 1080** e **1366 × 768**, sem cortes de explicações,
  ressalvas ou ações essenciais. Não resolver falta de espaço reduzindo telas inteiras.
- Confirmar que PDF previsto, sugestão de ferramenta proposta e abertura bancária
  simulada estão diferenciados das funcionalidades atuais.
- Após implementar os visuais, executar o build e percorrer os 14 slides pelo teclado,
  verificando imagens locais, composição e ausência de overflow. Conferir a preservação
  da sequência e do fechamento, sem acrescentar alterações de CTA a esta revisão.

### Implementação iniciada — ajustes editoriais

- Switch Mode: disciplina reconhecida pelo horário; sugestão de ferramenta identificada
  no diagrama como “Conceito proposto”. A nota externa descreve a escolha manual atual.
- Smart Scan: botão artificial “Exportar PDF” removido; indicação externa
  “Exportação PDF · prevista”. A frase de apoio passa a descrever a revisão no Caderno.
- Reviewer e Code Enhancer: mesmo exemplo Python com variáveis inicializadas e correção
  mínima de `=+` para `+=`. Enhancer usa “Da análise ao código corrigido”, a identificação
  Jovi Code e a ressalva de revisão da sugestão.
- SmartPix: texto distingue possível e-mail/telefone de chave confirmada, identifica
  abertura bancária simulada e CPF previsto. O exemplo usa `estudos@example.com`.
- Caderno: retirada a indicação de PDF atualmente disponível na lista ilustrativa.
- As indicações editoriais usam `FeatureNote`, fora das representações da interface.
  Sequência, estilos globais e fechamento preservados.

**Estado atual: implementação parcial.** As representações antigas ainda precisam ser
substituídas pelos recortes reais; esses ajustes de conteúdo não equivalem à conclusão
da revisão visual. Math Resolver e Flashcards aguardam as capturas. O ambiente isolado
de preparação está descrito em `scripts/product-captures/README.md`.

O navegador integrado continuou indisponível na retomada. O usuário escolheu habilitá-lo
em vez de usar Edge headless. Capturas e validação em tela cheia permanecem pendentes;
o produto original permanece sem alteração. Isso não marca o deck como finalizado.

---

# Plano — Sequência e ajustes de conteúdo e cor (revisão 5)

## Referências e decisões

Referências: `contexto/deepy-pitch-completo.md` (Parte 2) e
`contexto/deepy-contexto-produto.md` (conceito central e funcionalidades).
O usuário confirmou o pitch do repositório como referência e escolheu fundamentos de
Design System para o mockup do Smart Scan e realce âmbar discreto para o verso dos Flashcards.
Esta revisão substitui a posição anterior do Notebook e o exemplo de fotossíntese;
as revisões anteriores abaixo ficam preservadas como histórico.

## Sequência (14 slides)

1. Capa
2. Problema
3. Persona
4. Isso é comum?
5. Switch Mode
6. Math Resolver
7. Notebook — Caderno Inteligente
8. Smart Scan
9. Flashcards
10. Code Reviewer
11. Code Enhancer
12. Gancho Pix
13. SmartPix
14. Fechamento

O Notebook completa o exemplo de Cálculo: reconhecer o contexto → explicar a resolução →
organizar para revisar. Colocá-lo após Switch Mode interromperia a ligação explícita entre
a sugestão do Math Resolver e sua demonstração. A nova ordem também permite seguir do
SmartPix diretamente ao fechamento, sem retornar ao tema acadêmico.

Nova transição falada proposta após Math Resolver (não é uma transcrição do pitch original
e não deve ser inserida como parágrafo no slide):

> E essa foto com o passo a passo fica reunida no Caderno Inteligente, organizada na matéria de Cálculo para revisar depois.

Depois, retomar o exemplo existente: “Agora, passando para outro exemplo: nas minhas aulas online…”.

## Smart Scan

O pitch menciona a aula de Design System, mas não especifica o assunto do slide fotografado.
O texto abaixo é um exemplo ilustrativo aprovado para a demonstração, sem atribuição ao professor:

- **Título:** Design System
- **Conceito:** Conjunto de padrões, componentes e diretrizes para criar interfaces consistentes.
- **Pontos-chave:** Padrões de cores, tipografia e espaçamento; Componentes reutilizáveis para as interfaces;
  Documentação com regras e exemplos de uso.

Preservar o mockup, suas dimensões, tipografia, cores, seções, frase de apoio e indicação
“Exportar PDF”. A mudança é apenas de conteúdo, coerente com captura → resumo → material para revisão.

## Flashcards

O fundo anterior do verso, `rgba(255,193,7,0.07)`, deixava transparecer a carta escura
deslocada e o fundo decorativo do slide, compondo a cor sobre bases diferentes.
A animação dos ancestrais termina com opacidade 1; não há filtro ou redução permanente de
opacidade aplicado ao card no código inspecionado.

Substituir diretamente esse fundo por
`color-mix(in srgb, var(--color-lime) 7%, var(--color-ink-soft) 93%)`:
mistura opaca dos tokens existentes, mantendo o realce âmbar discreto sem depender das
camadas posteriores. Preservar todos os textos, borda, sombra, carta empilhada,
alinhamento e dimensões. Não alterar estilos globais ou os outros slides.

## Validação

- Executar o build e confirmar 14 slides, Notebook após Math Resolver e fechamento após SmartPix.
- Comparar os Flashcards antes/depois para garantir que apenas o fundo foi alterado.
- Em preview, conferir ausência de cortes no Smart Scan e tom uniforme no verso após a animação,
  com a carta traseira aparecendo apenas na área exposta.
- Ensaiar Math Resolver → Notebook → Smart Scan dentro da duração prevista de aproximadamente 5min20.
- Na análise inicial, o navegador estava indisponível; a inspeção visual e o ensaio permanecem pendentes.

### Resultado da implementação

- Reordenação, substituição do conteúdo do Smart Scan e fundo opaco dos Flashcards aplicados.
- `npm.cmd run build` concluído com sucesso.
- Verificação da sequência confirmou 14 slides únicos, Notebook na posição 7 e SmartPix seguido do fechamento.
- Comparação integral do arquivo dos Flashcards confirmou alteração exclusiva do fundo:
  todos os textos e demais estilos foram preservados.
- Exemplo de fotossíntese removido do Smart Scan.
- O navegador continuou indisponível na tentativa de validação após a implementação;
  inspeção visual em tela cheia e ensaio de duração ainda não realizados.

---

# Plano — Preencher a tela cheia (revisão 4)

## Contexto (revisão 4)

Vendo os slides em tela cheia (refs: `src/imports/image.png`, `src/imports/image-1.png`), sobra
muito espaço vazio: o título fica no topo, há uma faixa morta grande no meio e os elementos de
destaque (galeria, cards, mockups) ficam pequenos e agrupados na metade inferior. Causa estrutural
em `src/components/SlideLayout.tsx`: o conteúdo é limitado a `max-w-[1100px]` e centralizado
verticalmente (`flex-1 justify-center`) num espaço alto — um bloco de conteúdo baixo "flutua" no
meio. **Decisão do usuário:** aumentar **títulos e visuais juntos** e preencher melhor a tela
(isto sobe de novo a escala tipográfica reduzida na rev. anterior, agora acompanhada de layout mais
cheio). Marca âmbar, fonte e conteúdo textual permanecem.

### Mudanças estruturais — `src/components/SlideLayout.tsx`

- Alargar o frame: `max-w-[1100px]` → `max-w-[1360px]` (aproveitar a largura da tela).
- Subir a escala do cabeçalho: título `text-4xl/sm:text-6xl` → `text-5xl/sm:text-7xl`; kicker
  `text-xs/sm:text-sm` → `text-sm/sm:text-base`.
- Reduzir a faixa morta vertical: diminuir o respiro morto (`py-[6vh]`, `pt-8/10`) e deixar o
  conteúdo distribuir melhor — como os visuais ficarão maiores, o bloco central passa a ocupar da
  área logo abaixo do título até perto da barra inferior, mantendo centralização equilibrada.

### Primitivos — `src/components/ui.tsx`

- `Lead`: `text-xl/sm:text-2xl` → `text-2xl/sm:text-3xl` (corpo maior, acompanhando os títulos).
- `PhoneMockup`: `w-[210px]` → ~`w-[260px]` (mockups de tela maiores).
- `IconBadge`: subir os tamanhos `sm/md/lg` proporcionalmente.

### Slides — aumentar os itens em destaque e ocupar a altura

Padrão aplicado (representativos): aumentar os visuais/painéis, gaps, ícones e rótulos mono para o
bloco preencher a área; usar a largura nova.
- `Slide02Problem`: galeria maior (painel mais largo, tiles mais altos, ícones `h-6`→`h-8`, rótulos
  maiores); coluna de texto e visual mais equilibradas.
- `Slide09Flashcards`: **retrabalhar a seção** — o card do verso está torto (`rotate-[3deg]`) e
  desalinhado do da frente. Deixar os dois cards **alinhados e do mesmo tamanho**, lado a lado
  (frente · pergunta / verso · resposta), maiores (`h-60 w-80` → ~`h-72 w-96`) e com texto maior.
  Trocar o giro torto por profundidade limpa e intencional: sombra consistente + uma carta empilhada
  logo atrás (leve offset uniforme) para dar sensação de baralho, sem inclinação desalinhada. Manter
  o realce âmbar só no verso e a dica "toque para virar".
- `Slide07MathResolver`, `Slide08Summary`, `Slide10Code`, `Slide15CodeEnhancer`, `Slide12SmartPix`,
  `Slide13Notebook`, `Slide06SwitchMode`: painéis/mockups maiores, gaps e tipografia mono acima.
- `Slide03Persona`: avatar e badges maiores.
- `Slide04Validation`: multidão e headline maiores.
- `Slide01Cover`, `Slide11Hook`, `Slide14Closing`: headline, logo/QR maiores para encher a tela.

### Verificação (revisão 4)

- No preview em tela cheia, percorrer os 14 slides: confirmar que a faixa vazia central sumiu, que
  título e visuais estão maiores, e que nada transborda (checar em alturas menores; `min-h-0`
  preservado). Marca âmbar e conteúdo inalterados.

---

# Plano — Finalização do deck Deepy (revisão 3, fonte: deepy-prompt-final.md)

## Contexto (revisão 3)

Chegaram dois documentos de contexto (`src/imports/deepy-contexto-produto.md` e
`src/imports/deepy-prompt-final.md`). O **prompt final é a fonte única de verdade** e substitui os anteriores.
O deck atual (14 slides, base já com navegação enxuta, tipografia maior e `Panel bare`) precisa ser
alinhado à sequência oficial e à nova marca. Regra crítica: **o slide demonstra, não narra** — nada do
pitch falado vira texto de slide; texto é rótulo ou frase curta de uma linha.

**Decisões do usuário:**
- **Manter os slides de conexão** (Persona, "Isso é comum?", gancho do Pix) — o pitch os usa
  (ex.: *"Quem já passou por isso sabe como é chato digitar a chave"*).
- Abaixo da logo (capa + fechamento) escrever **"DeepY"**.
- Alinhar ao prompt final: rebrand âmbar, **dividir Code Reviewer/Enhancer**, remover apenas o slide
  separado "A solução: DeepY" (a solução é aberta pelo Switch Mode, como no pitch Parte 2).
- Referência de conteúdo: `src/imports/pasted_text/deeply-pitch.md` (o slide demonstra, não narra).

### Mudança de marca (verde → amarelo)

Trocar a cor primária para **`#ffc107`** em todo o deck, sem trocar a fonte.
- `src/index.css`: `--color-lime: #ffc107`, `--color-lime-soft: #ffd666`, `--color-olive: #c79100`;
  ajustar `::selection` (fica automático via token) — os componentes que usam `var(--color-lime)`
  (Logo, Wordmark, progress bar, ícones) migram sozinhos.
- Substituir os literais **hardcoded** de verde por âmbar em todo `src/`: `rgba(212,230,0,α)` →
  `rgba(255,193,7,α)` (glow em `SlideLayout.tsx` e realces inline nos slides), e quaisquer
  `#d4e600`/`#e6f24d`. Padrão repetido — aplicar por busca/replace.

### Sequência final (14 slides) e o que fazer em cada um

1. **Capa** (`Slide01Cover`) — logo + **"DeepY"** abaixo; cor âmbar.
2. **Problema** (`Slide02Problem`) — **rework**: visual = **galeria misturando** fotos acadêmicas (lousa,
   slide, código) com fotos pessoais/prints. Frase única: *"Registrar não é o mesmo que conseguir estudar
   depois."*
3. **Persona / conexão** (`Slide03Persona`) — manter; ajustar cor âmbar.
4. **Isso é comum? / conexão** (`Slide04Validation`) — manter; ajustar cor âmbar.
5. **Switch Mode** (`Slide06SwitchMode`) — base do design system; refinar para o fluxo
   **CONTEXTO → CAPTURA → SWITCH → FERRAMENTA → RESULTADO** e o exemplo do pitch (terça, Cálculo 07:20;
   chega 07:40 → sugere Math Resolver).
6. **Math Resolver** (`Slide07MathResolver`) — FOTO DA LOUSA → EXPRESSÃO → RESOLUÇÃO → PASSO A PASSO;
   rótulo **"Resultado ≠ aprendizado"**.
7. **Smart Scan** (`Slide08Summary`) — título "Smart Scan"; preview de texto real; SLIDE → RESUMO →
   MATERIAL (PDF).
8. **Flashcards** (`Slide09Flashcards`) — cartões de verdade; conteúdo de treino de pitch.
9. **Code Reviewer** (`Slide10Code` → só Reviewer) — CÓDIGO COM PROBLEMA → PROBLEMA → EXPLICAÇÃO →
   CORRIGIDO; toggle antes/depois; rótulo **"Entender o erro > apenas corrigir"**. Referência de qualidade.
10. **Code Enhancer** (novo) — **distinto** do Reviewer (otimização, sem vermelho): CÓDIGO ORIGINAL →
    ANÁLISE → CÓDIGO APRIMORADO.
11. **Gancho Pix / conexão** (`Slide11Hook`) — manter; "Você já pagou um Pix digitando a chave…?".
12. **SmartPix** (`Slide12SmartPix`) — FOTO DA CHAVE → PIX DETECTADO → [COPIAR] [ABRIR BANCO]; rápido;
    selo "sem transação/sem acesso a dados".
13. **Caderno Inteligente** (`Slide13Notebook`) — **GALERIA DESORGANIZADA → CADERNO POR DISCIPLINA**.
14. **Fechamento** (`Slide14Closing`) — QR + link + logo + **"DeepY"**.

### Arquivos a alterar

- **Remover** só `Slide05Solution.tsx` (e tirar do `slides[]`).
- **Novo**: `src/slides/Slide15CodeEnhancer.tsx`, importado e posicionado após o Code Reviewer no `App.tsx`.
- **Editar**: `src/App.tsx` (nova ordem do `slides[]`), `src/index.css` (tokens âmbar),
  `SlideLayout.tsx` (glow âmbar), `Wordmark.tsx` ("DeepY"), `Slide10Code.tsx` (só Reviewer), e os
  slides 2/5(SwitchMode)/6(Math)/7(SmartScan)/13(Caderno) conforme acima.
- **Rebrand global**: substituir literais verdes por âmbar em `src/` — `rgba(212,230,0,α)` →
  `rgba(255,193,7,α)` e `#d4e600`/`#e6f24d` → âmbar.
- Reaproveitar primitivos: `SlideLayout`, `Panel` (`bare`), `Lead`, `PhoneMockup`, `IconBadge`,
  `icons.tsx`, `Wordmark`/`Logo`.

### Verificação (revisão 3)

- No preview: percorrer os 14 slides pelo teclado; confirmar a nova ordem, presença dos slides de conexão,
  ausência do "A solução: DeepY", e só a barra fina inferior.
- Confirmar que **nenhum** elemento verde permanece (glow, realces, logo, seleção) — tudo âmbar `#ffc107`.
- Conferir Code Reviewer vs Code Enhancer visualmente distintos; Smart Scan com texto; Flashcards como
  cartões; Problema com galeria misturada + frase única; "DeepY" abaixo da logo na capa e no fechamento.
- Fonte inalterada. Deck alinhado ao prompt final + decisões do usuário.

---

# Plano — Rodada de ajustes do deck Deepy (revisão 2)

## Contexto (revisão 2)

O deck já foi gerado e a estrutura da capa está aprovada. Esta rodada é só **ajuste de estética e de
mockups**, guiada por `src/imports/deepy-figma-make-revisao.md`. O ambiente de apresentação mudou (coworking,
tela mais distante), então tudo precisa ficar maior e mais legível. **Não trocar a família de fonte** e
**não marcar o deck como finalizado** (falta a transcrição de uma abertura do pitch, fora de escopo agora).

### Mudanças globais

1. **Aumentar a escala tipográfica** (títulos e textos de apoio) para leitura a mais distância.
   - `src/components/SlideLayout.tsx`: kicker `text-xs → text-sm`; título `text-4xl/sm:text-6xl → text-5xl/sm:text-7xl`.
   - Padronizar os parágrafos de apoio via o componente `Lead` de `src/components/ui.tsx` (hoje subutilizado): subir para `text-2xl/sm:text-3xl`, `max-w-[42ch]`. Substituir os `<p>` inline dos slides (Problema, Solução, Switch Mode, Math Resolver, Resumo, Flashcards, Code, SmartPix, Caderno) por `<Lead>` para escala consistente.
   - Subir também tamanhos de rótulos/mono nos mockups proporcionalmente.

2. **Mockups mais realistas e legíveis**, usando o slide **Code Reviewer** (`Slide10Code.tsx`) como padrão de qualidade (painel com header rotulado, tipografia mono, cor de sintaxe, conteúdo plausível). Aplicar a: Math Resolver, Resumo Inteligente, Flashcards, SmartPix, Caderno Inteligente — dar a cada mockup header de tela, conteúdo textual real e hierarquia clara (não só barras/ícones).

3. **Simplificar a navegação** em `src/App.tsx`:
   - Remover a barra de progresso do **topo**.
   - Remover o **contador numérico** (NN/14) e os **botões de seta**.
   - Remover a **dot nav**.
   - Manter **apenas uma barra de progresso fina, centralizada, na parte inferior**.
   - Manter a navegação por teclado (setas/espaço/Home/End) — só a UI visual é enxugada.

### Mudanças por slide

- **Flashcards** (`Slide09Flashcards.tsx`): transformar os "quadradinhos" em cartões que pareçam cartões de verdade — frente e verso reconhecíveis, com profundidade/sombra e indicação clara de virar (empilhamento + sombra, ou verso levemente rotacionado/deslocado). Conteúdo passa a refletir o uso real citado no pitch: **o autor treina antes das aulas de pitch** — frente com pergunta/resumo curto ligado a um ponto do pitch, verso com a resposta. (Usarei um exemplo plausível de pitch, salvo se você me passar o texto exato.)
- **Resumo Inteligente** (`Slide08Summary.tsx`): o mockup não pode ficar vazio — exibir um **preview de texto fictício** simulando o resumo gerado (título + parágrafos curtos legíveis + tag PDF), em vez de só barras.

### Arquivos afetados

- `src/App.tsx` — enxugar navegação.
- `src/components/SlideLayout.tsx` — escala de kicker/título.
- `src/components/ui.tsx` — `Lead` maior; possível refino de `PhoneMockup`/`Panel` para mockups.
- `src/slides/Slide08Summary.tsx`, `Slide09Flashcards.tsx` — mudanças de conteúdo/visual.
- `src/slides/Slide07MathResolver.tsx`, `Slide12SmartPix.tsx`, `Slide13Notebook.tsx` — realismo dos mockups + troca de `<p>` por `<Lead>`.
- Demais slides — só a troca de `<p>` inline por `<Lead>` para a nova escala.

### Verificação (revisão 2)

- No preview: percorrer os 14 slides pelo teclado; confirmar que **só** a barra fina inferior aparece (sem barra superior, sem contador, sem setas, sem dots).
- Conferir que a tipografia está visivelmente maior e legível à distância.
- Conferir que os 5 mockups têm conteúdo textual realista no padrão do Code Reviewer, e que o Resumo mostra texto (não vazio) e os Flashcards parecem cartões com frente/verso.
- Fonte inalterada; deck **não** marcado como finalizado.

---

# Plano original — Deck de pitch Deepy (14 slides)

## Contexto

O grupo **Deepy** vai apresentar o produto "DeepY — Câmera inteligente para estudantes" para uma banca.
O deck atual recebeu feedback de revisão: muito texto por slide, pouco apoio visual, e efeitos neon/glow
no texto que atrapalham a leitura sob projetor. O arquivo `src/imports/pasted_text/figma-make-prompt.md`
traz um JSON com o conteúdo slide a slide já reescrito seguindo esse feedback (máx. ~3 linhas por slide,
sem redundância com a fala, apoio visual obrigatório).

Este plano cria o deck do zero (o projeto está em branco: `App.tsx` só tem um `div` vazio, sem componentes,
sem libs de UI). O resultado é um deck navegável, projetável, fiel ao conteúdo do JSON e à identidade visual
já existente.

## Identidade visual (extraída dos anexos)

- **Logo**: `src/imports/Group_303.svg` — "D" + barra vazados, traço `#698E00` (verde-oliva). Usada nos slides 1 e 14, com o nome "Deepy" escrito abaixo.
- **Fundo**: `src/imports/Gradient.png` — preto com glow radial amarelo-limão. Serve de base para a atmosfera do deck.
- **Paleta** (derivada): fundo preto/quase-preto, acento amarelo-limão (glow radial de fundo), verde-oliva `#698E00` para a logo/detalhes, texto branco sólido.
- **Regra fixa do feedback**: nenhum efeito neon/glow em **texto** — só contraste sólido (branco sobre escuro). O glow fica restrito a elementos decorativos de fundo.

## Decisão de formato

A skill `slide-deck-builder` descreve um único HTML self-contained; porém o projeto é React + Vite + Tailwind v4
(autoridade: `AGENTS.md`). Implementação será em **React/Tailwind**, adotando da skill: uma ideia por slide,
componente visual em todo slide, máx. ~30 palavras, um acento consistente, navegação por teclado + contador.

## Abordagem de implementação

Antes de escrever UI: invocar `Skill('make:aesthetic-stance')` (comprometer com uma stance, par tipográfico,
tokens) e `Skill('make:image-attachments')` + `Skill('make:design-imports')` (há SVG/PNG em `src/imports/`).
Chamar `create_make_theme` com um `userCreationRequest` de 1-2 frases (deck de pitch, dark, amarelo-limão/oliva).

### Estrutura de arquivos

- `src/index.css` — adicionar wiring de fonte (Google Fonts via `@import` no topo) e tokens de tema `@theme` (cores, dark base). Fonte display geométrica forte (ex.: Space Grotesk/Sora) + body legível (Inter). Finalizado pela aesthetic-stance.
- `src/App.tsx` — shell do deck: estado do slide atual, navegação por teclado (← →, Home/End), swipe/click opcional, contador no canto, barra de progresso, botões prev/next. Renderiza o slide ativo com transição (framer-motion).
- `src/slides/` — um componente por slide (`Slide01Cover.tsx` … `Slide14Closing.tsx`), cada um recebendo o layout base.
- `src/components/` — primitivos reutilizáveis: `SlideLayout` (fundo + glow + título), `Logo` (importa o SVG), `Wordmark` (logo + "Deepy"), e componentes visuais da skill conforme necessário: `CardGrid`, `StepFlow`, `BeforeAfter`, `PhoneMockup`, `CodeBlock`, `IconLabelList`, `StatCallout`, `QrBlock`.

### Dependências a instalar

- `lucide-react` — ícones (câmera, PDF, flashcard, cadeado/Pix, matéria, etc.).
- `motion` (framer-motion) — transições de slide e microanimações discretas.

### Mapa dos 14 slides (conteúdo fiel ao JSON — NÃO inventar texto novo)

1. **Capa** — logo centralizada + "Deepy" abaixo; título "DeepY", subtítulo "Câmera inteligente para estudantes". Ícone de lente/câmera estilizado. Fundo escuro, glow. Sem neon no texto.
2. **O problema** — 1 parágrafo (redigitar/organizar cadernos/lousas). Visual: caderno/lousa + celular.
3. **Persona "Quem sente essa dor"** — imagem/avatar do estudante + 2-3 ícones de dores (tempo, organização, aulas). Texto só rotula.
4. **Validação "Isso é comum?"** — pergunta de conexão com a plateia; silhuetas/ícones de vários estudantes. Visualmente distinto do slide 3.
5. **Solução: DeepY** — 1 parágrafo (foto → IA → resumo/flashcard/matemática). Mockup de captura + 3 ícones pequenos.
6. **Switch Mode** — diagrama/step flow: horário → contexto → ferramenta sugerida. Sem o exemplo da aula de cálculo.
7. **Math Resolver** — antes/depois: foto da lousa → resolução passo a passo. Frase curta.
8. **Resumo Inteligente** — foto de slide → resumo + geração de PDF. Ícone PDF + mockup.
9. **Flashcards** — flashcard com frente/verso visíveis.
10. **Code Reviewer & Code Enhancer** — 1 parágrafo cobrindo os dois; code block com erro marcado + versão corrigida.
11. **Gancho (Pix)** — frase única grande sobre pagar Pix com chave em vez de QR. Ícone Pix + celular. Sem parágrafo.
12. **SmartPix** — câmera detecta CPF/e-mail/celular como chave Pix; copiar/abrir no banco, sem acessar dados bancários. Mockup + ícone de cadeado.
13. **Caderno Inteligente** — histórico por matéria ligando imagem ao material gerado. Mockup de grade/lista por matéria.
14. **Fechamento "Obrigado"** — CTA para acessar; QR Code + link do site; logo + "Deepy" novamente (mesma regra do slide 1).

### Regras globais aplicadas em todos os slides

- Máx. ~1 parágrafo curto (~3 linhas). Texto sólido branco, sem glow/neon.
- Todo slide de funcionalidade tem ao menos 1 elemento visual relacionado ao tema.
- Sem redundância com a fala do apresentador (só resumos curtos).
- Deck legível em projetor: contraste alto, texto grande.

## Verificação

- Rodar o deck no preview (dev server já ativo na porta `$PORT`); navegar pelos 14 slides com ← → e conferir contador/progresso.
- Conferir legibilidade: texto branco sólido, sem glow em texto; logo + "Deepy" presentes nos slides 1 e 14.
- Conferir que cada slide tem componente visual e que o texto bate com o JSON (sem texto inventado).
- Checar responsividade em tela cheia (100vw × 100vh) e ausência de overflow.

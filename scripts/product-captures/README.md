# Capturas do produto para a revisão 6

Este ambiente prepara as telas originais para capturas. Não gera uma interface alternativa
nem integra componentes Next.js ao deck Vite. Nenhuma captura foi produzida ainda.

## Preparar e abrir

Na raiz da apresentação:

```powershell
node scripts/product-captures/prepare.mjs
npm.cmd ci --prefix .cache/jovi-product --no-audit --no-fund
npm.cmd run dev --prefix .cache/jovi-product -- --hostname 127.0.0.1
```

Abra `http://127.0.0.1:5500/demo` no navegador integrado. O usuário escolheu esse navegador
em vez de Edge headless. Ele estava indisponível na preparação inicial; as capturas e a
substituição visual dos slides aguardam a conexão.

O script copia `../FrontCameraJovi/camerajoviUpgrade` para `.cache/jovi-product`, incluindo
as páginas, estilos, dependências e recursos originais. A origem pode ser passada como
argumento. Não copia `.env`, não altera o repositório do produto e não exporta a página
de preparação no build da apresentação.

`capture-source.json` registra o commit e hashes dos arquivos visuais relevantes. A pasta
`.cache` é ignorada pelo Git. Não rodar o preparo em paralelo com a captura.

## Dados e procedimento

`fixtures.mjs` contém dados **ilustrativos**, compatíveis com os contratos inspecionados;
não são respostas obtidas da IA. Os documentos SVG são entradas de demonstração, não
fotografias reais nem representações da interface.

Os botões de `/demo` preparam os dados pelo próprio ambiente de teste e abrem as páginas
originais. Usar somente esta cópia isolada: os dados de demonstração substituem a grade,
histórico e captura temporária desse endereço local.

- **Grade:** aula de Cálculo na terça-feira, 07:20–08:40. Recortar o registro em “Sua semana”.
- **Disciplina:** captura às 07:40; recortar “Salvar em Cálculo” e sua explicação.
- **Math:** expressão `2x + 6 = 14`, três etapas e resultado `x = 4`.
- **Caderno:** um registro de Cálculo, com a mesma imagem e resolução. Abrir pelo botão real.
- **Resumo:** Design System, com o conteúdo aprovado; sem botão artificial de PDF.
- **Flashcards:** capturar a pergunta e depois a resposta usando “Girar”.
- **Código:** `=+` na linha 4, variáveis inicializadas. Capturar “Explicar código”,
  depois “Jovi Code” nos estados “Antes” e “Depois”, usando os controles existentes.
- **Pix:** `/demo/pix` monta o `ModalSmartPix` original com props demonstrativas.
  Essa prévia isolada não executa câmera/OCR e não é evidência de reconhecimento real.
  Recortar somente o modal, sem alegar captura da câmera. O controle “Copiar chave”
  não escreve na área de transferência dessa prévia. “Abrir banco” mostra a mensagem
  de simulação existente no produto.

Capturar a 390 × 844 e densidade 3× quando o navegador disponibilizar essa configuração.
Guardar as telas de origem e os recortes, registrando viewport efetivo, rota, estado,
dados, revisão e região recortada. Não alterar estilos ou DOM das páginas para capturar.

## Integração pendente

Aplicar as imagens locais aos oito slides especificados na revisão 6. Preservar ordem,
fontes externas, exemplos e CTA. Sinalizar PDF previsto, conceito proposto do Switch e
abertura bancária simulada fora das capturas. Validar a composição em 1920 × 1080 e
1366 × 768, navegação dos 14 slides e build.

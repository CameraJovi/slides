# DeepY — Contexto do produto

Documento de referência para uso por LLMs/agentes de IA. Objetivo: dar contexto completo e preciso sobre o produto, sem depender de explicação adicional. Escrito para consumo por máquina, não para leitura de plateia.

## Visão geral

DeepY é um produto acadêmico desenvolvido para o FIAP Challenge, em parceria com a Jovi, que transforma a câmera do smartphone em uma ferramenta de apoio aos estudos com reconhecimento de contexto. Em vez de só capturar uma imagem, a câmera entende o contexto acadêmico do estudante (disciplina, horário) e sugere automaticamente a ferramenta de IA mais adequada para aquele momento.

## Problema que resolve

O smartphone já é usado por estudantes para fotografar lousas, slides, exercícios, anotações e códigos durante aulas. O problema é que a fotografia preserva o conteúdo visual, mas não organiza automaticamente por disciplina, não preserva o raciocínio ou contexto da aula, e não transforma sozinha o registro em material de estudo. A galeria tradicional mistura esses registros acadêmicos com fotos pessoais, screenshots e arquivos de mensagens, exigindo que o estudante localize, identifique e interprete manualmente cada imagem depois. Esse esforço de organização tende a ser adiado justamente nos momentos em que a captura acontece de forma rápida (ex: aluno atrasado fotografando uma lousa já cheia). Em disciplinas como matemática e programação, a limitação é ainda mais evidente: uma foto de uma equação mostra o resultado sem o raciocínio por trás dele, e uma foto de código não garante compreensão da linguagem, do erro ou da correção sugerida. Público afetado: estudantes do ensino médio, técnico e superior que usam registros visuais como apoio de estudo, em qualquer disciplina.

## Conceito central da solução

Fluxo: **CONTEXTO → CAPTURA → SWITCH → FERRAMENTA → RESULTADO**

O mecanismo central é o **Switch Mode**: usa a grade de aulas cadastrada pelo estudante (disciplina, dia da semana, horário de início/fim) cruzada com o horário do aparelho no momento da captura, para associar a foto a uma disciplina e sugerir a ferramenta adequada. O usuário mantém controle total: pode aceitar a sugestão, escolher outra ferramenta, automatizar uma ferramenta para determinado contexto, ou corrigir manualmente a disciplina se a aula tiver sido alterada.

Exemplo de uso real: aula de Cálculo cadastrada para terça 07:20–08:40. Estudante chega atrasado às 07:40, a lousa já está cheia de cálculo. Ele fotografa a lousa; o sistema reconhece o contexto (terça, dentro do horário da aula de Cálculo) e sugere o Math Resolver.

## Funcionalidades

| Funcionalidade | O que faz | Observações |
|---|---|---|
| **Math Resolver** | Fotografa uma expressão matemática, identifica e resolve, apresentando o passo a passo, não só o resultado final. | Diferencial é o raciocínio explicado, não a resposta pronta. |
| **Smart Scan** (também chamado de Resumo Inteligente) | Fotografa slide, anotação ou conteúdo de aula, gera um resumo organizado e um material em PDF contendo a imagem original + conteúdo gerado. | — |
| **Flashcards** | Fotografa conteúdo de aula e transforma em flashcards de estudo, com pergunta/resumo na frente e resposta no verso. | — |
| **Code Reviewer** | Fotografa um código com erro, identifica a linguagem, transcreve, aponta problemas/avisos/sugestões, explica o erro e apresenta código corrigido, com alternância entre antes/depois. | Não executa o código. A correção é uma sugestão a ser revisada pelo usuário. |
| **Code Enhancer** | Analisa um código que já funciona e sugere uma versão otimizada para o contexto pedido. | Distinto do Code Reviewer: aqui o código não tem erro, é sobre melhoria, não correção. |
| **SmartPix** | Aponta a câmera para uma chave Pix escrita ou impressa (CPF, e-mail, telefone), detecta automaticamente e oferece copiar ou abrir direto no app do banco. | Não acessa dados bancários nem realiza a transação, só facilita o acesso à chave. |
| **Caderno Inteligente** | Reúne capturas e conteúdos gerados organizados por disciplina: matérias, registros, datas, tipo de análise, conteúdo gerado, fotos, filtros e detalhes de cada registro. | Resolve a fragmentação de ter tudo espalhado na galeria do celular. |
| **Grade de Aulas** | Estudante cadastra disciplina, dia da semana e horário de início/fim. Usada pelo Switch Mode para associar uma captura ao contexto correto. | Sugestão automática, mas o usuário pode corrigir a disciplina manualmente a qualquer momento. |

## Arquitetura técnica

- **Frontend**: React + Next.js, interface responsiva, captura de imagem via câmera do navegador (`getUserMedia`).
- **Backend**: Python + FastAPI, integrado à API do Google Gemini.
- **Endpoints** dedicados por funcionalidade: resumo, flashcards, matemática, análise de código, salvamento.
- Algumas funcionalidades (SmartPix, grade de aulas, parte do Caderno Inteligente) rodam com processamento e armazenamento local no navegador, sem depender do backend.
- Repositório público (frontend): https://github.com/CameraJovi/FrontCameraJovi

## Contexto institucional

- Projeto acadêmico desenvolvido para o **FIAP Challenge**, em parceria com a empresa/desafiante **Jovi**.
- Nome do grupo/projeto durante o desenvolvimento também aparece como "Camera JOVI"; o nome de produto final é **DeepY**.
- Etapa atual: fase final da competição.
- Formato de apresentação: pitch de aproximadamente 5 minutos e 20 segundos, apresentado diante de uma banca avaliadora, em ambiente profissional de coworking (não sala de aula).

## Terminologia e aliases

- "Smart Scan" e "Resumo Inteligente" se referem à mesma funcionalidade.
- "SmartPix" e "Smart Pix" se referem à mesma funcionalidade.
- O produto já foi chamado internamente de "Camera JOVI" antes de ser rebatizado como "DeepY".

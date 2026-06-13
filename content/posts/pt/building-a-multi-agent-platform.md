---
title: Por que um Agente de IA Não é Suficiente
slug: building-a-multi-agent-platform
date: "2026-05-10"
read: "6 min"
tag: IA
color: indigo
summary: O ponto de virada foi parar de tratar um LLM como um funcionário genérico e começar a pensar nele como um especialista de nicho. Veja como estruturei um pipeline de múltiplos agentes para criar conteúdo e o que aprendi sobre confiabilidade no processo.
---

O ponto de virada foi quando parei de tratar um LLM como um funcionário genérico e comecei a pensar nele como um especialista de nicho.

Eu estava construindo um sistema para automatizar partes do fluxo de criação de conteúdo: pesquisa, outline, escrita, revisão de precisão e polimento final. O caminho mais óbvio era pegar um modelo decente, montar um prompt bem elaborado pedindo as cinco etapas e colher o resultado. Funcionou. Mas o resultado era sempre... adequado. Nunca excelente.

Depois de algumas semanas quebrando a cabeça, entendi o motivo.

## O problema com o modelo canivete suíço

Cada etapa do fluxo de conteúdo exige um modo cognitivo diferente. Pesquisa quer abrangência. Escrita quer seletividade. Revisão quer ceticismo. Pedir para um único modelo fazer tudo isso no mesmo contexto é como pedir para alguém ser ao mesmo tempo o advogado do diabo e o defensor entusiasmado do projeto. Um dos papéis inevitavelmente sai perdendo.

O que eu precisava não era de um modelo mais inteligente. Era de um pipeline onde cada agente faz um trabalho bem definido e passa o resultado adiante.

## Como ficou o pipeline

O fluxo ficou assim:

O **Pesquisador** recebe o tema e devolve notas estruturadas, fontes relevantes e lacunas de informação que identificou.

O **Roteirista** pega essas notas e constrói um outline. Só isso. Não escreve, não interpreta, só organiza a estrutura.

O **Escritor** recebe somente o outline, nunca a pesquisa bruta. Esse detalhe importa: quando o escritor vê o material bruto, tende a jogar tudo dentro do texto. O outline força seletividade.

O **Verificador** recebe o rascunho e tenta encontrar problemas, não confirmar o que está certo.

O **Editor** recebe o texto verificado e trabalha no tom, coesão e fluxo de leitura.

A separação parece burocrática no papel, mas na prática mudou bastante a qualidade do output final.

## O que quebrou (e como consertei)

### O verificador confirmava em vez de questionar

Esse foi o problema mais difícil. Quando você pede para um modelo verificar fatos de um texto que ele próprio gerou, ou que um modelo parecido gerou, ele tende a confirmar. É uma forma de viés de confirmação no nível do sistema.

A solução foi o que chamo de prompting adversarial: em vez de "verifique se as informações estão corretas", o prompt passou a ser "encontre tudo que pode estar errado, impreciso ou mal-fundamentado neste texto". Pequena mudança, diferença grande nos resultados.

### A latência somava rápido

Um pipeline sequencial de cinco etapas não é grátis. Dependendo dos modelos, a latência total chegava facilmente a dois ou três minutos por artigo. Para uso ocasional tudo bem, mas escala mal.

A solução foi identificar quais etapas dependem umas das outras e quais podem rodar em paralelo. O verificador e o editor, por exemplo, conseguem analisar seções diferentes do mesmo texto ao mesmo tempo. Combinado com cache agressivo dos resultados intermediários, o tempo caiu bastante.

## Isso é engenharia de sistemas, não só prompt engineering

No final das contas, construir um sistema de agentes tem muito mais a ver com engenharia de sistemas distribuídos do que com escrever prompts criativos.

Você passa a se preocupar com coisas como: o que acontece quando um agente falha no meio do pipeline? O sistema retenta automaticamente? Como observar o que está acontecendo internamente sem transformar os logs num caos? Como garantir que um agente intermediário não passou informação errada para o próximo sem que ninguém perceba?

Os prompts em si são quase a parte fácil. A complexidade real está na orquestração.

## Por que isso vai além do caso de uso específico

Automação de conteúdo foi o meu ponto de entrada, mas o padrão se aplica a qualquer fluxo com etapas que têm modos de falha distintos. Análise de dados, revisão de código, triagem de tickets de suporte. Qualquer coisa que hoje tem um humano passando o resultado de uma etapa para a próxima é candidata a esse tipo de arquitetura.

O que mais me surpreendeu foi que o maior ganho não foi velocidade. Foi qualidade de forma consistente. Um humano cansado comete erros aleatórios. Um pipeline bem construído comete erros previsíveis, e erros previsíveis você consegue endereçar.

Se quiser conversar mais sobre arquitetura de agentes ou sistemas de IA, fique à vontade para entrar em contato. Esse é um dos assuntos que eu poderia discutir por horas.

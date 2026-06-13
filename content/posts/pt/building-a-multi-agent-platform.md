---
title: Construindo uma Plataforma Multi-Agente de Conteúdo
slug: building-a-multi-agent-platform
date: "2025-06-01"
read: "8 min"
tag: IA
color: indigo
summary: Como projetei um sistema onde agentes de IA especializados colaboram para pesquisar, escrever e revisar conteúdo — e o que aprendi sobre confiabilidade no processo.
---

Fluxos de criação de conteúdo são repetitivos por natureza: pesquisar um tema, rascunhar um outline, escrever uma primeira versão, revisar a precisão, polir o tom. O insight que mudou minha abordagem foi perceber que cada uma dessas etapas tem um modo de falha diferente — e um perfil cognitivo diferente que mapeia bem a um agente especializado.

## Por que múltiplos agentes em vez de um

Um único prompt pedindo a um LLM para "pesquisar e escrever um artigo completo sobre X" produz resultados aceitáveis, mas raramente excelentes. O modelo divide sua atenção entre objetivos conflitantes: ser exaustivo (modo pesquisa) enquanto também é conciso (modo escrita) enquanto também é crítico (modo revisão).

Dividir a tarefa em um pipeline de agentes focados — cada um otimizado para um trabalho — consistentemente superou a abordagem monolítica nos meus testes.

## O pipeline

```
Pesquisador → Roteirista → Escritor → Verificador → Editor
```

Cada agente recebe apenas o que precisa: o Pesquisador recebe um tema e retorna notas estruturadas. O Roteirista recebe essas notas e retorna uma estrutura. O Escritor nunca vê a pesquisa bruta — apenas o outline — o que o força a ser seletivo em vez de exaustivo.

## O que quebrou em produção

O verificador foi o agente mais difícil de acertar. Pedir a um modelo que verifique suas próprias afirmações é pouco confiável — ele tende a confirmar em vez de questionar. A solução foi um prompting adversarial: o verificador foi explicitamente instruído a encontrar falhas, não validar.

O outro problema foi latência. Um pipeline sequencial de cinco agentes soma. Movi para execução paralela onde possível e cachei resultados intermediários agressivamente.

## Conclusões

Construir sistemas de agentes é mais parecido com engenharia de sistemas distribuídos do que com prompt engineering. Você se preocupa com modos de falha, retries, falhas parciais e observabilidade. Os agentes em si são quase a parte fácil.

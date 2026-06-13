---
title: Portfolio Pessoal
slug: portfolio-website
projectType: side
status: No ar
color: sage
desc: Portfolio pessoal construído com Next.js 16, Tailwind v4 e uma camada de conteúdo em Markdown. Suporta três idiomas com SSG, ISR seletivo e deploy na Vercel.
outcome: Em produção na Vercel.
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest"]
order: 1
---

## Visão geral

Você está lendo agora. O objetivo foi construir algo rápido, fácil de manter e simples de escrever, sem depender de um CMS externo.

## Por que essas escolhas de stack

**Next.js 16** foi a escolha natural pelo App Router maduro e server components. O projeto usa `generateStaticParams` nas páginas de posts e projetos para gerar tudo estaticamente em build time. A listagem do blog usa `revalidate = 3600` para revalidar a cada hora sem precisar de um novo deploy.

Vale mencionar que o Next.js 16 tem algumas breaking changes que diferem bastante do que a maioria conhece: o arquivo de middleware virou `proxy.ts` com export `proxy()`, e os `params` das rotas passaram a ser assíncronos. Acertar esses detalhes cedo poupa bastante dor de cabeça.

**Tailwind v4** com CSS custom properties para theming foi a parte mais interessante de implementar. O dark mode funciona via atributo `data-theme` no `<html>`. As variáveis CSS trocam automaticamente com a mudança do atributo, então não há variantes `dark:` espalhadas pelo código. O tema é lido do `localStorage` via um inline script antes da hidratação para evitar flash de tema errado ao carregar a página.

**Markdown puro** no lugar de um CMS foi uma decisão deliberada. Posts e projetos são arquivos `.md` com frontmatter YAML. O `gray-matter` faz o parse em build time. Sem banco de dados, sem serviço externo, sem overhead de autenticação para editar um parágrafo. A desvantagem é que o conteúdo vive no repositório, mas para um portfolio pessoal isso é uma vantagem: tudo está versionado.

## i18n

Três idiomas (inglês, português e japonês) implementados com um segmento dinâmico `[lang]`. Textos de UI ficam em `lib/i18n.ts` e o conteúdo fica em diretórios separados por locale. A validação de locale acontece em cada entrada de página e layout para garantir que uma rota inválida retorne 404 em vez de renderizar com dados errados.

## O que eu mudaria

O threshold de cobertura de testes está em 80%, o que é boa disciplina para a camada de dados, mas gera atrito para componentes de UI onde o que importa é a renderização visual, não o contador de branches cobertos. Eu afrouxaria esse número para componentes de apresentação e focaria a cobertura onde bugs realmente custam: `lib/i18n.ts` e as funções de parse de conteúdo.

---
title: Portfolio Pessoal
slug: portfolio-website
projectType: side
status: No ar
color: sage
desc: Portfolio pessoal construído com Next.js 16, Tailwind v4 e uma camada de conteúdo baseada em Markdown. Suporta três idiomas (en, pt, ja) com ISR e um reverse proxy Caddy.
outcome: Em produção em um VPS self-hosted.
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "Caddy"]
order: 1
---

## Visão geral

Este é o site que você está lendo agora. O objetivo foi construir algo rápido, fácil de manter e simples para criar conteúdo — sem o overhead de um CMS.

## Decisões de stack

**Next.js 16** pelo App Router, server components e ISR. O modo `output: standalone` mantém a imagem Docker enxuta.

**Tailwind v4** com CSS custom properties para theming. Dark mode implementado via atributo `data-theme` no `<html>` — sem variantes `dark:` do Tailwind, as CSS vars trocam automaticamente.

**Camada de conteúdo Markdown** — posts e projetos são arquivos `.md` simples com frontmatter YAML. `gray-matter` faz o parse em build time. Sem banco de dados, sem CMS, sem serviço extra.

**Caddy** cuida do HTTPS e reverse proxy. Renovação automática de certificados via Let's Encrypt.

## i18n

Três idiomas (inglês, português, japonês) implementados com um segmento dinâmico `[lang]`. Textos de UI ficam em `lib/i18n.ts`, conteúdo fica em `content/posts/[locale]/` e `content/projects/[locale]/`.

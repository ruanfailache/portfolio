---
title: Portfolio Website
slug: portfolio-website
projectType: side
status: Live
color: sage
desc: Personal portfolio built with Next.js 16, Tailwind v4, and a markdown-based content layer. Supports three locales (en, pt, ja) with ISR and a Caddy reverse proxy.
outcome: Shipped and running in production on a self-hosted VPS.
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "Caddy"]
order: 1
---

## Overview

This is the site you're reading right now. The goal was to build something fast, maintainable, and easy to write content for — without the overhead of a CMS.

## Stack decisions

**Next.js 16** for the App Router, server components, and ISR. The `output: standalone` mode keeps the Docker image lean.

**Tailwind v4** with CSS custom properties for theming. Dark mode is implemented via a `data-theme` attribute on `<html>` — no Tailwind `dark:` variants needed, the CSS vars swap automatically.

**Markdown content layer** — posts and projects are plain `.md` files with YAML frontmatter. `gray-matter` parses them at build time. No database, no CMS, no extra service.

**Caddy** handles HTTPS termination and reverse proxying. Automatic certificate renewal via Let's Encrypt.

## i18n

Three locales (English, Portuguese, Japanese) implemented with a `[lang]` dynamic segment. UI copy lives in `lib/i18n.ts`, content lives in `content/posts/[locale]/` and `content/projects/[locale]/`.

## What I'd change

The vitest coverage thresholds are high (80%) which is useful discipline but adds friction for UI components where the render output is the meaningful test. I'd loosen those and focus coverage on the data layer (`lib/content.ts`, `lib/i18n.ts`).

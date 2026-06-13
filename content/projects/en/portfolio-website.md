---
title: Portfolio Website
slug: portfolio-website
projectType: side
status: Live
color: sage
desc: Personal portfolio built with Next.js 16, Tailwind v4, and a markdown-based content layer. Supports three locales with SSG, selective ISR, and deployed to Vercel.
outcome: Live on Vercel.
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest"]
order: 1
---

## Overview

You are reading it right now. The goal was to build something fast, maintainable, and easy to write for, without depending on an external CMS.

## Why these stack choices

**Next.js 16** was the natural pick for its mature App Router and server components. The project uses `generateStaticParams` on post and project pages to generate everything statically at build time. The blog listing uses `revalidate = 3600` to revalidate hourly without requiring a new deploy.

Worth noting: Next.js 16 ships with some breaking changes that differ significantly from what most developers know. The middleware file is now `proxy.ts` with a `proxy()` export, and route `params` became async. Getting those details right early saves a lot of headaches.

**Tailwind v4** with CSS custom properties for theming was the most interesting part to get right. Dark mode works via a `data-theme` attribute on `<html>`. The CSS variables swap automatically when the attribute changes, so there are no `dark:` variants scattered through the codebase. The theme is read from `localStorage` via an inline script before hydration to prevent a flash of the wrong theme on load.

**Plain markdown** instead of a CMS was a deliberate call. Posts and projects are `.md` files with YAML frontmatter. `gray-matter` parses them at build time. No database, no external service, no authentication overhead just to edit a paragraph. The trade-off is that content lives in the repository, but for a personal portfolio that is actually an advantage: everything is version-controlled.

## i18n

Three locales (English, Portuguese, and Japanese) implemented with a `[lang]` dynamic segment. UI copy lives in `lib/i18n.ts` and content lives in locale-specific directories. Locale validation happens at every page and layout entry point to ensure an invalid route returns a 404 instead of rendering with the wrong data.

## What I would change

The test coverage threshold sits at 80%, which is good discipline for the data layer but creates friction for UI components where visual rendering is what actually matters, not the branch coverage counter. I would loosen that threshold for presentational components and focus coverage where bugs are actually costly: `lib/i18n.ts` and the content parsing functions.

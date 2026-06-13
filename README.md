# Portfolio

My personal portfolio — built, iterated, and maintained end-to-end with [Claude Code](https://claude.ai/code). Not as a demo or experiment, but as the actual workflow I use day to day.

If you're a developer or technical reviewer: everything here is fair game to read and question. The architecture decisions were intentional, the test structure follows the current Next.js recommendations, and the AI collaboration shows up in commits rather than just in the pitch.

## What's under the hood

**Next.js 16 with App Router** — using the async params API, co-located route components, and server components as the default. No pages directory, no legacy patterns.

**Three locales out of the box** — English, Portuguese, and Japanese. Locale validation happens at every page entry, and all copy flows through a typed `getContent(locale)` call. Nothing is hardcoded.

**No CMS** — content lives as plain Markdown files with YAML frontmatter under `content/posts/` and `content/projects/`. `gray-matter` reads them at build time. Less infrastructure, faster deploys, content in version control.

**Design tokens as CSS custom properties** — colors, typography, and dark mode are all registered as Tailwind theme aliases via `@theme` in `globals.css`. Dark mode switches by flipping `data-theme="dark"` on `<html>` — no `dark:` variants needed anywhere.

**Tests co-located with source** — test files live next to the component they test, following Next.js conventions. Vitest + React Testing Library, with shared fixtures under `test/fixtures/`.

**Deployed on Vercel** — no Docker, no reverse proxy, no ops overhead.

## Stack

|           |                                      |
| --------- | ------------------------------------ |
| Framework | Next.js 16                           |
| Styling   | Tailwind CSS + CSS custom properties |
| Content   | Markdown + `gray-matter`             |
| Locales   | `en`, `pt`, `ja`                     |
| Testing   | Vitest + React Testing Library       |
| Fonts     | Inter · DM Sans                      |
| Deploy    | Vercel                               |

## Structure

```
app/[lang]/               ← one folder per route
  _components/            ← home components, co-located with tests
  blog/_components/
  work/_components/
components/               ← shared primitives: ui/, controls/, layout/
lib/                      ← server-only: content, i18n, seo, jsonld
content/
  posts/{en,pt,ja}/
  projects/{en,pt,ja}/
test/
  setup.ts
  fixtures/
```

## Running locally

```bash
pnpm install
pnpm dev
```

| Command              |                    |
| -------------------- | ------------------ |
| `pnpm dev`           | Development server |
| `pnpm build`         | Production build   |
| `pnpm test`          | Run tests          |
| `pnpm test:coverage` | Coverage report    |
| `pnpm lint`          | Lint               |

## The AI angle

This project is built with Claude Code as a first-class collaborator — not just for boilerplate, but for architecture decisions, test strategy, refactors, and documentation. The commit history reflects that: structured messages, intentional changes, no noise.

The Claude Code setup lives in `.claude/` — custom skills for scaffolding components, features, content, and tests, plus `CLAUDE.md` and `AGENTS.md` that keep any AI working in this repo grounded in the actual conventions rather than generic patterns.

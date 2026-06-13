# Portfolio

Personal portfolio built with Next.js 16, deployed on Vercel. Supports English, Portuguese, and Japanese.

## Stack

- **Framework** — Next.js 16 (App Router)
- **Styling** — Tailwind CSS with design tokens via CSS custom properties
- **Content** — Markdown files with YAML frontmatter (`gray-matter`)
- **i18n** — Three locales: `en`, `pt`, `ja`
- **Testing** — Vitest + React Testing Library (co-located with source)
- **Fonts** — Inter (body), DM Sans (display)

## Project structure

```
app/[lang]/               ← routes, one folder per page
  _components/            ← home page components + tests
  blog/_components/
  work/_components/
  contact/_components/
  resume/_components/
components/               ← shared primitives (ui/, controls/, layout/)
lib/                      ← server-only utilities and i18n
content/
  posts/{en,pt,ja}/       ← blog post markdown files
  projects/{en,pt,ja}/    ← project markdown files
test/
  setup.ts                ← vitest global setup
  fixtures/               ← shared test fixtures
```

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `pnpm dev`           | Start development server       |
| `pnpm build`         | Production build               |
| `pnpm start`         | Start production server        |
| `pnpm test`          | Run test suite                 |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm lint`          | Lint source files              |

## Content

Blog posts and projects are plain Markdown files under `content/`. Each piece of content needs a file per locale.

Use `/new-content post <slug>` or `/new-content project <slug>` in Claude Code to scaffold all three locale files with the correct frontmatter schema.

## Adding components

- **Shared primitive** → `components/ui/` via `/new-component <name>`
- **Route-specific** → `app/[lang]/<route>/_components/` via `/new-feature <name>`
- **Test for existing component** → `/new-test <path>`

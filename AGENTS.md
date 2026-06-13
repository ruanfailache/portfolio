<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

# Portfolio — Repo Overview

Single Next.js 16 app at the repo root. No separate CMS service.

```
portfolio/
├── app/                   ← Next.js App Router (routes only)
│   └── [lang]/
│       ├── page.tsx       ← home
│       ├── _components/   ← home page components
│       ├── blog/
│       │   ├── page.tsx
│       │   ├── [slug]/page.tsx
│       │   └── _components/
│       ├── work/
│       │   ├── page.tsx
│       │   ├── [slug]/page.tsx
│       │   └── _components/
│       ├── resume/
│       │   ├── page.tsx
│       │   └── _components/
│       └── contact/
│           ├── page.tsx
│           └── _components/
├── components/            ← shared primitives (ui/, controls/, layout/)
├── lib/                   ← server-only utilities (content.ts, i18n.ts, seo.ts, etc.)
├── content/               ← markdown content files
│   ├── posts/en/          ← blog posts per locale
│   ├── posts/pt/
│   ├── posts/ja/
│   ├── projects/en/       ← projects per locale
│   ├── projects/pt/
│   └── projects/ja/
├── public/                ← static assets
├── Dockerfile
├── docker-compose.yml     ← caddy + portfolio only
└── AGENTS.md
```

## Key conventions

- All web/UI work at repo root — no `frontend/` subdirectory
- Content is plain `.md` files with YAML frontmatter — no CMS
- Route components colocated: `app/[lang]/blog/_components/` not a top-level `features/`
- `lib/content.ts` reads markdown with `gray-matter` — replaces Strapi
- `docker-compose.yml` builds from `.` (repo root)

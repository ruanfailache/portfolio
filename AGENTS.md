<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Portfolio — Repo Overview

Multi-service repo. Each service is self-contained with its own dependencies and Dockerfile.

```
portfolio/
├── frontend/          ← Next.js 16 app
├── cms/               ← Strapi 5 headless CMS
├── docker-compose.yml ← orchestrates both services
└── AGENTS.md
```

- All web/UI work → `frontend/`
- All CMS/content-type work → `cms/`
- Never create Next.js or Strapi files at the repo root
- `docker-compose.yml` builds from `./frontend` and `./cms` respectively

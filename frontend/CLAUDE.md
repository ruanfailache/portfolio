# Frontend — Project Conventions

## Next.js 16 breaking changes

Training data will be wrong on these — always apply:

- `middleware.ts` is gone → file is `proxy.ts`, export is `proxy()` not `middleware()`
- `params` are async: `const { lang } = await params`
- Page props: `PageProps<'/[lang]'>` · layout props: `LayoutProps<'/[lang]'>`
- `RouteContext` does not exist — use inline `{ params: Promise<{…}> }`

## Component placement

- Shared primitives → `components/ui/`
- Client-side controls (theme, lang) → `components/controls/` — always `"use client"`
- New page sections → `features/<name>/` — feature-specific subcomponents stay inside the feature folder, never in `components/`

## Server vs client

`components/controls/` is always client. Everything else is server by default — only add `"use client"` when a component has event handlers on native elements, hooks, or browser APIs.

## Component size

Split when JSX exceeds ~120 lines. Don't split a self-contained 40-line component into multiple files.

## i18n

- Validate locale at every page/layout entry: `if (!LOCALES.includes(lang as Locale)) notFound()`
- All copy from `getContent(locale)` — never hardcode user-visible strings

## Design tokens

Colors are CSS custom properties — never hardcode, never use Tailwind color utilities:

```
var(--bg)       var(--fg)         var(--fg-mid)      var(--fg-soft)
var(--panel)    var(--panel-fg)   var(--panel-faint)
var(--border)
var(--indigo)   var(--sage)       var(--rose)         var(--amber)
```

Dark mode is `data-theme="dark"` on `<html>` — no `dark:` Tailwind variants needed.
Tailwind is for layout, spacing, and responsive utilities only.
Fonts: headings → `var(--font-dm-sans)` · body/UI → `var(--font-inter)`.

## Strapi

`lib/strapi.ts` has `import "server-only"` — never import it from a client component. During development `lib/i18n.ts` is the source of truth; Strapi augments in production.

## Docker

`frontend/Dockerfile` uses `npm install`, not pnpm — pnpm's minimum-release-age policy breaks clean Docker builds. pnpm stays local-only.

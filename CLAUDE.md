@AGENTS.md

# Next.js 16 breaking changes

Training data will be wrong on these — always apply:

- `middleware.ts` is gone → file is `proxy.ts`, export is `proxy()` not `middleware()`
- `params` are async: `const { lang } = await params`
- Page props: `PageProps<'/[lang]'>` · layout props: `LayoutProps<'/[lang]'>`
- `RouteContext` does not exist — use inline `{ params: Promise<{…}> }`

## Component placement

- Shared primitives → `components/ui/`
- Client-side controls (theme, lang) → `components/controls/` — always `"use client"`
- Page-specific components → `app/[lang]/<route>/_components/` — colocated with the route

## Server vs client

`components/controls/` is always client. Everything else is server by default — only add `"use client"` when a component has event handlers on native elements, hooks, or browser APIs.

## Component size

Split when JSX exceeds ~120 lines. Don't split a self-contained 40-line component into multiple files.

## i18n

- Validate locale at every page/layout entry: `if (!LOCALES.includes(lang as Locale)) notFound()`
- All copy from `getContent(locale)` — never hardcode user-visible strings

## Design tokens & Tailwind

All design tokens are CSS custom properties registered as Tailwind theme aliases via `@theme` in `globals.css`. Use Tailwind utilities for everything — layout, spacing, typography, and color.

Color aliases: `bg-bg`, `bg-bg-alt`, `bg-card`, `bg-panel`, `text-fg`, `text-fg-mid`, `text-fg-soft`, `text-panel-fg`, `text-panel-soft`, `text-panel-faint`, `border-border`, `text-indigo`, `bg-indigo`, `bg-indigo-pale`, `text-sage`, `bg-sage-pale`, `text-rose`, `bg-rose-pale`, `text-amber`, `bg-amber-pale`.

Font aliases: `font-sans` → Inter · `font-display` → DM Sans.

Dark mode is `data-theme="dark"` on `<html>` — no `dark:` Tailwind variants needed; the CSS vars swap automatically.

Only use `style={{}}` for truly dynamic runtime values (e.g. a computed pixel width). Never hardcode color values inline.

## Content layer

`lib/content.ts` reads `.md` files from `content/posts/[locale]/` and `content/projects/[locale]/` using `gray-matter`. It has `import "server-only"` — never import from a client component.

Frontmatter schema for posts: `title`, `slug`, `date` (ISO), `read`, `tag`, `color`, `summary`.
Frontmatter schema for projects: `title`, `slug`, `projectType` (`client`|`side`), `company`, `status`, `color`, `desc`, `outcome`, `tags` (array), `order`.

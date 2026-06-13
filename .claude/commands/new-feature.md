Create a new feature scaffold for the portfolio project.

## Usage

/new-feature <name>

## What to create

Given a route name (e.g. `testimonials`), scaffold the following:

1. **`app/[lang]/testimonials/page.tsx`** — server page component; validates locale, calls `getContent(locale)`, renders the feature components
2. **`app/[lang]/testimonials/_components/TestimonialsList.tsx`** — primary view component, server by default
3. **`app/[lang]/testimonials/_components/TestimonialCard.tsx`** — item component if the feature renders a list

## Rules

- Route components live at `app/[lang]/<route>/_components/` — not in a top-level `features/` folder
- Server components by default; add `"use client"` only when the component needs browser APIs, event handlers, or React hooks
- Validate locale at the page entry: `if (!LOCALES.includes(lang as Locale)) notFound()`
- Accept `content: LocaleContent` and `locale: Locale` as props — never hardcode strings, always derive copy from `getContent(locale)`
- Import shared UI from `@/components/ui/` (Card, Tag, Button, SectionLabel, SectionHeading, Arrow)
- Use Tailwind color aliases (`text-fg`, `bg-card`, `text-indigo`, etc.) — never hardcode colors or raw CSS variables inline
- No mega-components: split when a single file exceeds ~120 lines of JSX

## After scaffolding

- Show the created file tree
- Also scaffold co-located test files (`_components/<Name>.test.tsx`) with smoke-render tests
- Remind the user to:
  1. Add any new locale strings to `lib/i18n.ts` for all three locales (en, pt, ja)
  2. Wire the new route into navigation if needed (Header, LangSwitcher, sitemap)

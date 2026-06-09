Create a new feature scaffold for the portfolio project.

## Usage
/new-feature <name>

## What to create

Given a feature name (e.g. `testimonials`), scaffold the following under `frontend/features/<name>/`:

1. **`index.ts`** — barrel export for all public components in this feature
2. **A primary view component** — e.g. `TestimonialsList.tsx` — server component by default (no `"use client"` unless it needs interactivity)
3. **A card/item component** if the feature renders a list — e.g. `TestimonialCard.tsx`

## Rules

- Follow the existing feature structure: `frontend/features/home/`, `frontend/features/work/`, `frontend/features/blog/`
- Server components by default; add `"use client"` only when the component needs browser APIs, event handlers, or React hooks
- Accept `content: LocaleContent` and `locale: Locale` as props — never hardcode strings, always use the i18n content object
- Import shared UI from `@/components/ui/` (Card, Tag, Button, SectionLabel, SectionHeading, Arrow)
- No inline styles for colors that already have a CSS variable — use `var(--token)` from the design system in `frontend/app/globals.css`
- No mega-components: if a single file grows beyond ~120 lines of JSX, split it
- Do NOT create a page — remind the user to wire the feature into the appropriate `frontend/app/[lang]/` page

## After scaffolding

- Show the created file tree
- Remind the user to:
  1. Add the new locale strings to `frontend/lib/i18n.ts`
  2. Import and render the feature in the relevant page under `frontend/app/[lang]/`

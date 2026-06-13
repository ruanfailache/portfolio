Create a new shared UI component for the portfolio project.

## Usage

/new-component <name> [ui|controls|layout]

The second argument is the subfolder under `components/`:

- `ui` — presentational primitives (Tag, Card, Button, Arrow, etc.)
- `controls` — interactive controls with client-side state (ThemeToggle, LangSwitcher, etc.)
- `layout` — structural layout components (Header, Footer, etc.)

Defaults to `ui` if not specified.

## Rules

- **`ui/` components** are server components by default — pure presentational, no hooks, no browser APIs
- **`controls/` components** always need `"use client"` — they manage state or interact with the browser
- **`layout/` components** default to server; add `"use client"` only if they need scroll listeners, resize observers, or similar
- Keep components focused: one visual responsibility per file
- Use Tailwind color aliases from the design system (`text-fg`, `bg-card`, `text-indigo`, `bg-indigo-pale`, etc.) — never hardcode colors or use `style={{}}` unless the value is truly dynamic at runtime
- Accept explicit props with TypeScript interfaces; avoid catch-all prop spreading
- If the component wraps a native element, forward the relevant HTML props (e.g. `React.HTMLAttributes<HTMLDivElement>`)
- Do NOT create a route-specific component here — if it only makes sense inside one route, it belongs in `app/[lang]/<route>/_components/`

## After scaffolding

- Show the created file
- Also scaffold a co-located `<Name>.test.tsx` with at least a smoke-render test
- Remind the user to export it from the relevant barrel if one exists (e.g. `components/ui/index.ts`)

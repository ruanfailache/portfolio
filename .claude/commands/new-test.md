Scaffold a co-located test file for an existing component or utility.

## Usage

/new-test <path-to-source-file>

Example: /new-test components/ui/Tag.tsx
Example: /new-test app/[lang]/blog/\_components/BlogList.tsx
Example: /new-test lib/i18n.ts

## What to create

Place the test file next to the source file with the same name and a `.test.tsx` (or `.test.ts` for non-JSX) extension.

Before scaffolding, read the source file to understand what it exports, what props it accepts, and what it renders.

### For React components (.tsx)

```tsx
// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ComponentName from "@/path/to/ComponentName";

describe("ComponentName", () => {
  it("renders without crashing", () => {
    render(<ComponentName {/* minimum required props */} />);
    // assert at least one visible element
  });
});
```

- Add `// @vitest-environment jsdom` at the top — always
- Import from `@/` aliases, never relative paths
- If the component requires Next.js primitives (Link, Image, useRouter), check `test/setup.ts` to see if they are already mocked — if not, mock them with `vi.mock()`
- If the component is `"use client"` with event handlers, add interaction tests using `fireEvent` or `userEvent`
- If the component is server-only or reads from `lib/content.ts`, mock that import with `vi.mock("@/lib/content", () => ({ ... }))`

### For utilities (.ts)

```ts
import { describe, it, expect } from "vitest";
import { fnName } from "@/path/to/module";

describe("fnName", () => {
  it("returns expected value for valid input", () => {
    expect(fnName(...)).toBe(...);
  });
});
```

- No jsdom directive needed for pure utility tests
- Use `it.each` for functions with multiple input/output cases

## After scaffolding

- Show the created file
- Run `npx vitest run <test-file-path>` to confirm the scaffold passes

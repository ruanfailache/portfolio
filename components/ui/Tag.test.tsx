// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tag, { accentColors } from "@/components/ui/Tag";

describe("accentColors", () => {
  it("returns indigo CSS vars for indigo", () => {
    const { bg, fg } = accentColors("indigo");
    expect(bg).toBe("var(--indigo-pale)");
    expect(fg).toBe("var(--indigo)");
  });

  it("returns sage CSS vars for sage", () => {
    const { bg, fg } = accentColors("sage");
    expect(bg).toBe("var(--sage-pale)");
    expect(fg).toBe("var(--sage)");
  });

  it("returns rose CSS vars for rose", () => {
    const { bg, fg } = accentColors("rose");
    expect(bg).toBe("var(--rose-pale)");
    expect(fg).toBe("var(--rose)");
  });

  it("returns amber CSS vars for amber", () => {
    const { bg, fg } = accentColors("amber");
    expect(bg).toBe("var(--amber-pale)");
    expect(fg).toBe("var(--amber)");
  });

  it("falls back to indigo for unknown color", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { bg, fg } = accentColors("unknown" as any);
    expect(bg).toBe("var(--indigo-pale)");
    expect(fg).toBe("var(--indigo)");
  });
});

describe("Tag", () => {
  it("renders children text", () => {
    render(<Tag color="indigo">React</Tag>);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders with a background based on color", () => {
    render(<Tag color="sage">Node.js</Tag>);
    expect(screen.getByText("Node.js")).toHaveClass("bg-sage-pale");
  });

  it("renders with foreground color based on color", () => {
    render(<Tag color="rose">Java</Tag>);
    expect(screen.getByText("Java")).toHaveClass("text-rose");
  });

  it("renders different tag colors", () => {
    render(<Tag color="amber">AWS</Tag>);
    expect(screen.getByText("AWS")).toHaveClass("bg-amber-pale");
  });
});

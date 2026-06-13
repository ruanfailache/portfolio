// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionLabel from "@/components/ui/SectionLabel";

describe("SectionLabel", () => {
  it("renders children text", () => {
    render(<SectionLabel>My Label</SectionLabel>);
    expect(screen.getByText("My Label")).toBeInTheDocument();
  });

  it("renders a decorative line span", () => {
    const { container } = render(<SectionLabel>Test</SectionLabel>);
    const spans = container.querySelectorAll("span");
    expect(spans.length).toBeGreaterThanOrEqual(2);
  });

  it("renders different children", () => {
    render(<SectionLabel>About Me</SectionLabel>);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });
});

// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Arrow from "@/components/ui/Arrow";

describe("Arrow", () => {
  it("renders an svg element", () => {
    const { container } = render(<Arrow />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders with currentColor fill", () => {
    const { container } = render(<Arrow />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("fill")).toBe("currentColor");
  });

  it("renders the arrow path", () => {
    const { container } = render(<Arrow />);
    expect(container.querySelector("path")).toBeInTheDocument();
  });
});

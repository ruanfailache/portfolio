// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StatCard from "@/app/[lang]/_components/StatCard";

describe("StatCard", () => {
  it("renders the value", () => {
    render(<StatCard value="5+" label="Years" />);
    expect(screen.getByText("5+")).toBeInTheDocument();
  });

  it("renders the label", () => {
    render(<StatCard value="10" label="Projects" />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("defaults to indigo color", () => {
    const { container } = render(<StatCard value="1" label="Test" />);
    const value = screen.getByText("1");
    expect(value.style.color).toBe("var(--indigo)");
  });

  it("uses sage color when specified", () => {
    render(<StatCard value="2" label="Test" color="sage" />);
    expect(screen.getByText("2").style.color).toBe("var(--sage)");
  });

  it("uses rose color when specified", () => {
    render(<StatCard value="3" label="Test" color="rose" />);
    expect(screen.getByText("3").style.color).toBe("var(--rose)");
  });

  it("uses amber color when specified", () => {
    render(<StatCard value="4" label="Test" color="amber" />);
    expect(screen.getByText("4").style.color).toBe("var(--amber)");
  });

  it("applies background based on color", () => {
    const { container } = render(<StatCard value="X" label="Test" color="sage" />);
    const card = container.firstChild as HTMLElement;
    expect(card.style.background).toBe("var(--sage-pale)");
  });
});

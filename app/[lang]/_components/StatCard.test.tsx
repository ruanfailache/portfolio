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
    render(<StatCard value="1" label="Test" />);
    expect(screen.getByText("1")).toHaveClass("text-indigo");
  });

  it("uses sage color when specified", () => {
    render(<StatCard value="2" label="Test" color="sage" />);
    expect(screen.getByText("2")).toHaveClass("text-sage");
  });

  it("uses rose color when specified", () => {
    render(<StatCard value="3" label="Test" color="rose" />);
    expect(screen.getByText("3")).toHaveClass("text-rose");
  });

  it("uses amber color when specified", () => {
    render(<StatCard value="4" label="Test" color="amber" />);
    expect(screen.getByText("4")).toHaveClass("text-amber");
  });

  it("applies background based on color", () => {
    const { container } = render(<StatCard value="X" label="Test" color="sage" />);
    expect(container.firstChild as HTMLElement).toHaveClass("bg-sage-pale");
  });
});

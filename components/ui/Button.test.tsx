// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PrimaryButton, GhostButton } from "@/components/ui/Button";

describe("PrimaryButton", () => {
  it("renders children", () => {
    render(<PrimaryButton>Click me</PrimaryButton>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<PrimaryButton onClick={onClick}>Press</PrimaryButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("has hover brightness class", () => {
    render(<PrimaryButton>Hover</PrimaryButton>);
    expect(screen.getByRole("button")).toHaveClass("hover:brightness-90");
  });

  it("merges custom style", () => {
    render(<PrimaryButton style={{ padding: "5px 10px" }}>Styled</PrimaryButton>);
    const btn = screen.getByRole("button");
    expect(btn.style.padding).toBe("5px 10px");
  });
});

describe("GhostButton", () => {
  it("renders children", () => {
    render(<GhostButton>Ghost</GhostButton>);
    expect(screen.getByRole("button", { name: /ghost/i })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<GhostButton onClick={onClick}>Ghost</GhostButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("has hover indigo border class", () => {
    render(<GhostButton>Ghost</GhostButton>);
    expect(screen.getByRole("button")).toHaveClass("hover:border-indigo");
  });
});

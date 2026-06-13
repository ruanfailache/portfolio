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

  it("applies filter brightness on mouse enter", () => {
    render(<PrimaryButton>Hover</PrimaryButton>);
    const btn = screen.getByRole("button");
    fireEvent.mouseEnter(btn);
    expect(btn.style.filter).toBe("brightness(0.9)");
  });

  it("resets filter on mouse leave", () => {
    render(<PrimaryButton>Hover</PrimaryButton>);
    const btn = screen.getByRole("button");
    fireEvent.mouseEnter(btn);
    fireEvent.mouseLeave(btn);
    expect(btn.style.filter).toBe("none");
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

  it("sets indigo border on mouse enter", () => {
    render(<GhostButton>Ghost</GhostButton>);
    const btn = screen.getByRole("button");
    fireEvent.mouseEnter(btn);
    expect(btn.style.borderColor).toBe("var(--indigo)");
  });

  it("resets border color on mouse leave", () => {
    render(<GhostButton>Ghost</GhostButton>);
    const btn = screen.getByRole("button");
    fireEvent.mouseEnter(btn);
    fireEvent.mouseLeave(btn);
    expect(btn.style.borderColor).toBe("var(--border)");
  });
});

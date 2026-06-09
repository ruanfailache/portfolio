// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "@/components/ui/Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Hello</Card>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Card className="my-class">content</Card>);
    // getByText returns the Card div itself (the element containing the text)
    expect(screen.getByText("content")).toHaveClass("my-class");
  });

  it("does not change transform on hover when hoverable is not set", () => {
    render(<Card>static</Card>);
    const el = screen.getByText("static");
    fireEvent.mouseEnter(el);
    expect(el.style.transform).toBe("none");
  });

  it("applies translateY on hover and resets on leave when hoverable", () => {
    render(<Card hoverable>card</Card>);
    const el = screen.getByText("card");
    expect(el.style.transform).toBe("none");
    fireEvent.mouseEnter(el);
    expect(el.style.transform).toBe("translateY(-3px)");
    fireEvent.mouseLeave(el);
    expect(el.style.transform).toBe("none");
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Card onClick={onClick}>click me</Card>);
    fireEvent.click(screen.getByText("click me"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("sets cursor pointer when onClick is provided", () => {
    render(<Card onClick={vi.fn()}>clickable</Card>);
    expect(screen.getByText("clickable").style.cursor).toBe("pointer");
  });

  it("does not set cursor when onClick is not provided", () => {
    render(<Card>no click</Card>);
    expect(screen.getByText("no click").style.cursor).toBe("");
  });
});

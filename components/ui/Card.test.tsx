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

  it("does not have hover translate class when hoverable is not set", () => {
    render(<Card>static</Card>);
    expect(screen.getByText("static")).not.toHaveClass("hover:-translate-y-[3px]");
  });

  it("has hover translate class when hoverable is set", () => {
    render(<Card hoverable>card</Card>);
    expect(screen.getByText("card")).toHaveClass("hover:-translate-y-[3px]");
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Card onClick={onClick}>click me</Card>);
    fireEvent.click(screen.getByText("click me"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("sets cursor pointer when hoverable", () => {
    render(<Card hoverable>clickable</Card>);
    expect(screen.getByText("clickable")).toHaveClass("cursor-pointer");
  });

  it("does not set cursor when onClick is not provided", () => {
    render(<Card>no click</Card>);
    expect(screen.getByText("no click").style.cursor).toBe("");
  });
});

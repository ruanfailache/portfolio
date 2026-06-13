// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PrintButton from "@/app/[lang]/resume/_components/PrintButton";

beforeEach(() => {
  window.print = vi.fn();
});

describe("PrintButton", () => {
  it("renders the label", () => {
    render(<PrintButton label="Print Resume" />);
    expect(screen.getByText("Print Resume")).toBeInTheDocument();
  });

  it("renders a button element", () => {
    render(<PrintButton label="Print" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls window.print on click", () => {
    render(<PrintButton label="Print" />);
    fireEvent.click(screen.getByRole("button"));
    expect(window.print).toHaveBeenCalledOnce();
  });

  it("renders the printer svg icon", () => {
    const { container } = render(<PrintButton label="Print" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});

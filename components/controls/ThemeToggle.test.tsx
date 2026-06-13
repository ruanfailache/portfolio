// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ThemeToggle from "@/components/controls/ThemeToggle";

const ariaLabels = { toLight: "Switch to light", toDark: "Switch to dark" };

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn((query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe("ThemeToggle", () => {
  it("renders a button", () => {
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("defaults to light theme when localStorage is empty and matchMedia returns false", () => {
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    expect(screen.getByRole("button", { name: ariaLabels.toDark })).toBeInTheDocument();
  });

  it("reads dark theme from localStorage on mount", () => {
    localStorage.setItem("rf-theme", "dark");
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    expect(screen.getByRole("button", { name: ariaLabels.toLight })).toBeInTheDocument();
  });

  it("falls back to matchMedia dark when localStorage is empty", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => ({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    });
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    expect(screen.getByRole("button", { name: ariaLabels.toLight })).toBeInTheDocument();
  });

  it("toggles from light to dark on click", () => {
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    fireEvent.click(screen.getByRole("button", { name: ariaLabels.toDark }));
    expect(screen.getByRole("button", { name: ariaLabels.toLight })).toBeInTheDocument();
  });

  it("toggles from dark to light on second click", () => {
    localStorage.setItem("rf-theme", "dark");
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    fireEvent.click(screen.getByRole("button", { name: ariaLabels.toLight }));
    expect(screen.getByRole("button", { name: ariaLabels.toDark })).toBeInTheDocument();
  });

  it("persists theme to localStorage on toggle", () => {
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    fireEvent.click(screen.getByRole("button", { name: ariaLabels.toDark }));
    expect(localStorage.getItem("rf-theme")).toBe("dark");
    fireEvent.click(screen.getByRole("button", { name: ariaLabels.toLight }));
    expect(localStorage.getItem("rf-theme")).toBe("light");
  });

  it("sets data-theme on documentElement on toggle", () => {
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    fireEvent.click(screen.getByRole("button", { name: ariaLabels.toDark }));
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    fireEvent.click(screen.getByRole("button", { name: ariaLabels.toLight }));
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("updates theme when matchMedia fires a change event and no localStorage preference is set", () => {
    let changeHandler: ((e: { matches: boolean }) => void) | null = null;
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => ({
        matches: false,
        addEventListener: (_: string, cb: (e: { matches: boolean }) => void) => {
          changeHandler = cb;
        },
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    });
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    act(() => {
      changeHandler?.({ matches: true });
    });
    expect(screen.getByRole("button", { name: ariaLabels.toLight })).toBeInTheDocument();
  });

  it("ignores matchMedia change event when localStorage preference is set", () => {
    localStorage.setItem("rf-theme", "light");
    let changeHandler: ((e: { matches: boolean }) => void) | null = null;
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => ({
        matches: false,
        addEventListener: (_: string, cb: (e: { matches: boolean }) => void) => {
          changeHandler = cb;
        },
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    });
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    act(() => {
      changeHandler?.({ matches: true });
    });
    // Still light because localStorage preference is set
    expect(screen.getByRole("button", { name: ariaLabels.toDark })).toBeInTheDocument();
  });

  it("changes button color on mouse enter and resets on mouse leave", () => {
    render(<ThemeToggle ariaLabels={ariaLabels} />);
    const btn = screen.getByRole("button", { name: ariaLabels.toDark });
    fireEvent.mouseEnter(btn);
    expect(btn.style.color).toBe("var(--indigo)");
    fireEvent.mouseLeave(btn);
    expect(btn.style.color).toBe("var(--fg-mid)");
  });

  it("removes matchMedia listener on unmount", () => {
    const removeEventListener = vi.fn();
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => ({
        matches: false,
        addEventListener: vi.fn(),
        removeEventListener,
        dispatchEvent: vi.fn(),
      }),
    });
    const { unmount } = render(<ThemeToggle ariaLabels={ariaLabels} />);
    unmount();
    expect(removeEventListener).toHaveBeenCalled();
  });
});

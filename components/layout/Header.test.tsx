// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Header from "@/components/layout/Header";
import { getContent } from "@/lib/i18n";

const push = vi.fn();
let mockPathname = "/en";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
  usePathname: () => mockPathname,
}));

const content = getContent("en");

beforeEach(() => {
  push.mockClear();
  mockPathname = "/en";
  window.innerWidth = 1024;
  Object.defineProperty(window, "scrollY", { value: 0, writable: true, configurable: true });
});

describe("Header", () => {
  it("renders the logo initial", () => {
    render(<Header content={content} locale="en" />);
    expect(screen.getByText("R")).toBeInTheDocument();
  });

  it("renders brand name on desktop", () => {
    render(<Header content={content} locale="en" />);
    expect(screen.getByText("Ruan Failache")).toBeInTheDocument();
  });

  it("renders all nav page labels", () => {
    render(<Header content={content} locale="en" />);
    for (const page of ["Home", "Work", "Blog", "Contact"]) {
      expect(screen.getByText(content.ui.nav[page])).toBeInTheDocument();
    }
  });

  it("marks Home as active on the home path", () => {
    mockPathname = "/en";
    render(<Header content={content} locale="en" />);
    const homeLink = screen.getByText(content.ui.nav["Home"]).closest("a");
    expect(homeLink).toHaveAttribute("aria-current", "page");
  });

  it("does not mark Work as active on home path", () => {
    mockPathname = "/en";
    render(<Header content={content} locale="en" />);
    const workLink = screen.getByText(content.ui.nav["Work"]).closest("a");
    expect(workLink).not.toHaveAttribute("aria-current", "page");
  });

  it("marks Work as active when pathname starts with /en/work", () => {
    mockPathname = "/en/work/project-x";
    render(<Header content={content} locale="en" />);
    const workLink = screen.getByText(content.ui.nav["Work"]).closest("a");
    expect(workLink).toHaveAttribute("aria-current", "page");
  });

  it("does not mark Home as active when on work page", () => {
    mockPathname = "/en/work";
    render(<Header content={content} locale="en" />);
    const homeLink = screen.getByText(content.ui.nav["Home"]).closest("a");
    expect(homeLink).not.toHaveAttribute("aria-current", "page");
  });

  it("renders the hire me button on desktop", () => {
    render(<Header content={content} locale="en" />);
    expect(screen.getByText(content.ui.hireMe)).toBeInTheDocument();
  });

  it("renders the resume link on desktop", () => {
    render(<Header content={content} locale="en" />);
    expect(screen.getByText(content.ui.resumeNav)).toBeInTheDocument();
  });

  it("hides brand text and hire me button on mobile", () => {
    window.innerWidth = 400;
    render(<Header content={content} locale="en" />);
    act(() => {
      fireEvent(window, new Event("resize"));
    });
    expect(screen.queryByText("Ruan Failache")).not.toBeInTheDocument();
    expect(screen.queryByText(content.ui.hireMe)).not.toBeInTheDocument();
  });

  it("adds scroll shadow when scrolled past 8px", () => {
    const { container } = render(<Header content={content} locale="en" />);
    const header = container.querySelector("header")!;
    expect(header).toHaveClass("shadow-none");
    act(() => {
      Object.defineProperty(window, "scrollY", { value: 20, writable: true, configurable: true });
      fireEvent.scroll(window);
    });
    expect(header).not.toHaveClass("shadow-none");
  });
});

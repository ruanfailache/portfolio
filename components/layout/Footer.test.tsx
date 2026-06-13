// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/layout/Footer";
import { getContent } from "@/lib/i18n";

const content = getContent("en");

describe("Footer", () => {
  it("renders the brand name", () => {
    render(<Footer content={content} locale="en" />);
    expect(screen.getByText("Ruan Failache")).toBeInTheDocument();
  });

  it("renders all nav page links", () => {
    render(<Footer content={content} locale="en" />);
    const pages = ["Home", "Work", "Blog", "Contact"];
    for (const page of pages) {
      expect(screen.getByText(content.ui.nav[page])).toBeInTheDocument();
    }
  });

  it("renders the resume link", () => {
    render(<Footer content={content} locale="en" />);
    expect(screen.getByText(content.ui.resumeNav)).toBeInTheDocument();
  });

  it("renders the LinkedIn social link", () => {
    render(<Footer content={content} locale="en" />);
    const link = screen.getByRole("link", { name: /linkedin/i });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toContain("linkedin.com");
  });

  it("renders the GitHub social link", () => {
    render(<Footer content={content} locale="en" />);
    const link = screen.getByRole("link", { name: /github/i });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toContain("github.com");
  });

  it("renders the copyright text", () => {
    render(<Footer content={content} locale="en" />);
    expect(screen.getByText(content.ui.footerCopyright)).toBeInTheDocument();
  });

  it("renders the open to work text", () => {
    render(<Footer content={content} locale="en" />);
    expect(screen.getByText(content.ui.footerOpenToWork)).toBeInTheDocument();
  });

  it("nav links use the correct locale prefix", () => {
    render(<Footer content={content} locale="en" />);
    const homeLink = screen.getByText(content.ui.nav["Home"]).closest("a");
    expect(homeLink?.getAttribute("href")).toBe("/en");
  });

  it("renders with pt locale", () => {
    const ptContent = getContent("pt");
    render(<Footer content={ptContent} locale="pt" />);
    const homeLink = screen.getByText(ptContent.ui.nav["Home"]).closest("a");
    expect(homeLink?.getAttribute("href")).toBe("/pt");
  });
});

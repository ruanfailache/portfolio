// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/app/[lang]/_components/Hero";
import { getContent, CLIENTS } from "@/lib/i18n";

const content = getContent("en");

describe("Hero", () => {
  it("renders the hero name", () => {
    render(<Hero content={content} locale="en" />);
    // Name is split: "Ruan" text node + <br> + <span>Failache</span>
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.textContent).toContain("Ruan");
    expect(h1.textContent).toContain("Failache");
  });

  it("renders the hero role", () => {
    render(<Hero content={content} locale="en" />);
    expect(screen.getByText(content.role)).toBeInTheDocument();
  });

  it("renders the view my work link", () => {
    render(<Hero content={content} locale="en" />);
    expect(screen.getByText(content.ui.viewMyWork)).toBeInTheDocument();
  });

  it("renders the lets talk link", () => {
    render(<Hero content={content} locale="en" />);
    expect(screen.getByText(content.ui.letsTalk)).toBeInTheDocument();
  });

  it("renders LinkedIn social link", () => {
    render(<Hero content={content} locale="en" />);
    const linkedinLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")?.includes("linkedin"));
    expect(linkedinLinks.length).toBeGreaterThan(0);
  });

  it("renders GitHub social link", () => {
    render(<Hero content={content} locale="en" />);
    const githubLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")?.includes("github"));
    expect(githubLinks.length).toBeGreaterThan(0);
  });

  it("renders hero tags", () => {
    render(<Hero content={content} locale="en" />);
    for (const tag of content.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument();
    }
  });

  it("renders hero stats values", () => {
    render(<Hero content={content} locale="en" />);
    for (const stat of content.heroStats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
    }
  });

  it("renders hero stats labels", () => {
    render(<Hero content={content} locale="en" />);
    for (const stat of content.heroStats) {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    }
  });

  it("renders delivered at label", () => {
    render(<Hero content={content} locale="en" />);
    expect(screen.getByText(content.ui.deliveredAt)).toBeInTheDocument();
  });
});

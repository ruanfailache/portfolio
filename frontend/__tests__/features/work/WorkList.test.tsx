// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WorkList from "@/features/work/WorkList";
import { getContent } from "@/lib/i18n";

const content = getContent("en");

describe("WorkList", () => {
  it("renders the work section heading", () => {
    render(<WorkList content={content} locale="en" />);
    expect(screen.getByText(content.ui.workTitle)).toBeInTheDocument();
  });

  it("renders the work kicker label", () => {
    render(<WorkList content={content} locale="en" />);
    expect(screen.getByText(content.ui.workKicker)).toBeInTheDocument();
  });

  it("renders the tech stack heading", () => {
    render(<WorkList content={content} locale="en" />);
    expect(screen.getByText(content.ui.techStack)).toBeInTheDocument();
  });

  it("renders all stack group labels", () => {
    render(<WorkList content={content} locale="en" />);
    for (const group of content.stack) {
      expect(screen.getByText(group.label)).toBeInTheDocument();
    }
  });

  it("renders the selected work heading", () => {
    render(<WorkList content={content} locale="en" />);
    expect(screen.getByText(content.ui.selectedWork)).toBeInTheDocument();
  });

  it("renders all client projects", () => {
    render(<WorkList content={content} locale="en" />);
    for (const p of content.projects) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
  });

  it("renders side projects section when present", () => {
    if (content.sideProjects.length > 0) {
      render(<WorkList content={content} locale="en" />);
      expect(screen.getByText(content.ui.sideProjectsTitle)).toBeInTheDocument();
      for (const p of content.sideProjects) {
        expect(screen.getByText(p.title)).toBeInTheDocument();
      }
    }
  });

  it("project cards link with locale prefix", () => {
    render(<WorkList content={content} locale="en" />);
    const projectLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")?.startsWith("/en/work/"));
    expect(projectLinks.length).toBeGreaterThan(0);
  });
});

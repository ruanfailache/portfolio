// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WorkList from "@/features/work/WorkList";
import { getContent } from "@/lib/i18n";

const content = getContent("en");

const projects = [
  {
    title: "Client Project A",
    company: "Company A",
    status: "Active",
    color: "indigo" as const,
    desc: "Description A",
    tags: ["Angular", "Java"],
    slug: "project-a",
  },
  {
    title: "Client Project B",
    company: "Company B",
    status: "Completed",
    color: "sage" as const,
    desc: "Description B",
    tags: ["React"],
    slug: "project-b",
  },
];

const sideProjects = [
  {
    title: "Side Project X",
    slug: "side-x",
    status: "Shipped",
    color: "amber" as const,
    desc: "Side description X",
    tags: ["Python"],
  },
];

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

  it("renders empty state when no projects provided", () => {
    render(<WorkList content={content} locale="en" />);
    expect(screen.getAllByText(content.ui.noProjects).length).toBe(2);
  });

  it("renders all client projects when provided", () => {
    render(<WorkList content={content} locale="en" projects={projects} sideProjects={[]} />);
    for (const p of projects) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
  });

  it("renders side projects section when provided", () => {
    render(<WorkList content={content} locale="en" projects={projects} sideProjects={sideProjects} />);
    expect(screen.getByText(content.ui.sideProjectsTitle)).toBeInTheDocument();
    for (const p of sideProjects) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
  });

  it("project cards link with locale prefix", () => {
    render(<WorkList content={content} locale="en" projects={projects} sideProjects={[]} />);
    const projectLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")?.startsWith("/en/work/"));
    expect(projectLinks.length).toBeGreaterThan(0);
  });
});

// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "@/features/work/ProjectCard";
import { getContent } from "@/lib/i18n";

const content = getContent("en");
const project = content.projects[0];
const sideProject = content.sideProjects[0];

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(<ProjectCard project={project} href="/en/work/test" ui={content.ui} />);
    expect(screen.getByText(project.title)).toBeInTheDocument();
  });

  it("renders the project status", () => {
    render(<ProjectCard project={project} href="/en/work/test" ui={content.ui} />);
    expect(screen.getByText(project.status)).toBeInTheDocument();
  });

  it("renders the company name for client projects", () => {
    render(<ProjectCard project={project} href="/en/work/test" ui={content.ui} />);
    expect(screen.getByText(project.company)).toBeInTheDocument();
  });

  it("renders the view case label", () => {
    render(<ProjectCard project={project} href="/en/work/test" ui={content.ui} />);
    expect(screen.getByText(content.ui.viewCase)).toBeInTheDocument();
  });

  it("renders a link to the correct href", () => {
    render(<ProjectCard project={project} href="/en/work/test" ui={content.ui} />);
    expect(screen.getByRole("link").getAttribute("href")).toBe("/en/work/test");
  });

  it("renders project tags", () => {
    render(<ProjectCard project={project} href="/en/work/test" ui={content.ui} />);
    for (const tag of project.tags.slice(0, 5)) {
      expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
    }
  });

  it("does not render company for side projects", () => {
    if (sideProject) {
      render(<ProjectCard project={sideProject} href="/en/work/side" ui={content.ui} />);
      expect(screen.queryByText((sideProject as { company?: string }).company ?? "__none__")).not.toBeInTheDocument();
    }
  });
});

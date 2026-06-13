// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CaseStudy from "@/app/[lang]/work/_components/CaseStudy";
import { getContent } from "@/lib/i18n";

const content = getContent("en");

const project = {
  title: "Test Project",
  company: "Test Company",
  status: "Active",
  color: "indigo" as const,
  desc: "A test project description.",
  outcome: "Great results",
  tags: ["React", "TypeScript"],
  slug: "test-project",
};

const nextProject = {
  title: "Next Project",
  company: "Next Company",
  status: "Completed",
  color: "sage" as const,
  desc: "The next project.",
  tags: ["Angular"],
  slug: "next-project",
};

describe("CaseStudy", () => {
  it("renders the project title", () => {
    render(<CaseStudy project={project} backHref="/en/work" content={content} />);
    expect(screen.getByRole("heading", { name: project.title })).toBeInTheDocument();
  });

  it("renders the back to work link", () => {
    render(<CaseStudy project={project} backHref="/en/work" content={content} />);
    const backLink = screen.getByText(new RegExp(content.ui.backToWork));
    expect(backLink.closest("a")?.getAttribute("href")).toBe("/en/work");
  });

  it("renders the project description", () => {
    render(<CaseStudy project={project} backHref="/en/work" content={content} />);
    expect(screen.getByText(project.desc)).toBeInTheDocument();
  });

  it("renders the case study label", () => {
    render(<CaseStudy project={project} backHref="/en/work" content={content} />);
    expect(screen.getByText(content.ui.caseStudy)).toBeInTheDocument();
  });

  it("renders the project status", () => {
    render(<CaseStudy project={project} backHref="/en/work" content={content} />);
    expect(screen.getAllByText(project.status).length).toBeGreaterThan(0);
  });

  it("renders company for client projects", () => {
    render(<CaseStudy project={project} backHref="/en/work" content={content} />);
    expect(screen.getByText(project.company)).toBeInTheDocument();
  });

  it("renders outcome when present", () => {
    render(<CaseStudy project={project} backHref="/en/work" content={content} />);
    expect(screen.getByText(project.outcome)).toBeInTheDocument();
  });

  it("renders the project tags in the stack sidebar", () => {
    render(<CaseStudy project={project} backHref="/en/work" content={content} />);
    expect(screen.getByText(content.ui.theStack)).toBeInTheDocument();
  });

  it("renders next project section when provided", () => {
    render(
      <CaseStudy
        project={project}
        backHref="/en/work"
        content={content}
        nextProject={nextProject}
        nextHref="/en/work/next"
      />
    );
    expect(screen.getByText(content.ui.nextProject)).toBeInTheDocument();
    expect(screen.getByText(nextProject.title)).toBeInTheDocument();
  });

  it("does not render next project section when not provided", () => {
    render(<CaseStudy project={project} backHref="/en/work" content={content} />);
    expect(screen.queryByText(content.ui.nextProject)).not.toBeInTheDocument();
  });
});

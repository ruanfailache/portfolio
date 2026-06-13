// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ResumeDoc from "@/app/[lang]/curriculum/_components/ResumeDoc";
import { getContent } from "@/lib/i18n";

const content = getContent("en");

describe("ResumeDoc", () => {
  it("renders the full name", () => {
    render(<ResumeDoc content={content} />);
    expect(screen.getByRole("heading", { name: content.name })).toBeInTheDocument();
  });

  it("renders the role/title", () => {
    render(<ResumeDoc content={content} />);
    // Role appears in header (indigo) and potentially in experience entries
    expect(screen.getAllByText(content.role).length).toBeGreaterThan(0);
  });

  it("renders the contact email", () => {
    render(<ResumeDoc content={content} />);
    expect(screen.getAllByText(content.contact.email).length).toBeGreaterThan(0);
  });

  it("renders the contact location", () => {
    render(<ResumeDoc content={content} />);
    expect(screen.getByText(content.contact.location)).toBeInTheDocument();
  });

  it("renders the summary section label", () => {
    render(<ResumeDoc content={content} />);
    expect(screen.getByText(content.ui.resume.summary)).toBeInTheDocument();
  });

  it("renders the intro text", () => {
    render(<ResumeDoc content={content} />);
    expect(screen.getByText(content.intro)).toBeInTheDocument();
  });

  it("renders the experience section label", () => {
    render(<ResumeDoc content={content} />);
    expect(screen.getByText(content.ui.resume.experience)).toBeInTheDocument();
  });

  it("renders all experience entries", () => {
    render(<ResumeDoc content={content} />);
    for (const entry of content.experience) {
      expect(screen.getByText(entry.period)).toBeInTheDocument();
    }
  });

  it("renders the skills section label", () => {
    render(<ResumeDoc content={content} />);
    expect(screen.getByText(content.ui.resume.skills)).toBeInTheDocument();
  });

  it("renders all stack group labels in skills", () => {
    render(<ResumeDoc content={content} />);
    for (const group of content.stack) {
      expect(screen.getAllByText(group.label).length).toBeGreaterThan(0);
    }
  });

  it("renders the resume-doc class for print targeting", () => {
    const { container } = render(<ResumeDoc content={content} />);
    expect(container.querySelector(".resume-doc")).toBeInTheDocument();
  });
});

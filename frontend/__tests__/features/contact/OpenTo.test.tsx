// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import OpenTo from "@/features/contact/OpenTo";
import { getContent } from "@/lib/i18n";

const content = getContent("en");

describe("OpenTo", () => {
  it("renders the open to heading", () => {
    render(<OpenTo content={content} />);
    expect(screen.getByText(content.ui.openTo)).toBeInTheDocument();
  });

  it("renders all openToItems labels", () => {
    render(<OpenTo content={content} />);
    for (const item of content.ui.openToItems) {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    }
  });

  it("renders all openToItems notes", () => {
    render(<OpenTo content={content} />);
    for (const item of content.ui.openToItems) {
      expect(screen.getByText(item.note)).toBeInTheDocument();
    }
  });

  it("renders the find me heading", () => {
    render(<OpenTo content={content} />);
    expect(screen.getByText(content.ui.findMe)).toBeInTheDocument();
  });

  it("renders the email link", () => {
    render(<OpenTo content={content} />);
    const emailLink = screen
      .getAllByRole("link")
      .find((l) => l.getAttribute("href")?.startsWith("mailto:"));
    expect(emailLink).toBeDefined();
  });

  it("renders the LinkedIn link", () => {
    render(<OpenTo content={content} />);
    const linkedinLink = screen
      .getAllByRole("link")
      .find((l) => l.getAttribute("href")?.includes("linkedin"));
    expect(linkedinLink).toBeDefined();
  });

  it("renders the GitHub link", () => {
    render(<OpenTo content={content} />);
    const githubLink = screen
      .getAllByRole("link")
      .find((l) => l.getAttribute("href")?.includes("github"));
    expect(githubLink).toBeDefined();
  });

  it("renders location as plain text (no link)", () => {
    render(<OpenTo content={content} />);
    expect(screen.getByText(content.contact.location)).toBeInTheDocument();
    const el = screen.getByText(content.contact.location);
    expect(el.tagName).not.toBe("A");
  });
});

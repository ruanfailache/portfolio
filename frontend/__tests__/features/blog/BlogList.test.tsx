// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogList from "@/features/blog/BlogList";
import { getContent } from "@/lib/i18n";

const content = getContent("en");

describe("BlogList", () => {
  it("renders the blog kicker label", () => {
    render(<BlogList content={content} locale="en" />);
    expect(screen.getByText(content.ui.blogKicker)).toBeInTheDocument();
  });

  it("renders the blog title", () => {
    render(<BlogList content={content} locale="en" />);
    expect(screen.getByText(content.ui.blogTitle)).toBeInTheDocument();
  });

  it("renders the blog subtitle", () => {
    render(<BlogList content={content} locale="en" />);
    expect(screen.getByText(content.ui.blogSubtitle)).toBeInTheDocument();
  });

  it("renders a card for each post", () => {
    render(<BlogList content={content} locale="en" />);
    for (const post of content.posts) {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    }
  });

  it("renders post links with locale prefix", () => {
    render(<BlogList content={content} locale="en" />);
    const postLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")?.startsWith("/en/blog/"));
    expect(postLinks.length).toBe(content.posts.length);
  });
});

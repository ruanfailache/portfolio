// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LatestPosts from "@/features/home/LatestPosts";
import { getContent } from "@/lib/i18n";

const content = getContent("en");

describe("LatestPosts", () => {
  it("renders the section label", () => {
    render(<LatestPosts content={content} locale="en" />);
    expect(screen.getByText(content.ui.fromTheBlog)).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<LatestPosts content={content} locale="en" />);
    expect(screen.getByText(content.ui.latestWriting)).toBeInTheDocument();
  });

  it("renders the read all link", () => {
    render(<LatestPosts content={content} locale="en" />);
    const link = screen.getByText(content.ui.readAll).closest("a");
    expect(link?.getAttribute("href")).toBe("/en/blog");
  });

  it("renders at most 3 posts", () => {
    render(<LatestPosts content={content} locale="en" />);
    const postLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")?.includes("/en/blog/"));
    expect(postLinks.length).toBeLessThanOrEqual(3);
  });

  it("renders post titles", () => {
    const preview = content.posts.slice(0, 3);
    render(<LatestPosts content={content} locale="en" />);
    for (const post of preview) {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    }
  });

  it("renders post tags", () => {
    const preview = content.posts.slice(0, 3);
    render(<LatestPosts content={content} locale="en" />);
    for (const post of preview) {
      expect(screen.getAllByText(post.tag).length).toBeGreaterThan(0);
    }
  });

  it("renders read post labels", () => {
    render(<LatestPosts content={content} locale="en" />);
    const readLabels = screen.getAllByText(content.ui.readPost);
    expect(readLabels.length).toBeGreaterThan(0);
  });
});

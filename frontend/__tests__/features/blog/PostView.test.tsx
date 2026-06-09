// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PostView from "@/features/blog/PostView";
import { getContent } from "@/lib/i18n";
import { mockPost as post } from "../../fixtures/post";

const content = getContent("en");

describe("PostView", () => {
  it("renders the post title", () => {
    render(<PostView post={post} content={content} locale="en" />);
    expect(screen.getByRole("heading", { name: post.title })).toBeInTheDocument();
  });

  it("renders the post tag", () => {
    render(<PostView post={post} content={content} locale="en" />);
    expect(screen.getByText(post.tag)).toBeInTheDocument();
  });

  it("renders the post summary", () => {
    render(<PostView post={post} content={content} locale="en" />);
    expect(screen.getByText(post.summary)).toBeInTheDocument();
  });

  it("renders the back to posts link", () => {
    render(<PostView post={post} content={content} locale="en" />);
    const backLink = screen.getByText(new RegExp(content.ui.backToPosts));
    expect(backLink.closest("a")?.getAttribute("href")).toBe("/en/blog");
  });

  it("renders the author name", () => {
    render(<PostView post={post} content={content} locale="en" />);
    expect(screen.getByText("Ruan Failache")).toBeInTheDocument();
  });

  it("renders work with me button linking to contact", () => {
    render(<PostView post={post} content={content} locale="en" />);
    const link = screen.getByText(content.ui.workWithMe).closest("a");
    expect(link?.getAttribute("href")).toBe("/en/contact");
  });

  it("renders body paragraph blocks", () => {
    const paragraphBlocks = post.body.filter((b) => b.p);
    if (paragraphBlocks.length > 0) {
      render(<PostView post={post} content={content} locale="en" />);
      expect(screen.getByText(paragraphBlocks[0].p!)).toBeInTheDocument();
    }
  });

  it("renders body heading blocks", () => {
    const headingBlocks = post.body.filter((b) => b.h);
    if (headingBlocks.length > 0) {
      render(<PostView post={post} content={content} locale="en" />);
      expect(screen.getByText(headingBlocks[0].h!)).toBeInTheDocument();
    }
  });
});

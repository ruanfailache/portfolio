// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PostCard from "@/app/[lang]/blog/_components/PostCard";
import { mockPost as post } from "@/test/fixtures/post";

describe("PostCard", () => {
  it("renders the post title", () => {
    render(<PostCard post={post} locale="en" readLabel="Read post" />);
    expect(screen.getByText(post.title)).toBeInTheDocument();
  });

  it("renders the post tag", () => {
    render(<PostCard post={post} locale="en" readLabel="Read post" />);
    expect(screen.getByText(post.tag)).toBeInTheDocument();
  });

  it("renders the post date", () => {
    render(<PostCard post={post} locale="en" readLabel="Read post" />);
    expect(screen.getByText(new RegExp(post.date))).toBeInTheDocument();
  });

  it("renders the read label", () => {
    render(<PostCard post={post} locale="en" readLabel="Read more" />);
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });

  it("links to the correct post url", () => {
    render(<PostCard post={post} locale="en" readLabel="Read" />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe(`/en/blog/${post.slug ?? ""}`);
  });

  it("renders full summary when not compact", () => {
    render(<PostCard post={post} locale="en" readLabel="Read" compact={false} />);
    expect(screen.getByText(post.summary)).toBeInTheDocument();
  });

  it("renders truncated summary when compact", () => {
    render(<PostCard post={post} locale="en" readLabel="Read" compact={true} />);
    const truncated = post.summary.slice(0, 110) + "…";
    expect(screen.getByText(truncated)).toBeInTheDocument();
  });
});

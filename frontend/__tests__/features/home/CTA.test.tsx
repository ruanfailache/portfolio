// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CTA from "@/features/home/CTA";
import { getContent } from "@/lib/i18n";

const content = getContent("en");

describe("CTA", () => {
  it("renders the kicker text", () => {
    render(<CTA content={content} locale="en" />);
    expect(screen.getByText(content.ui.ctaKicker)).toBeInTheDocument();
  });

  it("renders the CTA title", () => {
    render(<CTA content={content} locale="en" />);
    expect(screen.getByText(content.ui.ctaTitle)).toBeInTheDocument();
  });

  it("renders the CTA body text", () => {
    render(<CTA content={content} locale="en" />);
    expect(screen.getByText(content.ui.ctaBody)).toBeInTheDocument();
  });

  it("renders the get in touch button linking to contact", () => {
    render(<CTA content={content} locale="en" />);
    const link = screen.getByText(content.ui.getInTouch).closest("a");
    expect(link?.getAttribute("href")).toBe("/en/contact");
  });

  it("renders the email address", () => {
    render(<CTA content={content} locale="en" />);
    expect(screen.getByText("ruanfailache@gmail.com")).toBeInTheDocument();
  });

  it("email link uses mailto", () => {
    render(<CTA content={content} locale="en" />);
    const emailLink = screen.getByText("ruanfailache@gmail.com").closest("a");
    expect(emailLink?.getAttribute("href")).toBe("mailto:ruanfailache@gmail.com");
  });
});

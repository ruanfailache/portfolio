// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Capabilities from "@/features/home/Capabilities";
import { getContent } from "@/lib/i18n";

const content = getContent("en");

describe("Capabilities", () => {
  it("renders the section label", () => {
    render(<Capabilities content={content} />);
    expect(screen.getByText(content.ui.whatIDo)).toBeInTheDocument();
  });

  it("renders the section title", () => {
    render(<Capabilities content={content} />);
    expect(screen.getByText(content.ui.whatIDoTitle)).toBeInTheDocument();
  });

  it("renders the intro text", () => {
    render(<Capabilities content={content} />);
    expect(screen.getByText(content.intro)).toBeInTheDocument();
  });

  it("renders all capabilities titles", () => {
    render(<Capabilities content={content} />);
    for (const cap of content.capabilities) {
      expect(screen.getByText(cap.title)).toBeInTheDocument();
    }
  });

  it("renders capability labels", () => {
    render(<Capabilities content={content} />);
    for (const cap of content.capabilities) {
      expect(screen.getByText(cap.label)).toBeInTheDocument();
    }
  });

  it("renders capability descriptions", () => {
    render(<Capabilities content={content} />);
    for (const cap of content.capabilities) {
      expect(screen.getByText(cap.desc)).toBeInTheDocument();
    }
  });
});

// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionHeading from "@/components/ui/SectionHeading";

describe("SectionHeading", () => {
  it("renders the title", () => {
    render(<SectionHeading title="My Title" />);
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("renders the label when provided", () => {
    render(<SectionHeading title="Title" label="Kicker" />);
    expect(screen.getByText("Kicker")).toBeInTheDocument();
  });

  it("does not render a label element when label is omitted", () => {
    render(<SectionHeading title="Title" />);
    expect(screen.queryByText("Kicker")).not.toBeInTheDocument();
  });

  it("renders the subtitle when provided", () => {
    render(<SectionHeading title="Title" subtitle="A subtitle here" />);
    expect(screen.getByText("A subtitle here")).toBeInTheDocument();
  });

  it("does not render subtitle when omitted", () => {
    render(<SectionHeading title="Title" />);
    expect(screen.queryByText("A subtitle here")).not.toBeInTheDocument();
  });

  it("renders title and subtitle together", () => {
    render(<SectionHeading title="T" label="L" subtitle="S" />);
    expect(screen.getByText("T")).toBeInTheDocument();
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("S")).toBeInTheDocument();
  });
});

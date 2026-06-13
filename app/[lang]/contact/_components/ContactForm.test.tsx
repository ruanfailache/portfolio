// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "@/app/[lang]/contact/_components/ContactForm";
import { getContent } from "@/lib/i18n";

const ui = getContent("en").ui;

beforeEach(() => {
  delete (window as never as { location: unknown }).location;
  (window as never as { location: { href: string } }).location = { href: "" };
});

function submitForm(form: HTMLElement) {
  fireEvent.submit(form);
}

describe("ContactForm", () => {
  it("renders all form fields", () => {
    render(<ContactForm ui={ui} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(ui.namePlaceholder)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(ui.emailPlaceholder)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(ui.subjectPlaceholder)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(ui.messagePlaceholder)).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<ContactForm ui={ui} />);
    expect(screen.getByRole("button", { name: new RegExp(ui.sendMessage) })).toBeInTheDocument();
  });

  it("updates name field on input", async () => {
    render(<ContactForm ui={ui} />);
    const input = screen.getByPlaceholderText(ui.namePlaceholder);
    await userEvent.type(input, "Ruan");
    expect(input).toHaveValue("Ruan");
  });

  it("updates email field on input", async () => {
    render(<ContactForm ui={ui} />);
    const input = screen.getByPlaceholderText(ui.emailPlaceholder);
    await userEvent.type(input, "ruan@example.com");
    expect(input).toHaveValue("ruan@example.com");
  });

  it("shows subject preview with current type and subject", async () => {
    render(<ContactForm ui={ui} />);
    await userEvent.type(screen.getByPlaceholderText(ui.subjectPlaceholder), "My topic");
    expect(screen.getByText(/My topic/)).toBeInTheDocument();
  });

  it("has focus indigo border class", () => {
    render(<ContactForm ui={ui} />);
    const input = screen.getByPlaceholderText(ui.namePlaceholder);
    expect(input).toHaveClass("focus:border-indigo");
  });

  it("shows placeholder in subject preview when subject is empty", () => {
    render(<ContactForm ui={ui} />);
    expect(screen.getByText(/…/)).toBeInTheDocument();
  });

  it("transitions to sent state on form submission", () => {
    render(<ContactForm ui={ui} />);
    submitForm(screen.getByPlaceholderText(ui.messagePlaceholder).closest("form")!);
    expect(screen.getByText(ui.sentTitle)).toBeInTheDocument();
  });

  it("builds a mailto href containing the email address on submission", async () => {
    render(<ContactForm ui={ui} />);
    await userEvent.type(screen.getByPlaceholderText(ui.subjectPlaceholder), "Hello");
    submitForm(screen.getByPlaceholderText(ui.messagePlaceholder).closest("form")!);
    expect((window.location as { href: string }).href).toContain("mailto:ruanfailache@gmail.com");
  });

  it("encodes the subject in the mailto href", async () => {
    render(<ContactForm ui={ui} />);
    await userEvent.type(screen.getByPlaceholderText(ui.subjectPlaceholder), "Hello");
    submitForm(screen.getByPlaceholderText(ui.messagePlaceholder).closest("form")!);
    expect((window.location as { href: string }).href).toContain("Hello");
  });

  it("returns to form when Send another is clicked", () => {
    render(<ContactForm ui={ui} />);
    submitForm(screen.getByPlaceholderText(ui.messagePlaceholder).closest("form")!);
    fireEvent.click(screen.getByText(ui.sendAnother));
    expect(screen.getByPlaceholderText(ui.namePlaceholder)).toBeInTheDocument();
  });
});

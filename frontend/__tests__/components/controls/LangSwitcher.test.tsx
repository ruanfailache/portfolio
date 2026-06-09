// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LangSwitcher from "@/components/controls/LangSwitcher";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
  usePathname: () => "/en/about",
}));

beforeEach(() => {
  push.mockClear();
});

describe("LangSwitcher", () => {
  it("renders the current locale code", () => {
    render(<LangSwitcher currentLocale="en" ariaLabel="Language" />);
    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  it("dropdown is hidden initially", () => {
    render(<LangSwitcher currentLocale="en" ariaLabel="Language" />);
    expect(screen.queryByText("English")).not.toBeInTheDocument();
  });

  it("opens the dropdown on button click", async () => {
    render(<LangSwitcher currentLocale="en" ariaLabel="Language" />);
    await userEvent.click(screen.getByRole("button", { name: "Language" }));
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  it("closes the dropdown when clicking the trigger again", async () => {
    render(<LangSwitcher currentLocale="en" ariaLabel="Language" />);
    const trigger = screen.getByRole("button", { name: "Language" });
    await userEvent.click(trigger);
    await userEvent.click(trigger);
    expect(screen.queryByText("English")).not.toBeInTheDocument();
  });

  it("closes on Escape key", async () => {
    render(<LangSwitcher currentLocale="en" ariaLabel="Language" />);
    await userEvent.click(screen.getByRole("button", { name: "Language" }));
    expect(screen.getByText("English")).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByText("English")).not.toBeInTheDocument();
  });

  it("closes when clicking outside the component", async () => {
    render(
      <div>
        <LangSwitcher currentLocale="en" ariaLabel="Language" />
        <button>outside</button>
      </div>
    );
    await userEvent.click(screen.getByRole("button", { name: "Language" }));
    expect(screen.getByText("English")).toBeInTheDocument();
    fireEvent.mouseDown(screen.getByRole("button", { name: "outside" }));
    expect(screen.queryByText("English")).not.toBeInTheDocument();
  });

  it("calls router.push with updated locale segment on locale select", async () => {
    render(<LangSwitcher currentLocale="en" ariaLabel="Language" />);
    await userEvent.click(screen.getByRole("button", { name: "Language" }));
    await userEvent.click(screen.getByText("Português"));
    expect(push).toHaveBeenCalledWith("/pt/about");
  });

  it("closes the dropdown after selecting a locale", async () => {
    render(<LangSwitcher currentLocale="en" ariaLabel="Language" />);
    await userEvent.click(screen.getByRole("button", { name: "Language" }));
    await userEvent.click(screen.getByText("日本語"));
    expect(screen.queryByText("English")).not.toBeInTheDocument();
  });

  it("sets aria-expanded correctly", async () => {
    render(<LangSwitcher currentLocale="en" ariaLabel="Language" />);
    const trigger = screen.getByRole("button", { name: "Language" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });
});

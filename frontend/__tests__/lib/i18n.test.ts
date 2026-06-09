import { describe, it, expect } from "vitest";
import { getContent, LOCALES, strings, CLIENTS, ACCENT_PALETTE } from "@/lib/i18n";

describe("LOCALES", () => {
  it("contains en, pt, ja", () => {
    expect(LOCALES).toEqual(["en", "pt", "ja"]);
  });
});

describe("getContent", () => {
  it.each(LOCALES)("returns a valid structure for locale %s", (locale) => {
    const content = getContent(locale);
    expect(content).toBeDefined();
    expect(typeof content.name).toBe("string");
    expect(typeof content.role).toBe("string");
    expect(typeof content.headline).toBe("string");
    expect(Array.isArray(content.projects)).toBe(true);
    expect(Array.isArray(content.experience)).toBe(true);
    expect(Array.isArray(content.capabilities)).toBe(true);
    expect(Array.isArray(content.stack)).toBe(true);
    expect(Array.isArray(content.tags)).toBe(true);
  });

  it.each(LOCALES)("projects have required fields for locale %s", (locale) => {
    const { projects } = getContent(locale);
    for (const project of projects) {
      expect(typeof project.title).toBe("string");
      expect(typeof project.slug).toBe("string");
    }
  });

  it("falls back to English for unknown locale", () => {
    const result = getContent("xx" as never);
    expect(result).toEqual(strings.en);
  });

  it("returns the same reference as strings map", () => {
    expect(getContent("en")).toBe(strings.en);
    expect(getContent("pt")).toBe(strings.pt);
    expect(getContent("ja")).toBe(strings.ja);
  });
});

describe("CLIENTS", () => {
  it("is a non-empty array with client and color fields", () => {
    expect(CLIENTS.length).toBeGreaterThan(0);
    for (const entry of CLIENTS) {
      expect(typeof entry.client).toBe("string");
      expect(typeof entry.color).toBe("string");
    }
  });
});

describe("ACCENT_PALETTE", () => {
  it("contains the four accent colors", () => {
    expect(ACCENT_PALETTE).toEqual(["indigo", "sage", "rose", "amber"]);
  });
});

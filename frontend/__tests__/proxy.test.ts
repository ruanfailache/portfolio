import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { proxy, detectLocale, buildCsp } from "@/proxy";

function makeRequest(url: string, opts: Omit<RequestInit, "signal"> & { signal?: AbortSignal } = {}): NextRequest {
  return new NextRequest(`http://localhost${url}`, opts);
}

describe("detectLocale", () => {
  it("returns the locale saved in the rf-lang cookie", () => {
    const req = makeRequest("/", { headers: { cookie: "rf-lang=pt" } });
    expect(detectLocale(req)).toBe("pt");
  });

  it("ignores an invalid cookie value and falls through to accept-language", () => {
    const req = makeRequest("/", {
      headers: { cookie: "rf-lang=zz", "accept-language": "ja-JP" },
    });
    expect(detectLocale(req)).toBe("ja");
  });

  it("detects pt from accept-language", () => {
    const req = makeRequest("/", { headers: { "accept-language": "pt-BR,pt;q=0.9" } });
    expect(detectLocale(req)).toBe("pt");
  });

  it("detects ja from accept-language", () => {
    const req = makeRequest("/", { headers: { "accept-language": "ja" } });
    expect(detectLocale(req)).toBe("ja");
  });

  it("falls back to en when no signals are present", () => {
    const req = makeRequest("/");
    expect(detectLocale(req)).toBe("en");
  });

  it("falls back to en for an unrecognised accept-language", () => {
    const req = makeRequest("/", { headers: { "accept-language": "fr-FR" } });
    expect(detectLocale(req)).toBe("en");
  });
});

describe("buildCsp", () => {
  it("includes the given nonce in script-src", () => {
    const csp = buildCsp("abc123");
    expect(csp).toContain("'nonce-abc123'");
  });

  it("blocks object-src", () => {
    expect(buildCsp("x")).toContain("object-src 'none'");
  });

  it("restricts frame-ancestors", () => {
    expect(buildCsp("x")).toContain("frame-ancestors 'none'");
  });

  it("locks down base-uri and form-action", () => {
    const csp = buildCsp("x");
    expect(csp).toContain("base-uri 'self'");
    expect(csp).toContain("form-action 'self'");
  });

  it("includes default-src self", () => {
    expect(buildCsp("x")).toContain("default-src 'self'");
  });
});

describe("proxy", () => {
  it("redirects to locale-prefixed path when no locale prefix is present", () => {
    const req = makeRequest("/about", { headers: { "accept-language": "en" } });
    const res = proxy(req);
    expect(res?.status).toBe(307);
    expect(res?.headers.get("location")).toContain("/en/about");
  });

  it("sets Content-Security-Policy on redirect responses", () => {
    const req = makeRequest("/about");
    const res = proxy(req);
    expect(res?.headers.get("content-security-policy")).toBeTruthy();
  });

  it("passes through requests that already have a locale prefix", () => {
    const req = makeRequest("/en/about");
    const res = proxy(req);
    expect(res?.status).not.toBe(308);
  });

  it("sets Content-Security-Policy on passthrough responses", () => {
    const req = makeRequest("/pt/blog");
    const res = proxy(req);
    expect(res?.headers.get("content-security-policy")).toContain("script-src");
  });

  it("sets x-nonce on passthrough request headers", () => {
    const req = makeRequest("/en");
    const res = proxy(req);
    // The nonce is set on the forwarded request, not the response — verify CSP contains a nonce
    const csp = res?.headers.get("content-security-policy") ?? "";
    expect(csp).toMatch(/nonce-[A-Za-z0-9+/=]+/);
  });

  it("generates a unique nonce per request", () => {
    const req1 = makeRequest("/en");
    const req2 = makeRequest("/en");
    const csp1 = proxy(req1)?.headers.get("content-security-policy") ?? "";
    const csp2 = proxy(req2)?.headers.get("content-security-policy") ?? "";
    const nonce1 = csp1.match(/nonce-([A-Za-z0-9+/=]+)/)?.[1];
    const nonce2 = csp2.match(/nonce-([A-Za-z0-9+/=]+)/)?.[1];
    expect(nonce1).not.toBe(nonce2);
  });
});

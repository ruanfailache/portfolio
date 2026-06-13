import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, type Locale } from "@/lib/i18n";

export function detectLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("rf-lang")?.value as Locale | undefined;
  if (saved && LOCALES.includes(saved)) return saved;

  const acceptLang = request.headers.get("accept-language") ?? "";
  if (acceptLang.toLowerCase().startsWith("pt")) return "pt";
  if (acceptLang.toLowerCase().startsWith("ja")) return "ja";
  return "en";
}

function generateNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(Array.from(bytes, (b) => String.fromCharCode(b)).join(""));
}

export function buildCsp(nonce: string): string {
  const dev = process.env.NODE_ENV === "development";
  return [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}'${dev ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: https:`,
    `font-src 'self'`,
    `connect-src 'self'${dev ? " ws: wss:" : ""}`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
  ].join("; ");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some((l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`);

  const nonce = generateNonce();
  const csp = buildCsp(nonce);

  if (!hasLocale) {
    const locale = detectLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    const res = NextResponse.redirect(request.nextUrl);
    res.headers.set("Content-Security-Policy", csp);
    return res;
  }

  const localeInPath =
    LOCALES.find((l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`) ?? "en";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("x-locale", localeInPath);

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  res.headers.set("Content-Security-Policy", csp);
  return res;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, type Locale } from "@/lib/i18n";

function detectLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("rf-lang")?.value as Locale | undefined;
  if (saved && LOCALES.includes(saved)) return saved;

  const acceptLang = request.headers.get("accept-language") ?? "";
  if (acceptLang.toLowerCase().startsWith("pt")) return "pt";
  if (acceptLang.toLowerCase().startsWith("ja")) return "ja";
  return "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (hasLocale) return;

  const locale = detectLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};

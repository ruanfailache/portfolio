import { LOCALES, type Locale } from "./i18n";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ruanfailache.com";

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  pt: "pt_BR",
  ja: "ja_JP",
};

export function ogLocale(locale: Locale): string {
  return OG_LOCALE[locale] ?? "en_US";
}

export function buildAlternates(locale: Locale, pathFn: (l: Locale) => string) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[l] = `${SITE_URL}${pathFn(l)}`;
  }
  languages["x-default"] = `${SITE_URL}${pathFn("en")}`;
  return {
    canonical: `${SITE_URL}${pathFn(locale)}`,
    languages,
  };
}

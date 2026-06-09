"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LocaleContent, Locale } from "@/lib/i18n";
import { PrimaryButton } from "@/components/ui/Button";
import ThemeToggle from "@/components/controls/ThemeToggle";
import LangSwitcher from "@/components/controls/LangSwitcher";

const NAV_PAGES = ["Home", "Work", "Blog", "Contact"] as const;

function pageHref(page: string, locale: Locale): string {
  const map: Record<string, string> = {
    Home: `/${locale}`,
    Work: `/${locale}/work`,
    Blog: `/${locale}/blog`,
    Contact: `/${locale}/contact`,
  };
  return map[page] ?? `/${locale}`;
}

function isPageActive(page: string, pathname: string, locale: Locale): boolean {
  const href = pageHref(page, locale);
  if (page === "Home") return pathname === href;
  return pathname.startsWith(href);
}

export default function Header({
  content,
  locale,
}: {
  content: LocaleContent;
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onResize = () => setMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-[100] backdrop-blur-[12px] border-b border-border",
        "transition-[background,box-shadow] duration-300",
        scrolled
          ? "bg-header-bg-scroll shadow-[0_2px_16px_var(--header-shadow)]"
          : "bg-header-bg shadow-none",
      ].join(" ")}
    >
      <div
        className={[
          "max-w-[1100px] mx-auto h-16 flex items-center justify-between",
          mobile ? "px-[14px] gap-2" : "px-8 gap-3",
        ].join(" ")}
      >
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-[10px] no-underline shrink-0">
          <span className="w-[34px] h-[34px] bg-indigo rounded-[10px] flex items-center justify-center text-white font-display font-bold text-[15px]">
            R
          </span>
          {!mobile && (
            <span className="font-display font-semibold text-base text-fg">
              Ruan Failache
            </span>
          )}
        </Link>

        {/* Nav */}
        <nav className={`flex ${mobile ? "gap-px" : "gap-1.5"}`}>
          {NAV_PAGES.map((page) => {
            const active = isPageActive(page, pathname, locale);
            return (
              <Link
                key={page}
                href={pageHref(page, locale)}
                aria-current={active ? "page" : undefined}
                className={[
                  "font-sans font-medium rounded-lg whitespace-nowrap no-underline transition-[color,background] duration-150",
                  mobile ? "text-[13px] px-2 py-1.5" : "text-sm px-[14px] py-1.5",
                  active ? "text-indigo bg-indigo-pale" : "text-fg-mid bg-transparent",
                ].join(" ")}
              >
                {content.ui.nav[page]}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className={`flex items-center shrink-0 ${mobile ? "gap-1.5" : "gap-2"}`}>
          {!mobile && (
            <Link
              href={`/${locale}/resume`}
              className={[
                "font-sans text-sm font-medium px-[10px] py-1.5 rounded-lg whitespace-nowrap no-underline transition-colors duration-150",
                pathname.startsWith(`/${locale}/resume`) ? "text-indigo" : "text-fg-mid",
              ].join(" ")}
            >
              {content.ui.resumeNav}
            </Link>
          )}
          <LangSwitcher currentLocale={locale} ariaLabel={content.ui.language} />
          <ThemeToggle ariaLabels={{ toLight: content.ui.themeToLight, toDark: content.ui.themeToDark }} />
          {!mobile && (
            <Link href={`/${locale}/contact`} className="no-underline">
              <PrimaryButton className="py-[9px] px-5 text-sm">
                {content.ui.hireMe}
              </PrimaryButton>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

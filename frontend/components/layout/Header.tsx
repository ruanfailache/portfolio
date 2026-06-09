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
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "var(--header-bg-scroll)" : "var(--header-bg)",
        backdropFilter: "blur(12px)",
        borderBottom: "1.5px solid var(--border)",
        transition: "background 0.3s, box-shadow 0.3s",
        boxShadow: scrolled ? "0 2px 16px var(--header-shadow)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: mobile ? "0 14px" : "0 32px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: mobile ? 8 : 12,
        }}
      >
        {/* Logo */}
        <Link
          href={`/${locale}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              background: "var(--indigo)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            R
          </span>
          {!mobile && (
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: "var(--fg)",
              }}
            >
              Ruan Failache
            </span>
          )}
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", gap: mobile ? 1 : 6 }}>
          {NAV_PAGES.map((page) => {
            const active = isPageActive(page, pathname, locale);
            return (
              <Link
                key={page}
                href={pageHref(page, locale)}
                aria-current={active ? "page" : undefined}
                style={{
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: mobile ? 13 : 14,
                  fontWeight: 500,
                  color: active ? "var(--indigo)" : "var(--fg-mid)",
                  padding: mobile ? "6px 8px" : "6px 14px",
                  borderRadius: 8,
                  background: active ? "var(--indigo-pale)" : "transparent",
                  transition: "color 0.15s, background 0.15s",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                {content.ui.nav[page]}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: mobile ? 6 : 8, flexShrink: 0 }}>
          {!mobile && (
            <Link
              href={`/${locale}/resume`}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: pathname.startsWith(`/${locale}/resume`) ? "var(--indigo)" : "var(--fg-mid)",
                padding: "6px 10px",
                borderRadius: 8,
                whiteSpace: "nowrap",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {content.ui.resumeNav}
            </Link>
          )}
          <LangSwitcher currentLocale={locale} ariaLabel={content.ui.language} />
          <ThemeToggle
            ariaLabels={{ toLight: content.ui.themeToLight, toDark: content.ui.themeToDark }}
          />
          {!mobile && (
            <Link href={`/${locale}/contact`} style={{ textDecoration: "none" }}>
              <PrimaryButton style={{ padding: "9px 20px", fontSize: 14 }}>
                {content.ui.hireMe}
              </PrimaryButton>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LOCALES, strings, type Locale } from "@/lib/i18n";

export default function LangSwitcher({
  currentLocale,
  ariaLabel,
}: {
  currentLocale: Locale;
  ariaLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEscape = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const switchLocale = (locale: Locale) => {
    setOpen(false);
    try { document.cookie = `rf-lang=${locale};path=/;max-age=31536000`; } catch {}
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={ariaLabel}
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          height: 36,
          padding: "0 10px",
          cursor: "pointer",
          background: open ? "var(--indigo-pale)" : "transparent",
          border: "1.5px solid var(--border)",
          borderRadius: 9,
          color: "var(--fg-mid)",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 13,
          fontWeight: 600,
          transition: "background 0.15s, border-color 0.15s",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" strokeLinecap="round" />
        </svg>
        <span>{strings[currentLocale].code}</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: 44,
            right: 0,
            minWidth: 150,
            background: "var(--card)",
            border: "1.5px solid var(--border)",
            borderRadius: 12,
            boxShadow: "0 12px 32px var(--card-shadow)",
            padding: 6,
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {LOCALES.map((locale) => {
            const active = locale === currentLocale;
            return (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  cursor: "pointer",
                  background: active ? "var(--indigo-pale)" : "transparent",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 12px",
                  color: active ? "var(--indigo)" : "var(--fg-mid)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 14,
                  fontWeight: active ? 600 : 500,
                  textAlign: "left",
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "var(--bg-alt)"; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
              >
                <span>{strings[locale].label}</span>
                <span style={{ fontSize: 11, fontWeight: 700, opacity: 0.6 }}>
                  {strings[locale].code}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

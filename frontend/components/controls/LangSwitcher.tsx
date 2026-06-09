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
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={ariaLabel}
        aria-expanded={open}
        className={[
          "flex items-center gap-[5px] h-9 px-[10px] cursor-pointer border-[1.5px] border-border rounded-[9px]",
          "text-fg-mid font-sans text-[13px] font-semibold transition-[background,border-color] duration-150",
          open ? "bg-indigo-pale" : "bg-transparent",
        ].join(" ")}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" strokeLinecap="round" />
        </svg>
        <span>{strings[currentLocale].code}</span>
      </button>

      {open && (
        <div className="absolute top-11 right-0 min-w-[150px] bg-card border-[1.5px] border-border rounded-xl shadow-[0_12px_32px_var(--card-shadow)] p-1.5 z-[200] flex flex-col gap-0.5">
          {LOCALES.map((locale) => {
            const active = locale === currentLocale;
            return (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={[
                  "flex items-center justify-between gap-3 cursor-pointer border-none rounded-lg px-3 py-2 font-sans text-sm text-left transition-colors duration-100",
                  active
                    ? "bg-indigo-pale text-indigo font-semibold"
                    : "bg-transparent text-fg-mid font-medium hover:bg-bg-alt",
                ].join(" ")}
              >
                <span>{strings[locale].label}</span>
                <span className="text-[11px] font-bold opacity-60">
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

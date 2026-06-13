"use client";

import { useSyncExternalStore } from "react";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("rf-theme", theme);
  } catch {}
  window.dispatchEvent(new Event("themechange"));
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("themechange", callback);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onMQChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem("rf-theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  };
  mq.addEventListener("change", onMQChange);
  return () => {
    window.removeEventListener("themechange", callback);
    mq.removeEventListener("change", onMQChange);
  };
}

function getSnapshot(): "light" | "dark" {
  try {
    const saved = localStorage.getItem("rf-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

function getServerSnapshot(): "light" {
  return "light";
}

export default function ThemeToggle({
  ariaLabels,
}: {
  ariaLabels: { toLight: string; toDark: string };
}) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? ariaLabels.toLight : ariaLabels.toDark}
      title={isDark ? ariaLabels.toLight : ariaLabels.toDark}
      className="w-9 h-9 shrink-0 cursor-pointer flex items-center justify-center bg-transparent border-1.5 border-border rounded-[9px] text-fg-mid transition-[border-color,color] duration-150 hover:text-indigo hover:border-indigo"
    >
      {isDark ? (
        <svg
          aria-hidden="true"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

"use client";

import Link from "next/link";
import type { LocaleContent, Locale } from "@/lib/i18n";
import { ACCENT_PALETTE, CLIENTS } from "@/lib/i18n";
import Tag from "@/components/ui/Tag";
import { PrimaryButton, GhostButton } from "@/components/ui/Button";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import StatCard from "./StatCard";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ruanfailache",
    icon: (
      <svg aria-hidden="true" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ruanfailache",
    icon: (
      <svg aria-hidden="true" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ruanfailache@gmail.com",
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const varToBorderL: Record<string, string> = {
  "var(--indigo)": "border-l-indigo",
  "var(--sage)": "border-l-sage",
  "var(--rose)": "border-l-rose",
  "var(--amber)": "border-l-amber",
};
const varToText: Record<string, string> = {
  "var(--indigo)": "text-indigo",
  "var(--sage)": "text-sage",
  "var(--rose)": "text-rose",
  "var(--amber)": "text-amber",
};

function tagColor(tag: string) {
  if (["Angular", "React"].includes(tag)) return "indigo" as const;
  if (["Java", "Spring Boot"].includes(tag)) return "rose" as const;
  if (["AWS", "CI/CD"].includes(tag)) return "amber" as const;
  return "sage" as const;
}

export default function Hero({ content, locale }: { content: LocaleContent; locale: Locale }) {
  return (
    <>
      {/* Hero section */}
      <section className="bg-bg pt-18 pb-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>{content.role}</SectionLabel>
            <h1 className="reveal font-display font-bold text-[clamp(36px,5cqw,60px)] tracking-[-0.03em] leading-[1.1] text-fg mb-5">
              Ruan
              <br />
              <span className="text-indigo">Failache</span>
            </h1>
            <p className="reveal reveal-2 text-[18px] text-fg-mid leading-[1.65] max-w-[480px] mb-2.5">
              {content.headline}
            </p>
            <p className="reveal reveal-2 text-sm text-fg-soft leading-[1.6] max-w-[460px] mb-7">
              {content.subheadline}
            </p>
            <div className="reveal reveal-3 flex flex-wrap gap-1.5 mb-8">
              {content.tags.map((t) => (
                <Tag key={t} color={tagColor(t)}>
                  {t}
                </Tag>
              ))}
            </div>
            <div className="reveal reveal-4 flex flex-wrap gap-3 mb-9">
              <Link href={`/${locale}/work`} className="no-underline">
                <PrimaryButton>
                  {content.ui.viewMyWork} <Arrow />
                </PrimaryButton>
              </Link>
              <Link href={`/${locale}/contact`} className="no-underline">
                <GhostButton>{content.ui.letsTalk}</GhostButton>
              </Link>
            </div>
            <div className="reveal reveal-4 flex gap-4 items-center">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-fg-soft transition-colors duration-150 flex hover:text-indigo"
                >
                  {s.icon}
                </a>
              ))}
              <span className="w-px h-4 bg-border" />
              <Link
                href={`/${locale}/curriculum`}
                className="text-fg-mid font-sans font-semibold text-[13px] flex items-center gap-1.5 no-underline transition-colors duration-150 hover:text-indigo"
              >
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M9 13h6M9 17h4" />
                </svg>
                {content.ui.resumeNav}
              </Link>
            </div>
          </div>

          {/* Stats grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3.5">
            {content.heroStats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} color={ACCENT_PALETTE[i]} />
            ))}
          </div>
        </div>
      </section>

      {/* Delivered at */}
      <section className="bg-panel py-8 transition-[background] duration-300">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
          <div className="text-2xs font-bold tracking-[0.1em] uppercase text-panel-faint mb-4.5 font-sans">
            {content.ui.deliveredAt}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-0 gap-y-5.5">
            {CLIENTS.map((c) => (
              <div
                key={c.client}
                className={`py-0.5 px-5 flex flex-col gap-1 border-l-2 ${varToBorderL[c.color] ?? "border-l-indigo"}`}
              >
                <span className="font-display font-bold text-base text-panel-fg">{c.client}</span>
                {c.via && (
                  <span
                    className={`text-2xs font-medium tracking-[0.02em] ${varToText[c.color] ?? "text-indigo"}`}
                  >
                    {content.ui.via} {c.via}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

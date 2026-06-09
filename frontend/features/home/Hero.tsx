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
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ruanfailache",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ruanfailache@gmail.com",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

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
      <section style={{ background: "var(--bg)", paddingTop: 72, paddingBottom: 80 }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <SectionLabel>{content.role}</SectionLabel>
            <h1
              className="reveal"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(36px, 5cqw, 60px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--fg)",
                marginBottom: 20,
              }}
            >
              Ruan
              <br />
              <span style={{ color: "var(--indigo)" }}>Failache</span>
            </h1>
            <p
              className="reveal reveal-2"
              style={{ fontSize: 18, color: "var(--fg-mid)", lineHeight: 1.65, maxWidth: 480, marginBottom: 10 }}
            >
              {content.headline}
            </p>
            <p
              className="reveal reveal-2"
              style={{ fontSize: 14, color: "var(--fg-soft)", lineHeight: 1.6, maxWidth: 460, marginBottom: 28 }}
            >
              {content.subheadline}
            </p>
            <div className="reveal reveal-3" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32 }}>
              {content.tags.map((t) => <Tag key={t} color={tagColor(t)}>{t}</Tag>)}
            </div>
            <div className="reveal reveal-4" style={{ display: "flex", gap: 12, marginBottom: 36 }}>
              <Link href={`/${locale}/work`} style={{ textDecoration: "none" }}>
                <PrimaryButton>
                  {content.ui.viewMyWork} <Arrow />
                </PrimaryButton>
              </Link>
              <Link href={`/${locale}/contact`} style={{ textDecoration: "none" }}>
                <GhostButton>{content.ui.letsTalk}</GhostButton>
              </Link>
            </div>
            <div className="reveal reveal-4" style={{ display: "flex", gap: 16, alignItems: "center" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ color: "var(--fg-soft)", transition: "color 0.15s", display: "flex" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--indigo)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-soft)")}
                >
                  {s.icon}
                </a>
              ))}
              <span style={{ width: 1, height: 16, background: "var(--border)" }} />
              <Link
                href={`/${locale}/resume`}
                style={{
                  color: "var(--fg-mid)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M9 13h6M9 17h4" />
                </svg>
                {content.ui.resumeNav}
              </Link>
            </div>
          </div>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {content.heroStats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} color={ACCENT_PALETTE[i]} />
            ))}
          </div>
        </div>
      </section>

      {/* Delivered at */}
      <section style={{ background: "var(--panel)", padding: "32px 0", transition: "background 0.3s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--panel-faint)",
              marginBottom: 18,
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            {content.ui.deliveredAt}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "22px 0" }}>
            {CLIENTS.map((c) => (
              <div
                key={c.client}
                style={{
                  padding: "2px 20px",
                  borderLeft: `2px solid ${c.color}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--panel-fg)",
                  }}
                >
                  {c.client}
                </span>
                {c.via && (
                  <span style={{ fontSize: 11, fontWeight: 500, color: c.color, letterSpacing: "0.02em" }}>
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

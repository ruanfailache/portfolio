import Link from "next/link";
import type { LocaleContent, Locale } from "@/lib/i18n";
import { PrimaryButton } from "@/components/ui/Button";
import Arrow from "@/components/ui/Arrow";

export default function CTA({ content, locale }: { content: LocaleContent; locale: Locale }) {
  return (
    <section style={{ background: "var(--bg)", padding: "24px 0 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            background: "var(--panel)",
            borderRadius: 24,
            padding: "48px 40px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 32,
            alignItems: "center",
            transition: "background 0.3s",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--indigo-mid)",
                marginBottom: 12,
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {content.ui.ctaKicker}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: 28,
                color: "var(--panel-fg)",
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              {content.ui.ctaTitle}
            </h3>
            <p style={{ fontSize: 15, color: "var(--panel-soft)", lineHeight: 1.65, maxWidth: 440 }}>
              {content.ui.ctaBody}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
            <Link href={`/${locale}/contact`} style={{ textDecoration: "none" }}>
              <PrimaryButton style={{ padding: "13px 28px", whiteSpace: "nowrap" }}>
                {content.ui.getInTouch} <Arrow />
              </PrimaryButton>
            </Link>
            <a
              href="mailto:ruanfailache@gmail.com"
              style={{
                textAlign: "center",
                fontSize: 13,
                color: "var(--panel-faint)",
                textDecoration: "none",
                fontFamily: "var(--font-inter), sans-serif",
                transition: "color 0.15s",
              }}
            >
              ruanfailache@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

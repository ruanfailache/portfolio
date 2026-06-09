import Link from "next/link";
import type { LocaleContent, Locale } from "@/lib/i18n";
import type { Post } from "@/lib/types";
import { accentColors } from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import SectionLabel from "@/components/ui/SectionLabel";
import Arrow from "@/components/ui/Arrow";

export default function LatestPosts({
  content,
  locale,
  posts = [],
}: {
  content: LocaleContent;
  locale: Locale;
  posts?: Post[];
}) {
  const preview = posts.slice(0, 3);

  return (
    <section style={{ background: "var(--bg)", padding: "72px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 32,
            gap: 16,
          }}
        >
          <div>
            <SectionLabel>{content.ui.fromTheBlog}</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(24px, 3.5cqw, 34px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
              }}
            >
              {content.ui.latestWriting}
            </h2>
          </div>
          <Link
            href={`/${locale}/blog`}
            style={{
              color: "var(--indigo)",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            {content.ui.readAll} <Arrow />
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {preview.map((post) => {
            const { fg } = accentColors(post.color);
            return (
              <Link
                key={post.slug ?? post.title}
                href={`/${locale}/blog/${post.slug ?? ""}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  hoverable
                  style={{ cursor: "pointer", display: "flex", flexDirection: "column", padding: 24, height: "100%" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: fg,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {post.tag}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--fg-soft)" }}>
                      {post.date} · {post.read}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: "var(--fg)",
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--fg-mid)",
                      lineHeight: 1.65,
                      flex: 1,
                      marginBottom: 16,
                    }}
                  >
                    {post.summary.slice(0, 110)}…
                  </p>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--indigo)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    {content.ui.readPost} <Arrow />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

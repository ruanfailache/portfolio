import Link from "next/link";
import type { Post, LocaleContent, Locale } from "@/lib/i18n";
import { accentColors } from "@/components/ui/Tag";
import { PrimaryButton } from "@/components/ui/Button";
import Arrow from "@/components/ui/Arrow";

export default function PostView({
  post,
  content,
  locale,
}: {
  post: Post;
  content: LocaleContent;
  locale: Locale;
}) {
  const { bg, fg } = accentColors(post.color);

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 32px 0" }}>
      <Link
        href={`/${locale}/blog`}
        style={{
          color: "var(--fg-mid)",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 600,
          fontSize: 14,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 32,
          textDecoration: "none",
          transition: "color 0.15s",
        }}
      >
        ← {content.ui.backToPosts}
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: fg, whiteSpace: "nowrap" }}>
          {post.tag}
        </span>
        <span style={{ fontSize: 13, color: "var(--fg-soft)" }}>
          {post.date} · {post.read} {content.ui.readWord}
        </span>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(30px, 4.5cqw, 44px)",
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
          color: "var(--fg)",
          marginBottom: 18,
        }}
      >
        {post.title}
      </h1>

      <p style={{ fontSize: 19, color: "var(--fg-mid)", lineHeight: 1.6, marginBottom: 36, fontWeight: 400 }}>
        {post.summary}
      </p>

      <div style={{ height: 1, background: "var(--border)", marginBottom: 36 }} />

      <article>
        {post.body.map((block, i) => {
          if (block.h) return (
            <h3 key={i} style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 22, color: "var(--fg)", margin: "36px 0 14px", letterSpacing: "-0.01em" }}>
              {block.h}
            </h3>
          );
          if (block.quote) return (
            <blockquote key={i} style={{ borderLeft: `3px solid ${fg}`, background: bg, borderRadius: "0 12px 12px 0", padding: "18px 24px", margin: "28px 0", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 19, fontWeight: 500, color: "var(--fg)", lineHeight: 1.5, fontStyle: "italic" }}>
              {block.quote}
            </blockquote>
          );
          return (
            <p key={i} style={{ fontSize: 17, color: "var(--fg-mid)", lineHeight: 1.75, marginBottom: 20 }}>
              {block.p}
            </p>
          );
        })}
      </article>

      <div
        style={{
          marginTop: 48,
          paddingTop: 32,
          borderTop: "1.5px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 8,
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 16, color: "var(--fg)" }}>
            Ruan Failache
          </div>
          <div style={{ fontSize: 13, color: "var(--fg-soft)" }}>{content.ui.postFooterTagline}</div>
        </div>
        <Link href={`/${locale}/contact`} style={{ textDecoration: "none" }}>
          <PrimaryButton style={{ padding: "10px 20px", fontSize: 14 }}>
            {content.ui.workWithMe} <Arrow />
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}

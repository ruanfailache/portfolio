import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Post } from "@/lib/types";
import { accentColors } from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import Arrow from "@/components/ui/Arrow";

export default function PostCard({
  post,
  locale,
  readLabel,
  compact = false,
}: {
  post: Post;
  locale: Locale;
  readLabel: string;
  compact?: boolean;
}) {
  const { fg } = accentColors(post.color);

  return (
    <Link
      href={`/${locale}/blog/${post.slug ?? ""}`}
      style={{ textDecoration: "none", display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Card
        hoverable
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          padding: compact ? 24 : 28,
          height: "100%",
        }}
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
            fontSize: compact ? 17 : 20,
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
          {compact ? post.summary.slice(0, 110) + "…" : post.summary}
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
          {readLabel} <Arrow />
        </span>
      </Card>
    </Link>
  );
}

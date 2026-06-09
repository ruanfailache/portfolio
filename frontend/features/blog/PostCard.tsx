import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Post } from "@/lib/types";
import { textColorMap } from "@/components/ui/Tag";
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
  return (
    <Link
      href={`/${locale}/blog/${post.slug ?? ""}`}
      className="no-underline flex flex-col h-full"
    >
      <Card hoverable className={`flex flex-col h-full ${compact ? "p-6" : "p-7"}`}>
        <div className="flex items-center gap-2 mb-[14px]">
          <span className={`text-[11px] font-[800] tracking-[0.08em] uppercase whitespace-nowrap ${textColorMap[post.color]}`}>
            {post.tag}
          </span>
          <span className="text-xs text-fg-soft">
            {post.date} · {post.read}
          </span>
        </div>
        <h3 className={`font-display font-bold text-fg mb-[10px] leading-[1.3] ${compact ? "text-[17px]" : "text-xl"}`}>
          {post.title}
        </h3>
        <p className="text-sm text-fg-mid leading-[1.65] flex-1 mb-4">
          {compact ? post.summary.slice(0, 110) + "…" : post.summary}
        </p>
        <span className="text-[13px] font-semibold text-indigo flex items-center gap-1.5">
          {readLabel} <Arrow />
        </span>
      </Card>
    </Link>
  );
}

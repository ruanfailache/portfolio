import Link from "next/link";
import type { LocaleContent, Locale } from "@/lib/i18n";
import type { Post } from "@/lib/types";
import { textColorMap } from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import SectionLabel from "@/components/ui/SectionLabel";
import Arrow from "@/components/ui/Arrow";
import EmptyState from "@/components/ui/EmptyState";

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
    <section className="bg-bg py-[72px]">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="flex justify-between items-end mb-8 gap-4">
          <div>
            <SectionLabel>{content.ui.fromTheBlog}</SectionLabel>
            <h2 className="font-display font-bold text-[clamp(24px,3.5cqw,34px)] tracking-[-0.02em] text-fg">
              {content.ui.latestWriting}
            </h2>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="text-indigo font-sans font-semibold text-sm flex items-center gap-1.5 whitespace-nowrap no-underline"
          >
            {content.ui.readAll} <Arrow />
          </Link>
        </div>

        {preview.length === 0 && <EmptyState message={content.ui.noPosts} />}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {preview.map((post) => (
            <Link
              key={post.slug ?? post.title}
              href={`/${locale}/blog/${post.slug ?? ""}`}
              className="no-underline"
            >
              <Card hoverable className="flex flex-col p-6 h-full">
                <div className="flex items-center gap-2 mb-3.5">
                  <span
                    className={`text-2xs font-[800] tracking-[0.08em] uppercase whitespace-nowrap ${textColorMap[post.color]}`}
                  >
                    {post.tag}
                  </span>
                  <span className="text-xs text-fg-soft">
                    {post.date} · {post.read}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[17px] text-fg mb-2.5 leading-[1.3]">
                  {post.title}
                </h3>
                <p className="text-sm text-fg-mid leading-[1.65] flex-1 mb-4">
                  {post.summary.slice(0, 110)}…
                </p>
                <span className="text-[13px] font-semibold text-indigo flex items-center gap-1.5">
                  {content.ui.readPost} <Arrow />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

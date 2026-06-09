import type { LocaleContent, Locale } from "@/lib/i18n";
import type { Post } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import EmptyState from "@/components/ui/EmptyState";
import PostCard from "./PostCard";

export default function BlogList({
  content,
  locale,
  posts,
}: {
  content: LocaleContent;
  locale: Locale;
  posts?: Post[];
}) {
  const displayPosts = posts ?? [];
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px" }}>
      <SectionHeading
        label={content.ui.blogKicker}
        title={content.ui.blogTitle}
        subtitle={content.ui.blogSubtitle}
      />
      {displayPosts.length === 0 ? (
        <EmptyState message={content.ui.noPosts} />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {displayPosts.map((post) => (
            <PostCard
              key={post.slug ?? post.title}
              post={post}
              locale={locale}
              readLabel={content.ui.readPost}
            />
          ))}
        </div>
      )}
    </div>
  );
}

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
    <div className="max-w-[1100px] mx-auto px-8 py-16">
      <SectionHeading
        label={content.ui.blogKicker}
        title={content.ui.blogTitle}
        subtitle={content.ui.blogSubtitle}
      />
      {displayPosts.length === 0 ? (
        <EmptyState message={content.ui.noPosts} />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
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

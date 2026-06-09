import type { LocaleContent, Locale } from "@/lib/i18n";
import SectionHeading from "@/components/ui/SectionHeading";
import PostCard from "./PostCard";

export default function BlogList({ content, locale }: { content: LocaleContent; locale: Locale }) {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px" }}>
      <SectionHeading
        label={content.ui.blogKicker}
        title={content.ui.blogTitle}
        subtitle={content.ui.blogSubtitle}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        {content.posts.map((post) => (
          <PostCard
            key={post.slug ?? post.title}
            post={post}
            locale={locale}
            readLabel={content.ui.readPost}
          />
        ))}
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";
import { blogPostingSchema } from "@/lib/jsonld";
import { fetchPost } from "@/lib/strapi";
import PostView from "@/features/blog/PostView";

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  // No static params — all posts are served on first request via ISR from Strapi
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const content = getContent(locale);
  const post = await fetchPost(slug, locale);
  if (!post) return { title: "Post" };

  return {
    title: post.title,
    description: post.summary,
    keywords: [post.tag],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
      authors: [content.name],
      tags: [post.tag],
    },
    alternates: buildAlternates(locale, (l) => `/${l}/blog/${slug}`),
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const content = getContent(locale);

  const post = await fetchPost(slug, locale);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema(post, locale, content)),
        }}
      />
      <PostView post={post} content={content} locale={locale} />
    </>
  );
}

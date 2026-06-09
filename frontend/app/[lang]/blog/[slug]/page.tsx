import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import PostView from "@/features/blog/PostView";

export async function generateStaticParams() {
  return LOCALES.flatMap((lang) => {
    const content = getContent(lang);
    return content.posts
      .filter((p) => p.slug)
      .map((p) => ({ lang, slug: p.slug as string }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const content = getContent(lang as Locale);
  const post = content.posts.find((p) => p.slug === slug);
  return post
    ? { title: `${post.title} | ${content.name}`, description: post.summary }
    : { title: "Post" };
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
  const post = content.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <PostView post={post} content={content} locale={locale} />;
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import { buildAlternates, ogLocale } from "@/lib/seo";
import { fetchPosts } from "@/lib/strapi";
import BlogList from "@/features/blog/BlogList";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const content = getContent(locale);
  return {
    title: content.ui.blogTitle,
    description: content.ui.blogSubtitle,
    openGraph: {
      type: "website",
      title: content.ui.blogTitle,
      description: content.ui.blogSubtitle,
      locale: ogLocale(locale),
    },
    alternates: buildAlternates(locale, (l) => `/${l}/blog`),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const content = getContent(locale);
  const posts = await fetchPosts(locale);

  return <BlogList content={content} locale={locale} posts={posts ?? []} />;
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import BlogList from "@/features/blog/BlogList";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang as Locale);
  return { title: `${content.ui.blogTitle} | ${content.name}`, description: content.ui.blogSubtitle };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  return <BlogList content={getContent(locale)} locale={locale} />;
}

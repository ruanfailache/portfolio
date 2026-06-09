import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import { buildAlternates, ogLocale } from "@/lib/seo";
import { personSchema } from "@/lib/jsonld";
import { fetchPosts } from "@/lib/strapi";
import Hero from "@/features/home/Hero";
import Capabilities from "@/features/home/Capabilities";
import LatestPosts from "@/features/home/LatestPosts";
import CTA from "@/features/home/CTA";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const content = getContent(locale);
  return {
    title: `${content.name} | ${content.role}`,
    description: content.headline,
    openGraph: {
      type: "website",
      title: `${content.name} | ${content.role}`,
      description: content.headline,
      locale: ogLocale(locale),
    },
    alternates: buildAlternates(locale, (l) => `/${l}`),
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const content = getContent(locale);
  const posts = await fetchPosts(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(content)) }}
      />
      <Hero content={content} locale={locale} />
      <Capabilities content={content} />
      <LatestPosts content={content} locale={locale} posts={posts ?? []} />
      <CTA content={content} locale={locale} />
    </>
  );
}

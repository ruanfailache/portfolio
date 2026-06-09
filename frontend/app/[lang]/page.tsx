import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import Hero from "@/features/home/Hero";
import Capabilities from "@/features/home/Capabilities";
import LatestPosts from "@/features/home/LatestPosts";
import CTA from "@/features/home/CTA";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang as Locale);
  return {
    title: `${content.name} | ${content.role}`,
    description: content.headline,
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const content = getContent(locale);

  return (
    <>
      <Hero content={content} locale={locale} />
      <Capabilities content={content} />
      <LatestPosts content={content} locale={locale} />
      <CTA content={content} locale={locale} />
    </>
  );
}

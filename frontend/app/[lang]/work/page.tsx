import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import WorkList from "@/features/work/WorkList";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang as Locale);
  return { title: `${content.ui.workTitle} | ${content.name}` };
}

export default async function WorkPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  return <WorkList content={getContent(locale)} locale={locale} />;
}

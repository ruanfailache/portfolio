import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import { buildAlternates, ogLocale } from "@/lib/seo";
import { fetchProjects } from "@/lib/content";
import WorkList from "./_components/WorkList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const content = getContent(locale);
  return {
    title: content.ui.workTitle,
    description: content.ui.workSubtitle,
    openGraph: {
      type: "website",
      title: content.ui.workTitle,
      description: content.ui.workSubtitle,
      locale: ogLocale(locale),
    },
    alternates: buildAlternates(locale, (l) => `/${l}/work`),
  };
}

export default async function WorkPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const content = getContent(locale);
  const result = await fetchProjects(locale);

  return (
    <WorkList
      content={content}
      locale={locale}
      projects={result?.projects ?? []}
      sideProjects={result?.sideProjects ?? []}
    />
  );
}

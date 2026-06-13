import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import ResumeDoc from "./_components/ResumeDoc";
import PrintButton from "./_components/PrintButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang as Locale);
  return {
    title: content.ui.resume.title,
    description: `${content.name} — ${content.role}. ${content.subheadline}`,
    robots: { index: false, follow: false },
  };
}

export default async function ResumePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const content = getContent(locale);
  const R = content.ui.resume;

  return (
    <div className="max-w-[860px] mx-auto px-8 pt-11">
      <div className="no-print flex justify-between items-center mb-7 gap-3 flex-wrap">
        <Link
          href={`/${locale}`}
          className="text-fg-mid font-sans font-semibold text-sm inline-flex items-center gap-1.5 no-underline transition-colors duration-150 hover:text-indigo"
        >
          ← {R.backHome}
        </Link>
        <PrintButton label={R.download} />
      </div>
      <ResumeDoc content={content} />
    </div>
  );
}

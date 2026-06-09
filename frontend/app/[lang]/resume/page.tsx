import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import ResumeDoc from "@/features/resume/ResumeDoc";
import PrintButton from "@/features/resume/PrintButton";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang as Locale);
  return { title: `${content.ui.resume.title} | ${content.name}` };
}

export default async function ResumePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const content = getContent(locale);
  const R = content.ui.resume;

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "44px 32px 0" }}>
      <div
        className="no-print"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 28,
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <Link
          href={`/${locale}`}
          style={{
            color: "var(--fg-mid)",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 600,
            fontSize: 14,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            textDecoration: "none",
            transition: "color 0.15s",
          }}
        >
          ← {R.backHome}
        </Link>
        <PrintButton label={R.download} />
      </div>
      <ResumeDoc content={content} />
    </div>
  );
}

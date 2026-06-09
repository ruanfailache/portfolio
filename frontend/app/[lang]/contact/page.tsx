import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/features/contact/ContactForm";
import OpenTo from "@/features/contact/OpenTo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const content = getContent(locale);
  return {
    title: content.ui.contactTitle,
    description: content.ui.contactSubtitle,
    openGraph: {
      type: "website",
      title: content.ui.contactTitle,
      description: content.ui.contactSubtitle,
    },
    alternates: buildAlternates(locale, (l) => `/${l}/contact`),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const content = getContent(lang as Locale);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px" }}>
      <SectionHeading
        label={content.ui.contactKicker}
        title={content.ui.contactTitle}
        subtitle={content.ui.contactSubtitle}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <OpenTo content={content} />
        <ContactForm ui={content.ui} />
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import { buildAlternates, ogLocale } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./_components/ContactForm";
import OpenTo from "./_components/OpenTo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
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
      locale: ogLocale(locale),
    },
    alternates: buildAlternates(locale, (l) => `/${l}/contact`),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const content = getContent(lang as Locale);

  return (
    <div className="max-w-[1100px] mx-auto px-8 py-16">
      <SectionHeading
        label={content.ui.contactKicker}
        title={content.ui.contactTitle}
        subtitle={content.ui.contactSubtitle}
      />
      <div className="grid grid-cols-2 gap-8">
        <OpenTo content={content} />
        <ContactForm ui={content.ui} />
      </div>
    </div>
  );
}

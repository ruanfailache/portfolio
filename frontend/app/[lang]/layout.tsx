import { notFound } from "next/navigation";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const content = getContent(locale);

  return (
    <>
      <Header content={content} locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer content={content} locale={locale} />
    </>
  );
}

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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-indigo focus:text-white focus:rounded-lg focus:font-sans focus:text-sm focus:font-semibold focus:no-underline"
      >
        Skip to content
      </a>
      <Header content={content} locale={locale} />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer content={content} locale={locale} />
    </>
  );
}

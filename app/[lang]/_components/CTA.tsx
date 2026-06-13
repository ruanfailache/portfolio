import Link from "next/link";
import type { LocaleContent, Locale } from "@/lib/i18n";
import { PrimaryButton } from "@/components/ui/Button";
import Arrow from "@/components/ui/Arrow";

export default function CTA({ content, locale }: { content: LocaleContent; locale: Locale }) {
  return (
    <section className="bg-bg pt-6 pb-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="bg-panel rounded-3xl px-6 py-10 md:px-10 md:py-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-start md:items-center transition-colors duration-300">
          <div>
            <div className="text-2xs font-bold tracking-[0.12em] uppercase text-indigo-mid mb-3 font-sans">
              {content.ui.ctaKicker}
            </div>
            <h3 className="font-display font-bold text-[28px] text-panel-fg leading-[1.2] mb-3">
              {content.ui.ctaTitle}
            </h3>
            <p className="text-[15px] text-panel-soft leading-[1.65] max-w-[440px]">
              {content.ui.ctaBody}
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link href={`/${locale}/contact`} className="no-underline">
              <PrimaryButton className="py-[13px] px-7 w-full justify-center">
                {content.ui.getInTouch} <Arrow />
              </PrimaryButton>
            </Link>
            <a
              href="mailto:ruanfailache@gmail.com"
              className="text-center text-[13px] text-panel-faint no-underline font-sans transition-colors duration-150"
            >
              ruanfailache@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

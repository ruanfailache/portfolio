import type { LocaleContent } from "@/lib/i18n";
import { textColorMap } from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Capabilities({ content }: { content: LocaleContent }) {
  return (
    <section className="bg-bg-alt py-[72px]">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-start mb-11">
          <div>
            <SectionLabel>{content.ui.whatIDo}</SectionLabel>
            <h2 className="font-display font-bold text-[clamp(24px,3.5cqw,34px)] tracking-[-0.02em] leading-[1.2] mb-4.5 text-fg">
              {content.ui.whatIDoTitle}
            </h2>
          </div>
          <p className="text-base text-fg-mid leading-[1.7] pt-2">{content.intro}</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {content.capabilities.map((c) => (
            <Card key={c.title} hoverable className="flex flex-col">
              <div
                className={`text-xs font-[800] tracking-[0.08em] uppercase mb-3.5 ${textColorMap[c.color]}`}
              >
                {c.label}
              </div>
              <h3 className="font-display font-bold text-[17px] text-fg mb-2.5 leading-[1.3]">
                {c.title}
              </h3>
              <p className="text-sm text-fg-mid leading-[1.65]">{c.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { LocaleContent } from "@/lib/i18n";
import { ACCENT_PALETTE } from "@/lib/i18n";
import { textColorMap } from "@/components/ui/Tag";
import Tag from "@/components/ui/Tag";

const STACK_COLORS = ["indigo", "sage", "amber"] as const;

export default function ResumeDoc({ content }: { content: LocaleContent }) {
  const R = content.ui.resume;

  return (
    <div className="resume-doc bg-card border-1.5 border-border rounded-2xl px-[52px] py-12 mb-10">
      {/* Header */}
      <div className="border-b-2 border-border pb-5.5 mb-6.5">
        <h1 className="font-display font-bold text-[34px] tracking-[-0.02em] text-fg mb-1">
          {content.name}
        </h1>
        <div className="text-base font-semibold text-indigo mb-3.5">{content.role}</div>
        <div className="flex flex-wrap gap-x-4.5 gap-y-1 text-[13px] text-fg-mid">
          <span>{content.contact.email}</span>
          <span>{content.contact.linkedin}</span>
          <span>{content.contact.github}</span>
          <span>{content.contact.location}</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-7">
        <div className="text-2xs font-[800] tracking-[0.1em] uppercase text-indigo mb-3.5 font-sans">
          {R.summary}
        </div>
        <p className="text-[14.5px] text-fg-mid leading-[1.7]">{content.intro}</p>
      </section>

      {/* Experience */}
      <section className="mb-7">
        <div className="text-2xs font-[800] tracking-[0.1em] uppercase text-indigo mb-3.5 font-sans">
          {R.experience}
        </div>
        <div className="flex flex-col gap-4.5">
          {content.experience.map((e, i) => (
            <div key={`${e.company}-${i}`} className="grid grid-cols-[150px_1fr] gap-4.5">
              <div className="text-[12.5px] text-fg-soft font-semibold pt-0.5">{e.period}</div>
              <div>
                <div className="font-display font-bold text-[15px] text-fg">
                  {e.role}
                  {e.client ? (
                    <span className="text-fg-mid font-medium">
                      {" "}
                      · {e.company} → {e.client}
                    </span>
                  ) : (
                    <span className="text-fg-mid font-medium"> · {e.company}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-[5px] mt-[7px]">
                  {e.tags.map((t) => (
                    <Tag key={t} color={ACCENT_PALETTE[i % 4]}>
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="text-2xs font-[800] tracking-[0.1em] uppercase text-indigo mb-3.5 font-sans">
          {R.skills}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {content.stack.map((s, i) => {
            const color = STACK_COLORS[i % 3];
            return (
              <div key={s.label}>
                <div className={`text-xs font-bold mb-1.5 ${textColorMap[color]}`}>{s.label}</div>
                <div className="text-[13px] text-fg-mid leading-[1.7]">{s.items.join(", ")}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

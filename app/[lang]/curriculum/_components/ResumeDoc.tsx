import type { LocaleContent } from "@/lib/i18n";
import { ACCENT_PALETTE } from "@/lib/i18n";
import { textColorMap } from "@/components/ui/Tag";
import Tag from "@/components/ui/Tag";

const STACK_COLORS = ["indigo", "sage", "amber"] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-2xs font-[800] tracking-[0.1em] uppercase text-indigo mb-3.5 font-sans print:text-[8pt] print:text-black print:tracking-normal print:border-b print:border-black/20 print:pb-1">
      {children}
    </div>
  );
}

export default function ResumeDoc({ content }: { content: LocaleContent }) {
  const R = content.ui.resume;

  return (
    <div className="resume-doc bg-card border-1.5 border-border rounded-2xl px-5 py-8 sm:px-10 sm:py-10 md:px-[52px] md:py-12 mb-10">
      {/* Header */}
      <div className="border-b-2 border-border pb-5.5 mb-6.5 print:border-0 print:pb-0 print:mb-4">
        <h1 className="font-display font-bold text-[34px] tracking-[-0.02em] text-fg mb-1 print:text-[22pt] print:text-black">
          {content.name}
        </h1>
        <div className="text-base font-semibold text-indigo mb-3.5 print:text-[12pt] print:text-black">
          {content.role}
        </div>
        <div className="flex flex-wrap gap-x-4.5 gap-y-1 text-[13px] text-fg-mid print:text-[10pt] print:text-black">
          {[
            content.contact.email,
            content.contact.phone,
            content.contact.linkedin,
            content.contact.github,
            content.contact.location,
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-4.5">
              {i > 0 && (
                <span className="hidden print:inline text-black/40" aria-hidden="true">
                  ·
                </span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Summary */}
      <section className="mb-7">
        <SectionLabel>{R.summary}</SectionLabel>
        <p className="text-[14.5px] text-fg-mid leading-[1.7] print:text-[10.5pt] print:text-black print:leading-relaxed">
          {content.intro}
        </p>
      </section>

      {/* Skills */}
      <section className="mb-7">
        <SectionLabel>{R.skills}</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 print:grid-cols-2 print:gap-x-8 print:gap-y-2">
          {content.stack.map((s, i) => {
            const color = STACK_COLORS[i % 3];
            return (
              <div key={s.label}>
                <div
                  className={`text-xs font-bold mb-1.5 print:text-[9pt] print:text-black print:mb-0.5 ${textColorMap[color]}`}
                >
                  {s.label}
                </div>
                <div className="text-[13px] text-fg-mid leading-[1.7] print:text-[10pt] print:text-black">
                  {s.items.join(", ")}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-7">
        <SectionLabel>{R.experience}</SectionLabel>
        <div className="flex flex-col gap-5">
          {content.experience.map((e, i) => (
            <div
              key={`${e.company}-${i}`}
              className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 sm:gap-4.5 print:grid-cols-1 print:gap-1"
            >
              <div className="text-[12.5px] text-fg-soft font-semibold pt-0.5 print:text-[9.5pt] print:text-black/60 print:pt-0 print:mb-0.5">
                {e.period}
              </div>
              <div>
                <div className="font-display font-bold text-[15px] text-fg print:text-[11pt] print:text-black">
                  {e.role}
                  {e.client ? (
                    <span className="text-fg-mid font-medium print:text-black">
                      {" "}
                      · {e.company} → {e.client}
                    </span>
                  ) : (
                    <span className="text-fg-mid font-medium print:text-black"> · {e.company}</span>
                  )}
                </div>

                <ul className="mt-2 flex flex-col gap-1 list-disc list-outside ml-4 text-[13px] text-fg-mid leading-[1.55] print:text-[10pt] print:text-black print:mt-1">
                  {e.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-2 print:hidden">
                  {e.tags.map((t) => (
                    <Tag key={t} color={ACCENT_PALETTE[i % 4]}>
                      {t}
                    </Tag>
                  ))}
                </div>
                <div className="hidden print:block text-[9pt] text-black/60 mt-0.5">
                  {e.tags.join(" · ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-7">
        <SectionLabel>{R.projects}</SectionLabel>
        <div className="flex flex-col gap-4">
          {content.resumeProjects.map((p, i) => (
            <div key={i}>
              <div className="flex items-baseline justify-between gap-4">
                <div className="font-display font-bold text-[15px] text-fg print:text-[11pt] print:text-black">
                  {p.title}
                </div>
                <div className="text-[12.5px] text-fg-soft font-semibold shrink-0 print:text-[9.5pt] print:text-black/60">
                  {p.period}
                </div>
              </div>
              <p className="mt-1 text-[13px] text-fg-mid leading-[1.55] print:text-[10pt] print:text-black">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1.5 print:hidden">
                {p.tags.map((t) => (
                  <Tag key={t} color={ACCENT_PALETTE[i % 4]}>
                    {t}
                  </Tag>
                ))}
              </div>
              <div className="hidden print:block text-[9pt] text-black/60 mt-0.5">
                {p.tags.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-7">
        <SectionLabel>{R.education}</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 sm:gap-4.5 print:grid-cols-1 print:gap-1">
          <div className="text-[12.5px] text-fg-soft font-semibold pt-0.5 print:text-[9.5pt] print:text-black/60 print:pt-0 print:mb-0.5">
            2024 – 2028
          </div>
          <div>
            <div className="font-display font-bold text-[15px] text-fg print:text-[11pt] print:text-black">
              {R.degree}
              <span className="text-fg-mid font-medium print:text-black"> · UNASP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section>
        <SectionLabel>{R.languages}</SectionLabel>
        <p className="text-[13px] text-fg-mid print:text-[10pt] print:text-black">
          {R.languageList}
        </p>
      </section>
    </div>
  );
}

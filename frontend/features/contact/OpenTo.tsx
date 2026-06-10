import type { LocaleContent } from "@/lib/i18n";
import { bgMap } from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import type { AccentColor } from "@/lib/i18n";

const OPEN_TO_COLORS: AccentColor[] = ["indigo", "sage", "rose"];

const CONTACT_INFO = [
  { key: "email", href: "mailto:ruanfailache@gmail.com" },
  { key: "linkedin", href: "https://linkedin.com/in/ruanfailache" },
  { key: "github", href: "https://github.com/ruanfailache" },
  { key: "location", href: null },
] as const;

export default function OpenTo({ content }: { content: LocaleContent }) {
  const { contact, ui } = content;
  const contactValues: Record<string, string> = {
    email: contact.email,
    linkedin: contact.linkedin,
    github: contact.github,
    location: contact.location,
  };

  return (
    <div className="flex flex-col gap-4">
      <Card className="p-6">
        <h3 className="font-display font-bold text-[15px] mb-3.5 text-fg">{ui.openTo}</h3>
        <div className="flex flex-col gap-3">
          {ui.openToItems.map((item, i) => {
            const color = OPEN_TO_COLORS[i] ?? "indigo";
            return (
              <div key={item.label} className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-[3px] shrink-0 ${bgMap[color]}`} />
                <div>
                  <div className="text-sm font-semibold text-fg">{item.label}</div>
                  <div className="text-xs text-fg-soft">{item.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-display font-bold text-[15px] mb-3 text-fg">{ui.findMe}</h3>
        <div className="flex flex-col gap-[9px]">
          {CONTACT_INFO.map((item) => (
            <div key={item.key} className="flex gap-2.5">
              <span className="text-2xs font-bold text-fg-soft uppercase tracking-[0.06em] w-[60px] shrink-0 pt-0.5">
                {ui.contactLabels[item.key]}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-indigo no-underline"
                >
                  {contactValues[item.key]}
                </a>
              ) : (
                <span className="text-[13px] text-fg-mid">{contactValues[item.key]}</span>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

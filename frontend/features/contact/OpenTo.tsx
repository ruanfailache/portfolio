import type { LocaleContent } from "@/lib/i18n";
import { accentColors } from "@/components/ui/Tag";
import Card from "@/components/ui/Card";

const OPEN_TO_COLORS = ["indigo", "sage", "rose"] as const;

const CONTACT_INFO = [
  { key: "email", value: "ruanfailache@gmail.com", href: "mailto:ruanfailache@gmail.com" },
  { key: "linkedin", value: "linkedin.com/in/ruanfailache", href: "https://linkedin.com/in/ruanfailache" },
  { key: "github", value: "github.com/ruanfailache", href: "https://github.com/ruanfailache" },
  { key: "location", value: null, href: null },
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
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Card style={{ padding: 24 }}>
        <h3 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 14, color: "var(--fg)" }}>
          {ui.openTo}
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ui.openToItems.map((item, i) => {
            const { fg } = accentColors(OPEN_TO_COLORS[i] ?? "indigo");
            return (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: fg, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--fg)" }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-soft)" }}>{item.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card style={{ padding: 24 }}>
        <h3 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 12, color: "var(--fg)" }}>
          {ui.findMe}
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {CONTACT_INFO.map((item) => (
            <div key={item.key} style={{ display: "flex", gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--fg-soft)", textTransform: "uppercase", letterSpacing: "0.06em", width: 60, flexShrink: 0, paddingTop: 2 }}>
                {ui.contactLabels[item.key]}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13, color: "var(--indigo)", textDecoration: "none" }}
                >
                  {contactValues[item.key]}
                </a>
              ) : (
                <span style={{ fontSize: 13, color: "var(--fg-mid)" }}>{contactValues[item.key]}</span>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

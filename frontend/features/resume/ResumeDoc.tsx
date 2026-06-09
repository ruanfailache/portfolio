import type { LocaleContent } from "@/lib/i18n";
import { ACCENT_PALETTE } from "@/lib/i18n";
import { accentColors } from "@/components/ui/Tag";
import Tag from "@/components/ui/Tag";

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--indigo)",
  marginBottom: 14,
};

export default function ResumeDoc({ content }: { content: LocaleContent }) {
  const R = content.ui.resume;

  return (
    <div
      className="resume-doc"
      style={{
        background: "var(--card)",
        border: "1.5px solid var(--border)",
        borderRadius: 16,
        padding: "48px 52px",
        marginBottom: 40,
      }}
    >
      {/* Header */}
      <div style={{ borderBottom: "2px solid var(--border)", paddingBottom: 22, marginBottom: 26 }}>
        <h1
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 700,
            fontSize: 34,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            marginBottom: 4,
          }}
        >
          {content.name}
        </h1>
        <div style={{ fontSize: 16, fontWeight: 600, color: "var(--indigo)", marginBottom: 14 }}>
          {content.role}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 18px", fontSize: 13, color: "var(--fg-mid)" }}>
          <span>{content.contact.email}</span>
          <span>{content.contact.linkedin}</span>
          <span>{content.contact.github}</span>
          <span>{content.contact.location}</span>
        </div>
      </div>

      {/* Summary */}
      <section style={{ marginBottom: 28 }}>
        <div style={labelStyle}>{R.summary}</div>
        <p style={{ fontSize: 14.5, color: "var(--fg-mid)", lineHeight: 1.7 }}>{content.intro}</p>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: 28 }}>
        <div style={labelStyle}>{R.experience}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {content.experience.map((e, i) => (
            <div key={`${e.company}-${i}`} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 18 }}>
              <div style={{ fontSize: 12.5, color: "var(--fg-soft)", fontWeight: 600, paddingTop: 2 }}>
                {e.period}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 15, color: "var(--fg)" }}>
                  {e.role}
                  {e.client ? (
                    <span style={{ color: "var(--fg-mid)", fontWeight: 500 }}> · {e.company} → {e.client}</span>
                  ) : (
                    <span style={{ color: "var(--fg-mid)", fontWeight: 500 }}> · {e.company}</span>
                  )}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 7 }}>
                  {e.tags.map((t) => <Tag key={t} color={ACCENT_PALETTE[i % 4]}>{t}</Tag>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div style={labelStyle}>{R.skills}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {content.stack.map((s, i) => {
            const { fg } = accentColors(["indigo", "sage", "amber"][i % 3] as "indigo" | "sage" | "amber");
            return (
              <div key={s.label}>
                <div style={{ fontSize: 12, fontWeight: 700, color: fg, marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "var(--fg-mid)", lineHeight: 1.7 }}>{s.items.join(", ")}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

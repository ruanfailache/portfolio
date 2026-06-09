import type { LocaleContent } from "@/lib/i18n";
import { accentColors } from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Capabilities({ content }: { content: LocaleContent }) {
  return (
    <section style={{ background: "var(--bg-alt)", padding: "72px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
            marginBottom: 44,
          }}
        >
          <div>
            <SectionLabel>{content.ui.whatIDo}</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(24px, 3.5cqw, 34px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: 18,
                color: "var(--fg)",
              }}
            >
              {content.ui.whatIDoTitle}
            </h2>
          </div>
          <p style={{ fontSize: 16, color: "var(--fg-mid)", lineHeight: 1.7, paddingTop: 8 }}>
            {content.intro}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {content.capabilities.map((c) => {
            const { fg } = accentColors(c.color);
            return (
              <Card key={c.title} hoverable style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    color: fg,
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  {c.label}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "var(--fg)",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--fg-mid)", lineHeight: 1.65 }}>{c.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

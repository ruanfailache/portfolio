import SectionLabel from "./SectionLabel";

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div style={{ marginBottom: 44, textAlign: align }}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "clamp(28px, 4cqw, 40px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          color: "var(--fg)",
          marginBottom: subtitle ? 14 : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 17,
            color: "var(--fg-mid)",
            lineHeight: 1.6,
            maxWidth: 580,
            margin: align === "center" ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

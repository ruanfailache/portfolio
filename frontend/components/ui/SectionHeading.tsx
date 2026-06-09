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
    <div className={`mb-11 ${align === "center" ? "text-center" : ""}`}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className={`font-display font-bold text-[clamp(28px,4cqw,40px)] tracking-[-0.02em] leading-[1.15] text-fg ${subtitle ? "mb-3.5" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[17px] text-fg-mid leading-relaxed max-w-[580px] ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

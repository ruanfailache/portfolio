import { accentColors } from "@/components/ui/Tag";
import type { AccentColor } from "@/lib/i18n";

export default function StatCard({
  value,
  label,
  color = "indigo",
}: {
  value: string;
  label: string;
  color?: AccentColor;
}) {
  const { bg, fg } = accentColors(color);
  return (
    <div
      style={{
        background: bg,
        border: `1.5px solid ${fg}33`,
        borderRadius: 16,
        padding: "26px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <div
        style={{
          fontSize: 44,
          fontWeight: 700,
          color: fg,
          fontFamily: "var(--font-dm-sans), sans-serif",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg)", marginTop: 6 }}>
        {label}
      </div>
    </div>
  );
}

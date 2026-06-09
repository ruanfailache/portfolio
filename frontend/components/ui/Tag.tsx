import type { AccentColor } from "@/lib/i18n";

const colorMap: Record<AccentColor, { bg: string; fg: string }> = {
  indigo: { bg: "var(--indigo-pale)", fg: "var(--indigo)" },
  sage:   { bg: "var(--sage-pale)",   fg: "var(--sage)" },
  rose:   { bg: "var(--rose-pale)",   fg: "var(--rose)" },
  amber:  { bg: "var(--amber-pale)",  fg: "var(--amber)" },
};

export function accentColors(color: AccentColor) {
  return colorMap[color] ?? colorMap.indigo;
}

export default function Tag({
  children,
  color = "indigo",
}: {
  children: React.ReactNode;
  color?: AccentColor;
}) {
  const { bg, fg } = accentColors(color);
  return (
    <span
      style={{
        background: bg,
        color: fg,
        border: `1px solid ${fg}22`,
        borderRadius: 99,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.04em",
        padding: "3px 10px",
        fontFamily: "var(--font-inter), sans-serif",
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

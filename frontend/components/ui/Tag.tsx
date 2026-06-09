import type { AccentColor } from "@/lib/i18n";

// ── Tailwind class maps (use these in components instead of accentColors) ──
export const textColorMap: Record<AccentColor, string> = {
  indigo: "text-indigo",
  sage:   "text-sage",
  rose:   "text-rose",
  amber:  "text-amber",
};

export const bgPaleMap: Record<AccentColor, string> = {
  indigo: "bg-indigo-pale",
  sage:   "bg-sage-pale",
  rose:   "bg-rose-pale",
  amber:  "bg-amber-pale",
};

export const bgMap: Record<AccentColor, string> = {
  indigo: "bg-indigo",
  sage:   "bg-sage",
  rose:   "bg-rose",
  amber:  "bg-amber",
};

export const borderLMap: Record<AccentColor, string> = {
  indigo: "border-l-indigo",
  sage:   "border-l-sage",
  rose:   "border-l-rose",
  amber:  "border-l-amber",
};

export const borderPaleMap: Record<AccentColor, string> = {
  indigo: "border-indigo/20",
  sage:   "border-sage/20",
  rose:   "border-rose/20",
  amber:  "border-amber/20",
};

// Kept for tests that assert on raw CSS var values
const colorMap: Record<AccentColor, { bg: string; fg: string }> = {
  indigo: { bg: "var(--indigo-pale)", fg: "var(--indigo)" },
  sage:   { bg: "var(--sage-pale)",   fg: "var(--sage)" },
  rose:   { bg: "var(--rose-pale)",   fg: "var(--rose)" },
  amber:  { bg: "var(--amber-pale)",  fg: "var(--amber)" },
};
export function accentColors(color: AccentColor) {
  return colorMap[color] ?? colorMap.indigo;
}

const tagClasses: Record<AccentColor, string> = {
  indigo: "bg-indigo-pale text-indigo border-indigo/15",
  sage:   "bg-sage-pale text-sage border-sage/15",
  rose:   "bg-rose-pale text-rose border-rose/15",
  amber:  "bg-amber-pale text-amber border-amber/15",
};

export default function Tag({
  children,
  color = "indigo",
}: {
  children: React.ReactNode;
  color?: AccentColor;
}) {
  return (
    <span className={`${tagClasses[color] ?? tagClasses.indigo} border rounded-full text-[11px] font-semibold tracking-[0.04em] px-[10px] py-[3px] font-sans inline-block whitespace-nowrap`}>
      {children}
    </span>
  );
}

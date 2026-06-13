import { textColorMap, bgPaleMap, borderPaleMap } from "@/components/ui/Tag";
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
  return (
    <div
      className={`${bgPaleMap[color]} border-1.5 ${borderPaleMap[color]} rounded-2xl py-6.5 px-5.5 flex flex-col gap-1`}
    >
      <div className={`text-[44px] font-bold font-display leading-none ${textColorMap[color]}`}>
        {value}
      </div>
      <div className="text-[13px] font-semibold text-fg mt-1.5">{label}</div>
    </div>
  );
}

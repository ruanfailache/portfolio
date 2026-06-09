"use client";

export function PrimaryButton({
  children,
  onClick,
  className,
  style,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`bg-indigo text-white border-none rounded-[10px] px-6 py-3 font-sans font-semibold text-[15px] cursor-pointer inline-flex items-center gap-2 transition-[filter] duration-150 hover:brightness-90 ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-transparent text-fg border-[1.5px] border-border rounded-[10px] px-6 py-3 font-sans font-semibold text-[15px] cursor-pointer transition-[border-color] duration-150 whitespace-nowrap hover:border-indigo ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export default function Card({
  children,
  hoverable,
  className,
}: {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
}) {
  return (
    <div
      className={[
        "bg-card border-[1.5px] border-border rounded-[20px] p-7",
        "shadow-[0_1px_4px_var(--card-shadow-soft)]",
        "transition-[box-shadow,transform,border-color] duration-200",
        hoverable && "hover:shadow-[0_8px_32px_var(--card-shadow)] hover:-translate-y-[3px] cursor-pointer",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}

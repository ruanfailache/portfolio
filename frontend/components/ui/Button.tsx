"use client";

export function PrimaryButton({
  children,
  onClick,
  style,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        background: "var(--indigo)",
        color: "#fff",
        border: "none",
        borderRadius: 10,
        padding: "12px 24px",
        fontFamily: "var(--font-inter), sans-serif",
        fontWeight: 600,
        fontSize: 15,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        transition: "filter 0.15s",
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.9)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  onClick,
  style,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: "transparent",
        color: "var(--fg)",
        border: "1.5px solid var(--border)",
        borderRadius: 10,
        padding: "12px 24px",
        fontFamily: "var(--font-inter), sans-serif",
        fontWeight: 600,
        fontSize: 15,
        cursor: "pointer",
        transition: "border-color 0.15s",
        whiteSpace: "nowrap",
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--indigo)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
    >
      {children}
    </button>
  );
}

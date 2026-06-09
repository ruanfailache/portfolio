export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <span
        style={{
          display: "block",
          width: 24,
          height: 2,
          background: "var(--indigo)",
          borderRadius: 99,
        }}
      />
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--indigo)",
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        {children}
      </span>
    </div>
  );
}

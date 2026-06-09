export default function EmptyState({ message }: { message: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 32px",
        color: "var(--fg-soft)",
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: 15,
        gap: 12,
      }}
    >
      <span style={{ fontSize: 32 }}>✦</span>
      <p>{message}</p>
    </div>
  );
}

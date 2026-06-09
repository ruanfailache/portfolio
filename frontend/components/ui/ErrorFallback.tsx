"use client";

export default function ErrorFallback({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 32px",
        gap: 16,
        fontFamily: "var(--font-inter), sans-serif",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 15, color: "var(--fg-mid)", maxWidth: 360 }}>
        {error.message || "Something went wrong. Please try again."}
      </p>
      <button
        onClick={reset}
        style={{
          padding: "8px 20px",
          borderRadius: 8,
          border: "1.5px solid var(--border)",
          background: "transparent",
          color: "var(--indigo)",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}

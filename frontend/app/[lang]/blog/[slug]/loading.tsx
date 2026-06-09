import Skeleton from "@/components/ui/Skeleton";

export default function PostLoading() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 32px" }}>
      {/* Back link */}
      <Skeleton width={140} height={14} style={{ marginBottom: 32 }} />

      {/* Tags + meta */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <Skeleton width={60} height={22} style={{ borderRadius: 99 }} />
        <Skeleton width={50} height={22} style={{ borderRadius: 99 }} />
      </div>

      {/* Title */}
      <Skeleton width="85%" height={44} style={{ marginBottom: 12 }} />
      <Skeleton width="65%" height={44} style={{ marginBottom: 24 }} />

      {/* Summary */}
      <Skeleton width="100%" height={16} style={{ marginBottom: 10 }} />
      <Skeleton width="90%" height={16} style={{ marginBottom: 10 }} />
      <Skeleton width="75%" height={16} style={{ marginBottom: 40 }} />

      {/* Divider */}
      <div style={{ height: 1, background: "var(--border)", marginBottom: 40 }} />

      {/* Article body lines */}
      {[100, 95, 88, 92, 70, 80, 96, 85, 60].map((w, i) => (
        <Skeleton key={i} width={`${w}%`} height={16} style={{ marginBottom: 14 }} />
      ))}
    </div>
  );
}

import Skeleton from "@/components/ui/Skeleton";

export default function CaseStudyLoading() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "48px 32px 0" }}>
      {/* Back link */}
      <Skeleton width={140} height={14} style={{ marginBottom: 32 }} />

      {/* Kicker + status */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <Skeleton width={80} height={12} />
        <Skeleton width={70} height={12} />
      </div>

      {/* Title */}
      <Skeleton width="70%" height={44} style={{ marginBottom: 12 }} />

      {/* Company */}
      <Skeleton width={140} height={16} style={{ marginBottom: 32 }} />

      {/* 16:9 image placeholder */}
      <Skeleton
        width="100%"
        height={0}
        style={{ aspectRatio: "16/9", height: "auto", paddingBottom: "56.25%", marginBottom: 36, borderRadius: 16 }}
      />

      {/* Two-column content */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 48 }}>
        <div>
          <Skeleton width={100} height={22} style={{ marginBottom: 16 }} />
          <Skeleton width="100%" height={16} style={{ marginBottom: 10 }} />
          <Skeleton width="95%" height={16} style={{ marginBottom: 10 }} />
          <Skeleton width="85%" height={16} style={{ marginBottom: 10 }} />
          <Skeleton width="90%" height={16} style={{ marginBottom: 10 }} />
          <Skeleton width="70%" height={16} style={{ marginBottom: 32 }} />

          <div style={{ height: 80, border: "1.5px solid var(--border)", borderRadius: 12 }} />
        </div>

        <div style={{ borderLeft: "1.5px solid var(--border)", paddingLeft: 28 }}>
          <Skeleton width={80} height={12} style={{ marginBottom: 12 }} />
          <Skeleton width="90%" height={14} style={{ marginBottom: 24 }} />
          <Skeleton width={80} height={12} style={{ marginBottom: 12 }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            <Skeleton width={60} height={22} style={{ borderRadius: 99 }} />
            <Skeleton width={70} height={22} style={{ borderRadius: 99 }} />
            <Skeleton width={55} height={22} style={{ borderRadius: 99 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

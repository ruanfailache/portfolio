import Skeleton from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 32px" }}>
      {/* Section heading */}
      <div style={{ marginBottom: 48 }}>
        <Skeleton width={60} height={12} style={{ marginBottom: 12 }} />
        <Skeleton width={180} height={36} style={{ marginBottom: 14 }} />
        <Skeleton width="80%" height={16} />
      </div>

      {/* Post cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              border: "1.5px solid var(--border)",
              borderRadius: 16,
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              <Skeleton width={60} height={22} style={{ borderRadius: 99 }} />
              <Skeleton width={50} height={22} style={{ borderRadius: 99 }} />
            </div>
            <Skeleton width="70%" height={24} />
            <Skeleton width="90%" height={15} />
            <Skeleton width="60%" height={15} />
          </div>
        ))}
      </div>
    </div>
  );
}

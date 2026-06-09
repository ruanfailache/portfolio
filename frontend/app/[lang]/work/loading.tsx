import Skeleton from "@/components/ui/Skeleton";

export default function WorkLoading() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px" }}>
      {/* Section heading */}
      <div style={{ marginBottom: 48 }}>
        <Skeleton width={60} height={12} style={{ marginBottom: 12 }} />
        <Skeleton width={180} height={36} style={{ marginBottom: 14 }} />
        <Skeleton width="75%" height={16} />
      </div>

      {/* Tech stack grid */}
      <div style={{ marginBottom: 64 }}>
        <Skeleton width={140} height={22} style={{ marginBottom: 20 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ border: "1.5px solid var(--border)", borderRadius: 16, padding: 24 }}>
              <Skeleton width={80} height={12} style={{ marginBottom: 16 }} />
              <Skeleton width="90%" height={14} style={{ marginBottom: 10 }} />
              <Skeleton width="80%" height={14} style={{ marginBottom: 10 }} />
              <Skeleton width="70%" height={14} />
            </div>
          ))}
        </div>
      </div>

      {/* Project cards */}
      <div style={{ marginBottom: 64 }}>
        <Skeleton width={160} height={22} style={{ marginBottom: 20 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ border: "1.5px solid var(--border)", borderRadius: 16, padding: "24px 28px" }}>
              <Skeleton width="60%" height={22} style={{ marginBottom: 10 }} />
              <Skeleton width="85%" height={15} style={{ marginBottom: 10 }} />
              <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                <Skeleton width={60} height={22} style={{ borderRadius: 99 }} />
                <Skeleton width={70} height={22} style={{ borderRadius: 99 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

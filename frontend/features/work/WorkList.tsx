import type { LocaleContent, Locale, Project, SideProject } from "@/lib/i18n";
import { accentColors } from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import EmptyState from "@/components/ui/EmptyState";
import ProjectCard from "./ProjectCard";

export default function WorkList({
  content,
  locale,
  projects,
  sideProjects,
}: {
  content: LocaleContent;
  locale: Locale;
  projects?: Project[];
  sideProjects?: SideProject[];
}) {
  const displayProjects = projects ?? content.projects;
  const displaySideProjects = sideProjects ?? content.sideProjects;
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px" }}>
      <SectionHeading
        label={content.ui.workKicker}
        title={content.ui.workTitle}
        subtitle={content.ui.workSubtitle}
      />

      {/* Tech stack */}
      <div style={{ marginBottom: 64 }}>
        <h3
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 700,
            fontSize: 22,
            marginBottom: 20,
            color: "var(--fg)",
          }}
        >
          {content.ui.techStack}
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {content.stack.map((s, i) => {
            const { fg } = accentColors(["indigo", "sage", "amber"][i % 3] as "indigo" | "sage" | "amber");
            return (
              <Card key={s.label} style={{ padding: 24 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: fg,
                    marginBottom: 12,
                  }}
                >
                  {s.label}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: fg,
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      <span style={{ fontSize: 14, color: "var(--fg-mid)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Client projects */}
      <div style={{ marginBottom: 64 }}>
        <h3
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 700,
            fontSize: 22,
            marginBottom: 20,
            color: "var(--fg)",
          }}
        >
          {content.ui.selectedWork}
        </h3>
        {displayProjects.length === 0 && displaySideProjects.length === 0 ? (
          <EmptyState message={content.ui.noProjects} />
        ) : displayProjects.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {displayProjects.map((p) => (
              <ProjectCard
                key={p.slug ?? p.title}
                project={p}
                href={`/${locale}/work/${p.slug ?? ""}`}
                ui={content.ui}
              />
            ))}
          </div>
        ) : null}
      </div>

      {/* Side projects */}
      {displaySideProjects.length > 0 && (
        <div>
          <h3
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 700,
              fontSize: 22,
              marginBottom: 20,
              color: "var(--fg)",
            }}
          >
            {content.ui.sideProjectsTitle}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {displaySideProjects.map((p) => (
              <ProjectCard
                key={p.slug}
                project={p}
                href={`/${locale}/work/${p.slug}`}
                ui={content.ui}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

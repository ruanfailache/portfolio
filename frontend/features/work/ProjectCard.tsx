import Link from "next/link";
import type { Project, SideProject, LocaleContent, Locale } from "@/lib/i18n";
import { accentColors } from "@/components/ui/Tag";
import Tag from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import Arrow from "@/components/ui/Arrow";

type AnyProject = (Project | SideProject) & { slug?: string };

export default function ProjectCard({
  project,
  href,
  ui,
}: {
  project: AnyProject;
  href: string;
  ui: LocaleContent["ui"];
}) {
  const { fg } = accentColors(project.color);

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Card hoverable>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
              <h4
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "var(--fg)",
                }}
              >
                {project.title}
              </h4>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: fg,
                }}
              >
                {project.status}
              </span>
            </div>
            {"company" in project && (
              <div style={{ fontSize: 13, color: "var(--fg-soft)", marginBottom: 12 }}>
                {(project as Project).company}
              </div>
            )}
            <p style={{ fontSize: 14, color: "var(--fg-mid)", lineHeight: 1.65, marginBottom: 14 }}>
              {project.desc.slice(0, 150)}…
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
              {project.tags.slice(0, 5).map((t) => <Tag key={t} color={project.color}>{t}</Tag>)}
            </div>
            <span
              style={{
                color: "var(--indigo)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {ui.viewCase} <Arrow />
            </span>
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: "var(--bg-alt)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: "var(--fg-mid)",
            }}
          >
            <Arrow />
          </div>
        </div>
      </Card>
    </Link>
  );
}

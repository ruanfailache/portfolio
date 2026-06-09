import Link from "next/link";
import type { Project, SideProject, LocaleContent } from "@/lib/i18n";
import { textColorMap } from "@/components/ui/Tag";
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
  return (
    <Link href={href} className="no-underline">
      <Card hoverable>
        <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
          <div>
            <div className="flex items-center gap-[10px] mb-2 flex-wrap">
              <h4 className="font-display font-bold text-xl text-fg">
                {project.title}
              </h4>
              <span className={`text-[11px] font-[800] tracking-[0.1em] uppercase ${textColorMap[project.color]}`}>
                {project.status}
              </span>
            </div>
            {"company" in project && (
              <div className="text-[13px] text-fg-soft mb-3">
                {(project as Project).company}
              </div>
            )}
            <p className="text-sm text-fg-mid leading-[1.65] mb-[14px]">
              {project.desc.slice(0, 150)}…
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 5).map((t) => <Tag key={t} color={project.color}>{t}</Tag>)}
            </div>
            <span className="text-indigo font-sans font-semibold text-sm flex items-center gap-1.5">
              {ui.viewCase} <Arrow />
            </span>
          </div>
          <div className="w-7 h-7 rounded-lg bg-bg-alt flex items-center justify-center shrink-0 text-fg-mid">
            <Arrow />
          </div>
        </div>
      </Card>
    </Link>
  );
}

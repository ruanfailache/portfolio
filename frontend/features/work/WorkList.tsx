import type { LocaleContent, Locale, Project, SideProject } from "@/lib/i18n";
import { textColorMap, bgMap } from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import EmptyState from "@/components/ui/EmptyState";
import ProjectCard from "./ProjectCard";

const STACK_COLORS = ["indigo", "sage", "amber"] as const;

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
  const displayProjects = projects ?? [];
  const displaySideProjects = sideProjects ?? [];

  return (
    <div className="max-w-[1100px] mx-auto px-8 py-16">
      <SectionHeading
        label={content.ui.workKicker}
        title={content.ui.workTitle}
        subtitle={content.ui.workSubtitle}
      />

      {/* Tech stack */}
      <div className="mb-16">
        <h3 className="font-display font-bold text-[22px] mb-5 text-fg">
          {content.ui.techStack}
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {content.stack.map((s, i) => {
            const color = STACK_COLORS[i % 3];
            return (
              <Card key={s.label} className="p-6">
                <div className={`text-xs font-bold tracking-[0.08em] uppercase mb-3 ${textColorMap[color]}`}>
                  {s.label}
                </div>
                <div className="flex flex-col gap-2">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 inline-block ${bgMap[color]}`} />
                      <span className="text-sm text-fg-mid">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Client projects */}
      <div className="mb-16">
        <h3 className="font-display font-bold text-[22px] mb-5 text-fg">
          {content.ui.selectedWork}
        </h3>
        {displayProjects.length === 0 ? (
          <EmptyState message={content.ui.noProjects} />
        ) : (
          <div className="flex flex-col gap-4">
            {displayProjects.map((p) => (
              <ProjectCard
                key={p.slug ?? p.title}
                project={p}
                href={`/${locale}/work/${p.slug ?? ""}`}
                ui={content.ui}
              />
            ))}
          </div>
        )}
      </div>

      {/* Side projects */}
      <div>
        <h3 className="font-display font-bold text-[22px] mb-5 text-fg">
          {content.ui.sideProjectsTitle}
        </h3>
        {displaySideProjects.length === 0 ? (
          <EmptyState message={content.ui.noProjects} />
        ) : (
          <div className="flex flex-col gap-4">
            {displaySideProjects.map((p) => (
              <ProjectCard
                key={p.slug}
                project={p}
                href={`/${locale}/work/${p.slug}`}
                ui={content.ui}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

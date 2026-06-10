import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Project, SideProject, LocaleContent } from "@/lib/i18n";
import { textColorMap, bgPaleMap, borderLMap, borderPaleMap } from "@/components/ui/Tag";
import Tag from "@/components/ui/Tag";
import Arrow from "@/components/ui/Arrow";

type AnyProject = Project | SideProject;

export default function CaseStudy({
  project,
  nextProject,
  nextHref,
  backHref,
  content,
}: {
  project: AnyProject;
  nextProject?: AnyProject;
  nextHref?: string;
  backHref: string;
  content: LocaleContent;
}) {
  const color = project.color;

  return (
    <div className="max-w-[920px] mx-auto px-8 pt-12">
      <Link
        href={backHref}
        className="text-fg-mid font-sans font-semibold text-sm inline-flex items-center gap-1.5 mb-7 no-underline transition-colors duration-150 hover:text-indigo"
      >
        ← {content.ui.backToWork}
      </Link>

      <div className="flex items-center gap-2.5 mb-4">
        <span className={`text-2xs font-[800] tracking-[0.1em] uppercase ${textColorMap[color]}`}>
          {content.ui.caseStudy}
        </span>
        <span className="text-xs text-fg-soft">·</span>
        <span className="text-xs font-bold tracking-[0.06em] uppercase text-fg-soft">
          {project.status}
        </span>
      </div>

      <h1 className="font-display font-bold text-[clamp(28px,4.5cqw,44px)] tracking-[-0.025em] leading-[1.15] text-fg mb-3">
        {project.title}
      </h1>

      {"company" in project && (
        <div className="text-[15px] text-fg-mid mb-7">{(project as Project).company}</div>
      )}

      {/* Image placeholder */}
      <div className="w-full aspect-video mb-9 bg-bg-alt border-1.5 border-border rounded-2xl flex items-center justify-center text-fg-soft text-sm font-sans">
        {content.ui.screenshotHint}
      </div>

      <div className="grid grid-cols-[1fr_240px] gap-12 items-start">
        <div>
          <h2 className="font-display font-bold text-[22px] text-fg mb-3.5">
            {content.ui.overview}
          </h2>
          <p
            className={`text-[17px] text-fg-mid leading-[1.75] ${project.outcome ? "mb-6" : "mb-2"}`}
          >
            {project.desc}
          </p>
          {project.outcome && (
            <div
              className={`${bgPaleMap[color]} border-1.5 ${borderPaleMap[color]} rounded-xl px-5 py-4 flex flex-col gap-1`}
            >
              <span
                className={`text-2xs font-[800] tracking-[0.08em] uppercase ${textColorMap[color]}`}
              >
                {content.ui.outcome}
              </span>
              <span className="text-base font-semibold text-fg leading-[1.5]">
                {project.outcome}
              </span>
            </div>
          )}

          {/* Body content */}
          {(project.markdown || ("body" in project && project.body)) && (
            <>
              <div className="h-px bg-border my-8" />
              <article>
                {project.markdown ? (
                  <ReactMarkdown
                    components={{
                      h2: ({ children }) => (
                        <h2 className="font-display font-bold text-xl text-fg mt-8 mb-3.5">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="font-display font-bold text-[18px] text-fg mt-7 mb-3.5">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-base text-fg-mid leading-[1.75] mb-4.5">{children}</p>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote
                          className={`${borderLMap[color]} ${bgPaleMap[color]} border-l-[3px] rounded-[0_12px_12px_0] px-5 py-4 my-6 font-display text-base font-medium text-fg leading-relaxed italic`}
                        >
                          {children}
                        </blockquote>
                      ),
                      code: ({ children }) => (
                        <code className="font-mono bg-panel text-indigo px-1.5 py-0.5 rounded text-sm">
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <pre className="bg-panel border border-border rounded-[10px] px-5.5 py-4.5 overflow-x-auto mb-4.5">
                          {children}
                        </pre>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-bold text-fg">{children}</strong>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-indigo underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {project.markdown}
                  </ReactMarkdown>
                ) : (
                  "body" in project &&
                  project.body?.map((block, i) => {
                    if (block.h)
                      return (
                        <h3
                          key={i}
                          className="font-display font-bold text-[18px] text-fg mt-7 mb-3.5"
                        >
                          {block.h}
                        </h3>
                      );
                    if (block.quote)
                      return (
                        <blockquote
                          key={i}
                          className={`${borderLMap[color]} ${bgPaleMap[color]} border-l-[3px] rounded-[0_12px_12px_0] px-5 py-4 my-6 font-display text-base font-medium text-fg leading-relaxed italic`}
                        >
                          {block.quote}
                        </blockquote>
                      );
                    return (
                      <p key={i} className="text-base text-fg-mid leading-[1.75] mb-4.5">
                        {block.p}
                      </p>
                    );
                  })
                )}
              </article>
            </>
          )}
        </div>

        <aside className="flex flex-col gap-5.5 border-l-[1.5px] border-border pl-7">
          {"company" in project && (
            <div>
              <div className="text-2xs font-[800] tracking-[0.08em] uppercase text-fg-soft mb-2">
                {content.ui.theRole}
              </div>
              <div className="text-sm text-fg font-medium">{content.role}</div>
            </div>
          )}
          <div>
            <div className="text-2xs font-[800] tracking-[0.08em] uppercase text-fg-soft mb-2.5">
              {content.ui.theStack}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <Tag key={t} color={project.color}>
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {nextProject && nextHref && (
        <div className="mt-12 pt-7 border-t-[1.5px] border-border flex justify-end">
          <Link href={nextHref} className="text-right no-underline">
            <div className="text-xs font-semibold text-fg-soft mb-0.5">
              {content.ui.nextProject}
            </div>
            <div className="font-display font-bold text-[17px] text-indigo flex items-center gap-2 justify-end">
              {nextProject.title} <Arrow />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

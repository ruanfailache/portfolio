import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Project, SideProject, LocaleContent, Locale } from "@/lib/i18n";
import { accentColors } from "@/components/ui/Tag";
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
  const { bg, fg } = accentColors(project.color);

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "48px 32px 0" }}>
      <Link
        href={backHref}
        style={{
          color: "var(--fg-mid)",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 28,
          textDecoration: "none",
          transition: "color 0.15s",
        }}
      >
        ← {content.ui.backToWork}
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: fg }}>
          {content.ui.caseStudy}
        </span>
        <span style={{ fontSize: 12, color: "var(--fg-soft)" }}>·</span>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--fg-soft)" }}>
          {project.status}
        </span>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(28px, 4.5cqw, 44px)",
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
          color: "var(--fg)",
          marginBottom: 12,
        }}
      >
        {project.title}
      </h1>

      {"company" in project && (
        <div style={{ fontSize: 15, color: "var(--fg-mid)", marginBottom: 28 }}>
          {(project as Project).company}
        </div>
      )}

      {/* Image placeholder */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          marginBottom: 36,
          background: "var(--bg-alt)",
          border: "1.5px solid var(--border)",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--fg-soft)",
          fontSize: 14,
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        {content.ui.screenshotHint}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 48, alignItems: "start" }}>
        <div>
          <h2
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "var(--fg)",
              marginBottom: 14,
            }}
          >
            {content.ui.overview}
          </h2>
          <p style={{ fontSize: 17, color: "var(--fg-mid)", lineHeight: 1.75, marginBottom: project.outcome ? 24 : 8 }}>
            {project.desc}
          </p>
          {project.outcome && (
            <div
              style={{
                background: bg,
                border: `1.5px solid ${fg}33`,
                borderRadius: 12,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: fg }}>
                {content.ui.outcome}
              </span>
              <span style={{ fontSize: 16, fontWeight: 600, color: "var(--fg)", lineHeight: 1.5 }}>
                {project.outcome}
              </span>
            </div>
          )}

          {/* Body content for side projects */}
          {(project.markdown || ("body" in project && project.body)) && (
            <>
              <div style={{ height: 1, background: "var(--border)", margin: "32px 0" }} />
              <article>
                {project.markdown ? (
                  <ReactMarkdown
                    components={{
                      h2: ({ children }) => (
                        <h2 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 20, color: "var(--fg)", margin: "32px 0 14px" }}>{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 18, color: "var(--fg)", margin: "28px 0 14px" }}>{children}</h3>
                      ),
                      p: ({ children }) => (
                        <p style={{ fontSize: 16, color: "var(--fg-mid)", lineHeight: 1.75, marginBottom: 18 }}>{children}</p>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote style={{ borderLeft: `3px solid ${fg}`, background: bg, borderRadius: "0 12px 12px 0", padding: "16px 20px", margin: "24px 0", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 16, fontWeight: 500, color: "var(--fg)", lineHeight: 1.6, fontStyle: "italic" }}>{children}</blockquote>
                      ),
                      code: ({ children }) => (
                        <code style={{ fontFamily: "monospace", background: "var(--panel)", color: "var(--indigo)", padding: "2px 6px", borderRadius: 4, fontSize: 14 }}>{children}</code>
                      ),
                      pre: ({ children }) => (
                        <pre style={{ background: "var(--panel)", border: "1px solid var(--border)", borderRadius: 10, padding: "18px 22px", overflowX: "auto", marginBottom: 18 }}>{children}</pre>
                      ),
                      strong: ({ children }) => (
                        <strong style={{ fontWeight: 700, color: "var(--fg)" }}>{children}</strong>
                      ),
                      a: ({ href, children }) => (
                        <a href={href} style={{ color: "var(--indigo)", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">{children}</a>
                      ),
                    }}
                  >
                    {project.markdown}
                  </ReactMarkdown>
                ) : (
                  "body" in project && project.body?.map((block, i) => {
                    if (block.h) return (
                      <h3 key={i} style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 18, color: "var(--fg)", margin: "28px 0 14px" }}>
                        {block.h}
                      </h3>
                    );
                    if (block.quote) return (
                      <blockquote key={i} style={{ borderLeft: `3px solid ${fg}`, background: bg, borderRadius: "0 12px 12px 0", padding: "16px 20px", margin: "24px 0", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 16, fontWeight: 500, color: "var(--fg)", lineHeight: 1.6, fontStyle: "italic" }}>
                        {block.quote}
                      </blockquote>
                    );
                    return (
                      <p key={i} style={{ fontSize: 16, color: "var(--fg-mid)", lineHeight: 1.75, marginBottom: 18 }}>
                        {block.p}
                      </p>
                    );
                  })
                )}
              </article>
            </>
          )}
        </div>

        <aside
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            borderLeft: "1.5px solid var(--border)",
            paddingLeft: 28,
          }}
        >
          {"company" in project && (
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-soft)", marginBottom: 8 }}>
                {content.ui.theRole}
              </div>
              <div style={{ fontSize: 14, color: "var(--fg)", fontWeight: 500 }}>{content.role}</div>
            </div>
          )}
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-soft)", marginBottom: 10 }}>
              {content.ui.theStack}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.tags.map((t) => <Tag key={t} color={project.color}>{t}</Tag>)}
            </div>
          </div>
        </aside>
      </div>

      {nextProject && nextHref && (
        <div style={{ marginTop: 48, paddingTop: 28, borderTop: "1.5px solid var(--border)", display: "flex", justifyContent: "flex-end" }}>
          <Link href={nextHref} style={{ textAlign: "right", textDecoration: "none" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--fg-soft)", marginBottom: 2 }}>
              {content.ui.nextProject}
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "var(--indigo)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                justifyContent: "flex-end",
              }}
            >
              {nextProject.title} <Arrow />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import { buildAlternates, ogLocale } from "@/lib/seo";
import { caseStudySchema } from "@/lib/jsonld";
import { fetchProject, fetchProjects } from "@/lib/content";
import CaseStudy from "../_components/CaseStudy";

export const dynamicParams = false;

export async function generateStaticParams() {
  const locales = ["en", "pt", "ja"];
  const results = await Promise.all(
    locales.map(async (lang) => {
      const data = await fetchProjects(lang);
      const all = [...(data?.projects ?? []), ...(data?.sideProjects ?? [])];
      return all.map((p) => ({ lang, slug: p.slug! }));
    })
  );
  return results.flat();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const project = await fetchProject(slug, locale);
  if (!project) return { title: "Case Study" };

  return {
    title: project.title,
    description: project.desc,
    keywords: project.tags,
    openGraph: {
      type: "article",
      title: project.title,
      description: project.desc,
      locale: ogLocale(locale),
    },
    alternates: buildAlternates(locale, (l) => `/${l}/work/${slug}`),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const content = getContent(locale);

  const project = await fetchProject(slug, locale);
  if (!project) notFound();

  const projectList = await fetchProjects(locale);
  const allProjects = projectList ? [...projectList.projects, ...projectList.sideProjects] : [];

  const idx = allProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    allProjects.length > 1 ? allProjects[(idx + 1) % allProjects.length] : undefined;
  const nextHref = nextProject?.slug ? `/${locale}/work/${nextProject.slug}` : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema(project, locale, content)),
        }}
      />
      <CaseStudy
        project={project}
        nextProject={nextProject}
        nextHref={nextHref}
        backHref={`/${locale}/work`}
        content={content}
      />
    </>
  );
}

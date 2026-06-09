import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import { buildAlternates, ogLocale } from "@/lib/seo";
import { caseStudySchema } from "@/lib/jsonld";
import { fetchProject, fetchProjects } from "@/lib/strapi";
import CaseStudy from "@/features/work/CaseStudy";

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  return [];
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

  const strapiList = await fetchProjects(locale);
  const allProjects = strapiList
    ? [...strapiList.projects, ...strapiList.sideProjects]
    : [];

  const idx = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects.length > 1
    ? allProjects[(idx + 1) % allProjects.length]
    : undefined;
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

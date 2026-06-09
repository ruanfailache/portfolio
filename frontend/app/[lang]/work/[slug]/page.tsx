import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";
import { fetchProject, fetchProjects } from "@/lib/strapi";
import CaseStudy from "@/features/work/CaseStudy";

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  // Pre-render only i18n.ts projects at build time.
  // New Strapi projects are served on first request via ISR.
  return LOCALES.flatMap((lang) => {
    const content = getContent(lang);
    const projects = [...content.projects, ...content.sideProjects];
    return projects
      .filter((p) => p.slug)
      .map((p) => ({ lang, slug: p.slug as string }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const content = getContent(locale);
  const strapiProject = await fetchProject(slug, locale);
  const project =
    strapiProject ??
    [...content.projects, ...content.sideProjects].find((p) => p.slug === slug);
  if (!project) return { title: "Case Study" };

  return {
    title: project.title,
    description: project.desc,
    keywords: project.tags,
    openGraph: {
      type: "website",
      title: project.title,
      description: project.desc,
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

  // Fetch the target project (Strapi first, fallback to i18n.ts)
  const strapiProject = await fetchProject(slug, locale);
  const fallbackAll = [...content.projects, ...content.sideProjects];
  const project = strapiProject ?? fallbackAll.find((p) => p.slug === slug);
  if (!project) notFound();

  // Build the "next" project ring from Strapi list if available, else i18n.ts
  const strapiList = await fetchProjects(locale);
  const allProjects = strapiList
    ? [...strapiList.projects, ...strapiList.sideProjects]
    : fallbackAll;

  const idx = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects.length > 1
    ? allProjects[(idx + 1) % allProjects.length]
    : undefined;
  const nextHref = nextProject?.slug ? `/${locale}/work/${nextProject.slug}` : undefined;

  return (
    <CaseStudy
      project={project}
      nextProject={nextProject}
      nextHref={nextHref}
      backHref={`/${locale}/work`}
      content={content}
    />
  );
}

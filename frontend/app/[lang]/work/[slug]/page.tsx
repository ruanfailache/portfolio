import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, getContent, type Locale } from "@/lib/i18n";
import CaseStudy from "@/features/work/CaseStudy";

export async function generateStaticParams() {
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
  const content = getContent(lang as Locale);
  const project = [...content.projects, ...content.sideProjects].find((p) => p.slug === slug);
  return { title: project ? `${project.title} | ${content.name}` : "Case Study" };
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
  const allProjects = [...content.projects, ...content.sideProjects];
  const idx = allProjects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();

  const project = allProjects[idx];
  const nextProject = allProjects[(idx + 1) % allProjects.length];
  const nextHref = `/${locale}/work/${nextProject.slug}`;

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

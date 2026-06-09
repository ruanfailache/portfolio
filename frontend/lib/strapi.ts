import "server-only";
import type { Project, SideProject, AccentColor } from "./i18n";
import type { Post } from "./types";

const BASE_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const TOKEN = process.env.STRAPI_TOKEN ?? "";

export interface StrapiPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  read: string;
  tag: string;
  color: AccentColor;
  summary: string;
  body: string;
  publishedAt: string;
  locale: string;
}

async function strapiRequest<T>(
  path: string,
  tags: string[] = []
): Promise<T | null> {
  if (!TOKEN) return null;
  try {
    const res = await fetch(`${BASE_URL}/api${path}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
      next: { revalidate: 3600, tags },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data as T;
  } catch {
    return null;
  }
}

function strapiPostToPost(sp: StrapiPost): Post {
  const publishedAt = sp.publishedAt?.slice(0, 10);
  return {
    title: sp.title,
    slug: sp.slug,
    date: formatDate(sp.publishedAt, sp.locale),
    publishedAt,
    read: sp.read ?? "",
    tag: sp.tag,
    color: sp.color ?? "indigo",
    summary: sp.summary,
    body: [],
    markdown: sp.body,
  };
}

function formatDate(iso: string, locale: string): string {
  try {
    const bcp47 = locale === "pt" ? "pt-BR" : locale === "ja" ? "ja-JP" : "en-US";
    return new Date(iso).toLocaleDateString(bcp47, {
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso?.slice(0, 7) ?? "";
  }
}

export async function fetchPosts(locale: string): Promise<Post[] | null> {
  const data = await strapiRequest<StrapiPost[]>(
    `/posts?locale=${locale}&sort=publishedAt:desc&pagination[pageSize]=100`,
    ["posts", `posts-${locale}`]
  );
  return data ? data.map(strapiPostToPost) : null;
}

export async function fetchPost(
  slug: string,
  locale: string
): Promise<Post | null> {
  const data = await strapiRequest<StrapiPost[]>(
    `/posts?filters[slug][$eq]=${slug}&locale=${locale}`,
    ["posts", `posts-${locale}`, `post-${slug}`]
  );
  const sp = data?.[0];
  return sp ? strapiPostToPost(sp) : null;
}

export interface StrapiProject {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  projectType: "client" | "side";
  company?: string;
  status: string;
  color: AccentColor;
  desc: string;
  outcome?: string;
  tags: string[];
  body?: string;
  order: number;
  locale: string;
}

function strapiProjectToProject(sp: StrapiProject): Project {
  return {
    title: sp.title,
    slug: sp.slug,
    company: sp.company ?? "",
    status: sp.status,
    color: sp.color ?? "indigo",
    desc: sp.desc,
    outcome: sp.outcome,
    tags: sp.tags ?? [],
    markdown: sp.body,
    order: sp.order,
  };
}

function strapiProjectToSideProject(sp: StrapiProject): SideProject {
  return {
    title: sp.title,
    slug: sp.slug,
    status: sp.status,
    color: sp.color ?? "indigo",
    desc: sp.desc,
    outcome: sp.outcome,
    tags: sp.tags ?? [],
    markdown: sp.body,
    order: sp.order,
  };
}

export interface StrapiProjectResult {
  projects: Project[];
  sideProjects: SideProject[];
}

export async function fetchProjects(
  locale: string
): Promise<StrapiProjectResult | null> {
  const data = await strapiRequest<StrapiProject[]>(
    `/projects?locale=${locale}&sort=order:asc&pagination[pageSize]=100`,
    ["projects", `projects-${locale}`]
  );
  if (!data) return null;
  return {
    projects: data
      .filter((p) => p.projectType === "client")
      .map(strapiProjectToProject),
    sideProjects: data
      .filter((p) => p.projectType === "side")
      .map(strapiProjectToSideProject),
  };
}

export async function fetchProject(
  slug: string,
  locale: string
): Promise<Project | SideProject | null> {
  const data = await strapiRequest<StrapiProject[]>(
    `/projects?filters[slug][$eq]=${slug}&locale=${locale}`,
    ["projects", `projects-${locale}`, `project-${slug}`]
  );
  const sp = data?.[0];
  if (!sp) return null;
  return sp.projectType === "side"
    ? strapiProjectToSideProject(sp)
    : strapiProjectToProject(sp);
}

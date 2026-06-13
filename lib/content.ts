import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "./types";
import type { Project, SideProject, AccentColor } from "./i18n";

const CONTENT_DIR = path.join(process.cwd(), "content");

function readMarkdownFiles(dir: string): matter.GrayMatterFile<string>[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => matter(fs.readFileSync(path.join(dir, f), "utf-8")));
}

function formatDate(isoDate: string, locale: string): string {
  try {
    const bcp47 = locale === "pt" ? "pt-BR" : locale === "ja" ? "ja-JP" : "en-US";
    return new Date(isoDate).toLocaleDateString(bcp47, {
      month: "long",
      year: "numeric",
    });
  } catch {
    return isoDate?.slice(0, 7) ?? "";
  }
}

// Posts

export async function fetchPosts(locale: string): Promise<Post[] | null> {
  const dir = path.join(CONTENT_DIR, "posts", locale);
  const files = readMarkdownFiles(dir);
  if (!files.length) return null;

  return files
    .map(({ data, content }) => ({
      title: data.title as string,
      slug: data.slug as string,
      date: formatDate(data.date as string, locale),
      publishedAt: (data.date as string)?.slice(0, 10),
      read: (data.read as string) ?? "",
      tag: data.tag as string,
      color: (data.color as AccentColor) ?? "indigo",
      summary: data.summary as string,
      body: [],
      markdown: content,
    }))
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

export async function fetchPost(slug: string, locale: string): Promise<Post | null> {
  const dir = path.join(CONTENT_DIR, "posts", locale);
  const files = readMarkdownFiles(dir);
  const file = files.find((f) => f.data.slug === slug);
  if (!file) return null;

  const { data, content } = file;
  return {
    title: data.title as string,
    slug: data.slug as string,
    date: formatDate(data.date as string, locale),
    publishedAt: (data.date as string)?.slice(0, 10),
    read: (data.read as string) ?? "",
    tag: data.tag as string,
    color: (data.color as AccentColor) ?? "indigo",
    summary: data.summary as string,
    body: [],
    markdown: content,
  };
}

// Projects

export interface ProjectResult {
  projects: Project[];
  sideProjects: SideProject[];
}

export async function fetchProjects(locale: string): Promise<ProjectResult | null> {
  const dir = path.join(CONTENT_DIR, "projects", locale);
  const files = readMarkdownFiles(dir);
  if (!files.length) return null;

  const all = files.map(({ data, content }) => ({ data, content }));
  const sorted = all.sort(
    (a, b) => ((a.data.order as number) ?? 0) - ((b.data.order as number) ?? 0)
  );

  const projects: Project[] = sorted
    .filter((f) => f.data.projectType === "client")
    .map(({ data, content }) => ({
      title: data.title as string,
      slug: data.slug as string,
      company: (data.company as string) ?? "",
      status: data.status as string,
      color: (data.color as AccentColor) ?? "indigo",
      desc: data.desc as string,
      outcome: data.outcome as string | undefined,
      tags: (data.tags as string[]) ?? [],
      markdown: content || undefined,
      order: (data.order as number) ?? 0,
    }));

  const sideProjects: SideProject[] = sorted
    .filter((f) => f.data.projectType === "side")
    .map(({ data, content }) => ({
      title: data.title as string,
      slug: data.slug as string,
      status: data.status as string,
      color: (data.color as AccentColor) ?? "indigo",
      desc: data.desc as string,
      outcome: data.outcome as string | undefined,
      tags: (data.tags as string[]) ?? [],
      markdown: content || undefined,
      order: (data.order as number) ?? 0,
    }));

  return { projects, sideProjects };
}

export async function fetchProject(
  slug: string,
  locale: string
): Promise<Project | SideProject | null> {
  const dir = path.join(CONTENT_DIR, "projects", locale);
  const files = readMarkdownFiles(dir);
  const file = files.find((f) => f.data.slug === slug);
  if (!file) return null;

  const { data, content } = file;
  const base = {
    title: data.title as string,
    slug: data.slug as string,
    status: data.status as string,
    color: (data.color as AccentColor) ?? "indigo",
    desc: data.desc as string,
    outcome: data.outcome as string | undefined,
    tags: (data.tags as string[]) ?? [],
    markdown: content || undefined,
    order: (data.order as number) ?? 0,
  };

  if (data.projectType === "side") return base as SideProject;
  return { ...base, company: (data.company as string) ?? "" } as Project;
}

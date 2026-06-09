import "server-only";

const BASE_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const TOKEN = process.env.STRAPI_TOKEN ?? "";

async function strapiRequest<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}/api${path}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Strapi request failed: ${res.status} ${path}`);
  const json = await res.json();
  return json.data as T;
}

export async function fetchProjects(locale: string) {
  return strapiRequest(`/projects?locale=${locale}&populate=*`);
}

export async function fetchPosts(locale: string) {
  return strapiRequest(`/posts?locale=${locale}&populate=*`);
}

export async function fetchPost(slug: string, locale: string) {
  return strapiRequest(`/posts?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`);
}

export async function fetchProject(slug: string, locale: string) {
  return strapiRequest(`/projects?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`);
}

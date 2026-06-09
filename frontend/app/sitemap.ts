import type { MetadataRoute } from "next";
import { LOCALES, getContent } from "@/lib/i18n";
import { fetchPosts } from "@/lib/strapi";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    const content = getContent(locale);

    entries.push({
      url: `${SITE_URL}/${locale}`,
      changeFrequency: "monthly",
      priority: 1,
    });

    entries.push({
      url: `${SITE_URL}/${locale}/blog`,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    const posts = await fetchPosts(locale);
    for (const post of posts ?? []) {
      if (post.slug) {
        entries.push({
          url: `${SITE_URL}/${locale}/blog/${post.slug}`,
          lastModified: post.publishedAt ? new Date(post.publishedAt) : undefined,
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    }

    entries.push({
      url: `${SITE_URL}/${locale}/work`,
      changeFrequency: "monthly",
      priority: 0.7,
    });

    for (const project of [...content.projects, ...content.sideProjects]) {
      if (project.slug) {
        entries.push({
          url: `${SITE_URL}/${locale}/work/${project.slug}`,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }

    entries.push({
      url: `${SITE_URL}/${locale}/contact`,
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }

  return entries;
}

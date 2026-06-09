import type { LocaleContent } from "./i18n";
import type { Post } from "./types";
import { SITE_URL } from "./seo";

export function personSchema(content: LocaleContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.name,
    jobTitle: content.role,
    description: content.headline,
    email: `mailto:${content.contact.email}`,
    url: SITE_URL,
    sameAs: [
      `https://${content.contact.linkedin}`,
      `https://${content.contact.github}`,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Campinas",
      addressRegion: "São Paulo",
      addressCountry: "BR",
    },
  };
}

export function blogPostingSchema(
  post: Post,
  locale: string,
  content: LocaleContent
) {
  const postUrl = `${SITE_URL}/${locale}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    url: postUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    author: {
      "@type": "Person",
      name: content.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: content.name,
      url: SITE_URL,
    },
    keywords: post.tag,
    inLanguage: locale,
    articleSection: post.tag,
  };
}

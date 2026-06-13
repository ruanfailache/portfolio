import type { AccentColor, BodyBlock } from "./i18n";

export interface Post {
  title: string;
  date: string;
  publishedAt?: string;
  read: string;
  tag: string;
  color: AccentColor;
  summary: string;
  body: BodyBlock[];
  markdown?: string;
  slug?: string;
}

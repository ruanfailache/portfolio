import type { Post } from "@/lib/types";

export const mockPost: Post = {
  title: "Shipping AI Agents to a Skeptical Enterprise Team",
  slug: "shipping-ai-agents-enterprise",
  date: "May 2026",
  publishedAt: "2026-05-01",
  read: "6 min",
  tag: "AI & Agents",
  color: "amber",
  summary:
    "How I brought agent based workflows and Spec Driven Development to an international BMW team that had never trusted AI with production code, and what actually moved the needle.",
  body: [
    { p: "Most attempts at AI adoption inside enterprise teams fail for the same reason." },
    { h: "Start with the boring wins" },
    { p: "I did not start with autonomous feature development." },
    { quote: "The teams that win with agents are the ones that were already good at writing things down." },
  ],
};

export const mockPosts: Post[] = [
  mockPost,
  {
    title: "Spec Driven Development: Writing Specs Agents Can Actually Execute",
    slug: "spec-driven-development",
    date: "Apr 2026",
    publishedAt: "2026-04-01",
    read: "8 min",
    tag: "SDD",
    color: "indigo",
    summary: "A practical look at how I structure specs so an agent produces code you would actually merge.",
    body: [{ p: "Spec Driven Development is not about prompting better." }],
  },
  {
    title: "Migrating AngularJS to Angular 17 Without a Big Bang Rewrite",
    slug: "angularjs-to-angular-17-migration",
    date: "Feb 2026",
    publishedAt: "2026-02-01",
    read: "7 min",
    tag: "Modernisation",
    color: "rose",
    summary: "The step by step strategy I used to modernise a government system.",
    body: [{ p: "Big bang rewrites are tempting and almost always wrong." }],
  },
];

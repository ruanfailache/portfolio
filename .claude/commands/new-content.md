Scaffold a new content file for the portfolio project.

## Usage

/new-content post <slug>
/new-content project <slug>

## What to create

### post <slug>

Create three files — one per locale — at:

- `content/posts/en/<slug>.md`
- `content/posts/pt/<slug>.md`
- `content/posts/ja/<slug>.md`

Each file must contain this frontmatter (all fields required):

```yaml
---
title: ""
slug: "<slug>"
date: "" # display string, e.g. "Jun 2026"
publishedAt: "" # ISO date, e.g. "2026-06-13"
read: "" # e.g. "5 min"
tag: "" # single tag string
color: "" # one of: indigo | sage | rose | amber
summary: ""
---
```

### project <slug>

Create three files — one per locale — at:

- `content/projects/en/<slug>.md`
- `content/projects/pt/<slug>.md`
- `content/projects/ja/<slug>.md`

Each file must contain this frontmatter (all fields required unless noted):

```yaml
---
title: ""
slug: "<slug>"
projectType: "" # client | side
company: "" # omit for side projects
status: "" # e.g. "Shipped" | "In Progress" | "Archived"
color: "" # one of: indigo | sage | rose | amber
desc: ""
outcome: ""
tags: [] # array of strings
order: 0 # integer, lower = appears first
---
```

## Rules

- Always create all three locale files — never create just one
- The `slug` field in frontmatter must exactly match the filename (without `.md`)
- Leave translatable text fields as `""` — do not auto-translate; the user fills them in
- `publishedAt` drives sort order; `date` is what users see — both are required for posts
- After scaffolding, remind the user to fill in all three locale versions before deploying

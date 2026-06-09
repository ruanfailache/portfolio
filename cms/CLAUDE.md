# CMS — Project Conventions

## Content types

- Enable localisation on every content type — locales are `en`, `pt`, `ja`
- Match field names to the interfaces in `frontend/lib/strapi.ts`; the frontend falls back to `lib/i18n.ts` when Strapi is unavailable, so mismatched fields will silently use fallback data

## API tokens

Tokens are created in the Strapi admin panel and passed via `STRAPI_TOKEN` to the frontend — the token never reaches the browser (proxied through `frontend/app/api/cms/[...path]/`).

## Docker

The Dockerfile needs `python3 make g++` at build time for `better-sqlite3`. SQLite data persists via the `cms_data` Docker volume at `/app/.tmp` — don't change that path without updating `docker-compose.yml`.

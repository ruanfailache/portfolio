import type { NextRequest } from "next/server";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_TOKEN ?? "";

export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ path: string[] }> }
) {
  const { path } = await ctx.params;
  const strapiPath = path.join("/");
  const search = request.nextUrl.search;

  const res = await fetch(`${STRAPI_URL}/api/${strapiPath}${search}`, {
    headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
  });

  const data = await res.json();
  return Response.json(data, { status: res.status });
}

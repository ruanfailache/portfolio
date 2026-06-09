import { revalidatePath, revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

const SECRET = process.env.REVALIDATE_SECRET ?? "";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const token = request.headers.get("x-revalidate-token");

  if (!SECRET || token !== SECRET) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const tags: string[] = body.tags ?? [];
  const paths: string[] = body.paths ?? [];

  tags.forEach((t) => revalidateTag(t, "default"));
  paths.forEach((p) => revalidatePath(p));

  return Response.json({ revalidated: { tags, paths } });
}

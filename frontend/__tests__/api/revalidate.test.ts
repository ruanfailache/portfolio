import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";

function makeRequest(token: string | null, body?: object): NextRequest {
  const headers: Record<string, string> = { "content-type": "application/json" };
  if (token !== null) headers["x-revalidate-token"] = token;
  return new NextRequest("http://localhost/api/revalidate", {
    method: "POST",
    headers,
    body: body !== undefined ? JSON.stringify(body) : JSON.stringify({}),
  });
}

describe("POST /api/revalidate", () => {
  const originalSecret = process.env.REVALIDATE_SECRET;

  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    process.env.REVALIDATE_SECRET = originalSecret;
  });

  it("returns 401 when REVALIDATE_SECRET is not set", async () => {
    delete process.env.REVALIDATE_SECRET;
    const { POST } = await import("@/app/api/revalidate/route");
    const res = await POST(makeRequest("anything"));
    expect(res.status).toBe(401);
  });

  it("returns 401 when the token does not match", async () => {
    process.env.REVALIDATE_SECRET = "correct-secret";
    const { POST } = await import("@/app/api/revalidate/route");
    const res = await POST(makeRequest("wrong-secret"));
    expect(res.status).toBe(401);
  });

  it("returns 401 when no token header is provided", async () => {
    process.env.REVALIDATE_SECRET = "correct-secret";
    const { POST } = await import("@/app/api/revalidate/route");
    const res = await POST(makeRequest(null));
    expect(res.status).toBe(401);
  });

  it("returns 200 and revalidates specified paths when token matches", async () => {
    process.env.REVALIDATE_SECRET = "correct-secret";
    const { POST } = await import("@/app/api/revalidate/route");
    const { revalidatePath } = await import("next/cache");

    const res = await POST(makeRequest("correct-secret", { paths: ["/en", "/pt"] }));
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.revalidated.paths).toEqual(["/en", "/pt"]);
    expect(revalidatePath).toHaveBeenCalledWith("/en");
    expect(revalidatePath).toHaveBeenCalledWith("/pt");
  });

  it("revalidates by tag when tags are provided", async () => {
    process.env.REVALIDATE_SECRET = "correct-secret";
    const { POST } = await import("@/app/api/revalidate/route");
    const { revalidateTag } = await import("next/cache");

    const res = await POST(makeRequest("correct-secret", { tags: ["posts"] }));
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.revalidated.tags).toEqual(["posts"]);
    expect(revalidateTag).toHaveBeenCalledWith("posts", "default");
  });

  it("returns empty arrays when no paths or tags are provided", async () => {
    process.env.REVALIDATE_SECRET = "correct-secret";
    const { POST } = await import("@/app/api/revalidate/route");

    const res = await POST(makeRequest("correct-secret"));
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.revalidated).toEqual({ tags: [], paths: [] });
  });
});

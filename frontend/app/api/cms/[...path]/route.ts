import type { NextRequest } from "next/server";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const TOKEN = process.env.STRAPI_TOKEN ?? "";

async function forward(request: NextRequest, path: string[]): Promise<Response> {
  if (!TOKEN) return Response.json({ error: "Not configured" }, { status: 503 });

  const url = `${STRAPI_URL}/api/${path.join("/")}${request.nextUrl.search}`;
  const res = await fetch(url, {
    method: request.method,
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: ["GET", "HEAD"].includes(request.method) ? undefined : await request.text(),
  });

  const data = await res.json();
  return Response.json(data, { status: res.status });
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return forward(request, (await params).path);
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return forward(request, (await params).path);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return forward(request, (await params).path);
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return forward(request, (await params).path);
}

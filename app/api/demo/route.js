import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost/api/route/demo", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}

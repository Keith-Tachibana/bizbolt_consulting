import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('/api/route/contacts', {
    headers: {
      'Content-Type': 'application/json'
    };
  });
  const data = await res.json();

  return NextResponse.json({ data });
};

export async function GET() {
  const res = await fetch('/api/route/demo', {
    headers: {
      'Content-Type': 'application/json'
    };
  });
  const data = await res.json();

  return NextResponse.json({ data });
};

import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(`localhost:${process.env.PORT}`, {
    headers: {
      'Content-Type': 'application/json'
    };
  });
  const data = await res.json();

  return NextResponse.json({ data });
};

export async function POST(req) {
  const { data } = req.body;
  const res = await fetch(`localhost:${process.env.PORT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const results = await res.json();

  return NextResponse.json(results);
};

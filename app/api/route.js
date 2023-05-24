import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const res = await fetch('/api/route/contact', {
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

export async function POST(req) {
  const { firstName, lastName, email, gender, country, question, comment, file } = req.body;
  const result = await prisma.contact.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      country: country,
      question: question,
      comment: comment,
      file: file
    }
  });

  return res.status(201).json(result);
};

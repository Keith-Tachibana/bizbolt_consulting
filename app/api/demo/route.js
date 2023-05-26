import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma';

export async function GET(req) {
  const { firstName, lastName, email, gender, country, question, comment, file } = req.body;
  const result = await prisma.contact.findMany({
    data: {
      demoFirstName: demoFirstName,
      demoLastName: demoLastName,
      demoEmail: demoEmail,
      demoGender: demoGender,
      demoCountry: demoCountry,
      demoQuestion: demoQuestion,
      demoComment: demoComment,
      demoFile: demoFile
    }
  });
  return res.status(200).json(result);
};

export async function GET(req) {
  const { demoEmail } = req.body;
  const result = await prisma.contact.findUnique({
    where: {
      demoEmail: demoEmail
    }
  });
  return res.status(200).json(result);
};

export async function POST(req) {
  const { demoFirstName, demoLastName, demoEmail, demoCompany, demoQuestion, demoComment, demoFile } = req.body;
  const result = await prisma.demo.create({
    data: {
      demoFirstName: demoFirstName,
      demoLastName: demoLastName,
      demoEmail: demoEmail,
      demoCompany: demoCompany,
      demoQuestion: demoQuestion,
      demoComment: demoComment,
      demoFile: demoFile
    }
  });
  return res.status(201).json(result);
};

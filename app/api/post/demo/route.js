import prisma from '@/lib/prisma';

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

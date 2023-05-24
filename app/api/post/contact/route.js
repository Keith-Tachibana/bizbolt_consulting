import prisma from '@/lib/prisma';

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

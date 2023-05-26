const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.contact.create({
    data: {
      email: 'alice@prisma.io',
      firstName: 'Alice',
      lastName: 'Jo',
      gender: 'female',
      question: 'generalQuestions',
      comments: 'You guys suck'
    }
  });

  const bob = await prisma.demo.create({
    data: {
      demoEmail: 'bob@prisma.io',
      demoFirstName: 'Bob',
      demoLastName: 'Pickens',
      demoCompany: 'Google Inc.',
      demoQuestion: 'data',
      demoComments: 'What up guys!'
    }
  });
  console.log({ alice, bob });
};
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

import { db } from "@vercel/postgres";

export default async function handler(request, response) {
  const client = await db.connect();

  // try {
  //   await client.sql`CREATE TABLE Demo (id serial, demoFirstName text, demoLastName text, demoEmail text unique, demoCompany text, demoQuestion text, demoComments text null, demoFile text null, createdAt timestamp default now() );`;
  //   const data = [
  //     "Colin",
  //     "Gauthier",
  //     "colin@bizbolt.com",
  //     "BizBolt Consulting, LLC",
  //     "generalQuestions",
  //     "Love your RevOps!"
  //   ];
  //   await client.sql`INSERT INTO Demo VALUES (default, ${data[0]}, ${data[1]}, ${data[2]}, ${data[3]}, ${data[4]}, ${data[5]}, null, default);`;
  // } catch (error) {
  //   return response.status(500).json({ error });
  // }

  const demo = await client.sql`SELECT * FROM Demo;`;
  return response.status(200).json({ demo });
}

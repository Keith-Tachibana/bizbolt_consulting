import { db } from "@vercel/postgres";

export default async function handler(request, response) {
  const client = await db.connect();

  try {
    console.log('Request:', request);
    // const data = ['Keith', 'Tachibana', 'Male', 'Keith.Tachibana@gmail.com', 'generalQuestions', 'Nice site!']
    // await client.sql`INSERT INTO Contacts VALUES (default, ${data[0]}, ${data[1]}, ${data[2]}, ${data[3]}, null, ${data[4]}, ${data[5]}, null, default);`;
  } catch (error) {
    return response.status(500).json({ error });
  }

  const contacts = await client.sql`SELECT * FROM Contacts;`;
  return response.status(200).json({ contacts });
}

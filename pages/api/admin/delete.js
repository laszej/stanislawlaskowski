import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).end();

  const { id } = req.query;

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  await db.collection('blogs').deleteOne({ _id: id });
  client.close();

  res.status(200).json({ success: true });
}

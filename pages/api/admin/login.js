import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, password } = req.body;

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const user = await db.collection('users').findOne({ username });

  if (!user) {
    client.close();
    return res.status(401).json({ error: 'Nieprawidłowy login lub hasło' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  client.close();

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Nieprawidłowy login lub hasło' });
  }

  // Zwróć token (lub ustaw sesję)
  res.status(200).json({ success: true });
}
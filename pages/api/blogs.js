import { connectToDatabase } from '../../utils/mongodb'

export default async function handler(req, res) {
  // Tymczasowo usuń autentykację dla GET
  res.setHeader('Access-Control-Allow-Origin', '*')

  try {
    const { db } = await connectToDatabase()
    const data = await db.collection(req.query.collection).find({}).toArray()
    res.status(200).json(data)
  } catch (error) {
    console.error('GET Error:', error)
    res.status(500).json({ error: 'Database error' })
  }
}
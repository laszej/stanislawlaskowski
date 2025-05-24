import { connectToDatabase } from '../../utils/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  // Zezwól na dostęp z zewnątrz (np. localhost, inne porty)
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Obsługujemy tylko metodę DELETE
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { id, collection } = req.query

  // Walidacja – czy oba parametry istnieją
  if (!id || !collection) {
    return res.status(400).json({ error: 'Missing id or collection' })
  }

  try {
    const { db } = await connectToDatabase()

    const result = await db
      .collection(collection)
      .deleteOne({ _id: new ObjectId(id) })

    // Zwracamy info ile usunięto
    return res.status(200).json({ deletedCount: result.deletedCount })
  } catch (err) {
    console.error('DELETE error:', err)
    return res.status(500).json({ error: err.message })
  }
}

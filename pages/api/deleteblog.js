import { connectToDatabase } from '../../utils/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  // Tymczasowo wyłącz autentykację
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { id } = req.body
    const { db } = await connectToDatabase()
    
    const result = await db.collection('comments').deleteOne({ 
      _id: new ObjectId(id) 
    })

    res.status(200).json({ deletedCount: result.deletedCount })
    
  } catch (error) {
    console.error('DELETE Error:', error)
    res.status(500).json({ error: error.message })
  }
}
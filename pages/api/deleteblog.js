import { connectToDatabase } from '../../utils/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(422).json({ message: 'Invalid input' });
  }

  try {
    const { db } = await connectToDatabase(); // use the exported function

    const result = await db.collection('blogs').deleteOne({
      _id: ObjectId(id),
    });

    res.status(200).json({
      message: 'Blog deleted!',
      data: result.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Could not delete blog' });
  }
}
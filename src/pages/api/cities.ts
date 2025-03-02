// pages/api/cities.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all cities from the database
    const cities = await prisma.city.findMany();
    res.json(cities);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

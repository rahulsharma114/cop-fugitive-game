import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const fugitive = await prisma.fugitive.findFirst();
    return res.json(fugitive);
  }

  if (req.method === 'POST') {
    const cityId = Math.floor(Math.random() * 5) + 1; // Randomly select a city
    const fugitive = await prisma.fugitive.create({
      data: { cityId },
    });
    return res.json(fugitive);
  }

  return res.status(405).end(); // Method Not Allowed
}

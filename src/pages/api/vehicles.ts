import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const vehicles = await prisma.vehicle.findMany();
    return res.json(vehicles);
  }

  if (req.method === 'POST') {
    const { type, range, availableCount } = req.body;
    const newVehicle = await prisma.vehicle.create({
      data: { type, range, availableCount },
    });
    return res.json(newVehicle);
  }

  return res.status(405).end(); // Method Not Allowed
}

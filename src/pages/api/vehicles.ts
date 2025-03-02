import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const vehicles = await prisma.vehicle.findMany();
    return res.json(vehicles);
  }

  if (req.method === 'POST') {
    const { type, range, count } = req.body;
    const newVehicle = await prisma.vehicle.create({
      data: { type, range, count },
    });
    return res.json(newVehicle);
  }

  return res.status(405).end(); // Method Not Allowed
}

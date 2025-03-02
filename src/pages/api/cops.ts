import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, selectedCityId, selectedVehicleId } = req.body;
    const cop = await prisma.cop.create({
      data: { name, selectedCityId, selectedVehicleId },
    });
    return res.json(cop);
  }

  return res.status(405).end(); // Method Not Allowed
}
    
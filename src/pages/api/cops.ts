import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, selectedCityId, selectedVehicleId } = req.body;

    // Basic validation (could be improved with libraries like Zod or Joi)
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Name is required and must be a string.' });
    }

    if (!selectedCityId || typeof selectedCityId !== 'number') {
      return res.status(400).json({ error: 'selectedCityId must be a valid number.' });
    }

    if (!selectedVehicleId || typeof selectedVehicleId !== 'number') {
      return res.status(400).json({ error: 'selectedVehicleId must be a valid number.' });
    }

    try {
      // Create new 'cop' in the database using Prisma
      const cop = await prisma.cop.create({
        data: {
          name,
          selectedCityId,
          selectedVehicleId,
        },
      });
      
      // Return the created cop data
      return res.json(cop);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to create cop' });
    }
  }

  // If the method is not POST, return a 405 (Method Not Allowed)
  return res.status(405).end(); 
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create multiple cities
  await prisma.city.createMany({
    data: [
      { name: 'Yapkashnagar', distance: 60 },
      { name: 'Lihaspur', distance: 50 },
      { name: 'Narmis City', distance: 40 },
      { name: 'Shekharvati', distance: 30 },
      { name: 'Nuravgram', distance: 20 }
    ]
  });

  // Create multiple vehicles
  await prisma.vehicle.createMany({
    data: [
      { type: 'EV Bike', range: 60, count: 2 },
      { type: 'EV Car', range: 100, count: 1 },
      { type: 'EV SUV', range: 120, count: 1 }
    ]
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "range" INTEGER NOT NULL,
    "availableCount" INTEGER NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "selectedCityId" INTEGER NOT NULL,
    "selectedVehicleId" INTEGER NOT NULL,

    CONSTRAINT "Cop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fugitive" (
    "id" SERIAL NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "Fugitive_pkey" PRIMARY KEY ("id")
);

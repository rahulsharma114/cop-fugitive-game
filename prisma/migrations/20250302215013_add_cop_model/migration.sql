/*
  Warnings:

  - You are about to drop the column `availableCount` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `Fugitive` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `count` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "availableCount",
ADD COLUMN     "count" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Fugitive";

-- CreateTable
CREATE TABLE "CopSelection" (
    "id" SERIAL NOT NULL,
    "copName" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "CopSelection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CopSelection" ADD CONSTRAINT "CopSelection_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

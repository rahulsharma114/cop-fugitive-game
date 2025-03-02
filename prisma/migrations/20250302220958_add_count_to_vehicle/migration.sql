/*
  Warnings:

  - You are about to drop the column `availableCount` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `count` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "availableCount",
ADD COLUMN     "count" INTEGER NOT NULL;

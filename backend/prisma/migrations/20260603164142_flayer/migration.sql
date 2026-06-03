/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Market` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Flyer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flyer" ADD COLUMN     "description" TEXT,
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Market" DROP COLUMN "createdAt";

-- AddForeignKey
ALTER TABLE "Flyer" ADD CONSTRAINT "Flyer_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES "Market"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

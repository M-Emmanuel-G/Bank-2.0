/*
  Warnings:

  - A unique constraint covering the columns `[orderBy]` on the table `Extract` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Extract" ADD COLUMN     "orderBy" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Extract_orderBy_key" ON "Extract"("orderBy");

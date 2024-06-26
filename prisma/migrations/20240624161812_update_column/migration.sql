/*
  Warnings:

  - A unique constraint covering the columns `[account_cod]` on the table `CreditCard` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CreditCard" ALTER COLUMN "numberCard" SET DATA TYPE DECIMAL(18,2);

-- CreateIndex
CREATE UNIQUE INDEX "CreditCard_account_cod_key" ON "CreditCard"("account_cod");

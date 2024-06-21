/*
  Warnings:

  - A unique constraint covering the columns `[account_cod]` on the table `CreditCard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CreditCard_account_cod_key" ON "CreditCard"("account_cod");

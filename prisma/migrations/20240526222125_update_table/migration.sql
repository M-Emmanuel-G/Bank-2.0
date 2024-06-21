/*
  Warnings:

  - You are about to drop the column `account_id` on the `CreditCard` table. All the data in the column will be lost.
  - You are about to drop the column `account_id` on the `Extract` table. All the data in the column will be lost.
  - Added the required column `account_cod` to the `CreditCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `account_cod` to the `Extract` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CreditCard" DROP CONSTRAINT "CreditCard_account_id_fkey";

-- DropForeignKey
ALTER TABLE "Extract" DROP CONSTRAINT "Extract_account_id_fkey";

-- AlterTable
ALTER TABLE "CreditCard" DROP COLUMN "account_id",
ADD COLUMN     "account_cod" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Extract" DROP COLUMN "account_id",
ADD COLUMN     "account_cod" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Extract" ADD CONSTRAINT "Extract_account_cod_fkey" FOREIGN KEY ("account_cod") REFERENCES "AccountBank"("cod_account") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_account_cod_fkey" FOREIGN KEY ("account_cod") REFERENCES "AccountBank"("cod_account") ON DELETE RESTRICT ON UPDATE CASCADE;

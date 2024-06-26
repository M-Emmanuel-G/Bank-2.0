/*
  Warnings:

  - You are about to drop the column `Card_id` on the `TypeCreditCard` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "TypeCreditCard_category_key";

-- AlterTable
ALTER TABLE "TypeCreditCard" DROP COLUMN "Card_id";

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_categoryCard_fkey" FOREIGN KEY ("categoryCard") REFERENCES "TypeCreditCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "TypeCreditCard" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "Card_id" TEXT NOT NULL,
    "CardLimit" INTEGER NOT NULL,
    "Benefit" TEXT NOT NULL,

    CONSTRAINT "TypeCreditCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TypeCreditCard_category_key" ON "TypeCreditCard"("category");

-- AlterTable
ALTER TABLE "Clients" ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT;

-- CreateTable
CREATE TABLE "AccountBank" (
    "id" TEXT NOT NULL,
    "cod_account" TEXT NOT NULL,
    "balance" DECIMAL(10,2) NOT NULL,
    "account_type" TEXT NOT NULL,
    "account_created" TEXT NOT NULL,
    "account_status" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "AccountBank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccountBank_cod_account_key" ON "AccountBank"("cod_account");

-- AddForeignKey
ALTER TABLE "AccountBank" ADD CONSTRAINT "AccountBank_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Extract" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "account_id" TEXT NOT NULL,

    CONSTRAINT "Extract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditCard" (
    "id" TEXT NOT NULL,
    "numberCard" DECIMAL(10,2) NOT NULL,
    "nameCard" TEXT NOT NULL,
    "codSeg" DECIMAL(10,2) NOT NULL,
    "validadeCard" TEXT NOT NULL,
    "categoryCard" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,

    CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Extract" ADD CONSTRAINT "Extract_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "AccountBank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "AccountBank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

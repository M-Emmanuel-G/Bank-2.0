-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birth_date" TEXT NOT NULL,
    "full_address" TEXT NOT NULL,
    "cod_postal" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "RG" TEXT NOT NULL,
    "income" DECIMAL(10,2) NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clients_email_key" ON "Clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Clients_phone_key" ON "Clients"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Clients_CPF_key" ON "Clients"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "Clients_RG_key" ON "Clients"("RG");

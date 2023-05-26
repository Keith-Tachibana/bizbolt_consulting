/*
  Warnings:

  - You are about to drop the `Contacts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Demo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Contacts";

-- DropTable
DROP TABLE "Demo";

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "country" TEXT,
    "question" TEXT NOT NULL,
    "comments" TEXT,
    "file" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "demo" (
    "id" SERIAL NOT NULL,
    "demoFirstName" TEXT NOT NULL,
    "demoLastName" TEXT NOT NULL,
    "demoEmail" TEXT NOT NULL,
    "demoCompany" TEXT NOT NULL,
    "demoQuestion" TEXT NOT NULL,
    "demoComments" TEXT,
    "demoFile" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "demo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email_key" ON "contacts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "demo_demoEmail_key" ON "demo"("demoEmail");

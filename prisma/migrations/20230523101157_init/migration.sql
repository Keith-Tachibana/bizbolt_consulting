-- CreateTable
CREATE TABLE "Contacts" (
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

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Demo" (
    "id" SERIAL NOT NULL,
    "demoFirstName" TEXT NOT NULL,
    "demoLastName" TEXT NOT NULL,
    "demoEmail" TEXT NOT NULL,
    "demoCompany" TEXT NOT NULL,
    "demoQuestion" TEXT NOT NULL,
    "demoComments" TEXT,
    "demoFile" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Demo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contacts_email_key" ON "Contacts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Demo_demoEmail_key" ON "Demo"("demoEmail");

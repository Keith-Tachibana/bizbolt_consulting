DROP TABLE IF EXISTS "contacts";
DROP TABLE IF EXISTS "demo";

CREATE TABLE "contacts" (
	"id" SERIAL NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"gender" TEXT NOT NULL,
	"email" TEXT NOT NULL CONSTRAINT "unique_email" UNIQUE,
	"country" TEXT,
	"question" TEXT NOT NULL,
	"comments" TEXT,
	"file" TEXT,
	"createdAt" TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY ("id")
);

CREATE TABLE "demo" (
	"id" SERIAL NOT NULL,
	"demoFirstName" TEXT NOT NULL,
	"demoLastName" TEXT NOT NULL,
	"demoEmail" TEXT NOT NULL CONSTRAINT "unique_demoEmail" UNIQUE,
	"demoCompany" TEXT NOT NULL,
	"demoQuestion" TEXT NOT NULL,
	"demoComments" TEXT,
	"demoFile" TEXT,
	"createdAt" TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY ("id")
);
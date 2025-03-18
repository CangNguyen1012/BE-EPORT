-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "terminalCode" VARCHAR(10) NOT NULL,
    "contactName" VARCHAR(255) NOT NULL,
    "contactGroupName" VARCHAR(10) NOT NULL,
    "contactTel" VARCHAR(50) NOT NULL,
    "contactZaloID" VARCHAR(50) NOT NULL,
    "contactFacebookID" VARCHAR(50) NOT NULL,
    "contactEmail" VARCHAR(50) NOT NULL,
    "contactWebsite" VARCHAR(50) NOT NULL,
    "contactWebsiteURL" VARCHAR(255) NOT NULL,
    "constactAddress" TEXT,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

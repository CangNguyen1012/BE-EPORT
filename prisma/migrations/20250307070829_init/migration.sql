-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" TEXT NOT NULL,
    "languageCode" TEXT NOT NULL,
    "languageName" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerType" (
    "id" TEXT NOT NULL,
    "customerTypeCode" TEXT NOT NULL,
    "customerTypeName" TEXT NOT NULL,
    "userGroupRank" INTEGER NOT NULL,

    CONSTRAINT "CustomerType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobMode" (
    "id" TEXT NOT NULL,
    "jobModeCode" TEXT NOT NULL,
    "jobModeName" TEXT NOT NULL,
    "isLoLo" BOOLEAN NOT NULL DEFAULT false,
    "isCfsStuff" BOOLEAN NOT NULL DEFAULT false,
    "isCfsUnstuff" BOOLEAN NOT NULL DEFAULT false,
    "isCfsChange" BOOLEAN NOT NULL DEFAULT false,
    "isServiceYard" BOOLEAN NOT NULL DEFAULT false,
    "isServiceNoncont" BOOLEAN NOT NULL DEFAULT false,
    "extraMode" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "JobMode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SizeContainer" (
    "id" TEXT NOT NULL,
    "operationCode" TEXT NOT NULL,
    "localSizeType" TEXT NOT NULL,
    "isoSizeType" TEXT NOT NULL,
    "cargoTypeCode" TEXT NOT NULL,
    "emptyCargoTypeCode" TEXT NOT NULL,

    CONSTRAINT "SizeContainer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Language_languageCode_key" ON "Language"("languageCode");

-- CreateIndex
CREATE UNIQUE INDEX "Country_countryCode_key" ON "Country"("countryCode");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerType_customerTypeCode_key" ON "CustomerType"("customerTypeCode");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerType_customerTypeName_key" ON "CustomerType"("customerTypeName");

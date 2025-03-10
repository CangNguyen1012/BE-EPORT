-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" TEXT NOT NULL,
    "languageCode" TEXT NOT NULL,
    "languageName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerType" (
    "id" TEXT NOT NULL,
    "customerTypeCode" TEXT NOT NULL,
    "customerTypeName" TEXT NOT NULL,
    "userGroupRank" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SizeContainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Refer" (
    "id" TEXT NOT NULL,
    "operationCode" VARCHAR(255) NOT NULL,
    "refName" VARCHAR(255),
    "applyDate" TIMESTAMP(3) NOT NULL,
    "expireDate" TIMESTAMP(3) NOT NULL,
    "rounding" VARCHAR(255) NOT NULL,
    "moneyCredit" VARCHAR(255) NOT NULL,
    "hourAdding" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Refer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commodity" (
    "id" TEXT NOT NULL,
    "commodityCode" VARCHAR(255) NOT NULL,
    "commodityName" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commodity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "jobCode" VARCHAR(10) NOT NULL,
    "jobName" VARCHAR(255) NOT NULL,
    "isQuay" BOOLEAN NOT NULL DEFAULT false,
    "isYard" BOOLEAN NOT NULL DEFAULT false,
    "isGate" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Port" (
    "id" TEXT NOT NULL,
    "portCode" VARCHAR(10) NOT NULL,
    "portName" VARCHAR(50) NOT NULL,

    CONSTRAINT "Port_pkey" PRIMARY KEY ("id")
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

-- CreateIndex
CREATE UNIQUE INDEX "Job_jobCode_key" ON "Job"("jobCode");

-- CreateIndex
CREATE UNIQUE INDEX "Job_jobName_key" ON "Job"("jobName");

-- CreateTable
CREATE TABLE "Commodity" (
    "id" TEXT NOT NULL,
    "commodityCode" VARCHAR(255) NOT NULL,
    "commodityName" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commodity_pkey" PRIMARY KEY ("id")
);

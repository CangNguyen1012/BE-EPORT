-- CreateTable
CREATE TABLE "CustomerType" (
    "id" TEXT NOT NULL,
    "customerTypeCode" TEXT NOT NULL,
    "customerTypeName" TEXT NOT NULL,
    "userGroupRank" INTEGER NOT NULL,

    CONSTRAINT "CustomerType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomerType_customerTypeCode_key" ON "CustomerType"("customerTypeCode");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerType_customerTypeName_key" ON "CustomerType"("customerTypeName");

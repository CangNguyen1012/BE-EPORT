-- CreateTable
CREATE TABLE "Operation" (
    "id" TEXT NOT NULL,
    "operationCode" VARCHAR(10) NOT NULL,
    "operationName" VARCHAR(255) NOT NULL,
    "isEdo" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "edoNote" BOOLEAN NOT NULL DEFAULT false,
    "isLocalForeign" VARCHAR(10),
    "moneyCredit" VARCHAR(10),

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Operation_operationCode_key" ON "Operation"("operationCode");

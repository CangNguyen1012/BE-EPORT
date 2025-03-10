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

-- CreateIndex
CREATE UNIQUE INDEX "Job_jobCode_key" ON "Job"("jobCode");

-- CreateIndex
CREATE UNIQUE INDEX "Job_jobName_key" ON "Job"("jobName");

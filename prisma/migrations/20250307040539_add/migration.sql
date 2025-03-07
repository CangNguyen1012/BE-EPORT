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

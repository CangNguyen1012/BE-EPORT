-- CreateTable
CREATE TABLE "Imo" (
    "id" TEXT NOT NULL,
    "imdgClass" VARCHAR(50) NOT NULL,
    "un" VARCHAR(10) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "placard" VARCHAR(10) NOT NULL,

    CONSTRAINT "Imo_pkey" PRIMARY KEY ("id")
);

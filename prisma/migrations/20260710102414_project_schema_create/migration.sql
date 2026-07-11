-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tech" TEXT[],
    "feature" TEXT[],
    "shortDesc" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "clientRepo" TEXT NOT NULL,
    "serverRepo" TEXT NOT NULL,
    "liveUrl" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

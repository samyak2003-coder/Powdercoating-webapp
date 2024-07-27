-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mainPartNo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "areaInSft" REAL NOT NULL,
    "dailyRecordId" INTEGER,
    "monthlyRecordId" INTEGER,
    "yearlyRecordId" INTEGER,
    CONSTRAINT "Product_dailyRecordId_fkey" FOREIGN KEY ("dailyRecordId") REFERENCES "DailyRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_monthlyRecordId_fkey" FOREIGN KEY ("monthlyRecordId") REFERENCES "MonthlyRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_yearlyRecordId_fkey" FOREIGN KEY ("yearlyRecordId") REFERENCES "YearlyRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DailyRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    "Day" INTEGER NOT NULL,
    "Month" INTEGER NOT NULL,
    "Year" INTEGER NOT NULL,
    "Hour" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "MonthlyRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    "Day" INTEGER NOT NULL,
    "Month" INTEGER NOT NULL,
    "Year" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "YearlyRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    "Year" INTEGER NOT NULL,
    "Month" INTEGER NOT NULL
);

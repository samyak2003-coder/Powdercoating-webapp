-- CreateTable
CREATE TABLE "DailyRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "surfaceArea" INTEGER NOT NULL,
    "timestamp" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MonthlyRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "surfaceArea" INTEGER NOT NULL,
    "timestamp" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "YearlyRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "surfaceArea" INTEGER NOT NULL,
    "timestamp" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "dailyRecordId" INTEGER,
    "monthlyRecordId" INTEGER,
    "yearlyRecordId" INTEGER,
    CONSTRAINT "Product_dailyRecordId_fkey" FOREIGN KEY ("dailyRecordId") REFERENCES "DailyRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_monthlyRecordId_fkey" FOREIGN KEY ("monthlyRecordId") REFERENCES "MonthlyRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_yearlyRecordId_fkey" FOREIGN KEY ("yearlyRecordId") REFERENCES "YearlyRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

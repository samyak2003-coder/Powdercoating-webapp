/*
  Warnings:

  - Added the required column `SurfaceArea` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DailyRecord" (
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    "Day" DATETIME NOT NULL DEFAULT (CURRENT_DATE)
);
INSERT INTO "new_DailyRecord" ("Day", "TotalSurfaceAreaProduced") SELECT "Day", "TotalSurfaceAreaProduced" FROM "DailyRecord";
DROP TABLE "DailyRecord";
ALTER TABLE "new_DailyRecord" RENAME TO "DailyRecord";
CREATE UNIQUE INDEX "DailyRecord_Day_key" ON "DailyRecord"("Day");
CREATE TABLE "new_MonthlyRecord" (
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    "Month" DATETIME NOT NULL DEFAULT (CURRENT_DATE)
);
INSERT INTO "new_MonthlyRecord" ("Month", "TotalSurfaceAreaProduced") SELECT "Month", "TotalSurfaceAreaProduced" FROM "MonthlyRecord";
DROP TABLE "MonthlyRecord";
ALTER TABLE "new_MonthlyRecord" RENAME TO "MonthlyRecord";
CREATE UNIQUE INDEX "MonthlyRecord_Month_key" ON "MonthlyRecord"("Month");
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "dailyRecordId" DATETIME,
    "monthlyRecordId" DATETIME,
    "yearlyRecordId" DATETIME,
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    "SurfaceArea" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Product_dailyRecordId_fkey" FOREIGN KEY ("dailyRecordId") REFERENCES "DailyRecord" ("Day") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_monthlyRecordId_fkey" FOREIGN KEY ("monthlyRecordId") REFERENCES "MonthlyRecord" ("Month") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_yearlyRecordId_fkey" FOREIGN KEY ("yearlyRecordId") REFERENCES "YearlyRecord" ("Year") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("TotalSurfaceAreaProduced", "dailyRecordId", "id", "monthlyRecordId", "productName", "yearlyRecordId") SELECT "TotalSurfaceAreaProduced", "dailyRecordId", "id", "monthlyRecordId", "productName", "yearlyRecordId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_YearlyRecord" (
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    "Year" DATETIME NOT NULL DEFAULT (CURRENT_DATE)
);
INSERT INTO "new_YearlyRecord" ("TotalSurfaceAreaProduced", "Year") SELECT "TotalSurfaceAreaProduced", "Year" FROM "YearlyRecord";
DROP TABLE "YearlyRecord";
ALTER TABLE "new_YearlyRecord" RENAME TO "YearlyRecord";
CREATE UNIQUE INDEX "YearlyRecord_Year_key" ON "YearlyRecord"("Year");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

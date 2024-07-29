/*
  Warnings:

  - Added the required column `imageLink` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mainPartNo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "areaInSft" REAL NOT NULL,
    "dailyRecordId" INTEGER,
    "monthlyRecordId" INTEGER,
    "yearlyRecordId" INTEGER,
    "imageLink" TEXT NOT NULL,
    CONSTRAINT "Product_dailyRecordId_fkey" FOREIGN KEY ("dailyRecordId") REFERENCES "DailyRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_monthlyRecordId_fkey" FOREIGN KEY ("monthlyRecordId") REFERENCES "MonthlyRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_yearlyRecordId_fkey" FOREIGN KEY ("yearlyRecordId") REFERENCES "YearlyRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("areaInSft", "dailyRecordId", "description", "id", "mainPartNo", "monthlyRecordId", "yearlyRecordId") SELECT "areaInSft", "dailyRecordId", "description", "id", "mainPartNo", "monthlyRecordId", "yearlyRecordId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

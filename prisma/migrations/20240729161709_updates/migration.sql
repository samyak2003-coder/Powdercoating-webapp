/*
  Warnings:

  - Added the required column `partNumber` to the `DailyProductRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `MonthlyProductRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `YearlyProductRecord` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_mainPartNo_key";

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DailyProductRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dailyRecordId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "partNumber" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    CONSTRAINT "DailyProductRecord_dailyRecordId_fkey" FOREIGN KEY ("dailyRecordId") REFERENCES "DailyRecord" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DailyProductRecord" ("count", "dailyRecordId", "id", "productId") SELECT "count", "dailyRecordId", "id", "productId" FROM "DailyProductRecord";
DROP TABLE "DailyProductRecord";
ALTER TABLE "new_DailyProductRecord" RENAME TO "DailyProductRecord";
CREATE TABLE "new_MonthlyProductRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "monthlyRecordId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "partNumber" TEXT NOT NULL,
    CONSTRAINT "MonthlyProductRecord_monthlyRecordId_fkey" FOREIGN KEY ("monthlyRecordId") REFERENCES "MonthlyRecord" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MonthlyProductRecord" ("count", "id", "monthlyRecordId", "productId") SELECT "count", "id", "monthlyRecordId", "productId" FROM "MonthlyProductRecord";
DROP TABLE "MonthlyProductRecord";
ALTER TABLE "new_MonthlyProductRecord" RENAME TO "MonthlyProductRecord";
CREATE TABLE "new_YearlyProductRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "yearlyRecordId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "partNumber" TEXT NOT NULL,
    CONSTRAINT "YearlyProductRecord_yearlyRecordId_fkey" FOREIGN KEY ("yearlyRecordId") REFERENCES "YearlyRecord" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_YearlyProductRecord" ("count", "id", "productId", "yearlyRecordId") SELECT "count", "id", "productId", "yearlyRecordId" FROM "YearlyProductRecord";
DROP TABLE "YearlyProductRecord";
ALTER TABLE "new_YearlyProductRecord" RENAME TO "YearlyProductRecord";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

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

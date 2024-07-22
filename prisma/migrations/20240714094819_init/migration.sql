-- CreateTable
CREATE TABLE "DailyRecord" (
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    "Day" DATETIME NOT NULL DEFAULT (CURRENT_DATE)
);

-- CreateTable
CREATE TABLE "MonthlyRecord" (
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    "Month" DATETIME NOT NULL DEFAULT (CURRENT_DATE)
);

-- CreateTable
CREATE TABLE "YearlyRecord" (
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    "Year" DATETIME NOT NULL DEFAULT (CURRENT_DATE)
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "dailyRecordId" DATETIME,
    "monthlyRecordId" DATETIME,
    "yearlyRecordId" DATETIME,
    "TotalSurfaceAreaProduced" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Product_dailyRecordId_fkey" FOREIGN KEY ("dailyRecordId") REFERENCES "DailyRecord" ("Day") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_monthlyRecordId_fkey" FOREIGN KEY ("monthlyRecordId") REFERENCES "MonthlyRecord" ("Month") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_yearlyRecordId_fkey" FOREIGN KEY ("yearlyRecordId") REFERENCES "YearlyRecord" ("Year") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyRecord_Day_key" ON "DailyRecord"("Day");

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyRecord_Month_key" ON "MonthlyRecord"("Month");

-- CreateIndex
CREATE UNIQUE INDEX "YearlyRecord_Year_key" ON "YearlyRecord"("Year");

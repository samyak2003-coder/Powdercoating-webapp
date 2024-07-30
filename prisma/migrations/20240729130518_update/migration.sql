/*
  Warnings:

  - A unique constraint covering the columns `[day,month,year,hour]` on the table `DailyRecord` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[day,month,year]` on the table `MonthlyRecord` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[month,year]` on the table `YearlyRecord` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Product_mainPartNo_key";

-- CreateIndex
CREATE UNIQUE INDEX "DailyRecord_day_month_year_hour_key" ON "DailyRecord"("day", "month", "year", "hour");

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyRecord_day_month_year_key" ON "MonthlyRecord"("day", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "YearlyRecord_month_year_key" ON "YearlyRecord"("month", "year");

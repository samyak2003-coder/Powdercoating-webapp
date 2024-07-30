/*
  Warnings:

  - A unique constraint covering the columns `[mainPartNo]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_mainPartNo_key" ON "Product"("mainPartNo");

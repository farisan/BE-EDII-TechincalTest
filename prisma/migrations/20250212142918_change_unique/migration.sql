/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `biodata` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `pekerjaan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `pelatihan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `pendidikan` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "pekerjaan_biodataId_key";

-- DropIndex
DROP INDEX "pelatihan_biodataId_key";

-- DropIndex
DROP INDEX "pendidikan_biodataId_key";

-- CreateIndex
CREATE UNIQUE INDEX "biodata_id_key" ON "biodata"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pekerjaan_id_key" ON "pekerjaan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pelatihan_id_key" ON "pelatihan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pendidikan_id_key" ON "pendidikan"("id");

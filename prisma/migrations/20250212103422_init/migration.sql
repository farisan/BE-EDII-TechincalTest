-- CreateTable
CREATE TABLE "biodata" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "posisi" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'karyawan',
    "no_ktp" TEXT NOT NULL,
    "no_telp" TEXT NOT NULL,
    "no_darurat" TEXT NOT NULL,
    "ttl" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "agama" TEXT NOT NULL,
    "golongan_darah" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "alamat_ktp" TEXT NOT NULL,
    "alamat_tinggal" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "ketersediaan" TEXT NOT NULL,
    "expect_salary" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "biodata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pendidikan" (
    "id" TEXT NOT NULL,
    "biodataId" TEXT NOT NULL,
    "gelar" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "ipk" DOUBLE PRECISION NOT NULL,
    "tahun_lulus" INTEGER NOT NULL,

    CONSTRAINT "pendidikan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pelatihan" (
    "id" TEXT NOT NULL,
    "biodataId" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "sertifikat" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,

    CONSTRAINT "pelatihan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pekerjaan" (
    "id" TEXT NOT NULL,
    "biodataId" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "posisi" TEXT NOT NULL,
    "pendapatan" INTEGER NOT NULL,
    "tahun" INTEGER NOT NULL,

    CONSTRAINT "pekerjaan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "biodata_email_key" ON "biodata"("email");

-- CreateIndex
CREATE UNIQUE INDEX "biodata_no_ktp_key" ON "biodata"("no_ktp");

-- CreateIndex
CREATE UNIQUE INDEX "pendidikan_biodataId_key" ON "pendidikan"("biodataId");

-- CreateIndex
CREATE UNIQUE INDEX "pelatihan_biodataId_key" ON "pelatihan"("biodataId");

-- CreateIndex
CREATE UNIQUE INDEX "pekerjaan_biodataId_key" ON "pekerjaan"("biodataId");

-- AddForeignKey
ALTER TABLE "pendidikan" ADD CONSTRAINT "pendidikan_biodataId_fkey" FOREIGN KEY ("biodataId") REFERENCES "biodata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pelatihan" ADD CONSTRAINT "pelatihan_biodataId_fkey" FOREIGN KEY ("biodataId") REFERENCES "biodata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pekerjaan" ADD CONSTRAINT "pekerjaan_biodataId_fkey" FOREIGN KEY ("biodataId") REFERENCES "biodata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

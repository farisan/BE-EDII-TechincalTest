import { prisma } from "../../utils/prisma-client";

const allService = async () => {
  try {
    const dataAll = await prisma.biodata.findMany({
      where: { role: "karyawan" },
      include: {
        pendidikan: true,
        pekerjaan: true,
        pelatihan: true,
      },
    });

    if (!dataAll) return { data: null, message: "Data tidak ditemukan" };

    return {
      data: dataAll,
      message: "Data berhasil diambil",
    };
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

export { allService };

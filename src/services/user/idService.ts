import { TIdUserSchema } from "../../types/user";
import { prisma } from "../../utils/prisma-client";

const idService = async (id: TIdUserSchema) => {
  try {
    
    const dataUser = await prisma.biodata.findUnique({
      where: { id, isActive: true },
      include: {
        pendidikan: true,
        pekerjaan: true,
        pelatihan: true,
      },
    });

    if (!dataUser) return { data: null, message: "Data tidak ditemukan" };

    return {
      data: dataUser,
      message: "Data berhasil diambil",
    };
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

export { idService };

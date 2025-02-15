import { prisma } from "../../utils/prisma-client";

interface UserPayload {
  id: string;
  role: string;
  email: string;
}

const getAccountService = async (token: UserPayload) => {
  try {
    const data = await prisma.biodata.findUnique({
      where: { id: token.id },
      include: {
        pendidikan: true,
        pekerjaan: true,
        pelatihan: true,
      },
    });

    if (!data) {
      return { data: null, message: "Data tidak ditemukan" };
    } else {
      return { data, message: "Data ditemukan" };
    }

  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

export { getAccountService };

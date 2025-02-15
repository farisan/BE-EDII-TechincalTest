import { prisma } from "../../utils/prisma-client";

interface TSearchUserService {
  username?: string;
  ttl?: string;
  posisi?: string;
}
const searchUserService = async (query: TSearchUserService) => {
  try {
    const data = await prisma.biodata.findMany({
      where: {
        username: query.username ? { contains: query.username, mode: "insensitive" } : undefined,
        ttl: query.ttl ? { contains: query.ttl, mode: "insensitive" } : undefined,
        posisi: query.posisi ? { contains: query.posisi, mode: "insensitive" } : undefined,
      },
      include: {
        pendidikan: true,
        pekerjaan: true,
        pelatihan: true,
      }
    });

    if(!data) return { data: null, message: "Data tidak ditemukan!" };


    return { data, message: "Search Success" };
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

export { searchUserService };

import { prisma } from "../../utils/prisma-client";

const editAccountService = async (body: any) => {
  try {
    if(!body) return { data: null, message: "Silahkan masukan data yang ingin di ubah" }

    const data = await prisma.biodata.update({ where: { id: body.id }, data: body });
    return { data, message: "Data berhasil di ubah" }
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
}

export { editAccountService };
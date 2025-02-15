import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { TIdUserSchema } from "../../types/user";
import { prisma } from "../../utils/prisma-client";

const deleteAccountService = async (id: TIdUserSchema) => {
  try {
    if (!id) return { data: null, message: "user gagal untuk di hapus" }
    
    const data = await prisma.biodata.update({
      where: { id },
      data: { isActive: false }
    })

    if (!data) return { data: null, message: "user data tidak ditemukan" }

    return { data, message: "user berhasil di hapus" }
  } catch (error: any) {
    if(error instanceof PrismaClientKnownRequestError){
          if(error.code == 'P2025'){
            throw new Error(error?.meta?.cause as string);
          }
        }
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

export { deleteAccountService };
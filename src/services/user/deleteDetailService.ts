import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { prisma } from "../../utils/prisma-client";
import { Request } from "express";

interface UserPayload {
  id: string;
  role: string;
  email: string;
}

const deleteDetailService = async (id: string, jenis: string, idBiodata: string, token: UserPayload) => {
  try {
    let response = null;
    let user = null;

    if (token.role === "karyawan") {
      user = await prisma.biodata.findUnique({
        where: { id: token.id },
        include: {
          pendidikan: true,
          pekerjaan: true,
          pelatihan: true,
        },
      });
    }

    if (token.role === "admin") {
      user = await prisma.biodata.findUnique({
        where: { id: idBiodata },
        include: {
          pekerjaan: {
            where: { id: id },
          },
          pendidikan: { where: { id: id } },
          pelatihan: { where: { id: id } },
        },
      });
    }

    if (!user) return { data: null, message: "Data tidak ditemukan" };

    const { pendidikan, pekerjaan, pelatihan } = user;

    if (jenis === "pendidikan") {
      if (pendidikan.length < 1) return { data: null, message: "Data tidak ditemukan" };
      response = await prisma.pendidikan.delete({
        where: { id },
      });
    }

    if (jenis === "pekerjaan") {
      if (pekerjaan.length < 1) return { data: null, message: "Data tidak ditemukan" };
      response = await prisma.pekerjaan.delete({
        where: { id },
      });
    }

    if (jenis === "pelatihan") {
      if (pelatihan.length < 1) return { data: null, message: "Data tidak ditemukan" };
      response = await prisma.pelatihan.delete({
        where: { id },
      });
    }

    if (!response) return { data: null, message: "Data gagal untuk di hapus" };

    return {
      data: response,
      message: "Data berhasil di hapus",
    };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code == "P2025") {
        throw new Error(error?.meta?.cause as string);
      }
    }

    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

export { deleteDetailService };

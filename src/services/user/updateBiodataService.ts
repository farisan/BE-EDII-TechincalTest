import { prisma } from "../../utils/prisma-client";

const updateBiodataService = async (id: string, role: string, body: any) => {
  try {
    let data = null;
    if (role === "admin") {
      data = await prisma.biodata.update({ where: { id: body.id }, data: body });
    } else {
      data = await prisma.biodata.update({ where: { id }, data: body });
    }

    if (!data) return null;
    return data;
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

const updatePengalamanService = async (id: string, role: string, body: any) => {
  try {
    let data = null;
    if (role === "admin") {
      data = await prisma.pekerjaan.update({ where: { id: body.id, biodataId: body.biodataId }, data: body });
    } else {
      data = await prisma.pekerjaan.update({ where: { id: body.id, biodataId: id }, data: body });
    }

    if (!data) return null;
    return data;
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};
const updatePendidikanService = async (id: string, role: string, body: any) => {
  try {
    let data = null;
    if (role === "admin") {
      data = await prisma.pendidikan.update({ where: { id: body.id, biodataId: body.biodataId }, data: body });
    } else {
      data = await prisma.pendidikan.update({ where: { id: body.id, biodataId: id }, data: body });
    }

    if (!data) return null;
    return data;
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};
const updatePelatihanService = async (id: string, role: string, body: any) => {
  try {
    let data = null;
    if (role === "admin") {
      data = await prisma.pelatihan.update({ where: { id: body.id, biodataId: body.biodataId }, data: body });
    } else {
      data = await prisma.pelatihan.update({ where: { id: body.id, biodataId: id }, data: body });
    }

    if (!data) return null;
    return data;
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

export { updatePengalamanService, updateBiodataService, updatePendidikanService, updatePelatihanService };

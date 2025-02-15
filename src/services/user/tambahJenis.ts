import { prisma } from "../../utils/prisma-client";

const tambahPekerjaanService = async (idToken: string ,body: any) => {
  try {
    if (!body) return { data: null, message: "Silahkan masukan data yang ingin di ubah" };

    const payload = {
      ...body,
      biodataId: idToken
    }

    const data = await prisma.pekerjaan.create({
      data: payload
    })


    if(!data) return { data: null, message: "Data gagal ditambahkan" }
    return data
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

const tambahPendidikanService = async (idToken: string ,body: any) => {
  try {
    if (!body) return { data: null, message: "Silahkan masukan data yang ingin di ubah" };

    const payload = {
      ...body,
      biodataId: idToken
    }

    const data = await prisma.pendidikan.create({
      data: payload
    })


    if(!data) return { data: null, message: "Data gagal ditambahkan" }
    return data
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

const tambahPelatihanService = async (idToken: string ,body: any) => {
  try {
    if (!body) return { data: null, message: "Silahkan masukan data yang ingin di ubah" };

    const payload = {
      ...body,
      biodataId: idToken
    }

    const data = await prisma.pelatihan.create({
      data: payload
    })


    if(!data) return { data: null, message: "Data gagal ditambahkan" }
    return data
  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

export { tambahPekerjaanService, tambahPendidikanService, tambahPelatihanService };

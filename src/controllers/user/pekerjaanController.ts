import { Request, Response } from "express";
import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";
import { tambahPekerjaanService, tambahPelatihanService, tambahPendidikanService } from "../../services/user/tambahJenis";

interface UserPayload {
  id: string;
  role: string;
  email: string;
}

interface AuthRequest extends Request {
  user?: UserPayload;
}

const tambahPekerjaanController = async (req: AuthRequest, res: Response) => {
  try {
    const { body } = req;


    if (!req?.user?.id || !body) return sendResponseError(res, 400, null, "Silahkan masukan data yang ingin di ubah!");

    const response = await tambahPekerjaanService(req?.user?.id || "", body);

    return sendResponseSuccess(res, 200, response, "Berhasil menambahkan pekerjaan");
  } catch (error) {
    return sendResponseError(res, 500, null, "Terjadi kesalahan");
  }
};
const tambahPendidikanController = async (req: AuthRequest, res: Response) => {
  try {
    const { body } = req;

    if (!req?.user?.id || !body) return sendResponseError(res, 400, null, "Silahkan masukan data yang ingin di ubah!");

    const response = await tambahPendidikanService(req?.user?.id || "", body);

    return sendResponseSuccess(res, 200, response, "Berhasil menambahkan pekerjaan");
  } catch (error) {
    return sendResponseError(res, 500, null, "Terjadi kesalahan");
  }
};
const tambahPelatihanController = async (req: AuthRequest, res: Response) => {
  try {
    const { body } = req;

    if (!req?.user?.id || !body) return sendResponseError(res, 400, null, "Silahkan masukan data yang ingin di ubah!");

    const response = await tambahPelatihanService(req?.user?.id || "", body);

    return sendResponseSuccess(res, 200, response, "Berhasil menambahkan pekerjaan");
  } catch (error) {
    return sendResponseError(res, 500, null, "Terjadi kesalahan");
  }
};

export { tambahPekerjaanController, tambahPendidikanController, tambahPelatihanController };

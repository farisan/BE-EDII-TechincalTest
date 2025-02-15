import { Request, Response } from "express";
import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";
import { updateBiodataService, updatePelatihanService, updatePendidikanService, updatePengalamanService } from "../../services/user/updateBiodataService";

interface UserPayload {
  id: string;
  role: string;
  email: string;
}

interface AuthRequest extends Request {
  user?: UserPayload;
}

const updateBiodataController = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.body) return sendResponseError(res, 400, null, "Silahkan masukan data yang ingin di ubah");
    const response = await updateBiodataService(req?.user?.id || "", req?.user?.role || "", req.body);

    return sendResponseSuccess(res, 200, response, "Data berhasil di ubah");
  } catch (error) {
    return sendResponseError(res, 500, null, "Terjadi kesalahan");
  }
};
const updatePengalamanController = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.body) return sendResponseError(res, 400, null, "Silahkan masukan data yang ingin di ubah");
    const response = await updatePengalamanService(req?.user?.id || "", req?.user?.role || "", req.body);

    return sendResponseSuccess(res, 200, response, "Data berhasil di ubah");
  } catch (error) {
    return sendResponseError(res, 500, null, "Terjadi kesalahan");
  }
};
const updatePendidikanController = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.body) return sendResponseError(res, 400, null, "Silahkan masukan data yang ingin di ubah");
    const response = await updatePendidikanService(req?.user?.id || "", req?.user?.role || "", req.body);

    return sendResponseSuccess(res, 200, response, "Data berhasil di ubah");
  } catch (error) {
    return sendResponseError(res, 500, null, "Terjadi kesalahan");
  }
};
const updatePelatihanController = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.body) return sendResponseError(res, 400, null, "Silahkan masukan data yang ingin di ubah");
    const response = await updatePelatihanService(req?.user?.id || "", req?.user?.role || "", req.body);

    return sendResponseSuccess(res, 200, response, "Data berhasil di ubah");
  } catch (error) {
    return sendResponseError(res, 500, null, "Terjadi kesalahan");
  }
};

export { updateBiodataController, updatePengalamanController, updatePendidikanController, updatePelatihanController };

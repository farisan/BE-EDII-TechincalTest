import { Request, Response } from "express";
import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";
import { deleteDetailService } from "../../services/user/deleteDetailService";

interface UserPayload {
  id: string;
  role: string;
  email: string;
}

interface AuthRequest extends Request {
  user?: UserPayload;
}

const deleteDetailController = async (req: AuthRequest, res: Response) => {
  try {
    const { jenis, id, idBiodata } = req.params;
    // const { id } = req.body;

    if (!jenis || !id || !idBiodata) return sendResponseError(res, 400, null, "Data gagal untuk di hapus");

    const { data, message } = await deleteDetailService(id, jenis, idBiodata, req.user!);

    return sendResponseSuccess(res, 200, data, message);
  } catch (error: any) {
    return sendResponseError(res, 500, null, error?.message || "Internal Server Error");
  }
};

export { deleteDetailController };

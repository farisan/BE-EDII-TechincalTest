import { Request, Response } from "express";
import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";
import { idService } from "../../services/user/idService";

const idController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) return sendResponseError(res, 400, null, "Masukan data user yang ingin dicari");

    const { data, message } = await idService(id);

    return sendResponseSuccess(res, 200, data, message);
  } catch (error: any) {
    sendResponseError(res, 500, null, error?.message || "Internal Server Error");
  }
};

export { idController };

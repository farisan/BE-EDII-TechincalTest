import { Request, Response } from "express";
import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";
import { deleteAccountService } from "../../services/user/deleteAccountService";

const deleteAccountController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data, message } = await deleteAccountService(id);

    sendResponseSuccess(res, 200, data, message);
  } catch (error: any) {
    return sendResponseError(res, 500, null, error?.message || "Internal Server Error");
  }
};

export { deleteAccountController };

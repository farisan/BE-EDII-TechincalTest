import { Request, Response } from "express";
import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";
import { searchUserService } from "../../services/user/searchUserService";

const searchUserController = async (req: Request, res: Response) => {
  try {
    const { data, message } = await searchUserService(req.query);
    return sendResponseSuccess(res, 200, data, message);
  } catch (error: any) {
    return sendResponseError(res, 500, null, error?.message || "Internal Server Error");
  }
};

export { searchUserController };

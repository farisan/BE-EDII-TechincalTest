import { Request, Response } from "express";
import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";
import { allService } from "../../services/user/allService";

const allController = async (req: Request, res: Response) => {
  try {
    const { data, message } = await allService();
    return sendResponseSuccess(res, 200, data, message);
  } catch (error: any) {
    return sendResponseError(res, 500, null, error?.message || "Internal Server Error");
  }
};

export { allController };

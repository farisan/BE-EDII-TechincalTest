import { Request, Response } from "express";
import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";
import { registerService } from "../../services/auth/registerService";

const registerController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return sendResponseError(res, 400, null, "Email and password are required");
    }

    const {valid, message, data} = await registerService(req.body);

    if(!valid) return sendResponseError(res, 400, data, message);

    return sendResponseSuccess(res, 200, data, message);
  } catch (error: any) {
    return sendResponseError(res, 500, null, error?.message || "Internal Server Error");
  }
};

export { registerController };

import { Request, Response } from "express";
import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";
import { loginService } from "../../services/auth/loginService";

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return sendResponseError(res, 400, null, "Email and password are required");
    }

    const { valid, message, data, role } = await loginService(req.body);

    if (!valid) {
      return sendResponseSuccess(res, 400, { data }, message);
    }

    return sendResponseSuccess(res, 200, {data, role}, message);
  } catch (error: any) {
    return sendResponseError(res, 500, null, error?.message || "Internal Server Error");
  }
};

export { loginController };

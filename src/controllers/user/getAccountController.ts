import { Request, Response } from "express";
import { getAccountService } from "../../services/user/getAccountService";
import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";

interface UserPayload {
  id: string;
  role: string;
  email: string;
}

interface AuthRequest extends Request {
  user?: UserPayload;
}


const getAccountController = async (req: AuthRequest, res: Response) => {
  try {
    const token = req.user;

    if (!token) return sendResponseError(res, 403, null, "Maaf! akses role anda ditolak");

    const { data, message } = await getAccountService(token);
    sendResponseSuccess(res, 200, data, message);
  } catch (error : any) {
    return sendResponseError(res, 500, null, error?.message || "Internal Server Error");
  }
}

export { getAccountController };
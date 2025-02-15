import { NextFunction, Request, Response } from "express";
import { sendResponseError } from "../helper/sendResponse";

type AuthRequest = Request & { user?: { role: string } };

const validateRoles = (allowedRoles: string[]) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user?.role) return sendResponseError(res, 403, null, "Maaf! akses role anda tidak ditemukan");

    const valid = allowedRoles.includes(req.user.role);

    if (!valid) return sendResponseError(res, 403, null, "Maaf! akses role anda ditolak");

    next();
  };
};

export { validateRoles };

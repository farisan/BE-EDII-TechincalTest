import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { sendResponseError } from "../helper/sendResponse";

interface AuthRequest extends Request {
  user?: object;
}

export const validateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  // Jika tidak ada Authorization header atau formatnya salah
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      message: "Akses ditolak! Token tidak tersedia. Harap login terlebih dahulu.",
    });
    return;
  }

  const token = authHeader.split(" ")[1];


  const { valid, payload, error } = verifyToken(token);
  // validasi token
  if (!valid) {
    if (error === "Token Expired") {
      sendResponseError(res, 401, null, "Token Anda sudah kadaluarsa, silakan login kembali.");
      return;
    } else {
      sendResponseError(res, 403, null, error);
      return;
    }
  }
  
  req.user = payload;

  next();
};

import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { StatusCodes } from "http-status-codes";
import { sendResponseError } from "../helper/sendResponse";

// Validasi payload body
export function validateRequest({ bodySchema, paramsSchema, querySchema }: { bodySchema?: z.ZodObject<any>; paramsSchema?: z.ZodString; querySchema?: z.ZodObject<any> }) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (bodySchema) {
        bodySchema.parse(req.body);
      }

      // Validasi params jika schema tersedia
      if (paramsSchema) {
        paramsSchema.parse(req.params.id || req.params.jenis);
      }

      // Validasi query jika schema tersedia
      if (querySchema) {
        querySchema.parse(req.query);
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => {
          if (issue.code === "invalid_type") {
            return {
              field: issue.path.join("."),
              message: `Field ${issue.path.join(".")} harus bertipe ${issue.expected}, tetapi menerima ${issue.received}`,
            };
          }
          return {
            field: issue.path.join("."),
            message: issue.message,
          };
        });
        return sendResponseError(res, StatusCodes.BAD_REQUEST, errorMessages, "Error Payload");
      } else {
        return sendResponseError(res, StatusCodes.INTERNAL_SERVER_ERROR, error, "Validasi server error");
      }
    }
  };
}

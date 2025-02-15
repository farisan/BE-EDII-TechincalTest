import { Response } from "express";

const sendResponseSuccess = (res: Response, status: number = 200, data: any = null, message: string = "") => {
  res.status(status).json({ data , message});
}

const sendResponseError = (res: Response, status: number = 500, data: any = null, message: string = "") => {
  res.status(status).json({ data , message});
}

export { sendResponseSuccess, sendResponseError }
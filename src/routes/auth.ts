import express from "express";
import { registerController } from "../controllers/auth/registerController";
import { validateRequest } from "../middleware/validateRequest";
import { LoginSchema, RegisterSchema } from "../types/auth";
import { loginController } from "../controllers/auth/loginController";

const authRouter = express.Router();

authRouter.post("/register", validateRequest({ bodySchema: RegisterSchema }), registerController);
authRouter.post("/login", validateRequest({ bodySchema: LoginSchema }), loginController);

export { authRouter };

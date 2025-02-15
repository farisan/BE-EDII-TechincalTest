import express from "express";

import { validateData } from "../middleware/validationMiddleware";
import { LoginSchema, RegisterSchema } from "../types/auth";
import { registerController } from "../controllers/auth/register";
import { loginController } from "../controllers/auth/login";

const authRouter = express.Router();

authRouter.post('/register',validateData({bodySchema: RegisterSchema}), registerController);
authRouter.post('/login', validateData({bodySchema: LoginSchema}), loginController);

export { authRouter };

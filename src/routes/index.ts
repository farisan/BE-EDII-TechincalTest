import express, { Request, Response } from "express";
import { authRouter } from "./auth";
import { userRouter } from "./user";

const mainRouter = express.Router();

const prefix = "/api/v1";

mainRouter.use(`${prefix}/auth`, authRouter);
mainRouter.use(`${prefix}/user`, userRouter);



// Test connection
mainRouter.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "Backend berjalan dengan baik",
  });
});

export { mainRouter };

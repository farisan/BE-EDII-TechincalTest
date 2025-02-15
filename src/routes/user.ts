import express, { Request, Response } from "express";
import { validateRoles } from "../middleware/validateRoles";
import { validateToken } from "../middleware/validateToken";
import { allController } from "../controllers/user/allController";
import { idController } from "../controllers/user/idController";
import { validateRequest } from "../middleware/validateRequest";
import { idUserSchema, jenisUserSchema } from "../types/user";
import { deleteDetailController } from "../controllers/user/deleteDetailController";
import { deleteAccountController } from "../controllers/user/deleteAccountController";
import { getAccountController } from "../controllers/user/getAccountController";
import { updateBiodataController, updatePelatihanController, updatePendidikanController, updatePengalamanController } from "../controllers/user/updateBiodataController";
import { tambahPekerjaanController, tambahPelatihanController, tambahPendidikanController } from "../controllers/user/pekerjaanController";
import { searchUserController } from "../controllers/user/searchUserController";

const userRouter = express.Router();

userRouter.get("/all", validateToken, validateRoles(["admin", "karyawan"]), allController);
userRouter.get("/getAccount", validateToken, getAccountController);
userRouter.get("/:id", validateToken, validateRequest({ paramsSchema: idUserSchema }), validateRoles(["admin", "karyawan"]), idController);
userRouter.get("/search/dataUser", validateToken, searchUserController);

userRouter.put("/edit/biodata", validateToken, validateRoles(["admin", "karyawan"]), updateBiodataController);
userRouter.put("/edit/pekerjaan", validateToken, validateRoles(["admin", "karyawan"]), updatePengalamanController);
userRouter.put("/edit/pelatihan", validateToken, validateRoles(["admin", "karyawan"]), updatePelatihanController);
userRouter.put("/edit/pendidikan", validateToken, validateRoles(["admin", "karyawan"]), updatePendidikanController);

userRouter.post("/tambah/pekerjaan", validateToken, validateRoles(["karyawan"]), tambahPekerjaanController);
userRouter.post("/tambah/pendidikan", validateToken, validateRoles(["karyawan"]), tambahPendidikanController);
userRouter.post("/tambah/pelatihan", validateToken, validateRoles(["karyawan"]), tambahPelatihanController);

userRouter.delete("/delete-detail/:jenis/:id/:idBiodata", validateToken, validateRoles(["admin", "karyawan"]), deleteDetailController);
userRouter.patch("/delete-account/:id", validateToken, validateRequest({ paramsSchema: idUserSchema }), validateRoles(["admin"]), deleteAccountController);

userRouter.patch("/edit/:id");

// detail
userRouter.get("/detail/:jenis/:id");
userRouter.post("/detail/:jenis/:id");
userRouter.patch("/detail/:jenis/:id");

export { userRouter };

import { sendResponseError, sendResponseSuccess } from "../../helper/sendResponse";
import { TLoginSchema } from "../../types/auth";
import { comparePassword } from "../../utils/bcrypt";
import { generateToken } from "../../utils/jwt";
import { prisma } from "../../utils/prisma-client";

const loginService = async (body: TLoginSchema) => {
  try {
    const { email, password } = body;

    // find account in database
    const dataLogin = await prisma.biodata.findUnique({ where: { email } });

    // check data email
    if(!dataLogin) return { valid : false, data: null, message: "Maaf! Email atau Password salah"};

    // compare password
    const comparePass = await comparePassword(password, dataLogin.password);

    // check password
    if(!comparePass) return { valid : false, data: null, message: "Maaf! Email atau Password salah"};
    if(dataLogin.isActive == false) return { valid : false, data: null, message: "Maaf! Akun anda telah dinonaktifkan"}

    const token = generateToken({ id: dataLogin.id, email: dataLogin.email, role: dataLogin.role });

    return {
      valid: true,
      message: "Login Success",
      data: token,
      role: dataLogin.role
    }

  } catch (error) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

export { loginService };

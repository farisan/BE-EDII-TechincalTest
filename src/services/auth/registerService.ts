import { TRegisterSchema } from "../../types/auth";
import { hashPassword } from "../../utils/bcrypt";
import { prisma } from "../../utils/prisma-client";

const registerService = async (body: TRegisterSchema) => {
  try {
    const { email, password } = body;

    const checkEmail = await prisma.biodata.findUnique({
      where: { email: email },
    });
    
    if (checkEmail) {
      return { valid: false, data: null, message: "Email sudah terdaftar" };
    }
    
    const hashedPassword = await hashPassword(password);
    
    const dataRegister = await prisma.biodata.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
    
    return {
      valid: true,
      message: "Register Success",
      data: dataRegister,
    };

  } catch (error: any) {
    throw new Error("Maaf! Terjadi kesalahan pada service");
  }
};

export { registerService };

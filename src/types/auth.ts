import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;

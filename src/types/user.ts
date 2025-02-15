import { z } from "zod";

export const idUserSchema = z.string()
export const jenisUserSchema = z.string()

export const searchSchema = z.object({
  username: z.string().optional(),
  ttl: z.string().optional(),
  posisi: z.string().optional(),
});


export type TSearchSchema = z.infer<typeof searchSchema>
export type TIdUserSchema = z.infer<typeof idUserSchema>
export type TJenisUserSchema = z.infer<typeof jenisUserSchema>

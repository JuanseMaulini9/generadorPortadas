import * as z from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  description: z.string().min(10, "Minimo 10 caracteres"),
  author: z.string().min(1, "El autor es obligatorio"),
  target: z.enum(["children", "youngAdult", "adult", "family"]),
  style: z.enum([
    "minimalist",
    "realistic",
    "illustrated",
    "comic",
    "abstract",
  ]),
  ambientation: z.enum([
    "futuristic",
    "medieval",
    "urban",
    "postApocalyptic",
    "space",
  ]),
});

import * as z from "zod";
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Please enter a valid name" }),
  username: z
    .string()
    .min(2, { message: "Username must be between 4-8 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase character",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase character",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});

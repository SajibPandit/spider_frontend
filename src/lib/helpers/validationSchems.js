import { z } from "zod";

export const registrationValidationSchema = z
  .object({
    name: z
      .string({ message: "Please enter your name" })
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(50, { message: "Name must be less than 50 characters" }),

    email: z
      .string({ message: "Please enter your email" })
      .email({ message: "Invalid email address" }),

    phone: z
      .string({ message: "Please enter your phone number" })
      .regex(/^([01]|\+88)?\d{11}/, { message: "Invalid phone number" }),

    password: z
      .string({ message: "Please enter a password" })
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(32, { message: "Password must be no more than 32 characters" }),

    confirmPassword: z.string({ message: "Please enter password again" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export const otpValidationSchema = z.object({
  otp: z
    .string({ message: "Please enter a valid otp" })
    .min(4, { message: "Please enter a valid otp" })
    .max(6, { message: "Please enter a valid otp" }),
});

export const loginValidationSchema = z.object({
  phone: z
    .string({ message: "Please enter your phone number" })
    .regex(/^([01]|\+88)?\d{11}/, { message: "Invalid phone number" }),

  password: z
    .string({ message: "Please enter a password" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(32, { message: "Password must be no more than 32 characters" }),
});

const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least 3 characters" })
    .max(255, { message: "name must be at most 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email address must be at least 3 characters" })
    .max(255, { message: "Email address must be at most 255 characters" }),

  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(20, { message: "Phone number must be at most 20 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(1024, { message: "Password must be at most 1024 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email address must be at least 3 characters" })
    .max(255, { message: "Email address must be at most 255 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(1024, { message: "Password must be at most 1024 characters" }),
});
module.exports = {signupSchema,loginSchema};

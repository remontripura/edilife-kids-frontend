import { z } from "zod";


export const UserInFromationSchema = z.object({
  name: z.string().min(1, "This field is required."),
  email: z.string().min(1, "This field is required."),
  mobile: z.string().min(1, "This field is required."),
  class: z.string().min(1, "This field is required."),
  date: z.string().min(1, "This field is required."),
  message: z.string().min(1, "This field is required."),
});
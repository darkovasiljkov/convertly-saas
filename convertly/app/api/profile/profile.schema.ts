import { z } from "zod";

export const profileCreateRequest = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  profileimageUrl: z.string().min(1, { message: "Profile image URL is required" }),
});

export const profileUpdateRequest = profileCreateRequest.extend({
  id: z.string().min(1, { message: "Id is required" }),
  userId: z.string().min(1, { message: "User Id is required" }),
});

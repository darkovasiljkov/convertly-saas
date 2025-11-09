import { z } from "zod";

export const leadMagnetCreateRequest = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  status: z.string().min(1, { message: "Status is required" }),
  draftBody: z.string().min(1, { message: "Draft body is required" }),
  draftTitle: z.string().min(1, { message: "Draft title is required" }),
  draftSubtitle: z.string().min(1, { message: "Draft subtitle is required" }),
  draftPrompt: z.string().min(1, { message: "Draft prompt is required" }),
  draftFirstQuestion: z.string().min(1, { message: "Draft first question is required" }),
  publishedBody: z.string().min(1, { message: "Published body is required" }),
  publishedTitle: z.string().min(1, { message: "Published title is required" }),
  publishedSubtitle: z.string().min(1, { message: "Published subtitle is required" }),
  publishedPrompt: z.string().min(1, { message: "Published prompt is required" }),
  publishedFirstQuestion: z.string().min(1, { message: "Published first question is required" }),
  draftEmailCapture: z.string().min(1, { message: "Draft email capture is required" }),
  publishedEmailCapture: z.string().min(1, { message: "Published email capture is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
});

export const leadMagnetUpdateRequest = leadMagnetCreateRequest.extend({
  id: z.string().min(1, { message: "Id is required" }),
  userId: z.string().min(1, { message: "User Id is required" }),
});

import { z } from "zod";

export const leadMagnetCreateRequest = z.object({
  name: z.string().min(1, "Name is required"),
  status: z.enum(["draft", "published"]),
  draftBody: z.string().min(1, "Draft body is required"),
  draftTitle: z.string().min(1, "Draft title is required"),
  draftSubtitle: z.string().min(1, "Draft subtitle is required"),
  draftPrompt: z.string().min(1, "Draft prompt is required"),
  draftFirstQuestion: z.string().min(1, "Draft first question is required"),
  draftEmailCapture: z.string().min(1, "Draft email capture is required"),

  publishedBody: z.string().optional(),
  publishedTitle: z.string().optional(),
  publishedSubtitle: z.string().optional(),
  publishedPrompt: z.string().optional(),
  publishedFirstQuestion: z.string().optional(),
  publishedEmailCapture: z.string().optional(),

  slug: z.string().optional(),
});

export const leadMagnetCreateRequestRefined = leadMagnetCreateRequest.refine(
  (data) => {
    if (data.status === "published") {
      return (
        data.publishedBody?.length &&
        data.publishedTitle?.length &&
        data.publishedSubtitle?.length &&
        data.publishedPrompt?.length &&
        data.publishedFirstQuestion?.length &&
        data.publishedEmailCapture?.length
      );
    }
    return true; 
  },
  {
    message:
      "All published fields are required when publishing.",
    path: ["publishedBody"],
  }
);

export const leadMagnetUpdateRequest = leadMagnetCreateRequestRefined.safeExtend({
  id: z.string().min(1, "Id is required"),
  userId: z.string().min(1, "User Id is required"),
});

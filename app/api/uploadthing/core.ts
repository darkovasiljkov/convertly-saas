import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { currentUser, User } from "@clerk/nextjs/server";
import { prismadb } from "@/lib/prismadb";
import { TbFileUpload } from "react-icons/tb";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const uploadThingFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // This code runs on your server before upload
      const user = await currentUser();

      // If you throw, the user will not be able to upload
      if (!user) throw new UploadThingError("Unauthorized");

      return { ...user};
    })
    .onUploadComplete(async ({ metadata, file }) => {

        const profile = await prismadb.profile.findUnique({where: {userId: metadata.id}})

        if (!profile) 
        { 
            throw new Error("Profile is not found!")
        }

      prismadb.profile.update({
        where: {userId: metadata.id },
        data: { ...profile, profileimageUrl: file.ufsUrl},
    });
}),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadThingFileRouter;

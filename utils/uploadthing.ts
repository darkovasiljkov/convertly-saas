import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { uploadThingFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<typeof uploadThingFileRouter>();
export const UploadDropzone = generateUploadDropzone<typeof uploadThingFileRouter>();
 
import React from 'react'
import { useProfileEditorContext } from '@/context/ProfileEditorContext';
import LeadMagnetProfilePreview from './LeadMagnetProfilePreview';
import { UploadButton } from '@/utils/uploadthing';
import "@uploadthing/react/styles.css";
import toast from 'react-hot-toast';

export default function LeadMagnetProfileEditor() {
   const { edittedProfile, setEdittedProfile } = useProfileEditorContext()
  return (
    <div className="flex h-full flex-row border-t-2 border-gray-200">
      <div className="m-8 flex w-1/2 flex-col">
             <h1 className="mb-4 w-fit bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
          Profile Editor
        </h1>
        <div className="mb-4">
          <UploadButton
          appearance={{
            button: "bg-blue-500 focus-within:ring-blue-700 after:bg-blue-500 hover:bg-sky-500",
          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && (res?.length ?? 0) > 0) {
              toast.success("Profile Image Uploaded Successfully!");
              const file = res[0];
              file && setEdittedProfile((prev) => ({
                ...prev,
                profileimageUrl: file.ufsUrl,
              }));
            }
          }}
          onUploadError={() => {
            toast.error("Something went wrong while uploading the image, try again.");
          }}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Title
          </label>
          <input
            type="text"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            value={edittedProfile.title}
            onChange={(e) =>
              setEdittedProfile((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            placeholder="Write your catchy title here... (e.g. Hi! I'm John Doe - Ai Expert)"
          />
        </div>
          <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Description
          </label>
          <input
            type="text"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            value={edittedProfile.description}
            onChange={(e) =>
              setEdittedProfile((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            placeholder="Describe yourself in a few words..."
          />
        </div>
      </div>
      <div className="blue-dotted-pattern flex w-1/2 flex-col">
        <div className="mx-12 my-8 flex max-w-lg rounded-lg bg-white p-4 shadow-lg lg:mx-auto">
          <LeadMagnetProfilePreview
           profile={edittedProfile}
          />
        </div>
      </div>
    </div>
  );
}

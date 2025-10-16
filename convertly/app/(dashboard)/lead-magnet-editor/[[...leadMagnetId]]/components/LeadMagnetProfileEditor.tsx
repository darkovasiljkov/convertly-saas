import React from 'react'
import { useProfileEditorContext } from '@/context/ProfileEditorContext';
import LeadMagnetProfilePreview from './LeadMagnetProfilePreview';

export default function LeadMagnetProfileEditor() {
   const { edittedProfile, setEdittedProfile } = useProfileEditorContext()
  return (
    <div className="flex h-full flex-row border-t-2 border-gray-200">
      <div className="m-8 flex w-1/2 flex-col">
        <h1 className="mb-4 text-3xl font-bold text-blue-600">
          Profile Editor
        </h1>
        {/* to do: image uplolad */}
        {/* */}
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

import { useLeadMagnetEditorContext } from '@/context/LeadMagnetEditorContext'
import { slugifyLeadMagnet } from '@/lib/utils'
import React from 'react'

export default function LeadMagnetSettings() {

        const { edittedLeadMagnet, setEdittedLeadMagnet } = useLeadMagnetEditorContext()
  return (
    <div className="flex h-full flex-row w-1/2">
        <div className="m-8 flex w-full h-full flex-col">
               <h1 className="mb-4 w-fit bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
          Settings
        </h1>
            <label className="mb-2 block text-sm font-bold text-gray-700">
                URL Slug
            </label>
                <input
                    type="text"
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        value={edittedLeadMagnet.slug ?? slugifyLeadMagnet(edittedLeadMagnet.draftTitle)} onChange={(e) => {
                            const newSlug = slugifyLeadMagnet(e.target.value);

                            setEdittedLeadMagnet((prev) => ({
                                ...prev,
                                slug: newSlug,
                            }));
                        }}
                        placeholder='What is the title of your lead magnet?'
                />
                <p className="mt-2 text-sm text-gray-500">
                    Slug can only contain numbers, letters and (-).
                </p>
        </div>
    </div>
  )
}

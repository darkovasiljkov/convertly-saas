import React, { use } from "react";
import { useRouter } from "next/navigation";
import { useLeadMagnetEditorContext } from "@/context/LeadMagnetEditorContext";
import { BsArrowLeft } from "react-icons/bs";
function LeadMagnetEditorNavBar ()
{
    const {edittedLeadMagnet} = useLeadMagnetEditorContext();
    const router = useRouter();

return (
    <div className="flex w-full flex-row items-center justify-between border-b-[1px] border-solid border-gray-200 bg-white p-3 text-gray-600">
        <div className="flex flex-row items-center">
        <BsArrowLeft
        size={20}
        className="pr-3 w-fit cursor-pointer"
        onClick={() => void router.push("/lead-magnets")}
        />
         {/* TODO: Inpot / Name */}
          {/* TODO: Edit / Save */}
        </div>
        <div className="flex flex-row items-center gap-x-4">
             {/* TODO: Delete with state */}
         {/* TODO: Unpublish and view Final */}
          {/* TODO: ESave Publsih*/}
        </div>
    </div>
);
}
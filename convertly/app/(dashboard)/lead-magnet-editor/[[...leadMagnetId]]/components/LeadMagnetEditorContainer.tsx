"use client";

import { LeadMagnet } from "@/lib/generated/prisma";
import React from "react";
import LeadMagnetEditor from "./LeadMagnetEditor";
import { useSession } from "@clerk/nextjs";
import { LoadingScreen } from "@/components/LoadingScreen";
import { LeadMagnetEditorContextProvider } from "@/context/LeadMagnetEditorContext";
import { ProfileEditorContextProvider } from "@/context/ProfileEditorContext";


interface LeadMagnetEditorContainerProps {
    leadMagnet: LeadMagnet;
}

function LeadMagnetEditorContainer({
    leadMagnet,
 }: LeadMagnetEditorContainerProps ) {

    const { isLoaded } = useSession();

    if (!isLoaded)
    {
     return <LoadingScreen />   
    }

    return (
        <LeadMagnetEditorContextProvider leadMagnet={leadMagnet}>
            <ProfileEditorContextProvider>
                <LeadMagnetEditor/>
            </ProfileEditorContextProvider>
        </LeadMagnetEditorContextProvider>
    )
}


export default LeadMagnetEditorContainer;
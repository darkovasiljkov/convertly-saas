"use client";

import { LeadMagnetEditorContextProvider } from "@/context/LeadMagnetEditorContext";
import { LeadMagnet } from "@/lib/generated/prisma";
import React from "react";
import LeadMagnetEditor from "./LeadMagnetEditor";
import { useSession } from "@clerk/nextjs";
import { LoadingScreen } from "@/components/LoadingScreen";


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
            <LeadMagnetEditor/>
        </LeadMagnetEditorContextProvider>
    )
}


export default LeadMagnetEditorContainer;
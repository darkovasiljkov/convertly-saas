"use client";

import { LeadMagnetEditorContextProvider } from "@/context/LeadMagnetEditorContext";
import { LeadMagnet } from "@/lib/generated/prisma";
import React from "react";
import LeadMagnetEditor from "./LeadMagnetEditor";

interface LeadMagnetEditorContainerProps {
    leadMagnet: LeadMagnet;
}

function LeadMagnetEditorContainer({
    leadMagnet,
 }: LeadMagnetEditorContainerProps ) {
    return (
        <LeadMagnetEditorContextProvider leadMagnet={leadMagnet}>
            <LeadMagnetEditor/>
        </LeadMagnetEditorContextProvider>
    )
}


export default LeadMagnetEditorContainer;
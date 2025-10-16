"use client";

import { LeadMagnetEditorContextProvider } from "@/context/LeadMagnetEditorContext";
import { LeadMagnet } from "@/lib/generated/prisma";
import React, { useState } from "react";
import LeadMagnetEditorNavbar from "./LeadMagnetEditorNavBar";
import LeadMagnetContentEditor from "./LeadMagnetContentEditor";
import LeadMagnetEditorSideBar from "./LeadMagnetEditorSideBar";
import LeadMagnetPromptEditor from "./LeadMagnetPromptEditor";
import LeadMagnetEmailEditor from "./LeadMagnetEmailEditor";
import LeadMagnetProfileEditor from "./LeadMagnetProfileEditor";


export type LeadMagnetSections =
  | "content"
  | "prompt"
  | "email"
  | "profile"
  | "settings";
 

function LeadMagnetEditor() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedEditor, setSelectedEditor] =
    useState<LeadMagnetSections>("content");

  return (
    <div
      className="flex h-screen w-full flex-col overflow-y-hidden"
      style={{ height: `calc(100vh - 66px)` }}
    >
      <LeadMagnetEditorNavbar />
      <div className="flex h-full flex-row">
        { <LeadMagnetEditorSideBar
          isSidebarCollapsed={isSidebarCollapsed}
          setSelectedEditor={setSelectedEditor}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
        />}
         <div className="h-full flex-grow">
          {selectedEditor === "content" && <LeadMagnetContentEditor />}
          {selectedEditor === "prompt" && <LeadMagnetPromptEditor />}
          {selectedEditor === "email" && <LeadMagnetEmailEditor />}
          {selectedEditor === "profile" && <LeadMagnetProfileEditor />}
          { /* {selectedEditor === "settings" && <LeadMagnetSettings />} */} 
        </div>
      </div>
    </div>
  );
}

export default LeadMagnetEditor;
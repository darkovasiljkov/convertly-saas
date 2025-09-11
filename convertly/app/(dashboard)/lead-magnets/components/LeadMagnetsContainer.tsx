"use client";

import { Button } from "@/components/ui/button";
import { LeadMagnet, Lead} from "@/lib/generated/prisma";
import Link from "next/link";
import React from "react";
import LeadMagnetTable from "./LeadMagnetTable";


interface LeadMagnetsContainerProps {
    leadMagnets: LeadMagnet[];
    leads: Lead[];
}


function LeadMagnetsContainer({ leadMagnets, leads }: LeadMagnetsContainerProps) {

    return (
        <div className="p-6 w-full lg:max-w-5xl lg:mx-auto">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Lead Magnets</h2>
                <Button variant="default">
                    <Link href="/lead-magnet-editor">Create</Link>
                </Button>
            </div>
        
        <LeadMagnetTable leadMagnets={leadMagnets} leads={leads} />

      
        </div>
    )
}
export default LeadMagnetsContainer;
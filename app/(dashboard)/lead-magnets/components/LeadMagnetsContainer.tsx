"use client";

import { Button } from "@/components/ui/button";
import { LeadMagnet, Lead, Subscription} from "@prisma/client";
import Link from "next/link";
import React from "react";
import LeadMagnetTable from "./LeadMagnetTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { getPayingStatus } from "@/utils/stripe";
import { MAXIMUM_FREE_LEAD_MAGNETS } from "@/lib/constants";
import toast from "react-hot-toast";
import axios from "axios";


interface LeadMagnetsContainerProps {
    leadMagnets: LeadMagnet[];
    leads: Lead[];
    subscription: Subscription | null;
}


function LeadMagnetsContainer({ leadMagnets, leads, subscription }: LeadMagnetsContainerProps) {

    const router = useRouter();

    const isActive = getPayingStatus(subscription);

    const [upgrading, setUpgrading] = React.useState(false);

    const isMaxFreeLeadMagnet = !isActive && leadMagnets.length >= MAXIMUM_FREE_LEAD_MAGNETS;

    const upgrade = async () => {
    setUpgrading(true);
    try {
      const response = await axios.get("/api/stripe");

      if (response.data.url) {
        router.push(response.data.url);
      } else {
            console.error("Something went wrong with Stripe.");
            toast.error("Something went wrong with Stripe.");
      }
    } catch (error) {
        toast.error("Something went wrong with Stripe.");
    } finally {
        setUpgrading(false);
    }
  };

  
    return (
        <div className="p-6 w-full lg:max-w-5xl lg:mx-auto">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Lead Magnets</h2>
                <Button disabled={isMaxFreeLeadMagnet}variant="default">
                    <Link href="/lead-magnet-editor">Create</Link>
                </Button>
            </div>
        
         <LeadMagnetTable leadMagnets={leadMagnets} leads={leads} />
 {!isActive && (
        <div className="flex flex-col w-full mt-8 items-center">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="bg-gradient-to-r from-sky-500 to-blue-500 inline-block text-transparent bg-clip-text pb-1 w-fit mx-auto">
                Upgrade To Premium
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              <p className="font-semibold text-gray-700 mb-2">
                {leadMagnets.length} / {MAXIMUM_FREE_LEAD_MAGNETS} Free Lead
                Magnets Generated
              </p>
              <Button variant="outline" onClick={upgrade}>
                <span className="mr-2">🚀
                </span>
                {upgrading ? "Upgrading..." : "Upgrade"}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default LeadMagnetsContainer;
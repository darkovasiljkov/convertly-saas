import { Button } from "@/components/ui/button";
import { Lead, LeadMagnet } from "@/lib/generated/prisma";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import Link from "next/link";

interface LeadMagnetTableProps {
    leadMagnets: LeadMagnet[];
    leads: Lead[];
}


function LeadMagnetTable({ leadMagnets, leads }: LeadMagnetTableProps) {
  
  const getLeadsForLeadMagnet = (leadMagnetId: string): number => {
    const leadsForLeadMagnet = leads.filter(
      (lead) => lead.leadMagnetId === leadMagnetId
    );

    return leadsForLeadMagnet.length;
  };

const getConversionRate = (
  leadMagnetId: string,
  pageViews: number
): number => {
  if (pageViews === 0) return 0;

  const conversionRate = Math.round(
    (getLeadsForLeadMagnet(leadMagnetId) / pageViews) * 100
  );

  return conversionRate;
};


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-lg">Name</TableHead>
          <TableHead className="text-lg">Page Visits</TableHead>
          <TableHead className="text-lg">Leads</TableHead>
          <TableHead className="text-lg">Conversion Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leadMagnets.map((leadMagnet) => (
          <TableRow key={leadMagnet.id}>
            <TableCell>
              <Link
                className="text-lg"
                href={`/lead-magnet-editor/${leadMagnet.id}`}
              >
                {leadMagnet.name}
              </Link>
            </TableCell>
            <TableCell>{leadMagnet.pageViews}</TableCell>
            <TableCell>{getLeadsForLeadMagnet(leadMagnet.id)}</TableCell>
            <TableCell>
              {getConversionRate(leadMagnet.id, leadMagnet.pageViews)} %
            </TableCell>
            <TableCell>
              <Link href={`/leads/${leadMagnet.id}`}>
                <Button className="font-normal" variant="link">
                  View Leads
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default LeadMagnetTable;
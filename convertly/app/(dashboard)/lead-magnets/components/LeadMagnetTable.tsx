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



interface LeadMagnetTableProps {
    leadMagnets: LeadMagnet[];
    leads: Lead[];
}


function LeadMagnetTable({leadMagnets, leads}: LeadMagnetTableProps)
{
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
                <TableCell>{leadMagnet.name}</TableCell>
                <TableCell>{leadMagnet.pageViews}</TableCell>
                <TableCell>test</TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default LeadMagnetTable;
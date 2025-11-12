"use client";

import React from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { Lead } from "@prisma/client";
import { Copy, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function LeadsTable({ leads }: { leads: Lead[] }) {
  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Table className="w-full max-w-4xl">
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg">Name</TableHead>
            <TableHead className="text-lg">Email</TableHead>
            <TableHead className="text-lg">Sign Up Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>{lead.name}</TableCell>
              <TableCell className="flex items-center gap-2">
                <span>{lead.email}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(lead.email)}
                  className="h-6 w-6 text-gray-500 hover:text-gray-700"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell>{dayjs(lead.createdAt).format("MM-DD-YYYY")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {leads.length === 0 && (
        <div className="text-center font-semibold text-gray-500">
          There are no leads for this lead magnet yet.
        </div>
      )}

      <Link href="/lead-magnets">
        <Button
          variant="outline"
          className="flex items-center gap-2 mt-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Lead Magnet Page
        </Button>
      </Link>
    </div>
  );
}

export default LeadsTable;

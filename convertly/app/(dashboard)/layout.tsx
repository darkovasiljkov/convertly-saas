import DashboardNavBar from "@/components/DashboardNavBar";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full w-full">
        <DashboardNavBar />
        {children}
        <Toaster />
    </div>
  );
}
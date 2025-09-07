import { prismadb } from "../../../lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const getLeadMagnets = async (userId: string) => {
  try {
    const leadMagnets = await prismadb.leadMagnet.findMany({
      where: { userId },
    });

    return leadMagnets;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getLeads = async (userId: string) => {
  try {
    const leads = await prismadb.lead.findMany({
      where: { userId },
    });

    return leads;
  } catch (error) {
    console.error(error);
    return [];
  }
};
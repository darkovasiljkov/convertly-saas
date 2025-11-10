import LeadMagnetNotFound from '@/components/LeadMagnetNotFound';
import { prismadb } from '@/lib/prismadb';
import React from 'react'
import LeadContainer
 from './components/LeadContainer';

interface LeadPageProps {
params: {
    leadMagnetId: string;
}

}
export default async function LeadsPage({ params }: LeadPageProps) {
  const { leadMagnetId } = params;

  if (!leadMagnetId) {
    return <LeadMagnetNotFound returnLink='/lead-magnets' />
  }

  const leadMagnet = await prismadb.leadMagnet.findUniqueOrThrow({
    where: { id: leadMagnetId },
    include: { leads: { orderBy: { createdAt: 'desc' } } }
  });

  return <LeadContainer leadMagnet={leadMagnet} leads={leadMagnet.leads} />;
}

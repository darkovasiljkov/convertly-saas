import LeadMagnetAIChatContainer from "@/components/LeadMagnetAIChatContainer";
import LeadMagnetNotFound from "@/components/LeadMagnetNotFound";
import { prismadb } from "@/lib/prismadb";
import React from "react";
import LeadMagnetView from "./components/LeadMagnetView";

interface LeadMagnetPageProps {
  params: {
    username: string;
    leadMagnetSlug: string;
  };
}


export default async function LeadMagnetPage({ params }: LeadMagnetPageProps) {
  console.log("params", params);

  if (!params.username || !params.leadMagnetSlug) {
    return <LeadMagnetNotFound returnLink="/" />;
  }

  const account = await prismadb.account.findUnique({
    where: { username: params.username },
  });

  if (!account) {
    return <LeadMagnetNotFound returnLink="/" />;
  }

  const fetchProfile = prismadb.profile.findFirst({
    where: { userId: account.userId },
  });

  const fetchLeadMagnet = prismadb.leadMagnet.findFirst({
    where: {
      userId: account.userId,
      slug: params.leadMagnetSlug,
    },
  });

  const [profile, leadMagnet] = await Promise.all([
    fetchProfile,
    fetchLeadMagnet,
  ]);

  if (!leadMagnet || !profile) {
    return <LeadMagnetNotFound returnLink="/" />;
  }

  return (
    <div className="ai-dotted-pattern flex w-screen flex-row justify-between p-6 md:max-h-screen min-h-screen md:flex-row md:p-8 lg:p-12">
      <LeadMagnetView leadMagnet={leadMagnet} profile={profile} />
      <div
        id="ai-chat"
        className="mb-10 flex max-h-[85vh] flex-1 flex-col rounded-lg bg-white p-4 shadow-lg md:mb-0 md:ml-4 md:overflow-y-scroll md:p-8"
      >
        <LeadMagnetAIChatContainer
          emailCapturePrompt={leadMagnet.publishedEmailCapture}
          leadMagnetId={leadMagnet.id}
          firstQuestion={leadMagnet.publishedFirstQuestion}
          prompt={leadMagnet.publishedPrompt}
          captureEmail={true}
        />
      </div>
    </div>
  );
}
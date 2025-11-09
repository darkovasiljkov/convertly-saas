import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prismadb";
import { slugifyLeadMagnet } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
const leadMagnetUnPublishRequest = z.object({
  id: z.string().min(1, { message: "Id is required" }),
});

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user || !user.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userId = user.id;

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const requestBody = await request.json();
  const parsedUnPublishedRequest =
    leadMagnetUnPublishRequest.safeParse(requestBody);

  if (!parsedUnPublishedRequest.success) {
    return NextResponse.json(
      { message: parsedUnPublishedRequest.error },
      { status: 400 }
    );
  }

  const unPublishRequest = parsedUnPublishedRequest.data;

  const leadMagnet = await prismadb.leadMagnet.findUnique({
    where: {
      id: unPublishRequest.id,
    },
  });

  if (!leadMagnet) {
    return NextResponse.json(
      { message: "Lead magnet is not found " },
      { status: 404 }
    );
  }

  const unPublishedLeadMagnet = await prismadb.leadMagnet.update({
    where: {
      id: unPublishRequest.id,
    },
    data: {
      ...leadMagnet,
      publishedBody: leadMagnet.draftBody,
      status: "draft",
      updatedAt: new Date()
    },
  });

  return NextResponse.json({
    message: "Successfully unpublished Lead Magnet!",
    data: unPublishedLeadMagnet,
    success: true,
  },
  { status: 200 });
}
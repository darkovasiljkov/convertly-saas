import { PrismaClient } from "../lib/generated/prisma";

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.leadMagnet.create({
    data: {
      id: "32763cdd-7161-4c06-866e-8ff51acafdd7",
      draftBody: "This is a draft body",
      draftEmailCapture: "This is a draft email capture",
      draftFirstQuestion: "This is a draft first question",
      draftPrompt: "This is a draft prompt",
      draftSubtitle: "This is a draft subtitle",
      draftTitle: "This is a draft title",
      name: "Alex Hormozi Books",
      publishedBody: "This is a published body",
      publishedEmailCapture: "This is a published email capture",
      publishedFirstQuestion: "This is a published first question",
      publishedPrompt: "This is a published prompt",
      publishedSubtitle: "This is a published subtitle",
      publishedTitle: "This is a published title",
      slug: "lead-magnet-slug",
      status: "draft",
      userId: "user_32KwMp6ptaO3FEkOz1SZEWEK9n6",
    },
  });

  await prisma.lead.createMany({
    data: [
      {
        name: "Dummy User 1",
        email: "dummy1@gmail.com",
        leadMagnetId: "123456789",
        userId: "user_32KwMp6ptaO3FEkOz1SZEWEK9n6",
      },
      {
        name: "Dummy User 2",
        email: "dummy2@gmail.com",
        leadMagnetId: "123456789",
        userId: "user_32KwMp6ptaO3FEkOz1SZEWEK9n6",
      },
    ],
  });
};

seed()
  .then(() => {
    console.log("Seeding completed successfully");
  })
  .catch((error) => {
    console.error("Error seeding the database:", error);
  });
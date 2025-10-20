import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { object, string } from "zod";

export async function PUT(request: Request)
{
    const user = await currentUser();
    
      if (!user || !user.id) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
    
      const userId = user.id;
    
      const requestBody = await request.json();

      const usernameSchema = object({
        username: string()
            .min(3, { message: "A username must be at least 3 characters long."})
            .max(20, { message: "A username must be 20 characters or less."})
      })
      const parsed = usernameSchema.safeParse(requestBody);
    
      if (!parsed.success) {
        return NextResponse.json(
          { message: JSON.parse(parsed.error.message), success:false,  data: null },
          { status: 400 }
        );
      }
      const data = {
        ...parsed.data,
        userId: userId,
      };
}
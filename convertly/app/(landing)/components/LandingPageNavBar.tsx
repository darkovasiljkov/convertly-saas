import { Button } from "@/components/ui/button";
import { SignInButton, UserButton} from "@clerk/nextjs";
import { currentUser, User } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";
import React from "react";

async function LandingPageNavbar() {
  const user: User | null = await currentUser();

  console.log("USER", user);

  return (
    <nav className="flex w-screen items-center justify-between p-6 ">
      <div>
        <Link
          className="text-2xl font-bold text-blue-500 no-underline"
          href="/"
        >
        {/* <Image
            src="/Convertly_Logo.jpeg"
            alt="Convertly Logo"
            width={200} 
            height={100}/> */}

            Convertly
        </Link>
      </div>
      <div className="text-blue-500 font-semibold text-lg">
        {user ? (
          <div className="flex flex-row gap-x-4 items-center">
            <Link href="/lead-magnets">
              <Button variant="outline">Get Started</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </nav>
  );
}

export default LandingPageNavbar;
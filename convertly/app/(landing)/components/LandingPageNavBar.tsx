import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser, User } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";
import React from "react";

async function LandingPageNavbar() {
  const user: User | null = await currentUser();

  return (
    <nav className="flex w-screen items-center justify-between p-6 h-20">
      <Link href="/" className="flex items-center no-underline"> 
        <Image
          src="/ConvertlyTransparent_Logo.png" 
          alt="Convertly Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </Link>
      <div className="text-blue-500 font-semibold text-lg flex items-center">
        {user ? (
          <div className="flex flex-row items-center gap-x-4">
            <Link href="/lead-magnets">
              <Button variant="outline">Get Started</Button>
            </Link>
            <UserButton showName  />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </nav>
  );
}

export default LandingPageNavbar;
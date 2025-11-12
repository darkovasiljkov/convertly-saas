import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser, User } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";
import React from "react";

async function LandingPageNavbar() {
  const user: User | null = await currentUser();

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-screen flex items-center justify-between p-6 h-20 bg-white/80 backdrop-blur-md transition-shadow shadow-md">
      <Link href="/" className="flex items-center no-underline ml-8">
        <Image
          src="/Convertly_Fixed.png"
          alt="Convertly Logo"
          width={135}
          height={33}
          className="object-contain"
        />
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sn font-semibold text-gray-800 transition-colors hover:text-sky-600"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="text-blue-500 font-semibold text-lg flex items-center">
        {user ? (
          <div className="flex flex-row items-center gap-x-4">
            <Link href="/lead-magnets">
            <Button className="bg-gradient-to-r from-sky-500 to-blue-600 not-first:font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105">
              Get started free
            </Button>
          </Link>
            <UserButton showName />
          </div>
        ) : (
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
}

export default LandingPageNavbar;

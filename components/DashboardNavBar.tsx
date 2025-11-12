"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const routes = [    
    {
      name: "Lead Magnets",
      path: "/lead-magnets"
    },
    {
      name: "Account",
      path: "/account"
    }
]
function DashboardNavBar() {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <div className="top-0 z-50 w-screen flex items-center justify-between p-6 h-20 bg-white/80 text-darkblue-500 border-b-2">
        <Link href="/" className="flex items-center no-underline ml-8">
          <Image
              src="/Convertly_Fixed.png"
              alt="Convertly Logo"
              width={135}
              height={33}
              className="object-contain"
            />
        </Link>
      <div className="flex gap-x-6 text-lg items-center">
        {routes.map((route, idx) => (
          <Link
            key={idx}
            href={route.path}
            className={
              pathname === route.path ? "border-b-2 border-sky-300" : ""
            }
          >
            {route.name}
          </Link>
        ))}

        <UserButton/>
      </div>
    </div>
  );
}

export default DashboardNavBar;
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default LandingPage;

const Hero = () => {
  return (
 <div className="mx-4 mb-16 mt-10 flex flex-1 flex-col items-center text-center sm:mb-14 md:mb-36 md:mt-24">
  <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
    Turn Your Content Into
    <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
      {" "}AI-Powered Lead Magnets
    </span>
    {" "}with Convertly
  </h1>

  <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
    Convertly helps you engage your audience with interactive AI experiences 
    that capture leads and guide them seamlessly to your products, courses, or services—no coding required.
  </p>

  <div className="mt-6 flex flex-col sm:flex-row sm:gap-4">
    <Link href="/lead-magnets">
      <Button variant="default" size="lg" className="md:text-lg px-6 py-3">
        Create Your First AI Lead Magnet
      </Button>
    </Link>
    <Link href="/how-it-works">
      <Button variant="outline" size="lg" className="md:text-lg px-6 py-3">
        See How Convertly Works
      </Button>
    </Link>
  </div>
</div>

  );
};
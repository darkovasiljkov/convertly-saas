import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convertly - AI Lead Magnet Builder",
    description:
    "Convertly helps you design, edit, and publish high-converting lead magnets with ease. Manage drafts, customize titles, and engage your audience all in one platform.",
  keywords: [
    "Convertly",
    "lead magnet builder",
    "email marketing",
    "digital marketing",
    "conversion optimization",
    "landing pages",
    "marketing tools",
    "growth marketing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <ClerkProvider afterSignOutUrl={"/"} 
      appearance={
        { theme: shadcn}
      }>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1 flex items-center justify-center`}>
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
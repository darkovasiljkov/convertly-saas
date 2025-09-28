import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convertly",
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
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
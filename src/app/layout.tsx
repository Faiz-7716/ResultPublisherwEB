import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";
import Navbar from "@/components/layout/Navbar";
import LeftSidebar from "@/components/feed/LeftSidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResultHub | The Public Data Ecosystem",
  description: "A modern public data ecosystem for exam results, government scores, sports data, and civic engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased pb-16 md:pb-0 min-h-screen flex flex-col`}>
        <Navbar />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-start lg:gap-12 w-full mt-6 flex-1">
          <LeftSidebar />
          <div className="flex-1 max-w-[1000px] min-w-0 w-full mb-12">
            {children}
          </div>
        </div>
        <BottomNav />
      </body>
    </html>
  );
}

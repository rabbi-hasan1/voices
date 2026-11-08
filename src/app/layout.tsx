import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import {ClerkProvider} from "@clerk/nextjs"
import { TooltipProvider } from "@/components/ui/tooltip";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voice studio",
  description: "AI voice studio for creating, cloning, and refining lifelike voice content with studio-quality tools inspired by ElevenLabs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="">
        <ClerkProvider >
          <TooltipProvider>

        {children}
        </TooltipProvider>
        </ClerkProvider>
        <Toaster />
      </body>
    </html>
  );
}

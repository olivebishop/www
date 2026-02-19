import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/shared/navbar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../public/Fonts/WEB/fonts/CabinetGrotesk-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olive Bishop - Portfolio",
  description: "Portfolio of Olive Bishop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(cabinetGrotesk.className, geist.variable)}>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

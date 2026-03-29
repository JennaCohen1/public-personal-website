import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Jenna Cohen",
  description: "Personal project showcase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#F2F0E9] text-[#1A1A1D] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const body = Outfit({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iniyan Trends — Grand Opening Invitation",
  description:
    "You are invited to the grand opening of Iniyan Trends, Muduchur, Chennai. Men's & Kids Wear, Shoes, Watches.",
  openGraph: {
    title: "Iniyan Trends — Grand Opening · 23 Aug 2026",
    description:
      "No.158, Swamy Nagar, Muduchur, Chennai - 600048. Men's & Kids Wear, Shoes, Watches.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

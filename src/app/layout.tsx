import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ADDRESS, CATEGORIES, SHOP, WHEN } from "@/lib/content";
import "./globals.css";

const body = Outfit({ variable: "--font-body", subsets: ["latin"] });

// Built from content.ts so the shop name lives in exactly one place.
const BLURB = `${ADDRESS}. ${CATEGORIES.join(" · ")}.`;

export const metadata: Metadata = {
  title: `${SHOP} — Grand Opening Invitation`,
  description: `You are invited to the grand opening of ${SHOP}. ${WHEN}. ${BLURB}`,
  openGraph: {
    title: `${SHOP} — Grand Opening`,
    description: `${WHEN}. ${BLURB}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

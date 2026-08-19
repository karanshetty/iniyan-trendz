// Everything you'll edit lives in this file.
export const SHOP = "Iniyan Trendz";
export const WHEN = "Sunday, 23 August 2026  |  at 10 AM";
/** Same moment as WHEN, in IST. Keep the two in sync. */
export const OPENING_AT = "2026-08-23T10:00:00+05:30";
export const ADDRESS = "No.158, Swamy Nagar, Muduchur, Chennai - 600048";
export const MAP = "https://maps.app.goo.gl/3ecvtZPtp7d1Wa8DA?g_st=aw";
export const SITE = "https://iniyan-trendz.vercel.app/";
export const INSTAGRAM =
  "https://www.instagram.com/iniyan_trendz?igsh=MTh4MWp0bWl1bXEzdg==";
export const INSTAGRAM_HANDLE = "@iniyan_trendz";

export const CONTACTS = [
  { name: "Pandiyaraj", phone: "8667769525" },
  { name: "Arun Kumar", phone: "9994562414" },
];

export const CATEGORIES = ["Men's Wear", "Kids Wear", "Shoes", "Watches"];

export const SERVICES = [
  "Men's Tailoring",
  "Women's Tailoring",
  "All Types of Alteration",
];

// ponytail: add strings here when the offers are decided; empty renders a teaser instead.
export const OFFERS: string[] = [
  "Purchase above ₹999 — free belt, cap or perfume",
  "Purchase above ₹1999 — free shoe or watch",
];

export const SHARE = `https://wa.me/?text=${encodeURIComponent(
  `🎉 You're invited to the Grand Opening of ${SHOP}!\n\n${WHEN}\n${ADDRESS}\n\n${CATEGORIES.join(" · ")}\n\n${SITE}`,
)}`;

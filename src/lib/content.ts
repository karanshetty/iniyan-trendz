// Everything you'll edit lives in this file.
export const SHOP = "Iniyan Trends";
export const WHEN = "Sunday, 23 August 2026  |  at 9 AM";
/** Same moment as WHEN, in IST. Keep the two in sync. */
export const OPENING_AT = "2026-08-23T09:00:00+05:30";
export const ADDRESS = "No.158, Swamy Nagar, Muduchur, Chennai - 600048";
export const MAP = "https://maps.app.goo.gl/3ecvtZPtp7d1Wa8DA?g_st=aw";

export const CONTACTS = [
  { name: "Pandiyaraj", phone: "8973128746" },
  { name: "Arun Kumar", phone: "9994562414" },
];

export const CATEGORIES = ["Men's Wear", "Kids Wear", "Shoes", "Watches"];

// ponytail: add strings here when the offers are decided; empty renders a teaser instead.
export const OFFERS: string[] = [];

export const SHARE = `https://wa.me/?text=${encodeURIComponent(
  `🎉 You're invited to the Grand Opening of ${SHOP}!\n\n${WHEN}\n${ADDRESS}\n\n${CATEGORIES.join(" · ")}\n\nLocation: ${MAP}`,
)}`;

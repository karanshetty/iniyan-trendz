"use client";

import { useEffect, useState } from "react";
import Deco from "@/components/Deco";
import { ADDRESS, SHOP, WHEN } from "@/lib/content";

const DURATION = 5000;

export default function Splash() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setOpen(false), DURATION);
    // Stop the page scrolling behind the overlay.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    // ponytail: unmounts instantly — add a fade-out state only if the cut looks harsh on a real phone.
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ink px-5 py-20 text-center">
      <Deco />

      {/* Covers the whole overlay so a tap anywhere dismisses; a real button
          keeps it keyboard- and screen-reader-reachable. */}
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Skip intro"
        className="absolute inset-0 z-10 cursor-pointer"
      />

      <div className="relative w-full">
        <p
          className="rise text-[0.65rem] uppercase tracking-[0.4em] text-paper/85 sm:text-sm sm:tracking-[0.5em]"
          style={{ animationDelay: "0.1s" }}
        >
          You are invited to
        </p>

        <h1
          className="rise mt-5 text-5xl font-black uppercase leading-[0.88] tracking-tight text-amber sm:mt-6 sm:text-7xl md:text-8xl"
          style={{ animationDelay: "0.25s" }}
        >
          Grand
          <br />
          Opening
        </h1>

        <p
          className="rise mt-7 text-xl font-black uppercase tracking-tight text-paper sm:mt-8 sm:text-3xl"
          style={{ animationDelay: "0.4s" }}
        >
          {SHOP}
        </p>

        <p
          className="rise mx-auto mt-4 max-w-xs text-balance text-sm font-bold uppercase tracking-wide text-paper sm:max-w-none sm:text-base"
          style={{ animationDelay: "0.5s" }}
        >
          {WHEN}
        </p>

        <p
          className="rise mx-auto mt-3 max-w-[16rem] text-xs font-semibold uppercase leading-relaxed text-paper/80 sm:max-w-sm sm:text-sm"
          style={{ animationDelay: "0.6s" }}
        >
          {ADDRESS}
        </p>

        <p
          className="rise bob mt-10 text-[0.65rem] uppercase tracking-[0.3em] text-amber sm:mt-12"
          style={{ animationDelay: "1.4s" }}
        >
          Tap anywhere to continue
        </p>
      </div>
    </div>
  );
}

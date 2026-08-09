"use client";

import { useEffect, useState } from "react";
import { OPENING_AT, SHOP } from "@/lib/content";
import { breakdown } from "@/lib/countdown";

const TARGET = new Date(OPENING_AT).getTime();

export default function Countdown() {
  // Starts null so server and client render the same first paint — the real
  // clock only exists after mount.
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(TARGET - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const t = breakdown(left ?? 0);
  const units = [
    { value: t.days, label: "Days" },
    { value: t.hours, label: "Hours" },
    { value: t.minutes, label: "Mins" },
    { value: t.seconds, label: "Secs" },
  ];

  return (
    <section className="px-5 py-12 text-center sm:px-6 sm:py-16">
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ink/50 sm:text-xs">
        {left !== null && t.done ? `${SHOP} is now open` : "Counting down to"}
      </p>
      <p className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
        Grand Opening
      </p>

      <div className="mx-auto mt-7 grid max-w-md grid-cols-4 gap-2 sm:gap-3">
        {units.map((u) => (
          <div key={u.label} className="rounded-2xl bg-ink px-1 py-4 sm:py-5">
            <div className="font-mono text-2xl font-black tabular-nums text-amber sm:text-4xl">
              {left === null ? "--" : String(u.value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-paper/70 sm:text-xs">
              {u.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

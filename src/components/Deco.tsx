/**
 * Confetti behind the hero. Decorative only — hidden from screen readers.
 *
 * Everything is pinned to the top ~24% or bottom ~24% band. The middle is left
 * clear because that is where the headline sits, and the short Hero container
 * squeezes anything placed mid-height straight onto the text. Motion amplitudes
 * stay under ~13px so neighbours never drift into each other.
 */
export default function Deco() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* ── top band ───────────────────────────────────────────── */}
      {/* concentric arcs, top-left corner — static by design */}
      <span className="absolute -left-9 -top-9 size-28 rotate-45 rounded-full border-4 border-amber border-b-transparent border-l-transparent sm:size-40 sm:border-[6px]" />
      <span className="absolute -left-1 -top-1 size-16 rotate-45 rounded-full border-4 border-paper border-b-transparent border-l-transparent sm:size-24 sm:border-[5px]" />

      <span className="float absolute -top-12 right-[7%] h-40 w-6 rotate-28 rounded-full bg-amber sm:h-64 sm:w-9" />
      <span className="drift absolute -top-6 right-[30%] h-16 w-2 rotate-28 rounded-full bg-paper sm:h-24 sm:w-3" />
      <span className="glide absolute left-[30%] top-[4%] h-16 w-0.5 rotate-28 rounded-full bg-paper/55 sm:h-24" />
      <span className="twinkle absolute left-[16%] top-[13%] text-base text-red sm:text-xl">
        ✦
      </span>
      <span className="twinkle absolute right-[6%] top-[20%] text-xl text-amber sm:text-3xl">
        ✦
      </span>

      {/* ── bottom band ────────────────────────────────────────── */}
      {/* concentric arcs, bottom-right corner — static by design */}
      <span className="absolute -bottom-9 -right-9 size-28 rotate-45 rounded-full border-4 border-red border-r-transparent border-t-transparent sm:size-40 sm:border-[6px]" />
      <span className="absolute -bottom-1 -right-1 size-16 rotate-45 rounded-full border-4 border-paper border-r-transparent border-t-transparent sm:size-24 sm:border-[5px]" />

      <span className="float absolute -bottom-12 left-[9%] h-36 w-5 rotate-28 rounded-full bg-amber sm:h-56 sm:w-8" />
      <span className="drift absolute -bottom-4 left-[1%] h-16 w-2 rotate-28 rounded-full bg-paper sm:h-24 sm:w-3" />
      <span className="drift absolute bottom-[6%] right-[27%] h-16 w-2 rotate-28 rounded-full bg-red sm:h-24 sm:w-3" />
      <span className="glide absolute bottom-[10%] left-[34%] h-16 w-0.5 rotate-28 rounded-full bg-paper/55 sm:h-24" />
      <span className="twinkle absolute bottom-[17%] left-[7%] text-xl text-amber sm:text-3xl">
        ✦
      </span>
      <span className="twinkle absolute bottom-[22%] right-[8%] text-base text-red sm:text-xl">
        ✦
      </span>
    </div>
  );
}

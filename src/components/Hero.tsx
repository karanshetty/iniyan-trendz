import Deco from "@/components/Deco";
import { CATEGORIES, MAP, SHOP, WHEN } from "@/lib/content";

function Marquee() {
  return (
    <div className="overflow-hidden bg-amber py-4">
      <div className="marquee flex w-max whitespace-nowrap">
        {[0, 1].map((i) => (
          <span key={i} className="flex" aria-hidden={i === 1}>
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="px-5 text-lg font-black uppercase tracking-tight text-ink sm:px-6 sm:text-2xl"
              >
                {c} <span className="text-red">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <section className="p-3 sm:p-6">
        <div className="relative flex min-h-[46svh] items-center justify-center overflow-hidden rounded-3xl bg-ink px-5 py-16 text-center sm:px-6 sm:py-20">
          <Deco />
          <div className="relative w-full">
            <h1 className="text-4xl font-black uppercase leading-[0.88] tracking-tight text-amber sm:text-6xl">
              Grand Opening
            </h1>
            <p className="mt-5 text-lg font-black uppercase tracking-tight text-paper sm:text-2xl">
              {SHOP}
            </p>
            <p className="mx-auto mt-3 max-w-xs text-balance text-sm font-bold uppercase tracking-wide text-paper/85 sm:max-w-none sm:text-base">
              {WHEN}
            </p>
            <a
              href={MAP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-amber px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-red hover:text-paper sm:text-sm"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>
      <Marquee />
    </>
  );
}

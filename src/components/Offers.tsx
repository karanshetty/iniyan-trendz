import Row from "@/components/Row";
import { OFFERS } from "@/lib/content";

export default function Offers() {
  return (
    <Row n="03" label="Offers">
      {OFFERS.length ? (
        // Same dark card as the countdown tiles, so offers read as part of the set.
        <ul className="grid gap-3 sm:grid-cols-2">
          {OFFERS.map((o) => (
            <li
              key={o.spend}
              className="rounded-2xl bg-ink px-4 py-6 text-center"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-paper/70 sm:text-xs">
                {o.spend}
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-amber sm:text-xl">
                {o.gift}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-base text-ink/60 sm:text-lg">
          Grand opening offers revealed soon.
        </p>
      )}
    </Row>
  );
}

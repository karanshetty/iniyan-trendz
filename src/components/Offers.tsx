import Row from "@/components/Row";
import { OFFERS } from "@/lib/content";

export default function Offers() {
  return (
    <Row n="03" label="Offers">
      {OFFERS.length ? (
        <ul className="space-y-2 text-base sm:text-lg">
          {OFFERS.map((o) => (
            <li key={o}>
              <span className="text-red">✦</span> {o}
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

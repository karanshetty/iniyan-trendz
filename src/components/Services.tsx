import Row from "@/components/Row";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <Row n="02" label="Services">
      <ul className="space-y-2 text-base sm:text-lg">
        {SERVICES.map((s) => (
          <li key={s}>
            <span className="text-red">✦</span> {s}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-ink/60">Available inside the shop.</p>
    </Row>
  );
}

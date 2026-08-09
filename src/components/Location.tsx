import Row from "@/components/Row";
import { ADDRESS, MAP } from "@/lib/content";

export default function Location() {
  return (
    <Row n="01" label="Visit">
      <address className="not-italic text-base leading-snug sm:text-lg">
        {ADDRESS}
      </address>
      <a
        href={MAP}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wider text-paper transition-colors hover:bg-red"
      >
        Get Directions →
      </a>
    </Row>
  );
}

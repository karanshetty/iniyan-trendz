import Row from "@/components/Row";
import { CONTACTS } from "@/lib/content";

export default function Contact() {
  return (
    <Row n="04" label="Call">
      <div className="flex flex-col gap-3">
        {CONTACTS.map((c) => (
          <a
            key={c.phone}
            href={`tel:+91${c.phone}`}
            className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dotted border-ink/25 pb-2"
          >
            <span className="text-base font-semibold sm:text-lg">{c.name}</span>
            <span className="font-mono text-sm text-ink/70 group-hover:text-red sm:text-base">
              +91 {c.phone}
            </span>
          </a>
        ))}
      </div>
    </Row>
  );
}

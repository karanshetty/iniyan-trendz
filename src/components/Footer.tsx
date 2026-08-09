import Row from "@/components/Row";
import { SHARE, SHOP } from "@/lib/content";

export default function Footer() {
  return (
    <footer>
      <Row n="04" label="Share">
        <a
          href={SHARE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-ink px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-ink hover:text-paper"
        >
          Send on WhatsApp
        </a>
      </Row>
      <p className="mt-14 border-t-4 border-ink pt-4 text-[0.65rem] uppercase tracking-[0.25em] text-ink/50 sm:text-xs sm:tracking-[0.3em]">
        {SHOP} · Muduchur, Chennai
      </p>
    </footer>
  );
}

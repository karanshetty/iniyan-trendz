import Button from "@/components/Button";
import Row from "@/components/Row";
import { INSTAGRAM, INSTAGRAM_HANDLE, SHARE, SHOP } from "@/lib/content";

export default function Footer() {
  return (
    <footer>
      <Row n="05" label="Share">
        <Button href={SHARE} variant="outline">
          Send on WhatsApp
        </Button>
      </Row>

      <Row n="06" label="Follow">
        <Button href={INSTAGRAM}>
          {/* Instagram glyph, inline so there's no icon dependency. */}
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="size-4"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
          </svg>
          {INSTAGRAM_HANDLE}
        </Button>
      </Row>

      <p className="mt-14 border-t-4 border-ink pt-4 text-[0.65rem] uppercase tracking-[0.25em] text-ink/50 sm:text-xs sm:tracking-[0.3em]">
        {SHOP} · Muduchur, Chennai
      </p>
    </footer>
  );
}

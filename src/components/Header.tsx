import Button from "@/components/Button";
import { CONTACTS, SHOP } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-ink/10 bg-paper/90 px-4 py-3 backdrop-blur sm:px-6">
      <span className="truncate text-sm font-black uppercase tracking-tight sm:text-base">
        {SHOP}
      </span>
      <Button href={`tel:+91${CONTACTS[0].phone}`}>Call Us</Button>
    </header>
  );
}

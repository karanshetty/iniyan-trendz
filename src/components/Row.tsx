/** Numbered section row shared by Location / Contact / Offers. */
export default function Row({
  n,
  label,
  children,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-ink/15 py-7 sm:flex sm:gap-8">
      <div className="mb-3 flex items-center gap-3 sm:mb-0 sm:w-32 sm:shrink-0 sm:pt-1">
        <span className="font-mono text-sm text-red">{n}</span>
        <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
          {label}
        </span>
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

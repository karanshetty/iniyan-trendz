const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors";

// Every variant carries a border so all three share the exact same box size.
const VARIANTS = {
  /** Default, for the white sections. */
  solid: "border-ink bg-ink text-paper hover:border-red hover:bg-red",
  /** Secondary weight, still on white. */
  outline: "border-ink text-ink hover:bg-ink hover:text-paper",
  /** For the black hero card, where a black button would vanish. */
  amber:
    "border-amber bg-amber text-ink hover:border-red hover:bg-red hover:text-paper",
};

export default function Button({
  href,
  variant = "solid",
  children,
}: {
  href: string;
  variant?: keyof typeof VARIANTS;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`${BASE} ${VARIANTS[variant]}`}
    >
      {children}
    </a>
  );
}

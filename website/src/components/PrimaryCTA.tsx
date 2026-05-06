type PrimaryCTAProps = {
  href: string;
};

export function PrimaryCTA({ href }: PrimaryCTAProps) {
  return (
    <a
      className="inline-flex items-center justify-center border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-3 font-black uppercase tracking-tight transition-colors hover:bg-[var(--accent-2-color)] hover:text-[var(--bg-color)]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      AUDIT MY CODE ON GITHUB
    </a>
  );
}

import type { SpecsRow } from "@/src/content/types";

type SpecsTableProps = {
  rows: SpecsRow[];
};

export function SpecsTable({ rows }: SpecsTableProps) {
  return (
    <div className="pop-panel panel-surface border-[var(--border-w)] border-[var(--border-color)]">
      <div className="poster-header border-b-[var(--border-w)] border-[var(--border-color)] px-4 py-3 font-black uppercase">
        Specs Table
      </div>
      <dl className="grid grid-cols-1">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-2 border-b border-[var(--border-color)] px-4 py-3 md:grid-cols-12"
          >
            <dt className="md:col-span-4 font-semibold">{row.label}</dt>
            <dd className="md:col-span-8">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

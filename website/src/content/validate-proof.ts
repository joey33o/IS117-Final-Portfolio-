/**
 * Sprint 02d — Proof Content Consumer Validation
 *
 * Validates that every display field of `singleProjectProof` is populated
 * and that all spec metrics are non-empty. Run with:
 *   npx tsx src/content/validate-proof.ts
 *
 * Exit 0 = all fields valid.
 * Exit 1 = one or more fields are empty or missing.
 */

import { singleProjectProof as proof } from "./project-proof";

type CheckResult = { field: string; pass: boolean; value: unknown };

const results: CheckResult[] = [];

function check(field: string, value: unknown): void {
  const pass =
    typeof value === "string"
      ? value.trim().length > 0
      : Array.isArray(value)
      ? value.length > 0
      : false;
  results.push({ field, pass, value });
}

// ── Top-level display fields (slug is intentionally excluded — it is an ID, not display copy) ──
check("blockTitle",      proof.blockTitle);
check("problemGoal",     proof.problemGoal);
check("artifactTitle",   proof.artifactTitle);
check("artifactSnippet", proof.artifactSnippet);
check("impact",          proof.impact);
check("caption",         proof.caption);
check("ctaLabel",        proof.ctaLabel);
check("ctaHref",         proof.ctaHref);

// ── Method Note sub-fields ──
check("methodNote.challenge",          proof.methodNote.challenge);
check("methodNote.architecturalChoice", proof.methodNote.architecturalChoice);
check("methodNote.audit",              proof.methodNote.audit);

// ── Specs array presence ──
check("specs (array non-empty)", proof.specs);

// ── Each spec metric ──
proof.specs.forEach((metric, i) => {
  check(`specs[${i}].label`, metric.label);
  check(`specs[${i}].value`, metric.value);
});

// ── CTA label literal lock ──
const ctaLock: CheckResult = {
  field: "ctaLabel === 'AUDIT MY CODE ON GITHUB'",
  pass: proof.ctaLabel === "AUDIT MY CODE ON GITHUB",
  value: proof.ctaLabel,
};
results.push(ctaLock);

// ── Audit field must mention at least one defect ──
const auditMentionsDefect: CheckResult = {
  field: "methodNote.audit mentions a defect",
  pass:
    proof.methodNote.audit.toLowerCase().includes("defect") ||
    proof.methodNote.audit.toLowerCase().includes("fix") ||
    proof.methodNote.audit.toLowerCase().includes("identified"),
  value: proof.methodNote.audit.slice(0, 80) + "…",
};
results.push(auditMentionsDefect);

// ── Report ──
const failures = results.filter((r) => !r.pass);
const width = Math.max(...results.map((r) => r.field.length)) + 2;

console.log("\n── Sprint 02d: Proof Content Consumer Validation ──\n");
for (const r of results) {
  const icon = r.pass ? "✓" : "✗";
  console.log(`  ${icon}  ${r.field.padEnd(width)}`);
}

if (failures.length === 0) {
  console.log(`\n  All ${results.length} checks passed. Content contract is complete.\n`);
  process.exit(0);
} else {
  console.error(`\n  ${failures.length} of ${results.length} checks FAILED:\n`);
  for (const f of failures) {
    console.error(`    ✗  ${f.field}`);
    console.error(`       value: ${JSON.stringify(f.value)}`);
  }
  console.error();
  process.exit(1);
}

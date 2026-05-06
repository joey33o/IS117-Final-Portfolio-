export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
      <section
        className="col-span-4 md:col-span-6 lg:col-span-12 border-solid p-6"
        style={{ borderWidth: "var(--border-w)", borderColor: "var(--border-color)" }}
      >
        <h1 className="text-3xl font-black tracking-tight">AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE.</h1>
        <p className="mt-4 max-w-[var(--measure)] text-base">
          This is a single-project masterclass portfolio. It prioritizes clarity, auditability, and engineered reliability over
          decorative motion.
        </p>
      </section>
    </div>
  );
}

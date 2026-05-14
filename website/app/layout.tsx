import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph Martinez - AI-Augmented Product Engineer",
  description:
    "Front-end and product systems portfolio focused on responsible AI workflows, maintainable UI, and human-audited shipping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-3 font-black"
        >
          Skip to content
        </a>
        <div className="min-h-screen">
          <header
            className="border-solid"
            style={{ borderBottomWidth: "var(--border-w)", borderColor: "var(--border-color)" }}
          >
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
                <div className="col-span-4 md:col-span-6 lg:col-span-12">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="text-sm uppercase tracking-[0.22em]">Joseph Martinez</div>
                    <div className="text-right text-sm uppercase tracking-[0.22em]">
                      Newark, NJ - Seeking front-end, product engineering, and AI workflow internships
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main id="main" className="mx-auto max-w-6xl px-4 py-8">
            {children}
          </main>

          <footer
            className="border-solid"
            style={{ borderTopWidth: "var(--border-w)", borderColor: "var(--border-color)" }}
          >
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm">Built with human audit discipline.</div>
          </footer>
        </div>
      </body>
    </html>
  );
}

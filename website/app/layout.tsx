import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hero Portfolio",
  description: "AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <div className="min-h-screen">
          <header
            className="border-solid"
            style={{ borderBottomWidth: "var(--border-w)", borderColor: "var(--border-color)" }}
          >
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
                <div className="col-span-4 md:col-span-6 lg:col-span-12">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="font-semibold tracking-tight">Your Name</div>
                    <div className="text-sm">Single-Project Portfolio</div>
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

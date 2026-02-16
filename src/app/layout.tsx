import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import { site, getRoleSummary } from "@/data/portfolio";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

const interDisplay = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.name,
  description: getRoleSummary(),
};

/** Inline script to set theme class before first paint (avoids flash). */
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${interDisplay.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {/* Full-height vertical strokes at viewport edges */}
          <div
            className="fixed inset-y-0 left-0 z-0 w-px bg-slate-200/80 dark:bg-slate-700/50 pointer-events-none"
            aria-hidden
          />
          <div
            className="fixed inset-y-0 right-0 z-0 w-px bg-slate-200/80 dark:bg-slate-700/50 pointer-events-none"
            aria-hidden
          />
          <div className="relative min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SiteShell } from "@/components/site-shell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BI Expert | Power BI, Tableau, SQL & Data Analytics",
  description: "Premium BI Expert Portfolio - Showcasing data analytics, SQL, Power BI, and Tableau expertise.",
};

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
      style={{ backgroundColor: 'var(--background)' }}
    >
      <body 
        className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SiteShell>
            {children}
          </SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}

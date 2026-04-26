import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SiteShell } from "@/components/site-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ backgroundColor: 'var(--background)' }}
    >
      <body 
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
        style={{ backgroundColor: 'var(--background)' }}
      >
        <Script id="theme-loader" strategy="beforeInteractive">
          {`
            try {
              var theme = localStorage.getItem('theme') || 'dark';
              if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
              } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          `}
        </Script>
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

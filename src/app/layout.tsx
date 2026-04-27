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
  metadataBase: new URL('https://biexpert.online'),
  title: {
    default: "BI Expert | Power BI, Tableau & SQL Data Analytics | Datta Sable",
    template: "%s | BI Expert"
  },
  description: "10+ years of enterprise BI expertise. Power BI dashboards, Tableau analytics, SQL architecture, MIS automation, and ETL pipelines for BFSI and Fintech organizations in India.",
  keywords: [
    "Power BI consultant India",
    "Tableau developer Mumbai",
    "SQL data architect",
    "BI expert BFSI",
    "MIS automation",
    "ETL pipeline development",
    "data analytics consultant",
    "Power BI dashboard design",
    "business intelligence solutions",
    "Fintech data analytics",
    "enterprise BI Mumbai",
    "DAX expert",
    "data warehouse SQL",
    "Datta Sable BI"
  ],
  authors: [{ name: "Datta Sable", url: "https://biexpert.online" }],
  creator: "Datta Sable",
  publisher: "BI Expert",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://biexpert.online",
    siteName: "BI Expert",
    title: "BI Expert | Power BI, Tableau & SQL Data Analytics",
    description: "10+ years of enterprise BI expertise. Power BI, Tableau, SQL architecture, MIS automation for BFSI and Fintech organizations.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "BI Expert - Data Analytics Consultancy" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BI Expert | Power BI, Tableau & SQL Data Analytics",
    description: "10+ years of enterprise BI expertise. Power BI, Tableau, SQL for BFSI and Fintech.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://biexpert.online"
  }
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

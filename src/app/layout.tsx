import type { Metadata } from "next";
import { Inter, Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SiteShell } from "@/components/site-shell";
import { AuthProvider } from "@/components/auth-provider";
import { CookieBanner } from "@/components/cookie-banner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://biexpert.online'),
  title: {
    default: "Power BI & Tableau Consultant Mumbai | MIS Automation for BFSI – BI Expert",
    template: "%s | BI Expert"
  },
  description: "Mumbai Power BI consultant for banks & NBFCs. Automate MIS, RLS dashboards, RBI-compliant reporting. 150+ audits. Free 45-min BI audit.",
  keywords: [
    "Power BI consultant India",
    "Power BI consultant Mumbai",
    "Tableau developer Mumbai",
    "Tableau developer India",
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
    title: "Power BI & Tableau Consultant Mumbai | MIS Automation for BFSI – BI Expert",
    description: "Mumbai Power BI consultant for banks & NBFCs. Automate MIS, RLS dashboards, RBI-compliant reporting. 150+ audits. Free 45-min BI audit.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "BI Expert - Data Analytics Consultancy" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Power BI & Tableau Consultant Mumbai | MIS Automation for BFSI – BI Expert",
    description: "Mumbai Power BI consultant for banks & NBFCs. Automate MIS, RLS dashboards, RBI-compliant reporting. 150+ audits. Free 45-min BI audit.",
    images: ["/og-image.webp"]
  },
  alternates: {
    canonical: "https://biexpert.online"
  },
  verification: {
    google: "ADD_YOUR_SEARCH_CONSOLE_CODE_HERE",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable} h-full antialiased`}
      style={{ backgroundColor: 'var(--background)' }}
    >
      <head>
      </head>
      <body 
        className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <AuthProvider>
            <Navbar />
            <SiteShell>
              {children}
            </SiteShell>
          </AuthProvider>
        </ThemeProvider>

        {/* LocalBusiness & Person Schema Markup */}
        <Script id="schema-markup" type="application/ld+json" strategy="afterInteractive">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "BI Expert",
                "image": "https://biexpert.online/og-image.webp",
                "@id": "https://biexpert.online/#localbusiness",
                "url": "https://biexpert.online",
                "telephone": "+918010803756",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Badlapur",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "postalCode": "421503",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 19.1668,
                  "longitude": 73.2244
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                "areaServed": [
                  {
                    "@type": "AdministrativeArea",
                    "name": "Mumbai"
                  },
                  {
                    "@type": "Country",
                    "name": "India"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Datta Sable",
                "jobTitle": "Principal BI Consultant & Architect",
                "url": "https://biexpert.online",
                "sameAs": [
                  "https://linkedin.com/in/dattasable",
                  "https://github.com/dattasable"
                ],
                "knowsAbout": [
                  "Business Intelligence",
                  "Power BI",
                  "Tableau",
                  "SQL Server",
                  "Data Engineering",
                  "MIS Automation"
                ]
              }
            ]
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          id="adsense-init"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4242010382827250"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          async
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
          src="https://www.googletagmanager.com/gtag/js?id=G-WFTZB9LNXS"
          strategy="afterInteractive"
          async
        />
        <Script id="gtm-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WFTZB9LNXS');
          `}
        </Script>

        <CookieBanner />
      </body>
    </html>
  );
}

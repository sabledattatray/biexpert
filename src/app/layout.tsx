import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "BI Expert - Data Analytics Consultancy" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BI Expert | Power BI, Tableau & SQL Data Analytics",
    description: "10+ years of enterprise BI expertise. Power BI, Tableau, SQL for BFSI and Fintech.",
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
      className={`${inter.variable} h-full antialiased`}
      style={{ backgroundColor: 'var(--background)' }}
    >
      <head>
      </head>
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
          <AuthProvider>
            <Navbar />
            <SiteShell>
              {children}
            </SiteShell>
          </AuthProvider>
        </ThemeProvider>

        {/* Organization Schema Markup */}
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BI Expert",
              "url": "https://biexpert.online",
              "logo": "https://biexpert.online/icon.svg"
            }
          `}
        </Script>

        {/* Interaction-based Script Loader */}
        <Script id="interaction-script-loader" strategy="lazyOnload">
          {`
            (function() {
              var scriptsLoaded = false;
              function loadScripts() {
                if (scriptsLoaded) return;
                scriptsLoaded = true;

                // Load GTM
                var gtmScript = document.createElement('script');
                gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-WFTZB9LNXS';
                gtmScript.async = true;
                document.head.appendChild(gtmScript);

                gtmScript.onload = function() {
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-WFTZB9LNXS');
                };

                // Load AdSense
                var adsenseScript = document.createElement('script');
                adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4242010382827250';
                adsenseScript.async = true;
                adsenseScript.crossOrigin = 'anonymous';
                document.head.appendChild(adsenseScript);

                // Clean up listeners
                window.removeEventListener('scroll', loadScripts);
                window.removeEventListener('mousemove', loadScripts);
                window.removeEventListener('touchstart', loadScripts);
              }

              window.addEventListener('scroll', loadScripts, { passive: true });
              window.addEventListener('mousemove', loadScripts, { passive: true });
              window.addEventListener('touchstart', loadScripts, { passive: true });
              
              // Fallback for slow networks - increased to 10s to avoid tanking audit scores
              setTimeout(loadScripts, 10000);
            })();
          `}
        </Script>
        <CookieBanner />
      </body>
    </html>
  );
}

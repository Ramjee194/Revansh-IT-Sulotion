import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SEO_ROUTES, SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#064E3B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://orbous.com"),
  applicationName: "Orbous",
  title: {
    default: "Orbous | Leading Software & AI Solutions Company",
    template: "%s | Orbous",
  },
  description:
    "Orbous is a leading web development, mobile app, and AI/ML solutions company in Gurgaon. We build scalable software, mobile apps, and enterprise AI solutions for businesses.",
  keywords: [
    "Orbous",
    "Orbous IT Solutions",
    "Software Company Gurgaon",
    "AI Solutions Company",
    "Mobile App Development",
    "Software Development Gurgaon",
    "DLF Cyber City Tech Companies",
    "IT Company Gurgaon 122016",
    "Cyber City Software Development",
    "Enterprise AI Solutions",
    "Next.js Development Agency",
    "Cloud Architecture India",
    "Full Stack Software Engineering",
  ],
  authors: [{ name: "Orbous Team", url: "https://orbous.com" }],
  creator: "Orbous IT & Software Solutions",
  publisher: "Orbous",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://orbous.com",
    siteName: "Orbous",
    title: "Orbous | Leading Software & AI Solutions Company",
    description:
      "Orbous is a leading web development, mobile app, and AI/ML solutions company in Gurgaon. We build scalable software, mobile apps, and enterprise AI solutions for businesses.",
    images: [
      {
        url: "/orbous-logo.png",
        width: 1200,
        height: 630,
        alt: "Orbous IT & Software Solutions Logo - DLF Cyber City Gurgaon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbous | Leading Software & AI Solutions Company",
    description:
      "Orbous is a leading web development, mobile app, and AI/ML solutions company in Gurgaon.",
    images: ["/orbous-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://orbous.com/#website",
        name: "Orbous",
        alternateName: [
          "Orbous IT & Software Solutions",
          "Orbous IT Solutions",
          "Orbous Technologies",
          "orbous.com"
        ],
        url: "https://orbous.com/",
        publisher: { "@id": "https://orbous.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://orbous.com/services?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://orbous.com/#sitenav",
        name: "Orbous Main Sitelinks Navigation",
        itemListElement: SEO_ROUTES.filter((r) => r.sitelink).map((r, i) => ({
          "@type": "SiteNavigationElement",
          position: i + 1,
          name: r.title,
          description: r.description,
          url: `${SITE_URL}${r.path}`,
        })),
      },
      {
        "@type": "Organization",
        "@id": "https://orbous.com/#organization",
        name: "Orbous",
        legalName: "Orbous IT & Software Solutions",
        alternateName: ["Orbous IT Solutions", "Orbous Technologies"],
        url: "https://orbous.com",
        logo: "https://orbous.com/orbous-logo.png",
        image: "https://orbous.com/orbous-logo.png",
        description:
          "Orbous is a leading web development, mobile app, and AI/ML solutions company in DLF Cyber City, Gurgaon. We build scalable software and enterprise solutions for businesses.",
        email: "contact@orbous.com",
        telephone: "+91-8404827541",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Building 10, Tower B, Level 8, DLF Cyber City, DLF Phase 2",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          postalCode: "122016",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.linkedin.com/company/orbous",
          "https://twitter.com/orbous",
          "https://github.com/orbous"
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://orbous.com/#localbusiness",
        name: "Orbous IT & Software Solutions - Gurgaon Cyber City",
        image: "https://orbous.com/orbous-logo.png",
        url: "https://orbous.com",
        telephone: "+91-8404827541",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Building 10, Tower B, Level 8, DLF Cyber City, DLF Phase 2",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          postalCode: "122016",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.4901,
          longitude: 77.0854,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

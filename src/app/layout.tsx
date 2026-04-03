import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "@/components/layout/SmoothScroll";
import AOSInit from "@/components/layout/AOSInit";
import JsonLd from "@/components/layout/JsonLd";

// ─── Site URL ─────────────────────────────────────────────────────────────────
const SITE_URL = "https://www.devlutionlab.tech";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DevLution Lab | AI & Web Development Agency in Islamabad, Pakistan",
    template: "%s | DevLution Lab",
  },
  description:
    "DevLution Lab is a top-rated software agency in Islamabad, Pakistan. We build AI/ML solutions, web apps, mobile apps, SaaS platforms & ERP systems that empower businesses globally.",

  keywords: [
    // Brand
    "DevLution Lab",
    "DevLutionLab",
    "devlutionlab.tech",
    // Core services
    "AI development company Pakistan",
    "AI solutions Islamabad",
    "machine learning development Pakistan",
    "web development company Islamabad",
    "web development agency Pakistan",
    "custom web development Pakistan",
    "mobile app development Pakistan",
    "mobile app development Islamabad",
    "SaaS development Pakistan",
    "SaaS platform development",
    "ERP system development Pakistan",
    "software development company Pakistan",
    "software house Islamabad",
    "software agency Pakistan",
    "tech company Islamabad",
    // Stack
    "Next.js development agency",
    "React development company Pakistan",
    "Node.js development Pakistan",
    "Python AI development",
    "Django development Pakistan",
    "cloud solutions Pakistan",
    "DevOps services Pakistan",
    "AWS solutions Pakistan",
    // Problem / intent
    "hire software developers Pakistan",
    "outsource software development Pakistan",
    "best software agency Islamabad",
    "digital transformation Pakistan",
    "enterprise software Pakistan",
    "startup software development",
    "ecommerce development Pakistan",
    "process automation Pakistan",
    "business automation software",
    "AI powered web app",
    // Local
    "software company E-11 Islamabad",
    "IT company Islamabad Pakistan",
    "Pakistani software house",
    "top tech agency Pakistan 2025",
  ],

  // ── Authors & Publisher ────────────────────────────────────────────────────
  authors: [{ name: "DevLution Lab", url: SITE_URL }],
  creator: "DevLution Lab",
  publisher: "DevLution Lab",
  category: "Technology",

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "DevLution Lab",
    title: "DevLution Lab | AI & Web Development Agency in Islamabad, Pakistan",
    description:
      "We build AI/ML solutions, scalable web apps, mobile apps & SaaS platforms for businesses worldwide. Based in Islamabad, Pakistan.",
    images: [
      {
        url: `${SITE_URL}/assets/og-image.png`,
        width: 1200,
        height: 630,
        alt: "DevLution Lab – AI & Web Development Agency Pakistan",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "DevLution Lab | AI & Web Development Agency in Pakistan",
    description:
      "Top software agency in Islamabad building AI, web, mobile & SaaS solutions for global clients.",
    images: [`${SITE_URL}/assets/og-image.png`],
    creator: "@devlutionlab",
    site: "@devlutionlab",
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification ──────────────────────────────────────────────────────────
  verification: {
    google: "google29444a2719a7507f",
  },

  // ── App Info ──────────────────────────────────────────────────────────────
  applicationName: "DevLution Lab",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ─── Font ─────────────────────────────────────────────────────────────────────
const plusJakartaSans = localFont({
  src: [
    {
      path: "../../public/fonts/PlusJakartaSans/PlusJakartaSans-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans/PlusJakartaSans-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad, Pakistan" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
        {/* Theme */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-background text-text-primary`}
      >
        <JsonLd />
        <SmoothScroll>
          <AOSInit />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

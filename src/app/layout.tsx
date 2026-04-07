import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title:
    "HIVE CAI Lab – Human Interactions, Values & Experiences with Conversational AI",
  description:
    "The HIVE CAI Lab advances human-centred, value-sensitive conversational AI through interdisciplinary HCI and design research, exploring industry practices, design democratisation, and participatory frameworks and tools.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title:
      "HIVE CAI Lab – Human Interactions, Values & Experiences with Conversational AI",
    description:
      "The HIVE CAI Lab advances human-centred, value-sensitive conversational AI through interdisciplinary HCI and design research, exploring industry practices, design democratisation, and participatory frameworks and tools.",
      siteName: "HIVE CAI Lab",
    images: [
      {
        url: "/img/open-graph.png",
        width: 1200,
        height: 630,
        alt: "HIVE CAI Lab – Human Interactions, Values & Experiences with Conversational AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "HIVE CAI Lab – Human Interactions, Values & Experiences with Conversational AI",
    description:
      "The HIVE CAI Lab advances human-centred, value-sensitive conversational AI through interdisciplinary HCI and design research, exploring industry practices, design democratisation, and participatory frameworks and tools.",
      images: [
      {
        url: "/img/open-graph.png",
        width: 1200,
        height: 630,
        alt: "HIVE CAI Lab – Human Interactions, Values & Experiences with Conversational AI",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "HIVE CAI Lab",
  url: siteUrl,
  logo: `${siteUrl}/img/open-graph.png`,
  description:
   "The HIVE CAI Lab advances human-centred, value-sensitive conversational AI through interdisciplinary HCI and design research, exploring industry practices, design democratisation, and participatory frameworks and tools.",
   sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

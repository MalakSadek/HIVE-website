import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
);

export const metadata: Metadata = {
  metadataBase,
  title: "HIVE CAI Lab",
  description:
    "HIVE CAI Lab – advancing human-centred, value-sensitive conversational AI.",
  openGraph: {
    type: "website",
    images: [
      {
        url: "/img/open-graph.png",
        width: 1200,
        height: 630,
        alt: "HIVE CAI Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/img/open-graph.png",
        width: 1200,
        height: 630,
        alt: "HIVE CAI Lab",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000")
);

export const metadata: Metadata = {
  metadataBase,
  title: "HIVE CAI Lab",
  description:
    "HIVE CAI Lab – advancing human-centred, value-sensitive conversational AI.",
  openGraph: {
    images: [
      {
        url: "/img/logo-text-full-white.png",
        alt: "HIVE CAI Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/img/logo-text-full-white.png"],
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

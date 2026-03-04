import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aeterna.io"),

  title: "Aeterna | Ultra-Fast AI-Powered Blockchain (120K TPS)",

  description:
    "The world's most scalable blockchain. Experience 120,000 TPS, AI-driven data security, and sustainable Proof of Stake consensus. Download the Whitepaper today.",

  keywords: [
    // Бренд
    "Aeterna Network",

    // Killer features
    "120K TPS blockchain",
    "AI-driven data security",
    "High-throughput Layer 1",
    "Scalable Web3 infrastructure",

    // Tech stack
    "Proof of Stake consensus",
    "Zero-latency smart contracts",
    "AI-integrated ledger",

    // Market positioning
    "Institutional grade blockchain",
    "Next-gen decentralized finance",
    "Eco-friendly crypto protocol",
    "High-speed dApps platform",
  ],

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Aeterna | Ultra-Fast AI-Powered Blockchain (120K TPS)",
    description:
      "The world's most scalable blockchain. Experience 120,000 TPS, AI-driven data security, and sustainable Proof of Stake consensus.",
    url: "/",
    siteName: "Aeterna",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aeterna Blockchain",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aeterna | Ultra-Fast AI-Powered Blockchain (120K TPS)",
    description:
      "Experience 120,000 TPS, AI-driven data security, and Proof of Stake consensus.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
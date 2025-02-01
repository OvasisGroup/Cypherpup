import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CypherPup – The Future of Meme Coins | Community-Driven & Utility-Packed",
  description: "CypherPup is the next-generation meme coin, built on Cypherium for lightning-fast transactions, cross-chain utility, and DeFi integration. A true community-driven token shaping the future of blockchain.",
  other: {
    keywords: "Meme coin, crypto meme, blockchain meme, Cypherium meme, DeFi meme token, NFT meme, fair launch crypto, Dogecoin alternative, Shiba Inu rival, top meme token, cross-chain crypto, community token, viral crypto"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

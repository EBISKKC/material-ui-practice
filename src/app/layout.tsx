import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Material UI コンポーネント練習",
  description: "Material UIのコンポーネントを学ぶための練習サイト。Button、Table、Card、Grid、Modal、Dialogなど、様々なコンポーネントの使い方を実例で学べます。",
  keywords: ["Material UI", "React", "Next.js", "コンポーネント", "UI", "練習"],
  authors: [{ name: "Material UI Practice" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "Material UI コンポーネント練習",
    description: "Material UIのコンポーネントを学ぶための練習サイト",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Material UI コンポーネント練習",
    description: "Material UIのコンポーネントを学ぶための練習サイト",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

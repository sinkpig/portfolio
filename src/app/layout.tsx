import type { Metadata } from "next";
import { figtree, space_mono } from "./utils/fonts";
import "./ui/globals.css";

const url = 'https://milo-ramirez.web.app/'
const owner = 'Milo Ramirez';
const title = `${owner} Portfolio`;
const titleLong = `${title} - Front end & UI`;
const description = "Hello world! Milo here. I'm a Front end Developer based in Rio de Janeiro with background in UI Design and Graphic Design.";

export const metadata: Metadata = {
  title: title,
  description: description,
  applicationName: 'Portfolio',
  authors: [{ name: owner, url: url }],
  generator: 'Next.js',
  keywords: ['portfolio', 'milo ramirez', 'developer', 'designer', 'frontend', 'react', 'next.js'],
  // themeColor: [
  //   { media: '(prefers-color-scheme: dark)', color: '#4D3F78' },
  //   { media: '(prefers-color-scheme: light)', color: '#f4f3f2' }],
  viewport: { width: 'device-width', initialScale: 1 },
  creator: owner,
  alternates: { canonical: url },
  icons: { icon: `${url}favicon.ico`, apple: `${url}favicon.png` },
  openGraph: {
      type: 'website',
      url: url,
      title: titleLong,
      description: description,
      siteName: title,
      images: [{
        url: `${url}milo-ramirez-share-bg.jpg`,
        alt: `${owner} logo`,
      }],
      locale: 'en_US',
    },
  twitter: {
      card: 'summary',
      // site: '@site',
      title: titleLong,
      images: [{
        url: `${url}milo-ramirez-share-icon.jpg`,
        alt: `${owner} logo`
      }]
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree} ${space_mono}`}>{children}</body>
    </html>
  );
}

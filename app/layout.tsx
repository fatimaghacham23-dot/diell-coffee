import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diell' | Cozy neighborhood cafe in Beirut",
  description: "Diell': A highly aesthetic cafe in Hamra known for cozy seating, homemade desserts, swing seats, and a study-friendly atmosphere.",
  keywords: [
  "Diell coffee Hamra",
  "Diell coffeeshop Beirut",
  "Hamra cafe desserts",
  "study cafe Beirut"
],
  openGraph: {
    title: "Diell' | Cozy neighborhood cafe in Beirut",
    description: "Diell': A highly aesthetic cafe in Hamra known for cozy seating, homemade desserts, swing seats, and a study-friendly atmosphere.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" as="image" href="/sequence/frame_001.webp" />
        <link rel="preload" as="image" href="/sequence/frame_002.webp" />
        <link rel="preload" as="image" href="/sequence/frame_003.webp" />
        <link rel="preload" as="image" href="/sequence/frame_004.webp" />
        <link rel="preload" as="image" href="/sequence/frame_005.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}

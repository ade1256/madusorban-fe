import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madu Sorban | Madu Murni Murah Terpercaya",
  description: "Madu murni murah dan dijamin asli terpercaya se-Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="facebook-domain-verification"
          content="znm0d8s0bd3yr4g7o9fkhszj4wzj1z"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

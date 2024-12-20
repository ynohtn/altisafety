import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./scss/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AltiSafety, travaux d'accès difficile",
  description: "Cordiste spécialiste de l'accès difficile en milieu urbain, industriel et confiné",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

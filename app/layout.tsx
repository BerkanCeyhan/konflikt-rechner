import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konfliktkosten-Rechner | Berechnen Sie die Kosten von Konflikten in Ihrem Unternehmen",
  description:
    "Ermitteln Sie kostenlos, wie viel ungelöste Konflikte Ihr Unternehmen jährlich kosten – basierend auf KPMG-Forschungsdaten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}

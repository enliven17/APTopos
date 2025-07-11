import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/app/providers";
import { MainNav } from "@/navigation";
import ClientOnly from "@/components/ClientOnly";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APTopos",
  description: "APTopos: Aptos Prediction Markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>APTopos 🪼</title>
        <link rel="icon" href="/src/app/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientOnly>
          <AppProviders>
            <MainNav />
            {children}
          </AppProviders>
        </ClientOnly>
      </body>
    </html>
  );
}

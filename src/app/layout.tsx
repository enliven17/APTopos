import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/app/providers";
import { MainNav } from "@/navigation";
import "antd/dist/reset.css";

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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="test">
        <AppProviders>
          <MainNav />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}

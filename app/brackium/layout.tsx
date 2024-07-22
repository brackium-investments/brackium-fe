import type { Metadata } from "next";
import { DM_Sans, Nunito } from "next/font/google";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Header from "@/components/Header";

const nunito: NextFontWithVariable = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const dmSans: NextFontWithVariable = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSans",
});

export const metadata: Metadata = {
  title: "Brackium Investments",
  description: "Manage your financial assets with Brackium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${dmSans.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

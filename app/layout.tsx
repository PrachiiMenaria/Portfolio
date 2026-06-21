import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CinemaLoader from "@/components/ui/CinemaLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Prachi Menaria | Archive",
  description: "Personal Letter Archive and Digital Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${caveat.variable} font-sans antialiased bg-background text-text`}>
        <CinemaLoader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}


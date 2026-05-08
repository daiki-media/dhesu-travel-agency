import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/src/components/Navbar"
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Website",
  description: "Modern website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
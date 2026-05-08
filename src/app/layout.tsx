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
  title: "Daily Customized & Ready Made Holidays Worldwide. Have a Chat Online Now | Dhesu",
  description: "With 30years of experience this award winning Travel Agent offers the widest choice of holidays, including ground only holidays, all inclusive holidays, group holidays and incentive travel plans for co. Let Us Plan Your Vacation For You. Book Flights, Hotels, Tours & Incentive Trips With Us.",
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
import type { Metadata } from "next";
import { Montserrat, Manrope, Montez  } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const montez = Montez({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montez",
  display: "swap",
})
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
      <body className={`${manrope.variable} ${montez.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
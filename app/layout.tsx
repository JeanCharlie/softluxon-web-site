import { Inter as FontSans, Montserrat, Open_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", montserrat.variable, openSans.variable, "font-open-sans")}>
        {children}
      </body>
    </html>
  );
}

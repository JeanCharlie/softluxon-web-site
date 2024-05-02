import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const fonstSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fonstSans.variable)}>
        {children}
      </body>
    </html>
  );
}

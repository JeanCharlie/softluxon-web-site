import { Inter as FontSans, Montserrat, Open_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";
import TopBar from "@/components/ui/topbar/TopBar";
import Footer from "@/components/ui/footer/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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
      <body
        className={cn(
          "font-sans antialiased",
          montserrat.variable,
          openSans.variable,
          "font-open-sans"
        )}
      >
        <TopBar />
        {children}
        <WhatsAppButton 
          phoneNumber="+34000123456"
          message="Hola, me gustaría obtener más información sobre sus servicios."
        />
        <Footer />
      </body>
    </html>
  );
}

import { cn } from "@/lib/utils";
import "./globals.css";
import { montserrat, openSans } from "@/fonts/fonts";

import TopBar from "@/components/ui/topbar/TopBar";
import Footer from "@/components/ui/footer/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SoftLuxon - Empresa de Desarrollo de Software</title>
        <meta
          name="description"
          content="Impulsa tu negocio con soluciones de software a medida. Desarrollamos aplicaciones web y móviles innovadoras, integraciones API y tecnología escalable para empresas de todos los tamaños."
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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

import "./globals.css";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import ClientProviders from "./ClientProvider";
export const metadata = {
  title: "HACKED NOW - Tu escudo digital",
  description: "Plataforma de ciberseguridad para reportar casos y conectar con expertos",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen">
        <ClientProviders>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// PrimeReact CSS
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

// Custom CSS
import "./globals.css";
import "./theme.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Juricom - Boostez votre activité",
  description: "La solution SaaS pour les cabinets comptables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <PrimeReactProvider
          value={{
            unstyled: true,
          }}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PrimeReactProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Regresémosle el Brillo al Sur | Quintana Roo",
  description:
    "Iniciativa ciudadana para impulsar el desarrollo sustentable, la inversión y el bienestar en la región sur de Quintana Roo: Felipe Carrillo Puerto, Bacalar y Othón P. Blanco.",
  keywords: [
    "desarrollo sur Quintana Roo",
    "Bacalar",
    "Felipe Carrillo Puerto",
    "Othón P. Blanco",
    "inversión",
    "desarrollo sustentable",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Такси межгород",
  description:
    "Надежное такси для межгородних поездок от компании 'Такси межгород'. Заключаем договора и работаем за наличный и безналичный расчет. Специальные скидки для студентов, пенсионеров, детей, многодетных семей и инвалидов. Осуществляем комфортные и безопасные поездки по направлению Хандыга - Якутск и другим маршрутам Республики Саха (Якутия).",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <div className="landingWrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

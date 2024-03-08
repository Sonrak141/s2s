import "./globals.css";
import type { Metadata } from "next";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import Footer from "@/components/organisms/Footer/Footer";
import { Inter } from "next/font/google";
import {LanguageProvider} from "@/app/LaguageProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "South2South Holding | Embracing diversity. Inspiring growth.",
  description: "Discover S2S Holding, headquartered in Abu Dhabi and backed by High Net Worth Individuals (HNWIs). Our innovative business model facilitates smooth collaboration with local governments, businesses, and strategic partners. Explore how we responsibly create value for our shareholders while actively contributing to the socio-economic development of nations.",
  keywords:["S2S", "south2south", "south2south holding", "south 2 south holding", "holding UAE", "S2S holding"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // @ts-ignore
  return (
    <html lang='en'>
    <body className={inter.className}><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}

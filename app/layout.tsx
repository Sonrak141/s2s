import "./globals.css";
import type { Metadata } from "next";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import Footer from "@/components/organisms/Footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "South2South Holding",
  description: "Embracing diversity. Inspiring growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

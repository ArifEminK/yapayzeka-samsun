import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SubNav from "./../components/SubNav";
import HomeContent from "@/components/HomeContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yapay Zeka Samsun",
  description: "Samsun'un yapay zeka ve teknoloji merkezi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <SubNav />
        <HomeContent />
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Yapay Zeka Samsun. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

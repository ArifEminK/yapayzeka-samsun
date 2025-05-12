import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yapay Zeka Samsun",
  description: "Samsun'un yapay zeka ve teknoloji merkezi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="w-full bg-homeContBg mx-auto">
          <TopNav />
          {children}
        </div>
        <footer className="bg-topNavBg text-textColor py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="font-opensans">
              &copy; 2024 Yapay Zeka Samsun. Tüm hakları saklıdır.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

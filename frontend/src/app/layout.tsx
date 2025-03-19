import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <nav className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="text-xl font-bold text-white">Yapay Zeka Samsun</div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Ana Sayfa</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Hizmetler</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">İletişim</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Yapay Zeka Samsun. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/app/components/TopNav";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });


export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const isTR = locale === "tr";

  return {
    title: isTR ? "Yapay Zeka Samsun" : "Artificial Intelligence Samsun",
    description: isTR
      ? "Yapay zeka hakkında interaktif bilgiler"
      : "Interactive content about AI",
    icons: {
      icon: "/favicon.ico",
    }
  };
}


export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <div className="w-full bg-homeContBg mx-auto">
            <TopNav locale={locale} />
            {children}
          </div>
          <footer className="bg-topNavBg text-textColor py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="font-opensans">
                &copy; {new Date().getFullYear()} {locale === "tr" ? "Yapay Zeka Samsun. Tüm hakları saklıdır." : "AI Samsun. All rights reserved."}
              </p>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
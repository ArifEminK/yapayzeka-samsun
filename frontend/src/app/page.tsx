import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Yapay Zeka Samsun
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Geleceğin teknolojilerini bugünden inşa ediyoruz
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              Başla
            </button>
            <button className="px-6 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg font-semibold transition-colors">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Yapay Zeka Çözümleri</h3>
            <p className="text-gray-400">
              En son yapay zeka teknolojileri ile işletmenizi geleceğe taşıyın.
            </p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Veri Analizi</h3>
            <p className="text-gray-400">
              Verilerinizi analiz ederek değerli içgörüler elde edin.
            </p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Otomasyon</h3>
            <p className="text-gray-400">
              İş süreçlerinizi otomatikleştirerek verimliliği artırın.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

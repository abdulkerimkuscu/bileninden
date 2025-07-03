import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BasvuruPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Ana sayfa ile aynı animasyonlu arka plan */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-radial from-emerald-400/30 via-emerald-600/10 to-transparent blur-3xl opacity-70 animate-pulse" />
        <div className="absolute right-0 bottom-0 w-[60vw] h-[40vh] bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl opacity-60" />
        <div className="absolute left-0 bottom-0 w-[40vw] h-[30vh] bg-gradient-to-tr from-red-400/10 to-transparent blur-2xl opacity-40" />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-emerald-400 via-white to-emerald-600 bg-clip-text text-transparent drop-shadow-2xl mb-4 text-center animate-fade-in">
          Uzman Görüşü Başvuru Formu
        </h1>
        <p className="text-gray-300 text-lg mb-8 text-center animate-fade-in-slow">
          Bilimsel, hızlı ve güvenilir uzman görüşü almak için hemen başvurun.
        </p>
        {/* Formu kart gibi gradient arka planla */}
        <form
          className="space-y-4 bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border border-emerald-600 p-8 rounded-2xl shadow-2xl mt-10"
          action="https://usebasin.com/f/57b50059d74f"
          method="POST"
        >
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Ad Soyad</label>
            <input
              name="adsoyad"
              type="text"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-medium">E-posta</label>
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Telefon</label>
            <input
              name="telefon"
              type="tel"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Açıklama</label>
            <textarea
              name="aciklama"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400 transition-all"
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white font-bold py-2 rounded-full shadow-lg text-lg transition-all duration-300">
            Başvuruyu Gönder
          </Button>
        </form>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-slow { animation: fade-in 1.5s .2s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  )
}
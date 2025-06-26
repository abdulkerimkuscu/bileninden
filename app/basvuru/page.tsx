import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BasvuruPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Glow ve animasyonlu arka plan */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] h-[40vh] bg-gradient-radial from-emerald-400/30 via-emerald-600/10 to-transparent blur-3xl opacity-70 animate-pulse" />
        <div className="absolute right-0 bottom-0 w-[50vw] h-[30vh] bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl opacity-60" />
        <div className="absolute left-0 bottom-0 w-[30vw] h-[20vh] bg-gradient-to-tr from-red-400/10 to-transparent blur-2xl opacity-40" />
      </div>
      <div className="bg-gray-800/80 border border-emerald-600 shadow-2xl rounded-2xl p-10 max-w-md w-full relative z-10 animate-fade-in mb-16">
        <div className="flex flex-col items-center mb-6">
          {/* Logo kaldırıldı */}
          <h1 className="text-3xl font-extrabold bg-gradient-to-br from-emerald-400 via-white to-emerald-600 bg-clip-text text-transparent drop-shadow-lg mb-2 text-center">
            Uzman Görüşü Başvuru Formu
          </h1>
          <p className="text-gray-300 text-center text-base">
            Bilimsel, hızlı ve güvenilir uzman görüşü için hemen başvurun.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Ad Soyad</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-medium">E-posta</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Telefon</label>
            <input
              type="tel"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Açıklama</label>
            <textarea
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400 transition-all"
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white font-bold py-2 rounded-full shadow-lg text-lg transition-all duration-300">
            Başvuruyu Gönder
          </Button>
        </form>
        <Link href="/" className="block text-emerald-400 mt-8 text-center hover:underline transition-all text-base">
          Ana Sayfaya Dön
        </Link>
      </div>
      {/* Animasyonlar için ekstra stiller */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes glow {
          0%,100% { box-shadow: 0 0 24px 8px #34d39944, 0 0 0 0 #fff0;}
          50% { box-shadow: 0 0 48px 16px #34d39999, 0 0 0 0 #fff0;}
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  )
}
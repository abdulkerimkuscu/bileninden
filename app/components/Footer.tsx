import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 border-t border-emerald-700/40 pt-6 pb-3 relative overflow-hidden">
      {/* Glow ve animasyonlu arka plan */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[30vh] bg-gradient-radial from-emerald-400/20 via-emerald-600/10 to-transparent blur-2xl opacity-60 animate-fade-in" />
        <div className="absolute right-0 bottom-0 w-[40vw] h-[20vh] bg-gradient-to-br from-emerald-400/10 to-transparent blur-2xl opacity-40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Logo ve açıklama */}
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-br from-emerald-400 via-white to-emerald-600 bg-clip-text text-transparent tracking-tight drop-shadow-lg animate-fade-in">
            
              Bileninden
            </span>
            <p className="text-gray-400 mt-1 max-w-xs text-sm font-medium">
              Türkiye'nin en güvenilir uzman görüşü platformu.<br />
              Profesyonel bilirkişi hizmetleri.
            </p>
            <div className="flex gap-2 mt-1">
              <a href="mailto:info@bilenden.com" className="footer-icon" aria-label="Mail">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+902125550123" className="footer-icon" aria-label="Telefon">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://maps.google.com/?q=İstanbul" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Adres">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* İletişim */}
          <div>
            <h3 className="text-white font-semibold mb-2 text-base">İletişim</h3>
            <div className="space-y-1 text-gray-400 text-sm">
              <p className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4" /> info@bilenden.com
              </p>
              <p className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4" /> +90 (212) 555 0123
              </p>
              <p className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <MapPin className="w-4 h-4" /> İstanbul, Türkiye
              </p>
              <p className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Clock className="w-4 h-4" /> 7/24 Destek
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4 border-emerald-700/40" />
        <div className="text-center text-gray-400 text-xs flex flex-col md:flex-row md:justify-between items-center gap-1">
          <span>
            © {new Date().getFullYear()} <span className="text-emerald-400 font-semibold">Bileninden</span>. Tüm hakları saklıdır.
          </span>
          <span>
            <a href="#" className="hover:text-emerald-400 transition-colors">Gizlilik Politikası</a> | <a href="#" className="hover:text-emerald-400 transition-colors">Kullanım Koşulları</a>
          </span>
        </div>
      </div>
      {/* Animasyonlar için ekstra stiller */}
      <style>{`
        .footer-icon {
          @apply bg-emerald-900/60 text-emerald-300 hover:bg-emerald-400/30 hover:text-white transition-all duration-200 rounded-full p-2 shadow;
        }
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
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </footer>
  )
}
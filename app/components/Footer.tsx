import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-700 pt-10 pb-6 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div>
            <span className="text-2xl font-bold text-emerald-400">Bileninden</span>
            <p className="text-gray-400 mt-2 max-w-xs">
              Türkiye'nin en güvenilir uzman görüşü platformu. Profesyonel bilirkişi hizmetleri.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <div className="space-y-2 text-gray-400">
                <p>📧 info@bilenden.com</p>
                <p>📞 +90 (212) 555 0123</p>
                <p>📍 İstanbul, Türkiye</p>
                <p>🕒 7/24 Destek</p>
              </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} BilEnden. Tüm hakları saklıdır. | Gizlilik Politikası | Kullanım Koşulları
        </div>
      </div>
    </footer>
  )
}
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { ArrowLeft, Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react"



export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Ana sayfa ile aynı animasyonlu arka plan */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-radial from-emerald-400/30 via-emerald-600/10 to-transparent blur-3xl opacity-70 animate-pulse" />
        <div className="absolute right-0 bottom-0 w-[60vw] h-[40vh] bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl opacity-60" />
        <div className="absolute left-0 bottom-0 w-[40vw] h-[30vh] bg-gradient-to-tr from-red-400/10 to-transparent blur-2xl opacity-40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfaya Dön
          </Link>
          <h1 className="text-5xl font-extrabold bg-gradient-to-br from-emerald-400 via-white to-emerald-600 bg-clip-text text-transparent drop-shadow-2xl mb-4 animate-fade-in">
            İletişim
          </h1>
          <p className="text-gray-300 text-lg mt-2 animate-fade-in-slow max-w-2xl mx-auto">
            Uzman görüşü talepleriniz ve sorularınız için bizimle iletişime geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg animate-fade-in-slow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="w-8 h-8 text-emerald-400" />
                <div>
                  <h3 className="text-white font-semibold">Telefon</h3>
                  <p className="text-gray-400">+90 (212) 555 0123</p>
                  <p className="text-gray-400">+90 (212) 555 0124</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg animate-fade-in-slow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="w-8 h-8 text-emerald-400" />
                <div>
                  <h3 className="text-white font-semibold">E-posta</h3>
                  <p className="text-gray-400">info@bilenden.com</p>
                  <p className="text-gray-400">destek@bilenden.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hızlı Talep kartı yanına taşındı */}
          <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg animate-fade-in-slow">
            <CardContent className="p-6">
              <h3 className="text-emerald-400 font-semibold mb-2">Hızlı Talep</h3>
              <p className="text-gray-300 mb-4">Acil uzman görüşü talepleriniz için direkt arayın:</p>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 rounded-full shadow-lg text-lg transition-all duration-300">
                Hemen Ara: +90 (212) 555 0123
              </Button>
            </CardContent>
          </Card>

          {/* Çalışma Saatleri kartı */}
          <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg animate-fade-in-slow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-8 h-8 text-emerald-400" />
                <div>
                  <h3 className="text-white font-semibold">Çalışma Saatleri</h3>
                  <p className="text-gray-400">Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p className="text-gray-400">Cumartesi: 09:00 - 14:00</p>
                  <p className="text-emerald-400 font-medium">7/24 Acil Destek</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Adres kartı en sona ve haritalı */}
          <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg animate-fade-in-slow col-span-1 md:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="w-8 h-8 text-emerald-400" />
                <div>
                  <h3 className="text-white font-semibold">Adres</h3>
                  <p className="text-gray-400 mb-2">
                    Okan Towers<br />
                    Şehitkamil / Gaziantep
                  </p>
                </div>
              </div>
              <div className="w-full h-64 rounded-xl overflow-hidden border border-emerald-700 shadow-lg">
                <iframe
                  title="Okan Towers Harita"
                  src="https://www.google.com/maps?q=Okan+Towers,+Şehitkamil,+Gaziantep&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
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

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react"

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Glow ve animasyonlu arka plan */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] h-[40vh] bg-gradient-radial from-emerald-400/30 via-emerald-600/10 to-transparent blur-3xl opacity-70 animate-pulse" />
        <div className="absolute right-0 bottom-0 w-[50vw] h-[30vh] bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl opacity-60" />
        <div className="absolute left-0 bottom-0 w-[30vw] h-[20vh] bg-gradient-to-tr from-red-400/10 to-transparent blur-2xl opacity-40" />
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-xl animate-fade-in">
            <CardHeader>
              <CardTitle className="text-white text-xl">Bize Ulaşın</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Ad Soyad</label>
                  <Input
                    placeholder="Adınız ve soyadınız"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">E-posta</label>
                  <Input
                    type="email"
                    placeholder="ornek@email.com"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Telefon</label>
                <Input
                  placeholder="+90 (5xx) xxx xx xx"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Konu</label>
                <Input
                  placeholder="Mesajınızın konusu"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Mesaj</label>
                <Textarea
                  placeholder="Mesajınızı buraya yazın..."
                  rows={5}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white font-bold py-2 rounded-full shadow-lg text-lg transition-all duration-300">
                Mesaj Gönder
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
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

            <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg animate-fade-in-slow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="text-white font-semibold">Adres</h3>
                    <p className="text-gray-400">
                      Maslak Mahallesi
                      <br />
                      Büyükdere Caddesi No: 123
                      <br />
                      Sarıyer / İstanbul
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

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

            <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg animate-fade-in-slow">
              <CardContent className="p-6">
                <h3 className="text-emerald-400 font-semibold mb-2">Hızlı Talep</h3>
                <p className="text-gray-300 mb-4">Acil uzman görüşü talepleriniz için direkt arayın:</p>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 rounded-full shadow-lg text-lg transition-all duration-300">
                  Hemen Ara: +90 (212) 555 0123
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
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
        .animate-fade-in-slow { animation: fade-in 1.5s .2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes bounce-slow {
          0%,100% { transform: translateY(0);}
          50% { transform: translateY(-6px);}
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </div>
  )
}

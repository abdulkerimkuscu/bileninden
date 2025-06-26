import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation kaldırıldı */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">İletişim</h1>
          <p className="text-gray-300 text-lg">
            Uzman görüşü talepleriniz ve sorularınız için bizimle iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-800/30 border-gray-700">
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
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Mesaj Gönder</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gray-800/30 border-gray-700">
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

            <Card className="bg-gray-800/30 border-gray-700">
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

            <Card className="bg-gray-800/30 border-gray-700">
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

            <Card className="bg-gray-800/30 border-gray-700">
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

            <Card className="bg-emerald-500/10 border-emerald-500/30">
              <CardContent className="p-6">
                <h3 className="text-emerald-400 font-semibold mb-2">Hızlı Talep</h3>
                <p className="text-gray-300 mb-4">Acil uzman görüşü talepleriniz için direkt arayın:</p>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                  Hemen Ara: +90 (212) 555 0123
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

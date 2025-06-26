import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Award, Users, Clock, Target } from "lucide-react"

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">Hakkımızda</h1>
          <p className="text-gray-300 text-lg">
            Türkiye'nin en güvenilir uzman görüşü platformu olarak hizmet veriyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-400">Misyonumuz</h2>
            <p className="text-gray-300 leading-relaxed">
              BilEnden olarak, hukuki süreçlerde ihtiyaç duyulan teknik ve bilimsel konularda en güvenilir uzman
              görüşlerini sunmayı misyon edinmiş bir platformuz. Trafik kazası analizlerinden aktüeryal
              değerlendirmelere kadar geniş bir yelpazede profesyonel hizmet vermekteyiz.
            </p>
            <p className="text-gray-300 leading-relaxed">
              15 yılı aşkın deneyimimiz ile mahkemelerde, sigorta şirketlerinde ve hukuk bürolarında güvenilir bir
              partner olarak yer almaktayız.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-400">Vizyonumuz</h2>
            <p className="text-gray-300 leading-relaxed">
              Türkiye'de uzman görüşü alanında lider platform olmak ve hukuki süreçlerin daha adil, hızlı ve bilimsel
              temellere dayalı olarak yürütülmesine katkı sağlamak.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Teknoloji ve uzmanlığı birleştirerek, müvekkillerimize en kaliteli hizmeti sunmak ve sektörde standartları
              belirleyen bir kurum olmak hedefimizdir.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gray-800/30 border-gray-700 text-center">
            <CardContent className="p-6">
              <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">15+ Yıl</h3>
              <p className="text-gray-400">Deneyim</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/30 border-gray-700 text-center">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">1000+</h3>
              <p className="text-gray-400">Memnun Müşteri</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/30 border-gray-700 text-center">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">5-10</h3>
              <p className="text-gray-400">İş Günü Teslimat</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/30 border-gray-700 text-center">
            <CardContent className="p-6">
              <Target className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">%98</h3>
              <p className="text-gray-400">Başarı Oranı</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-800/30 border-gray-700">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Neden BilEnden?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                  <div>
                    <h4 className="text-white font-semibold">Uzman Kadro</h4>
                    <p className="text-gray-400">Alanında uzman, deneyimli bilirkişiler</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                  <div>
                    <h4 className="text-white font-semibold">Hızlı Hizmet</h4>
                    <p className="text-gray-400">5-10 iş günü içinde rapor teslimi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                  <div>
                    <h4 className="text-white font-semibold">Güvenilir Sonuçlar</h4>
                    <p className="text-gray-400">Bilimsel yöntemlerle hazırlanan raporlar</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                  <div>
                    <h4 className="text-white font-semibold">7/24 Destek</h4>
                    <p className="text-gray-400">Sürekli iletişim ve destek hizmeti</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                  <div>
                    <h4 className="text-white font-semibold">Uygun Fiyat</h4>
                    <p className="text-gray-400">Rekabetçi ve şeffaf fiyatlandırma</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                  <div>
                    <h4 className="text-white font-semibold">Mahkeme Uyumlu</h4>
                    <p className="text-gray-400">Hukuki süreçlere uygun format</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

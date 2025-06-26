import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Shield, Users, Phone, Clock, Award, Target, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-emerald-400">Türkiye'nin En Güvenilir</span>
                <br />
                <span className="text-white">Uzman Görüşü</span> <span className="text-emerald-400">Platformu</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Trafik kazası analizleri, kusur tespit raporları ve aktüeryal değerlendirmeler konularında uzman
                bilirkişilerden profesyonel hizmet alın.
              </p>
            </div>
           
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-red-400 mx-auto mb-3" />
                <h3 className="text-red-400 font-semibold mb-1">Hızlı Rapor</h3>
                <p className="text-gray-400 text-sm">5-10 iş günü</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-red-400 mx-auto mb-3" />
                <h3 className="text-red-400 font-semibold mb-1">Güvenilir</h3>
                <p className="text-gray-400 text-sm">Uzman kadro</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-red-400 mx-auto mb-3" />
                <h3 className="text-red-400 font-semibold mb-1">Deneyimli</h3>
                <p className="text-gray-400 text-sm">15+ yıl tecrübe</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-red-400 mx-auto mb-3" />
                <h3 className="text-red-400 font-semibold mb-1">7/24 Destek</h3>
                <p className="text-gray-400 text-sm">Sürekli iletişim</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* What is Expert Opinion */}
          <Card className="bg-gray-800/30 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-red-400 mb-6">Uzman Görüşü Nedir?</h2>
              <p className="text-gray-300 leading-relaxed">
                Uzman görüşü, teknik veya özel bilgi gerektiren konularda mahkemeler, savcılıklar veya taraflarca
                alınan, alanında uzman kişiler tarafından hazırlanan bilimsel ve objektif değerlendirme raporudur.
              </p>
            </CardContent>
          </Card>

          {/* Role in Turkish Legal System */}
          <Card className="bg-gray-800/30 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-red-400 mb-6">Türk Hukuk Sisteminde Uzman Görüşünün Yeri</h2>
              <p className="text-gray-300 leading-relaxed">
                Türk hukukunda, özellikle Hukuk Muhakemeleri Kanunu'nun 293. maddesi uyarınca, taraflar dava sürecinde
                kanıt seçtikleri uzmanlardan görüş alabilir ve bu görüşleri mahkemeye sunabilirler. Uzman görüşü,
                bilirkişi raporundan farklı olarak tarafların delil olarak sunduğu, teknik ve bilimsel açıklamalar
                içeren bir değerlendirmedir.
              </p>
            </CardContent>
          </Card>

          {/* Benefits Sidebar */}
          <Card className="bg-gray-800/30 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-red-400 mb-6">Uzman Görüşünün Faydaları Nelerdir?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <FileText className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-red-400 font-semibold mb-1">Teknik Bilgi Sağlar</h3>
                    <p className="text-gray-400 text-sm">
                      Mahkemeye veya taraflara, dava konusu teknik veya bilimsel konularda açıklık getirir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-red-400 font-semibold mb-1">Detil Niteliği</h3>
                    <p className="text-gray-400 text-sm">
                      Taraflarca sunulan uzman görüşleri, mahkemede delil olarak değerlendirilir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-red-400 font-semibold mb-1">Dava Sürecini Hızlandırır</h3>
                    <p className="text-gray-400 text-sm">
                      Teknik konularda hızlı ve güvenilir bilgi sunarak sürecin daha hızla ilerlemesini sağlar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-red-400 font-semibold mb-1">Objektif ve Bilimsel Yaklaşım</h3>
                    <p className="text-gray-400 text-sm">
                      Alanında uzman kişiler tarafından hazırlanır, için tarafsız ve bilimsel bir değerlendirme sunar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-red-400 font-semibold mb-1">Bilirkişi Raporuna Alternatif</h3>
                    <p className="text-gray-400 text-sm">
                      Mahkeme tarafından atanan bilirkişi raporuna alternatif olarak sunulabilir.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      
    </div>
  )
}

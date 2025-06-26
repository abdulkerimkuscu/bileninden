import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Shield, Users, Phone, Clock, Award, Target, Zap } from "lucide-react"

export default function HomePage() {
  return (
      <div className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-gray-800 overflow-x-hidden">
      {/* Parallax ve Glow efektli arka plan */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-radial from-emerald-400/30 via-emerald-600/10 to-transparent blur-3xl opacity-70 animate-pulse" />
        <div className="absolute right-0 bottom-0 w-[60vw] h-[40vh] bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl opacity-60" />
        <div className="absolute left-0 bottom-0 w-[40vw] h-[30vh] bg-gradient-to-tr from-red-400/10 to-transparent blur-2xl opacity-40" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-center text-center">
        
        <h1 className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-emerald-400 via-white to-emerald-600 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-slow">
          <span className="block">Uzmanlık,</span>
          <span className="block">Teknik,</span>
          <span className="block">Adalet.</span>
        </h1>
        <p className="mt-8 text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto animate-fade-in-slow2">
          Dava dosyalarındaki teknik konular için <span className="text-emerald-400 font-semibold">uzman bilirkişilerden</span> profesyonel hizmet alın. Bilimsel, hızlı ve güvenilir raporlarla davanıza yön verin.
        </p>
        
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg group relative overflow-hidden p-6">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-emerald-400 font-bold text-base mb-1">Hızlı Rapor</h3>
              
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg group relative overflow-hidden p-6">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-emerald-400 font-bold text-base mb-1">Güvenilir Hizmet</h3>
             
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg group relative overflow-hidden p-6">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-emerald-400 font-bold text-base mb-1">Deneyimli Kadro</h3>
              
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg group relative overflow-hidden p-6">
            <CardContent className="p-6 text-center">
              <Phone className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-emerald-400 font-bold text-base mb-1">7/24 Destek</h3>
              
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* What is Expert Opinion */}
          <Card
            className="bg-gray-800/30 border-emerald-700 shadow-lg relative overflow-hidden"
            style={{
              backgroundImage: "url('https://cdn.pixabay.com/photo/2016/08/15/10/17/survey-1594962_1280.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          >
            <div className="absolute inset-0 bg-gray-900/80 z-0" />
            <CardContent className="p-8 relative z-10">
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Uzman Görüşü Nedir?</h2>
              <p className="text-gray-200 leading-relaxed text-base text-justify">
                Uzman görüşü, bir davada teknik, bilimsel ya da özel bilgi gerektiren konularda, alanında yetkin kişiler tarafından hazırlanan detaylı ve tarafsız bir değerlendirme raporudur. Bu görüş, tarafların talebiyle alınır ve mahkemeye delil olarak sunulabilir. Amaç, hukukçuların uzmanlık gerektiren konuları daha iyi anlayabilmesini sağlamak ve karar sürecine bilimsel katkı sunmaktır.
                Örneğin; trafik kazalarında hız ve kusur analizi, gayrimenkul davalarında taşınmazın değeri veya niteliğine ilişkin teknik inceleme, işçilik alacağı davalarında ücret, fazla mesai ve kıdem tazminatı hesaplamaları, imza incelemesi gerektiren durumlarda belge üzerinde sahtecilik olup olmadığının tespiti, ticari davalarda muhasebe kayıtlarının ve hesap tablolarının analizi gibi konularda uzman görüşü yol gösterici olabilir.
              </p>
            </CardContent>
          </Card>

          {/* Role in Turkish Legal System */}
          <Card
            className="bg-gray-800/30 border-emerald-700 shadow-lg relative overflow-hidden"
            style={{
              backgroundImage: "url('https://barandogan.av.tr/images/tokmak-kitap-1280x720.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          >
            <div className="absolute inset-0 bg-gray-900/80 z-0" />
            <CardContent className="p-8 relative z-10">
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Türk Hukuk Sisteminde Uzman Görüşünün Yeri</h2>
              <p className="text-gray-200 leading-relaxed text-base text-justify">
                Mahkeme özellikle özel ve teknik bilgiyi gerektiren konularda, tarafın sunduğu uzman görüşünün dava konusuyla ilgili olması halinde mutlaka dikkate almak ve değerlendirmek zorundadır. Bu anlamda alınan bilirkişi raporuna, taraflardan biri, uzman görüşüne dayanmak suretiyle itiraz etmiş ve bu itirazlar mahkemece hiç değerlendirmeye alınmamış ve itirazlar gerekçeli bir şekilde karşılanmamış ise uzman görüşüne dayanan tarafın 6100 sayılı HMK’nın 27., Anayasa’nın 36. ve Avrupa İnsan Hakları Sözleşmesi’nin 6. maddesinde düzenlenen adil yargılanma hakkının en önemli unsuru olan hukuki dinlenme hakkı ihlal edilmiş olabilecektir. <br /> <br /> (Yargıtay 6. Hukuk Dairesi, E. 2023/3211, K. 2024/4358, T. 26.11.2024)
              </p>
            </CardContent>
          </Card>

          {/* Benefits Sidebar */}
          <Card
            className="bg-gray-800/30 border-emerald-700 shadow-lg relative overflow-hidden"
            style={{
              backgroundImage: "url('https://www.stevengillhouse.com/wp-content/uploads/2024/10/AdobeStock_793257278-2048x1148.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          >
            <div className="absolute inset-0 bg-gray-900/80 z-0" />
            <CardContent className="p-8 relative z-10">
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Uzman Görüşünün Faydaları Nelerdir?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <FileText className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-emerald-400 font-semibold mb-1">Teknik Bilgi Sağlar</h3>
                    <p className="text-gray-200 text-base text-justify">
                      Mahkemeye veya taraflara, dava konusu teknik veya bilimsel konularda açıklık getirir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-emerald-400 font-semibold mb-1">Delil Niteliği</h3>
                    <p className="text-gray-200 text-base text-justify">
                      Taraflarca sunulan uzman görüşleri, mahkemede delil olarak değerlendirilir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-emerald-400 font-semibold mb-1">Dava Sürecini Hızlandırır</h3>
                    <p className="text-gray-200 text-base text-justify">
                      Teknik konularda hızlı ve güvenilir bilgi sunarak sürecin daha hızla ilerlemesini sağlar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-emerald-400 font-semibold mb-1">Objektif ve Bilimsel Yaklaşım</h3>
                    <p className="text-gray-200 text-base text-justify">
                      Alanında uzman kişiler tarafından hazırlanır, tarafsız ve bilimsel bir değerlendirme sunar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-emerald-400 font-semibold mb-1">Bilirkişi Raporuna Alternatif</h3>
                    <p className="text-gray-200 text-base text-justify">
                      Mahkeme tarafından atanan bilirkişi raporuna alternatif olarak sunulabilir.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer veya CTA ekleyebilirsiniz */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex flex-col items-center">
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-emerald-400 mb-4 animate-fade-in">Hemen Uzman Görüşü Alın</h2>
          <p className="text-gray-200 text-lg mb-6 animate-fade-in-slow2">
            Bilimsel, hızlı ve güvenilir uzman görüşü için başvurunuzu hemen oluşturun.
          </p>
          <Button
            asChild
            className="px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold shadow-xl transition-all duration-300"
          >
            <Link href="/basvuru">Başvuru Yap</Link>
          </Button>
        </div>
      </div>

      {/* Basit animasyonlar için Tailwind'e özel keyframes ekleyebilirsiniz */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-slow { animation: fade-in 1.5s .2s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-slow2 { animation: fade-in 2s .4s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-slow3 { animation: fade-in 2.5s .6s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  )
}

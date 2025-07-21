import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Car, Briefcase, Home, Users, BookOpen, Hammer, Zap, HardHat, Leaf, FileText, ArrowLeft, PenLine, Building2, Stamp
} from "lucide-react"

export default function AlanlarimizPage() {
  const services = [
    {
      icon: Car,
      title: "Trafik Kazaları ve Kusur Oranı Tespiti",
      description: "Trafik kazalarının teknik analizleri ve kusur oranlarının maddi gerçeğe uygun şekilde tespiti.",
      features: [
        "Teknik analiz ve kusur oranı tespiti",
        "Delil, kroki, tutanak ve kamera görüntülerinin incelenmesi",
        "Uzman raporları ile maddi gerçeğin ortaya konulması"
      ],
      experts: "Makine mühendisleri, trafik bilirkişileri, adli trafik uzmanları"
    },
    {
      icon: Briefcase,
      title: "Aktüerya Hesaplamaları",
      description: "Destekten yoksun kalma, maluliyet ve iş kazası tazminatlarının bilimsel hesaplanması.",
      features: [
        "Destekten yoksun kalma tazminatı",
        "Kalıcı/geçici maluliyet tazminatı",
        "İş kazası ve meslek hastalığı tazminatı"
      ],
      experts: "Aktüerler, sigorta uzmanları"
    },
    {
      icon: Hammer,
      title: "Deprem Sonrası Taşınmaz Hasar Durumu Değerlendirme",
      description: "Deprem sonrası taşınmazların yapısal hasarları ve risk analizi.",
      features: [
        "Hasar, çatlak ve deformasyon incelemesi",
        "Risk analizi ve güçlendirme önerileri",
        "Ekspertiz raporları ile hukuki süreç desteği"
      ],
      experts: "İnşaat mühendisleri, yapı denetim uzmanları"
    },
    {
      icon: Home,
      title: "Menkul ve Gayrimenkul Değerleme",
      description: "Taşınır ve taşınmazların piyasa değerinin tespiti, kamulaştırma ve değer düşüklüğü analizleri.",
      features: [
        "Kamulaştırma bedel tespiti",
        "Emsal, gelir ve maliyet yöntemleriyle değerleme",
        "Değer düşüklüğü analizleri"
      ],
      experts: "Gayrimenkul değerleme uzmanı, şehir plancısı, harita mühendisi"
    },
    {
      icon: PenLine,
      title: "İmza, Yazı, Ses, Görüntü ve Dijital Belge İncelemeleri",
      description: "El yazısı, imza, ses ve görüntü kayıtlarının doğruluk ve sahtecilik analizleri.",
      features: [
        "El yazısı ve imza incelemesi",
        "Ses/görüntü doğruluk ve montaj analizi",
        "Dijital belgelerin orijinallik ve zaman damgası kontrolü"
      ],
      experts: "Adli bilişim uzmanları, grafolog, yazılım mühendisleri"
    },
    {
      icon: Briefcase,
      title: "İşçilik Alacakları ve SGK İncelemeleri",
      description: "Kıdem, ihbar, fazla mesai, yıllık izin ve SGK primlerinin teknik incelemesi.",
      features: [
        "İşçilik alacaklarının hesaplanması",
        "SGK primleri ve kayıt dışı çalışma incelemesi",
        "Teknik raporlarla işe iade ve kötü niyet tazminatı"
      ],
      experts: "Serbest muhasebeci mali müşavir (SMMM), SGK uzmanı"
    },
    {
      icon: BookOpen,
      title: "Adli Muhasebe ve Defter İncelemeleri",
      description: "Ticari defterlerin mevzuata uygunluğu ve mali kayıtların analizi.",
      features: [
        "Defter ve belgelerin mevzuata uygunluk incelemesi",
        "Ortaklık uyuşmazlıkları ve usulsüzlük analizi",
        "Adli/idari süreçler için uzman görüşü"
      ],
      experts: "YMM, SMMM, denetçiler"
    },
    {
      icon: Building2,
      title: "İmar Planları İncelemesi",
      description: "İmar planlarının mevzuata uygunluğu ve yapılaşma haklarının analizi.",
      features: [
        "Plan notları ve kullanım koşulları incelemesi",
        "Plan değişiklikleri ve yapılaşma hakları analizi",
        "Mevzuat ve teknik kriterlere göre değerlendirme"
      ],
      experts: "Şehir plancısı, harita mühendisi, mimar"
    },
    {
      icon: Stamp,
      title: "Patent, Marka ve Fikri Mülkiyet İncelemeleri",
      description: "Fikri mülkiyet hakları, patent ve marka ihlallerinin teknik ve hukuki analizi.",
      features: [
        "Fikri mülkiyet uyuşmazlıklarının teknik analizi",
        "Patent ve marka ihlali tespitleri",
        "Hak sahipliği ve stratejik öneriler"
      ],
      experts: "Patent vekili, marka uzmanı, hukukçu"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Ana sayfa ile aynı animasyonlu arka plan */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-radial from-emerald-400/30 via-emerald-600/10 to-transparent blur-3xl opacity-70 animate-pulse" />
        <div className="absolute right-0 bottom-0 w-[60vw] h-[40vh] bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl opacity-60" />
        <div className="absolute left-0 bottom-0 w-[40vw] h-[30vh] bg-gradient-to-tr from-red-400/10 to-transparent blur-2xl opacity-40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfaya Dön
          </Link>
          <h1 className="text-5xl font-extrabold bg-gradient-to-br from-emerald-400 via-white to-emerald-600 bg-clip-text text-transparent drop-shadow-2xl mb-4 animate-fade-in">
            Hizmet Alanlarımız
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto animate-fade-in-slow">
            Uzman bilirkişi hizmetlerimiz ile profesyonel çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg group relative overflow-hidden p-3"
              >
                <div className="absolute -top-8 -right-8 opacity-10 transition-all duration-500">
                  <Icon className="w-28 h-28 text-emerald-400" />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon className="w-8 h-8 text-emerald-400 drop-shadow-lg" />
                    <CardTitle className="text-white text-lg font-bold drop-shadow">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div>
                    <p className="text-gray-300 text-base">{service.description}</p>
                    <div className="space-y-1 mt-2">
                      <h4 className="text-emerald-400 font-semibold text-sm">Hizmet Kapsamı:</h4>
                      <ul className="space-y-0.5">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-400 flex items-center text-sm">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-auto pt-3">
                    <span className="text-xs text-emerald-400 font-semibold">Başvuru yapılan bilirkişiler: </span>
                    <span className="text-gray-300 text-xs">{service.experts}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      {/* Animasyonlar için ekstra stiller */}
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

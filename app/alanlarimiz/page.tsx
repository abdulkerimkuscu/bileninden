import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Car, Briefcase, Home, Users, BookOpen, Hammer, Zap, HardHat, Leaf, FileText, ArrowLeft
} from "lucide-react"

export default function AlanlarimizPage() {
  const services = [
    {
      icon: Car,
      title: "Trafik Kazaları ve Kusur Oranı Tespiti",
      description: "Araç hız analizi, çarpışma noktası tespiti, teknik kusur belirlenmesi.",
      features: [
        "Araç hız analizi",
        "Çarpışma noktası tespiti",
        "Teknik kusur belirlenmesi"
      ],
      experts: "Makine mühendisleri, trafik bilirkişileri, adli trafik uzmanları"
    },
    {
      icon: Briefcase,
      title: "İşçilik Alacakları ve SGK İncelemeleri",
      description: "Kıdem tazminatı, fazla mesai, yıllık izin, prim tespiti.",
      features: [
        "Kıdem tazminatı",
        "Fazla mesai",
        "Yıllık izin",
        "Prim tespiti"
      ],
      experts: "Serbest muhasebeci mali müşavir (SMMM), SGK uzmanı"
    },
    {
      icon: Home,
      title: "Taşınmaz Değerleme ve Kamulaştırma",
      description: "Arsa, tarla, konut gibi gayrimenkullerin piyasa değeri.",
      features: [
        "Arsa",
        "Tarla",
        "Konut gibi gayrimenkullerin piyasa değeri"
      ],
      experts: "Gayrimenkul değerleme uzmanı, şehir plancısı, harita mühendisi"
    },
    {
      icon: Users,
      title: "Miras ve Taksim Uyuşmazlıkları",
      description: "Veraset ve intikal, tereke paylaşımı, taşınmazın bölünmesi.",
      features: [
        "Veraset ve intikal",
        "Tereke paylaşımı",
        "Taşınmazın bölünmesi"
      ],
      experts: "Harita mühendisi, ziraat mühendisi, hukukçu bilirkişiler"
    },
    {
      icon: BookOpen,
      title: "Adli Muhasebe ve Defter İncelemeleri",
      description: "Ticari defterlerin usule uygunluğu, şirket ortaklık uyuşmazlıkları.",
      features: [
        "Ticari defterlerin usule uygunluğu",
        "Şirket ortaklık uyuşmazlıkları"
      ],
      experts: "YMM, SMMM, denetçiler"
    },
    {
      icon: Hammer,
      title: "İnşaat ve İmar Uyuşmazlıkları",
      description: "Hatalı inşaat, ruhsatsız yapı, yapı denetimi kusurları.",
      features: [
        "Hatalı inşaat",
        "Ruhsatsız yapı",
        "Yapı denetimi kusurları"
      ],
      experts: "İnşaat mühendisi, mimar, yapı denetim uzmanı"
    },
    {
      icon: Zap,
      title: "Elektrik, Enerji ve Yangın İncelemeleri",
      description: "Elektrik arızası kaynaklı zarar, trafo yangınları, kaçak kullanım tespiti.",
      features: [
        "Elektrik arızası kaynaklı zarar",
        "Trafo yangınları",
        "Kaçak kullanım tespiti"
      ],
      experts: "Elektrik mühendisleri"
    },
    {
      icon: HardHat,
      title: "İşyeri Kazaları ve Meslek Hastalıkları",
      description: "İş güvenliği ihlalleri, kaza nedenlerinin belirlenmesi.",
      features: [
        "İş güvenliği ihlalleri",
        "Kaza nedenlerinin belirlenmesi"
      ],
      experts: "İş sağlığı ve güvenliği uzmanları, işyeri hekimleri"
    },
    {
      icon: Leaf,
      title: "Tarım, Ürün Verimliliği ve Doğal Afet Tespitleri",
      description: "Ürün zararı, tarımsal üretim kaybı, afet hasar tespiti.",
      features: [
        "Ürün zararı",
        "Tarımsal üretim kaybı",
        "Afet hasar tespiti"
      ],
      experts: "Ziraat mühendisleri"
    },
    {
      icon: FileText,
      title: "Ses, Görüntü, Yazı ve Dijital Belge İncelemeleri (Bilişim)",
      description: "Ses kayıtlarının doğruluğu, belge sahteciliği, dijital izlerin analizi.",
      features: [
        "Ses kayıtlarının doğruluğu",
        "Belge sahteciliği",
        "Dijital izlerin analizi"
      ],
      experts: "Adli bilişim uzmanları, grafolog, yazılım mühendisleri"
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      {/* Parallax ve Glow efektli arka plan */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-radial from-emerald-400/30 via-emerald-600/10 to-transparent blur-3xl opacity-70 animate-pulse" />
        <div className="absolute right-0 bottom-0 w-[60vw] h-[40vh] bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl opacity-60" />
        <div className="absolute left-0 bottom-0 w-[40vw] h-[30vh] bg-gradient-to-tr from-red-400/10 to-transparent blur-2xl opacity-40" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

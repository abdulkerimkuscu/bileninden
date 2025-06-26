import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Car, // Trafik
  Briefcase, // İşçilik
  Home, // Taşınmaz
  Users, // Miras
  BookOpen, // Adli Muhasebe
  Hammer, // İnşaat
  Zap, // Elektrik
  HardHat, // İşyeri Kazaları
  Leaf, // Tarım
  FileText, // Dijital Belge
  ArrowLeft
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
          <h1 className="text-4xl font-bold text-white mb-4">Hizmet Alanlarımız</h1>
          <p className="text-gray-300 text-lg">Uzman bilirkişi hizmetlerimiz ile profesyonel çözümler sunuyoruz.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-700/30 transition-colors h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Icon className="w-12 h-12 text-emerald-400" />
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div>
                    <p className="text-gray-300">{service.description}</p>
                    <div className="space-y-2 mt-4">
                      <h4 className="text-emerald-400 font-semibold">Hizmet Kapsamı:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-400 flex items-center">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-auto pt-6">
                    <span className="text-sm text-emerald-400 font-semibold">Başvuru yapılan bilirkişiler: </span>
                    <span className="text-gray-300 text-sm">{service.experts}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

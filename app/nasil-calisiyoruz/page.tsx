"use client"

import Link from "next/link"
import { ArrowLeft, MessageCircle, ClipboardCheck, Users, FileText, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const sliderItems = [
  {
    icon: <MessageCircle className="w-16 h-16 text-emerald-400 mb-4" />,
    title: "Başvuru ve Ön Görüşme",
    desc: "Uzman görüşü ihtiyacı olanlar, şirketimizin iletişim kanalları üzerinden talepte bulunur. Talebin doğru yönlendirilmesi ve ihtiyaçların netleştirilmesi için ön görüşme yapılır.",
  },
  {
    icon: <ClipboardCheck className="w-16 h-16 text-emerald-400 mb-4" />,
    title: "İhtiyaç Analizi ve Planlama",
    desc: "Talep edilen konuda kapsamlı bir ihtiyaç analizi gerçekleştirilir. Lüzum görülmesi halinde yerinde inceleme ve keşif yapılır; dosya detayları ekip tarafından değerlendirilir.",
  },
  {
    icon: <Users className="w-16 h-16 text-emerald-400 mb-4" />,
    title: "Uzman Atama ve Teknik İnceleme",
    desc: "İlgili alanda deneyimli ve yetkin uzmanlar dosyayı titizlikle inceler. Teknik ve hukuki açıdan gerekli tüm analizler gerçekleştirilir.",
  },
  {
    icon: <FileText className="w-16 h-16 text-emerald-400 mb-4" />,
    title: "Raporlama ve Teslimat",
    desc: "Hazırlanan uzman görüşü raporu, taraflara zamanında ve güvenilir şekilde sunulur. Raporlar, hukuki süreçlerde delil niteliği taşır ve mahkemede kullanılabilir.",
  },
  {
    icon: <Sparkles className="w-16 h-16 text-emerald-400 mb-4" />,
    title: "Sürekli Destek ve İletişim",
    desc: "Tüm süreç boyunca destek ekibi, bilgilendirme ve danışmanlık hizmeti vererek sürecin şeffaf ve etkin yürütülmesini sağlar.",
  }
]

export default function NasilCalisiyoruzPage() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % sliderItems.length)
    }, 4000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Arka plan */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-radial from-emerald-400/30 via-emerald-600/10 to-transparent blur-3xl opacity-70 animate-pulse" />
        <div className="absolute right-0 bottom-0 w-[60vw] h-[40vh] bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl opacity-60" />
        <div className="absolute left-0 bottom-0 w-[40vw] h-[30vh] bg-gradient-to-tr from-red-400/10 to-transparent blur-2xl opacity-40" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-6 text-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
          <h1 className="text-6xl font-extrabold bg-gradient-to-br from-emerald-400 via-white to-emerald-600 bg-clip-text text-transparent drop-shadow-2xl mb-6 animate-fade-in">
            Nasıl Çalışıyoruz?
          </h1>
        </div>
        {/* Slider */}
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full max-w-xl min-h-[320px] flex items-center justify-center mx-auto">
            {sliderItems.map((item, i) => (
              <div
                key={i}
                className={`absolute left-0 top-0 w-full transition-all duration-700 ${
                  i === current
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0 pointer-events-none"
                }`}
              >
                <div className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 rounded-2xl p-12 flex flex-col items-center text-center border border-gray-700 shadow-2xl">
                  {item.icon}
                  <h4 className="text-white font-bold mb-2 text-2xl">{item.title}</h4>
                  <p className="text-gray-300 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Slider dots */}
          <div className="flex justify-center gap-3 mt-8">
            {sliderItems.map((_, i) => (
              <button
                key={i}
                className={`w-4 h-4 rounded-full transition-all ${
                  i === current ? "bg-emerald-400 shadow-lg" : "bg-gray-600"
                }`}
                onClick={() => setCurrent(i)}
                aria-label={`Adım ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Animasyonlar için ekstra stiller */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  )
}
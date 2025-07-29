"use client"

import Link from "next/link"
import { ArrowLeft, MessageCircle, ClipboardCheck, Users, FileText, Sparkles } from "lucide-react"

const steps = [
	{
		icon: MessageCircle,
		title: "Başvuru ve Ön Görüşme",
		desc: "Uzman görüşü ihtiyacı olanlar, iletişim kanallarımızdan bize ulaşır. Talebin doğru yönlendirilmesi ve ihtiyaçların netleştirilmesi için ön görüşme yapılır.",
	},
	{
		icon: ClipboardCheck,
		title: "İhtiyaç Analizi ve Planlama",
		desc: "Talep edilen konuda kapsamlı bir analiz gerçekleştirilir. Gerekirse yerinde inceleme ve keşif yapılır; dosya detayları ekip tarafından değerlendirilir.",
	},
	{
		icon: Users,
		title: "Uzman Atama ve Teknik İnceleme",
		desc: "Deneyimli ve yetkin uzmanlar dosyayı titizlikle inceler. Teknik ve hukuki açıdan gerekli tüm analizler yapılır.",
	},
	{
		icon: FileText,
		title: "Raporlama ve Teslimat",
		desc: "Hazırlanan uzman görüşü raporu, taraflara zamanında ve güvenilir şekilde sunulur. Raporlar hukuki süreçlerde delil niteliği taşır.",
	},
	{
		icon: Sparkles,
		title: "Sürekli Destek ve İletişim",
		desc: "Tüm süreç boyunca destek ekibimiz, bilgilendirme ve danışmanlık hizmeti vererek sürecin şeffaf ve etkin yürütülmesini sağlar.",
	},
]

export default function NasilCalisiyoruzPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-gray-800 relative overflow-hidden">
			{/* Arka plan */}
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
						Nasıl Çalışıyoruz?
					</h1>
					<p className="text-gray-300 text-xl max-w-2xl mx-auto animate-fade-in-slow">
						Süreçlerimizde şeffaflık, uzmanlık ve hızlı iletişim ön plandadır. Aşağıda adım adım işleyişimizi görebilirsiniz.
					</p>
				</div>

				<div className="flex flex-col gap-4 items-center">
					{steps.map((step, index) => {
						const Icon = step.icon
						return (
							<div
								key={index}
								className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border-emerald-600 shadow-lg relative overflow-hidden p-2 rounded-xl w-full max-w-md"
							>
								<div className="absolute -top-6 -right-6 opacity-10 transition-all duration-500">
									<Icon className="w-16 h-16 text-emerald-400" />
								</div>
								<div className="flex items-center space-x-2 mb-2">
									<Icon className="w-7 h-7 text-emerald-400 drop-shadow-lg" />
									<span className="text-white text-base font-bold drop-shadow">{step.title}</span>
								</div>
								<div>
									<p className="text-gray-300 text-sm">{step.desc}</p>
								</div>
							</div>
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
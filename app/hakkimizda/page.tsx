"use client"

import Link from "next/link"
import { ArrowLeft, Users, Clock, Shield, Phone, DollarSign, Award, Globe, Eye,  } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const sliderItems = [
	{
		icon: <Users className="w-10 h-10 text-emerald-400 mb-3" />,
		title: "Uzman Kadro",
		desc: "Alanında uzman, deneyimli bilirkişiler",
	},
	{
		icon: <Clock className="w-10 h-10 text-emerald-400 mb-3" />,
		title: "Hızlı Hizmet",
		desc: "5-10 iş günü içinde rapor teslimi",
	},
	{
		icon: <Shield className="w-10 h-10 text-emerald-400 mb-3" />,
		title: "Güvenilir Sonuçlar",
		desc: "Bilimsel yöntemlerle hazırlanan raporlar",
	},
	{
		icon: <Phone className="w-10 h-10 text-emerald-400 mb-3" />,
		title: "7/24 Destek",
		desc: "Sürekli iletişim ve destek hizmeti",
	},
	{
		icon: <DollarSign className="w-10 h-10 text-emerald-400 mb-3" />,
		title: "Uygun Fiyat",
		desc: "Rekabetçi ve şeffaf fiyatlandırma",
	},
	{
		icon: <Award className="w-10 h-10 text-emerald-400 mb-3" />,
		title: "Mahkeme Uyumlu",
		desc: "Hukuki süreçlere uygun format",
	},
]

export default function HakkimizdaPage() {
	const [current, setCurrent] = useState(0)
	const timeoutRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		timeoutRef.current = setTimeout(() => {
			setCurrent((prev) => (prev + 1) % sliderItems.length)
		}, 2500)
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current)
		}
	}, [current])

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden relative">
			{/* Glow ve parallax arka plan */}
			<div className="pointer-events-none fixed inset-0 z-0">
				<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-radial from-emerald-400/30 via-emerald-600/10 to-transparent blur-3xl opacity-70 animate-pulse" />
				<div className="absolute right-0 bottom-0 w-[60vw] h-[40vh] bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl opacity-60" />
				<div className="absolute left-0 bottom-0 w-[40vw] h-[30vh] bg-gradient-to-tr from-red-400/10 to-transparent blur-2xl opacity-40" />
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
            			Hakkımızda
          			  </h1>
					<p className="text-gray-300 text-lg mt-2 animate-fade-in-slow max-w-2xl">
						Türkiye'nin en güvenilir uzman görüşü platformu olarak hizmet veriyoruz.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8 mb-12">
					{/* Misyon */}
					<div className="relative rounded-xl bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border border-emerald-500 shadow-xl p-5 overflow-hidden">
						<div className="absolute -top-8 -left-8 opacity-10">
							<Globe className="w-28 h-28 text-emerald-400" />
						</div>
						<div className="relative z-10">
							<div className="flex items-center gap-3 mb-3">
								<Globe className="w-7 h-7 text-emerald-400 drop-shadow" />
								<h2 className="text-xl font-bold text-emerald-300 drop-shadow">
									Misyonumuz
								</h2>
							</div>
							<p className="text-gray-200 leading-relaxed text-justify text-base font-medium drop-shadow">
								Amacımız; teknik, bilimsel ve özel bilgi gerektiren hukuki uyuşmazlıklarda,
								taraflara güvenilir, tarafsız ve profesyonel uzman görüşü temin etmek, adil
								yargılamaya katkı sağlamaktır. Tarafların kendi belirledikleri uzmanlar
								arasından olaylara dair bilimsel ve objektif değerlendirmeler almasını
								sağlıyor; bu görüşlerin mahkemeye sunulmasıyla davaların daha sağlıklı ve
								isabetli şekilde sonuçlandırılmasına yardımcı oluyoruz. Uzman görüşü
								hizmetini, yüksek etik standartlara bağlı, şeffaf ve kaliteli bir anlayışla
								sunarak, hukuk dünyasında güvenilir bir başvuru kaynağı olmayı hedefliyoruz.
							</p>
						</div>
					</div>
					{/* Vizyon */}
					<div className="relative rounded-xl bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 border border-emerald-500 shadow-xl p-5 overflow-hidden">
						<div className="absolute -top-8 -right-8 opacity-10">
							<Eye className="w-28 h-28 text-emerald-400" />
						</div>
						<div className="relative z-10">
							<div className="flex items-center gap-3 mb-3">
								<Eye className="w-7 h-7 text-emerald-400 drop-shadow" />
								<h2 className="text-xl font-bold text-emerald-300 drop-shadow">
									Vizyonumuz
								</h2>
							</div>
							<p className="text-gray-200 leading-relaxed text-justify text-base font-medium drop-shadow">
								Türkiye’de uzman görüşü alanında öncü ve güvenilir bir platform olarak,
								hukuki süreçlerin daha adil, hızlı ve bilimsel temellere dayalı şekilde
								yürütülmesine öncülük etmek istiyoruz. Yalnızca bir hizmet sağlayıcısı
								olmak değil, aynı zamanda hukuk ve teknik uzmanlık arasındaki köprüyü
								kuran, yargı süreçlerinin gelişimine katkı sağlayan, toplumsal güveni
								artıran bir çözüm ortağı olmaktır. Teknolojiyi ve uzmanlığı bir araya
								getirerek yüksek kalitede, etik değerlere bağlı,
								şeffaf ve sürdürülebilir hizmet sunmayı; bu alanda sektörün standartlarını
								belirleyen ve sürekli gelişen bir yapı olmayı hedefliyoruz.
							</p>
						</div>
					</div>
				</div>

				{/* Neden Bileninden Slider */}
				<div className="w-full flex flex-col items-center">
					<h2 className="text-3xl font-bold text-emerald-400 mb-8">Neden Bileninden?</h2>
					<div className="relative w-full max-w-md min-h-[220px] flex items-center justify-center mx-auto">
						{sliderItems.map((item, i) => (
							<div
								key={i}
								className={`absolute left-0 top-0 w-full transition-all duration-700 ${
									i === current
										? "opacity-100 scale-100 z-10"
										: "opacity-0 scale-95 z-0 pointer-events-none"
								}`}
							>
								<div className="bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 rounded-xl p-10 flex flex-col items-center text-center border border-gray-700 shadow-lg">
									{item.icon}
									<h4 className="text-white font-semibold mb-1 text-lg">{item.title}</h4>
									<p className="text-gray-400 text-base">{item.desc}</p>
								</div>
							</div>
						))}
					</div>
					{/* Slider dots */}
					<div className="flex justify-center gap-2 mt-4">
						{sliderItems.map((_, i) => (
							<button
								key={i}
								className={`w-2 h-2 rounded-full transition-all ${
									i === current ? "bg-emerald-400" : "bg-gray-600"
								}`}
								onClick={() => setCurrent(i)}
								aria-label={`Avantaj ${i + 1}`}
							/>
						))}
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
      `}</style>
		</div>
	)
}

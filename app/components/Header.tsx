"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const logoTextRef = useRef<HTMLSpanElement>(null)
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-emerald-900/80 backdrop-blur-xl border-b border-emerald-700/40 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 relative">
          {/* Logo & Site Adı */}
          <div className="flex items-center space-x-3 group">
            <Link href="/" className="flex items-center gap-2 select-none">
              {/* B Logo */}
              <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[linear-gradient(to_bottom_right,_#111827_25%,_#059669_45%,_#dc2626_90%)] shadow-lg font-extrabold text-white text-2xl transition-all duration-300">
                B
              </span>
              {/* Bileninden Yazısı */}
              <span
                ref={logoTextRef}
                className={`ml-1 text-xl font-extrabold bg-gradient-to-br from-emerald-400 via-white to-emerald-600 bg-clip-text text-transparent tracking-tight drop-shadow-lg transition-all duration-500
                  ${scrolled ? "opacity-0 translate-x-[-24px] scale-75 pointer-events-none" : "opacity-100 translate-x-0 scale-100"}
                `}
                style={{
                  // Yazı kaybolunca B logosunun içine giriyor gibi efekt
                  marginLeft: scrolled ? "-1.5rem" : "0.25rem",
                }}
              >
                Bileninden
              </span>
            </Link>
          </div>
          {/* Masaüstü menü */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <Link
              href="/"
              className={`relative px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 hover:bg-emerald-900/40 hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 focus:outline-none
                ${pathname === "/" ? "text-red-400" : "text-emerald-400"}
              `}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/alanlarimiz"
              className={`relative px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 hover:bg-emerald-900/40 hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 focus:outline-none
                ${pathname === "/alanlarimiz" ? "text-red-400" : "text-emerald-400"}
              `}
            >
              Alanlarımız
            </Link>
            <Link
              href="/hakkimizda"
              className={`relative px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 hover:bg-emerald-900/40 hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 focus:outline-none
                ${pathname === "/hakkimizda" ? "text-red-400" : "text-emerald-400"}
              `}
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className={`relative px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 hover:bg-emerald-900/40 hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 focus:outline-none
                ${pathname === "/iletisim" ? "text-red-400" : "text-emerald-400"}
              `}
            >
              İletişim
            </Link>
          </div>
          {/* Sağda buton */}
          <div className="hidden md:block ml-auto">
            <Button className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-base font-bold shadow-xl transition-all duration-300 rounded-full">
              <Link href="/basvuru">
                Uzman Görüşü Talep Et
              </Link>
            </Button>
          </div>
          {/* Mobil menü butonu */}
          <button
            className="md:hidden text-emerald-400 ml-2"
            onClick={() => setOpen(!open)}
            aria-label="Menüyü Aç/Kapat"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        {/* Mobil menü */}
        {open && (
          <div className="md:hidden mt-2 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-emerald-900/80 rounded-2xl shadow-2xl p-6 flex flex-col gap-3 border border-emerald-700/30 animate-fade-in">
            <Link
              href="/"
              className={`block w-full text-center py-3 rounded-xl font-semibold text-lg transition-all duration-200
                ${pathname === "/" ? "bg-emerald-900/40 text-red-400" : "text-emerald-400 hover:bg-emerald-900/40 hover:text-emerald-300"}
              `}
              onClick={() => setOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/alanlarimiz"
              className={`block w-full text-center py-3 rounded-xl font-semibold text-lg transition-all duration-200
                ${pathname === "/alanlarimiz" ? "bg-emerald-900/40 text-red-400" : "text-emerald-400 hover:bg-emerald-900/40 hover:text-emerald-300"}
              `}
              onClick={() => setOpen(false)}
            >
              Alanlarımız
            </Link>
            <Link
              href="/hakkimizda"
              className={`block w-full text-center py-3 rounded-xl font-semibold text-lg transition-all duration-200
                ${pathname === "/hakkimizda" ? "bg-emerald-900/40 text-red-400" : "text-emerald-400 hover:bg-emerald-900/40 hover:text-emerald-300"}
              `}
              onClick={() => setOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className={`block w-full text-center py-3 rounded-xl font-semibold text-lg transition-all duration-200
                ${pathname === "/iletisim" ? "bg-emerald-900/40 text-red-400" : "text-emerald-400 hover:bg-emerald-900/40 hover:text-emerald-300"}
              `}
              onClick={() => setOpen(false)}
            >
              İletişim
            </Link>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white w-full rounded-full shadow-lg mt-1 border-2 border-emerald-300/30" asChild>
              <Link href="/basvuru" onClick={() => setOpen(false)}>
                Uzman Görüşü Talep Et
              </Link>
            </Button>
          </div>
        )}
      </div>
      {/* Animasyonlar için ekstra stiller */}
      <style>{`
        .header-link {
          @apply text-emerald-300 font-semibold text-lg px-3 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-900/40 hover:text-white hover:shadow-emerald-400/20 shadow;
        }
        .header-link-mobile {
          @apply text-emerald-300 font-semibold text-lg px-4 py-3 rounded-xl transition-all duration-200 hover:bg-emerald-900/40 hover:text-white hover:shadow-emerald-400/20 shadow;
        }
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
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes bounce-slow {
          0%,100% { transform: translateY(0);}
          50% { transform: translateY(-6px);}
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </nav>
  )
}
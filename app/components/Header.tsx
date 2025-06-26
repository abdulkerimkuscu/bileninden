"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-emerald-400 text-xl font-bold">
              Bileninden
            </Link>
            {/* Masaüstü menü */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/alanlarimiz" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Alanlarımız
              </Link>
              <Link href="/hakkimizda" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Hakkımızda
              </Link>
              <Link href="/iletisim" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                İletişim
              </Link>
            </div>
          </div>
          {/* Boşluk bırakıp butonu sağa yasla */}
          <div className="hidden md:block flex-1"></div>
          <div className="hidden md:block">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg" asChild>
              <Link href="/basvuru">
                Uzman Görüşü Talep Et
              </Link>
            </Button>
          </div>
          {/* Mobil menü butonu */}
          <button
            className="md:hidden text-emerald-400"
            onClick={() => setOpen(!open)}
            aria-label="Menüyü Aç/Kapat"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        {/* Mobil menü */}
        {open && (
          <div className="md:hidden mt-2 bg-gray-900/95 rounded-lg shadow-lg p-4 flex flex-col gap-4">
            <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors" onClick={() => setOpen(false)}>
              Ana Sayfa
            </Link>
            <Link href="/alanlarimiz" className="text-emerald-400 hover:text-emerald-300 transition-colors" onClick={() => setOpen(false)}>
              Alanlarımız
            </Link>
            <Link href="/hakkimizda" className="text-emerald-400 hover:text-emerald-300 transition-colors" onClick={() => setOpen(false)}>
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="text-emerald-400 hover:text-emerald-300 transition-colors" onClick={() => setOpen(false)}>
              İletişim
            </Link>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white w-full" asChild>
              <Link href="/basvuru" onClick={() => setOpen(false)}>
                Uzman Görüşü Talep Et
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
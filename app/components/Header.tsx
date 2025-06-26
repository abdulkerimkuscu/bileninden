import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-emerald-400 text-xl font-bold">
              Bileninden
            </Link>
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
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg" asChild>
            <Link href="/basvuru">
              Uzman Görüşü Talep Et
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
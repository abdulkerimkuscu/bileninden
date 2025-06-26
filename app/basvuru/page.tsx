import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BasvuruPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-white mb-6">Uzman Görüşü Başvuru Formu</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Ad Soyad</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">E-posta</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Telefon</label>
            <input
              type="tel"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Açıklama</label>
            <textarea
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-emerald-400"
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
            Başvuruyu Gönder
          </Button>
        </form>
        <Link href="/" className="block text-emerald-400 mt-6 text-center hover:underline">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  )
}
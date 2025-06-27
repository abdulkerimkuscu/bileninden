import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ContactFab from "./components/ContactFab"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bileninden - Türkiye'nin En Güvenilir Uzman Görüşü Platformu",
  description:
    "Trafik kazası analizleri, kusur tespit raporları ve aktüeryal değerlendirmeler konularında uzman bilirkişilerden profesyonel hizmet alın.",
  keywords: "uzman görüşü, bilirkişi, trafik kazası, kusur tespit, aktüeryal değerlendirme",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <ContactFab />
      </body>
    </html>
  )
}

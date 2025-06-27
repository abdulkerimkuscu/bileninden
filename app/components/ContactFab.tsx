"use client"

import { Phone, Mail, MapPin, MessageCircle, X, Smartphone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { useState } from "react"

export default function ContactFab() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed z-50 right-4 bottom-8 flex flex-col items-center gap-3">
      {open && (
        <div className="flex flex-col items-center gap-3 mb-2 animate-fade-in">
          <a
            href="tel:+90XXXXXXXXXX"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#22345d] shadow-lg hover:scale-110 transition"
            title="Telefon"
          >
            <Phone className="text-white w-6 h-6" />
          </a>
          <a
            href="https://wa.me/90XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition"
            title="WhatsApp"
          >
            <FaWhatsapp className="text-white w-6 h-6" />
          </a>
          <a
            href="https://maps.google.com/?q=Adresiniz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c43aff] shadow-lg hover:scale-110 transition"
            title="Adres"
          >
            <MapPin className="text-white w-6 h-6" />
          </a>
          <a
            href="mailto:info@siteniz.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b82f6] shadow-lg hover:scale-110 transition"
            title="E-posta"
          >
            <Mail className="text-white w-6 h-6" />
          </a>
          <a
            href="sms:+90XXXXXXXXXX"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7c4956] shadow-lg hover:scale-110 transition"
            title="SMS"
          >
            <Smartphone className="text-white w-6 h-6" />
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 via-emerald-700 to-red-500/70 shadow-xl transition-all duration-200 hover:scale-110 animate-fab-pulse`}
        aria-label={open ? "Kapat" : "İletişim Kanalları"}
      >
        {open ? (
          <X className="text-white w-7 h-7" />
        ) : (
          <MessageCircle className="text-white w-7 h-7" />
        )}
      </button>
      <style jsx global>{`
        @keyframes fab-pulse {
          0%, 100% { box-shadow: 0 0 16px 0 #05966944, 0 0 0 0 #fff0; }
          50% { box-shadow: 0 0 32px 8px #05966966, 0 0 0 0 #fff0; }
        }
        .animate-fab-pulse {
          animation: fab-pulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
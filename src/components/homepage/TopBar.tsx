"use client";
import { MapPin, Clock3, Phone, MessageCircle } from "lucide-react";
import { company } from "@/src/data/company";
export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="text-primary text-base shrink-0" />
            {company.address.line1}, {company.address.postcode} {company.address.city}
          </span>
          <span className="hidden md:flex items-center gap-1.5 border-l border-gray-200 pl-6">
            <Clock3 className="text-primary text-base shrink-0" />
            Mon–Fri: 9.00 am – 5.30 pm
          </span>
        </div>

        <div className="hidden md:flex items-center gap-3 text-sm">
          <a
            href={`tel:${company.phones[0].tel}`}
            className="flex items-center gap-1.5 hover:text-primary transition-colors duration-200"
          >
            <Phone size={13} className="text-primary" />
            {company.phones[0].display}
          </a>
          <span className="text-gray-300">|</span>
          <a
            href={`https://wa.me/${company.whatsapp[0].number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary transition-colors duration-200"
          >
            <MessageCircle size={13} className="text-primary" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

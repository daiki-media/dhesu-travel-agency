"use client";
import {
  MapPin,
  Clock3,
  ChevronDown,
  User,
} from "lucide-react";
export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="text-primary text-base shrink-0" />
            45 New Eskaton Road, Austria
          </span>
          <span className="hidden md:flex items-center gap-1.5 border-l border-gray-200 pl-6">
            <Clock3 className="text-primary text-base shrink-0" />
            Sun to Friday: 8.00 am - 7.00 pm
          </span>
        </div>

        <div className="hidden md:flex items-center gap-3 text-sm">
          <button className="flex items-center gap-1 border border-gray-300 rounded px-3 py-1 hover:border-primary hover:text-primary transition-colors duration-200">
            Language <ChevronDown size={13} />
          </button>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-primary transition-colors duration-200">
            FAQ
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-primary transition-colors duration-200">
            Support
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-primary transition-colors duration-200"
          >
            Sign In / Register <User size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

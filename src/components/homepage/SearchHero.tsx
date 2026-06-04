import React from 'react';
import { MapPin, Clock, Banknote, Search, ChevronDown } from 'lucide-react';

export default function SearchHero() {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 bg-gray-50">
      <div className="relative z-20  -mt-[70px] bg-white rounded-xl flex flex-col lg:flex-row items-stretch min-h-[140px] overflow-hidden">

        <div className="flex-1 flex items-center px-8 py-7 border-b lg:border-b-0 lg:border-r border-gray-100 hover:bg-primarydark/10 transition-all cursor-pointer group">
          <div className="bg-blue-400/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
            <MapPin className="text-primary" size={20} />
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
              Destination
            </label>
            <div className="relative flex items-center">
              <select className="bg-transparent w-full font-bold text-gray-800 focus:outline-none appearance-none cursor-pointer pr-6">
                <option>Where are you going?</option>
                <option>Surat Thani, Thailand</option>
                <option>Kyoto, Japan</option>
                <option>Bali, Indonesia</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Duration Selection */}
        <div className="flex-1 flex items-center px-8 py-7 border-b lg:border-b-0 lg:border-r border-gray-100 hover:bg-primarydark/10 transition-all cursor-pointer group">
          <div className="bg-blue-400/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
            <Clock className="text-primary" size={20} />
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
              Duration
            </label>
            <div className="relative flex items-center">
              <select className="bg-transparent w-full font-bold text-gray-800 focus:outline-none appearance-none cursor-pointer pr-6">
                <option>7 Days - 14 Days</option>
                <option>1 - 3 Days</option>
                <option>4 - 6 Days</option>
                <option>Custom Duration</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Budget Selection */}
        <div className="flex-1 flex items-center px-8 py-7 hover:bg-primarydark/10 transition-all cursor-pointer group">
          <div className="bg-blue-400/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
            <Banknote className="text-primary" size={20} />
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
              Average Budget
            </label>
            <div className="relative flex items-center">
              <select className="bg-transparent w-full font-bold text-gray-800 focus:outline-none appearance-none cursor-pointer pr-6">
                <option>$2500 - $5000</option>
                <option>$1000 - $2500</option>
                <option>$5000 - $10000</option>
                <option>Luxury (Unlimited)</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="bg-primary hover:bg-primary-dark text-white px-12 py-7 flex items-center justify-center transition-colors group active:scale-95">
          <span className="font-bold tracking-wider mr-3">SEARCH NOW</span>
          <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
            <Search size={20} className="stroke-[3px]" />
          </div>
        </button>
      </div>
    </div>
  );
}
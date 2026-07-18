"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Clock, Banknote, Search, ChevronDown } from "lucide-react";
import { destinations } from "@/src/data/destinations";

const durations = [
  { label: "Any duration", value: "" },
  { label: "3 Days or less", value: "1-3" },
  { label: "4 - 6 Days", value: "4-6" },
  { label: "7 Days or more", value: "7+" },
];

const budgets = [
  { label: "Any budget", value: "" },
  { label: "Under RM1,000", value: "0-1000" },
  { label: "RM1,000 - RM2,000", value: "1000-2000" },
  { label: "RM2,000 - RM4,000", value: "2000-4000" },
  { label: "RM4,000 and above", value: "4000+" },
];

export default function SearchHero() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");

  function handleSearch() {
    // No destination chosen — send them to the full tours index instead of nowhere.
    if (!destination) {
      router.push("/tours");
      return;
    }
    const params = new URLSearchParams();
    if (duration) params.set("duration", duration);
    if (budget) params.set("budget", budget);
    const query = params.toString();
    router.push(`/tours/${destination}${query ? `?${query}` : ""}`);
  }

  return (
    <div className="w-full max-w-8xl mx-auto px-4 bg-gray-50">
      <div className="relative z-20 -mt-[20px] md:-mt-[70px] bg-white rounded-xl flex flex-col lg:flex-row items-stretch min-h-[140px] overflow-hidden">

        {/* Destination */}
        <div className="flex-1 flex items-center px-8 py-2 md:py-7 border-b lg:border-b-0 lg:border-r border-gray-100 hover:bg-primarydark/10 transition-all group">
          <div className="bg-blue-400/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
            <MapPin className="text-primary" size={20} />
          </div>
          <div className="flex-1">
            <label
              htmlFor="search-destination"
              className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1"
            >
              Destination
            </label>
            <div className="relative flex items-center">
              <select
                id="search-destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-transparent w-full font-bold text-gray-800 focus:outline-none appearance-none cursor-pointer p-4"
              >
                <option value="">Where are you going ?</option>
                {destinations.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="flex-1 flex items-center px-8 py-2 md:py-7 border-b lg:border-b-0 lg:border-r border-gray-100 hover:bg-primarydark/10 transition-all group">
          <div className="bg-blue-400/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
            <Clock className="text-primary" size={20} />
          </div>
          <div className="flex-1">
            <label
              htmlFor="search-duration"
              className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1"
            >
              Duration
            </label>
            <div className="relative flex items-center">
              <select
                id="search-duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="bg-transparent w-full font-bold text-gray-800 focus:outline-none appearance-none cursor-pointer p-4"
              >
                {durations.map((d) => (
                  <option key={d.label} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Budget */}
        <div className="flex-1 flex items-center px-8 py-2 md:py-7 hover:bg-primarydark/10 transition-all group">
          <div className="bg-blue-400/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
            <Banknote className="text-primary" size={20} />
          </div>
          <div className="flex-1">
            <label
              htmlFor="search-budget"
              className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1"
            >
              Average Budget
            </label>
            <div className="relative flex items-center">
              <select
                id="search-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-transparent w-full font-bold text-gray-800 focus:outline-none appearance-none cursor-pointer p-4"
              >
                {budgets.map((b) => (
                  <option key={b.label} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Action */}
        <button
          type="button"
          onClick={handleSearch}
          className="bg-primary hover:bg-primary-dark text-white px-12 py-7 flex items-center justify-center transition-colors group active:scale-95"
        >
          <span className="font-bold tracking-wider mr-3">SEARCH NOW</span>
          <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
            <Search size={20} className="stroke-[3px]" />
          </div>
        </button>
      </div>
    </div>
  );
}

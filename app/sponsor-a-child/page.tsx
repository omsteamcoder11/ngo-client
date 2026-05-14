"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Heart, MapPin, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function SponsorAChild() {
  const [children, setChildren] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetch(`${API_URL}/api/children`)
      .then(res => res.json())
      .then(data => { setChildren(data.children || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = children.filter(c =>
    c.name?.toLowerCase().includes(search.toLowerCase()) ||
    c.location?.toLowerCase().includes(search.toLowerCase())
  );

  const toggleLike = (id: number) => {
    setLiked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#F8F9FC]">
      <div className="w-12 h-12 border-[3px] border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-sm text-gray-400 font-medium tracking-wide">Loading children...</p>
    </div>
  );

  return (
 <div className="min-h-screen bg-[#F8F9FC] pt-[72px] md:pt-[80px]">

      {/* ── HERO HEADER ── */}
   <div className="bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mb-4 bg-blue-50 px-4 py-1.5">
              Make a Difference
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Sponsor a Child
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-500 font-medium leading-relaxed">
              Every child deserves a chance. Your monthly support changes lives forever.
            </p>

            {/* Search */}
            <div className="mt-8 relative max-w-md mx-auto">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 shadow-sm transition-all"
              />
            </div>

            {/* Stats row */}
            <div className="mt-8 flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
              {[
                { label: "Children Waiting", value: children.length },
                { label: "Fully Funded", value: children.filter(c => c.funded >= 100).length },
                { label: "Avg. Monthly Cost", value: `₹${Math.round(children.reduce((a, c) => a + (c.price || 0), 0) / (children.length || 1))}` },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl sm:text-2xl font-black text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="font-bold text-gray-800">{filtered.length}</span> children
          </p>
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors font-medium">
            <SlidersHorizontal size={14} />
            Filter
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-semibold">No children found</p>
            <p className="text-sm mt-1">Try a different search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filtered.map((child: any, index: number) => (
                <motion.div
                  key={child.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-white overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-shadow duration-300 flex flex-col"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={child.image_url || '/children/1.webp'}
                      alt={child.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Waiting badge */}
                    <div className="absolute top-4 left-4 bg-white/90 border border-gray-200 px-3 py-1.5 flex items-center gap-1.5">
                      <Clock size={12} className="text-blue-600" />
                      <span className="text-[10px] font-bold text-gray-800 tracking-wider uppercase">
                        {child.waiting_days} Days
                      </span>
                    </div>

                    {/* Heart button */}
                    <button
                      onClick={() => toggleLike(child.id)}
                      className="absolute top-4 right-4 bg-white/90 border border-gray-200 p-2.5 shadow-sm transition-all duration-200 hover:scale-110 active:scale-95"
                    >
                      <Heart
                        size={16}
                        className={liked.has(child.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-400"}
                      />
                    </button>

                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-xl font-bold text-white drop-shadow-md leading-tight">
                        {child.name}
                      </h2>
                      <div className="flex items-center gap-1 mt-0.5">
                        <MapPin size={11} className="text-white/80" />
                        <span className="text-xs text-white/80 font-medium">
                          {child.age} yrs • {child.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">

                    {/* Progress */}
                    <div className="mb-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          Funding Progress
                        </span>
                        <span className="text-sm font-bold text-blue-600">{child.funded}%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${child.funded}%` }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.07 }}
                          className="h-full"
                          style={{
                            background: child.funded >= 100
                              ? '#22c55e'
                              : child.funded >= 60
                              ? '#3b82f6'
                              : '#60a5fa'
                          }}
                        />
                      </div>
                      {child.funded >= 100 && (
                        <p className="text-xs text-green-600 font-semibold mt-1.5">✓ Fully Funded</p>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                          Monthly Cost
                        </p>
                        <p className="text-xl sm:text-2xl font-black text-gray-900">
                          ₹{child.price}
                          <span className="text-xs font-medium text-gray-400 ml-0.5">/mo</span>
                        </p>
                      </div>

                      <Link
                        href={`/sponsor/${child.id}`}
                        className="flex items-center gap-2 bg-gray-900 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 transition-all duration-200 hover:shadow-lg active:scale-95 group/btn"
                      >
                        Sponsor
                        <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
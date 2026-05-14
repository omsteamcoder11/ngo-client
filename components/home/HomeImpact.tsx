"use client";

import React from 'react';
import { Heart, Globe, Star } from 'lucide-react';

export default function HomeImpact() {
  return (
    <div className="w-full bg-[#eaf6ff] font-sans">

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Creating Impact That Lasts a Lifetime
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">

          {/* CARD 1 */}
          <div
            className="group relative p-6 sm:p-8 text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-2"
            style={{
              background: "#e85c5c",
              borderRadius: "60% 40% 55% 45% / 40% 55% 45% 60%"
            }}
          >
            <div className="mb-6 flex justify-center">
              <Heart size={36} className="text-white" strokeWidth={1.5} />
            </div>

            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              A small help can change a life
            </h4>

            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              Your support can give a child food, safety, and hope. What may feel small to you 
              can completely transform a child’s future forever.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="group relative p-6 sm:p-8 text-center text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-2"
            style={{
              background: "#f4c430",
              borderRadius: "55% 45% 60% 40% / 45% 60% 40% 55%"
            }}
          >
            <div className="mb-6 flex justify-center">
              <Globe size={36} className="text-gray-900" strokeWidth={1.5} />
            </div>

            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              Your support builds their future
            </h4>

            <p className="text-sm sm:text-base leading-relaxed text-gray-800">
              When you sponsor a child, you give them education, care, and the confidence 
              to dream bigger and achieve more in life.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="group relative p-6 sm:p-8 text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-2"
            style={{
              background: "#2aa198",
              borderRadius: "50% 50% 60% 40% / 50% 40% 60% 50%"
            }}
          >
            <div className="mb-6 flex justify-center">
              <Star size={36} className="text-white" strokeWidth={1.5} />
            </div>

            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              Be the reason someone smiles
            </h4>

            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              Your kindness today can create lifelong impact. Help a child grow, learn, 
              and live with dignity and happiness.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}




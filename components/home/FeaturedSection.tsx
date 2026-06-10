"use client";
import React from "react";

export default function FeaturedSection() {
  return (
    <section className="bg-orange-50 py-16 sm:py-20 px-6 sm:px-10 lg:px-20">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div className="text-center lg:text-left">
          
          <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
            <span className="w-2 h-2 inline-block bg-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-600">
              Uthamar Thiru Kovil
            </span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-orange-600">Makal Sevai Margam</span>
            <br />
            Serving God's Children
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            By the blessings of Uthamar Thiru Kovil, Arrakattalai, we are committed 
            to serving the underprivileged through building homes, providing food, 
            and supporting children's education for a brighter tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
            
            <a href="/programs"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-orange-700 transition-colors"
            >
              Our Programs →
            </a>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openSupportModal'))}
              className="inline-flex items-center justify-center gap-2 border border-orange-300 text-orange-600 px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-orange-100 transition-colors"
            >
              Support Us
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
            <img
              src="/home/annadhanam.png"
              alt="Annadhanam - Food service at Makal Sevai Margam serving elders and children"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
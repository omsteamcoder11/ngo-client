"use client";

import React from 'react';

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row bg-[#eaf6ff] overflow-hidden">
      
      {/* LEFT SIDE: EMOTIONAL IMAGE */}
      <div className="relative w-full lg:w-3/5 h-[50vh] lg:h-screen overflow-hidden">
        <img
          src="/kids/1.webp"
          alt="Children smiling"
          className="w-full h-full object-cover object-center"
        />

        {/* SVG Wave */}
        <div className="absolute top-0 right-0 bottom-0 hidden lg:block w-24 overflow-hidden">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 C 50 25 50 75 0 100 L 100 100 L 100 0 Z" fill="#eaf6ff" />
          </svg>
        </div>
      </div>

      {/* RIGHT SIDE: CONTENT */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center px-8 md:px-16 py-12 bg-[#eaf6ff] overflow-hidden">
        
        <div className="space-y-6 max-w-md mx-auto lg:mx-0">
          
          <div className="flex items-center gap-2">
            <span className="w-12 h-[2px] bg-red-500"></span>
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">
              Our Mission
            </span>
          </div>

          <h1 className="text-slate-900 font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
            We Work For <br />
            <span className="relative inline-block mt-2">
              These Smiles!
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-red-100 -z-10 rounded-full"></span>
            </span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Every contribution creates a ripple effect of hope. We provide essential education and healthcare to children who need it most.
          </p>

          {/* IMPACT STATS */}
          <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-black text-slate-900">12k+</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-tighter">Kids Helped</p>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900">45+</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-tighter">Schools Built</p>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-0 md:left-1/2 md:-translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce opacity-20 pointer-events-none">
        <span className="text-[10px] font-bold rotate-90 tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-black"></div>
      </div>

    </section>
  );
}

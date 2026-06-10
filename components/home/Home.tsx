"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';

export default function HomeHero() {
const [visible, setVisible] = useState(true);  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
   <section
  ref={ref}
  className="relative w-full flex flex-col lg:flex-row items-center"
  style={{ background: '#fdf6f0', borderTop: '2px solid #fed7aa', padding: '60px 40px' }}
>

      {/* LEFT — Image */}
    <div
  className="relative w-full lg:w-1/2 h-[500px] overflow-hidden"
  style={{
    borderRadius: '16px',
    transform: visible ? 'translateX(0)' : 'translateX(-60px)',
    opacity: visible ? 1 : 0,
    transition: 'all 0.7s ease',
  }}
>
        <img
          src="/services/education3.jpg"
          alt="Children at Uthamar Thiru Kovil Education Program"
          className="w-full h-full object-cover object-center"
        />

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/10" />

     

        {/* Since badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 shadow-sm">
          <span className="text-sm">🪔</span>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-orange-600">Since 2010</p>
            <p className="text-[8px] text-gray-500">Serving with Faith</p>
          </div>
        </div>
      </div>

      {/* RIGHT — Content */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-12"
        style={{
          background: '#fdf6f0',
          transform: visible ? 'translateX(0)' : 'translateX(60px)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.7s ease 0.2s',
        }}
      >
        <div className="space-y-4 max-w-md mx-auto lg:mx-0">

          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-orange-500" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase">
              Makkal Sevai Margam
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
            Serving Every Soul
            <br />
            <span className="text-orange-600">With Devotion.</span>
          </h1>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed">
            Rooted in the teachings of Vallalar — feeding the hungry,
            building the temple, and uplifting the community through
            selfless seva at Uthamar Thiru Kovil, Arrakattalai.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            {['Annadhanam', 'Temple Construction', 'Education Aid'].map((item) => (
              <span key={item} className="text-xs font-medium text-gray-700">
                • {item}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div>
              <p className="text-2xl font-black text-orange-600">500+</p>
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">
                Lives Touched
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-orange-600">10+</p>
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">
                Years of Seva
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-orange-600">1000+</p>
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">
                Meals Served
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-2">
            
           <a   href="/donate"
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 font-bold text-xs uppercase tracking-wide text-white transition-all hover:opacity-90"
              style={{ background: "#d94f00" }}
            >
              <Heart className="w-3 h-3 fill-white" />
              Offer Seva
            </a>

            
           <a   href="/services"
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 font-bold text-xs uppercase tracking-wide transition-all hover:bg-orange-50"
              style={{ border: "1px solid #d94f00", color: "#d94f00" }}
            >
              Our Services
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-2 pt-2">
            <div className="flex -space-x-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-orange-100 border border-white flex items-center justify-center text-[8px] text-orange-600">
                  ✓
                </div>
              ))}
            </div>
            <p className="text-[9px] text-gray-400">
              Trusted by <span className="font-bold text-orange-600">200+</span> families
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
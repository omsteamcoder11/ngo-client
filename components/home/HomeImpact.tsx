"use client";

import React from 'react';
import { HardHat, UtensilsCrossed, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: HardHat,
    label: "Temple Construction",
    title: "Building the Temple of God",
    desc: "We support the sacred construction and renovation of Uthamar Thiru Kovil — laying every stone as an act of devotion and community service.",
    iconBg: "#d94f00",
    accent: "#d94f00",
  },
  {
    icon: UtensilsCrossed,
    label: "Food Seva",
    title: "Feeding the Hungry",
    desc: "Daily meals served with love to the hungry, the elderly, and those who cannot provide for themselves in our community.",
    iconBg: "#b45309",
    accent: "#b45309",
  },
  {
    icon: HeartHandshake,
    label: "Children Fund",
    title: "Poor Children Fund",
    desc: "Funding education, healthcare, and nutrition for children from the poorest families — giving them a future they deserve.",
    iconBg: "#92400e",
    accent: "#92400e",
  },
];

export default function HomeImpact() {
  return (
    <div
      className="w-full font-sans"
      style={{ background: "#fdf6f0" }}
    >
      {/* Top border line */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #d94f00, #f59e0b, #d94f00, transparent)",
        }}
      />

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #d94f00)" }} />
            <span className="text-lg">🪔</span>
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #d94f00)" }} />
          </div>

          <p
            className="text-[11px] font-black uppercase tracking-[0.35em] mb-3"
            style={{ color: "#d94f00" }}
          >
            What We Do
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#1a1a1a", fontFamily: "Georgia, serif" }}
          >
            Creating Impact That{" "}
            <span style={{ color: "#d94f00" }}>Lasts a Lifetime</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "#888" }}>
            Three focused programs. One mission — to serve God by serving people.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col p-7 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden"
                style={{
                  background: "#fff",
                  border: "1px solid #edd9c8",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: s.iconBg }}
                >
                  <Icon size={22} className="text-white" strokeWidth={1.8} />
                </div>

                {/* Label */}
                <p
                  className="text-[10px] font-black uppercase tracking-widest mb-2"
                  style={{ color: s.accent }}
                >
                  {s.label}
                </p>

                {/* Title */}
                <h4
                  className="text-lg font-bold mb-3 leading-snug"
                  style={{ color: "#1a1a1a", fontFamily: "Georgia, serif" }}
                >
                  {s.title}
                </h4>

                {/* Desc */}
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {s.desc}
                </p>

                {/* Bottom diya */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-px flex-1" style={{ background: "#edd9c8" }} />
                  <span className="text-xs opacity-30">🪔</span>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Bottom border line */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #d94f00, #f59e0b, #d94f00, transparent)",
        }}
      />
    </div>
  );
}
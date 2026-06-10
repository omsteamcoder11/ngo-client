// app/mission/page.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Heart, Utensils, GraduationCap, Eye, Users, Shield, Target, ArrowRight, Quote, Building } from "lucide-react";

export default function MissionPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-60px", once: true });

  const values = [
    { icon: Heart, title: "Compassion", description: "Serving every soul with love, dignity, and divine grace.", number: "01" },
    { icon: Shield, title: "Faith", description: "Rooted in the blessings of Uthamar Thiru Kovil.", number: "02" },
    { icon: Users, title: "Community", description: "Building communities where every voice matters.", number: "03" },
    { icon: Target, title: "Integrity", description: "Transparent and accountable in every action.", number: "04" },
  ];

  const goals = [
    { title: "Temple Construction", desc: "Complete the sacred temple complex for future generations", icon: Building, stat: "1", label: "Temple Project", emoji: "🏛️" },
    { title: "Zero Hunger", desc: "5000+ nutritious meals served annually through Annadhanam", icon: Utensils, stat: "5000+", label: "Meals/Year", emoji: "🍱" },
    { title: "Every Child Educated", desc: "200+ children supported with education aid", icon: GraduationCap, stat: "200+", label: "Children", emoji: "📚" },
  ];

  const stats = [
    { value: "2010", label: "Founded", icon: "🪔" },
    { value: "500+", label: "Lives Touched", icon: "🙏" },
    { value: "1000+", label: "Meals Served", icon: "🍱" },
    { value: "10+", label: "Years of Seva", icon: "🏗️" },
  ];

  return (
    <main ref={ref} className="min-h-screen overflow-x-hidden" style={{ background: "#fdf6f0" }}>

      {/* ── HERO ── */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#fff8f3", borderBottom: "1px solid #edd9c8" }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(234,88,12,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(234,88,12,0.08)", border: "1px solid rgba(234,88,12,0.2)" }}
          >
            <span>🪔</span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: "#ea580c" }}>
              Uthamar Thiru Kovil · Arrakattalai
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bold text-gray-900"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1.1, fontFamily: "Georgia, serif" }}
          >
            Our Mission &{" "}
            <span style={{ color: "#ea580c", fontStyle: "italic" }}>Vision</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ width: 56, height: 3, background: "linear-gradient(90deg,#ea580c,#d97706)", borderRadius: 2, margin: "16px auto" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "#92400e", fontSize: "1rem", lineHeight: 1.7, fontWeight: 500 }}
          >
            Faith-driven compassion — feeding the hungry, building the temple, and uplifting the community through selfless seva since 2010.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "#fff", border: "1px solid #edd9c8", boxShadow: "0 2px 8px rgba(234,88,12,0.06)" }}>
                <span className="text-sm">{s.icon}</span>
                <span className="font-black text-sm" style={{ color: "#ea580c" }}>{s.value}</span>
                <span className="text-[10px] uppercase tracking-wider" style={{ color: "#92400e" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/donate"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all hover:opacity-90"
              style={{ background: "#ea580c", color: "white", boxShadow: "0 4px 16px rgba(234,88,12,0.35)" }}
            >
              <Heart className="w-4 h-4 fill-current" /> Offer Seva
            </Link>
            <Link href="/volunteer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all hover:bg-orange-50"
              style={{ border: "1.5px solid rgba(234,88,12,0.3)", color: "#ea580c" }}
            >
              Volunteer <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-16" style={{ background: "#fdf6f0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: "#ea580c" }}>Who We Are</p>
            <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontFamily: "Georgia, serif" }}>
              Driven by Purpose, <span style={{ color: "#ea580c", fontStyle: "italic" }}>Guided by Faith</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8"
              style={{ background: "#fff", border: "1px solid #edd9c8", boxShadow: "0 4px 24px rgba(234,88,12,0.06)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(234,88,12,0.1)" }}>
                  <Heart className="w-5 h-5" style={{ color: "#ea580c" }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "#ea580c" }}>Mission</p>
                  <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "Georgia, serif" }}>What We Do</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-[1.8] text-sm">
                To serve poor and needy communities through{" "}
                <strong style={{ color: "#c2410c" }}>building the sacred temple</strong>, providing daily Annadhanam meals, and{" "}
                <strong style={{ color: "#c2410c" }}>supporting education</strong> for underprivileged children — rooted in the spiritual blessings of Uthamar Thiru Kovil, Arrakattalai.
              </p>
              <div className="mt-5 pt-4 flex items-center gap-2" style={{ borderTop: "1px solid #edd9c8" }}>
                <span>🪔</span>
                <p className="text-xs italic" style={{ color: "#92400e" }}>"Service to humanity is service to God"</p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{ background: "#fff8f3", border: "1px solid #edd9c8", boxShadow: "0 4px 24px rgba(234,88,12,0.06)" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(234,88,12,0.08) 0%, transparent 70%)" }} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(234,88,12,0.1)", border: "1px solid rgba(234,88,12,0.15)" }}>
                    <Eye className="w-5 h-5" style={{ color: "#ea580c" }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "#ea580c" }}>Vision</p>
                    <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "Georgia, serif" }}>The World We Seek</h3>
                  </div>
                </div>
                <p className="leading-[1.8] text-sm text-gray-600">
                  A world where <span style={{ color: "#ea580c", fontWeight: 700 }}>no one goes hungry</span>, the sacred temple stands as a beacon of faith, and every community thrives through compassion and{" "}
                  <span style={{ color: "#ea580c", fontWeight: 700 }}>selfless seva</span> — rooted in the teachings of Vallalar.
                </p>
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid #edd9c8" }}>
                  <p className="text-xs italic" style={{ color: "#92400e" }}>"Rooted in the teachings of Vallalar — love and service above all."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: "#ea580c" }}>What We Stand For</p>
            <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontFamily: "Georgia, serif" }}>
              Our Core <span style={{ color: "#ea580c", fontStyle: "italic" }}>Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(234,88,12,0.14)" }}
                  className="relative group rounded-2xl p-6 cursor-pointer transition-all duration-300 overflow-hidden"
                  style={{ background: "#fdf6f0", border: "1px solid #edd9c8" }}
                >
                  <span className="absolute top-3 right-4 font-black opacity-[0.06] select-none"
                    style={{ fontSize: "2.5rem", color: "#ea580c", lineHeight: 1 }}>
                    {value.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(234,88,12,0.1)", border: "1px solid rgba(234,88,12,0.12)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#ea580c" }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1.5" style={{ fontFamily: "Georgia, serif" }}>{value.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
                  <div className="mt-4 w-6 h-0.5 rounded-full transition-all duration-300 group-hover:w-full" style={{ background: "#ea580c" }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GOALS ── */}
      <section className="py-16" style={{ background: "#fdf6f0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: "#ea580c" }}>Our Commitment</p>
            <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontFamily: "Georgia, serif" }}>
              Goals by <span style={{ color: "#ea580c", fontStyle: "italic" }}>2030</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {goals.map((goal, idx) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl overflow-hidden"
                  style={{ background: "#fff", border: "1px solid #edd9c8", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                >
                  <div className="h-1" style={{ background: "linear-gradient(to right, #ea580c, #f97316)" }} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(234,88,12,0.08)" }}>
                        <Icon className="w-5 h-5" style={{ color: "#ea580c" }} />
                      </div>
                      <span className="text-2xl">{goal.emoji}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: "Georgia, serif" }}>{goal.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-5">{goal.desc}</p>
                    <div className="rounded-xl px-4 py-3 flex items-center justify-between"
                      style={{ background: "#fff8f3", border: "1px solid #edd9c8" }}>
                      <p className="font-black text-2xl" style={{ color: "#ea580c" }}>{goal.stat}</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "#92400e" }}>{goal.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

 

      {/* ── CTA ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: "#ea580c" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at 10% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="text-4xl block mb-4">🪔</span>
            <p className="text-orange-200 text-[11px] font-bold tracking-[0.28em] uppercase mb-3">Be Part of the Mission</p>
            <h2 className="font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontFamily: "Georgia, serif", lineHeight: 1.15 }}>
              Join Our Sacred Mission of Seva
            </h2>
            <p className="text-orange-100 mb-8 leading-relaxed" style={{ fontSize: "0.95rem" }}>
              Help transform lives through faith, compassion, and the spirit of Makkal Sevai Margam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/donate"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all hover:scale-105"
                style={{ background: "white", color: "#ea580c", boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
              >
                <Heart className="w-4 h-4 fill-current" /> Offer Seva
              </Link>
              <Link href="/volunteer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all hover:bg-white/10"
                style={{ border: "2px solid rgba(255,255,255,0.5)", color: "white" }}
              >
                Volunteer With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
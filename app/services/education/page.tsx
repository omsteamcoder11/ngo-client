// app/services/education/page.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Heart, ArrowRight, BookOpen, GraduationCap, Users, Star } from "lucide-react";

const STATS = [
  { value: "500+", label: "Children Helped",  icon: "📚" },
  { value: "10+",  label: "Years Active",      icon: "🪔" },
  { value: "100%", label: "Goes to Cause",     icon: "🙏" },
  { value: "Free", label: "For All Children",  icon: "✨" },
];

const WHAT_WE_PROVIDE = [
  { icon: BookOpen,       title: "Books & Supplies", desc: "We provide textbooks, notebooks, pens and all necessary school supplies to underprivileged children every year." },
  { icon: GraduationCap,  title: "School Fees",      desc: "We cover school fees for children from poor families who cannot afford basic education costs." },
  { icon: Users,          title: "Tuition Support",  desc: "Extra tuition and coaching support is provided to help children perform better academically." },
  { icon: Star,           title: "Merit Awards",     desc: "Outstanding students are recognized and rewarded to encourage excellence and inspire others." },
];

export default function EducationPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <main ref={ref} className="min-h-screen overflow-x-hidden" style={{ background: "#fdf6f0" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{
        background: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
        borderBottom: "1px solid rgba(234,88,12,0.2)",
        paddingTop: 100,
      }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              <span>📚</span>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                Education Aid
              </span>
            </div>

            <h1 className="font-black text-white mb-4 uppercase tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", lineHeight: 1.1 }}>
              Lighting the Lamp of{" "}
              <span style={{ color: "#fbbf24" }}>Knowledge</span>
            </h1>

            <div style={{ width: 56, height: 3, background: "#fbbf24", borderRadius: 2, marginBottom: 20 }} />

            <p className="mb-8 text-white/80" style={{ fontSize: "1rem", lineHeight: 1.8, fontWeight: 500, maxWidth: 580 }}>
              Rooted in the teachings of Vallalar — we believe every child deserves
              the right to education. Uthamar Thiru Kovil Arrakattalai Makkal Sevai Margam
              supports underprivileged children with school fees, books, and supplies
              across Arrakattalai and surrounding villages in Tamil Nadu.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["School Fees", "Books & Supplies", "Tuition Support", "Merit Awards"].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
                  • {item}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="/donate"
                className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm uppercase tracking-wide transition-all hover:scale-105"
                style={{ background: "white", color: "#ea580c", borderRadius: 100, boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}>
                <Heart className="w-4 h-4 fill-current" /> Support a Child
              </Link>
              <Link href="/volunteer"
                className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm uppercase tracking-wide transition-all hover:bg-white/10"
                style={{ border: "2px solid rgba(255,255,255,0.4)", color: "white", borderRadius: 100 }}>
                Volunteer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div style={{ height: 4, background: "#fbbf24" }} />
      </section>

      {/* ── STATS ── */}
      <section className="py-12" style={{ background: "#fff8f3" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.08 }}
                className="text-center rounded-2xl py-6 px-4"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(234,88,12,0.12)",
                  boxShadow: "0 2px 8px rgba(234,88,12,0.06)",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#ea580c,#d97706)" }} />
                <span className="text-2xl block mb-2">{stat.icon}</span>
                <p className="font-black text-2xl" style={{ color: "#ea580c" }}>{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest mt-1 font-semibold" style={{ color: "#92400e" }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE ── */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: "#ea580c" }}>What We Offer</p>
            <h2 className="font-black text-gray-900 uppercase tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              How We <span style={{ color: "#ea580c" }}>Support Children</span>
            </h2>
            <div style={{ width: 48, height: 3, background: "linear-gradient(90deg,#ea580c,#d97706)", borderRadius: 2, margin: "14px auto 0" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-orange-100">
            {WHAT_WE_PROVIDE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.08 }}
                  className="border-r border-b border-orange-100 p-6 md:p-8 bg-white hover:bg-orange-50 transition-colors duration-200"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(234,88,12,0.08)", border: "1px solid rgba(234,88,12,0.12)" }}>
                    <Icon className="w-6 h-6" style={{ color: "#ea580c" }} />
                  </div>
                  <h3 className="font-black text-gray-900 uppercase tracking-tight text-sm mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW TO HELP ── */}
      <section className="py-16" style={{ background: "#fff8f3" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: "#ea580c" }}>Get Involved</p>
            <h2 className="font-black text-gray-900 uppercase tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              How You Can <span style={{ color: "#ea580c" }}>Help</span>
            </h2>
            <div style={{ width: 48, height: 3, background: "linear-gradient(90deg,#ea580c,#d97706)", borderRadius: 2, margin: "14px auto 0" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-orange-100">
            {[
              {
                emoji: "💰", title: "Donate",
                desc: "Your donation directly funds school fees, books, and supplies for one child for an entire year. 100% goes to the cause.",
                btn: "Donate Now", href: "/donate",
              },
              {
                emoji: "🤝", title: "Volunteer",
                desc: "Teach, tutor, or mentor children in our community across Arrakattalai. Your time and knowledge makes a lasting difference.",
                btn: "Volunteer With Us", href: "/volunteer",
              },
              {
                emoji: "🎯", title: "Sponsor a Child",
                desc: "Sponsor one child's complete education for a year — school fees, books, uniform and supplies fully covered.",
                btn: "Sponsor Now", href: "/sponsor-form",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="border-r border-b border-orange-100 p-6 md:p-8 bg-white hover:bg-orange-50 transition-colors duration-200"
              >
                <span className="text-4xl font-black text-orange-100 leading-none block mb-4"
                  style={{ fontFamily: "monospace" }}>
                  0{idx + 1}
                </span>
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <h3 className="font-black text-gray-900 uppercase tracking-tight text-sm mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <Link href={item.href}
                  className="inline-flex items-center gap-2 border border-orange-300 text-orange-600 px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-orange-100 transition-colors">
                  {item.btn} <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ background: "#ea580c" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
            <span className="text-4xl block mb-4">🙏</span>
            <p className="text-orange-200 text-[11px] font-black tracking-[0.28em] uppercase mb-3">
              Uthamar Thiru Kovil Arrakattalai
            </p>
            <h2 className="font-black text-white uppercase tracking-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.1 }}>
              Help a Child Learn Today
            </h2>
            <div style={{ width: 48, height: 3, background: "#fbbf24", borderRadius: 2, margin: "0 auto 20px" }} />
            <p className="text-orange-100 mb-8 leading-relaxed" style={{ fontSize: "0.95rem", maxWidth: 480, margin: "0 auto 32px" }}>
              Every rupee you donate goes directly to a child's education in Arrakattalai,
              Tamil Nadu. Be the reason a child smiles today and succeeds tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/donate"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-black text-xs uppercase tracking-widest transition-all hover:bg-orange-50"
                style={{ background: "white", color: "#ea580c" }}>
                <Heart className="w-4 h-4 fill-current" /> Donate Now →
              </Link>
              <Link href="/sponsor-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-black text-xs uppercase tracking-widest transition-all hover:bg-white/10"
                style={{ border: "2px solid rgba(255,255,255,0.4)", color: "white" }}>
                Sponsor a Child <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div style={{ height: 4, background: "#fbbf24", marginTop: 48 }} />
      </section>

    </main>
  );
}
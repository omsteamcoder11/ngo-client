"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Calendar, ArrowRight, CheckCircle2, Heart } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function StoriesPage() {
  const stories = [
    {
      name: "Priya",
      location: "Delhi Slum Community",
      since: 2018,
      story: "When Priya joined our program at age 9, she had never attended school. Today, she is a confident 16-year-old who dreams of becoming a teacher. With educational support and mentorship, she now leads her school's science club and helps younger children with their studies.",
      image: "👧",
      impact: "Now in 10th grade, first in her family to attend secondary school.",
    },
    {
      name: "Rahul",
      location: "Rural Maharashtra",
      since: 2015,
      story: "Rahul's family struggled to afford his education after his father's illness. Our sponsorship provided school fees, books, and vocational training. Today, Rahul works as a computer technician and supports his family, breaking the cycle of poverty.",
      image: "👦",
      impact: "Employed as a technician, earning a stable income.",
    },
    {
      name: "Sunita",
      location: "Urban Chennai",
      since: 2019,
      story: "Sunita was at risk of dropping out of school to help her mother with domestic work. Through our health and education programs, she received nutritional support and after-school tutoring. She now aspires to become a nurse and volunteers at a local health camp.",
      image: "👧",
      impact: "Completed 10th grade with distinction, now pursuing nursing.",
    },
    {
      name: "Amit",
      location: "Mumbai Slum",
      since: 2020,
      story: "Amit's family lived in a one-room home with no electricity. With sponsorship, he gained access to digital literacy classes and life skills workshops. He now helps his mother run a small tailoring business using the computer skills he learned.",
      image: "👦",
      impact: "Started small business with family, earning extra income.",
    },
    {
      name: "Kavita",
      location: "West Bengal Village",
      since: 2017,
      story: "Kavita was forced to work in the fields to support her family. Our program enrolled her in school and provided her with educational materials. Today, she is the first girl in her village to attend college and wants to become a social worker.",
      image: "👧",
      impact: "Currently in college, inspiring other girls in her community.",
    },
    {
      name: "Vijay",
      location: "Hyderabad Urban",
      since: 2021,
      story: "Vijay faced bullying and had low self‑esteem. Our empowerment programs helped him build confidence through sports and group activities. He now leads a youth group that organizes community clean‑up drives and study circles.",
      image: "👦",
      impact: "Young leader, actively involved in community service.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="py-14 md:py-20 px-4 sm:px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-flex items-center gap-2 text-[#7B1F3A] font-semibold tracking-widest uppercase text-xs mb-5 bg-[#7B1F3A]/5 px-4 py-1.5 rounded-full border border-[#7B1F3A]/10">
              <Sparkles size={11} /> The Power of your Support
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              Stories of <span className="text-[#7B1F3A]">Change.</span>
            </h1>
            <div className="mx-auto w-12 h-0.5 rounded-full bg-[#2E7D5E] mb-5" />
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Every child has a unique journey. With your support, children across
              India are breaking free from poverty and building brighter futures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORIES GRID */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          >
            {stories.map((story) => (
              <motion.div
                key={story.name}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-[#7B1F3A]/20 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl border border-gray-100 flex-shrink-0">
                    {story.image}
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#7B1F3A]">
                      {story.name}
                    </h2>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-0.5">
                      <MapPin size={10} /> {story.location}
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 bg-[#2E7D5E]/5 px-3 py-1 rounded-full border border-[#2E7D5E]/10 flex-shrink-0">
                    <Calendar size={9} className="text-[#2E7D5E]" />
                    <span className="text-[10px] font-bold text-[#2E7D5E] uppercase tracking-wider">
                      Since {story.since}
                    </span>
                  </div>
                </div>

                {/* Story */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                  {story.story}
                </p>

                {/* Impact */}
                <div className="bg-[#7B1F3A]/5 border border-[#7B1F3A]/10 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={13} className="text-[#2E7D5E] flex-shrink-0" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tangible Impact</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 leading-snug">
                    {story.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50 border-t border-gray-100">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center">
          <Heart className="text-[#7B1F3A] mx-auto mb-4" size={32} fill="#7B1F3A" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Write the <span className="text-[#2E7D5E]">Next Story.</span>
          </h2>
          <div className="mx-auto w-10 h-0.5 rounded-full bg-[#7B1F3A] mb-5" />
          <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Every child deserves a chance to succeed. Your support – whether
            through sponsorship or donation – makes these transformations possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sponsor-a-child"
              className="inline-flex items-center justify-center gap-2 bg-[#7B1F3A] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#6A1831] transition-all shadow-md group"
            >
              Sponsor a Child
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-7 py-3.5 rounded-xl font-bold text-sm border border-gray-200 hover:border-[#7B1F3A]/30 hover:shadow-sm transition-all"
            >
              Make a Donation
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FOOTER NOTE */}
      <section className="py-8 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-xs leading-relaxed max-w-2xl mx-auto">
            Names and details may be changed to protect privacy. All stories are
            real and reflect the verified impact of our digital and ground programs.
          </p>
          <div className="w-10 h-0.5 bg-[#2E7D5E] mx-auto mt-4 rounded-full" />
        </div>
      </section>

    </main>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Quote, 
  CheckCircle2, 
  Heart 
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } // ❌
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function StoriesPage() {
  const stories = [
    {
      name: "Priya",
      location: "Delhi Slum Community",
      since: 2018,
      story:
        "When Priya joined our program at age 9, she had never attended school. Today, she is a confident 16-year-old who dreams of becoming a teacher. With educational support and mentorship, she now leads her school's science club and helps younger children with their studies.",
      image: "👧",
      impact: "Now in 10th grade, first in her family to attend secondary school.",
    },
    {
      name: "Rahul",
      location: "Rural Maharashtra",
      since: 2015,
      story:
        "Rahul's family struggled to afford his education after his father's illness. Our sponsorship provided school fees, books, and vocational training. Today, Rahul works as a computer technician and supports his family, breaking the cycle of poverty.",
      image: "👦",
      impact: "Employed as a technician, earning a stable income.",
    },
    {
      name: "Sunita",
      location: "Urban Chennai",
      since: 2019,
      story:
        "Sunita was at risk of dropping out of school to help her mother with domestic work. Through our health and education programs, she received nutritional support and after-school tutoring. She now aspires to become a nurse and volunteers at a local health camp.",
      image: "👧",
      impact: "Completed 10th grade with distinction, now pursuing nursing.",
    },
    {
      name: "Amit",
      location: "Mumbai Slum",
      since: 2020,
      story:
        "Amit's family lived in a one-room home with no electricity. With sponsorship, he gained access to digital literacy classes and life skills workshops. He now helps his mother run a small tailoring business using the computer skills he learned.",
      image: "👦",
      impact: "Started small business with family, earning extra income.",
    },
    {
      name: "Kavita",
      location: "West Bengal Village",
      since: 2017,
      story:
        "Kavita was forced to work in the fields to support her family. Our program enrolled her in school and provided her with educational materials. Today, she is the first girl in her village to attend college and wants to become a social worker.",
      image: "👧",
      impact: "Currently in college, inspiring other girls in her community.",
    },
    {
      name: "Vijay",
      location: "Hyderabad Urban",
      since: 2021,
      story:
        "Vijay faced bullying and had low self‑esteem. Our empowerment programs helped him build confidence through sports and group activities. He now leads a youth group that organizes community clean‑up drives and study circles.",
      image: "👦",
      impact: "Young leader, actively involved in community service.",
    },
  ];

  return (
    <main className="bg-white min-h-screen selection:bg-blue-600/10">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 bg-[#F8FAFC] overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-flex items-center gap-2 text-blue-600 font-black tracking-[0.4em] uppercase text-[10px] mb-6 bg-blue-50 px-5 py-2 rounded-full border border-blue-100">
              <Sparkles size={12} /> The Power of your Support
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-gray-900 tracking-tighter leading-[0.85] mb-8 uppercase italic">
              Stories <br /> of <span className="text-blue-600 not-italic">Change.</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Every child has a unique journey. With your support, children across
              India are breaking free from poverty and building brighter futures.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Grid */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30 -z-0" />
      </section>

      {/* --- STORIES GRID --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {stories.map((story, i) => (
              <motion.div
                key={story.name}
                variants={fadeInUp}
                className="group bg-white rounded-[3rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-50 flex flex-col relative overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[5rem] -z-0 group-hover:scale-110 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-5xl shadow-inner border border-white">
                        {story.image}
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic">
                          {story.name}
                        </h2>
                        <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1">
                          <MapPin size={12} className="text-blue-600" /> {story.location}
                        </div>
                      </div>
                    </div>
                    <Quote className="text-blue-100 hidden sm:block" size={48} />
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                      <Calendar size={12} /> Since {story.since}
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8 flex-grow">
                    {story.story}
                  </p>

                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-[2rem] text-white shadow-xl shadow-blue-600/20 group-hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 size={16} className="text-blue-200" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Tangible Impact</span>
                    </div>
                    <p className="text-sm md:text-base font-bold leading-snug">
                      {story.impact}
                    </p>
                  </div>

                  <a
                    href={`/stories/${story.name.toLowerCase()}`}
                    className="inline-flex items-center gap-2 mt-8 text-gray-900 font-black uppercase tracking-widest text-[11px] group-hover:gap-4 transition-all"
                  >
                    Read Full Story <ArrowRight size={16} className="text-blue-600" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- IMPACT SUMMARY / CTA --- */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="bg-[#0B0F19] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
            
            <div className="relative z-10">
              <Heart className="text-[#8B235E] mx-auto mb-8 animate-pulse" size={48} fill="#8B235E" />
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                Write the <br /> <span className="text-blue-500 italic">Next Story.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
                Every child deserves a chance to succeed. Your support – whether
                through sponsorship or donation – makes these transformations possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/sponsor"
                  className="bg-blue-600 text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30"
                >
                  Sponsor a Child
                </a>
                <a
                  href="/donate"
                  className="bg-white/5 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all"
                >
                  Make a Donation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER NOTE --- */}
      <footer className="border-t border-gray-100 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.4em] max-w-2xl mx-auto leading-loose">
            Names and details may be changed to protect privacy. All stories are
            real and reflect the verified impact of our digital and ground programs.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
        </div>
      </footer>
    </main>
  );
}




"use client";

import React from "react";
import { motion } from "framer-motion";
import { Metadata } from "next";
import { 
  Home, 
  Heart, 
  MapPin, 
  Mail, 
  ChevronRight, 
  Users, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] as [number, number, number, number] }
};

export default function SponsorPage() {
  return (
    <main className="bg-white overflow-x-hidden selection:bg-blue-600/10">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] py-24 md:py-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-flex items-center gap-2 text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-6 bg-blue-50 px-4 py-2 rounded-full">
              <Sparkles size={12} /> Empowering India's Future
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8 uppercase">
              How <span className="text-blue-600">Sponsorship</span> <br /> Works
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto">
              Your monthly gift changes everything. A personal commitment to impact.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 inline-block bg-gray-900 text-white text-3xl md:text-5xl font-black px-12 py-6 rounded-[2rem] shadow-2xl shadow-blue-900/20 italic"
            >
              ₹1,500 <span className="text-sm not-italic font-bold text-gray-400 uppercase tracking-widest ml-2">/ month</span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:30px_30px] opacity-40 -z-0" />
      </section>

      {/* --- THREE PILLARS --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p {...fadeInUp} className="text-sm font-black text-gray-400 uppercase tracking-[0.4em] mb-16">
            Your ₹1,500 monthly gift supports
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard 
              icon={<Home size={32} />}
              title="A Safe Place"
              desc="Community centers across India where children receive life‑changing support, from education to health care."
            />
            <PillarCard 
              icon={<Users size={32} />}
              title="A Caring Team"
              desc="Dedicated local staff and volunteers who understand the challenges children face in their own communities."
            />
            <PillarCard 
              icon={<MapPin size={32} />}
              title="A Path Out"
              desc="Programs focused on health, education, and job readiness – tailored specifically to India’s unique needs."
            />
          </div>

          <motion.div {...fadeInUp} className="mt-20">
            <a
              href="/sponsor/choose"
              className="group inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 active:scale-95"
            >
              Become a sponsor <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- TRANSFORM A LIFE + PERSONAL CONNECTION --- */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-none">
                Help a child <br /> <span className="text-blue-600">transform</span> her life
              </h2>
              <div className="space-y-6 text-gray-600 text-lg font-medium leading-relaxed">
                <p>
                  When you sponsor a child, your monthly gift of ₹1,500 provides access to essential benefits like medical checkups, educational support, and career guidance.
                </p>
                <p className="border-l-4 border-blue-600 pl-6 italic text-gray-900 font-bold">
                  You become a partner in breaking the cycle of poverty for one child – and through them, their entire family.
                </p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-600/20">
                  <Mail size={32} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 uppercase italic tracking-tighter mb-6">
                  A personal connection
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed text-lg">
                  Watch your sponsored child grow through letters, photos, and annual updates. You can even plan a visit to see our programs in action.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- IMPACT STAT --- */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="bg-gray-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20"
          >
            <div className="absolute inset-0 bg-blue-600/5" />
            <div className="relative z-10">
              <div className="text-5xl md:text-[7rem] font-black text-blue-500 mb-6 tracking-tighter leading-none italic">
                1 in 5
              </div>
              <p className="text-2xl md:text-4xl text-white font-bold tracking-tight mb-8">
                Children in India live in <br className="hidden md:block" /> multidimensional poverty.
              </p>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
              <p className="text-gray-400 mt-8 font-medium uppercase tracking-widest text-sm">
                Your sponsorship gives them the tools to break free.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-16 uppercase italic tracking-tighter">
            Common <span className="text-blue-600">Questions</span>
          </motion.h2>
          
          <div className="space-y-6">
            <FAQCard 
              question="Where does ChildSave work?"
              answer="Currently, we focus on underserved communities across India, including urban slums and rural villages. Our programs are tailored to local needs."
              link="/where-we-work"
              linkText="See our locations"
            />
            <FAQCard 
              question="Is this a monthly commitment?"
              answer="Yes, it’s ₹1,500 a month. You can sponsor for as long as you like, and you're free to cancel anytime through your dashboard."
              link="/sponsor/choose"
              linkText="Start today"
            />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-white text-center px-4 relative overflow-hidden">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto relative z-10">
          <h3 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-none">
            Ready to make a <span className="text-blue-600 text-outline-blue">Difference?</span>
          </h3>
          <p className="text-gray-500 text-xl font-medium mb-12 max-w-xl mx-auto">
            Join the movement. Start your sponsorship journey and change a life forever.
          </p>
          <a
            href="/sponsor/choose"
            className="inline-block bg-blue-600 text-white px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-sm hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/40 active:scale-95"
          >
            Sponsor a Child Now
          </a>
        </motion.div>
        
        {/* Subtle Background Text */}
        <div className="absolute bottom-0 left-0 md:left-1/2 md:-translate-x-1/2 translate-y-1/2 text-[15rem] font-black text-gray-50 select-none -z-0">
          CHILDSAVE
        </div>
      </section>
    </main>
  );
}

// Sub-components for clean architecture
function PillarCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      {...fadeInUp}
      className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 group text-center"
    >
      <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-gray-900 uppercase italic tracking-tighter mb-4">{title}</h3>
      <p className="text-gray-500 font-medium leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
}

function FAQCard({ question, answer, link, linkText }: { question: string, answer: string, link: string, linkText: string }) {
  return (
    <motion.div 
      {...fadeInUp}
      className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight uppercase italic">{question}</h3>
      <p className="text-gray-600 font-medium leading-relaxed mb-4">{answer}</p>
      <a href={link} className="inline-flex items-center gap-1 text-blue-600 font-black uppercase tracking-widest text-[10px] hover:gap-2 transition-all">
        {linkText} <ChevronRight size={14} />
      </a>
    </motion.div>
  );
}




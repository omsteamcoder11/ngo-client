"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Sparkles,
  Heart,
  History
} from "lucide-react";
import Link from "next/link";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function WhereWeWorkPage() {
  const countries = [
    { name: "Colombia", since: 1980, image: "🇨🇴", description: "Empowering children to conquer poverty and systemic lack of opportunity in urban and rural sectors." },
    { name: "Dominican Republic", since: 1983, image: "🇩🇴", description: "Working to overcome educational disparities and social challenges in high-density poverty areas." },
    { name: "Ecuador", since: 1988, image: "🇪🇨", description: "Providing skills and resources to break generational poverty cycles for over 70% of vulnerable youth." },
    { name: "Guatemala", since: 1979, image: "🇬🇹", description: "Creating safe spaces and providing essential healthcare and schooling in the 'Land of Eternal Spring'." },
    { name: "Honduras", since: 1984, image: "🇭🇳", description: "Fighting high crime and dropout rates with robust educational and vocational training programs." },
    { name: "India", since: 1980, image: "🇮🇳", description: "Focused on youth empowerment and essential healthcare access across underserved regional communities." },
    { name: "Mexico", since: 2004, image: "🇲🇽", description: "Navigating urban employment challenges in Jalisco to provide stable futures for uneducated adults." },
    { name: "Philippines", since: 1979, image: "🇵🇭", description: "Increasing health and job opportunities across 7,000+ islands to meet basic family needs." },
    { name: "Zambia", since: 2004, image: "🇿🇲", description: "Providing comprehensive health and dental care where 60% of the population lives below the poverty line." },
    { name: "United States", since: 1994, region: "Little Rock, AR", image: "🇺🇸", description: "Partnering with 30+ organizations to tackle child-poverty rates through community-based programs." },
  ];

  return (
    <main className="bg-white min-h-screen selection:bg-[#009270]/10">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 bg-[#F8F9F8] overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-flex items-center gap-2 text-[#8B235E] font-black tracking-[0.4em] uppercase text-[10px] mb-6 bg-[#8B235E]/5 px-5 py-2 rounded-full border border-[#8B235E]/10">
              <Globe size={12} className="animate-pulse" /> Global Footprint
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-[#2D2D2D] tracking-tighter leading-[0.85] mb-8 uppercase italic">
              Where we <br /> <span className="text-[#009270] not-italic">Deliver Help.</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              ChildSave changes lives in 10 countries. We focus on areas of dense poverty 
              to deliver the greatest impact with effective resources.
            </p>
          </motion.div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#009270]/5 rounded-full blur-3xl" />
      </section>

      {/* --- COUNTRY DIRECTORY GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {countries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </motion.div>
      </section>

      {/* --- LEGACY SECTION --- */}
      <section className="py-24 px-6 bg-[#2D2D2D] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <History className="text-[#009270] mx-auto mb-8" size={48} />
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              A Legacy of <span className="text-[#009270]">Hope.</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed mb-12">
              Our anniversary reflects decades dedicated to helping families realize 
              better lives. We are grateful for the global community that makes this 
              impact possible.
            </p>
            <div className="w-24 h-1 bg-[#009270] mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 px-6">
        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center bg-[#F8F9F8] rounded-[4rem] p-12 md:p-24 border border-gray-100 shadow-2xl shadow-gray-100 relative"
        >
          <div className="absolute top-10 right-10 opacity-10">
            <Sparkles size={80} className="text-[#009270]" />
          </div>
          <Heart className="text-[#8B235E] mx-auto mb-8 fill-[#8B235E]" size={48} />
          <h3 className="text-4xl md:text-6xl font-black text-[#2D2D2D] mb-8 uppercase italic tracking-tighter leading-none">
            Join the <br /> <span className="text-[#009270]">Movement.</span>
          </h3>
          <p className="text-gray-500 text-xl font-medium mb-12 max-w-xl mx-auto">
            Your support helps children in these specific communities break free 
            from the cycle of poverty.
          </p>
          <Link
            href="/sponsor"
            className="inline-flex items-center gap-3 bg-[#2D2D2D] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#009270] transition-all shadow-xl shadow-gray-200 group"
          >
            Sponsor a Child <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

/* --- REUSABLE COMPONENTS --- */

function CountryCard({ country }: { country: any }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-100 hover:border-[#009270]/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-16 h-16 bg-[#F8F9F8] rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-500">
          {country.image}
        </div>
        <div className="bg-[#009270]/5 px-4 py-1.5 rounded-full border border-[#009270]/10">
           <span className="text-[9px] font-black text-[#009270] uppercase tracking-widest flex items-center gap-2">
            <Calendar size={10} /> Since {country.since}
           </span>
        </div>
      </div>

      <h2 className="text-3xl font-black text-[#2D2D2D] uppercase italic tracking-tighter mb-2 group-hover:text-[#009270] transition-colors">
        {country.name}
      </h2>
      
      {country.region && (
        <div className="flex items-center gap-1.5 mb-4 text-[#8B235E]">
          <MapPin size={12} className="fill-[#8B235E]/20" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{country.region}</span>
        </div>
      )}

      <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-grow">
        {country.description}
      </p>

      <Link 
        href={`/where-we-work/${country.name.toLowerCase().replace(/\s/g, "-")}`}
        className="flex items-center justify-between pt-6 border-t border-gray-50 group-hover:border-[#009270]/20 transition-colors"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D2D2D]">View Regional Impact</span>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#009270] group-hover:text-white transition-all">
          <ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
}




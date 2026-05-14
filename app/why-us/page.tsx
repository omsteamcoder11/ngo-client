"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  CheckCircle2, 
  Target, 
  ShieldCheck, 
  Globe2, 
  HelpCircle, 
  ArrowRight,
  TrendingUp,
  Award
} from "lucide-react";

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

export default function WhyChooseUsPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-600/10">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 bg-[#F8FAFC] overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-flex items-center gap-2 text-blue-600 font-black tracking-[0.4em] uppercase text-[10px] mb-6 bg-blue-50 px-5 py-2 rounded-full border border-blue-100">
              <Sparkles size={12} /> Excellence in Impact
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-gray-900 tracking-tighter leading-[0.85] mb-8 uppercase italic">
              Why <br /> Choose <span className="text-blue-600 not-italic">ChildSave?</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Find the best organization to sponsor a child. A sponsorship experience 
              that fundamentally alters a child’s life trajectory.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30 -z-0" />
      </section>

      {/* --- INTRODUCTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-12" />
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight italic">
              "Choosing the best child sponsorship program is an important decision – 
              one that aligns with your values and is proven effective."
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Though all child sponsorship charities work to benefit children, there are many 
              distinctions. We invite you to explore more about ChildSave and our collective 
              mission of bringing people together to end poverty for good.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- KEY CONSIDERATIONS --- */}
      <section className="py-24 px-6 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-20 uppercase italic tracking-tighter"
          >
            Key Similarities <span className="text-blue-600">&</span> Differences
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <ConsiderationCard
              icon={<Target className="text-blue-600" size={32} />}
              title="The Approach"
              content="ChildSave uses a holistic approach that combines individual child development with community empowerment. Your sponsored child receives direct support like education and healthcare."
            />
            <ConsiderationCard
              icon={<TrendingUp className="text-blue-600" size={32} />}
              title="The Funding"
              content="ChildSave relies primarily on individual donations. Government grants account for less than 1% of our revenue, ensuring your support directly fuels our mission."
            />
            <ConsiderationCard
              icon={<Globe2 className="text-blue-600" size={32} />}
              title="Vision & Mission"
              content="ChildSave is a secular organization. Our supporters, staff, and families span all beliefs and backgrounds. We are united by a common goal: ending generational poverty."
            />
          </motion.div>
        </div>
      </section>

      {/* --- WHAT TO LOOK FOR (CHECKLIST) --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0B0F19] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12">
               <ShieldCheck size={200} />
            </div>
            
            <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter leading-none">
              What to look for in a <br /> <span className="text-blue-500">Sponsorship Program</span>
            </motion.h2>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              <FeatureItem text="Interest in specific regions – focused on underserved communities in India." />
              <FeatureItem text="Focus on specific causes – education, health, and employment readiness." />
              <FeatureItem text="Religious affiliation – we are secular, welcoming all backgrounds." />
              <FeatureItem text="Financial transparency – audited financials and top independent ratings." />
              <FeatureItem text="Communication opportunities – write letters, send photos, or visit." />
              <FeatureItem text="Annual impact reports – clear outcomes and stories of change." />
              <FeatureItem text="Community empowerment – benefiting families and neighborhoods." />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COMPARISON CHART --- */}
      <section className="py-24 px-6 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-16 uppercase italic tracking-tighter"
          >
            How ChildSave <span className="text-blue-600">Compares</span>
          </motion.h2>
          
          <motion.div {...fadeInUp} className="overflow-x-auto rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-white">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-[0.3em]">Organization Feature</th>
                  <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-[0.3em] bg-blue-600">ChildSave Metric</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 font-medium">
                <ComparisonRow label="Founded" value="2010 (India operations since 2012)" />
                <ComparisonRow label="Monthly sponsorship amount" value="₹1,500" />
                <ComparisonRow label="% of funds for programs" value="82%" />
                <ComparisonRow label="Focus area" value="Child + Community (holistic)" />
                <ComparisonRow label="Government funding" value="No (less than 1%)" />
                <ComparisonRow label="Religious affiliation" value="None (secular)" />
                <ComparisonRow label="Wellness Programs" value="✓ Included" />
                <ComparisonRow label="Online Photo Access" value="✓ Full History" isLast />
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* --- COMMON QUESTIONS --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <HelpCircle className="text-blue-600" size={40} />
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase italic tracking-tighter">
              Common <span className="text-blue-600">Questions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FaqItem
              question="Can I communicate with my sponsored child?"
              answer="Yes! You can write letters and send photos anytime. Your words provide hope and encouragement. We also encourage you to visit your child to see the impact in person."
            />
            <FaqItem
              question="How long does sponsorship last?"
              answer="A child’s sponsorship typically continues until they turn 19, after which they graduate from the program. You may cancel at any time."
            />
            <FaqItem
              question="Can I send extra gifts or money?"
              answer="Yes, you can make an 'Extra Gift' of ₹2,500 or more through your online account. Your child and family will be thrilled to know you are thinking of them."
            />
            <FaqItem
              question="How do you ensure child safety?"
              answer="Child safeguarding is our top priority. We have a comprehensive policy covering protocols, training, and abuse prevention for all interactions."
            />
          </div>
        </div>
      </section>

      {/* --- CHARITY RATINGS --- */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 {...fadeInUp} className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 leading-none">
              Verified <span className="text-blue-500">Trust</span>
            </motion.h2>
            <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">
              Trusted by the industry's most rigorous watchdogs for efficiency and transparency.
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            <RatingBadge name="Charity Navigator" rating="4/4 Stars" detail="100 in transparency" />
            <RatingBadge name="CharityWatch" rating="A-" detail="Financial efficiency" />
            <RatingBadge name="Great Nonprofits" rating="Top-Rated" detail="Supporter feedback" />
            <RatingBadge name="Candid" rating="Platinum" detail="Highest level" />
            <RatingBadge name="BBB Alliance" rating="Accredited" detail="Meets 20 standards" />
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <div className="bg-white py-32 px-6">
        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center bg-blue-50 rounded-[4rem] p-12 md:p-24 border border-blue-100 shadow-2xl shadow-blue-100"
        >
          <Award className="text-blue-600 mx-auto mb-8" size={64} />
          <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 uppercase italic tracking-tighter leading-none">
            Ready to make <br /> a <span className="text-blue-600">Difference?</span>
          </h3>
          <p className="text-gray-600 text-xl font-medium mb-12 max-w-xl mx-auto">
            Your partnership with ChildSave transforms a child’s future. Start your sponsorship journey today.
          </p>
          <a
            href="/sponsor"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all shadow-xl shadow-gray-200"
          >
            Sponsor a Child <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </main>
  );
}

/* --- REUSABLE UI COMPONENTS --- */

function ConsiderationCard({ icon, title, content }: any) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50 group hover:-translate-y-2 transition-all duration-500"
    >
      <div className="mb-8 p-4 bg-blue-50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase italic tracking-tighter">{title}</h3>
      <p className="text-gray-500 font-medium leading-relaxed">{content}</p>
    </motion.div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <motion.div variants={fadeInUp} className="flex items-start gap-4">
      <div className="mt-1 bg-blue-500/20 p-1 rounded-full text-blue-500">
        <CheckCircle2 size={16} />
      </div>
      <p className="text-gray-300 font-medium text-lg">{text}</p>
    </motion.div>
  );
}

function ComparisonRow({ label, value, isLast }: { label: string; value: string; isLast?: boolean }) {
  return (
    <tr className={`${!isLast ? "border-b border-gray-50" : ""} group`}>
      <td className="px-8 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">{label}</td>
      <td className="px-8 py-6 text-sm font-black text-gray-900 italic tracking-tight bg-blue-50/30">{value}</td>
    </tr>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div 
      {...fadeInUp}
      className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
    >
      <h3 className="text-xl font-black text-gray-900 mb-4 uppercase italic tracking-tight leading-tight">{question}</h3>
      <p className="text-gray-500 font-medium leading-relaxed">{answer}</p>
    </motion.div>
  );
}

function RatingBadge({ name, rating, detail }: { name: string; rating: string; detail: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center backdrop-blur-sm group hover:bg-white/10 transition-all"
    >
      <h3 className="font-black text-white text-[10px] uppercase tracking-[0.3em] mb-4 opacity-60">{name}</h3>
      <p className="text-blue-500 font-black text-2xl italic tracking-tighter mb-2 leading-none group-hover:scale-110 transition-transform">{rating}</p>
      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{detail}</p>
    </motion.div>
  );
}




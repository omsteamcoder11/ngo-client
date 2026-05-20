import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charity Programs for Children in Poverty | ChildSave",
  description:
    "ChildSave provides holistic programs addressing health, education, empowerment, and employment to help children break the cycle of poverty.",
};

export default function ProgramsPage() {
  return (
    <main className="bg-white selection:bg-[#8A2B59] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6 uppercase tracking-tight">
              Impact that <span className="text-[#8A2B59]">lasts.</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Without the right interventions, children in poverty become adults
              in poverty — and the cycle continues. With your support, ChildSave
              works to end generational poverty through a community-based approach.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE IMPACT (Balanced Layout) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                Poverty impacts <span className="text-[#008767]">brain development</span>
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">
                Children growing up in poverty typically lack proper health care and nutrition. 
                Exposure to stressors like domestic violence can impair brain development, 
                impacting long-term physical and mental well-being.
              </p>
              <p className="text-slate-900 font-bold border-l-4 border-[#8A2B59] pl-6 italic">
                Our contributors invest in educational support, social-emotional skills, 
                and health resources to break this cycle.
              </p>
            </div>
            <div className="bg-slate-50 p-12 rounded-2xl flex flex-col items-center justify-center border border-slate-100">
                <span className="text-7xl font-black text-[#008767] tracking-tighter">93%</span>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">Completion Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMS GRID (Matching Spacing) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">The Right Programs</h2>
            <p className="text-slate-500 font-medium">We adapt to children’s needs at different ages, matched with local urgency.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProgramCard title="Health" icon="🩺" color="#8A2B59" desc="Inadequate health care and malnutrition are common. We help children develop healthy habits." />
            <ProgramCard title="Education" icon="📚" color="#008767" desc="Breaking barriers through tutoring, learning spaces, and computer training." />
            <ProgramCard title="Empowerment" icon="💪" color="#8A2B59" desc="Teaching leadership and confidence—fostering a sense of purpose." />
            <ProgramCard title="Employment" icon="💼" color="#008767" desc="Our signature program provides job training and placement with local employers." />
          </div>
        </div>
      </section>

      {/* 4. INTO EMPLOYMENT (Consistent Header, Balanced Data) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">
              Into <span className="text-[#8A2B59]">Employment®</span>
            </h2>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Solving youth unemployment globally</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-1 space-y-8">
              <p className="text-slate-500 font-medium leading-relaxed">
                Into Employment provides education, training, and career coaching relevant to local workforces via partnerships with more than 100 employers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <MiniStat val="93%" lab="Completion" />
                <MiniStat val="87%" lab="Find Work" />
                <MiniStat val="64%" lab="Young Women" />
                <MiniStat val="2-3x" lab="Income Boost" />
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard num="65M" lab="Youth need work" txt="Young people who could not find meaningful work in 2023." />
              <StatCard num="1 in 5" lab="Unemployed" txt="Young people not currently employed or in training." />
              <StatCard num="24M" lab="Students at risk" txt="Learners at risk of not returning to school due to closures." />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA (Clean & Final) */}
      <section className="py-24 bg-[#8A2B59] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-none">
            Invest in a <span className="opacity-60 text-white">future</span>
          </h3>
          <p className="text-rose-100 text-lg mb-10 max-w-lg mx-auto font-medium">
            Your support makes these life-changing programs possible. Join us today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <a href="/sponsor-a-child" className="bg-white text-[#8A2B59] px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-rose-50 transition-all shadow-xl">
  Sponsor a Child
</a>

            <a href="/donate" className="bg-transparent text-white border border-white/30 px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Make a Donation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// SHARED COMPONENTS FOR CONSISTENCY
function ProgramCard({ title, icon, color, desc }: any) {
  return (
    <div className="p-8 bg-white border border-slate-200 rounded-xl group hover:shadow-lg transition-all">
      <div className="text-3xl mb-6" style={{ color }}>{icon}</div>
      <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function StatCard({ num, lab, txt }: any) {
  return (
    <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl">
      <div className="text-3xl font-black text-[#008767] mb-1">{num}</div>
      <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-4">{lab}</p>
      <p className="text-[11px] text-slate-400 italic leading-relaxed">"{txt}"</p>
    </div>
  );
}

function MiniStat({ val, lab }: any) {
  return (
    <div className="border-b border-slate-100 pb-2">
      <div className="text-2xl font-black text-slate-900 leading-none">{val}</div>
      <p className="text-[9px] font-bold text-[#008767] uppercase tracking-widest mt-1">{lab}</p>
    </div>
  );
}
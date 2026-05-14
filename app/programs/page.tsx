// app/programs/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charity Programs for Children in Poverty | ChildSave",
  description:
    "ChildSave provides holistic programs addressing health, education, empowerment, and employment to help children break the cycle of poverty.",
};

export default function ProgramsPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none mb-8">
            Impact that <span className="text-blue-600">lasts.</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-500 font-bold uppercase tracking-[0.2em] mb-12">
            Holistic stages of development
          </p>
          <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Without the right interventions, children in poverty become adults
              in poverty — and the cycle continues. With your support, ChildSave
              works to end generational poverty through a community-based approach.
            </p>
          </div>
        </div>
      </section>

      {/* Why Holistic Matters - Science/Impact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
                Poverty impacts <span className="text-blue-600">brain development</span> and well-being
              </h2>
              <div className="space-y-6 text-gray-600 text-lg font-medium">
                <p>
                  Children growing up in poverty typically lack proper health care and nutrition. 
                  Exposure to stressors like domestic violence can impair brain development, 
                  impacting long-term physical and mental well-being.
                </p>
                <p className="border-l-4 border-blue-600 pl-6 italic text-gray-900 font-bold">
                  Our contributors invest in educational support, social-emotional skills, 
                  and health resources to break this cycle.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 bg-gray-50 rounded-[3rem] p-10 flex items-center justify-center border border-gray-100 shadow-inner">
               <div className="text-center">
                  <div className="text-8xl mb-4 italic font-black text-blue-600/20">93%</div>
                  <p className="font-black text-gray-900 uppercase tracking-widest text-sm">Completion Rate</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Right Programs at the Right Time */}
      <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight uppercase mb-6">
              The <span className="text-blue-600">Right Programs</span> <br className="hidden md:block" /> at the Right Time
            </h2>
            <p className="mt-4 text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              We adapt to children’s needs at different ages, matched with local urgency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ProgramCard
              title="Health"
              description="Living in poverty can mean inadequate health care and malnutrition. We help children develop healthy habits and connect them with medical services."
              icon="🩺"
              accentColor="bg-red-500"
            />
            <ProgramCard
              title="Education"
              description="Breaking barriers through early childhood programs, tutoring, learning spaces, internet access, and computer training."
              icon="📚"
              accentColor="bg-blue-500"
            />
            <ProgramCard
              title="Empowerment"
              description="Teaching leadership, social responsibility, and confidence—fostering a sense of purpose and active community involvement."
              icon="💪"
              accentColor="bg-yellow-500"
            />
            <ProgramCard
              title="Employment"
              description="Our signature workforce development program provides job training, career coaching, and placement with local employers."
              icon="💼"
              accentColor="bg-green-500"
            />
          </div>
        </div>
      </section>

      {/* Into Employment Stats Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase">
              Into <span className="text-blue-600">Employment®</span>
            </h2>
            <p className="text-gray-400 font-black tracking-[0.3em] mt-4 uppercase text-xs md:text-sm">Solving youth unemployment globally</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
            <StatCard
              number="65M"
              label="Youth need work"
              description="Young people who could not find sustainable, meaningful work in 2023."
            />
            <StatCard
              number="1 in 5"
              label="Unemployed"
              description="Young people are not currently employed, being educated, or in formal training."
            />
            <StatCard
              number="24M"
              label="Students at risk"
              description="Learners at risk of not returning to school due to prolonged closures."
            />
          </div>

          <div className="bg-blue-600 rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-2xl shadow-blue-600/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-white text-center mb-10 tracking-tight">
                Our Solution
              </h3>
              <p className="text-blue-100 text-lg md:text-2xl text-center max-w-4xl mx-auto font-medium leading-relaxed mb-16">
                Into Employment provides education, training, and career coaching relevant 
                to local workforces via partnerships with more than 100 employers.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {[
                  { val: "93%", lab: "Program completion" },
                  { val: "87%", lab: "Find work in 6 months" },
                  { val: "64%", lab: "Young women" },
                  { val: "2-3x", lab: "Family income increase" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl md:text-6xl font-black text-white mb-2">{stat.val}</div>
                    <p className="text-blue-200 text-xs md:text-sm font-black uppercase tracking-widest leading-tight">{stat.lab}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gray-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
            Invest in a <span className="text-blue-500">future</span>
          </h3>
          <p className="text-gray-400 text-lg md:text-xl mb-12 font-medium">
            Your support makes these life-changing programs possible. <br className="hidden md:block" /> Join us today and be the catalyst for change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/sponsor"
              className="w-full sm:w-auto bg-blue-600 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
            >
              Sponsor a Child
            </a>
            <a
              href="/donate"
              className="w-full sm:w-auto bg-transparent text-white border-2 border-white/20 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all active:scale-95"
            >
              Make a Donation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// Enhanced Reusable Program Card
function ProgramCard({
  title,
  description,
  icon,
  accentColor
}: {
  title: string;
  description: string;
  icon: string;
  accentColor: string;
}) {
  return (
    <div className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-gray-100 flex flex-col h-full">
      <div className={`w-16 h-16 rounded-2xl ${accentColor} bg-opacity-10 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
        {icon}
      </div>
      <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-base leading-relaxed font-medium flex-grow">
        {description}
      </p>
      <div className="mt-8 w-8 h-1 bg-gray-100 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500 rounded-full"></div>
    </div>
  );
}

// Enhanced Reusable Stat Card
function StatCard({
  number,
  label,
  description,
}: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-[2.5rem] p-10 text-center shadow-xl shadow-gray-200/30 border border-gray-100 hover:border-blue-100 transition-all duration-500 group">
      <div className="text-5xl md:text-7xl font-black text-blue-600 mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
        {number}
      </div>
      <p className="text-gray-900 font-black uppercase tracking-widest text-sm mb-4">
        {label}
      </p>
      <p className="text-gray-500 font-medium leading-relaxed italic text-sm">
        "{description}"
      </p>
    </div>
  );
}




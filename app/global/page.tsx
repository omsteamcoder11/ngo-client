import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Philanthropy | ChildSave",
  description:
    "Ignite potential and break the cycle of poverty through strategic giving. Learn how your philanthropy creates lasting impact for children and youth worldwide.",
};

export default function GlobalPhilanthropyPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4 block">
            Ignite this generation’s potential
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Join us to help break the cycle <br className="hidden md:block" /> of poverty for thousands
          </h1>
          <div className="mt-8 space-y-4">
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              ChildSave’s ultimate goal for all children and youth:
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed px-4 py-6 bg-white/50 rounded-2xl border border-blue-50 shadow-sm">
              "A confident young adult who is sustainably employed and has the
              mindset, skills and tools to reach their goals and positively
              influence their community."
            </p>
          </div>
        </div>
      </section>

      {/* Into Employment Fall Report Card */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-6 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Into Employment Fall Report
              </h2>
              <p className="text-blue-100/80 text-sm sm:text-base">
                Discover how your generosity ignites hope and opportunity globally.
              </p>
            </div>
            <a
              href="#"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            >
              <span>Read Report (PDF)</span>
              <span className="text-xl">📄</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why ChildSave (Grid optimized for all screens) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Why ChildSave?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard 
              icon="📈" 
              title="Proven Workforce" 
              text="84% of participants find jobs within six months, often tripling family incomes." 
            />
            <FeatureCard 
              icon="⭐" 
              title="Trusted Impact" 
              text="Top-rated by Charity Navigator and BBB for transparency and accountability." 
            />
            <FeatureCard 
              icon="🌍" 
              title="Locally Led" 
              text="In-country teams follow development frameworks to create holistic initiatives." 
            />
            <FeatureCard 
              icon="💡" 
              title="Continuous Innovation" 
              text="Impacting over 1 million children since 1936 through data-driven learning." 
            />
          </div>
        </div>
      </section>

      {/* The Problem We Are Solving (Stats) */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              The problem we are solving
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard value="1B" label="CHILDREN" detail="Living in multidimensional poverty lacking basic necessities." />
            <StatCard value="1 in 4" label="YOUTH" detail="Unemployed or lacking access to formal education/training." />
            <StatCard value="3 in 5" label="WOMEN" detail="Over-represented in informal and vulnerable employment sectors." />
          </div>
          <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-8 uppercase tracking-widest leading-relaxed">
            Sources: Social Policy: Child Poverty, UNICEF, 2024; ILO/SIDA, 2020; UN Women, 2024.
          </p>
        </div>
      </section>

      {/* Ways You Can Make a Difference (The Giving Grid) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Ways to make a difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <GivingCard title="Give to our mission" description="Maintain critical programs for children in poverty." link="/donate" icon="💝" />
            <GivingCard title="Invest in Employment" description="Help youth secure sustainable jobs and escape poverty." link="/donate?program=into-employment" icon="💼" />
            <GivingCard title="Estate Planning" description="Create a lasting legacy through your will or trust." link="/legacy-giving" icon="📜" />
            <GivingCard title="Gifts of Stock" description="A tax-efficient way to support global change." link="/stock-gift" icon="📈" />
            <GivingCard title="Donor-Advised Fund" description="Support families through your personal DAF grant." link="/daf" icon="🏦" />
            <GivingCard title="Matching Gifts" description="Double your impact through corporate matching." link="/matching-gifts" icon="🤝" />
            <GivingCard title="Cryptocurrency" description="Donate via Bitcoin or Ether for modern change." link="/crypto" icon="₿" />
            <GivingCard title="Pathfinders" description="Join visionary investors solving global poverty." link="/pathfinders" icon="🧭" />
          </div>
        </div>
      </section>

      {/* Pathfinders Callout */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Join the ChildSave Pathfinders Society
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            Be part of a visionary group of investors dedicated to solving global poverty at scale.
          </p>
          <a
            href="/pathfinders"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl active:scale-95"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Donor Spotlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Donor spotlights</h2>
            <p className="text-gray-500 font-medium mt-2">Investing in hope and community</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <SpotlightCard 
              initials="MI" 
              color="bg-blue-100 text-blue-700" 
              name="Marvin Irby" 
              title="Board Member, 24-year supporter"
              quote="An investment in ChildSave is more than providing goods and services. It’s providing an opportunity for a better life for entire communities."
              description="Marvin witnessed the transformative effect of ChildSave’s support in the Philippines, profoundly touched by the commitment of alumni."
            />
            <SpotlightCard 
              initials="GB" 
              color="bg-green-100 text-green-700" 
              name="Gordon & Donna Bailey" 
              title="30-year supporters"
              quote="It’s about trying to become a complete human being and giving in recognition of our blessings."
              description="Beginning with two children, they expanded their impact by building community centers and seeding the Into Employment program."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to ignite potential?
          </h3>
          <p className="text-gray-600 mb-10 text-lg">
            Your philanthropy today creates lasting change for generations.
          </p>
          <a
            href="/donate"
            className="inline-block w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
          >
            Make a Difference Now
          </a>
        </div>
      </section>
    </main>
  );
}

/* Helper Components for cleanliness and responsiveness */

function FeatureCard({ icon, title, text }: { icon: string, title: string, text: string }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl hover:border-blue-100 border border-transparent transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function StatCard({ value, label, detail }: { value: string, label: string, detail: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight">{value}</div>
      <p className="text-gray-900 mt-2 font-bold text-sm tracking-[0.1em]">{label}</p>
      <p className="text-gray-500 text-sm mt-3 leading-relaxed">{detail}</p>
    </div>
  );
}

function SpotlightCard({ initials, color, name, title, quote, description }: any) {
  return (
    <div className="bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
        <div className={`w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center text-2xl font-black ${color}`}>
          {initials}
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-blue-600 font-medium text-sm">{title}</p>
        </div>
      </div>
      <blockquote className="text-gray-800 italic text-lg mb-6 leading-relaxed border-l-4 border-blue-200 pl-4">
        “{quote}”
      </blockquote>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function GivingCard({ title, description, link, icon }: { title: string, description: string, link: string, icon: string }) {
  return (
    <a
      href={link}
      className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:border-blue-200 border border-transparent transition-all duration-300 flex flex-col h-full"
    >
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">{title}</h3>
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">{description}</p>
      <span className="text-blue-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-2 transition-transform">
        Learn more <span>→</span>
      </span>
    </a>
  );
}




// app/employment/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Into Employment | ChildSave India",
  description:
    "ChildSave's Into Employment program prepares young people in India for sustainable careers through technical training, life skills, and job placement support.",
};

export default function EmploymentPage() {
  const programComponents = [
    {
      title: "Technical Training",
      description: "Scholarships for college or vocational education to prepare young people for the local job market.",
      icon: "🎓",
    },
    {
      title: "Career Readiness",
      description: "Individual support from staff to create résumés, practice interviewing, and connect with employers.",
      icon: "📄",
    },
    {
      title: "Life Skills",
      description: "Youth become confident, strong communicators and value-driven team players.",
      icon: "💪",
    },
    {
      title: "Job Placement",
      description: "We help place our youth in jobs with local companies and provide guidance as they begin careers.",
      icon: "🤝",
    },
    {
      title: "Entrepreneurship",
      description: "Training on business fundamentals for youth interested in launching small-scale ventures.",
      icon: "💡",
    },
  ];

  const countries = [
    { name: "Colombia", since: 2013 },
    { name: "Dominican Republic", since: 2011 },
    { name: "Ecuador", since: 2013 },
    { name: "Guatemala", since: 2011 },
    { name: "Honduras", since: 2009 },
    { name: "India", since: 2014, highlighted: true },
    { name: "Mexico", since: 2014 },
    { name: "Philippines", since: 2009 },
    { name: "Zambia", since: 2015 },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-[0.2em]">
            Change a generation
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Into Employment®
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our programs prepare young people to fill the needs of local job
            markets. Scholarships provide access to college, technical training,
            job readiness and life skills.
          </p>
        </div>
      </section>

      {/* Tagline Card */}
      <section className="pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-600 rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-100">
            <p className="text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed">
              Into Employment provides young people the coaching, 21st-century
              life skills and job-placement support to find — and compete for —
              careers in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Program Components Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {programComponents.map((component) => (
              <div
                key={component.title}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{component.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {component.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Offerings */}
      <section className="py-12 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10 md:mb-16">
            Into Employment provides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <DetailCard title="Technical Training" description="Scholarships for college or vocational education to prepare youth." icon="🎓" />
            <DetailCard title="Life Skills" description="Become confident, strong communicators and value-driven team players." icon="💪" />
            <DetailCard title="Career Readiness" description="Support to create résumés, practice interviewing, and search for jobs." icon="📄" />
            <DetailCard title="Job Placement" description="We help place our youth in jobs and provide guidance as they begin." icon="🤝" />
            <DetailCard title="Entrepreneurship" description="Training on business fundamentals for youth interested in launching ventures." icon="💡" fullWidth />
          </div>
        </div>
      </section>

      {/* India Spotlight Stats */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            Into Employment in India
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-blue-100">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-2">500+</div>
              <p className="text-gray-600 text-sm sm:text-base font-bold uppercase tracking-wide">Youth Trained Annually</p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-blue-100">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-2">75%</div>
              <p className="text-gray-600 text-sm sm:text-base font-bold uppercase tracking-wide">Hired in 6 Months</p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-blue-100 xs:col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-2">40+</div>
              <p className="text-gray-600 text-sm sm:text-base font-bold uppercase tracking-wide">Employer Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Global Presence, Local Leadership
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {countries.map((country) => (
              <span
                key={country.name}
                className={`px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  country.highlighted
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {country.name} {country.since && <span className="opacity-60 ml-1">({country.since})</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-12 md:py-20 bg-gray-900 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Invest in a young person's future
          </h3>
          <p className="text-gray-400 mb-10 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Help young people gain the skills they need to secure sustainable employment and break the cycle of poverty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <a
              href="/donate"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg active:scale-95 text-center"
            >
              Support Into Employment
            </a>
            <a
              href="/contact"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition active:scale-95 text-center"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

function DetailCard({ title, description, icon, fullWidth = false }: { title: string; description: string; icon: string; fullWidth?: boolean }) {
  const containerClass = fullWidth
    ? "md:col-span-2 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left"
    : "bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col items-center sm:items-start text-center sm:text-left";

  return (
    <div className={containerClass}>
      <div className="text-4xl sm:text-5xl mb-4 sm:mb-0 shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}




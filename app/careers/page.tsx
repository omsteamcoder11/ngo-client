// app/careers/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Employment | ChildSave",
  description:
    "Join ChildSave's mission to end child poverty. Explore career opportunities at our headquarters and around the world. Make a lasting impact with a compassionate team.",
};

export default function CareersPage() {
  // Job openings data
  const jobOpenings = [
    {
      title: "Global Director of Talent Growth Operations",
      location: "Kansas City, MO (Headquarters)",
      type: "Full-time",
    },
    {
      title: "Talent Growth Global Recruitment Manager",
      location: "Kansas City, MO (Headquarters)",
      type: "Full-time",
    },
    {
      title: "Country Program Director – Colombia",
      location: "Bogotá, Colombia",
      type: "Full-time",
    },
    {
      title: "Monitoring & Evaluation Specialist",
      location: "Nairobi, Kenya",
      type: "Full-time",
    },
    {
      title: "Communications Officer",
      location: "Manila, Philippines",
      type: "Full-time",
    },
    {
      title: "Finance & Operations Manager",
      location: "New Delhi, India",
      type: "Full-time",
    },
    {
      title: "Child Sponsorship Coordinator",
      location: "Remote (US-based)",
      type: "Full-time",
    },
    {
      title: "Volunteer Engagement Associate",
      location: "Kansas City, MO (Hybrid)",
      type: "Full-time",
    },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider block mb-4">
            We’re bringing people together to end poverty for good
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Careers: Join us in our mission
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you join ChildSave, you&apos;re helping us unleash the potential in
            everyone, from employees and supporters to children and their
            families.
          </p>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-12 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our mission</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We connect people around the world in the fight to end poverty.
                Working together, we invest in the lives of children and youth,
                empowering them to create lasting change in their own lives and
                in their communities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                We&apos;re seeking talented people who:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-gray-700">
                {[
                  "Live the mission",
                  "See potential in everyone",
                  "Believe connections matter",
                  "Are always learning",
                  "Own the impact",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold shrink-0">✓</span>
                    <span className="text-sm sm:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Explore current openings
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">Impactful roles around the world</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {jobOpenings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 group"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 break-words leading-snug group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base flex items-center gap-2">
                  <span className="opacity-70">📍</span> {job.location}
                </p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-blue-100">
                    {job.type}
                  </span>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 text-sm font-bold flex items-center gap-1 shrink-0"
                  >
                    View Details <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl active:scale-95">
              View All Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Headquarters Location */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              ChildSave Headquarters
            </h3>
            <address className="not-italic text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              2000 E. Red Bridge Rd.<br />
              Kansas City, MO 64131
            </address>
            <p className="text-gray-500 text-xs sm:text-sm max-w-lg mx-auto italic">
              Many of our positions offer flexible and remote options. Explore
              current openings to find the right fit for you.
            </p>
          </div>
        </div>
      </section>

      {/* Equal Employment Opportunity */}
      <section className="py-12 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Equal Employment Opportunity
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-200">
            <div className="prose prose-sm sm:prose-base text-gray-600 leading-relaxed space-y-4">
                <p className="text-sm sm:text-base">
                ChildSave is committed to the principles of equal employment. We
                are dedicated to complying with all federal, state, and local laws
                providing equal employment opportunities. It is our intent to maintain a work
                environment that is free of harassment, discrimination, or
                retaliation.
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                This policy applies to all aspects of employment, including recruiting, hiring, placement, promotion,
                compensation, and termination.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Not seeing the right fit?
          </h3>
          <p className="text-blue-100 mb-8 text-sm sm:text-lg">
            We&apos;re always looking for passionate people. Send us your resume and
            we&apos;ll keep you in mind for future opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg active:scale-95"
          >
            Contact Our Talent Team
          </a>
        </div>
      </div>
    </main>
  );
}




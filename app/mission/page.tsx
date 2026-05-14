// app/leadership/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership & Key Staff | ChildSave",
  description:
    "Meet the dedicated leaders guiding ChildSave's mission to end child poverty. Learn about our executive team, global agency directors, and board members.",
};

export default function LeadershipPage() {
  // Leadership team data
  const leadershipTeam = [
    {
      name: "Sarah Mitchell",
      title: "CEO & PRESIDENT",
      tagline: "The Visionary",
      description:
        "Leads the organization with a clear vision for ending child poverty and empowering communities worldwide.",
    },
    {
      name: "James Carter",
      title: "CHIEF FINANCIAL OFFICER",
      tagline: "The Insighter",
      description:
        "Ensures financial integrity and strategic resource allocation to maximize impact for children.",
    },
    {
      name: "Elena Rodriguez",
      title: "CHIEF OPERATING OFFICER",
      tagline: "The Problem Solver",
      description:
        "Oversees global operations, driving efficiency and innovation in program delivery.",
    },
    {
      name: "David Kim",
      title: "VP, GLOBAL TALENT GROWTH",
      tagline: "The Developer",
      description:
        "Cultivates talent and fosters a culture of growth and inclusion across the organization.",
    },
    {
      name: "Maria Santos",
      title: "VP, GLOBAL PROGRAMS AND OPERATIONS",
      tagline: "The Integrator",
      description:
        "Integrates program strategies across countries to ensure cohesive, high-impact outcomes.",
    },
    {
      name: "Thomas Wright",
      title: "VP, GLOBAL PHILANTHROPY & MARKETING",
      tagline: "The Inspirer",
      description:
        "Connects supporters with the mission, inspiring generosity and building lasting partnerships.",
    },
    {
      name: "Linda Chen",
      title: "VP, ENTERPRISE TRANSFORMATION",
      tagline: "The Dot Connector",
      description:
        "Leads organizational change and digital innovation to enhance efficiency and reach.",
    },
    {
      name: "Michael Okonkwo",
      title: "VP, INFORMATION TECHNOLOGY",
      tagline: "The Connector",
      description:
        "Drives technology strategy to empower staff and supporters with seamless digital tools.",
    },
  ];

  // Agency directors data
  const agencyDirectors = [
    { name: "Hermelinda Guarin", country: "Colombia" },
    { name: "Paola Higueros", country: "Guatemala" },
    { name: "Marilou Detecio", country: "Philippines (Bicol)" },
    { name: "Sofia Betances", country: "Dominican Republic" },
    { name: "Mauricio Moncada", country: "Honduras" },
    { name: "Karl Henessy", country: "Philippines (Manila)" },
    { name: "Lissy Velez", country: "Ecuador (Guayaquil)" },
    { name: "Kirti Mishra", country: "India" },
    { name: "Doras Chirwa", country: "Zambia" },
    { name: "María Agusta Proaño", country: "Ecuador (Quito)" },
    { name: "Alfredo Maldonado", country: "Mexico" },
  ];

  // Board members
  const boardMembers = [
    { name: "Dr. Angela Foster", role: "Board Chair" },
    { name: "Robert Chen", role: "Vice Chair" },
    { name: "Patricia Omondi", role: "Treasurer" },
    { name: "William Hayes", role: "Secretary" },
    { name: "Dr. Maria Lopez", role: "Member" },
    { name: "James Whitaker", role: "Member" },
    { name: "Aisha Khan", role: "Member" },
    { name: "David Park", role: "Member" },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1]">
            Meet our <span className="text-blue-600">global</span> <br className="hidden md:block" /> leadership team
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Key staff of ChildSave — dedicated leaders committed to ending child
            poverty.
          </p>
        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
              Executive <span className="text-blue-600">Leadership</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium">
              Guiding our mission with passion and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {leadershipTeam.map((leader, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 text-center"
              >
                <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-inner">
                  <span className="text-4xl font-black text-blue-600">
                    {leader.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight">
                  {leader.name}
                </h3>
                <p className="text-blue-600 text-xs font-black uppercase tracking-[0.15em] mt-2 mb-1">
                  {leader.title}
                </p>
                <p className="text-gray-400 text-xs font-bold italic tracking-wider mb-4">
                  {leader.tagline}
                </p>
                <div className="h-px w-12 bg-gray-100 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Agency Directors */}
      <section className="py-16 md:py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
              Global Agency <span className="text-blue-600">Directors</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium">
              Leading our work on the ground in communities around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {agencyDirectors.map((director, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 text-center flex items-center gap-4 text-left"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <span className="text-xl font-black text-green-600 group-hover:text-white">
                    {director.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                    {director.name}
                  </h3>
                  <p className="text-gray-500 text-xs font-black uppercase tracking-widest">{director.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
              Board of <span className="text-blue-600">Directors</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Business, nonprofit and innovation leaders — all with a heart for
              helping children who live in poverty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <span className="text-2xl font-black text-purple-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-blue-600 text-xs font-black uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-blue-600 py-20 md:py-28 relative overflow-hidden">
        {/* Background Decorative Circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight uppercase">
            Join our team
          </h3>
          <p className="text-blue-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
            We're always looking for passionate people to help us end child
            poverty. See current openings and become part of our mission.
          </p>
          <a
            href="/careers"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gray-100 transition-all shadow-2xl active:scale-95"
          >
            View Careers
          </a>
        </div>
      </div>
    </main>
  );
}




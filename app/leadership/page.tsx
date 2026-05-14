// app/leadership/page.tsx
export default function LeadershipPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 px-4 py-20 sm:py-32 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-sm px-4 py-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
              Meet the Team
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[0.9]">
            Our <span className="text-emerald-600">Leadership</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Passionate volunteers and dedicated professionals committed to empowering children.
          </p>
        </div>
      </div>

      {/* Leadership Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="group relative rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image placeholder with gradient overlay */}
              <div className="relative h-72 sm:h-80 bg-gradient-to-br from-emerald-50 to-slate-100 flex items-center justify-center overflow-hidden">
                {leader.image ? (
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-white flex items-center justify-center text-4xl font-black text-emerald-600 shadow-xl group-hover:rotate-12 transition-transform">
                      {leader.name.charAt(0)}
                    </div>
                    <p className="mt-4 text-slate-400 text-[10px] uppercase font-bold tracking-widest">Photo coming soon</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{leader.name}</h3>
                <p className="text-emerald-600 font-bold text-xs sm:text-sm uppercase tracking-widest mt-2 bg-emerald-50 inline-block px-3 py-1 rounded-lg">{leader.role}</p>
                <p className="mt-5 text-slate-500 text-sm sm:text-base leading-relaxed font-medium line-clamp-3 group-hover:line-clamp-none transition-all">
                  {leader.bio}
                </p>
                
                {/* Social links */}
                {leader.social && (
                  <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-slate-50">
                    {leader.social.linkedin && (
                      <a href={leader.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {leader.social.email && (
                      <a href={`mailto:${leader.social.email}`} className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase">Advisory Board</h2>
            <p className="mt-4 text-slate-500 font-medium italic">Guiding our mission with expertise and wisdom</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {advisors.map((advisor, idx) => (
              <div key={idx} className="group rounded-3xl bg-slate-50 border border-slate-100 p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl font-black text-emerald-700 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                  {advisor.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{advisor.name}</h3>
                <p className="text-emerald-600 text-xs font-black uppercase tracking-widest mt-1 mb-4">{advisor.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join the Team CTA */}
        <div className="mt-32">
          <div className="relative rounded-[3rem] bg-emerald-600 shadow-2xl shadow-emerald-200/50 overflow-hidden group">
             {/* Animated Background Pulse */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent scale-150 group-hover:scale-100 transition-transform duration-1000" />
            
            <div className="relative p-10 sm:p-20 text-center">
              <h3 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">Join Our Leadership Team</h3>
              <p className="text-emerald-50 text-lg sm:text-xl mb-12 max-w-xl mx-auto font-medium opacity-90 leading-relaxed">
                We're always looking for passionate volunteers to help guide our organization.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/volunteer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-10 py-5 text-emerald-700 font-black uppercase tracking-widest text-xs shadow-lg hover:bg-slate-50 transition-all hover:scale-105 active:scale-95"
                >
                  Become a Volunteer →
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-10 py-5 text-white font-black uppercase tracking-widest text-xs border border-white/20 hover:bg-emerald-800 transition-all active:scale-95"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const leaders = [
  {
    name: "Dr. Sarah Mensah",
    role: "Founder & Executive Director",
    bio: "Former teacher with 15+ years in child development. Sarah founded BrightFuture to bridge education gaps in underserved communities.",
    image: "", 
    social: {
      linkedin: "https://linkedin.com/in/sarahmensah",
      email: "sarah@brightfuture.org",
    },
  },
  {
    name: "Michael Ofori",
    role: "Programs Director",
    bio: "Social worker and community organizer. Michael oversees all educational and nutrition programs across 12 partner schools.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/michaelofori",
      email: "michael@brightfuture.org",
    },
  },
  {
    name: "Ama Serwaa",
    role: "Finance & Operations",
    bio: "Certified accountant with a passion for transparency. Ama ensures every cedi is accounted for and impact is maximized.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/amaserwaa",
      email: "ama@brightfuture.org",
    },
  },
  {
    name: "Kwame Asare",
    role: "Partnerships Lead",
    bio: "Kwame builds relationships with corporations, schools, and donors to expand our reach and resources.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/kwameasare",
      email: "kwame@brightfuture.org",
    },
  },
  {
    name: "Esi Quansah",
    role: "Volunteer Coordinator",
    bio: "Esi manages our incredible team of volunteers, from onboarding to event coordination.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/esiquansah",
      email: "esi@brightfuture.org",
    },
  },
  {
    name: "Dr. Kofi Annan (Hon.)",
    role: "Medical Advisor",
    bio: "Pediatrician ensuring our health programs meet the highest standards of care for every child.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/kofiannan",
      email: "kofi@brightfuture.org",
    },
  },
];

const advisors = [
  {
    name: "Prof. James Aidoo",
    role: "Education Policy Expert",
    bio: "Former Dean of Education, University of Ghana.",
  },
  {
    name: "Nana Akua Amankwah",
    role: "Child Rights Advocate",
    bio: "UNICEF consultant with 20 years in child protection.",
  },
  {
    name: "Thomas Addo",
    role: "Corporate Partnerships",
    bio: "CSR Director at leading Ghanaian bank.",
  },
];




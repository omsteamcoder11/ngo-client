// app/leadership/page.tsx

export default function LeadershipPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">

      {/* ── HERO ── */}
      <section className="bg-[#8B235E] pt-[72px] md:pt-[80px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#FFCC29] inline-block" />
              <span className="text-[#FFCC29] text-[10px] font-black uppercase tracking-[0.25em]">
                Meet the Team
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-5">
              Our <span className="text-[#FFCC29]">Leadership</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
              Passionate volunteers and dedicated professionals committed to empowering children across India.
            </p>
          </div>
        </div>
        {/* Bottom accent bar */}
        <div className="h-1 w-full bg-[#009270]" />
      </section>

      {/* ── LEADERSHIP GRID ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-[#8B235E]" />
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
            Core Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-gray-200">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="border-r border-b border-gray-200 p-6 sm:p-8 bg-white hover:bg-gray-50 transition-colors duration-200 group"
            >
              {/* Avatar — initial only, no photo */}
              <div
                className="w-14 h-14 flex items-center justify-center mb-5 text-white font-black text-xl"
                style={{ backgroundColor: idx % 2 === 0 ? "#8B235E" : "#009270" }}
              >
                {leader.name.charAt(0)}
              </div>

              {/* Role tag */}
              <span
                className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 mb-3 inline-block"
                style={{
                  backgroundColor: idx % 2 === 0 ? "#8B235E15" : "#00927015",
                  color: idx % 2 === 0 ? "#8B235E" : "#009270",
                }}
              >
                {leader.role}
              </span>

              <h3 className="text-base sm:text-lg font-black text-gray-900 uppercase tracking-tight mb-3">
                {leader.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {leader.bio}
              </p>

              {/* Social links */}
              {leader.social && (
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
                  {leader.social.linkedin && (
                    <a
                      href={leader.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#8B235E] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {leader.social.email && (
                    <a
                      href={`mailto:${leader.social.email}`}
                      className="text-gray-400 hover:text-[#009270] transition-colors"
                      aria-label="Email"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── ADVISORY BOARD ── */}
      <section className="bg-gray-50 border-t border-b border-gray-200 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-[#009270]" />
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
              Advisory Board
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-gray-200">
            {advisors.map((advisor, idx) => (
              <div
                key={idx}
                className="border-r border-b border-gray-200 p-6 sm:p-8 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-[#009270] flex items-center justify-center text-white font-black text-sm mb-4">
                  {advisor.name.charAt(0)}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#009270] bg-[#00927015] px-2 py-1 mb-3 inline-block">
                  {advisor.role}
                </span>
                <h3 className="text-base font-black text-gray-900 uppercase tracking-tight mb-2 mt-3">
                  {advisor.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="bg-[#009270]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 block mb-3">
                Get Involved
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                Join Our<br />Leadership Team
              </h3>
            </div>
            <div>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                We're always looking for passionate volunteers to help guide our organization and protect children's futures.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/volunteer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#009270] px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors"
                >
                  Become a Volunteer →
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/40 text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-[#8B235E]" />
      </section>

    </main>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const leaders = [
  {
    name: "Dr. Sarah Mensah",
    role: "Founder & Executive Director",
    bio: "Former teacher with 15+ years in child development. Sarah founded ChildSave to bridge education gaps in underserved communities.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/sarahmensah",
      email: "sarah@childsave.org",
    },
  },
  {
    name: "Michael Ofori",
    role: "Programs Director",
    bio: "Social worker and community organizer. Michael oversees all educational and nutrition programs across 12 partner schools.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/michaelofori",
      email: "michael@childsave.org",
    },
  },
  {
    name: "Ama Serwaa",
    role: "Finance & Operations",
    bio: "Certified accountant with a passion for transparency. Ama ensures every rupee is accounted for and impact is maximized.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/amaserwaa",
      email: "ama@childsave.org",
    },
  },
  {
    name: "Kwame Asare",
    role: "Partnerships Lead",
    bio: "Kwame builds relationships with corporations, schools, and donors to expand our reach and resources.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/kwameasare",
      email: "kwame@childsave.org",
    },
  },
  {
    name: "Esi Quansah",
    role: "Volunteer Coordinator",
    bio: "Esi manages our incredible team of volunteers, from onboarding to event coordination.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/esiquansah",
      email: "esi@childsave.org",
    },
  },
  {
    name: "Dr. Kofi Annan (Hon.)",
    role: "Medical Advisor",
    bio: "Pediatrician ensuring our health programs meet the highest standards of care for every child.",
    image: "",
    social: {
      linkedin: "https://linkedin.com/in/kofiannan",
      email: "kofi@childsave.org",
    },
  },
];

const advisors = [
  {
    name: "Prof. James Aidoo",
    role: "Education Policy Expert",
    bio: "Former Dean of Education with 25 years shaping child-centred policy.",
  },
  {
    name: "Nana Akua Amankwah",
    role: "Child Rights Advocate",
    bio: "UNICEF consultant with 20 years in child protection and welfare.",
  },
  {
    name: "Thomas Addo",
    role: "Corporate Partnerships",
    bio: "CSR Director bringing corporate resources to community impact.",
  },
];
// app/newsroom/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom & Media Resources | ChildSave",
  description:
    "Access the latest news, press releases, and media resources about ChildSave's work to end child poverty. Contact our media team for interviews and information.",
};

export default function NewsroomPage() {
  // Sample press releases – replace with your actual content
  const pressReleases = [
    {
      title: "ChildSave Expands Youth Employment Program to Three New Countries",
      date: "March 15, 2026",
      summary:
        "Building on the success of Into Employment®, ChildSave is scaling its job training initiative to reach 10,000 more young people in Colombia, India, and Zambia.",
      link: "#",
    },
    {
      title: "Annual Report 2025: Record Impact Amid Global Challenges",
      date: "February 10, 2026",
      summary:
        "ChildSave served over 200,000 children last year, with 82% of expenditures going directly to programs. Read the full report and financials.",
      link: "#",
    },
    {
      title: "ChildSave Receives 4-Star Rating from Charity Navigator for 10th Consecutive Year",
      date: "January 22, 2026",
      summary:
        "The organization maintains a perfect 100 in accountability and transparency, reinforcing its commitment to donors and children alike.",
      link: "#",
    },
  ];

  // Media resources (downloadable)
  const mediaResources = [
    { name: "ChildSave Logo & Brand Kit", type: "ZIP", size: "4.2 MB" },
    { name: "Press Photos (High Resolution)", type: "ZIP", size: "18 MB" },
    { name: "Fact Sheet (PDF)", type: "PDF", size: "1.1 MB" },
    { name: "2025 Annual Report (PDF)", type: "PDF", size: "3.5 MB" },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none">
            News<span className="text-blue-600">room</span>
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Resources and information about ChildSave for media professionals.
          </p>
        </div>
      </section>

      {/* Intro and Media Contact */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-blue-900/5 border border-gray-100 relative group">
            <div className="absolute top-0 left-10 w-20 h-1 bg-blue-600 rounded-full"></div>
            <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-medium">
              ChildSave is a leader in the movement to end poverty. We support
              children and youth in 10 countries, and form programs and
              partnerships that equip them to become sustainably employed,
              contributing citizens.
            </p>
            <div className="mt-10 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center gap-6">
              <p className="font-black text-gray-900 text-sm uppercase tracking-widest text-center md:text-left">
                For media inquiries:
              </p>
              <a
                href="mailto:media@childsave.org"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-50 text-blue-600 rounded-2xl text-xl font-black hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                media@childsave.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Media */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight uppercase">
              Our media team <span className="text-blue-600">provides</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {[
              { icon: "📖", title: "Success stories", text: "Stories about the programs and partnerships we’re cultivating around the globe to help end the generational cycle of poverty." },
              { icon: "💼", title: "Into Employment® expertise", text: "Examples of our customized approach to providing job training that leads to purposeful entry-level positions and dream careers." },
              { icon: "🎤", title: "Expert interviews", text: "Interviews on issues related to child and youth development programming, global health equity and youth workforce development." },
              { icon: "📊", title: "Information & data", text: "Data that can better inform your stories about combatting global poverty through the consistent support of children and youth." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start gap-6 bg-gray-50 p-8 md:p-10 rounded-3xl hover:bg-blue-50 transition-all duration-500 group border border-transparent hover:border-blue-100">
                <div className="text-5xl group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                <div>
                  <h3 className="font-black text-gray-900 text-xl mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Press Releases */}
      <section className="py-16 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
                Recent <span className="text-blue-600">News</span>
              </h2>
              <p className="mt-2 text-gray-500 font-bold uppercase tracking-widest text-sm">Updates & Press Releases</p>
            </div>
            <a
              href="#"
              className="hidden md:inline-block bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-xl"
            >
              View all releases
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {pressReleases.map((release, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-blue-100"
              >
                <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest inline-block mb-6">
                  {release.date}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mt-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {release.title}
                </h3>
                <p className="text-gray-500 mt-6 leading-relaxed font-medium line-clamp-3">
                  {release.summary}
                </p>
                <a
                  href={release.link}
                  className="inline-flex items-center mt-8 text-blue-600 font-black uppercase tracking-widest text-xs group/btn"
                >
                  Read full story 
                  <span className="ml-2 group-hover/btn:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <a href="#" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs">
              View all
            </a>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
              Media <span className="text-blue-600">Resources</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-medium">
              Download logos, photos, reports and more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaResources.map((resource, idx) => (
              <a
                key={idx}
                href="#"
                className="group flex items-center justify-between bg-white p-6 rounded-2xl hover:bg-blue-600 transition-all duration-300 border-2 border-gray-100 hover:border-blue-600 shadow-sm hover:shadow-2xl"
              >
                <div className="text-left">
                  <p className="font-black text-gray-900 group-hover:text-white transition-colors">{resource.name}</p>
                  <p className="text-xs font-bold text-gray-400 group-hover:text-blue-200 uppercase tracking-widest mt-1">
                    {resource.type} • {resource.size}
                  </p>
                </div>
                <span className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                  ⬇️
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-28 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-blue-900/10 border border-gray-100">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-6 tracking-tighter uppercase">
              Media <span className="text-blue-600">Inquiry</span>
            </h2>
            <p className="text-center text-gray-600 font-medium mb-12 leading-relaxed">
              For interview requests, expert commentary, or additional
              materials, please fill out the form below.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">Name</label>
                  <input type="text" className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">Email</label>
                  <input type="email" className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium" placeholder="Email address" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">Media Outlet</label>
                <input type="text" className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium" placeholder="Publication name" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 focus:border-blue-600 focus:bg-white transition-all outline-none font-medium resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-600/30 hover:bg-blue-700 hover:shadow-2xl transition-all active:scale-95"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}




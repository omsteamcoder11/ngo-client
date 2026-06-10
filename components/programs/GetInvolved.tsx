export default function GetInvolved() {
  const ways = [
    {
      step: "01",
      title: "Volunteer On-Site",
      desc: "Join our construction teams, kitchen volunteers, or community outreach workers. No special skills needed — just a willing heart.",
      action: "Apply to Volunteer",
      href: "/volunteer",
    },
    {
      step: "02",
      title: "Sponsor a Program",
      desc: "Fund a specific program — a construction project, a month of meals, or a child's education. Your name honours the work.",
      action: "Become a Sponsor",
      href: "/sponsor-form",
    },
    {
      step: "03",
      title: "Spread the Word",
      desc: "Share our mission with your family, friends, and community. Awareness is the first step toward change.",
      action: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <section className="bg-orange-50 border-t border-orange-100 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-amber-500" />
          <h2 className="text-lg sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
            How to Get Involved
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-l border-t border-orange-100">
          {ways.map((w, idx) => (
            <div key={idx}
              className="border-r border-b border-orange-100 p-6 md:p-8 bg-white hover:bg-orange-50 transition-colors duration-200">
              <span className="text-4xl font-black text-orange-100 leading-none block mb-4">
                {w.step}
              </span>
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-3">
                {w.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{w.desc}</p>
              <a href={w.href}
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 border border-orange-300 text-orange-600 px-5 py-3 font-black text-xs uppercase tracking-widest hover:bg-orange-100 transition-colors">
                {w.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
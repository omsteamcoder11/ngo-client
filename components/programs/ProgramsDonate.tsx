export default function ProgramsDonate() {
  const options = [
    {
      amount: "₹1,000",
      label: "Feed a Family",
      desc: "Provides meals for one family for a full month through our food service.",
    },
    {
      amount: "₹5,000",
      label: "Educate a Child",
      desc: "Covers school fees, books, and uniform for one child for a year.",
    },
    {
      amount: "₹25,000",
      label: "Build a Wall",
      desc: "Funds a structural section of the temple construction.",
    },
    {
      amount: "Any",
      label: "Your Offering",
      desc: "Every contribution, big or small, serves God's people with devotion.",
    },
  ];

  return (
    <section className="bg-orange-600 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-amber-400" />
          <h2 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight">
            Support Our Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-orange-500 mb-10">
          {options.map((opt, idx) => (
            <div key={idx}
              className="border-r border-b border-orange-500 p-6 md:p-8 hover:bg-orange-700 transition-colors duration-200">
              <p className="text-2xl sm:text-3xl font-black text-white mb-2">{opt.amount}</p>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 mb-3 inline-block bg-orange-500 text-white">
                {opt.label}
              </span>
              <p className="text-orange-100 text-sm leading-relaxed mt-2">{opt.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/donate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-colors">
            Donate Now →
          </a>
          <a href="/sponsor-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">
            Sponsor a Seva
          </a>
          <a href="/volunteer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">
            Volunteer With Us
          </a>
        </div>
      </div>
      <div className="h-1 w-full bg-amber-400 mt-12" />
    </section>
  );
}
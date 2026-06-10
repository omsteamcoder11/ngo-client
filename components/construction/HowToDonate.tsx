export default function HowToDonate() {
  const steps = [
    {
      step: "01",
      title: "Choose a Project",
      desc: "Browse our active construction projects and choose the one closest to your heart.",
    },
    {
      step: "02",
      title: "Make a Contribution",
      desc: "Donate any amount online or via bank transfer. Every rupee goes directly to materials and labour.",
    },
    {
      step: "03",
      title: "We Build Together",
      desc: "Our volunteer team and local workers begin construction. You receive updates with photos.",
    },
    {
      step: "04",
      title: "See the Impact",
      desc: "Once complete, we share a full report with photos and the story of the family.",
    },
  ];

  const tiers = [
    { amount: "₹5,000",    label: "Foundation Supporter", desc: "Contributes to raw materials like bricks and cement." },
    { amount: "₹25,000",   label: "Wall Builder",          desc: "Funds an entire wall or structural section of a home." },
    { amount: "₹1,00,000", label: "Home Maker",            desc: "Fully sponsors a single room for a family in need." },
    { amount: "Any",        label: "Your Own Amount",       desc: "Every contribution, big or small, builds something real." },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-orange-600" />
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
            How to Fund a Construction
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-gray-200 mb-16">
          {steps.map((s, idx) => (
            <div key={idx} className="border-r border-b border-gray-200 p-6 sm:p-8 bg-white hover:bg-orange-50 transition-colors duration-200">
              <span className="text-4xl font-black text-orange-100 leading-none block mb-4">
                {s.step}
              </span>
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-3">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-amber-500" />
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
            Contribution Tiers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-gray-200">
          {tiers.map((tier, idx) => (
            <div key={idx} className="border-r border-b border-gray-200 p-6 sm:p-8 bg-white hover:bg-orange-50 transition-colors duration-200">
              <p className="text-2xl font-black text-orange-600 mb-1">{tier.amount}</p>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 mb-3 inline-block bg-orange-50 text-orange-600">
                {tier.label}
              </span>
              <p className="text-gray-500 text-sm leading-relaxed mt-2">{tier.desc}</p>
            </div>
          ))}
        </div>

       <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a href="/donate"
            className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-orange-700 transition-colors">
            Donate Now →
          </a>
          <a href="/sponsor-form"
            className="inline-flex items-center justify-center gap-2 border border-orange-200 text-orange-600 px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-colors">
            Sponsor a Seva
          </a>
        </div>
      </div>
    </section>
  );
}
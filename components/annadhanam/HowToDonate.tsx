export default function HowToDonate() {
  const tiers = [
    {
      amount: "₹500",
      label: "One Day Meal",
      desc: "Sponsors a full day of meals for one person in need.",
    },
    {
      amount: "₹2,500",
      label: "Weekly Feed",
      desc: "Provides nutritious meals for an entire week for a family.",
    },
    {
      amount: "₹10,000",
      label: "Monthly Sponsor",
      desc: "Fully sponsors our food service program for one month.",
    },
    {
      amount: "Any",
      label: "Your Offering",
      desc: "Every rupee you give feeds someone who is hungry today.",
    },
  ];

  return (
    <section className="bg-orange-50 border-t border-orange-100 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-amber-500" />
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
            How to Donate
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-orange-100">
          {tiers.map((tier, idx) => (
            <div key={idx}
              className="border-r border-b border-orange-100 p-6 sm:p-8 bg-white hover:bg-orange-50 transition-colors duration-200">
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
          <a href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-orange-200 text-orange-600 px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
export default function HowWeServe() {
  const steps = [
    {
      step: "01",
      title: "Food Preparation",
      desc: "Every day, our volunteers gather at the temple kitchen to prepare fresh, wholesome meals using donated ingredients.",
    },
    {
      step: "02",
      title: "Community Distribution",
      desc: "Cooked food is distributed directly to the poor, elderly, and homeless in Arrakattalai and surrounding areas.",
    },
    {
      step: "03",
      title: "Temple Prasadam",
      desc: "Sacred prasadam from Uthamar Thiru Kovil is offered to devotees and shared with those who cannot visit the temple.",
    },
    {
      step: "04",
      title: "Special Feeding Drives",
      desc: "On festival days, we organise mass feeding events serving hundreds of meals in a single day.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-orange-600" />
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
            How We Serve
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-gray-200">
          {steps.map((s, idx) => (
            <div key={idx}
              className="border-r border-b border-gray-200 p-6 sm:p-8 bg-white hover:bg-orange-50 transition-colors duration-200">
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
      </div>
    </section>
  );
}
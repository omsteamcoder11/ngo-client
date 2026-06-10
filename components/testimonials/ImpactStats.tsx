export default function ImpactStats() {
  const stats = [
    { value: "200+", label: "Lives Supported", sub: "Families & individuals helped" },
    { value: "340+", label: "Active Volunteers", sub: "Dedicated service members" },
    { value: "12", label: "Years of Service", sub: "Serving since 2010" },
  ];

  return (
    <section className="bg-orange-50 border-b border-orange-100 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-l border-t border-orange-100">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border-r border-b border-orange-100 p-8 md:p-10 bg-white text-center"
            >
              <p className="text-4xl sm:text-5xl font-black text-orange-600 leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-black text-gray-900 uppercase tracking-tight mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-400 font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
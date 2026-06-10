export default function ImpactStats() {
  const stats = [
    { value: "50+",  label: "Homes Built",      sub: "Families sheltered" },
    { value: "10+",  label: "Years of Service",  sub: "Since 2010" },
    { value: "100+", label: "Volunteers",        sub: "Who gave their time" },
    { value: "3",    label: "Ongoing Projects",  sub: "Currently active" },
  ];

  return (
    <section className="bg-orange-50 border-t border-b border-orange-100 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-orange-600" />
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
            Our Impact
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-orange-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="border-r border-b border-orange-100 p-8 bg-white">
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
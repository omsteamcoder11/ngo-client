export default function ProgramsList() {
  const programs = [
    {
      number: "01",
      title: "Building Construction",
      tag: "Infrastructure",
      desc: "We build homes for the homeless and temple infrastructure for the community. Every structure is built with donated funds and volunteer labour.",
      highlights: ["Homes for homeless families", "Temple hall construction", "Community infrastructure", "Volunteer-led builds"],
    },
    {
      number: "02",
      title: "Food Service",
      tag: "Nutrition",
      desc: "Every day, our volunteers prepare and distribute fresh meals and sacred prasadam to the poor, elderly, and hungry across Arrakattalai.",
      highlights: ["Daily meal distribution", "Temple prasadam", "Festival feeding drives", "Elder care nutrition"],
    },
    {
      number: "03",
      title: "Poor Children Fund",
      tag: "Education & Care",
      desc: "We fund school fees, books, uniforms, meals, and health checkups for underprivileged children so no child is left behind.",
      highlights: ["School fees & uniforms", "Books & stationery", "Daily nutrition", "Health checkups"],
    },
    {
      number: "04",
      title: "Community Welfare",
      tag: "Social Support",
      desc: "Beyond our core programs, we support families in crisis, connect people with resources, and organise community events throughout the year.",
      highlights: ["Family crisis support", "Community events", "Festival celebrations", "Elder welfare"],
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-orange-600" />
          <h2 className="text-lg sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
            All Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-gray-200">
          {programs.map((program, idx) => (
            <div key={idx}
              className="border-r border-b border-gray-200 p-6 md:p-8 bg-white">

              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-black text-orange-100 leading-none">
                  {program.number}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-orange-50 text-orange-600">
                  {program.tag}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-black text-gray-900 uppercase tracking-tight mb-3">
                {program.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {program.desc}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {program.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span className="text-xs text-gray-500 font-medium">{h}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
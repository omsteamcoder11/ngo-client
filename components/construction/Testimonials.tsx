export default function Testimonials() {
  const testimonials = [
    {
      name: "Recipient Name",
      location: "Arrakattalai, Tamil Nadu",
      quote: "Thanks to Makal Sevai Margam, our family now has a proper roof over our heads. God bless all the donors.",
      initial: "R",
    },
    {
      name: "Volunteer Name",
      location: "Volunteer, Since 2018",
      quote: "Being part of the construction team is one of the most fulfilling things I have done. We build hope for families.",
      initial: "V",
    },
    {
      name: "Donor Name",
      location: "Donor, Chennai",
      quote: "I funded a room as an offering in my mother's name. Seeing the family move in brought tears to my eyes.",
      initial: "D",
    },
  ];

  return (
    <section className="bg-orange-600 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-amber-400" />
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            What People Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-orange-500">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border-r border-b border-orange-500 p-6 sm:p-8 hover:bg-orange-700 transition-colors duration-200">
              <span className="text-5xl font-black text-orange-400 leading-none block mb-4">"</span>
              <p className="text-white/85 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-orange-500">
                <div className="w-10 h-10 bg-amber-400 flex items-center justify-center text-orange-900 font-black text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-white font-black text-sm uppercase tracking-tight">{t.name}</p>
                  <p className="text-orange-200 text-xs font-medium">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-1 w-full bg-amber-400 mt-16" />
    </section>
  );
}
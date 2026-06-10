export default function TestimonialsGrid() {
  const testimonials = [
    {
      quote: "I have worked with many organisations over 20 years but Makal Sevai Margam stands apart. Their commitment to every single person is unwavering. This is not just an NGO — it is a family that refuses to give up on anyone.",
      name: "Sister Mary Thomas",
      role: "Community Partner",
      location: "Arrakattalai, Tamil Nadu",
      initial: "MT",
      category: "Partner",
    },
    {
      quote: "Before Makal Sevai Margam helped us, my children could not go to school. Now my son is in 5th standard and wants to become a teacher. God bless everyone who donated.",
      name: "Lakshmi",
      role: "Parent",
      location: "Arrakattalai, Tamil Nadu",
      initial: "L",
      category: "Parent",
    },
    {
      quote: "I have been volunteering with the food service for 3 years. Seeing the smile on an elderly person's face when we bring them a hot meal — that is my blessing.",
      name: "Murugan",
      role: "Volunteer",
      location: "Arrakattalai, Tamil Nadu",
      initial: "M",
      category: "Volunteer",
    },
    {
      quote: "I donated to build a room for a homeless family as an offering. When I saw the photos of them moving in, I cried with joy. This is what true devotion means.",
      name: "Priya",
      role: "Donor",
      location: "Chennai, Tamil Nadu",
      initial: "P",
      category: "Donor",
    },
    {
      quote: "Thanks to the Poor Children Fund, my daughter received books, uniform, and school fees. She is now the first in our family to go to college.",
      name: "Ramesh",
      role: "Parent",
      location: "Arrakattalai, Tamil Nadu",
      initial: "R",
      category: "Parent",
    },
    {
      quote: "Being part of the construction team changed my life. I helped build homes for 5 families last year. This seva gives me peace.",
      name: "Kumar",
      role: "Volunteer Builder",
      location: "Arrakattalai, Tamil Nadu",
      initial: "K",
      category: "Volunteer",
    },
  ];

  const categoryColors: Record<string, { bg: string; text: string }> = {
    Parent: { bg: 'rgba(234,88,12,0.10)', text: '#ea580c' },
    Volunteer: { bg: 'rgba(217,119,6,0.10)', text: '#d97706' },
    Donor: { bg: 'rgba(251,191,36,0.15)', text: '#b45309' },
    Partner: { bg: 'rgba(234,88,12,0.08)', text: '#c2410c' },
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-orange-600" />
          <h2 className="text-lg sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
            What People Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-gray-200">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="border-r border-b border-gray-200 p-6 md:p-8 bg-white hover:bg-orange-50 transition-colors duration-200"
            >
              <span className="text-5xl font-black text-orange-100 leading-none block mb-4">
                "
              </span>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                    style={{ background: idx % 2 === 0 ? '#ea580c' : '#d97706' }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-900 uppercase tracking-tight">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">{t.role}</p>
                    <p className="text-[10px] text-gray-300">{t.location}</p>
                  </div>
                </div>
                <span
                  className="text-[9px] font-black uppercase tracking-wider px-2 py-1"
                  style={{
                    background: categoryColors[t.category]?.bg,
                    color: categoryColors[t.category]?.text,
                  }}
                >
                  {t.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
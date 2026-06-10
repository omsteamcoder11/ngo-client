export default function TestimonialsHero() {
  return (
    <section style={{ background: '#ea580c' }} className="pt-[72px] md:pt-[80px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 inline-block bg-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400">
              Don't Believe Us? See Results
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-5">
            Real <span className="text-amber-400">Testimonials</span>
          </h1>
          <p className="text-white/75 text-sm sm:text-lg max-w-xl leading-relaxed font-medium">
            Hear from parents, children, volunteers, and donors who are part of the 
            Makal Sevai Margam family in Arrakattalai, Tamil Nadu.
          </p>
        </div>
      </div>
      <div className="h-1 w-full bg-amber-600" />
    </section>
  );
}
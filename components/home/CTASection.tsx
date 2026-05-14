export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#6da4d0] via-[#5f9bc6] to-[#4f84ad] px-6 sm:px-10 lg:px-16 py-14 sm:py-16 shadow-[0_35px_90px_-25px_rgba(79,132,173,0.6)] text-center">
        
        {/* Glow */}
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-blue-200/20 rounded-full blur-[120px]" />

        <div className="relative flex flex-col items-center gap-6 sm:gap-8">

          {/* BADGE */}
          <span className="inline-flex rounded-full bg-white/25 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md ring-1 ring-white/30">
            Support a Child
          </span>

          {/* 🔥 SIMPLE HEADING */}
          <h2 className="max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Give a child a better future
          </h2>

          {/* SIMPLE DESCRIPTION */}
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-blue-50/90 leading-relaxed">
            Your support helps provide education, care, and hope.
          </p>

          {/* BUTTON */}
          <div className="mt-2 sm:mt-4">
            <a
              href="/sponsor-a-child"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-[#4f84ad] shadow-lg transition-all duration-300 hover:scale-105"
            >
              Sponsor Now ❤️
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}




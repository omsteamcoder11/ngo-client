export default function CTASection() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
      <div
        className="relative overflow-hidden rounded-2xl px-6 sm:px-10 lg:px-14 py-10 sm:py-12 text-center"
        style={{
          background: "#fff",
          border: "1px solid #edd9c8",
          boxShadow: "0 20px 40px -12px rgba(0,0,0,0.05)",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "#d94f00" }}
        />

        {/* Decorative lamp icon - subtle */}
        <div className="absolute top-4 right-4 opacity-5 text-3xl">
          🪔
        </div>

        <div className="relative flex flex-col items-center gap-5">
          {/* Badge */}
          <span
            className="inline-flex rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              background: "#fdf6f0",
              border: "1px solid #edd9c8",
              color: "#d94f00",
            }}
          >
            UthamAr Thiru Kovil · Arrakattalai
          </span>

          {/* Heading */}
          <h2 className="max-w-2xl text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Your Support Can Change
            <br />
            <span style={{ color: "#d94f00" }}>A Life Forever.</span>
          </h2>

          {/* Description */}
          <p className="max-w-xl text-sm sm:text-base text-gray-500 leading-relaxed">
            Building homes, feeding the hungry, and funding the future
            of poor children — rooted in the blessings of UthamAr
            Thiru Kovil, Arrakattalai.
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap justify-center gap-8 sm:gap-12 py-4 border-y w-full max-w-lg"
            style={{ borderColor: "#edd9c8" }}
          >
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-black text-orange-600 leading-none">500+</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-1">Lives Changed</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-black text-orange-600 leading-none">1000+</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-1">Meals Served</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-black text-orange-600 leading-none">50+</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-1">Homes Built</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "#d94f00",
                boxShadow: "0 4px 12px rgba(217,79,0,0.25)",
              }}
            >
              🙏 Donate Now
            </a>

            <a
              href="/volunteer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-orange-50 active:scale-95"
              style={{
                border: "1.5px solid #d94f00",
                color: "#d94f00",
              }}
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
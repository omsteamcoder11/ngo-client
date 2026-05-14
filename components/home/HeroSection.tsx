export default function HeroSection() {
  return (
    <section className="overflow-hidden mt-[80px] px-4 py-6">
      <div className="mx-auto max-w-7xl">

        {/* OUTER CONTAINER — clean shadow, no gradient border */}
        <div
          className="relative rounded-[2rem] overflow-hidden
            shadow-[0_8px_60px_rgba(31,155,224,0.35)]"
        >
          {/* INNER CARD */}
          <div
            className="relative overflow-hidden rounded-[2rem]
              bg-[#1f9be0] px-5 py-8 sm:px-8 sm:py-10
              md:px-10 md:py-12 lg:px-14 lg:py-16"
          >
            {/* SOFT LIGHT EFFECT */}
            <div
              className="absolute inset-0
                bg-[radial-gradient(circle_at_top_left,
                rgba(255,255,255,0.15),transparent_40%)]
                pointer-events-none"
              aria-hidden="true"
            />

            {/* SUBTLE TOP ACCENT LINE */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]
                bg-gradient-to-r from-cyan-400 via-blue-400
                to-purple-400 opacity-70"
              aria-hidden="true"
            />

            <div
              className="relative z-10 grid gap-10 sm:gap-12
                lg:grid-cols-[1.05fr_0.95fr] items-center"
            >

              {/* IMAGE */}
              <div
                className="relative w-full max-w-sm sm:max-w-md
                  mx-auto order-1 lg:order-2"
              >
                {/* IMAGE CARD — clean inner glow, no border wrapper */}
                <div
                  className="relative overflow-hidden rounded-[1.5rem]
                    shadow-[0_0_40px_rgba(56,189,248,0.4)]
                    bg-white/10 backdrop-blur-md p-2"
                >
                  <div
                    className="relative w-full h-56 sm:h-64 md:h-72
                      lg:h-[360px] rounded-[1.25rem] overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/hero/1.webp')" }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t
                        from-black/30 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Floating dot decorations */}
                <div
                  className="absolute -top-3 -right-3 w-6 h-6
                    rounded-full bg-cyan-300/40 blur-sm
                    hidden lg:block"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-3 -left-3 w-8 h-8
                    rounded-full bg-purple-300/30 blur-sm
                    hidden lg:block"
                  aria-hidden="true"
                />
              </div>

              {/* CONTENT */}
              <div
                className="max-w-xl text-center lg:text-left
                  mx-auto lg:mx-0 order-2 lg:order-1"
              >
                {/* Badge — hidden on mobile */}
                <div
                  className="hidden md:inline-flex items-center gap-3
                    rounded-full bg-white/80 backdrop-blur-md
                    px-3 py-2 sm:px-4 shadow-lg"
                >
                  <div
                    className="flex h-9 w-9 sm:h-10 sm:w-10
                      items-center justify-center rounded-full
                      bg-[#ffd45c] text-lg"
                  >
                    ✦
                  </div>
                  <div>
                    <p
                      className="text-[0.65rem] font-bold uppercase
                        tracking-widest text-[#ff6b57]"
                    >
                      BrightFuture NGO
                    </p>
                    <p className="text-xs text-sky-700">
                      Education, meals, care
                    </p>
                  </div>
                </div>

                {/* Tagline — hidden on mobile */}
                <p
                  className="hidden md:block mt-6 text-xs font-semibold
                    uppercase tracking-[0.3em] text-sky-100"
                >
                  Stand with vulnerable children
                </p>

                {/* Main title */}
                <h1
                  className="mt-3 text-2xl sm:text-3xl md:text-4xl
                    lg:text-6xl font-black uppercase leading-tight
                    tracking-tight text-white"
                >
                  Help a Child,
                  <br />
                  Change a Life
                </h1>

                {/* Description — hidden on mobile */}
                <p
                  className="hidden md:block mt-4 text-sm md:text-base
                    lg:text-lg leading-relaxed text-sky-50/90
                    max-w-md mx-auto lg:mx-0"
                >
                  Support underprivileged children with school access,
                  healthy meals, safe shelter, and the care they need
                  to grow with confidence.
                </p>

                {/* Buttons */}
                <div
                  className="mt-6 sm:mt-8 flex flex-col sm:flex-row
                    items-center gap-3 sm:gap-4
                    sm:justify-center lg:justify-start"
                >
                  
                   <a href="/donate"
                    className="w-full sm:w-auto inline-flex items-center
                      justify-center rounded-full bg-[#ff6b57]
                      px-6 sm:px-8 py-3 sm:py-4
                      text-xs sm:text-sm font-bold uppercase
                      tracking-[0.2em] text-white
                      shadow-[0_4px_20px_rgba(255,107,87,0.5)]
                      transition-all duration-200
                      hover:scale-105
                      hover:shadow-[0_4px_30px_rgba(255,107,87,0.7)]
                      active:scale-95"
                  >
                    Donate Now
                  </a>

                  <div
                    className="w-full sm:w-auto inline-flex items-center
                      justify-center gap-2 sm:gap-3 rounded-full
                      bg-white/20 px-4 sm:px-5 py-2 sm:py-3
                      text-xs sm:text-sm text-white backdrop-blur-md"
                  >
                    <span
                      className="flex h-8 w-8 sm:h-9 sm:w-9
                        items-center justify-center rounded-full
                        bg-white text-sky-600 font-bold text-xs"
                    >
                      500+
                    </span>
                    Children supported
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
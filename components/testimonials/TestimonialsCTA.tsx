export default function TestimonialsCTA() {
  return (
    <section className="bg-orange-600 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-6xl font-black text-orange-400 leading-none block mb-4">
            "
          </span>
          <p className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-snug mb-6">
            Every life changed is a testimony<br />
            of faith and devotion.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/share-story"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-colors"
            >
              Share Your Story →
            </a>
            <a
              href="/volunteer"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Join Our Family
            </a>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-amber-400 mt-10" />
    </section>
  );
}
"use client";

import { DonateForm } from "./DonateForm";

const T = {
  saffron:      "#ea580c",
  saffronDeep:  "#c2410c",
  saffronLight: "#fb923c",
  gold:         "#d97706",
  goldLight:    "#fbbf24",
};

export default function DonatePage() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative bg-white border-b overflow-hidden py-14 md:py-20 lg:py-28"
        style={{ borderColor: "rgba(234,88,12,0.10)" }}>

        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(234,88,12,0.07) 0%, transparent 70%)",
          }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border"
              style={{ borderColor: "rgba(234,88,12,0.30)", color: T.saffron, background: "rgba(234,88,12,0.06)" }}>
              🪔 80G Tax Exemption
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border"
              style={{ borderColor: "rgba(217,119,6,0.30)", color: T.gold, background: "rgba(217,119,6,0.06)" }}>
              ✨ 100% Goes to the Cause
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            style={{ color: "#1c0a00" }}>
            Offer Seva.{" "}
            <span style={{
              background: `linear-gradient(135deg, ${T.saffron}, ${T.gold})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Earn Blessings.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-semibold"
            style={{ color: T.saffron }}>
            உதவி செய்யுங்கள் • Serve with Devotion
          </p>

          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Rooted in the teachings of Vallalar — feed the hungry, build the temple,
            educate the child. Every rupee you offer creates a ripple of compassion
            that blesses generations.
          </p>

          <div className="mt-10 inline-grid grid-cols-3 gap-px rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(234,88,12,0.12)" }}>
            {[
              { value: "500+", label: "Lives Touched" },
              { value: "10+",  label: "Years of Seva" },
              { value: "3",    label: "Core Programs" },
            ].map((s) => (
              <div key={s.label} className="px-5 sm:px-8 py-4 sm:py-5 text-center bg-white hover:bg-orange-50 transition-colors">
                <p className="text-xl sm:text-2xl font-extrabold" style={{ color: T.saffron }}>{s.value}</p>
                <p className="text-xs font-semibold text-gray-400 mt-0.5 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donate Form ── */}
      <section className="py-10 md:py-14 border-b"
        style={{ background: "#fff8f3", borderColor: "rgba(234,88,12,0.08)" }}>
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <DonateForm />
        </div>
      </section>

      {/* ── Seva Funds ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(234,88,12,0.08)", color: T.saffron }}>
              Ways to Give
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ color: "#1c0a00" }}>
              Choose Your Seva
            </h2>
            <div className="mt-3 mx-auto w-14 h-1 rounded-full"
              style={{ background: `linear-gradient(90deg,${T.saffron},${T.gold})` }} />
            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              From feeding a single devotee to sponsoring an entire festival — every act of giving is sacred.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            <SevaCard emoji="🍱" title="Annadhanam Fund"
              description="Sponsor free meals for devotees and the poor. Vallalar taught that feeding the hungry is the highest form of worship."
              link="/donate?fund=annadhanam" tag="Most Popular" />
            <SevaCard emoji="🏛️" title="Temple Construction"
              description="Contribute to the building and renovation of the temple complex — a permanent legacy of your faith."
              link="/donate?fund=construction" />
            <SevaCard emoji="📚" title="Education Aid"
              description="Fund school fees, books, and supplies for underprivileged children in the temple community."
              link="/donate?fund=education" />
            <SevaCard emoji="🪔" title="Festival Sponsorship"
              description="Be the sponsor of a sacred festival celebration — from decorations to prasad distribution."
              link="/donate?fund=festival" />
            <SevaCard emoji="🏥" title="Medical Camp"
              description="Support free medical check-up camps for the elderly and the poor organised by the trust."
              link="/donate?fund=medical" />
            <SevaCard emoji="🙏" title="General Seva Fund"
              description="Your contribution goes where it is needed most — supporting all ongoing seva activities of the trust."
              link="/donate?fund=general" />
          </div>
        </div>
      </section>

      {/* ── In-Kind Seva ── */}
      <section className="py-14 md:py-20 border-y"
        style={{ background: "#fff8f3", borderColor: "rgba(234,88,12,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(234,88,12,0.08)", color: T.saffron }}>
              Beyond Money
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ color: "#1c0a00" }}>
              Donate In-Kind
            </h2>
            <div className="mt-3 mx-auto w-14 h-1 rounded-full"
              style={{ background: `linear-gradient(90deg,${T.saffron},${T.gold})` }} />
            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              No contribution is too small. Offer what you have — your time, your goods, your presence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <InKindCard emoji="🛒" title="Groceries & Provisions"
              description="Donate rice, dal, oil, and other provisions directly for Annadhanam preparation." />
            <InKindCard emoji="👕" title="Clothes & Essentials"
              description="Donate new or gently used clothing, blankets, and daily essentials for the needy." />
            <InKindCard emoji="🤝" title="Volunteer Service"
              description="Offer your time and skills — help at events, camps, or administrative work." />
          </div>

          <p className="text-center mt-8 text-sm text-gray-400">
            To arrange an in-kind donation, please{" "}
            <a href="/contact" style={{ color: T.saffron }} className="font-semibold hover:underline">
              contact us
            </a>.
          </p>
        </div>
      </section>

      {/* ── Monthly Seva CTA ── */}
      <section className="py-14 sm:py-20 bg-white border-t"
        style={{ borderColor: "rgba(234,88,12,0.08)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="text-4xl mb-4">🪔</div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ color: "#1c0a00" }}>
            Become a Monthly{" "}
            <span style={{
              background: `linear-gradient(135deg,${T.saffron},${T.gold})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Seva Supporter
            </span>
          </h3>

          <div className="mt-3 mx-auto w-14 h-1 rounded-full"
            style={{ background: `linear-gradient(90deg,${T.saffron},${T.gold})` }} />

          <p className="text-gray-500 mt-5 mb-8 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A monthly commitment — however small — ensures uninterrupted Annadhanam,
            continuous construction, and year-round community support. Be the steady
            flame that never goes out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="/donate?frequency=monthly"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm sm:text-base transition-all active:scale-95 hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg,${T.saffron},${T.saffronDeep})`,
                boxShadow: "0 4px 20px rgba(234,88,12,0.35)",
              }}>
              🙏 Start Monthly Seva
            </a>
            <a href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all active:scale-95 hover:-translate-y-0.5"
              style={{
                color: T.saffron,
                border: "1.5px solid rgba(234,88,12,0.30)",
                background: "transparent",
              }}>
              Have Questions? Contact Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ── SevaCard ── */
function SevaCard({
  emoji, title, description, link, tag,
}: {
  emoji: string; title: string; description: string; link: string; tag?: string;
}) {
  return (
    <a href={link}
      className="group relative block rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ background: "#ffffff", borderColor: "rgba(234,88,12,0.12)" }}>

      {tag && (
        <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ background: "rgba(234,88,12,0.08)", color: "#ea580c" }}>
          {tag}
        </span>
      )}

      <div className="h-1 rounded-full mb-5 w-8 group-hover:w-14 transition-all duration-300"
        style={{ background: "linear-gradient(90deg,#ea580c,#d97706)" }} />

      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: "#1c0a00" }}>{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      <span className="inline-flex items-center mt-4 text-xs font-bold uppercase tracking-wider"
        style={{ color: "#ea580c" }}>
        Give to this seva{" "}
        <span className="ml-1.5 group-hover:translate-x-1 transition-transform inline-block">→</span>
      </span>
    </a>
  );
}

/* ── InKindCard ── */
function InKindCard({
  emoji, title, description,
}: {
  emoji: string; title: string; description: string;
}) {
  return (
    <div className="rounded-2xl p-5 sm:p-6 border text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      style={{ background: "#ffffff", borderColor: "rgba(234,88,12,0.12)" }}>
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl text-3xl border"
        style={{ background: "rgba(234,88,12,0.06)", borderColor: "rgba(234,88,12,0.12)" }}>
        {emoji}
      </div>
      <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: "#1c0a00" }}>{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
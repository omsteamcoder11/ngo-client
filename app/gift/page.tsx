import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Planning & Legacy Giving | ChildSave",
  description:
    "Create a lasting legacy by including ChildSave in your will, trust, or other planned giving arrangements. Learn about bequests, charitable gift annuities, and more.",
};

export default function GiftPlanningPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Create a lasting legacy
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-600 font-semibold max-w-2xl mx-auto uppercase tracking-wide">
            Gift planning for a better future
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you include ChildSave in your estate plans, you ensure that
            children and families will continue to break free from poverty for
            generations to come.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
              "Planned gifts are a powerful way to support ChildSave’s mission
              while achieving your own financial and philanthropic goals.
              Whether you choose a bequest in your will, a charitable gift
              annuity, or a trust arrangement, your generosity will have a
              lasting impact on children and families around the world."
            </p>
          </div>
        </div>
      </section>

      {/* Planned Giving Options */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Planned giving options
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Choose the approach that best fits your financial and charitable
              goals.
            </p>
          </div>
          {/* Grid optimized for Mobile (1), Tablet (2), and Desktop (3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <GiftOptionCard
              title="Bequest (Will or Trust)"
              description="Include ChildSave in your will or living trust. You can designate a specific amount, a percentage of your estate, or residual assets."
              icon="📜"
            />
            <GiftOptionCard
              title="Charitable Gift Annuity"
              description="Receive fixed payments for life while making a gift to ChildSave. Enjoy tax benefits and a reliable income stream."
              icon="💰"
            />
            <GiftOptionCard
              title="Charitable Remainder Trust"
              description="Place assets in a trust that pays income to you or your beneficiaries for a set period, after which the remainder goes to ChildSave."
              icon="🤝"
            />
            <GiftOptionCard
              title="Retirement Plan Beneficiary"
              description="Name ChildSave as a beneficiary of your IRA, 401(k), or other retirement plan. This can be a tax‑efficient way to give."
              icon="📈"
            />
            <GiftOptionCard
              title="Life Insurance"
              description="Designate ChildSave as the owner or beneficiary of a life insurance policy. You may receive a charitable deduction."
              icon="🛡️"
            />
            <GiftOptionCard
              title="Donor‑Advised Fund"
              description="Recommend a grant from your DAF to support ChildSave now or in the future. Learn about successor advisors."
              icon="🏦"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Benefits of planned giving
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <BenefitCard
              title="Tax Advantages"
              description="Reduce income, estate, or capital gains taxes depending on the type of gift."
              icon="📊"
            />
            <BenefitCard
              title="Income for Life"
              description="Certain plans, like charitable gift annuities, provide you with guaranteed income for life."
              icon="💵"
            />
            <BenefitCard
              title="Lasting Impact"
              description="Your gift ensures children and families can escape poverty for generations to come."
              icon="🌟"
            />
          </div>
        </div>
      </section>

      {/* Sample Bequest Language */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 md:mb-8">
            Sample bequest language
          </h2>
          <div className="bg-gray-900 rounded-xl p-5 md:p-8 border border-gray-800 shadow-xl relative">
             <div className="absolute top-4 right-4 text-gray-500 text-xs font-mono uppercase tracking-widest">Legal Sample</div>
            <p className="font-mono text-sm sm:text-base text-blue-100 whitespace-pre-wrap leading-relaxed">
              "I give, devise, and bequeath to ChildSave, a nonprofit
              organization with its principal office at [Address], the sum of
              $______ (or ____% of the residue of my estate) to be used for its
              general purposes."
            </p>
          </div>
          <p className="text-center text-gray-500 mt-6 text-xs sm:text-sm">
            Please contact us for our full legal name, tax ID, and specific
            language tailored to your intent.
          </p>
        </div>
      </section>

      {/* Next Steps / CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to plan your legacy?
          </h2>
          <p className="text-base sm:text-lg text-blue-50 mb-10 max-w-2xl mx-auto">
            Our planned giving team is here to answer your questions and help
            you choose the option that best meets your goals—all in confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all active:scale-95 shadow-lg"
            >
              Contact Our Team
            </a>
            <a
              href="#"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95"
            >
              Request Free Brochure
            </a>
          </div>
          <p className="mt-10 text-blue-200 text-xs sm:text-sm opacity-80">
            We recommend consulting with your financial and legal advisors
            before making a planned gift.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="border-t border-gray-200 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[10px] sm:text-xs text-gray-500 leading-relaxed uppercase tracking-widest">
          <p>
            The information on this page is for educational purposes only and
            does not constitute legal or financial advice. Please consult with
            your professional advisors to determine the best strategy for your
            situation.
          </p>
        </div>
      </div>
    </main>
  );
}

// Reusable Gift Option Card
function GiftOptionCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mt-3 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Reusable Benefit Card
function BenefitCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-200 hover:border-blue-200 transition-colors">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
}




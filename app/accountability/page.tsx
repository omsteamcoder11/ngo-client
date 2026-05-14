// app/accountability/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accountability & Financial Transparency | ChildSave",
  description:
    "See how ChildSave ensures every donation is managed with care, independent audits, and rigorous oversight. We're committed to maximizing impact for children.",
};

export default function AccountabilityPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Smart Giving
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Accountability: Maximizing the Benefit of your Funds
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            At ChildSave, every dollar you give is managed with care, backed by
            independent audits, rigorous financial oversight and a commitment to
            ethical practices.
          </p>
        </div>
      </section>

      {/* Charity Ratings Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              ChildSave charity ratings
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Some of the most trusted names in the industry have taken notice
              of how efficiently we use your donations.
            </p>
          </div>
          
          {/* Responsive Grid: 1 col on mobile, 2 on tablet (md), 3 on desktop (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Rating Card 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Charity Navigator</h3>
                  <span className="text-2xl sm:text-3xl">⭐️⭐️⭐️⭐️</span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  ChildSave has received <strong>4 out of 4 stars</strong> from Charity Navigator, with the highest score of 100 in accountability.
                </p>
              </div>
            </div>

            {/* Rating Card 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">CharityWatch</h3>
                <span className="text-2xl sm:text-3xl font-bold text-green-700">A-</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                CharityWatch named ChildSave as a top-rated charity with an <strong>“A-” grade</strong> based on financial efficiency.
              </p>
            </div>

            {/* Rating Card 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Great Nonprofits</h3>
                <span className="text-2xl sm:text-3xl">🏆</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Great Nonprofits has recognized ChildSave as a <strong>Top-Rated Charity</strong> based on community feedback.
              </p>
            </div>

            {/* Rating Card 4 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Candid</h3>
                <span className="text-2xl sm:text-3xl">💎</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                ChildSave has earned Candid's <strong>Platinum Seal of Transparency</strong>, the highest level offered.
              </p>
            </div>

            {/* Rating Card 5 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">BBB Wise Giving</h3>
                <span className="text-2xl sm:text-3xl">✓</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                ChildSave meets the Better Business Bureau standards for charity accountability on all <strong>20 categories</strong>.
              </p>
            </div>

            {/* Quote Card */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-center text-center">
              <div>
                <p className="text-gray-500 italic text-sm sm:text-base">
                  “ChildSave’s dedication to transparency sets a benchmark for child-focused organizations.”
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700">
                  — Independent Review Panel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Financial Docs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Looking for more?</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Resources you can use to check out ChildSave:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: "📘", title: "Annual Report (PDF)", desc: "Review of facts and financials." },
              { icon: "📄", title: "Form 990 (PDF)", desc: "Tax return showing income/expenses." },
              { icon: "🔍", title: "Audited Financials", desc: "Independently audited statements." },
              { icon: "📊", title: "Candid Profile", desc: "Leading source of nonprofit info." },
              { icon: "🏷️", title: "Tax ID / EIN", desc: "ChildSave's ID: XX-XXXXXXX" },
            ].map((item, idx) => (
              <a key={idx} href="#" className="block bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition border border-gray-200">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Where your donation goes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Where your donation goes
            </h2>
            <div className="bg-blue-50 rounded-2xl p-6 md:p-10">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Your confidence in our work is extremely important to us. We’ve
                established stringent accounting and financial reporting
                procedures.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Your sponsorship contributions are transferred
                directly to the field agencies to provide
                benefits tailored to each child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checks and balances */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Checks and balances
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: "✓", text: "Thorough system of checks and balances to ensure funds are spent as planned." },
                { icon: "🔍", text: "Independent audits of every agency align funds with approved budgets." },
                { icon: "🌍", text: "HQ representatives perform frequent reviews of facilities and conduct field interviews." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="text-xl sm:text-2xl shrink-0">{item.icon}</div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Stat */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-green-100">
            <div className="text-5xl sm:text-6xl font-extrabold text-green-700 mb-4">82%</div>
            <p className="text-lg sm:text-xl text-gray-800 font-medium">
              of our total operating expenses supported programs for children in FY 2024.
            </p>
          </div>
          <div className="mt-10 sm:mt-12 max-w-2xl mx-auto">
            <p className="text-gray-700 text-base sm:text-lg">
              Thank you for choosing ChildSave. Your support delivers positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8 px-4 text-center">
        <p className="max-w-7xl mx-auto text-xs sm:text-sm text-gray-500 leading-relaxed">
          ChildSave is a registered 501(c)(3) nonprofit organization. All
          donations are tax-deductible to the extent allowed by law.
        </p>
      </footer>
    </main>
  );
}




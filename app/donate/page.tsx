// app/donate/page.tsx
import { Metadata } from "next";
import { DonateForm } from "./DonateForm";

export const metadata: Metadata = {
  title: "Make a Charitable Donation | ChildSave",
  description:
    "Your gift helps children break the cycle of poverty. Donate to ChildSave today and create lasting change. 100% tax-deductible.",
};

export default function DonatePage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Give a gift. Change a life.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Make a charitable donation to help children in poverty
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your gift helps kids on the path out of poverty, creating a ripple
            effect that impacts generations. <br className="hidden sm:block" />
            <span className="text-xs sm:text-sm text-gray-400 mt-2 block font-medium">
              (Gifts are 100% tax-deductible.)
            </span>
          </p>
        </div>
      </section>

      {/* Donation Form - Client Component */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonateForm />
        </div>
      </section>

      {/* More Giving Options */}
      <section className="py-12 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              More giving options
            </h2>
            <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              From making a lasting difference in one child’s life to uplifting
              a community of thousands.
            </p>
          </div>
          {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <FundCard
              title="Our Mission"
              description="Give to support our mission. Your gift provides critical programs and creates hope for kids living in poverty."
              link="/donate?fund=mission"
            />
            <FundCard
              title="Into Employment®"
              description="Help youth secure sustainable employment and break the cycle of poverty through job training."
              link="/donate?fund=into-employment"
            />
            <FundCard
              title="Waiting Child Fund"
              description="Your gift provides critical support for children who are waiting for sponsors."
              link="/donate?fund=waiting-child"
            />
            <FundCard
              title="Birthday Fund"
              description="Help provide birthday gifts for children on their special day."
              link="/donate?fund=birthday"
            />
            <FundCard
              title="Christmas Fund"
              description="Help provide a holiday gift for children in poverty."
              link="/donate?fund=christmas"
            />
            <FundCard
              title="Family Gift Fund"
              description="Support entire families with essentials like food, hygiene kits, and household items."
              link="/donate?fund=family"
            />
          </div>
        </div>
      </section>

      {/* Non-Cash Gifts */}
      <section className="py-12 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Donate non-cash gifts
            </h2>
            <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Create meaningful change across the globe when you make a noncash gift.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="#"
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all text-center border border-gray-200 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📈</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Stock</h3>
              <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
                Donate appreciated stock for maximum tax benefit.
              </p>
            </a>
            <a
              href="#"
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all text-center border border-gray-200 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏦</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                Donor-Advised Fund (DAF)
              </h3>
              <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
                Recommend a grant from your DAF to ChildSave.
              </p>
            </a>
            <a
              href="#"
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all text-center border border-gray-200 group sm:col-span-2 lg:col-span-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">₿</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Cryptocurrency
              </h3>
              <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
                Donate Bitcoin, Ethereum, and more securely.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Recurring Gift CTA */}
      <div className="bg-blue-600 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Make a Recurring Gift
          </h3>
          <p className="text-blue-100 mb-8 text-sm sm:text-lg max-w-xl mx-auto">
            Provide reliable, ongoing support that empowers children and
            families all year long.
          </p>
          <a
            href="/donate?frequency=monthly"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg active:scale-95 text-base sm:text-lg"
          >
            Set Up Monthly Giving
          </a>
        </div>
      </div>
    </main>
  );
}

// Static FundCard component
function FundCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="group block bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
    >
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
      <span className="inline-flex items-center mt-6 text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider">
        Give to this fund <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </span>
    </a>
  );
}




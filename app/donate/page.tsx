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
      <section className="bg-white border-b border-gray-100 py-14 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-[#2E7D5E] text-[#2E7D5E] bg-[#2E7D5E]/5">
            100% Tax-Deductible
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7B1F3A] tracking-tight leading-tight">
            Give a gift. Change a life.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#2E7D5E] max-w-2xl mx-auto font-medium">
            Make a charitable donation to help children in poverty
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Your gift helps kids on the path out of poverty, creating a ripple
            effect that impacts generations.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-10 md:py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonateForm />
        </div>
      </section>

      {/* More Giving Options */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#7B1F3A]">
              More giving options
            </h2>
            <div className="mt-3 mx-auto w-12 h-0.5 rounded-full bg-[#2E7D5E]" />
            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              From making a lasting difference in one child's life to uplifting
              a community of thousands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
      <section className="py-14 md:py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#7B1F3A]">
              Donate non-cash gifts
            </h2>
            <div className="mt-3 mx-auto w-12 h-0.5 rounded-full bg-[#2E7D5E]" />
            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              Create meaningful change across the globe when you make a noncash gift.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NonCashCard
              emoji="📈"
              title="Stock"
              description="Donate appreciated stock for maximum tax benefit."
              href="#"
            />
            <NonCashCard
              emoji="🏦"
              title="Donor-Advised Fund (DAF)"
              description="Recommend a grant from your DAF to ChildSave."
              href="#"
            />
            <NonCashCard
              emoji="₿"
              title="Cryptocurrency"
              description="Donate Bitcoin, Ethereum, and more securely."
              href="#"
              spanFull
            />
          </div>
        </div>
      </section>

      {/* Recurring Gift CTA */}
      <section className="py-14 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#7B1F3A] mb-3">
            Make a Recurring Gift
          </h3>
          <div className="mx-auto w-12 h-0.5 rounded-full bg-[#2E7D5E] mb-5" />
          <p className="text-gray-500 mb-8 text-sm sm:text-base max-w-xl mx-auto">
            Provide reliable, ongoing support that empowers children and
            families all year long.
          </p>
          
         <a   href="/donate?frequency=monthly"
            className="inline-block bg-[#7B1F3A] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#6A1831] transition shadow-md active:scale-95 text-base sm:text-lg"
          >
            Set Up Monthly Giving
          </a>
        </div>
      </section>

    </main>
  );
}

// FundCard component
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
    
    <a  href={link}
      className="group block bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-[#7B1F3A]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="w-8 h-0.5 rounded-full bg-[#F5A623] mb-5 group-hover:w-14 transition-all duration-300" />
      <h3 className="text-base sm:text-lg font-bold text-[#7B1F3A] group-hover:text-[#6A1831] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
      <span className="inline-flex items-center mt-5 text-[#2E7D5E] font-semibold text-xs sm:text-sm uppercase tracking-wider">
        Give to this fund{" "}
        <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
      </span>
    </a>
  );
}

// NonCashCard component
function NonCashCard({
  emoji,
  title,
  description,
  href,
  spanFull,
}: {
  emoji: string;
  title: string;
  description: string;
  href: string;
  spanFull?: boolean;
}) {
  return (
    
    <a  href={href}
      className={`group block bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-[#7B1F3A]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center ${
        spanFull ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 group-hover:border-[#2E7D5E]/20 group-hover:bg-[#2E7D5E]/5 transition-all text-2xl">
        {emoji}
      </div>
      <h3 className="text-base sm:text-lg font-bold text-[#7B1F3A] leading-snug">
        {title}
      </h3>
      <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </a>
  );
}
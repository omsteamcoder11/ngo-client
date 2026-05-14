// app/into-employment/impact/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Into Employment Impact | ChildSave India",
  description:
    "See how your support helps young people in India gain sustainable employment, break the cycle of poverty, and transform their communities.",
};

export default function ImpactPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Transform future generations
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Independence. Financial stability. It starts here.
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Into Employment® extends the ripple started through our foundational
            programs by helping young people find sustainable, long-term and
            successful careers. And it’s working. Our youth graduate with the
            financial ability to support their families and change their
            communities.
          </p>
        </div>
      </section>

      {/* Fall Report Callout */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Into Employment Impact Report
              </h2>
              <p className="text-gray-600 mt-1">
                Discover how your generosity is igniting hope and opportunity
                for young people across India.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              <span>Read the Report (PDF)</span>
              <span>📄</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Your support impacts thousands of lives
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              number="8,200+"
              label="youth trained"
              description="across India since 2014"
            />
            <StatCard
              number="74%"
              label="find jobs within 6 months"
              description="of program completion"
            />
            <StatCard
              number="2.5x"
              label="average income increase"
              description="for participating families"
            />
          </div>
        </div>
      </section>

      {/* Opportunity and Economic Equity */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Opportunity transforms futures
              </h2>
              <p className="text-gray-700 leading-relaxed">
                While unemployment and underemployment remain core causes of
                poverty, stable work unlocks opportunities, promotes sustained
                and inclusive economic growth, and can double or triple a
                family's income.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Your donations to Into Employment ensure more access to critical
                resources and support as young people transition from childhood
                to adulthood. Opportunity can begin a new family legacy.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Investing in economic equity
              </h2>
              <p className="text-gray-700 leading-relaxed">
                With a gift to Into Employment, you’re investing in young
                people‘s — especially women‘s — futures.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Young women have historically been pulled from education to
                tend to their families. Globally, young men are almost 1.5
                times more likely to be employed than young women. Because{" "}
                <strong>68% of our participants are women</strong>, your
                investment is supporting a fairer future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-10 text-center">
            <div className="text-4xl text-blue-400 mb-4">“</div>
            <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
              Thank you to everyone who came together to help children like
              Kavya make their dreams come true.
            </blockquote>
            <p className="mt-4 font-semibold text-gray-900">
              — Sunita, Kavya’s mother
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Kavya, 21, is now in her final year of college, studying to
              become a software developer.
            </p>
          </div>
        </div>
      </section>

      {/* Graduate Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                “I believe in ChildSave youth. Everyone should have the same
                opportunities to progress.”
              </h2>
              <p className="text-gray-700 leading-relaxed">
                — Arjun Mehta, program graduate, business owner, employer partner
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Arjun Mehta, 29, owns a digital marketing agency in Pune and is
                a ChildSave graduate. He maintains ties to ChildSave by
                partnering with us to provide internships and employment to
                Into Employment participants.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Arjun‘s story is a testament to the ripple effect: A child in
                poverty is supported through our programs. Not only does he
                achieve financial stability, but he also invests in other young
                adults who see him as a role model for rising out of poverty.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-4xl mb-3 text-center">☕</div>
              <p className="text-gray-600 text-center">
                Arjun’s story mirrors that of many young people we support.
                With the right skills and opportunities, they become
                contributors to their communities and mentors for the next
                generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Impact across industry verticals
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your support upskills young people for career placements across a
            wide swath of industries in India.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "IT & Software",
              "Retail Sales",
              "Hospitality",
              "Call Centers",
              "Accounting",
              "Construction",
              "Electronics",
              "Beauty & Wellness",
              "Electrical",
              "Welding",
              "Entrepreneurship",
            ].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Be a part of the solution
          </h3>
          <p className="text-gray-700 mb-6">
            Your gift to Into Employment helps young people gain the skills,
            confidence, and connections they need to build a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate?program=into-employment"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Donate to Into Employment
            </a>
            <a
              href="/contact"
              className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

// Reusable Stat Card
function StatCard({
  number,
  label,
  description,
}: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
      <div className="text-4xl font-bold text-blue-600">{number}</div>
      <p className="text-gray-800 font-semibold mt-2">{label}</p>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  );
}




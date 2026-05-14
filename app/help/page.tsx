import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Ways to Help | ChildSave",
  description:
    "Explore creative ways to support ChildSave's mission: matching gifts, Facebook fundraisers, writing to a youth, estate planning, and more.",
};

export default function HelpPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Other ways to help
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-600 font-semibold uppercase tracking-wider">
            More ways you can make a difference
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ending poverty for good takes support from generous people like you.
            That’s why we’ve made it easy to give to our mission in a variety of
            ways.
          </p>
        </div>
      </section>

      {/* Ways to Help Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <HelpCard
              title="Matching gifts"
              description="Your gift can go even further if your employer or organization has a Matching Gift program."
              link="#"
              icon="🤝"
              linkText="Check eligibility"
            />
            <HelpCard
              title="Fundraise on Facebook"
              description="Whether for your birthday or a special occasion, start a fundraiser. ChildSave receives 100% of donations."
              link="#"
              icon="📘"
              linkText="Start a fundraiser"
            />
            <HelpCard
              title="Write to a youth"
              description="Write to a young person and send much-needed encouragement. Use our online form or template."
              link="#"
              icon="✉️"
              linkText="Write a message"
            />
            <HelpCard
              title="Estate & gift planning"
              description="Create a lasting legacy of good when you leave a gift for ChildSave in your will or trust."
              link="#"
              icon="📜"
              linkText="Learn about planned giving"
            />
            <HelpCard
              title="Sponsor feedback panel"
              description="All current sponsors are invited to participate! Help create the best experience for sponsors like you."
              link="#"
              icon="🗣️"
              linkText="Join the panel"
            />
          </div>
        </div>
      </section>

      {/* More Giving Options Section */}
      <section className="py-12 md:py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              More giving options
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              From making a lasting difference in one child’s life to uplifting
              a community of thousands, this is your chance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16">
            <a
              href="/donate"
              className="w-full sm:w-auto text-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg active:scale-95"
            >
              Make a Recurring Gift
            </a>
            <a
              href="/donate#noncash"
              className="w-full sm:w-auto text-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition active:scale-95"
            >
              Explore Non-Cash Giving
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
            <span className="text-2xl">🌍</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Every action counts
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
            Whether you give financially, advocate, or simply spread the word,
            you're part of a global movement to end child poverty.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-gray-800 transition shadow-xl active:scale-95"
          >
            Get Involved Today
          </a>
        </div>
      </section>
    </main>
  );
}

// Reusable Help Card component
function HelpCard({
  title,
  description,
  link,
  icon,
  linkText,
}: {
  title: string;
  description: string;
  link: string;
  icon: string;
  linkText: string;
}) {
  return (
    <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 flex flex-col">
      <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed flex-grow">
        {description}
      </p>
      <a
        href={link}
        className="inline-flex items-center mt-6 text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform"
      >
        {linkText} <span className="ml-2">→</span>
      </a>
    </div>
  );
}

// Reusable Fund Card
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
      className="group block bg-white rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200"
    >
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
      <div className="inline-flex items-center mt-4 text-blue-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Give to this fund <span className="ml-2">→</span>
      </div>
    </a>
  );
}




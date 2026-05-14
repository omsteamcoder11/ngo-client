// app/into-employment/journey/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Journey to Employment | ChildSave India",
  description:
    "See how Into Employment transforms young people in India from childhood to career. Read inspiring stories of confidence, skill development, and lasting change.",
};

export default function JourneyPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Let the transformation begin
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Ending poverty starts with children
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <p className="text-gray-700 text-lg leading-relaxed">
              Growing up in poverty, children face tough challenges: hunger and
              malnutrition, limited access to education and medical services,
              social discrimination and isolation.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Local staff and volunteers give children in poverty the tools they
              need to create brighter futures for themselves and their
              communities. With the support of our donors and sponsors, children
              and youth gain the skills and confidence they need to create
              promising futures free from poverty.
            </p>
          </div>
        </div>
      </section>

      {/* Into Employment Transformation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Into Employment® transforms young adults
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Into Employment means every young person who wants to has the
                opportunity to attend college, earn technical training
                certificates, upskill their talents or become entrepreneurs.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Your support ensures they have the soft skills, too —
                problem-solving, as well as much-needed communication and
                interpersonal skills. Participants practice résumé writing, job
                search and application tactics, and interviewing. You help them
                prepare for and get hired into formal employment.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl text-blue-600 mb-3">✨</div>
              <p className="text-gray-800 font-medium">
                “Before Into Employment, I didn’t know how to write a resume or
                what a job interview looked like. Today, I feel confident in my
                abilities and ready to take on the world.”
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                — Meera, Into Employment graduate, Bengaluru
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - Full Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200">
            <div className="text-4xl text-blue-400 mb-4">“</div>
            <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
              I feel capable and I know I can do it.
            </blockquote>
            <p className="mt-6 text-gray-700 leading-relaxed">
              — Priya, Chennai, Into Employment graduate
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-700">
                Priya began her journey at age 7 when she joined ChildSave. Four
                years ago, she graduated from Into Employment and got her first
                formal job with an IT services company in her community. Priya
                still works for the same company and was recently promoted to a
                team lead position, thanks to her work experience, perseverance
                and the skills she learned in Into Employment.
              </p>
              <p className="text-gray-700 italic mt-4">
                “I want to continue growing professionally and personally. I
                want to be proud of myself and to make my parents proud, too.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Journey Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Your support writes their story
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From childhood to career, your generosity empowers young people at
              every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Childhood support"
              description="Health checkups, nutrition, and educational aid give children a strong foundation."
            />
            <StepCard
              number="2"
              title="Teen empowerment"
              description="Life skills, mentorship, and confidence-building activities prepare them for the future."
            />
            <StepCard
              number="3"
              title="Into Employment"
              description="Job training, career coaching, and placement lead to sustainable careers."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Help continue the story for deserving young people
          </h3>
          <p className="text-gray-700 mb-6">
            Poverty can be isolating and limiting. For work, your only options
            may be low-wage or temporary jobs. With the support and training
            that Into Employment provides, participants can increase the
            likelihood of a career that could truly take them places. We need
            you to help them write the next chapter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate?program=into-employment"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Invest in a young person’s future
            </a>
            <a
              href="/sponsor"
              className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              Sponsor a child
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

// Reusable Step Card
function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition border border-gray-100">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}




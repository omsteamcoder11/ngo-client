// app/contact/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ChildSave",
  description:
    "Get in touch with ChildSave's Care Team via live chat, phone, email, or mail. We're here to answer your questions and help you make an impact.",
};

export default function ContactPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Contact us
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Get the help you need from Our Care Team
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            If you have any concerns, questions, comments or suggestions, we
            want to hear from you. We know that bringing people together to end
            poverty begins with great communication.
          </p>
        </div>
      </section>

      {/* Contact Options Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Live Chat Card */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl" role="img" aria-label="chat">💬</span>
                <h2 className="text-xl font-bold text-gray-900">Live chat</h2>
              </div>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Chat with a member of our friendly, knowledgeable Care Team.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 mt-auto">
                <p className="text-amber-800 text-sm font-bold flex items-center gap-2">
                  <span>😴</span> Sorry we missed you!
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Our live chat isn’t available right now. You can email us at{" "}
                  <a href="mailto:care@childsave.org" className="text-blue-600 font-semibold hover:underline break-all">
                    care@childsave.org
                  </a>
                </p>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 space-y-1">
                <p>Monday – Friday: 8:00 a.m. – 5:00 p.m. (CT)</p>
                <p>Saturday – Sunday: Closed</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl" role="img" aria-label="phone">📞</span>
                <h2 className="text-xl font-bold text-gray-900">Call Us</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-600 text-sm sm:text-base">
                  Speak with a real person:<br />
                  <span className="font-semibold text-gray-900">Mon–Fri, 8am–5pm (CT)</span>
                </p>
                <div className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">
                    Toll-free (U.S.)
                  </p>
                  <a href="tel:+18005551234" className="text-blue-600 hover:text-blue-700 text-xl font-bold block">
                    800-555-1234
                  </a>
                </div>
                <div className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">
                    International / Local
                  </p>
                  <a href="tel:+18165551234" className="text-blue-600 hover:text-blue-700 text-xl font-bold block">
                    816-555-1234
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Mail Card */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl" role="img" aria-label="email">✉️</span>
                <h2 className="text-xl font-bold text-gray-900">Email & Mail</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">Email</p>
                  <a href="mailto:care@childsave.org" className="text-blue-600 hover:underline text-lg font-semibold break-all">
                    care@childsave.org
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">Mailing Address</p>
                  <address className="not-italic text-gray-700 text-sm sm:text-base leading-relaxed">
                    <span className="font-bold text-gray-900">ChildSave</span><br />
                    P.O. Box 123456<br />
                    Kansas City, MO 64121<br />
                    U.S.A.
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Form Notice */}
          <div className="mt-12 max-w-4xl mx-auto bg-blue-50 rounded-2xl p-6 sm:p-8 text-center border border-blue-100">
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              Have issues with our website or have suggestions for us? <br className="hidden sm:block" />
              Please use our{" "}
              <a href="#" className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4">
                WEB FEEDBACK FORM
              </a>{" "}
              to share your comments.
            </p>
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Quick Links for Instant Help
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { icon: "❓", text: "Visit our HELP / FAQs page", href: "/help/faq" },
              { icon: "👤", text: "Visit the MyCI HELP page", href: "/myci/help" },
              { icon: "📧", text: "Unsubscribe from emails", href: "#" },
              { icon: "📊", text: "Financial Accountability", href: "/accountability" },
              { icon: "📰", text: "Newsroom (Media Inquiries)", href: "/newsroom" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all border border-gray-200 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                <span className="font-bold text-gray-800 text-sm sm:text-base">
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="border-t border-gray-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Our Care Team is dedicated to helping you. We aim to respond to all
            inquiries within one business day.
          </p>
        </div>
      </div>
    </main>
  );
}




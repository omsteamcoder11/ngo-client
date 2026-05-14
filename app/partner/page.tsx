// app/partners/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Partners | ChildSave",
  description:
    "ChildSave collaborates with corporations, governments, foundations, and NGOs to end generational poverty. Learn about our global and local partners.",
};

export default function PartnersPage() {
  // Latest partnership news data
  const newsItems = [
    {
      title: "ChildSave and NetApp: Building data skills and inspiring young 'fact-ivists'",
      date: "June 5, 2026",
      summary:
        "ChildSave and NetApp partnered this year to cultivate data literacy and stimulate interest in data science among 25,000 children and youth across five countries.",
      link: "#",
    },
    {
      title: "Workplace giving: A global force for good",
      date: "April 29, 2026",
      summary:
        "Alexandra Geneser highlights the impact of workplace giving and matching gift programs, showcasing employee engagement opportunities available through ChildSave.",
      link: "#",
    },
    {
      title: "ChildSave builds partnerships at UN General Assembly",
      date: "October 10, 2025",
      summary:
        "ChildSave was involved in the United Nations General Assembly and co-hosted a discussion with Abbott on reducing malnutrition in partnership with local communities.",
      link: "#",
    },
  ];

  // Partner categories
  const partnerCategories = [
    { name: "Corporations", icon: "🏢" },
    { name: "Government", icon: "🏛️" },
    { name: "Foundations", icon: "🤝" },
    { name: "Academia", icon: "🎓" },
    { name: "Civil Society", icon: "🌍" },
    { name: "United Nations", icon: "🇺🇳" },
  ];

  // Country partners data
  const countryPartners = [
    {
      country: "Colombia",
      partners: ["Alcaldía de Barranquilla", "Gobernación del Atlántico", "Universidad del Atlántico", "Fábrica de sonrisa", "Sociedad Portuaria de Santa Marta"],
    },
    {
      country: "Dominican Republic",
      partners: ["CORAABO", "CONANI", "INFOTEP", "Grupo Ramos", "Caritas Dominicana"],
    },
    {
      country: "Ecuador",
      partners: ["Guayaquil Municipality", "Ministerio de Salud Pública", "Nestlé Ecuador", "ESPOL University", "American Ecuadorian Chamber of Commerce"],
    },
    {
      country: "Guatemala",
      partners: ["Ministerio de Educación", "Universidad de San Carlos", "Colgate Palmolive", "Planet Water", "Manpower"],
    },
    {
      country: "Honduras",
      partners: ["Secretaría de Educación", "UNITEC", "USAID", "Free Wheelchair Mission", "Cámara de Comercio e Industrias de Cortés"],
    },
    {
      country: "India",
      partners: ["Guru Krupa Foundation", "Taj Bengal", "Local government health departments"],
    },
    {
      country: "Mexico",
      partners: ["Ayuntamiento de Zapopan", "Tecnológico de Monterrey", "Fundación Simi", "Cinemex", "Universidad de Guadalajara"],
    },
    {
      country: "Philippines",
      partners: ["Department of Education", "Sutherland Global Services", "Local Government Units", "Philippine Heart Center"],
    },
    {
      country: "United States",
      partners: ["Little Rock School District", "Arkansas Food Bank", "UAMS Dept. of Dental Hygiene", "Clinton School of Public Service"],
    },
    {
      country: "Zambia",
      partners: ["Ministry of Health", "Ministry of General Education", "Colgate Palmolive", "Finca Zambia", "Water Aid"],
    },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/40 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight mb-8">
            Collective action for a <br className="hidden md:block" />
            <span className="text-blue-600">better world</span>
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-2xl text-gray-600 font-medium leading-relaxed">
              The complex challenges of our time require multisector partnerships
              that enable diverse perspectives, expertise and resources to come
              together.
            </p>
            <p className="text-gray-500 md:text-lg leading-relaxed max-w-3xl mx-auto">
              We do this on a contextualized community level with over{" "}
              <span className="text-blue-600 font-bold">3,800 volunteers</span>, 
              <span className="text-blue-600 font-bold"> 1,300 global staff</span>, 
              and more than <span className="text-blue-600 font-bold">100 local partners</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
              Our <span className="text-blue-600">Partnerships</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
            {partnerCategories.map((cat) => (
              <div
                key={cat.name}
                className="group bg-white rounded-3xl p-8 text-center hover:bg-blue-600 transition-all duration-500 border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-blue-200"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-black text-gray-800 group-hover:text-white uppercase tracking-widest text-xs">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Partners Section */}
      <section className="py-16 md:py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase mb-6">
              Global <span className="text-blue-600">Footprint</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium">Working alongside local organizations and businesses to maximize impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryPartners.map((country) => (
              <div
                key={country.country}
                className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    {country.country}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {country.partners.map((partner, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 group/item">
                      <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform"></span>
                      <span className="font-medium text-sm md:text-base group-hover/item:text-blue-600 transition-colors">{partner}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Partnership News */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase leading-tight">
                Latest <span className="text-blue-600 text-outline">Collaborations</span>
              </h2>
            </div>
            <a
              href="#"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
            >
              View all news
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {newsItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white border-b-4 border-transparent hover:border-blue-600 transition-all duration-500 pt-4"
              >
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
                  {item.date}
                </p>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium mb-6 line-clamp-3">
                  {item.summary}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-gray-900 font-black uppercase tracking-widest text-[10px] hover:text-blue-600 transition-colors group/link"
                >
                  Read Story 
                  <span className="ml-2 group-hover/link:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-32 bg-blue-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
            Partner <span className="opacity-50">With Us</span>
          </h2>
          <p className="text-blue-100 text-lg md:text-2xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
            Join a global network of organizations committed to ending
            generational poverty. Together we can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/contact"
              className="w-full sm:w-auto bg-white text-blue-600 px-12 py-6 rounded-2xl font-black uppercase tracking-[0.15em] text-sm hover:bg-gray-100 transition-all shadow-2xl active:scale-95"
            >
              Become a Partner
            </a>
            <a
              href="mailto:partnerships@childsave.org"
              className="text-white font-bold text-sm uppercase tracking-widest hover:underline"
            >
              Email our team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}




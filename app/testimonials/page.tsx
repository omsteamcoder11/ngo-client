"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/home/Header";
import { Star, Quote, MapPin } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: "Parent" | "Child" | "Volunteer" | "Donor";
  location: string;
  quote: string;
  rating: number;
  initials: string;
  cardBg: string;
  avatarBg: string;
  avatarText: string;
  quoteIconBg: string;
  quoteIconText: string;
  ringColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Meena Rajendran",
    role: "Parent",
    location: "Colachel, Tamil Nadu",
    quote: "ChildSave changed my daughter's life completely. She now goes to school every day with a smile. I never imagined this was possible for our family.",
    rating: 5,
    initials: "MR",
    cardBg: "bg-rose-50",
    avatarBg: "bg-rose-100",
    avatarText: "text-rose-600",
    quoteIconBg: "bg-[#8B235E]",
    quoteIconText: "text-white",
    ringColor: "ring-rose-200",
  },
  {
    id: 2,
    name: "Arjun S.",
    role: "Child",
    location: "Nagercoil, Tamil Nadu",
    quote: "I love going to the learning centre. The teachers are so kind and I made many new friends. I want to become a doctor one day.",
    rating: 5,
    initials: "AS",
    cardBg: "bg-sky-50",
    avatarBg: "bg-sky-100",
    avatarText: "text-sky-600",
    quoteIconBg: "bg-[#8B235E]",
    quoteIconText: "text-white",
    ringColor: "ring-sky-200",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Volunteer",
    location: "Chennai, Tamil Nadu",
    quote: "Volunteering with ChildSave has been the most meaningful experience of my life. Seeing the children grow week by week is incredibly rewarding.",
    rating: 5,
    initials: "PN",
    cardBg: "bg-emerald-50",
    avatarBg: "bg-emerald-100",
    avatarText: "text-emerald-600",
    quoteIconBg: "bg-[#8B235E]",
    quoteIconText: "text-white",
    ringColor: "ring-emerald-200",
  },
  {
    id: 4,
    name: "Ramesh Kumar",
    role: "Donor",
    location: "Trivandrum, Kerala",
    quote: "I have been donating to ChildSave for 3 years now. The transparency and regular updates give me complete confidence that my money is truly helping children.",
    rating: 5,
    initials: "RK",
    cardBg: "bg-amber-50",
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-600",
    quoteIconBg: "bg-[#8B235E]",
    quoteIconText: "text-white",
    ringColor: "ring-amber-200",
  },
  {
    id: 5,
    name: "Lakshmi Devi",
    role: "Parent",
    location: "Kanyakumari, Tamil Nadu",
    quote: "My son received a school kit and meals through ChildSave. As a single mother this support means everything to me and my children.",
    rating: 5,
    initials: "LD",
    cardBg: "bg-rose-50",
    avatarBg: "bg-rose-100",
    avatarText: "text-rose-600",
    quoteIconBg: "bg-[#8B235E]",
    quoteIconText: "text-white",
    ringColor: "ring-rose-200",
  },
  {
    id: 6,
    name: "Sundar M.",
    role: "Volunteer",
    location: "Madurai, Tamil Nadu",
    quote: "The team at ChildSave is incredibly dedicated. Every weekend I spend here reminds me why community service matters so much.",
    rating: 4,
    initials: "SM",
    cardBg: "bg-emerald-50",
    avatarBg: "bg-emerald-100",
    avatarText: "text-emerald-600",
    quoteIconBg: "bg-[#8B235E]",
    quoteIconText: "text-white",
    ringColor: "ring-emerald-200",
  },
  {
    id: 7,
    name: "Anitha Joseph",
    role: "Donor",
    location: "Coimbatore, Tamil Nadu",
    quote: "What I love most about ChildSave is how they show exactly where your donation goes. I sponsored a child and received monthly progress updates.",
    rating: 5,
    initials: "AJ",
    cardBg: "bg-amber-50",
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-600",
    quoteIconBg: "bg-[#8B235E]",
    quoteIconText: "text-white",
    ringColor: "ring-amber-200",
  },
  {
    id: 8,
    name: "Kavitha M.",
    role: "Child",
    location: "Colachel, Tamil Nadu",
    quote: "Before ChildSave I never had notebooks or pencils. Now I have everything I need and my teacher says I am one of the best students in class.",
    rating: 5,
    initials: "KM",
    cardBg: "bg-sky-50",
    avatarBg: "bg-sky-100",
    avatarText: "text-sky-600",
    quoteIconBg: "bg-[#8B235E]",
    quoteIconText: "text-white",
    ringColor: "ring-sky-200",
  },
  {
    id: 9,
    name: "Vijay Anand",
    role: "Parent",
    location: "Tirunelveli, Tamil Nadu",
    quote: "Our village had no awareness about child education. ChildSave came and changed everything. Now almost every child in our area goes to school.",
    rating: 5,
    initials: "VA",
    cardBg: "bg-rose-50",
    avatarBg: "bg-rose-100",
    avatarText: "text-rose-600",
    quoteIconBg: "bg-[#8B235E]",
    quoteIconText: "text-white",
    ringColor: "ring-rose-200",
  },
];

const FEATURED = {
  name: "Sister Mary Thomas",
  role: "Volunteer",
  location: "Kanyakumari, Tamil Nadu",
  quote: "I have worked with many organisations over 20 years but ChildSave stands apart. Their commitment to every single child is unwavering. This is not just an NGO — it is a family that refuses to give up on any child.",
  rating: 5,
  initials: "MT",
  avatarBg: "bg-emerald-100",
  avatarText: "text-emerald-700",
  ringColor: "ring-emerald-300",
};

const CATEGORIES = ["All", "Parent", "Child", "Volunteer", "Donor"];

const STATS = [
  { label: "Families Supported", value: "1,200+" },
  { label: "Active Volunteers", value: "340+" },
  { label: "Years of Service", value: "12" },
];

const roleStyle = (role: string) => {
  if (role === "Parent")    return "bg-rose-100 text-rose-600";
  if (role === "Child")     return "bg-sky-100 text-sky-600";
  if (role === "Volunteer") return "bg-emerald-100 text-emerald-700";
  return "bg-amber-100 text-amber-600";
};

const useScrollFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center justify-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={13}
        className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const { ref, visible } = useScrollFadeIn();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      className={`rounded-2xl overflow-hidden flex flex-col text-center
        hover:shadow-md transition-all duration-500 border border-white/60
        ${testimonial.cardBg}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="p-6 sm:p-7 flex flex-col items-center gap-4 flex-1">

        {/* Quote icon — circle style like reference */}
        <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${testimonial.quoteIconBg}`}>
          <Quote size={18} className={testimonial.quoteIconText} />
        </div>

        {/* Quote text */}
        <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed flex-1">
          "{testimonial.quote}"
        </p>

        {/* Stars */}
        <StarRating rating={testimonial.rating} />

        {/* Divider */}
        <div className="w-12 h-px bg-gray-300" />

        {/* Avatar + Name */}
        <div className="flex flex-col items-center gap-2">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center
            text-sm font-bold flex-shrink-0 ring-2
            ${testimonial.avatarBg} ${testimonial.avatarText} ${testimonial.ringColor}`}
          >
            {testimonial.initials}
          </div>
          <div>
            <p className="text-gray-800 font-bold text-sm">{testimonial.name}</p>
            <div className="flex items-center justify-center gap-2 mt-1 flex-wrap">
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${roleStyle(testimonial.role)}`}>
                {testimonial.role}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 text-gray-400 text-[11px] mt-1">
              <MapPin size={9} />
              <span>{testimonial.location}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredRef = useRef<HTMLDivElement>(null);
  const [featuredVisible, setFeaturedVisible] = useState(false);

  useEffect(() => {
    const el = featuredRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setFeaturedVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered = TESTIMONIALS.filter((t) =>
    activeCategory === "All" || t.role === activeCategory
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* ── Hero / Page Header ── */}
      <section className="pt-[72px] md:pt-[80px] bg-[#8B235E]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* Left */}
            <div>
              <span className="inline-block px-3 py-1 bg-white/15 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                Real Stories
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                Don't Believe Us?{" "}
                <span className="text-[#FFCC29]">See Reviews</span>
              </h1>
              <p className="text-white/70 text-sm sm:text-base max-w-lg leading-relaxed">
                Hear from parents, children, volunteers, and donors who are part of the ChildSave family.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-6 flex-wrap">
              {STATS.map((stat, i) => (
                <div key={stat.label}
                  className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-center min-w-[90px]">
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-white/60 text-[10px] font-semibold uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="relative h-10 md:h-12">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 48L1440 48L1440 16C1200 48 960 0 720 16C480 32 240 0 0 16L0 48Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* ── Featured ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div
          ref={featuredRef}
          className={`bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 md:p-10
            shadow-sm transition-all duration-700
            ${featuredVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Top quote icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#8B235E] flex items-center justify-center shadow-md">
              <Quote size={20} className="text-white" />
            </div>
          </div>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-8">
            "{FEATURED.quote}"
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center
              text-sm font-bold ring-2 ${FEATURED.avatarBg} ${FEATURED.avatarText} ${FEATURED.ringColor}`}>
              {FEATURED.initials}
            </div>
            <div>
              <p className="text-gray-800 font-bold text-sm">{FEATURED.name}</p>
              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${roleStyle(FEATURED.role)}`}>
                  {FEATURED.role}
                </span>
                <div className="flex items-center gap-1 text-gray-400 text-[11px]">
                  <MapPin size={9} />
                  <span>{FEATURED.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <StarRating rating={FEATURED.rating} />
          </div>
        </div>
      </section>

      {/* ── Filter ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider
                transition-all duration-200
                ${activeCategory === cat
                  ? "bg-[#8B235E] text-white shadow-sm"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-[#8B235E] hover:text-[#8B235E]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Count ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-5">
        <p className="text-sm text-gray-400">
          Showing{" "}
          <span className="text-gray-700 font-semibold">{filtered.length}</span>{" "}
          testimonials
          {activeCategory !== "All" && (
            <> from <span className="text-gray-700 font-semibold">{activeCategory}s</span></>
          )}
        </p>
      </section>

      {/* ── Grid ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white border-t border-gray-100 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row
          items-start sm:items-center justify-between gap-6"
        >
         
          
           
        </div>
      </section>

    </main>
  );
}
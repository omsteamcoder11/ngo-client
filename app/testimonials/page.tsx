"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/home/Header";
import { Star, Quote, MapPin } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Testimonial {
  id: number;
  name: string;
  role: "Parent" | "Child" | "Volunteer" | "Donor";
  location: string;
  quote: string;
  rating: number;
  initials: string;
  avatarBg: string;
  avatarText: string;
  stripColor: string;
  ringColor: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Meena Rajendran",
    role: "Parent",
    location: "Colachel, Tamil Nadu",
    quote: "ChildSave changed my daughter's life completely. She now goes to school every day with a smile. I never imagined this was possible for our family.",
    rating: 5,
    initials: "MR",
    avatarBg: "bg-rose-100",
    avatarText: "text-rose-600",
    stripColor: "bg-rose-300",
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
    avatarBg: "bg-sky-100",
    avatarText: "text-sky-600",
    stripColor: "bg-sky-300",
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
    avatarBg: "bg-emerald-100",
    avatarText: "text-emerald-600",
    stripColor: "bg-emerald-300",
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
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-600",
    stripColor: "bg-amber-300",
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
    avatarBg: "bg-rose-100",
    avatarText: "text-rose-600",
    stripColor: "bg-rose-300",
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
    avatarBg: "bg-emerald-100",
    avatarText: "text-emerald-600",
    stripColor: "bg-emerald-300",
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
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-600",
    stripColor: "bg-amber-300",
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
    avatarBg: "bg-sky-100",
    avatarText: "text-sky-600",
    stripColor: "bg-sky-300",
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
    avatarBg: "bg-rose-100",
    avatarText: "text-rose-600",
    stripColor: "bg-rose-300",
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
  avatarText: "text-emerald-600",
  ringColor: "ring-emerald-200",
};

const CATEGORIES = ["All", "Parent", "Child", "Volunteer", "Donor"];

const STATS = [
  { label: "Families Supported", value: "1,200+" },
  { label: "Active Volunteers", value: "340+" },
  { label: "Years of Service", value: "12" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const roleStyle = (role: string) => {
  if (role === "Parent")    return "bg-rose-50 text-rose-500";
  if (role === "Child")     return "bg-sky-50 text-sky-500";
  if (role === "Volunteer") return "bg-emerald-50 text-emerald-600";
  return "bg-amber-50 text-amber-500";
};

// ─── useScrollFadeIn hook ─────────────────────────────────────────────────────
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

// ─── StarRating ───────────────────────────────────────────────────────────────
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={12}
        className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}
      />
    ))}
  </div>
);

// ─── TestimonialCard ──────────────────────────────────────────────────────────
const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const { ref, visible } = useScrollFadeIn();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      className={`bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col
        hover:border-gray-200 hover:shadow-sm transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* Top strip */}
      <div className={`h-1 w-full ${testimonial.stripColor}`} />

      <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">

        {/* Quote icon */}
        <Quote size={20} className="text-gray-200 flex-shrink-0" />

        {/* Quote */}
        <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed flex-1">
          {testimonial.quote}
        </p>

        {/* Stars */}
        <StarRating rating={testimonial.rating} />

        {/* Divider */}
        <div className="border-t border-gray-50" />

        {/* Person */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center
            text-xs font-semibold flex-shrink-0 ring-2
            ${testimonial.avatarBg} ${testimonial.avatarText} ${testimonial.ringColor}`}
          >
            {testimonial.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-800 font-medium text-sm truncate">
              {testimonial.name}
            </p>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${roleStyle(testimonial.role)}`}>
                {testimonial.role}
              </span>
              <div className="flex items-center gap-1 text-gray-300 text-xs min-w-0">
                <MapPin size={10} className="flex-shrink-0" />
                <span className="truncate">{testimonial.location}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
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

      {/* ── Hero ── */}
      <section className="pt-24 md:pt-28 pb-10 md:pb-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <p className="text-xs font-medium text-rose-400 uppercase tracking-widest mb-3">
            Real Stories
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-3">
                What People Say
              </h1>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
                Hear from the parents, children, volunteers, and donors who are part of the ChildSave family.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-10 flex-wrap">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-start gap-3">
                  {i > 0 && <div className="hidden sm:block w-px h-10 bg-gray-100 self-center" />}
                  <div>
                    <p className="text-2xl sm:text-3xl font-semibold text-gray-900">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Featured ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <div
          ref={featuredRef}
          className={`bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 md:p-10
            transition-all duration-700
            ${featuredVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">

            {/* Left — Avatar */}
            <div className="flex-shrink-0 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center
                justify-center text-base font-semibold ring-4
                ${FEATURED.avatarBg} ${FEATURED.avatarText} ${FEATURED.ringColor}`}
              >
                {FEATURED.initials}
              </div>
              <div>
                <p className="text-gray-800 font-medium text-sm sm:text-base">{FEATURED.name}</p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${roleStyle(FEATURED.role)}`}>
                    {FEATURED.role}
                  </span>
                  <div className="flex items-center gap-1 text-gray-300 text-xs">
                    <MapPin size={10} />
                    <span>{FEATURED.location}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <StarRating rating={FEATURED.rating} />
                </div>
              </div>
            </div>

            {/* Right — Quote */}
            <div className="flex-1">
              <Quote size={32} className="text-gray-200 mb-4" />
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                {FEATURED.quote}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Filter ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-6">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium
                transition-all duration-200
                ${activeCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-500 border border-gray-100 hover:border-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Count ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-6">
        <p className="text-sm text-gray-400">
          Showing{" "}
          <span className="text-gray-700 font-medium">{filtered.length}</span>{" "}
          testimonials
          {activeCategory !== "All" && (
            <> from{" "}
              <span className="text-gray-700 font-medium">{activeCategory}s</span>
            </>
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
          items-start sm:items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs font-medium text-rose-400 uppercase tracking-widest mb-2">
              Share Your Experience
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
              Have a story to tell?
            </h2>
            <p className="text-gray-400 text-sm max-w-md">
              If ChildSave has made a difference in your life we would love to hear from you.
            </p>
          </div>
          
          <a  href="mailto:stories@childsave.org"
            className="flex-shrink-0 px-6 py-3 bg-gray-900 text-white rounded-xl
              text-sm font-medium hover:bg-gray-700 active:scale-[0.98]
              transition-all duration-200 whitespace-nowrap"
          >
            Share Your Story
          </a>
        </div>
      </section>

    </main>
  );
}
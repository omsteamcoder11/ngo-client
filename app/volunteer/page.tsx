"use client";

import React, { useState } from "react";
import Header from "@/components/home/Header";
import {
  Heart, CheckCircle, ChevronRight,
  Users, Clock, Award, MapPin,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    step: "01",
    title: "Apply Online",
    desc: "Fill out our simple volunteer application form with your skills and availability.",
  },
  {
    step: "02",
    title: "Get Matched",
    desc: "Our team reviews your profile and matches you with the best volunteer role.",
  },
  {
    step: "03",
    title: "Orientation",
    desc: "Attend a brief online or in-person orientation to understand our mission and processes.",
  },
  {
    step: "04",
    title: "Start Volunteering",
    desc: "Begin your journey and start making a real difference in children's lives.",
  },
];

const WHY_ITEMS = [
  { icon: Users,  title: "Join 500+ Volunteers", desc: "Be part of a passionate community" },
  { icon: Clock,  title: "Flexible Hours",        desc: "Volunteer at your own pace"        },
  { icon: Award,  title: "Certificate Issued",    desc: "Get recognized for your service"   },
  { icon: MapPin, title: "Local Impact",          desc: "Help children across Tamil Nadu"   },
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function VolunteerPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", state: "", city: "", interests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/volunteers`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: form.firstName,
            last_name:  form.lastName,
            email:      form.email,
            phone:      form.phone,
            state:      form.state,
            city:       form.city,
            interests:  form.interests,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) setSubmitted(true);
      else alert("Error: " + data.error);
    } catch (err) {
      alert("Failed to connect to server. Is the server running?");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
        <img
          src="/images/volunteer-hero.webp"
          alt="Children laughing together"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div
          className="absolute inset-0 flex flex-col justify-end
            px-6 md:px-16 pb-12 md:pb-16"
        >
          <span
            className="inline-block px-4 py-1.5 bg-[#FFCC29] text-gray-900
              text-xs font-bold uppercase tracking-widest rounded-full
              mb-4 w-fit"
          >
            Join Our Team
          </span>
          <h1
            className="text-4xl md:text-6xl font-extrabold text-white
              leading-tight mb-3"
          >
            ENCOURAGING <br />
            <span className="text-[#FFCC29]">CHANGE-MAKERS</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl mb-6">
            Join our community of volunteers and help build a brighter
            future for children across Tamil Nadu.
          </p>
          
        <a    href="#register"
            className="w-fit px-8 py-3.5 bg-[#8B235E] text-white
              rounded-xl font-extrabold text-sm uppercase tracking-wider
              hover:bg-[#6b1b48] transition-all active:scale-95 shadow-lg"
          >
            Become a Volunteer
          </a>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center
          gap-2 text-sm text-gray-500"
      >
        <a href="/" className="hover:text-[#8B235E] transition-colors">
          Home
        </a>
        <ChevronRight size={14} />
        <span className="text-gray-800 font-semibold">Volunteer</span>
      </div>

      {/* ── Intro ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <h2
          className="text-2xl md:text-3xl font-extrabold text-[#8B235E]
            text-center mb-6"
        >
          VOLUNTEERING WITH CHILDSAVE
        </h2>
        <p
          className="text-gray-600 text-base md:text-lg leading-relaxed
            text-center max-w-3xl mx-auto"
        >
          ChildSave believes that until members of civil society are actively
          involved in the process of change and development, nothing can truly
          transform. We invite you to be part of our volunteer program — to
          work for the welfare of poor children and underprivileged families
          across Tamil Nadu. Volunteers are the backbone of every organisation.
        </p>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-4 md:gap-8 mt-10
            max-w-2xl mx-auto"
        >
          {[
            { value: "500+", label: "Active Volunteers" },
            { value: "12K+", label: "Hours Given"       },
            { value: "3K+",  label: "Children Helped"   },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-[#8B235E]">
                {stat.value}
              </p>
              <p
                className="text-gray-500 text-xs md:text-sm font-semibold
                  uppercase tracking-wider mt-1"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-gray-800
              text-center mb-10"
          >
            How to Get Started
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-6 md:gap-8"
          >
            {STEPS.map((s, i) => (
              <div
                key={s.step}
                className="relative flex flex-col items-center text-center"
              >
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[60%]
                      w-full h-[2px] bg-gradient-to-r
                      from-[#8B235E]/30 to-transparent"
                  />
                )}
                <div
                  className="w-16 h-16 rounded-2xl bg-[#8B235E] flex
                    items-center justify-center text-white font-extrabold
                    text-xl mb-4 shadow-md relative z-10"
                >
                  {s.step}
                </div>
                <h3 className="font-extrabold text-gray-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Form ── */}
      <section id="register" className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">

          {/* Section heading */}
          <div className="text-center mb-10">
            <span
              className="inline-block px-4 py-1.5 bg-[#8B235E]/10
                text-[#8B235E] text-xs font-bold uppercase tracking-widest
                rounded-full mb-3"
            >
              Get Involved
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
              Register as a Volunteer
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
              Fill in your details below and our team will get in touch
              with you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* ── Why Volunteer card ── */}
            <div
              className="lg:col-span-1 bg-white rounded-3xl p-6 md:p-8
                border border-gray-200 shadow-sm"
            >
              <Heart
                size={32}
                className="text-[#8B235E] fill-[#8B235E] mb-5"
              />
              <h3 className="text-xl font-extrabold text-gray-800 mb-2">
                Why Volunteer With Us?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-7">
                Your time and skills can transform the lives of children
                who need it most.
              </p>

              <div className="space-y-5">
                {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-xl bg-[#8B235E]/10
                        flex items-center justify-center flex-shrink-0"
                    >
                      <Icon size={17} className="text-[#8B235E]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">
                        {title}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-400 text-xs">Any questions?</p>
                <p className="text-[#8B235E] font-bold text-sm mt-0.5">
                  info@childsave.org
                </p>
              </div>
            </div>

            {/* ── Form card ── */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="bg-white rounded-3xl shadow-sm border
                    border-gray-200 p-12 text-center"
                >
                  <div
                    className="w-20 h-20 bg-[#009270]/10 rounded-full
                      flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle size={40} className="text-[#009270]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-500">
                    We've received your application. Our team will reach
                    out to you shortly.
                  </p>
                </div>
              ) : (
                <div
                  className="bg-white rounded-3xl shadow-sm border
                    border-gray-200 overflow-hidden"
                >
                  {/* Form header */}
                  <div className="bg-[#8B235E] px-8 py-5">
                    <h3
                      className="text-white font-extrabold text-lg
                        uppercase tracking-wider"
                    >
                      Volunteer Registration Form
                    </h3>
                    <p className="text-white/70 text-xs mt-1">
                      All fields are required
                    </p>
                  </div>

                  <div className="divide-y divide-gray-100">

                    {/* Name */}
                    <div className="flex flex-col sm:flex-row">
                      <label
                        className="w-full sm:w-48 px-6 py-4 bg-[#8B235E]/5
                          text-[#8B235E] font-bold text-xs uppercase
                          tracking-wider flex items-start pt-5 flex-shrink-0"
                      >
                        Name <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div className="flex-1 divide-y divide-gray-100">
                        <div
                          className="flex items-center gap-3 px-6 py-4
                            hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-gray-400 text-xs w-10
                            flex-shrink-0"
                          >
                            First
                          </span>
                          <input
                            type="text" name="firstName"
                            value={form.firstName} onChange={handleChange}
                            placeholder="Rajesh"
                            className="flex-1 outline-none text-gray-800
                              text-sm border-b-2 border-gray-200 pb-1
                              focus:border-[#8B235E] transition-colors
                              bg-transparent placeholder-gray-300"
                          />
                        </div>
                        <div
                          className="flex items-center gap-3 px-6 py-4
                            hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-gray-400 text-xs w-10
                            flex-shrink-0"
                          >
                            Last
                          </span>
                          <input
                            type="text" name="lastName"
                            value={form.lastName} onChange={handleChange}
                            placeholder="Kumar"
                            className="flex-1 outline-none text-gray-800
                              text-sm border-b-2 border-gray-200 pb-1
                              focus:border-[#8B235E] transition-colors
                              bg-transparent placeholder-gray-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col sm:flex-row">
                      <label
                        className="w-full sm:w-48 px-6 py-4 bg-[#8B235E]/5
                          text-[#8B235E] font-bold text-xs uppercase
                          tracking-wider flex items-center flex-shrink-0"
                      >
                        Email <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div
                        className="flex-1 px-6 py-4 hover:bg-gray-50
                          transition-colors"
                      >
                        <input
                          type="email" name="email"
                          value={form.email} onChange={handleChange}
                          placeholder="rajesh@email.com"
                          className="w-full outline-none text-gray-800
                            text-sm border-b-2 border-gray-200 pb-1
                            focus:border-[#8B235E] transition-colors
                            bg-transparent placeholder-gray-300"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col sm:flex-row">
                      <label
                        className="w-full sm:w-48 px-6 py-4 bg-[#8B235E]/5
                          text-[#8B235E] font-bold text-xs uppercase
                          tracking-wider flex items-center flex-shrink-0"
                      >
                        Phone <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div
                        className="flex-1 px-6 py-4 flex items-center
                          gap-3 hover:bg-gray-50 transition-colors"
                      >
                        <span
                          className="text-gray-600 text-sm font-bold
                            bg-gray-100 px-2 py-1 rounded-lg flex-shrink-0"
                        >
                          +91
                        </span>
                        <input
                          type="tel" name="phone"
                          value={form.phone} onChange={handleChange}
                          placeholder="98765 43210"
                          className="flex-1 outline-none text-gray-800
                            text-sm border-b-2 border-gray-200 pb-1
                            focus:border-[#8B235E] transition-colors
                            bg-transparent placeholder-gray-300"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col sm:flex-row">
                      <label
                        className="w-full sm:w-48 px-6 py-4 bg-[#8B235E]/5
                          text-[#8B235E] font-bold text-xs uppercase
                          tracking-wider flex items-center flex-shrink-0"
                      >
                        Location <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div
                        className="flex-1 grid grid-cols-2 divide-x
                          divide-gray-100"
                      >
                        <div
                          className="px-4 py-4 hover:bg-gray-50
                            transition-colors"
                        >
                          <p className="text-gray-400 text-xs mb-1">State</p>
                          <input
                            type="text" name="state"
                            value={form.state} onChange={handleChange}
                            placeholder="Tamil Nadu"
                            className="w-full outline-none text-gray-800
                              text-sm border-b-2 border-gray-200 pb-1
                              focus:border-[#8B235E] transition-colors
                              bg-transparent placeholder-gray-300"
                          />
                        </div>
                        <div
                          className="px-4 py-4 hover:bg-gray-50
                            transition-colors"
                        >
                          <p className="text-gray-400 text-xs mb-1">City</p>
                          <input
                            type="text" name="city"
                            value={form.city} onChange={handleChange}
                            placeholder="Chennai"
                            className="w-full outline-none text-gray-800
                              text-sm border-b-2 border-gray-200 pb-1
                              focus:border-[#8B235E] transition-colors
                              bg-transparent placeholder-gray-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Interests */}
                    <div className="flex flex-col sm:flex-row">
                      <label
                        className="w-full sm:w-48 px-6 py-4 bg-[#8B235E]/5
                          text-[#8B235E] font-bold text-xs uppercase
                          tracking-wider flex items-start pt-5 flex-shrink-0"
                      >
                        Interests <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div
                        className="flex-1 px-6 py-4 hover:bg-gray-50
                          transition-colors"
                      >
                        <textarea
                          name="interests" value={form.interests}
                          onChange={handleChange} rows={4}
                          placeholder="Tell us about your skills and how you'd like to help..."
                          className="w-full outline-none text-gray-800
                            text-sm border-2 border-gray-200 rounded-xl
                            p-3 focus:border-[#8B235E] transition-colors
                            resize-none bg-gray-50 placeholder-gray-300"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div
                      className="px-6 py-6 bg-gray-50 flex flex-col
                        sm:flex-row items-center justify-between gap-4"
                    >
                      <p className="text-gray-400 text-xs">
                        By submitting, you agree to be contacted by our team.
                      </p>
                      <button
                        onClick={handleSubmit}
                        className="px-10 py-3.5 bg-[#8B235E] text-white
                          font-extrabold text-sm uppercase tracking-wider
                          rounded-xl hover:bg-[#6b1b48] hover:shadow-lg
                          hover:shadow-[#8B235E]/20 transition-all
                          active:scale-95 flex items-center gap-2
                          flex-shrink-0"
                      >
                        <Heart size={16} className="fill-white" />
                        Submit Application
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-[#8B235E] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <Heart
            size={40}
            className="text-[#FFCC29] fill-[#FFCC29] mx-auto mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto text-sm md:text-base">
            Join over 500 volunteers who are already changing children's
            lives every single day.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Flexible Hours",
              "Training Provided",
              "Certificate Issued",
              "Real Impact",
            ].map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-2 text-white/80 text-sm"
              >
                <CheckCircle size={16} className="text-[#FFCC29]" />
                {perk}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
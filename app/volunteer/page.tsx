"use client";

import React, { useState } from "react";
import Header from "@/components/home/Header";
import {
  Heart, CheckCircle, ChevronRight,
  Users, Clock, Award, MapPin,
} from "lucide-react";

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

export default function VolunteerPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", state: "", city: "", interests: "",
    dob: "", gender: "", areaOfInterest: "",
    availability: "", occupation: "", priorExperience: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/volunteers`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name:       form.firstName,
            last_name:        form.lastName,
            email:            form.email,
            phone:            form.phone,
            state:            form.state,
            city:             form.city,
            interests:        form.interests,
            dob:              form.dob,
            gender:           form.gender,
            area_of_interest: form.areaOfInterest,
            availability:     form.availability,
            occupation:       form.occupation,
            prior_experience: form.priorExperience,
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

  const inputClass =
    "w-full text-gray-800 text-sm bg-white outline-none border-2 border-gray-200 " +
    "rounded-lg px-3 py-2 focus:border-[#8B235E] transition-colors " +
    "placeholder:text-gray-300 cursor-text relative z-10";

  const inlineInputClass =
    "flex-1 text-gray-800 text-sm bg-white outline-none border-2 border-gray-200 " +
    "rounded-lg px-3 py-2 focus:border-[#8B235E] transition-colors " +
    "placeholder:text-gray-300 cursor-text relative z-10";

  return (
    <main className="min-h-screen bg-white relative z-0">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-[72px] md:pt-[80px] bg-[#f9f6fb] relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-6">
            <a href="/" className="hover:text-[#8B235E] transition-colors">Home</a>
            <ChevronRight size={12} />
            <span className="text-gray-600 font-semibold">Volunteer</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left */}
            <div className="max-w-lg w-full">
              <span className="inline-block px-4 py-1.5 bg-[#8B235E]/10 text-[#8B235E]
                text-xs font-black uppercase tracking-widest rounded-full mb-4">
                Join Our Team
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900
                leading-[1.1] mb-4">
                Become a{" "}
                <span className="text-[#8B235E]">Volunteer</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                Join our community and help build a brighter future for children across Tamil Nadu.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#register"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B235E] text-white
                    rounded-xl font-extrabold text-xs uppercase tracking-wider
                    hover:bg-[#6b1b48] transition-all active:scale-95 shadow-sm">
                  <Heart size={13} className="fill-white" />
                  Register Now
                </a>
                <a href="#how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8B235E]
                    text-[#8B235E] rounded-xl font-extrabold text-xs uppercase tracking-wider
                    hover:bg-[#8B235E]/5 transition-all active:scale-95">
                  How It Works
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full lg:max-w-[360px]">
              {[
                { value: "500+", label: "Volunteers", icon: "👥" },
                { value: "12K+", label: "Hours Given", icon: "⏰" },
                { value: "3K+",  label: "Kids Helped", icon: "❤️" },
              ].map((s) => (
                <div key={s.label}
                  className="bg-white border border-gray-100 rounded-2xl px-3 py-5
                    text-center shadow-sm hover:shadow-md hover:border-[#8B235E]/20 transition-all">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-2xl md:text-3xl font-extrabold text-gray-900">{s.value}</p>
                  <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-100" />
      </section>

      {/* ── Intro ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#8B235E]
          text-center uppercase tracking-wide mb-5">
          Volunteering with ChildSave
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto">
          ChildSave believes that until members of civil society are actively involved in
          the process of change and development, nothing can truly transform. We invite you
          to be part of our volunteer program — to work for the welfare of poor children
          and underprivileged families across Tamil Nadu. Volunteers are the backbone of
          every organisation.
        </p>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-[#f9f6fb] py-12 md:py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800
            text-center mb-10 md:mb-12">
            How to Get Started
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center px-2">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[58%] w-full h-px bg-gray-200" />
                )}
                <div className="w-14 h-14 rounded-full border-2 border-[#8B235E]
                  flex items-center justify-center text-[#8B235E] font-extrabold text-lg
                  mb-4 bg-white relative z-10">
                  {s.step}
                </div>
                <h3 className="font-extrabold text-gray-800 text-sm md:text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Form ── */}
      <section id="register" className="py-12 md:py-20 bg-white relative z-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block px-4 py-1.5 bg-[#8B235E]/10 text-[#8B235E]
              text-xs font-bold uppercase tracking-widest rounded-full mb-3">
              Get Involved
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800">
              Register as a Volunteer
            </h2>
            <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-md mx-auto">
              Fill in your details and our team will get in touch with you shortly.
            </p>
            <div className="w-10 h-1 bg-[#8B235E] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">

            {/* Why Volunteer Sidebar */}
            <div className="lg:col-span-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <Heart size={26} className="text-[#8B235E] fill-[#8B235E] mb-4" />
              <h3 className="text-lg font-extrabold text-gray-800 mb-2">
                Why Volunteer With Us?
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">
                Your time and skills can transform the lives of children who need it most.
              </p>
              <div className="space-y-4">
                {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#8B235E]/10 flex items-center
                      justify-center flex-shrink-0">
                      <Icon size={15} className="text-[#8B235E]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 text-xs">{title}</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-gray-400 text-xs">Any questions?</p>
                <a href="mailto:info@childsave.org"
                  className="text-[#8B235E] font-bold text-sm hover:underline">
                  info@childsave.org
                </a>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center
                    justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-400 text-sm">
                    We've received your application. Our team will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">

                  {/* Form Header */}
                  <div className="bg-[#8B235E] px-6 py-4">
                    <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">
                      Volunteer Registration Form
                    </h3>
                    <p className="text-white/70 text-xs mt-0.5">All fields are required</p>
                  </div>

                  {/* Fields */}
                  <div className="p-5 md:p-6 space-y-4">

                    {/* First + Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <input type="text" name="firstName" value={form.firstName}
                          onChange={handleChange} placeholder="Rajesh"
                          autoComplete="given-name" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                          Last Name <span className="text-red-400">*</span>
                        </label>
                        <input type="text" name="lastName" value={form.lastName}
                          onChange={handleChange} placeholder="Kumar"
                          autoComplete="family-name" className={inputClass} />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input type="email" name="email" value={form.email}
                        onChange={handleChange} placeholder="rajesh@email.com"
                        autoComplete="email" className={inputClass} />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-xs font-bold bg-gray-100
                          px-3 py-2.5 rounded-lg border-2 border-gray-200 flex-shrink-0">
                          +91
                        </span>
                        <input type="tel" name="phone" value={form.phone}
                          onChange={handleChange} placeholder="98765 43210"
                          autoComplete="tel" className={inlineInputClass} />
                      </div>
                    </div>

                    {/* State + City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                          State <span className="text-red-400">*</span>
                        </label>
                        <input type="text" name="state" value={form.state}
                          onChange={handleChange} placeholder="Tamil Nadu"
                          autoComplete="address-level1" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                          City <span className="text-red-400">*</span>
                        </label>
                        <input type="text" name="city" value={form.city}
                          onChange={handleChange} placeholder="Chennai"
                          autoComplete="address-level2" className={inputClass} />
                      </div>
                    </div>

                    {/* Date of Birth + Gender */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                          Date of Birth <span className="text-red-400">*</span>
                        </label>
                        <input type="date" name="dob" value={form.dob}
                          onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                          Gender <span className="text-red-400">*</span>
                        </label>
                        <select name="gender" value={form.gender}
                          onChange={handleChange} className={inputClass}>
                          <option value="" disabled>Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Area of Interest + Availability */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                          Area of Interest <span className="text-red-400">*</span>
                        </label>
                        <select name="areaOfInterest" value={form.areaOfInterest}
                          onChange={handleChange} className={inputClass}>
                          <option value="" disabled>Select area</option>
                          <option value="education">Education</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="fundraising">Fundraising</option>
                          <option value="events">Events</option>
                          <option value="social_media">Social Media</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                          Availability <span className="text-red-400">*</span>
                        </label>
                        <select name="availability" value={form.availability}
                          onChange={handleChange} className={inputClass}>
                          <option value="" disabled>Select availability</option>
                          <option value="weekdays">Weekdays</option>
                          <option value="weekends">Weekends</option>
                          <option value="both">Both</option>
                        </select>
                      </div>
                    </div>

                    {/* Occupation + Prior Experience */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                          Occupation <span className="text-red-400">*</span>
                        </label>
                        <input type="text" name="occupation" value={form.occupation}
                          onChange={handleChange} placeholder="e.g. Teacher, Engineer"
                          className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                          Prior Experience <span className="text-red-400">*</span>
                        </label>
                        <select name="priorExperience" value={form.priorExperience}
                          onChange={handleChange} className={inputClass}>
                          <option value="" disabled>Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Interests */}
                    <div>
                      <label className="block text-[#8B235E] font-bold text-xs uppercase tracking-wider mb-1.5">
                        Your Interests <span className="text-red-400">*</span>
                      </label>
                      <textarea name="interests" value={form.interests}
                        onChange={handleChange} rows={4}
                        placeholder="Tell us about your skills and how you'd like to help..."
                        className="w-full text-gray-800 text-sm bg-white outline-none
                          border-2 border-gray-200 rounded-lg px-3 py-2
                          focus:border-[#8B235E] transition-colors resize-none
                          placeholder:text-gray-300 cursor-text relative z-10" />
                    </div>

                    {/* Submit */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center
                      justify-between gap-4 border-t border-gray-100">
                      <p className="text-gray-400 text-xs text-center sm:text-left">
                        By submitting, you agree to be contacted by our team.
                      </p>
                      <button onClick={handleSubmit}
                        className="w-full sm:w-auto px-8 py-3 bg-[#8B235E] text-white
                          font-extrabold text-xs uppercase tracking-wider rounded-xl
                          hover:bg-[#6b1b48] transition-all active:scale-95
                          flex items-center justify-center gap-2 shadow-sm cursor-pointer">
                        <Heart size={13} className="fill-white" />
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

      {/* ── Why Volunteer Icon Grid ── */}
      <section className="border-t border-gray-100 bg-[#f9f6fb] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0
            divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center
                px-5 py-8 hover:bg-[#f9f6fb] transition-colors">
                <div className="w-11 h-11 rounded-full bg-[#8B235E]/10 flex items-center
                  justify-center mb-3">
                  <Icon size={20} className="text-[#8B235E]" />
                </div>
                <p className="font-extrabold text-gray-800 text-sm mb-1">{title}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart size={30} className="text-[#8B235E] fill-[#8B235E] mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-400 mb-7 max-w-md mx-auto text-sm md:text-base">
            Join over 500 volunteers already changing children's lives every single day.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            {["Flexible Hours", "Training Provided", "Certificate Issued", "Real Impact"].map((perk) => (
              <div key={perk} className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                <CheckCircle size={14} className="text-[#8B235E]" />
                {perk}
              </div>
            ))}
          </div>
          <a href="#register"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#8B235E] text-white
              font-extrabold text-sm uppercase tracking-wider rounded-xl
              hover:bg-[#6b1b48] transition-all active:scale-95 shadow-sm">
            <Heart size={13} className="fill-white" />
            Become a Volunteer
          </a>
        </div>
      </section>
    </main>
  );
}
"use client";

import React, { useRef } from "react";
import { Heart, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const AboutMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  return (
    <section
      ref={ref}
      className="w-full py-20 px-5"
      style={{ background: "#fdf6f0" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — Single clean image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ height: 400 }}
            >
              <Image
               src="/images/about-seva.webp"
                alt="Community service"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(180,50,0,0.4) 0%, transparent 55%)",
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Small label */}
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#d94f00" }}
            >
              About Us
            </p>

            {/* Heading */}
            <h2
              className="text-2xl md:text-3xl font-semibold leading-snug"
              style={{ color: "#1a1a1a", fontFamily: "Georgia, serif" }}
            >
              We are a temple-rooted NGO <br />
              serving Tamil Nadu since 2010.
            </h2>

            {/* Body */}
            <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
              Makal Sevai Margam is the social service wing of{" "}
              <span style={{ color: "#1a1a1a", fontWeight: 600 }}>
                Uthamar Thiru Kovil, Arrakattalai.
              </span>{" "}
              We believe that serving people is the truest form of devotion to God.
            </p>

            <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
              Over the years we have quietly built homes for the homeless, served
              daily meals to the hungry, and funded the education of children who
              had no one else to look after them.
            </p>

            {/* Small quote */}
            <p
              className="text-sm italic leading-relaxed pl-4"
              style={{
                color: "#888",
                borderLeft: "3px solid #f4c4a8",
              }}
            >
              "We serve because the divine lives in every person we help."
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: "#d94f00" }}
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                Donate Now
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:bg-orange-50"
                style={{
                  border: "1.5px solid #d94f00",
                  color: "#d94f00",
                  background: "transparent",
                }}
              >
                <Users className="w-3.5 h-3.5" />
                Volunteer
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
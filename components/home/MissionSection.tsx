"use client";

import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const MissionSection = () => {
  const ref = useRef(null);

  // 🔥 Detect every time it enters viewport
  const isInView = useInView(ref, {
    margin: "-100px",
    once: false,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-[#eaf6ff] py-16 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-[#4a4a4a] text-center mb-12 tracking-tight"
        >
          You can help protect futures — starting with ChildSave
        </motion.h2>

        <div className="flex flex-col md:flex-row items-stretch gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Every child deserves the chance to grow up safe and healthy. With support from 
              dedicated individuals like you, young people in our programs can escape the cycle 
              of hardship. Together, we can provide the resources, protection, and education 
              needed to build confidence and shape a brighter future for entire communities.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="bg-[#009270] text-white px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#007a5d] transition-all shadow-md hover:scale-105">
                Sponsor a Child
              </button>

              <Link
                href="/how-sponsorship-works"
                className="flex items-center text-[#009270] font-bold text-sm uppercase tracking-wider group"
              >
                See how childsave works
                <ChevronRight
                  size={18}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-gray-300"></div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-between py-2"
          >
            <div className="space-y-4">
              <p className="text-[#8B235E] text-xl italic font-medium leading-relaxed">
                "It is a privilege to stand with ChildSave. Seeing the direct impact on 
                a child&apos;s life is truly rewarding, and their team makes it so easy to help."
              </p>

              <div className="pt-4">
                <p className="text-[#8B235E] font-bold text-lg">— Sarah J.,</p>
                <p className="text-[#8B235E] text-sm font-semibold uppercase tracking-widest">
                  Supporter since 2015
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 md:mt-0">
              <Link
                href="/what-people-say"
                className="flex items-center text-[#009270] font-bold text-sm uppercase tracking-wider group"
              >
                More from our supporters
                <ChevronRight
                  size={18}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;




import React from "react";

export default function FeaturedSection() {
  return (
    <section className="bg-[#eaf6ff] py-16 sm:py-20 px-6 sm:px-10 lg:px-20">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* 🔥 LEFT CONTENT */}
        <div className="text-center lg:text-left">
{/*           
          <h2 className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
            About Us
          </h2> */}

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Empowering Children for a Better Future
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            We are committed to improving the lives of underprivileged children
            by providing education, food, and care for a brighter tomorrow.
          </p>

          {/* <button className="mt-8 px-6 py-3 bg-[#6da4d0] text-white rounded-full font-semibold shadow-md hover:scale-105 transition">
            Learn More
          </button> */}
        </div>

        {/* 🔥 RIGHT SIDE SHAPE IMAGE */}
        <div className="flex justify-center">
          
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]">

            {/* BACK COLOR SHAPE */}
            <div className="absolute inset-0 bg-[#6da4d0] rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" />

            {/* IMAGE INSIDE SHAPE */}
            <div className="absolute inset-2 overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
              <img
                src="/home/1.jpg"
                alt="children"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}




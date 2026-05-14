"use client";

import React, { useState, useEffect, useCallback } from "react";
import Header from "@/components/home/Header";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Heart,
  Users,
  Image as ImageIcon,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const PHOTOS: Photo[] = [
  { id: 1,  src: "/images/gallery/img1.webp",  alt: "Children at community center", caption: "Community Learning Day"     },
  { id: 2,  src: "/images/gallery/img2.webp",  alt: "Child reading a book",         caption: "Books for Every Child"      },
  { id: 3,  src: "/images/gallery/img3.webp",  alt: "Kids playing outdoors",        caption: "Joy in Every Moment"        },
  { id: 4,  src: "/images/gallery/img4.webp",  alt: "Education program session",    caption: "Education Drive 2025"       },
  { id: 5,  src: "/images/gallery/img5.webp",  alt: "Mother and child",             caption: "Family Support Program"     },
  { id: 6,  src: "/images/gallery/img6.webp",  alt: "Volunteers with children",     caption: "Our Volunteers in Action"   },
  { id: 7,  src: "/images/gallery/img7.webp",  alt: "Charity event outdoors",       caption: "Annual Charity Walk"        },
  { id: 8,  src: "/images/gallery/img8.webp",  alt: "Children in classroom",        caption: "Classroom of Hope"          },
  { id: 9,  src: "/images/gallery/img9.webp",  alt: "Kids smiling together",        caption: "Smiles We Live For"         },
  { id: 10, src: "/images/gallery/img10.webp", alt: "Group of children",            caption: "Growing Together"           },
  { id: 11, src: "/images/gallery/img11.webp", alt: "Fundraiser event",             caption: "Fundraiser Gala 2025"       },
  { id: 12, src: "/images/gallery/img12.webp", alt: "Children eating together",     caption: "Nutrition & Wellness Drive" },
];

const STATS = [
  { icon: Camera, label: "Photos Captured", value: "2,400+" },
  { icon: Heart,  label: "Lives Touched",   value: "10,000+" },
  { icon: Users,  label: "Events Covered",  value: "80+"     },
];

// ─── Lightbox ──────────────────────────────────────────────────────────────────
const Lightbox = ({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const photo = photos[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex items-center
        justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10
          hover:bg-white/25 text-white transition-all z-10"
      >
        <X size={22} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        disabled={index === 0}
        aria-label="Previous photo"
        className="absolute left-3 md:left-8 p-3 rounded-full bg-white/10
          hover:bg-white/25 text-white transition-all z-10
          disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[78vh] max-w-full object-contain rounded-2xl
            shadow-2xl"
        />
        <div className="mt-5 text-center">
          <p className="text-white font-bold text-base md:text-lg">
            {photo.caption}
          </p>
          <p className="text-white/40 text-sm mt-1">
            {index + 1} / {photos.length}
          </p>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        disabled={index === photos.length - 1}
        aria-label="Next photo"
        className="absolute right-3 md:right-8 p-3 rounded-full bg-white/10
          hover:bg-white/25 text-white transition-all z-10
          disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronRight size={26} />
      </button>
    </div>
  );
};

// ─── PhotoCard ─────────────────────────────────────────────────────────────────
const PhotoCard = ({
  photo,
  onClick,
}: {
  photo: Photo;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="group relative overflow-hidden rounded-2xl cursor-pointer
      break-inside-avoid mb-4 shadow-sm hover:shadow-xl
      transition-all duration-300 hover:-translate-y-1"
  >
    <img
      src={photo.src}
      alt={photo.alt}
      className="w-full h-auto block transition-transform duration-500
        group-hover:scale-105"
      loading="lazy"
    />
    {/* Hover overlay */}
    <div
      className="absolute inset-0 bg-gradient-to-t from-black/65
        via-transparent to-transparent opacity-0 group-hover:opacity-100
        transition-opacity duration-300 flex items-end p-4"
    >
      <div className="flex items-center gap-2">
        <ImageIcon size={13} className="text-white/80 flex-shrink-0" />
        <p className="text-white text-sm font-semibold leading-tight">
          {photo.caption}
        </p>
      </div>
    </div>
  </div>
);

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(() =>
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const nextPhoto = useCallback(() =>
    setLightboxIndex((i) =>
      i !== null && i < PHOTOS.length - 1 ? i + 1 : i), []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* ── Hero ── */}
      <section className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
        <img
          src="/images/gallery/img1.webp"
          alt="Children moments"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Text */}
        <div
          className="absolute inset-0 flex flex-col justify-end
            px-6 md:px-16 pb-12 md:pb-16"
        >
          <span
            className="inline-block px-4 py-1.5 bg-[#FFCC29] text-gray-900
              text-xs font-bold uppercase tracking-widest rounded-full
              mb-4 w-fit"
          >
            Media & Gallery
          </span>
          <h1
            className="text-4xl md:text-6xl font-extrabold text-white
              leading-tight mb-3"
          >
            MOMENTS THAT <br />
            <span className="text-[#FFCC29]">MATTER</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl mb-6">
            Every photograph is a story of hope, love, and transformation.
            Explore the moments that define our mission.
          </p>
          
           <a href="#gallery"
            className="w-fit px-8 py-3.5 bg-[#8B235E] text-white rounded-xl
              font-extrabold text-sm uppercase tracking-wider
              hover:bg-[#6b1b48] transition-all active:scale-95 shadow-lg"
          >
            View Gallery
          </a>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row items-center
                  sm:items-start gap-2 sm:gap-4 text-center sm:text-left"
              >
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl
                    bg-[#8B235E]/10 flex items-center justify-center
                    flex-shrink-0"
                >
                  <Icon size={20} className="text-[#8B235E]" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-extrabold text-gray-800">
                    {value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 font-medium">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Masonry Grid ── */}
      <section
        id="gallery"
        className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16"
      >
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
          {PHOTOS.map((photo, i) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-[#8B235E] to-[#6b1b48]
        py-14 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <Heart
            size={40}
            className="text-[#FFCC29] fill-[#FFCC29] mx-auto mb-4"
          />
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            Want to be part of our story?
          </h2>
          <p
            className="text-white/75 mb-8 max-w-md mx-auto
              text-sm md:text-base leading-relaxed"
          >
            Join us as a donor, volunteer, or sponsor and help us create
            more moments like these.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
          <a    href="/donate"
              className="px-8 py-3.5 bg-[#FFCC29] text-gray-900 rounded-xl
                font-extrabold text-sm uppercase tracking-wider
                hover:bg-yellow-300 transition-all active:scale-95 shadow-lg"
            >
              Donate Now
            </a>
            
           <a   href="/volunteer"
              className="px-8 py-3.5 bg-transparent border-2 border-white
                text-white rounded-xl font-extrabold text-sm uppercase
                tracking-wider hover:bg-white/10 transition-all
                active:scale-95"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={PHOTOS}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </main>
  );
}
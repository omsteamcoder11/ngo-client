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
  Filter,
} from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_URL;

const CATEGORIES = ["All", "General", "Events", "Education", "Health", "Volunteers", "Campaigns"];

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

const STATS = [
  { icon: Camera, label: "Photos Captured", value: "2,400+" },
  { icon: Heart,  label: "Lives Touched",   value: "10,000+" },
  { icon: Users,  label: "Events Covered",  value: "80+"     },
];

// ─── Lightbox ──────────────────────────────────────────────────────────────────
const Lightbox = ({
  photos, index, onClose, onPrev, onNext,
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
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
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
          className="max-h-[78vh] max-w-full object-contain rounded-2xl shadow-2xl"
        />
        <div className="mt-5 text-center">
          <p className="text-white font-bold text-base md:text-lg">
            {photo.caption}
          </p>
          <span className="inline-block mt-2 px-3 py-1 bg-[#8B235E]/80
            text-white text-xs font-semibold rounded-full uppercase tracking-wider">
            {photo.category}
          </span>
          <p className="text-white/40 text-sm mt-2">
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
    <div className="absolute inset-0 bg-gradient-to-t from-black/75
      via-black/20 to-transparent opacity-0 group-hover:opacity-100
      transition-opacity duration-300 flex flex-col justify-end p-4"
    >
      <div className="flex items-start gap-2">
        <ImageIcon size={13} className="text-white/80 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-white text-sm font-bold leading-tight">
            {photo.caption}
          </p>
          <span className="inline-block mt-1.5 px-2 py-0.5 bg-[#8B235E]
            text-white text-[10px] font-semibold rounded uppercase tracking-wider">
            {photo.category}
          </span>
        </div>
      </div>
    </div>
  </div>
);

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [photos, setPhotos]           = useState<Photo[]>([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex]   = useState<number | null>(null);

  // ── Fetch ──
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res  = await fetch(`${API}/api/gallery`);
        const data = await res.json();

        const mapped: Photo[] = data.images.map((img: any) => ({
          id:       img.id,
          src:      img.image_url.startsWith("/images")
                      ? img.image_url
                      : `${API}${img.image_url}`,
          alt:      img.title    || "Gallery image",
          caption:  img.title    || "",
          category: img.category || "General",
        }));

        setPhotos(mapped);
      } catch {
        setError("Failed to load gallery images");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // ── Filtered photos ──
  const filteredPhotos = activeCategory === "All"
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  // ── Lightbox handlers ──
  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto     = useCallback(() =>
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const nextPhoto     = useCallback(() =>
    setLightboxIndex((i) =>
      i !== null && i < filteredPhotos.length - 1 ? i + 1 : i), [filteredPhotos.length]);

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
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end
          px-6 md:px-16 pb-12 md:pb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FFCC29] text-gray-900
            text-xs font-bold uppercase tracking-widest rounded-full mb-4 w-fit">
            Media & Gallery
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white
            leading-tight mb-3">
            MOMENTS THAT <br />
            <span className="text-[#FFCC29]">MATTER</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl mb-6">
            Every photograph is a story of hope, love, and transformation.
            Explore the moments that define our mission.
          </p>
          
          <a  href="#gallery"
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
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl
                  bg-[#8B235E]/10 flex items-center justify-center flex-shrink-0">
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

      {/* ── Gallery Section ── */}
      <section
        id="gallery"
        className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16"
      >
        {/* ── Category Filter ── */}
        {!loading && !error && photos.length > 0 && (
          <div className="mb-8 md:mb-12">
            {/* Title row */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#8B235E]/10
                flex items-center justify-center flex-shrink-0">
                <Filter size={16} className="text-[#8B235E]" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-gray-800 leading-none">
                  Browse by Category
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? "s" : ""}
                  {activeCategory !== "All" ? ` in ${activeCategory}` : " total"}
                </p>
              </div>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {CATEGORIES.map((cat) => {
                const count = cat === "All"
                  ? photos.length
                  : photos.filter((p) => p.category === cat).length;

                if (count === 0 && cat !== "All") return null;

                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setLightboxIndex(null);
                    }}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-xl text-sm
                      font-bold transition-all duration-200 border
                      ${isActive
                        ? "bg-[#8B235E] text-white border-[#8B235E] shadow-lg shadow-[#8B235E]/20 scale-105"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#8B235E] hover:text-[#8B235E] hover:shadow-md"
                      }
                    `}
                  >
                    {cat}
                    <span className={`
                      text-[11px] font-extrabold px-1.5 py-0.5 rounded-md min-w-[20px]
                      text-center leading-none
                      ${isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500"
                      }
                    `}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Loading ── */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-[#8B235E]
              border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* ── Error ── */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 font-semibold">{error}</p>
          </div>
        )}

        {/* ── Empty after filter ── */}
        {!loading && !error && filteredPhotos.length === 0 && photos.length > 0 && (
          <div className="text-center py-20">
            <ImageIcon size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-bold text-lg mb-2">
              No photos in {activeCategory}
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Try selecting a different category
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="px-6 py-2.5 bg-[#8B235E] text-white rounded-xl
                font-bold text-sm hover:bg-[#6b1b48] transition-all"
            >
              View All Photos
            </button>
          </div>
        )}

        {/* ── No images at all ── */}
        {!loading && !error && photos.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400 font-medium">No images uploaded yet.</p>
          </div>
        )}

        {/* ── Masonry Grid ── */}
        {!loading && !error && filteredPhotos.length > 0 && (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
            {filteredPhotos.map((photo, i) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onClick={() => openLightbox(i)}
              />
            ))}
          </div>
        )}
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
          <p className="text-white/75 mb-8 max-w-md mx-auto
            text-sm md:text-base leading-relaxed">
            Join us as a donor, volunteer, or sponsor and help us create
            more moments like these.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a  href="/donate"
              className="px-8 py-3.5 bg-[#FFCC29] text-gray-900 rounded-xl
                font-extrabold text-sm uppercase tracking-wider
                hover:bg-yellow-300 transition-all active:scale-95 shadow-lg"
            >
              Donate Now
            </a>
            
           <a   href="/volunteer"
              className="px-8 py-3.5 bg-transparent border-2 border-white
                text-white rounded-xl font-extrabold text-sm uppercase
                tracking-wider hover:bg-white/10 transition-all active:scale-95"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={filteredPhotos}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </main>
  );
}
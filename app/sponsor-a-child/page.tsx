"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Heart, MapPin, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
// ── Design tokens ─────────────────────────────────────────────
const MAROON  = "#8B235E";
const GREEN   = "#009270";
const CREAM   = "#FAF7F2";
const CREAM2  = "#F3EDE4";
const DIVIDER = "#E8E0D8";
const TEXT    = "#1C1C1C";
const MUTED   = "#7A7470";

export default function SponsorAChild() {
  const [children, setChildren] = useState<any[]>([]);
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState("");
  const [liked, setLiked]       = useState<Set<number>>(new Set());

  useEffect(() => {
    fetch(`${API_URL}/api/children`)
      .then(res => res.json())
      .then(data => { setChildren(data.children || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = children.filter(c =>
    c.name?.toLowerCase().includes(search.toLowerCase()) ||
    c.location?.toLowerCase().includes(search.toLowerCase())
  );

  const toggleLike = (id: number) => {
    setLiked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // ── Loading ───────────────────────────────────────────────
  if (loading) return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      background: CREAM,
      fontFamily: "'Arial', sans-serif",
    }}>
      <div style={{
        width: "36px",
        height: "36px",
        border: `3px solid ${DIVIDER}`,
        borderTop: `3px solid ${MAROON}`,
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <p style={{ fontSize: "0.78rem", color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>
        Loading children...
      </p>
    </div>
  );

  return (
    // ── FIX: removed paddingTop so hero sits flush under navbar ──
    <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "'Arial', sans-serif" }}>

      {/* ── HERO ────────────────────────────────────────────── */}
      <div style={{ background: MAROON }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          // tighter padding — no gap between nav and hero
          padding: "clamp(1.6rem, 3.5vw, 2.8rem) clamp(1.2rem, 5vw, 5rem)",
        }}>
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>

            <span style={{
              display: "inline-block",
              fontSize: "0.68rem",
              fontWeight: 700,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}>
              Make a Difference
            </span>

            <h1 style={{
              fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: "0 0 0.75rem",
              fontFamily: "'Georgia', serif",
            }}>
              Sponsor a Child
            </h1>

            <p style={{
              fontSize: "clamp(0.84rem, 1.4vw, 0.96rem)",
              color: "rgba(255,255,255,0.68)",
              lineHeight: 1.7,
              margin: "0 0 1.4rem",
            }}>
              Every child deserves a chance. Your monthly support changes lives forever.
            </p>

            {/* Search */}
            <div style={{ position: "relative", maxWidth: "380px", margin: "0 auto 1.4rem" }}>
              <Search size={14} style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "rgba(255,255,255,0.45)",
              }} />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  paddingLeft: "36px",
                  paddingRight: "12px",
                  paddingTop: "9px",
                  paddingBottom: "9px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  fontSize: "0.84rem",
                  outline: "none",
                  boxSizing: "border-box",
                  fontFamily: "'Arial', sans-serif",
                }}
                onFocus={e => {
                  e.target.style.background = "rgba(255,255,255,0.18)";
                  e.target.style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onBlur={e => {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.borderColor = "rgba(255,255,255,0.18)";
                }}
              />
            </div>

            {/* Stats */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(1.4rem, 4vw, 3rem)",
              flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: "1.2rem",
            }}>
              {[
                { label: "Children Waiting", value: children.length },
                { label: "Fully Funded",      value: children.filter(c => c.funded >= 100).length },
                { label: "Avg. Monthly Cost", value: `₹${Math.round(children.reduce((a, c) => a + (c.price || 0), 0) / (children.length || 1))}` },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <p style={{
                    fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                    fontWeight: 800,
                    color: "#fff",
                    margin: 0,
                    letterSpacing: "-0.01em",
                    fontFamily: "'Georgia', serif",
                  }}>
                    {stat.value}
                  </p>
                  <p style={{
                    fontSize: "0.64rem",
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    margin: "0.2rem 0 0",
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── GRID ─────────────────────────────────────────────── */}
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "clamp(1.4rem, 3vw, 2.5rem) clamp(1.2rem, 5vw, 5rem)",
      }}>

        {/* Results bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.2rem",
          paddingBottom: "0.9rem",
          borderBottom: `1px solid ${DIVIDER}`,
        }}>
          <p style={{ fontSize: "0.82rem", color: MUTED, margin: 0 }}>
            Showing{" "}
            <span style={{ fontWeight: 700, color: TEXT }}>{filtered.length}</span>{" "}
            children
          </p>
          <button style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.82rem",
            color: MUTED,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            fontFamily: "'Arial', sans-serif",
            padding: 0,
          }}>
            <SlidersHorizontal size={13} />
            Filter
          </button>
        </div>

        {/* Empty */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem 0", color: MUTED }}>
            <p style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 0.3rem" }}>No children found</p>
            <p style={{ fontSize: "0.82rem", margin: 0 }}>Try a different search term</p>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: "clamp(0.8rem, 1.5vw, 1.2rem)",
          }}>
            <AnimatePresence>
              {filtered.map((child: any, index: number) => (
                <motion.div
                  key={child.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  style={{
                    background: "#fff",
                    // ── FIX: single subtle border, no heavy shadow ──
                    border: `1px solid ${DIVIDER}`,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* IMAGE */}
                  <div style={{
                    position: "relative",
                    // ── FIX: tighter image height, less dramatic ──
                    height: "clamp(180px, 24vw, 220px)",
                    overflow: "hidden",
                    background: CREAM2,
                    flexShrink: 0,
                  }}>
                    <img
                      src={child.image_url || '/children/1.webp'}
                      alt={child.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />

                    {/* lighter gradient — less dramatic */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.42) 0%, transparent 50%)",
                    }} />

                    {/* Waiting badge */}
                    <div style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: "rgba(255,255,255,0.92)",
                      padding: "4px 9px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}>
                      <Clock size={10} style={{ color: MAROON }} />
                      <span style={{
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: TEXT,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}>
                        {child.waiting_days} Days
                      </span>
                    </div>

                    {/* Heart */}
                    <button
                      onClick={() => toggleLike(child.id)}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "rgba(255,255,255,0.92)",
                        border: "none",
                        padding: "6px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.15s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.12)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Heart size={14} style={{
                        fill:  liked.has(child.id) ? MAROON : "none",
                        color: liked.has(child.id) ? MAROON : MUTED,
                      }} />
                    </button>

                    {/* Name overlay */}
                    <div style={{ position: "absolute", bottom: "10px", left: "12px", right: "12px" }}>
                      <h2 style={{
                        fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 2px",
                        lineHeight: 1.2,
                        fontFamily: "'Georgia', serif",
                        textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                      }}>
                        {child.name}
                      </h2>
                      <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                        <MapPin size={9} style={{ color: "rgba(255,255,255,0.7)" }} />
                        <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                          {child.age} yrs • {child.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT — tighter, no drama ──────────────── */}
                  <div style={{
                    // ── FIX: reduced padding so cards feel compact not bloated ──
                    padding: "clamp(0.9rem, 2vw, 1.2rem)",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}>

                    {/* Progress */}
                    <div style={{ marginBottom: "1rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                        <span style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          color: MUTED,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                        }}>
                          Funding Progress
                        </span>
                        <span style={{
                          fontSize: "0.76rem",
                          fontWeight: 700,
                          color: child.funded >= 100 ? GREEN : MAROON,
                        }}>
                          {child.funded}%
                        </span>
                      </div>
                      {/* Track */}
                      <div style={{ width: "100%", background: CREAM2, height: "4px", overflow: "hidden" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${child.funded}%` }}
                          transition={{ duration: 1.0, ease: "easeOut", delay: index * 0.05 }}
                          style={{ height: "100%", background: child.funded >= 100 ? GREEN : MAROON }}
                        />
                      </div>
                      {child.funded >= 100 && (
                        <p style={{ fontSize: "0.68rem", color: GREEN, fontWeight: 700, margin: "4px 0 0" }}>
                          ✓ Fully Funded
                        </p>
                      )}
                    </div>

                    {/* Footer */}
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "auto",
                      paddingTop: "0.85rem",
                      borderTop: `1px solid ${DIVIDER}`,
                    }}>
                      <div>
                        <p style={{
                          fontSize: "0.58rem",
                          fontWeight: 700,
                          color: MUTED,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          margin: "0 0 2px",
                        }}>
                          Monthly Cost
                        </p>
                        <p style={{
                          fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                          fontWeight: 800,
                          color: TEXT,
                          margin: 0,
                          letterSpacing: "-0.01em",
                          fontFamily: "'Georgia', serif",
                        }}>
                          ₹{child.price}
                          <span style={{ fontSize: "0.68rem", fontWeight: 500, color: MUTED, marginLeft: "2px" }}>/mo</span>
                        </p>
                      </div>

                      <Link
                        href={`/sponsor/${child.id}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          background: MAROON,
                          color: "#fff",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          padding: "0.55rem 1rem",
                          transition: "background 0.18s",
                          fontFamily: "'Arial', sans-serif",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = GREEN)}
                        onMouseLeave={e => (e.currentTarget.style.background = MAROON)}
                      >
                        Sponsor
                        <ArrowRight size={12} />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
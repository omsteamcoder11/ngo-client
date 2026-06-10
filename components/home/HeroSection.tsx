"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-5px); }
        }
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes fade-up {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .h-font { font-family: var(--font-cormorant, Georgia, serif); }
        .b-font { font-family: var(--font-outfit, system-ui, sans-serif); }

        .shimmer {
          background: linear-gradient(90deg,#ea580c 0%,#fb923c 30%,#ea580c 60%,#c2410c 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .au1 { animation: fade-up .6s ease .05s both; }
        .au2 { animation: fade-up .6s ease .15s both; }
        .au3 { animation: fade-up .6s ease .25s both; }
        .au4 { animation: fade-up .6s ease .35s both; }
        .au5 { animation: fade-up .6s ease .45s both; }
        .au6 { animation: fade-up .6s ease .55s both; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 11px 24px; border-radius: 100px;
          font-size: 12px; font-weight: 800;
          letter-spacing: 0.10em; text-transform: uppercase;
          text-decoration: none; color: #fff;
          background: linear-gradient(135deg,#ea580c,#c2410c);
          box-shadow: 0 3px 14px rgba(234,88,12,0.35);
          transition: transform 200ms, box-shadow 200ms;
          white-space: nowrap;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(234,88,12,0.50);
        }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 11px 22px; border-radius: 100px;
          font-size: 12px; font-weight: 800;
          letter-spacing: 0.10em; text-transform: uppercase;
          text-decoration: none; color: #ea580c;
          border: 1.5px solid rgba(234,88,12,0.28);
          background: transparent;
          transition: background 200ms, border-color 200ms;
          white-space: nowrap;
        }
        .btn-ghost:hover {
          background: rgba(234,88,12,0.06);
          border-color: rgba(234,88,12,0.50);
        }

        .pill {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 5px 12px; border-radius: 100px;
          font-size: 11px; font-weight: 700; color: #7c2d12;
          border: 1px solid rgba(234,88,12,0.18);
          background: #fff;
          white-space: nowrap;
        }

        .stat-box {
          padding: 10px 16px; border-radius: 10px;
          background: #fff;
          border: 1px solid rgba(234,88,12,0.12);
          box-shadow: 0 2px 8px rgba(234,88,12,0.05);
          transition: transform 180ms;
        }
        .stat-box:hover { transform: translateY(-2px); }

        .img-float { animation: float 5s ease-in-out infinite; }

        .svc-item {
          display: flex; align-items: center; gap: 12px;
          padding: 18px 20px;
          transition: background 180ms; cursor: default;
        }
        .svc-item:hover { background: rgba(255,255,255,0.10); }

        /* ── Responsive ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .img-col { order: -1; }
          .svc-grid { grid-template-columns: 1fr; }
          .svc-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.12); }
          .svc-item:last-child { border-bottom: none; }
        }

        @media (max-width: 600px) {
          .pills-row { flex-wrap: wrap; }
          .btns-row  { flex-direction: column; width: 100%; }
          .btns-row a { justify-content: center; width: 100%; }
          .stats-row { gap: 10px; }
          .stat-box  { flex: 1; min-width: 80px; }
        }
      `}</style>

      {/* ── TOP ANNOUNCEMENT BAR ── */}
      <div style={{
        marginTop: 68,
        background: 'linear-gradient(90deg,#c2410c,#ea580c,#c2410c)',
        padding: '8px 16px', textAlign: 'center',
      }}>
        <p className="b-font" style={{
          color: '#fff', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase', margin: 0,
        }}>
          🪔 Uthamar Thiru Kovil Arrakattalai — Serving Since 2010 🪔
        </p>
      </div>

      <section className="b-font" style={{
        background: 'linear-gradient(160deg,#fff8f3 0%,#ffffff 60%,#fff5ee 100%)',
        borderBottom: '1px solid rgba(234,88,12,0.08)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 20px 24px', }}>
          <div className="hero-grid">

            {/* ════ LEFT ════ */}
            <div>

              {/* Tag */}
              <div className="au1" style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(234,88,12,0.07)',
                border: '1px solid rgba(234,88,12,0.18)',
                borderRadius: 100, padding: '5px 14px 5px 6px',
                marginBottom: 16,
              }}>
                <span style={{
                  background: 'linear-gradient(135deg,#ea580c,#d97706)',
                  borderRadius: '50%', width: 24, height: 24,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 12,
                }}>🪔</span>
                <span style={{
                  fontSize: 10, fontWeight: 800,
                  letterSpacing: '0.16em', textTransform: 'uppercase', color: '#ea580c',
                }}>Temple Social Service</span>
              </div>

              {/* Headline */}
              <h1 className="au2 h-font" style={{
                fontSize: 'clamp(24px, 2.8vw, 38px)',
                lineHeight: 1.08, margin: '0 0 14px', color: '#1c0a00', fontWeight: 700,
              }}>
                Serving God&apos;s<br />
                People With <span className="shimmer">Devotion.</span>
              </h1>

              {/* Description */}
              <p className="au3" style={{
                fontSize: 'clamp(13px, 1.5vw, 16px)',
                color: '#92400e', lineHeight: 1.7,
                margin: '0 0 20px', maxWidth: 440, fontWeight: 500,
              }}>
          Rooted in the teachings of Vallalar — feeding the 
hungry, building the temple, and uplifting the 
community through selfless seva.
              </p>

              {/* Pills */}
              <div className="au4 pills-row" style={{
                display: 'flex', gap: 8, marginBottom: 24,
              }}>
                {['🏗️ Construction','🍱 Food Service', '🙏 General Seva'].map(p => (
                  <span key={p} className="pill">{p}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="au5 btns-row" style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <Link href="/donate" className="btn-primary">🙏 Donate Now</Link>
                <Link href="/services" className="btn-ghost">Our Services →</Link>
              </div>

              {/* Stats */}
              <div className="au6 stats-row" style={{
                display: 'flex', gap: 12,
               paddingTop: 16,
marginTop: 16,
borderTop: '1px solid rgba(234,88,12,0.15)',
              }}>
                {[
                  { n: '500+', l: 'Lives Changed' },
                  { n: '10+',  l: 'Years Active' },
                  { n: '3',    l: 'Programs' },
                ].map(s => (
                  <div key={s.l} className="stat-box">
                    <p className="h-font" style={{
                      fontSize: 24, fontWeight: 900,
                      color: '#ea580c', margin: 0, lineHeight: 1,
                    }}>{s.n}</p>
                    <p style={{
                      fontSize: 10, fontWeight: 600, color: '#92400e',
                      margin: '3px 0 0', letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                    }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ════ RIGHT IMAGE ════ */}
            <div className="img-col img-float" style={{ position: 'relative' }}>

              {/* Decorative bg block */}
              <div style={{
                position: 'absolute', top: 20, right: -10,
                width: '88%', height: '88%',
                background: 'rgba(234,88,12,0.07)',
                border: '1px solid rgba(234,88,12,0.10)',
                borderRadius: 20, zIndex: 0,
              }} />

              {/* Image */}
              <div style={{
                position: 'relative', zIndex: 1,
                borderRadius: 20, overflow: 'hidden',
                border: '2.5px solid rgba(234,88,12,0.18)',
                boxShadow: '0 12px 48px rgba(234,88,12,0.14)',
              }}>
                <div style={{
                  width: '100%', aspectRatio: '16/10',
                  backgroundImage: "url('/hero/1.webp')",
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  minHeight: 180,
                }} />
                {/* Overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top,rgba(180,60,10,0.80) 0%,transparent 100%)',
                  padding: '32px 16px 14px',
                }}>
                  <p style={{ color: '#fff', fontSize: 13, fontWeight: 700, margin: 0 }}>
                    Makkal Sevai Margam
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: 11, margin: '2px 0 0' }}>
                    Arrakattalai · Tamil Nadu
                  </p>
                </div>
              </div>

              {/* Badge — top left */}
              <div style={{
                position: 'absolute', top: -12, left: -12, zIndex: 2,
                background: '#fff',
                border: '1.5px solid rgba(234,88,12,0.18)',
                borderRadius: 12, padding: '8px 14px',
                boxShadow: '0 4px 16px rgba(234,88,12,0.12)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ fontSize: 18 }}>🪔</span>
                <div>
                  <p style={{
                    fontSize: 9, fontWeight: 800, color: '#ea580c',
                    margin: 0, letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}>Since 2010</p>
                  <p style={{ fontSize: 10, color: '#92400e', margin: 0, fontWeight: 500 }}>
                    Serving Community
                  </p>
                </div>
              </div>

              {/* Stat badge — bottom right */}
              <div style={{
                position: 'absolute', bottom: -14, right: -12, zIndex: 2,
                background: 'linear-gradient(135deg,#ea580c,#c2410c)',
                borderRadius: 12, padding: '10px 16px',
                boxShadow: '0 4px 16px rgba(234,88,12,0.38)',
                textAlign: 'center',
              }}>
                <p className="h-font" style={{
                  fontSize: 20, fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1,
                }}>500+</p>
                <p style={{
                  fontSize: 9, fontWeight: 700,
                  color: 'rgba(255,255,255,0.80)', margin: '2px 0 0',
                  letterSpacing: '0.10em', textTransform: 'uppercase',
                }}>Lives Changed</p>
              </div>

              {/* Spin ring */}
              <div style={{
                position: 'absolute', top: -16, right: -16, zIndex: 0,
                width: 48, height: 48, borderRadius: '50%',
                border: '1.5px dashed rgba(234,88,12,0.22)',
                animation: 'spin-slow 18s linear infinite',
              }} />
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <div style={{ background: 'linear-gradient(135deg,#ea580c,#c2410c)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="svc-grid">
            {[
              { icon: '🏗️', title: 'Building Construction', desc: 'Homes & temple infrastructure' },
              { icon: '🍱', title: 'Food Service',           desc: 'Feeding the hungry daily' },
              { icon: '📚', title: 'Education Aid',          desc: 'Supporting underprivileged' },
            ].map((s, i) => (
              <div key={s.title} className="svc-item b-font" style={{
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              }}>
                <span style={{
                  fontSize: 22, background: 'rgba(255,255,255,0.14)',
                  borderRadius: 10, padding: 8, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{s.icon}</span>
                <div>
                  <p style={{ color: '#fff', fontSize: 13, fontWeight: 800, margin: 0 }}>
                    {s.title}
                  </p>
                  <p style={{
                    color: 'rgba(255,255,255,0.68)', fontSize: 11,
                    margin: '2px 0 0', fontWeight: 500,
                  }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
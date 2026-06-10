"use client";

import React from 'react';
import Link from 'next/link';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

/* ── Diya SVG (same as Header) ── */
const DiyaIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="20" cy="10" rx="3" ry="5" fill="#FCD34D" opacity="0.9" />
    <ellipse cx="20" cy="11" rx="1.8" ry="3.5" fill="#F97316" />
    <ellipse cx="20" cy="12.5" rx="1" ry="2" fill="#FEF3C7" />
    <rect x="19.3" y="14" width="1.4" height="3" rx="0.7" fill="#92400E" />
    <path d="M10 20 Q10 17 20 17 Q30 17 30 20 L28 28 Q28 30 20 30 Q12 30 12 28 Z" fill="#F59E0B" />
    <path d="M12 21 Q12 19 20 19 Q28 19 28 21 L26.5 27 Q26.5 28.5 20 28.5 Q13.5 28.5 13.5 27 Z" fill="#FCD34D" />
    <path d="M28 21 Q33 20 34 22 Q33 25 28 24" fill="#F59E0B" stroke="#D97706" strokeWidth="0.5" />
    <rect x="13" y="29" width="14" height="3" rx="1.5" fill="#D97706" />
    <rect x="15" y="31" width="10" height="2" rx="1" fill="#92400E" />
    <circle cx="20" cy="7" r="1.2" fill="#FEF9C3" opacity="0.8" />
  </svg>
);

/* ── Theme tokens (mirrors Header) ── */
const T = {
  saffron:      '#ea580c',
  saffronDeep:  '#c2410c',
  gold:         '#d97706',
  goldLight:    '#fbbf24',
  navText:      '#1c0a00',
  navSubtle:    'rgba(146,64,14,0.45)',
  navMuted:     '#92400e',
  footerBg:     '#fdf6f0',
  border:       '#edd9c8',
};

/* ── Nav items from Header — kept identical ── */
const NAV_ITEMS = [
  {
    key: 'about', topText: 'LEARN', bottomText: 'ABOUT US',
    links: [
      { label: 'Mission & Vision', href: '/mission' },
      { label: 'Contact Us',       href: '/contact' },
    ],
  },
  {
    key: 'services', topText: 'OUR', bottomText: 'ACTIVITY',
    links: [
      { label: 'Temple Construction',     href: '/services/construction' },
      { label: 'Annadhanam (Free Meals)', href: '/services/annadhanam' },
      { label: 'Education Aid',           href: '/services/education' },
      { label: 'All Seva Programs',       href: '/programs' },
    ],
  },
  {
    key: 'impact', topText: 'SEE OUR', bottomText: 'IMPACT',
    links: [
      { label: 'Gallery & Media', href: '/gallery' },
      { label: 'Testimonials',    href: '/testimonials' },
    ],
  },
  {
    key: 'donate', topText: 'MAKE A', bottomText: 'DIFFERENCE',
    links: [
      { label: 'Donate Now',              href: '/donate' },
      { label: 'Sponsor a Seva',          href: '/sponsor-form' },
      { label: 'Fund Temple Construction', href: '/donate' },
      { label: 'Volunteer With Us',       href: '/volunteer' },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: '📘', label: 'Facebook',  href: 'https://facebook.com' },
  { icon: '🐦', label: 'Twitter',   href: 'https://twitter.com' },
  { icon: '📷', label: 'Instagram', href: 'https://instagram.com' },
  { icon: '▶️',  label: 'YouTube',  href: 'https://youtube.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full" style={{ background: T.footerBg }}>

      {/* Top gradient accent — matches Header scroll bar */}
      <div style={{
        height: 3,
        background: `linear-gradient(90deg,${T.saffron},${T.goldLight},${T.gold})`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">

          {/* ── LEFT: Brand + Contact + Social ── */}
          <div className="flex flex-col gap-6">

            {/* Logo — identical markup to Header */}
            <Link href="/"
              aria-label="Uthamar Thiru Kovil Arrakattalai Makkal Sevai Margam"
              className="flex items-center gap-3 group w-fit"
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 12,
                background: 'rgba(234,88,12,0.08)',
                border: '1.5px solid rgba(234,88,12,0.20)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 300ms cubic-bezier(0.34,1.56,0.64,1), background 200ms',
              }} className="group-hover:scale-105 group-hover:-rotate-2">
                <DiyaIcon size={30} />
              </div>
              <div style={{ lineHeight: 1.25 }}>
                <p style={{ fontWeight: 900, fontSize: 15, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>
                  <span style={{ color: T.navText }}>Uthamar Thiru Kovil </span>
                  <span style={{ color: T.saffron }}>Arrakattalai</span>
                </p>
                <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: T.gold, margin: 0 }}>
                  Makkal Sevai Margam
                </p>
              </div>
            </Link>

            {/* Tagline */}
            <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, maxWidth: 260 }}>
              Uthamar Thiru Kovil's service arm — building temples, feeding the hungry,
              and funding futures for poor children through faith-driven compassion.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { Icon: Mail,   href: 'mailto:info@makalsevai.org', text: 'info@makalsevai.org' },
                { Icon: Phone,  href: 'tel:+914412345678',          text: '+91 44 1234 5678' },
              ].map(({ Icon, href, text }) => (
                <a key={href} href={href}
                  className="hover:!text-orange-600 transition-colors"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', fontSize: 13, color: '#6b7280' }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                    background: 'rgba(234,88,12,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={13} style={{ color: T.saffron }} />
                  </div>
                  {text}
                </a>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#6b7280' }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 8, flexShrink: 0, marginTop: 2,
                  background: 'rgba(234,88,12,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <MapPin size={13} style={{ color: T.saffron }} />
                </div>
                <span>Arrakattalai,<br />Tamil Nadu — 629 702</span>
              </div>
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: 8, paddingTop: 4 }}>
              {SOCIAL_LINKS.map(({ icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:-translate-y-0.5 transition-all duration-200"
                  style={{
                    width: 34, height: 34, borderRadius: 8, fontSize: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(234,88,12,0.08)',
                    border: '1px solid rgba(234,88,12,0.15)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = T.saffron)}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(234,88,12,0.08)')}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Nav columns — same keys as Header ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.key}>
                {/* Column heading — mirrors NavTrigger two-line style */}
                <div style={{ marginBottom: 14 }}>
                  <p style={{
                    fontSize: 9, fontWeight: 800, letterSpacing: '0.22em',
                    textTransform: 'uppercase', color: T.navSubtle, margin: 0,
                  }}>
                    {item.topText}
                  </p>
                  <p style={{
                    fontSize: 13, fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '-0.01em', color: T.navText, margin: '3px 0 8px',
                  }}>
                    {item.bottomText}
                  </p>
                  {/* Underline gradient — mirrors NavTrigger hover bar */}
                  <div style={{
                    width: 28, height: 2, borderRadius: 2,
                    background: `linear-gradient(90deg,${T.saffron},${T.goldLight})`,
                  }} />
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {item.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}
                        className="group flex items-center gap-1.5 hover:!text-orange-600 transition-colors"
                        style={{ fontSize: 12, fontWeight: 600, color: '#6b7280', textDecoration: 'none', letterSpacing: '0.03em' }}
                      >
                        {/* Animated dash — mirrors DropdownLink in Header */}
                        <span style={{
                          display: 'inline-block', width: 0, height: 1.5, borderRadius: 2, flexShrink: 0,
                          background: T.saffron, transition: 'width 250ms ease',
                        }} className="group-hover:!w-2.5" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Newsletter ── */}
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${T.border}` }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: T.navText, display: 'flex', alignItems: 'center', gap: 8, margin: 0 }}>
                <DiyaIcon size={18} />
                Stay Updated
              </h3>
              <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 4 }}>
                Get the latest news and seva stories from Makal Sevai Margam.
              </p>
            </div>
            <div style={{ display: 'flex', width: '100%', maxWidth: 360 }}>
              <input type="email" placeholder="Enter your email"
                style={{
                  flex: 1, padding: '10px 14px', fontSize: 13, outline: 'none',
                  background: '#fff', border: `1px solid ${T.border}`,
                  borderRight: 'none', color: T.navText,
                  borderRadius: '8px 0 0 8px',
                }}
              />
              <button style={{
                padding: '10px 20px', fontSize: 11, fontWeight: 800,
                textTransform: 'uppercase', letterSpacing: '0.08em',
                color: '#fff', border: 'none', cursor: 'pointer', flexShrink: 0,
                background: `linear-gradient(135deg,${T.saffron},${T.saffronDeep})`,
                borderRadius: '0 8px 8px 0',
                boxShadow: '0 2px 10px rgba(234,88,12,0.30)',
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ marginTop: 28, paddingTop: 22, borderTop: `1px solid ${T.border}` }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: 10, color: '#9ca3af', margin: 0 }}>
            © {currentYear} Makkal Sevai Margam · Uthamar Thiru Kovil, Arrakattalai. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Sitemap'].map(label => (
              <a key={label} href="#"
                className="hover:text-orange-600 transition-colors"
                style={{ fontSize: 10, color: '#9ca3af', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}